import React from 'react';

function Report({ records }) {
    const [repData, setRepData] = React.useState(null);

    React.useEffect(() => {
        let distance = 0;
        let totalTime = 0;

        const currDate = new Date();
        const oneWeekAgo = new Date(new Date().setDate(currDate.getDate() - 7));
        for (const record of records) {
            const startTime = new Date(record.startTime);
            const endTime = new Date(record.endTime);
            if (oneWeekAgo <= startTime && endTime <= currDate) {
                distance += record.distance;
                totalTime += (endTime - startTime) / 1e3;
                console.log(totalTime);
            }
        }
        setRepData({ distance, avgSpeed: distance / totalTime});
    }, [records])

    return (
        <div>
            <h4>Report on records from last week:</h4>
            <br />
            <p>distance: {repData?.distance} meters</p>
            <p>average speed: {repData?.avgSpeed} m/s</p>
        </div>
    );
}

export default Report;