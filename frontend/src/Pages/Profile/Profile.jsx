import React from 'react';
import UserAPI from '../../api/UserAPI';

function Profile(props) {
    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        UserAPI.getUserDataFromJwtReq().then(data => {
            setUsername(data.username);
        })
    }, [])

    return (
        <div>
            <h1>Profile page</h1> <br />
            <h3>{username}</h3>
            <hr />
        </div>
    );
}

export default Profile;