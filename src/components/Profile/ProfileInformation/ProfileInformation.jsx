import React from "react"

class ProfileInformation extends React.Component {
    constructor(props) {
        super (props)
        debugger
        this.state = {
            status: this.props.status,
            statusOnFocus: false
        }
    } 
    
    componentDidUpdate() {

    }

    onStatusDoubleClick = (e) => {
        this.setState({statusOnFocus: !this.state.statusOnFocus})
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
                    :   <input type='text' value={this.state.status}/>
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