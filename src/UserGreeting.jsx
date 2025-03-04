

function UserGreeting(props) {
 
      if(props.isLoggedIn){
        return <h1>welcome {props.userName}</h1>
      } else{
        return <h1>Please login to continue </h1>
      }
    
}

export default UserGreeting;