import React from 'react';
import UserAPI from '../../api/UserAPI';

function Settings(props) {
    const [userObj, setUserObj] = React.useState({ username: '', email: '' });

    React.useEffect(() => {
        UserAPI.getUserDataFromJwtReq().then(({ username, email }) => {
            setUserObj({ username, email });
        }).catch(err => {
            console.error(err);
        });
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

        UserAPI.update(username, email, password, passwordConf);
    }

    return (
        <div>
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={userObj.username} ref={userNameRef} />
                <br />
                <input type="email" defaultValue={userObj.email} ref={emailRef} />
                <br />
                <input type="password" placeholder='password' ref={passwordRef} />
                <br />
                <input type="password" placeholder='confirm password' ref={passwordConfRef} />
                <br />
                <input type="submit" value={'update'} />
            </form>
        </div>
    );
}

export default Settings;