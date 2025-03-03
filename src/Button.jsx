 
 function Button() {

    const styles = {
        backgroundColor: "rgb(83, 154, 241)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "block",
        marginTop:" 20px",
}
    return(
        <button style={styles}>Click me</button>
    );
 }

 export default Button;