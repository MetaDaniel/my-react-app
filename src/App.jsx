import Card from "./card"
import Button from "./button.jsx"
import Student from "./students.jsx"
import UserGreeting from "./Usergreeting.jsx"
import List from "./List.jsx"
import Button2 from "./Button2.jsx"
import ProfilePicture from "./profilePicture.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import ChangeComponent from "./ChangeComponent.jsx"
import ColorPicker from "./ColorPicker.jsx"
import ObjectState from "./ObjectState.jsx"
import MyComponent2 from "./MyComponent2.jsx"
import MyComponent3 from "./MyComponent3.jsx"
import TodoList from "./ToDolist.jsx"
import MyComponent4 from "./MyComponent4.jsx"
import MyComponent5 from "./MyComponent5.jsx"
import DigitalClock from "./DigitalClock.jsx"
import MyComponent6A from "./Component6A.jsx"
import MyComponent7 from "./MyComponent7.jsx"
import Stopwatch from "./Stopwatch.jsx"


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
      <ChangeComponent />
      <ColorPicker />
      <ObjectState />
      <MyComponent2  /*Updating state of arrays in react*/ />
      <MyComponent3  /*Updating state of arrays of objects*/ />
      <MyComponent4  /*useEffect in react-hook*/ />
      <MyComponent5  /*width and height adjustment with user effect*/ />
      <MyComponent6A  /**/ />
      <MyComponent7  /*how to use useRef to and state*/ />
      <DigitalClock  /*Digital clockt*/ />
      <TodoList  /*Building to do list*/ />
      <Stopwatch  /* Stopclok project*/ /> 
      
      </>
    );
}

export default App
 
