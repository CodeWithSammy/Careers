import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-start justify-center' style={{ backgroundColor: '#2F4794' }}>
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>CAREERS</strong>
            <strong>AT SUCCEDO</strong>
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div>
        <span className='text-[18px] text-white opacity-[.7] pb-[1rem] block'>TERMS OF SERVICE</span>
        <span className='text-[18px] text-white opacity-[.7] pb-[1rem] block'>PRIVACY POLICY</span>
      </div>

      <div>
        <h3 className='text-[18px] text-white pb-[1.5rem]'>Join Our Mailing List</h3>
        <form className='grid gap-2'>
          <input type='text' placeholder='Full Name' className='p-2 rounded-md'/>
          <input type='email' placeholder='Email' className='p-2 rounded-md'/>
          <button type='submit' className='p-2 bg-blue-600 text-white rounded-md'>Subscribe</button>
        </form>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508381!2d144.95565141515815!3d-37.81732797975155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f4e6eae6ea0!2sEnvato!5e0!3m2!1sen!2sau!4v1483769442638" width="300" height="200" frameborder="0" style={{border:0}} allowfullscreen></iframe>
        <p className='text-[14px] text-white opacity-[.7] pt-[0.5rem]'>Company venue <br /> 603 FAke st, Melborne</p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Contact Info</span>
        <div>
          <small className='text-[14px] text-white'>stridere@gmail.com</small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
