import { Route, Routes } from 'react-router-dom'
import Archive from './Pages/Archive'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Post from './Pages/Post'
import SideBar from './Components/SideBar'

function App() {

  return (
    <div className='flex font-josefin justify-center mx-8 '>
      <div className='flex-[1] w-full h-screen bg-green-100 '>
        <SideBar />
      </div>
      <div className='flex-[9]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/create" element={<Create />} />
          <Route path="/allposts/posts" element={<Post />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
