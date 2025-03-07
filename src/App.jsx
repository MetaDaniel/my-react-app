import Card from "./card"
import Button from "./button.jsx"
import Student from "./students.jsx"
import UserGreeting from "./Usergreeting.jsx"
import List from "./List.jsx"
import Button2 from "./Button2.jsx"
import ProfilePicture from "./profilePicture.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"



function App() {

    return(
      <>
      <Card/>
      <Card/>
      <Button/>

      <Student name= "Spongebob" age= {30} isStudent={true}/>
      <Student name= "Patrick" age={42} isStudent={false}/>
      <Student name= "Squidward" age={50} isStudent={false}/>
      <Student name= "Sandy" age={27} isStudent={true}/>
      <UserGreeting isLoggedIn ={true} username = "Metalion" />
      <Button2/>
      <ProfilePicture/>
      <MyComponent />
      <Counter/>

      


      </>
    );
}

export default App
