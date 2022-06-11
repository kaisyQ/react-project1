import React from "react"

class ProfileInformation extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            status: !this.props.status || this.props.status === '' ? 'Write your status here' : this.props.status,
            statusOnFocus: false
        }
    } 
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            if (this.props.status) {
                this.setState({ status: this.props.status })    
            } else {
                 this.setState({ status: 'Write your status here'})
            }
        }
    }

    onStatusDoubleClick = (e) => {
        this.props.updateCurrentUserProfileStatus(this.state.status)
        this.setState({statusOnFocus: !this.state.statusOnFocus})
    }

    onStatusChange = (e) => {
        this.setState({status: e.target.value})
    }

    render = () => {
        return <div className="userAboutContainer">
        <div>
            <img src={this.props.profileInfo.photos.large} alt="" />
        </div>
        
        <div onDoubleClick={this.onStatusDoubleClick}>
            {
                !this.state.statusOnFocus
                    ?   <span>{this.state.status}</span>
                    :   <input type='text' onChange={this.onStatusChange} value={this.state.status}/>
            }
        </div>

        <div className="userAboutInfo">
            <div>{this.props.profileInfo.fullName}</div>
            <div>{this.props.profileInfo.aboutMe}</div>
            <div>{this.props.profileInfo.lookingForAJobDescription}</div>
            <div>my vk : {this.props.profileInfo.contacts.vk}</div>
        </div >
    </div>
    }
}

export default ProfileInformation