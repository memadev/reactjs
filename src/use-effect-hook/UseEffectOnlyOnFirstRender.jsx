import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function UseEffectOnlyOnFirstRender() {

    const [someState, setSomeState] = useState(new Date());

    const setNewState = () => {
        setSomeState(new Date());
    }

    useEffect(() => {
        console.log('This runs only once, on page load, creates the Interval');
        setInterval(() => setNewState(), 1000);
    }, []);

    return (
        <div>
            <h1>Only On First Render</h1>
            <h4>Open console and see the log on first render</h4>
            <p>The first time the page is loaded, an <b>Interval</b> is created.</p>
            <p>It sets a random number every second.</p>
            <p>The effect gets executed only once, no matter how many times the state gets changed.</p>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default UseEffectOnlyOnFirstRender;
