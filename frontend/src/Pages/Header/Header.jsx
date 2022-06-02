import React from 'react';
import Nav from 'react-bootstrap/Nav';
import CookieManager from '../../utils/CookieManager';
import UserAPI from '../../api/UserAPI';


function Header(props) {

    const handleLogout = event => {
        event.preventDefault();
        CookieManager.deleteCookie('jwt');
        window.location.assign('/');
    }

    return (
        <div style={{ 'backgroundColor': 'grey' }}>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                {
                    (!UserAPI.isLoggedIn() &&
                        <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>) ||
                    <>
                        <Nav.Item>
                            <Nav.Link href="/profile/me">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/settings/me">Settings</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Nav.Item>
                    </>
                }
                <Nav.Item>
                    <Nav.Link>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {
                        UserAPI.isLoggedIn() && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    }
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;