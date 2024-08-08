// Navbar.jsx
import './Navbar.css'; // Make sure to import your CSS file

const Navbar = () => {
  return (
    <div className="navBar-container">
    <div className='navBar flex justify-between items-center p-3 mx-auto'>
      <div className='logoDiv'>
        <h1 className="logo text-2xl"> 
          <strong className="text-red-600">CAREERS</strong> <strong className="text-blue-600">AT SUCCEDO</strong>
        </h1>
      </div>

      <div className="menu flex items-center gap-8">
        <li className="menuList text-[#333] hover:text-blue-600">Home</li>
        <li className="menuList text-[#6f6f6f] hover:text-blue-600">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blue-600">About Us</li>
        <li className="menuList text-[#6f6f6f] hover:text-blue-600">Contact</li>
        <li className="menuList">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Register</button>
        </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
