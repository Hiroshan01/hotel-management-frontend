import UserTag from "../../userData/userData.jsx";


function Header(){

    return(
        <header className="w-full bg-blue-500 flex h-[100px] 
        relative items-center p-[10px]">
            <h1 className="text-white text-[30px]">Hotel Manegment System</h1>
            <UserTag imageLink="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" 
            name="Hiroshan Madusanka"/>
            
        </header>
    
    )
}
 export default Header;