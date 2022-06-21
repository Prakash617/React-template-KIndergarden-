
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Dropdown( props:any) {
    const {drop, setDrop}= props

  return (
    <div className='w-[7rem]  bg-white flex-col'>
        <div className='p-2 px-6 w-24 hover:text-orange-500' onClick={()=>{setDrop(!drop)}} >Events</div>
        <div className='p-2 px-6 w-24 hover:text-orange-500' onClick={()=>{setDrop(!drop)}}>Header</div>
        <div className='p-2 px-6 w-24 hover:text-orange-500' onClick={()=>{setDrop(!drop)}}>Feature</div>
        <div className='p-2 px-6 w-24 hover:text-orange-500' onClick={()=>{setDrop(!drop)}}>Header</div>
        <div className='p-2 px-6 w-24 hover:text-orange-500' onClick={()=>{setDrop(!drop)}}>Events</div>


    </div>
  );
}

export default Dropdown;