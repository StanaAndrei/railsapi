import React from 'react';
import UserAPI from '../../api/UserAPI';
import UserBox from './UserBox';

function Users(props) {
    const [users, setUsers] = React.useState([]);
    const [currUserData, setCurrUserData] = React.useState({});

    React.useEffect(() => {
        UserAPI.getAllUSers().then(data => {
            setUsers(data);
        }).catch(() => alert('error!'));
    }, [])

    React.useEffect(() => {
        UserAPI.getUserDataFromJwtReq().then(data => {
            setCurrUserData(data);
        })
    }, [])

    return (
        <div>
            <h1>Users</h1>

            <br />
            {
                users.map(user => <UserBox
                    key={user.id}
                    haveRights={currUserData.admin || currUserData.manager || currUserData.id === user.id}
                    user={user} />
                )
            }
        </div>
    );
}

export default Users;