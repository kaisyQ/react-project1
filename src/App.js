import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { getIsFetching } from './redux/selectors/auth-selector'
import { CheckMe } from './redux/auth-reducer'

import './App.scss'

import NavBar from './components/NavBar/NavBar'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import GlobalChat from './components/GlobalChat/GlobalChat'

import DialogContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import AuthContainer from './components/Auth/AuthContainer'
import Preloader from './components/Common/Preloader/Preloader'


class App extends React.Component {

    render () {
        if (this.props.isFetching) return <Preloader />
        return <>
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <NavBar />
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/' element={ <News />} />
                            <Route path='/Dialogs' element={ < DialogContainer /> } />
                            <Route path='/Dialogs/:id' element={ < DialogContainer /> } />
                            <Route path='/Profile' element={ <ProfileContainer />} />
                            <Route path='/Profile/:id' element={ <ProfileContainer /> } />
                            <Route path='/News' element={ <News /> } />
                            <Route path='/Settings' element={ <Settings /> } />
                            <Route path='/GlobalChat' element={ <GlobalChat /> } />
                            <Route path='/Users' element={ <UsersContainer /> } />
                            <Route path='/Auth/*' element={ <AuthContainer /> } />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    }
}

const mapStateToProps = (state) => ({ isFetching: getIsFetching(state) })
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps) (App)