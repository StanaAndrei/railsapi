import React from 'react';
import UserAPI from '../../api/UserAPI';
import CookieManager from '../../utils/CookieManager';

function Login(props) {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    React.useEffect(() => {
        if (UserAPI.isLoggedIn()) {
            window.location.assign('/');
        }
    }, [])

    const handleSubmit = event => {
        event.preventDefault();

        const { value: email } = emailRef.current;
        const { value: password } = passwordRef.current;

        //console.log(email, password);
        UserAPI.login(email, password).then(data => {
            CookieManager.setCookie('jwt', data.jwt);
            window.location.assign('/');
        }).catch(() => alert('error!'));
    }

    return (
        <div >
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' ref={emailRef} />
                <br />
                <input type="password" placeholder='password' ref={passwordRef} />
                <br />
                <input type="submit" value={'submit'} />
            </form>
            <i>No account? Register <a href="/register">here</a>!
            </i>
        </div>
    );
}

export default Login;