import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function page() {
  return (

    <div className='w-[1500px] text-[13px] h-[700px] flex items-center justify-center'>
      <div className='flex h-[500px] items-center shadow-md rounded-lg justify-center gap-[40px] p-[20px] w-full'>

        <div className='w-[300px] h-full flex flex-col gap-[20px]'>

          <div className='p-[20px] flex flex-col h-[50%] gap-[30px] border-b border-b-gray-100'>

            <h1 className='text-md font-semibold flex items-center gap-[20px]'><CallIcon className='text-white bg-[crimson] p-[3px] w-[20px] h-[20px] rounded-full' /><p>Call to us</p></h1>


            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>

          </div>


          <div className='p-[20px] flex flex-col h-[50%] gap-[30px] border-b border-b-gray-100'>

            <h1 className='text-md font-semibold flex items-center gap-[20px]'><EmailIcon className='text-white bg-[crimson] p-[3px] w-[20px] h-[20px] rounded-full' /><p>Write to us</p></h1>


            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>

          </div>

        </div>

        <div className='w-[60rem] h-full flex flex-col gap-[20px] p-[20px]'>
          <div className='w-full h-[20%] gap-[20px] flex justify-between items-center'>
            <input type="text" placeholder='Your Name' className='w-full bg-gray-200 p-[10px] rounded-lg' />
            <input type="text" placeholder='Your Email' className='w-full bg-gray-200 p-[10px] rounded-lg' />
            <input type="text" placeholder='Your Phone' className='w-full bg-gray-200 p-[10px] rounded-lg' />
          </div>

          <div className='w-full h-[70%]'>
            <textarea name="description" id="" placeholder='Your message' className='w-full h-full bg-gray-200 p-[10px] rounded-lg outline-none'></textarea>
          </div>

          <div className='w-full flex items-center justify-end'>
            <button className='w-[200px] bg-[crimson] text-white rounded-lg h-[45px]'>Send Message</button>
          </div>
        </div>


      </div>

    </div>
  )
}
