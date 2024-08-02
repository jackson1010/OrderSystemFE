import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/data/api/apiClient";
import { useState } from "react";


const ForgetPassword = () => {
    const [email, setEmail]= useState('');
    console.log(email);

    const handleResetPassword= async(e:any) => {
      e.preventDefault();
      try{
        const resetPasswordResponse = await resetPassword({username: email});
        console.log(resetPasswordResponse.data);
      }catch(error){
        console.log("Error resetting password!", error);
      }

    }

    return ( 
        <>
        <h3 className="font-bold text-lg text-slate-600">Forget Password</h3>
        <p>Please enter your email below and we'll send you information on setting a new password.</p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full mx-auto mt-4 text-base"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Button variant={"default"} className="w-full mx-auto mt-8 block"
          onClick={handleResetPassword}>
          Reset Password
        </Button>
      </>
     );
}
 
export default ForgetPassword;