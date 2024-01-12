import { React } from 'react'
import { styles } from "../styles";
import { insta_icon } from "../assets"

const Footer = () => {
  return   <footer className="bg-primary/80 text-[18px]">
    
 <div className="flex items-center justify-center border-b-2 p-6 dark:border-secondary " />
  {/* <!-- Main container div: --> */}

  <div className="flex justify-center p-6">
      <div className="grid lg:gap-80 lg:grid-cols-2 ">
        <div className="mb-6 md:mb-0 ">
          <p className="font-bold  pink-text-gradient">Maneki-Neko </p>
          <p className='mb-6'>( 招き猫 , 'beckoning cat' )</p>

          <p className="justify-center text-left">
          A common Japanese figurine <br />believed to bring its owner good luck.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h5 className="lg:mb-6 font-bold justify-end lg:text-right ">Contact Us</h5>

          <p className="mb-4 justify-center lg:text-right">
            <p>London, United Kingdom</p>
            <p>info@manekimanagement.com</p> 
          </p>
          <div className='flex lg:justify-end sm:justify-normal'>
            <a href='https://www.instagram.com/manekimanagement?igsh=MWVqNnRvaGRobWhlaA%3D%3D&utm_source=qr' target='_blank cursor-pointer '>
            <img src={insta_icon} alt='logo' className='w-9 h-9' />
            </a>
          </div>
        </div>
      </div>
</div>

  {/* <!--Copyright section--> */}
 
  <div className="p-6 text-center bg-primary/80">
    <p className='text-white flex justify-center'>
        <span className=''> 2024 © Copyright - </span>&nbsp;
        <span className='pink-text-gradient font-bold'>Maneki</span> &nbsp;
        <span className='sm:block hidden font-bold'> | Management </span>
    </p>
  </div>
  
</footer>
}

export default Footer;
