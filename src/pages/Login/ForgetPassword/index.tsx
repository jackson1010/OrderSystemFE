import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const ForgetPassword = () => {
    return ( 
        <>
        <h3 className="font-bold text-lg text-slate-600">Forget Password</h3>
        <Input
          type="email"
          placeholder="Email"
          className="w-full mx-auto mt-4 text-base"
        />
        <Button variant={"default"} className="w-full mx-auto mt-8 block">
          Reset Password
        </Button>
      </>
     );
}
 
export default ForgetPassword;