import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar/NavBar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'

import DialogContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavBar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs' element={ < DialogContainer />} />
                        <Route path='/Profile' element={<ProfileContainer />} />
                        <Route path='/Profile/:id' element={<ProfileContainer />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                        <Route path='/Users' element={<UsersContainer />} />
                        <Route path='/Login/*' element={ <Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App