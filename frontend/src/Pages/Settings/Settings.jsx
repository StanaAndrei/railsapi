import React from 'react';
import { useParams } from 'react-router';
import UserAPI from '../../api/UserAPI';
import UserForm from '../../Components/UserForm';

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

    const [newParams, setNewParams] = React.useState(null);

    React.useEffect(() => {
        if (newParams == null) {
            return;
        }
        UserAPI.update(uid, newParams).then(() => {
            window.location.assign(`/profile/${uid}`);
        }).catch(() => alert('error!'))
    }, [newParams, uid])

    return (
        <div>
            <h1>Settings</h1>
            <UserForm setUser={setNewParams} action={'update'} userData={userData}/>
        </div>
    );
}

export default Settings;