import { Route, BrowserRouter, Switch } from 'react-router-dom'

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
                    <Switch>
                        <Route path='/Dialogs' component={DialogContainer} />
                        <Route path='/Profile/' component={ProfileContainer} />
                        <Route path='/News' component={News} />
                        <Route path='/Music' component={Music} />
                        <Route path='/Settings' component={Settings} />
                        <Route path='/Users' component={UsersContainer} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App