import Card from "./card"
import Button from "./button.jsx"
import Student from "./students.jsx"
import proTypes from "prop-types"
import UserGreeting from "./Usergreeting.jsx"


function App() {

    return(
      <>
      <Card/>
      <Button/>

      <Student name= "Spongebob" age= {30} isStudent={true}/>
      <Student name= "Patrick" age={42} isStudent={false}/>
      <Student name= "Squidward" age={50} isStudent={false}/>
      <Student name= "Sandy" age={27} isStudent={true}/>

      <UserGreeting isLogged={true} username = "Metalion"/>

      </>
    );
}

export default App
