import React from 'react'
import image1 from '../assets/Post/bedroom-1285156_640.jpg'
import image2 from '../assets/Post/hotel-748185_640.jpg'
import image3 from '../assets/Post/hotel-room-5858067_640.jpg'

const NextTrip = () => {
  const trip =[
    {
      image: image1,
      title:"sydney is great",
      description:"every thing is great"
    },
     {
      image: image2,
      title:"sydney is great",
      description:"every thing is great"
    },
     {
      image: image3,
      title:"sydney is great",
      description:"every thing is great"
    },
  ];
  return (
    <div className='max-w-7x1 mx-auto mt-14 px-4'>
      <h1 className='text-3x1 font-semibold mb-6 ml-[10px]'>
        Get inpiration for your next trip 
      </h1>
      <div className='flex flex-wrap gap-6 justify-center mt-14'>
        {trip.map((trip, index)=>(
          <div 
          key={index}
          className='relative w-[24rem] h-[15rem] rounded-lg overflow hidden shadow-lg'
          >
            <img
             src={trip.image} 
             alt={trip.title}
             className='w-full h-full object-cover'
             />
             <div className='absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end'>
              <h1 className='text-white text-lg font-semibold'>{trip.title}</h1>
              <p className='text-gray-200 text-sm'>{trip.description}</p>
             </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default NextTrip
