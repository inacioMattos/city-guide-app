interface Props {
  photos: string[]
}

export default function CityGalleryDesktop({ photos }: Props) {
  function getRadii(index: number) {
    switch(index) {
      case 2: {
        return '0 0.8rem 0 0'
      }

      case 4: {
        return '0 0 0.8rem 0'
      }

      default: {
        '0 0 0 0'
      }
    }
  }

  return (
    <div className="
      grid grid-cols-2 grid-rows-1 aspect-video w-full
      gap-1
    ">
      <img src={photos[0]}
        className="object-cover h-full w-full
          rounded-l-lg
        "
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        {photos.map((url, index) => {
          if (index === 0) return undefined

          return (
            <img src={url}
              className="object-cover h-full w-full"
              style={{
                borderRadius: getRadii(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}