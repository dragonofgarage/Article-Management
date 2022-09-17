//Import route
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import Antd
import 'antd/dist/antd.min.css'

//Import route compontents
import Layout from '@/pages/layout/index'
import Login from '@/pages/login/index'
import Home from './pages/Home'
import Article from './pages/Article'
import Publish from './pages/Publish'

//Import AuthComponent compontents
import { AuthComponent } from '@/components/AuthComponent'

import { HistoryRouter, history } from './utils/history'


const App = () => {
  return(
    <HistoryRouter history={history}>
      <div className="App"> 
        <Routes>
          <Route path="/" element={
            <AuthComponent >
              <Layout />
            </AuthComponent>
          } >
          
            <Route index element = {<Home/>} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish/>} />
          
          </Route>
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </HistoryRouter>
    
  )
}

export default App;
