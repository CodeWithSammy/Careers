

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem'>
      <div className='logoDiv'>
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Careers</strong>
        </h1>
      </div>
      <div className="menu flex gap-8">
        <div className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</div>
      </div>
    </div>
  )
}

export default Navbar