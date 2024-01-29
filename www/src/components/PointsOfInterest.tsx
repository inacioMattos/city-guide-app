import PointOfInterest, { PointsOfInterest } from "./PointOfInterest"

interface Props {
  points_of_interest?: PointsOfInterest[]
}

export default function PointsOfInterest({ points_of_interest }: 
  Props) {
    return (
      <div className="grid md:grid-cols-2 gap-2">
        {Array.isArray(points_of_interest) && (
          <>
            {points_of_interest.map(poi => (
              <PointOfInterest
                name={poi.name}
                description={poi.description}
                tags={poi.tags}
                photos={poi.photos}
              />
            ))}
          </>
        )}
      </div>
    )
  }