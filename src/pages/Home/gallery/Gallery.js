import React from 'react'
import gallery1 from '../../../assets/gallery1.jpg'
import gallery2 from '../../../assets/gallery2.png'
import gallery3 from '../../../assets/gallery3.png'
import gallery4 from '../../../assets/gallery4.png'
import gallery5 from '../../../assets/gallery5.png'

const Gallery = () => {
  return (
    <div className="bg-black pb-[5rem] lg:h-[800px]">
      <div className="text-center py-[7rem]">
        <p className="text-blue-500 text-2xl py-3">gallery</p>
        <h1 className="text-white text-4xl font-bold">INSTRAGRAM</h1>
      </div>

      <div className="  ">
          <div className=" grid lg:grid-cols-5 md:grid-cols-3 pl-[5.5rem]">
        <div className="  w-96 bg-black  w-[247px] h-[320px]rounded-none">
          <figure>
            <img className="w-[247px] h-[320px]" src={gallery1} alt="Shoes" />
          </figure>
        </div>
        <div className="  w-96 bg-black  w-[247px] h-[320px]rounded-none">
          <figure>
            <img className="w-[247px] h-[320px]" src={gallery2} alt="Shoes" />
          </figure>
        </div>
        <div className="  w-96 bg-black  w-[247px] h-[320px]rounded-none">
          <figure>
            <img className="w-[247px] h-[320px]" src={gallery3} alt="Shoes" />
          </figure>
        </div>
        <div className="  w-96 bg-black  w-[247px] h-[320px]rounded-none">
          <figure>
            <img className="w-[247px] h-[320px]" src={gallery4} alt="Shoes" />
          </figure>
        </div>
        <div className="  w-96 bg-black w-[247px] h-[320px]rounded-none">
          <figure>
            <img className="w-[247px] h-[320px]" src={gallery5} alt="Shoes" />
          </figure>
        </div>
      </div>
      
      
     
      
      </div>
       
    </div>
  )
}

export default Gallery
