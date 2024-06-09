import {useState} from 'react';

import Input from './Input';
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {

  const {value:emailValue, handleInputBlur:handleEmailBlur, handleInputValues:handleEmailOnChange, hasError:emailIsInvalid} = useInput('',(email) => isNotEmpty(email) && isEmail(email) );
  
  const {value:passwordValue, handleInputBlur:handlePasswordBlur, handleInputValues:handlePasswordOnChange, hasError:passwordIsInvalid} = useInput('',(Password) => hasMinLength(Password,6));

  
  // const [inputValues, setInputValues] = useState({email:'',password:''});
  // const [didEdit, setDidEdit] = useState({
  //   email:false,
  //   password:false
  // });

  // const emailIsInvalid = didEdit.email && isNotEmpty(inputValues.email) && !isEmail(inputValues.email);
  // const passwordIsInvalid = didEdit.password && !hasMinLength(inputValues.password,6);

  // function handleInputBlur(identifier){
  //   setDidEdit(prev => ({
  //     ...prev,
  //     [identifier]:true
  //   }))
  // }

  const handleSubmission = (e) => {
    e.preventDefault();

    if(emailIsInvalid || passwordIsInvalid){
      console.log('error in email or password');
      return;
    }
    console.log('submitted');
    console.log("user email: "+emailValue);
    console.log("user password: "+passwordValue);

    // e.target.reset();
    // setInputValues({email:'',password:''});
  }

  // const handleInputValues = (identifer, value) => {
  //   setInputValues(preValues => {
  //     return{
  //       ...preValues,
  //       [identifer]:value
  //     }
      
  //   }) 

  //   setDidEdit(prev => ({
  //     ...prev,
  //     [identifer]:false
  //   }))
  // }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label='Email' 
        id='email'
        type="email"
        name="email"
        value={emailValue}
        onChange={handleEmailOnChange}
        onBlur={handleEmailBlur}
        error={emailIsInvalid && <p>invalid email</p>}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          value={inputValues.email} 
          onChange={(e) => handleInputValues('email', e.target.value)}  
          onBlur={() => handleInputBlur('email')} /> 
          <div className='control-error'>{emailIsInvalid && <p>invalid email</p>}</div>
        </div> */}

        <Input 
        label="Password"
        id="password" 
        type="password" 
        name="password" 
        value={passwordValue}
        onBlur={handlePasswordBlur} 
        onChange={handlePasswordOnChange} 
        error={passwordIsInvalid && <p>invalid password</p>}
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          onChange={(e) => handleInputValues('password', e.target.value)} 
          id="password" 
          type="password" 
          name="password" 
          value={inputValues.password} 
          onBlur={() => handleInputBlur('password')} />
          <div className='control-error'>{passwordIsInvalid && <p>invalid password</p>}</div>
        </div> */}
        
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
