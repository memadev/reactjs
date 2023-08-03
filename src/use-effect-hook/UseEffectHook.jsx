import {Link} from 'react-router-dom';

function UseEffectHook() {
    return (
        <div>
            <h2>useEffect</h2>
            <ul>
                <Link to='/use-effect/only-on-first-render'>
                    <li>Only On First Render</li>
                </Link>
                <Link to='/use-effect/on-every-render'>
                    <li>On Every Render</li>
                </Link>
                <Link to='/use-effect/on-specific-state-change'>
                    <li>On Specific State Change</li>
                </Link>
            </ul>
        </div>
    );
}

export default UseEffectHook;
