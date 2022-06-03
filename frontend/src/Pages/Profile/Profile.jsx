import React from 'react';
import UserAPI from '../../api/UserAPI';
import { useParams } from "react-router-dom";
import RecordAPI from '../../api/RecordAPI';
import RecordBox from './RecordBox';
import Filter from './Filter';
import Report from './Report';

function Profile(props) {
    const [authUserData, setAuthUserData] = React.useState({});
    const [userData, setUserData] = React.useState({});
    const { id } = useParams();
    const [records, setRecords] = React.useState([]);
    const [uid, setUid] = React.useState('');
    const [filteredRecords, setFilteredRecords] = React.useState([]);
    const [filterInt, setFilterInt] = React.useState(null);

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

    React.useEffect(() => {
        if (!uid || uid instanceof Promise) {
            return;
        }
        RecordAPI.getRecsOfUser(uid).then(records => {
            setRecords(records);
            setFilteredRecords(records);
        })
    }, [uid])

    React.useEffect(() => {
        if (filterInt == null) {
            return;
        }
        setFilteredRecords(records.filter(record => {
            const createdAt = new Date(record.createdAt);
            const { startTime, endTime } = filterInt;
            return startTime <= createdAt && createdAt <= endTime;
        }));
    }, [filterInt, records])

    return (
        <div>
            <h1>Profile page</h1> <br />
            <h3>{userData.username}</h3>
            <hr />
            <Report records={records} />
            <br />
            <Filter setFilterInt={setFilterInt} />
            <h4>Records:</h4>
            {
                filteredRecords.map(record => <RecordBox
                    haveRights={authUserData.admin || id.toLowerCase() === 'me'}
                    key={record.id}
                    record={record}
                    uid={userData.id}
                />)
            }
            <hr />
        </div>
    );
}

export default Profile;