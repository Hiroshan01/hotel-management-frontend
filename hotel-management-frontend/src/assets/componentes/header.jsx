import UserTag from "./userdata";
import "./header.css";

function Header(){

    return(
        <header>
            <h1>React Header</h1>
            <UserTag imageLink="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" 
            name="Hiroshan Madusanka"/>
            
        </header>
    
    )
}
 export default Header;