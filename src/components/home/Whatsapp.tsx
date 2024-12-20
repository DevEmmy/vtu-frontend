import React from 'react'
import { RiWhatsappFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Whatsapp = () => {
  return (
    <Link to="https://wa.me/+2348147056325" className='flex items-center gap-2 bg-green-500 text-white px-4 py-4 rounded-full fixed bottom-24 right-5 font-bold shadow-lg'><RiWhatsappFill size={30}/> Whatsapp Us!</Link>
  )
}

export default Whatsapp