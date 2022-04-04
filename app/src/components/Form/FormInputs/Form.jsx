import {useState} from 'react'
import FormInput from './FormInput'



function Form() {

    const [name,setName] = useState("")
    console.log(name);
    return (
        <div>
    <form>
        <FormInput placeholder="First Name" setName={setName} />
        <FormInput placeholder="Last Name" />
        <FormInput placeholder="Email Address" />
        <FormInput placeholder="Password" />
    </form>
</div>
  )
}

export default Form