import logo1 from '../../Assets/logo1.png';
import './Jobs.css';

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptilaboriosam!',
    company: 'Succedo Mortgage.'
  },
  {
    id: 2,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptilaboriosam!',
    company: 'Succedo Mortgage.'
  },
  {
    id: 3,
    image: logo1,
    title: 'Loan Officer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptilaboriosam!',
    company: 'Succedo Mortgage.'
  },
  {
    id: 4,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptilaboriosam!',
    company: 'Succedo Mortgage.'
  },
  {
    id: 5,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corruptilaboriosam!',
    company: 'Succedo Mortgage.'
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="top-demands">
        <h1 className="top-demands-title">
          <span className="top-demands-red">TOP</span> <span className="top-demands-blue">DEMANDS</span>
        </h1>
        <div className="top-demands-line"></div>
      </div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, title, desc }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-xl">
              <div className="gradient-top rounded-t-[10px]">
                <div className="gradient-top rounded-t-[10px] text-center">
            <br></br>
                  <h1 className='text-[16px] font-semibold text-white'>{title}</h1>
                </div>
              </div>
              <div className="description-container mt-4">
                <p className='text-[13px] text-[#959595] border-t-[2px] pt-[20px]'>
                  <h5 className="text-[#373737]">Job Description.:</h5>
                  {desc}
                </p>
              </div>
              <button className='apply-button mt-4'>
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
