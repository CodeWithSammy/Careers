import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

import './Footer.css';
const Footer = () => {
  return (
  
  <div className='footer p-[5rem] mb-4 rounded-[10px] gap-[4] grid grid-cols-2 m-auto items-start justify-center' style={{ backgroundColor: '#405085' }}>
  <div>
    <div className="logoDiv mb-12"> {/* Adjust the margin-bottom as needed */}
      <h1 className="logo text-white text-4xl flex font-poppins mt-[-30px]">
        <span className="careers mr-2"><strong>CAREERS</strong></span>
        <span className="atSuccedo"><strong>AT SUCCEDO</strong></span>
      </h1>
    </div>

    <div className='grid col-span-2'>
      <span className='divTitle text-[16px] font-semibold text-white block pb-[0.5rem]'>TERMS OF SERVICE</span>
      <span className='divTitle text-[16px] font-semibold text-white block'>PRIVACY POLICY</span>
   


        <div>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-transparent p-[8px] h-[35px] w-[35px] rounded-full text-white' />
            <BsFacebook className='bg-transparent p-[8px] h-[35px] w-[35px] rounded-full text-white' />
            <AiOutlineTwitter className='bg-transparent p-[8px] h-[35px] w-[35px] rounded-full text-white' />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Footer;
