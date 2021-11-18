import { userContext} from "../store/userContent"
import { useContext,useEffect,useState } from "react"

export default function SignUp(props){
    const [password, setPassword] = useState('');
    const [email,setEmail]=useState('')
    const [error, setError] = useState(false);
    const { user, setuser } = useContext(userContext);

    useEffect(() => {
        if (user) {
          props.history.push('/');
        }
      }, [user, props.history])
    async function handlesunmit(e){
        console.log('loading')
        e.preventDefault()
    try{
        const response = fetch('https://iifsd.herokuapp.com/auth/local/register',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          email: email,
          password: password
        })
    })
        const data=await response.json()
        if (data.error){
            setError(data.message[0].messages[0].message);
            return;
        }
        setuser(data);
        }catch(err){
            setError(err.toString())
        }
        }
        console.log(error)
    return (
        <>
        <div>
            
            <form onSubmit={handlesunmit}>
            <input type="email" value={email} onChange={(e) => { setError(''); setEmail(e.target.value)}} />
            <input type="password" value={password} onChange={(e) => { setError(''); setPassword(e.target.value)}} />
            <button>Singup</button>
            </form>
        </div>
        </>
    )
}