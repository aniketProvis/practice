import { useState } from 'react';
import  '../styles/ProgressBar.module.css'
import Comment from './comment';

export default function ShowComment({comments,setComments}){
    const [comment,setComment] = useState({body:'',comments:[]})
    
    const addComment = ()=>{
      setComments([comment,...comments])
      setComment('')
    }
    return (
    <>
         <div>
      <input placeholder='comment' value={comment} onChange={(e)=>setComment({...comment,body:e.target.value})}/>
      <button onClick={addComment}>submit</button>
      
      <div>{
        comments.map((comment)=><div style={{margin:'20px'}}>{<Comment  comments={comments} setComments={setComments}/>}</div>)
        }</div>
     </div>
    </>
    )
}