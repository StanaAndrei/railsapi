import React from 'react';
import { useParams } from 'react-router';
import RecordAPI from '../../api/RecordAPI';
import RecordForm from '../../Components/RecordForm';

function EditRec(props) {
    const [record, setRecord] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        if (record == null) {
            return;
        }

        if (record.startTime === ":00") {
            record.startTime = undefined;
        }
        if (record.endTime === ":00") {
            record.endTime = undefined;
        }

        RecordAPI.update(id, record).then(() => {
            window.location.assign('/profile/me');
        }).catch(() => alert('error!'))
    }, [record, id])

    return (
        <div>

            <RecordForm action={'edit!'} setRecord={setRecord} />
        </div>
    );
}

export default EditRec;