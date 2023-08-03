import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ReactHooks from './ReactHooks';
import UseEffectOnlyOnFirstRender from './use-effect-hook/UseEffectOnlyOnFirstRender';
import UseEffectOnEveryRender from './use-effect-hook/UseEffectOnEveryRender';
import UseEffectOnSpecificStateChange from './use-effect-hook/UseEffectOnSpecificStateChange';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<ReactHooks/>}></Route>
                    <Route path='/use-effect'>
                        <Route path='only-on-first-render' element={<UseEffectOnlyOnFirstRender/>}></Route>
                        <Route path='on-every-render' element={<UseEffectOnEveryRender/>}></Route>
                        <Route path='on-specific-state-change' element={<UseEffectOnSpecificStateChange/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
