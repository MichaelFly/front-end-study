import {forwardRef, useImperativeHandle, useState} from "react";

const Child = forwardRef(function Child(props, ref) {
    const [state,setState] = useState(1)
    useImperativeHandle(ref, () => {
        return {
            getState(){
                return state
            }

        };
    }, [state]);

    return <div>
        <div>state:{state}</div>
        <button onClick={()=>setState(state+1)}>add</button>
    </div>;
});
export default Child
