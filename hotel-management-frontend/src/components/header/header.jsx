import UserTag from '../userData/userdata.jsx';



function Header(){

  return(
    <header className='w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]'>

      <h1 className='text-white text-[30px]'>Leonine villa</h1>

      <UserTag imageLink="https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg"  name="Hiroshan Madusnaka "/>

    </header>
  )
}

export default Header;
