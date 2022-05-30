import React from 'react';
import Nav from 'react-bootstrap/Nav';
import CookieManager from '../../utils/CookieManager';
import UserAPI from '../../api/UserAPI';


function Header(props) {
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
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/settings">Settings</Nav.Link>
                        </Nav.Item>
                    </>
                }
                <Nav.Item>
                    <Nav.Link>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {
                        UserAPI.isLoggedIn() && <Nav.Link onClick={() => {
                            CookieManager.deleteCookie('jwt');
                            window.location.assign('/');
                        }}>logout</Nav.Link>
                    }
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;