 import profilePic from './assets/profilePic.jpg'
 
 function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-tittle">Meta-lion</h2>
            <p className="text-class">I am aspiring to be a coder</p>

        </div>
    );
 }
  export default Card;