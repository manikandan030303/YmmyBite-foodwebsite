import React from 'react'
import DishCard from '../Layout/DishCard'
import img1 from '../assets/card1.jpg'
import img2 from '../assets/card2.jpg'
import img3 from '../assets/card3.webp'
import img4 from '../assets/card4.webp'
import img5 from '../assets/card5.jpg'
import img6 from '../assets/card6.jpg'
const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold pt-5 pb-5'>Our Dishes</h1>
        <div className='flex flex-wrap gap-14 justify-center'>
        <DishCard img={img1} title="Rosted Fry" price="₹99.0" />
        <DishCard img={img2} title="Rosted Fry" price="₹99.0" />
        <DishCard img={img3} title="Rosted Fry" price="₹99.0" />
        <DishCard img={img4} title="Rosted Fry" price="₹99.0" />
        <DishCard img={img5} title="Rosted Fry" price="₹99.0" />
        <DishCard img={img6} title="Rosted Fry" price="₹99.0" />
       
        </div>
       
    </div>
  )
}

export default Dishes