
import Navbar from './Components/Navbar/Navbar'
import Jobs from './Components/JobsDiv/Jobs'
import Search from './Components/SearchDiv/Search'
import Footer from './Components/FooterDiv/Footer'
import Value from './Components/ValueDiv/Value'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>

    </div>
  )
}

export default App