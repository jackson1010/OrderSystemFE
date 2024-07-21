import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/data/api/signUpAPI";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateNewAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginError, setLoginError]= useState<string | null>(null);
  
  const handleSignUp = async() =>{
    try{
      const signUpResponse = await signUp({username, password})

      if(signUpResponse.status == 201){
        console.log('signup done');
        navigate('/')
      }
    }catch(error){
      console.error('error: ', error);
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
    </>
  );
};

export default CreateNewAccount;
