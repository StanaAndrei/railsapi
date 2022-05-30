import React from 'react';
import UserAPI from '../../api/UserAPI';

function Register(props) {

    React.useEffect(() => {
        if (UserAPI.isLoggedIn()) {
            window.location.assign('/');
        }
    }, [])

    const userNameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const passwordConfRef = React.createRef();

    const handleSubmit = event => {
        event.preventDefault();

        const { value: username } = userNameRef.current;
        const { value: email } = emailRef.current;
        const { value: password } = passwordRef.current;
        const { value: passwordConf } = passwordConfRef.current;

        UserAPI.register(username, email, password, passwordConf);
    }

    return (
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' ref={userNameRef} />
                <br />
                <input type="email" placeholder='email' ref={emailRef} />
                <br />
                <input type="password" placeholder='password' ref={passwordRef} />
                <br />
                <input type="password" placeholder='confirm password' ref={passwordConfRef} />
                <br />
                <input type="submit" value={'register'} />
            </form>
        </div>
    );
}

export default Register;