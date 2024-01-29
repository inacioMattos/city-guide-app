import CityGalleryDesktop from "./desktop"
import CityGalleryMobile from "./mobile"

interface Props {
  photos: string[]
}

export default function CityGallery({ photos }: Props) {
  return (
    <>
      <div className="hidden md:flex">
        <CityGalleryDesktop photos={photos} />
      </div>
      <div className="flex md:hidden">
        <CityGalleryMobile photos={photos} />
      </div>
    </>
  )
}