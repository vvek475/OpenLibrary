import {useState,useContext} from 'react'
import { userContext } from '../store/userContent'
function Create(props){
    const {user,}=useContext(userContext)
    const [Booktitle,setBooktitle]=useState('')
    const [favsubject,setfavsubject]=useState('')
    const [err,seterr]= useState('')
    async function handleSubmit(e){
        e.preventDefault()

      if (!Booktitle){
        seterr('Book title required')
        return;
      }

      if (!favsubject){
        seterr('fav subject required')
      }
      try {
          const response = await fetch('https://iifsd.herokuapp.com/students', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: Booktitle,
            favSubject: 'JS'
          }),
        })
        if (response.ok){
          seterr(`${Booktitle} and ${favsubject} was submitted`)
        }
        if (!response.ok){
          throw new Error ('server responds with error !!')
        }
    const data = await response.json();
    console.log(data)
    }catch (error){
      console.log(error)
      seterr(error)
    }}
    return (
      
        <div className="page_create">
          ERR {err && <p className='msg msg--error'>{err.toString()}</p>}
          <br />
      USER: <span>{user?JSON.stringify(user.user.username):""}</span>
            {user &&
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="book title" value={Booktitle} onChange={(e)=>{seterr('');setBooktitle(e.target.value)}}></input>
                <input type="text" placeholder="fav subject" value={favsubject} onChange={(e)=>{seterr('');setfavsubject(e.target.value)}}></input>
                <button type="submit">Submit</button>
            </form>}
        </div>
    )
}
export default Create