import { Route, Routes } from 'react-router-dom'
import Login from './App/Login/Login'
import Signup from './App/Signup/Signup'
import AuthRoute from './App/Config/AuthRoute'
import ProtectedRoute from './App/Config/ProtectedRoute'
import Home from './App/Home/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Notfound from './App/Config/404'
import About from './App/About/About'
import Videos from './App/Videos/Videos'
import Library from './App/Library/Library'
import Contact from './App/Contact/Contact'
import About2 from './App/About/About2'
import Home2 from './App/Home/Home2'
import Home1 from './App/Home/Home1'
import { Switch } from '@mui/material'
function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          

        <Route path='/home' element={<Home />} />
          <Route path='/home/home1' element={<Home1 />} />
          <Route path='/home/home2' element={<Home2 />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/about/about1' element={<About />} />
          <Route path='/about/about2' element={<About2 />} />

          <Route path='/videos' element={<Videos />} />
          <Route path='/library' element={<Library />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default App
