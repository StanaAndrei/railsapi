import React from 'react';
import Button from 'react-bootstrap/Button';
import RecordAPI from '../../api/RecordAPI';
import DateTimeUtils from '../../utils/DateTimeUtils';

function RecordBox({ record, canDelete, uid }) {

    const [deltaT] = React.useState(() => {
        const start = new Date(record.startTime), end = new Date(record.endTime);
        const deltaT = (end - start) / 1e3;
        return deltaT;
    })

    const deleteRec = event => {
        event.preventDefault();
        RecordAPI.delete(record.id, uid).then(status => {
            if (status === 200) {
                window.location.reload();
            } else {
                alert('error!');
            }
        })
    }

    return (
        <div style={{ borderColor: 'black', border: '1px', marginTop: '5px', backgroundColor: 'lightblue' }}>
            <p><b>{ DateTimeUtils.formatDateRo(new Date(record.createdAt)) }</b></p>
            <p>distance: {record.distance}</p>
            <p>interval:{' '}
                { DateTimeUtils.formatDateRo(new Date(record.startTime)) }{' '}
                <span style={{ fontSize: '29px', marginTop: '30px' }}>&#129046;	</span>
                { DateTimeUtils.formatDateRo(new Date(record.endTime)) }
            </p>
            <p>time: {deltaT} seconds</p>
            <p>average speed: {Number(record.distance) / deltaT} m/s</p>
            { canDelete &&
                <Button variant="danger" onClick={deleteRec}>delete</Button>
            }
        </div>
    );
}

export default RecordBox;