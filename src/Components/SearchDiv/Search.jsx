import { AiOutlineSearch } from 'react-icons/ai';
import coverImage from '../../Assets/images/cover.jpg'; // Import the image properly
import './Search.css';
const Search = () => {
  return (
    <div className='searchDiv grid gap-10  p-[3rem]'>
      <form action="">
        <div
          className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] p-5 shadow-lg shadow-greyIsh-700'
          style={{ backgroundColor: ' #2F4794' }} // Apply blue color directly
        >
          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input
              type="text"
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search Jobs Here...'
            />
          </div>
          <button className='bg-white text-blue-500 border border-blue-500 h-full p-5 px-10 rounded-[10px] cursor-pointer hover:bg-blue-500 hover:text-white'>
            Search
          </button>
        </div>

        <div className='secDiv flex items-center gap-2 justify-center'>
          <div className='singleSearch flex place-items-center gap-2'>
            <label htmlFor="relevance" className='text-[white] font-semibold'>Sort by: </label>
            <select name="" id="relevance" className='bg-transparent rounded-[3px] px-1 py-1'>
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts With</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="type" className='text-[white] font-semibold'>Type: </label>
            <select name="" id="type" className='bg-transparent rounded-[3px] px-4 py-1'>
              <option value="">Full Time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
              <option value="">Part-Time</option>
            </select>
          </div>

          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="level" className='text-[white] font-semibold'>Level: </label>
            <select name="" id="level" className='bg-transparent rounded-[3px] px-4 py-1'>
              <option value="">Senior</option>
              <option value="">Junior</option>
              <option value="">Student</option>
              <option value="">Advocate</option>
            </select>
          </div>

          <span className="text-[white] cursor-pointer">Clear All</span>
        </div>
      </form>


    </div>
  )
}

export default Search
