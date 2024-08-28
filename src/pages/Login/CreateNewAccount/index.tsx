import Alert from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/data/api/apiClient";
import { validateCredentials, validatePassword, validateUsername } from "@/utils/ScrollToTop/Validations/authValidation";
import axios from "axios";
import { useState } from "react";

interface CreateNewAccountProps {
  onSignUpComplete: () => void;
}

const CreateNewAccount:React.FC<CreateNewAccountProps> = ({onSignUpComplete}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState(false);
  const [errorMsg, setErrorMsg]= useState('');
  const [completed, setCompleted]= useState(false);

  const clear =() =>{
    setUsername('');
    setPassword('');
  }

  
  const handleSignUp = async() =>{

    const error = validateUsername(username);
    const errorPassword  = validatePassword(password);
    
    if(error){
      clear();
      setError(true);
      setErrorMsg(error);
      setTimeout(()=>{
        setError(false);
      },5000);
      return;
    }

    if(errorPassword){
      clear();
      setError(true);
      setErrorMsg(errorPassword);
      setTimeout(()=>{
        setError(false);
      },5000);
      return;
    }
    

    try{
      const signUpResponse = await signUp({username, password})

      if(signUpResponse.status == 201){
        clear();
        console.log('signup done');
        setCompleted(true);
        setTimeout(()=>{
        setCompleted(false);
        onSignUpComplete();
        },5000);
        return;
      }
    }catch(err:unknown){
      if(axios.isAxiosError(err)){
        clear();
        setError(true);
        setErrorMsg(err.response?.data?.message || 'An error occured');
      }
      setTimeout(()=>{
        setError(false);
      }, 5000);
    }
  }

  return (
    <>
      <h3 className="font-bold text-lg text-slate-600">Sign Up</h3>
      <Input
        type="email"
        placeholder="Email"
        value = {username}
        className="w-full mx-auto mt-4 text-base"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value ={password}
        className="w-full mx-auto mt-4 text-base"
        onChange={(e)=> setPassword(e.target.value)}
      />
      <Button 
        variant={"default"} 
        className="w-full mx-auto mt-8 block"
        onClick={()=> handleSignUp()}
      >
        Create Account
      </Button>
      {error &&(
        <Alert message={errorMsg} type="error"/>
      )}
      {completed &&(
        <Alert message="Sign up completed, please login." type="success"/>
      )}
    </>
  );
};

export default CreateNewAccount;