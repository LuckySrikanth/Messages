import ParIdMessage from "./ParIdMessage"
import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog';
import "./AllMessage.css"


const AllMessage = props => {
    const {msgList} = props
    const [CurrentState, setCurrentState] = useState(false)


    return (
        <div>
        <div>
            <p><b>Id :</b> {msgList.id}</p>
            <p><b>Subject : </b> {msgList.subject}</p>
            <p><b>Post Time: </b>{msgList.post_time}</p>
            <div>
                <button type="button" className="button-37"
                onClick={() => setCurrentState(prevState => !prevState)}
                      >View More
                </button>
            </div>
        </div>
         <div>
         {
             CurrentState && <ParIdMessage messageId = {msgList.id} setCurrentState = {setCurrentState}/>
         }
     </div>
     </div>
    )

}

export default AllMessage