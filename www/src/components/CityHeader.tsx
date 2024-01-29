import CityGallery from "./CityGallery";
import { Skeleton } from "./ui/skeleton";

interface Props {
  name?: string;
  description?: string;
  photos?: string[];
}

export default function CityHeader({ description, name, photos }: Props) {
  return (
    <div>
      {name ? <>
        <span className="uppercase text-yellow-400
          italic font-bold text-sm
        ">
          bem-vindo à
        </span>
        <h1 className="text-6xl mb-2">{name}</h1>  
      </> : <Skeleton className="w-[220px] h-12" />}

      {photos ? <>
        <CityGallery photos={photos} />
      </> : <></>}
      
      {description ? <>
        <p className="text-zinc-400 mt-4">
          {description}
        </p>
      </> : <div className="flex flex-col gap-1">
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-1/3 h-5" />
      </div>}
      
    </div>
  )
}