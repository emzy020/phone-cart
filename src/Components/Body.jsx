import React from 'react'
import Button from '../Components/Button'
import { Phone } from '../Data/Phone'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';

function Body() {
  const navigate = useNavigate();
  return (
    <>
    <Carousel />
     <div className='cart-main'>
        {Phone.map(({id,image,name,price})=>(
            <div className='card'
            key={id}
            >
                <img className='card-img' src={image} alt={name} />
                <h3>{name}</h3>
                <p>${price}</p>
                <Button 
                
                click={()=> navigate(`/${id}`)}
                text="add to cart"
                />

            </div>
        ))}
     </div>
    </>
  )
}

export default Body
