import React from 'react';

function RecordForm({ setRecord, action }) {
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

        setRecord({ distance, startTime, endTime });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='distance(meters)' ref={distanceRef} /> <br />
                <input type="datetime-local" ref={startTimeRef} name="start-time" /> <br />
                <input type="datetime-local" ref={endTimeRef} name="start-time" /> <br />
                <input type="submit" value={action} />
            </form>
        </div>
    );
}

export default RecordForm;