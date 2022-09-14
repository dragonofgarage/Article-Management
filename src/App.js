//Import route
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import Antd
import 'antd/dist/antd.min.css'

//Import route compontents
import Layout from '@/pages/layout/index'
import Login from '@/pages/login/index'

//Import AuthComponent compontents
import { AuthComponent } from '@/components/AuthComponent'

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={
            <AuthComponent >
              <Layout />
            </AuthComponent>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
