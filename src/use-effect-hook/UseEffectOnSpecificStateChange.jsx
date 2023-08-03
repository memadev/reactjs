import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function UseEffectOnSpecificStateChange() {

    const [desiredState, setDesiredState] = useState(Math.random());
    const [anyOtherDate, setAnyOtherState] = useState();

    const setNewDesiredState = () => {
        setDesiredState(Math.random());
    }

    const setNewAnyOtherState = () => {
        setAnyOtherState(Math.random());
    }

    useEffect(() => {
        console.log('This runs on every time desiredState changes:', desiredState);
    }, [desiredState]);

    useEffect(() => {
        console.log('This runs only once, on page load, creates the Interval');
        setInterval(() => setNewDesiredState(), 1000);
        setInterval(() => setNewAnyOtherState(), 1000);
    }, []);

    return (
        <div>
            <h1>On Specific State Change</h1>
            <h4>Open console and see the logs every time the <b>desiredState</b> changes</h4>
            <p>There are two states, they get changed every second.</p>
            <p>Only the <b>desiredState</b> changes will trigger the effect to get executed.</p>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default UseEffectOnSpecificStateChange;
