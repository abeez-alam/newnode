import React from 'react'
import image1 from '../assets/Post/bedroom-1285156_640.jpg'
import image2 from '../assets/Post/hotel-748185_640.jpg'
import image3 from '../assets/Post/hotel-room-5858067_640.jpg'
import image4 from '../assets/Post/lounge-2930070_640.jpg'

const DreamVacation = () => {
  
   const destintions = [
    {image:image1 , name:"australia", properties:2234},
    {image:image2 , name:"pakistan", properties:1134},
    {image:image3 , name:"turkey", properties:3334},
    {image:image4 , name:"canada", properties:4434},
   ]
   return (
    <div className=' flex flex-col mt-14'>
      <h1 className='text-3xl font-semibold mb-2 ml-[12rem]'>Enjoy your dream vaction</h1>
      <p className='text-gray-600 mb-10 max-w-xl ml-[12rem]'>Let me know if you'd like to customize the plan for 
        your group or location or get a printable checklist for packing.</p>
        <div className='flex gap-4 justify-center'>
          {destintions.map((destination, index)=>(
            <div key={index} className='text-center'>
              <img 
              src={destination.image}
              alt= {destination.name}
              className='w-[18rem] h-48 object-cover rounded-lg'
              />
              <h2 className='text-lg font-semibold mt-2'> {destination.name}</h2>
              <p className='text-gray-500'>{destination.properties}</p>
            </div>
          ))}

        </div>
    </div>
   )
  
};

export default DreamVacation
