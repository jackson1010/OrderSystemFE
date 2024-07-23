import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/data/api/apiClient";
import { validateCredentials } from "@/utils/ScrollToTop/Validations/authValidation";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


const CreateNewAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [signUpError, setSignUpError]= useState<String | null>(null);
  
  const handleSignUp = async() =>{

    const error = validateCredentials(username, password);
    if(error){
      setSignUpError(error);
      setTimeout(()=>{
        setSignUpError(null);
      },5000);
      return;
    }
    

    try{
      const signUpResponse = await signUp({username, password})

      if(signUpResponse.status == 201){
        console.log('signup done');
        setSignUpError("Account Created");
        setTimeout(()=>{
          setSignUpError(null);
        },5000);
        return;
      }
    }catch(err:unknown){
      if(axios.isAxiosError(err)){
        setUsername('');
        setPassword('');
        setSignUpError(err.response?.data?.message || 'An error occured');
      }else{
        setSignUpError('An unexpected error occured');
      }
      setTimeout(()=>{
        setSignUpError(null);
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
      {signUpError &&(
      <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
          <p className="font-bold">Message</p>
          <p className="text-sm">{signUpError}</p>
      </div>
      )}
    </>
  );
};

export default CreateNewAccount;