'use client'

import CityHeader from '@/components/CityHeader'
import Menu from '@/components/Menu'
import PointsOfInterest from '@/components/PointsOfInterest'
import { useEffect } from 'react'
import { useReason } from 'tryreason-react'

export default function TourPage({ searchParams }: any) {
  const { data, reason } = useReason('http://localhost:1704/tour')

  useEffect(() => {
    if (!searchParams.city || searchParams.city === '') {
      window.location.href = '/'
    }

    reason({
      method: 'POST',
      body: {
        city: searchParams.city
      }
    })
  }, [])

  return (
    <>
      <Menu currentCity={searchParams.city} />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[900px]">
          <CityHeader
            name={data.name}
            description={data.description}
            photos={data.photos}
          />

          <div className='mt-16'>
            <h2 className="text-4xl mb-4">Lugares que você não pode perder</h2>

            <PointsOfInterest
              points_of_interest={data.points_of_interest}
            />
          </div>
        </div>
      </div>
    </>
  )
}