import React from 'react';

function UserForm({ setUser, action, userData }) {
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

        setUser({ username, email, password, passwordConf });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={!userData ? 'username' : null} defaultValue={userData?.username}  ref={userNameRef} />
                <br />
                <input type="email" placeholder={!userData ? 'email' : null} defaultValue={userData?.email} ref={emailRef} />
                <br />
                <input type="password" placeholder='password' ref={passwordRef} />
                <br />
                <input type="password" placeholder='confirm password' ref={passwordConfRef} />
                <br />
                <input type="submit" value={action} />
            </form>
        </div>
    );
}

export default UserForm;