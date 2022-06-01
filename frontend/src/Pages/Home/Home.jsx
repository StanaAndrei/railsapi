import React from 'react';
import Button from 'react-bootstrap/Button';
import UserAPI from '../../api/UserAPI';
import AddRecord from './AddRecord';

function Home(props) {

    return (
        <div>
            <h1 style={{ marginLeft: '1rem', textAlign: 'center' }}>Home</h1>
            <br /><br /><br />
            <h4 style={{ textAlign: 'center', color: 'red' }}>Welcome to the app!!!</h4>
            <hr />
            { (!UserAPI.isLoggedIn() &&
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button variant="primary" onClick={() => window.location.assign('/register')}>register</Button>
                </div>) || <AddRecord />
            }

        </div>
    );
}

export default Home;