import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { appIsAuthThnk } from './redux/app-reducer'

import './App.scss'

import NavBar from './components/NavBar/NavBar'
import News from './components/News/News'
import Settings from './components/Settings/Settings'

import DialogContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Login/LoginContainer'
import Preloader from './components/Common/Preloader/Preloader'


class App extends React.Component {

    componentDidMount () {
        this.props.appIsAuthThnk()
    }

    render () {
        if (this.props.isFetching) return <Preloader />
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <NavBar />
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/' element={ <News />} />
                            <Route path='/Dialogs' element={ < DialogContainer /> } />
                            <Route path='/Profile' element={ <ProfileContainer />} />
                            <Route path='/Profile/:id' element={ <ProfileContainer /> } />
                            <Route path='/News' element={ <News /> } />
                            <Route path='/Settings' element={ <Settings /> } />
                            <Route path='/Users' element={ <UsersContainer /> } />
                            <Route path='/Login/*' element={ <LoginContainer /> } />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        ) 
    }
}

const mapStateToProps = (state) => ({ isFetching: state.app.isFetching })

const mapDispatchToProps = { appIsAuthThnk }

const AppContainer = connect(mapStateToProps, mapDispatchToProps) (App)

export default AppContainer