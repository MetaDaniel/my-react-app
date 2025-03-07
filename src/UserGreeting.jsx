
import PropTypes from "prop-types";
function UserGreeting(props) {

    const welcomeMessaage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const loginPromt = <h2 className="login-prompt"> Please login to continue </h2>
 
      return(props.isLoggedIn ? welcomeMessaage:loginPromt );
    
}

UserGreeting.PropTypes = {

    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultprops = {
    isLoggedIn : false,
    username : "Guest",
}
export default UserGreeting;