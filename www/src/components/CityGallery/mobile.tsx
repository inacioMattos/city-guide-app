import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

interface Props {
  photos: string[]
}

export default function CityGalleryMobile({ photos }: Props) {
  return (
    <Carousel>
      <CarouselContent>
        {photos.map(url => (
          <CarouselItem>
            <img src={url}
              className="aspect-video h-[300px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-[-23px]" variant="ghost" />
      <CarouselNext className="right-[-23px]" variant="ghost"/>
    </Carousel>
  )
}