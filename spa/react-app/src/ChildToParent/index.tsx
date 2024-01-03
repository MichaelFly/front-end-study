import Child from "./Child";
import {useRef} from "react";

const ChildToParent = () => {
    const ref = useRef<any>()
    const getChildState = ()=>{
        const state = ref.current?.getState();
        console.log('state',state)
    }
    return <div>
        <div>parent</div>
        <Child ref={ref}/>
        <button onClick={getChildState}>getChildState</button>
    </div>
}

export default ChildToParent
