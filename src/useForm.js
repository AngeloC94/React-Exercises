import { useState } from "react"

export default function useForm(){
    const [data, setData] = useState({
        input: "",
        password: ""
    })

    function handleInputs(event){
        const value = event.target.value
        const name = event.target.name
        setData(()=>{
            return{
                [name] : value
            }
        })
    }

    return({
        input: data.input,
        password: data.password,
        handleInputs
    })
}

export function CustomLogin(){
    
    const {input, password, handleInputs} = useForm()
    return(
        <>
        <label name='username'>Username</label>
            <input name="username" value={input} onChange={handleInputs} />
            <label name='password'>Password</label>
            <input name="password" type="password" value={password} onChange={handleInputs} />
        </>
    )
}