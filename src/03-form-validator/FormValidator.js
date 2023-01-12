import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message,setMessage] = useState('')

// find errors function
const findErrors=()=>{

// Here we make an array to store errors
const errors=[]

// check if all fields are filled and push the error messages to the errors aray
  if(!email || !password || !passwordConfirm)errors.push(`All Fields's must be filled`)
// check if password characters are 8 or above 
  if(password.length< 8 )errors.push('Password Must be 8 Characters or long')
// password and passwordconfirmation fields are same
  if(password !== passwordConfirm)errors.push('Passwords Should match match')
// & in email feild is always one
// we use the spread operator to ass each character in email to an array
// then filter it to find the number of &
if([...email].filter(i=> i === '&').length !== 1){
  errors.push('An email should have exactly one & in it')
}

// we return the errors array
  return errors
}


  const onSubmitHandler = (e)=>{
    e.preventDefault();

    const errors = findErrors()
    setMessage(errors.length ? errors.join(', ') : 'User Created')
    // the : above indicates otherwise
    //  errors.length ? means if there are any errors 
    //  errrs.join(', ') => then join the errors array

    
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email' id="test"
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type='submit' value='Submit'/>
    </form>
  )
}
