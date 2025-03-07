

function profilePicture() {
    
const imageUrl = './src/assets/myProfilePic.jpg';

const handleaclick = (e) => e.target.style.display = "none";


return (<img onClick={(e) => handleaclick(e)} src={imageUrl}></img>)

}

export default profilePicture;