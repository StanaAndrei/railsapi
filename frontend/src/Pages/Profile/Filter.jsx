import React from 'react';

function Filter({ setFilterInt }) {
    const startTimeRef = React.createRef();
    const endTimeRef = React.createRef();


    const handleChange = () => {
        let { value: startTime } = startTimeRef.current;
        let { value: endTime } = endTimeRef.current;

        startTime = new Date(startTime);
        endTime = new Date(endTime);

        const INVALID_DATE = 'Invalid Date';
        if (startTime.toString() !== INVALID_DATE && endTime.toString() !== INVALID_DATE) {
            setFilterInt({ startTime, endTime });
        }
    }

    return (
        <div>
            <hr />
            <b>Filter:</b>
            <form onChange={handleChange}>
                <input type="datetime-local" ref={startTimeRef} name="start-time" /> <br />
                <input type="datetime-local" ref={endTimeRef} name="start-time" /> <br />
            </form>
            <hr />
        </div>
    );
}

export default Filter;