import { reasonStream } from 'tryreason'

interface City {
  name: string;
  description: string;
  points_of_interest: {
    name: string;
    description: string;
    tags: string[];
  }[];
}

async function getImages(query: string, limit: number): Promise<string[]> {
  const url = `https://unsplash.com/napi/search/photos\?query\=${query}&per_page=${limit}`
  const res = await fetch(url, {
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error('deu erro')
  }

  const body = await res.json()
  return body.results.map(r => r.urls.small)
}

export async function* POST(req: Request) {
  const { city } = await req.json()

  const prompt = `Me fale sobre ${city}. POR FAVOR RETORNE *SEMPRE EM PORTUGUES*. NÃO SE ESQUEÇA DISSO!`

  for await (const cityInfo of reasonStream<City>(prompt, { autoStream: true })) {
    if (cityInfo.name.done && !cityInfo.photos) {
      const cityPhotos = await getImages(cityInfo.name.value, 5)
      cityInfo.photos = cityPhotos
    }

    if (Array.isArray(cityInfo.points_of_interest.value)) {
      for (const poi of cityInfo.points_of_interest.value) {
        if (poi?.value && !poi.value.photos && poi?.value?.name?.done) {
          poi.value.photos = await getImages(`${cityInfo.name.value} ${poi.value.name.value}`, 1)
        }
      }
    }
  }
}