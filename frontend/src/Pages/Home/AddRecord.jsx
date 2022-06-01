import React from 'react';
import { axiosAuthInstanceToAPI } from '../../utils/APIUtils';

function AddRecord(props) {
    const distanceRef = React.createRef();
    const startTimeRef = React.createRef();
    const endTimeRef = React.createRef();

    const handleSubmit = event => {
        event.preventDefault();

        const { value: distance } = distanceRef.current;
        let { value: startTime } = startTimeRef.current;
        let { value: endTime } = endTimeRef.current;        

        startTime = startTime.replace('T', ' ') + ":00";
        endTime = endTime.replace('T', ' ') + ":00";

        axiosAuthInstanceToAPI.post('/records', {
            distance, start_time: startTime, end_time: endTime
        }).then(async res => {
            if (res.status === 201) {
                window.location.assign(`/profile/me`);
            }
        }, err => {
            alert('error!');
        })//*/
    }

    return (
        <div div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='distance(meters)' ref={distanceRef} /> <br />
                <input type="datetime-local" ref={startTimeRef} name="start-time" /> <br />
                <input type="datetime-local" ref={endTimeRef} name="start-time" /> <br />
                <input type="submit" value={'add record'} />
            </form>

        </div>
    );
}

export default AddRecord;