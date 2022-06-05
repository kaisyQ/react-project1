import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import DialogContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App