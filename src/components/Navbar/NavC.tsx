import React, { useEffect, useState } from 'react'
import { Navbar, NavItem, NavDropdown, Nav, Container, } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import Dropdown from '../Reusable/Dropdown/Dropdown';
import Login from './Login';

type Props = {}

const NavC = (props: Props) => {
    const [drop, setDrop] = useState(false)


    return (
        < >
            <div className='' >


                <Navbar collapseOnSelect expand="lg"  className=''>
                {/* <Navbar collapseOnSelect expand="lg" fixed="top" className=''> */}
                    <Container className=''>
                        <Navbar.Brand href="#home"><h1 className='text-2xl bold text-white cursor-pointer'>React-Bootstrap</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='me-auto'>
                            <Nav className="me-auto">

                            </Nav>
                            <Nav  >

                                <ul className='flex p-4 flex-col space-x-12 sm:flex-col lg:flex-row text-center '>
                                    <li></li>
                                    <li className='text-white  text-xl mt-2 '> <span className='hover:text-orange-600 cursor-pointer'>Home</span></li>
                                    <li className='hover:text-orange-600 text-xl text-white mt-2'><span className='hover:text-orange-600 cursor-pointer'> CLASSES</span></li>
                                    <li className='hover:text-orange-600 text-xl text-white mt-2 relative cursor-pointer' onClick={() => { setDrop(!drop) }}><span className='hover:text-orange-600'> PAGES</span></li>
                                    {/* <li className='hover:text-orange-600 text-xl text-white'>PAGES</li> */}
                                    <li className='hover:text-orange-600 text-xl text-white mt-2 cursor-pointer'><span className='hover:text-orange-600'> BLOGS</span></li>
                                    
                                    <li  className='hover:text-orange-600 text-xl text-white cursor-pointer'><NavDropdown  title="Dropdown" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown></li>
                                    <li className='hover:text-orange-600 text-xl text-white mt-2 cursor-pointer'><span className='hover:text-orange-600 '> SHOP</span></li>
                                    <li className='hover:text-orange-600 text-xl text-white mx-auto mt-2 cursor-pointer'><div className='hover:text-orange-600 ml-8 '>  <Login /></div></li>
                                    <div className='inline-block absolute top-[4rem] right-[46rem] mt-2'>
                                        {/* {drop && <Dropdown drop={drop} setDrop={setDrop} />} */}

                                    </div>

                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavC