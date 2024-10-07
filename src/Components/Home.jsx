import React from 'react'
import '../assets/bg.png'
import  Button  from '../Layout/Button'
const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/bg1.png')] bg-cover bg-no-repeat ">
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className= 'font-semibold text-6xl text-backgroundColor '>Celebrate Your Every Yummy Bite</h1>
            <p className='text-backgroundColor'>Try out the fresh and tasty Grilled Chicken online in Chennai! Chennai, a city known for its diverse culinary offerings, boasts a variety of restaurants that specialize in mouthwatering meals. From flavorful curries to savory fried dishes, there's something for everyone. </p>
        
        <div className='lg:pl-44'>
            <Button title='Order Now'/>
        </div>
        </div>
    </div>
  )
}

export default Home