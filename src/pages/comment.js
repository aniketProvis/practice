import { useState } from "react"
import ShowComment from "./showComment"


export default function Comment({body,Reply,setComments,comments}){
    const [isReply,setIsReply] = useState(Reply)
    
    
    return (
        <>
        <div>
         {body}
        </div>
        <button onClick={()=>setIsReply((p)=>!p)}>reply</button>
        <button onClick={()=>setComments([])}>delete</button>
        {isReply && <ShowComment comments={comments} setComments={setComments}/>}
        </>
    )
}