import JsonView from "react18-json-view"
import 'react18-json-view/src/style.css'
import {json_object} from "./data"

const JsonEdit = () => {
    return (
        <div style={{width:'500px',height:'500px',marginTop:'50px'}}>
            <JsonView src={json_object} editable/>
        </div>
    )
}
export default JsonEdit
