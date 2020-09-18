import React, {useState} from 'react';

function useToggleState (initialVal=false)  {
    const [state, setState] = useState(initialVal);
    const toggle = () =>{
        setState(!state);
        //on off, true false, false true
    };
    return [state, toggle];
}
export default useToggleState;