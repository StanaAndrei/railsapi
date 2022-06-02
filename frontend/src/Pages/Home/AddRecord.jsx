import React from 'react';
import RecordAPI from '../../api/RecordAPI';
import RecordForm from '../../Components/RecordForm';

function AddRecord(props) {
    const [record, setRecord] = React.useState(null);

    React.useEffect(() => {
        if (record == null) {
            return;
        }
        RecordAPI.add(record).then(() => {
            window.location.assign('/profile/me');
        }).catch(() => alert('error!'))
    }, [record])

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <RecordForm action={'add record!'} setRecord={setRecord} />
        </div>
    );
}

export default AddRecord;