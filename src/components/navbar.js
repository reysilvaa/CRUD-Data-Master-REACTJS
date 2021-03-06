import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login"
    }
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand> <Link to='/'>Hom</Link></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link> <Link to='/pegawai'> Pegawai </Link></Nav.Link>
                <Nav.Link> <Link to='/siswa'> Siswa </Link></Nav.Link>
                <Nav.Link> <Link to='/jurusan'> Jurusan </Link></Nav.Link>
                <Nav.Link> <Link to='/pelanggaran'> Pelanggaran </Link></Nav.Link>
                <Nav.Link onClick={() => this.Logout()}>Logout</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default NavBar;