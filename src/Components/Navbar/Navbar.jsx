

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[1.5rem]'>
      <div className='logoDiv'>
        <h1 className="logo text-[25px] text-blueColor">
          <strong  className="text-red-600">CAREERS</strong> <strong className="text-blue-900">AT SUCCEDO</strong>
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor p-4">Jobs</li>
        
        <li className="menuList text-[#6f6f6f] hover:text-blueColor p-4">About Us</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor p-4">Contact</li>
      
        <li className="menuList text-white  bg-blue-800 rounded-lg p-4">Register</li>
      </div>
    </div>
  )
}

export default Navbar