import { useRef } from "react";
import {login} from './API/login'



function App() {

  const username = useRef(null)
  const password = useRef(null)

  const handleSubmit =async (e)=>{
    e.preventDefault()
    console.log(username.current.value, password.current.value)
    const payLoad ={
      username:username.current.value,password:password.current.value
    }
const result = await login(payLoad)
    if(result.ok){

    }
  }

  return (
    <div >
      <form>
        <label>Name :
        <input type="text" name="userName" ref={username} />
        </label>
        <label>Password :
        <input type="password" name="password" ref={password} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
