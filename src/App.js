//Import route
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import Antd
import 'antd/dist/antd.min.css'
import { Button } from 'antd';

//Import route compontents
import Layout from '@/pages/layout/layout'
import Login from '@/pages/login/login'

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
