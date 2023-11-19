import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { auth } from '../../Firebase';

export default function AuthRoute() {

    const [user,setUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if (user){
                setAuthUser(user)
            }
            else
            setAuthUser(null);
        });
        return()=>{
            listen();
        }
    },[]);
  return (
    <div>{authUser ? <p>Signed in</p>:<p>Signed Out</p>}</div>
  )
}
