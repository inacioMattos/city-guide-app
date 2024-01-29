import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export interface PointsOfInterest {
  name?: string;
  description?: string;
  tags?: string[];
  photos?: string[];
}

type Props = PointsOfInterest

export default function PointOfInterest({ description, name, tags, photos }: Props) {
  return (
    <Card>
      <CardHeader>
        {photos && (
          <img
            src={photos[0]}
            alt={`Foto do local ${name}`}
            className="aspect-video object-cover
              mb-2 rounded-t-lg border-b-[1px]
              border-[rgba(255,255,255,0.2)]
            "
          />
        )}

        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-zinc-400 mt-4">{description}</p>
      </CardContent>

      <CardFooter className="flex gap-1">
        {tags?.map(tag => (
          <Badge className="capitalize">{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  )
}