import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function UseEffectOnEveryRender() {

    const [someState, setSomeState] = useState(Math.random());

    useEffect(() => {
        console.log('This runs only once, on page load, creates the Interval.');
        setInterval(() => setNewState(), 1000);
    }, []);

    const setNewState = () => {
        setSomeState(Math.random());
    }

    useEffect(() => {
        console.log('This runs on every state change:', someState);
    });

    return (
        <div>
            <h1>On Every Render</h1>
            <h4>Open console and see the logs on every state change</h4>
            <p>The first time the page is loaded, an <b>Interval</b> is created.</p>
            <p>It sets a random number every second. When the number is set, the effect gets executed.</p>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default UseEffectOnEveryRender;
