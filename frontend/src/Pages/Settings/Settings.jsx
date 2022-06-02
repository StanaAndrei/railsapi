import React from 'react';
import { useParams } from 'react-router';
import UserAPI from '../../api/UserAPI';

function Settings(props) {
    const [authUserData, setAuthUserData] = React.useState({});
    const [userData, setUserData] = React.useState({});
    const { id } = useParams();
    const [uid, setUid] = React.useState('');

    React.useEffect(() => {
        UserAPI.getUserDataFromJwtReq().then(data => {
            setAuthUserData(data);
        })
    }, [])

    React.useEffect(() => {
        if (id.toLowerCase() === 'me') {
            setUid(authUserData.id);
        } else {
            setUid(id);
        }
    }, [id, authUserData])

    React.useEffect(() => {
        if (!uid || uid instanceof Promise) {
            return;
        }
        UserAPI.getUserData(uid).then(data => {
            setUserData(data);
        })
    }, [uid])

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

        UserAPI.update(uid, { username, email, password, passwordConf }).then(() => {
            window.location.assign(`/profile/${uid}`);
        }).catch(() => alert('error!'))
    }

    return (
        <div>
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={userData.username} ref={userNameRef} />
                <br />
                <input type="email" defaultValue={userData.email} ref={emailRef} />
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