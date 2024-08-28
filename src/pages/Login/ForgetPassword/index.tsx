import Alert from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {resetlink } from "@/data/api/apiClient";
import { validateUsername } from "@/utils/ScrollToTop/Validations/authValidation";
import { useEffect, useState } from "react";


const ForgetPassword = () => {
    const [email, setEmail]= useState('');
    const [error, setError]= useState(false);
    const [errorMsg, setErrorMsg]= useState('');
    const [completed, setCompleted]= useState(false);
    console.log(email);

    const handleResetPassword= async(e:any) => {
      const validateError = validateUsername(email);
      if(validateError){
        setErrorMsg("Invalid email")
        setError(true);
        return;
      }

      e.preventDefault();
      try{
        const resetPasswordResponse = await resetlink({username: email});
        setEmail('');
        setCompleted(true);
        console.log(resetPasswordResponse.data);
        
      }catch(error){
        setEmail('');
        setErrorMsg("Unable to reset password")
        setError(true);
        console.log("Error resetting password!", error);
      }

    }

    useEffect(() => {
      let timer: any;
      if (completed || error) {
        timer = setTimeout(() => {
          setCompleted(false);
          setError(false);
        }, 5000);
      }
      return () => clearTimeout(timer);
    }, [completed, error]);

    return ( 
        <>
        <h3 className="font-bold text-lg text-slate-600">Forget Password</h3>
        <p>Please enter your email below and we'll send you a link to reset your password.</p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full mx-auto mt-4 text-base"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Button variant={"default"} className="w-full mx-auto mt-4 block"
          onClick={handleResetPassword}>
          Reset Password
        </Button>
        {completed &&( <Alert message="Password reset link has been sent to your email" type="success"/>
        )}
        {error &&( <Alert message={errorMsg} type="error"/>
        )}
      </>
     );
}
 
export default ForgetPassword;