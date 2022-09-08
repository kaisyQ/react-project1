import React from 'react'
import Users from "./Users"

class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(1)
    }
    
    getUsersToShow = (num) => {
        this.props.getUserAtNumPage(num, this.props.pageCount)
    }


    render () {
        return <>
            <Users {...this.props} getUsersToShow={this.getUsersToShow} />  
        </>
    }
}

export default UsersAPIContainer