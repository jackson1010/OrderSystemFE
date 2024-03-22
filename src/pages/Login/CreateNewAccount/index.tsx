import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateNewAccount = () => {
  return (
    <>
      <h3 className="font-bold text-lg text-slate-600">Sign Up</h3>
      <Input
        type="email"
        placeholder="Email"
        className="w-full mx-auto mt-4 text-base"
      />
      <Input
        type="password"
        placeholder="Password"
        className="w-full mx-auto mt-4 text-base"
      />
      <Button variant={"default"} className="w-full mx-auto mt-8 block">
        Create Account
      </Button>
    </>
  );
};

export default CreateNewAccount;
