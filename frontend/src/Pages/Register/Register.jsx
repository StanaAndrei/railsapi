import React from 'react';
import UserAPI from '../../api/UserAPI';
import UserForm from '../../Components/UserForm';
import CookieManager from '../../utils/CookieManager';

function Register(props) {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        if (UserAPI.isLoggedIn()) {
            window.location.assign('/');
        }
    }, [])

    React.useEffect(() => {
        if (user == null) {
            return;
        }
        UserAPI.register(user).then(data => {
            console.log(data);
            CookieManager.setCookie('jwt', data.jwt);
            window.location.assign('/');
        }).catch(() => alert('error!'))
    }, [user])

    return (
        <div>
            <h1>REGISTER</h1>
            <br />
            <UserForm action={'register'} setUser={setUser} />
        </div>
    );
}

export default Register;