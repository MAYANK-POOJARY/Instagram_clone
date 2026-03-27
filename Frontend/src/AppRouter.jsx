import {BrowserRouter, Route, Routes} from 'react-router'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>This is the Home Page</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
