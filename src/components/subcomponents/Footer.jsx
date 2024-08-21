import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export default function Footer() {
  return (
    <footer className='w-full text-[13px] flex-col flex justify-center items-center  text-white bg-black h-[400px]'>
      <div className='flex w-[80%] h-[90%] justify-between p-[40px] items-center'>
        <div className='flex  h-full flex-col justify-start gap-[20px]'>
          <h1 className='font-bold text-2xl'>Ecommerce</h1>
          <p className='font-semibold text-xl'>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className='w-[300px] flex items-center h-[50px] rounded-md bg-black border-2 border-white'>
              <input type="text" className='h-full w-full px-[20px] bg-transparent' placeholder='Enter your email' />
             <button className='px-[10px]'><SendOutlinedIcon/></button> 
          </div>
        </div>

        <div className='flex flex-col justify-start gap-[20px] h-full'>
          
          <p className='font-semibold text-xl'>Support</p>
          <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>

         
        </div>

        <div className='flex flex-col justify-start gap-[20px] h-full'>
          
          <p className='font-semibold text-xl'>Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
         
        </div>


        <div className='flex flex-col justify-start gap-[20px] h-full'>
          
          <p className='font-semibold text-xl'>Quick links</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
       
         
        </div>


        <div className='flex flex-col justify-start gap-[20px] h-full'>
          
          <p className='font-semibold text-xl'>Follow us</p>
          <p className='flex gap-[10px] items-center'><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>Instagram</p>
          <p  className='flex gap-[10px] items-center'><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/facebook--v1.png" alt="facebook--v1"/>Facebook</p>
          <p  className='flex gap-[10px] items-center'><img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/twitter--v1.png" alt="twitter--v1"/>Twitter</p>
      
       
         
        </div>

      </div>
      <div className='h-[10%] border-t-1 flex w-full items-center justify-center border-gray-700'>
        <p className='text-gray-600'>&amp; Copyright ecommerce 2024. All rights reserved</p>
      </div>
    </footer>
  )
}
