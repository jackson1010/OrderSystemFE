import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CreateAccountProps = {
  switchloginmodule: (module: string) => void;
};

const CreateNewAccount = ({switchloginmodule}:CreateAccountProps) => {
  return (
    <>
      <h3 className="font-bold text-lg text-red-600">Account Registration</h3>

      <Input
        type="text"
        placeholder="User Name"
        className="w-full mx-auto mt-8 text-base"
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        className="w-full mx-auto mt-4 text-base"
      />
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
      <Button variant={"destructive"} className="w-full mx-auto mt-8 block">
        Create Account
      </Button>

      <div className="w-full mx-auto block text-sm">
        <p
          className="text-red-500 font-base mt-6 cursor-pointer underline"
          onClick={() => {
            switchloginmodule("authentication")
          }}
        >
          Back to Login Page
        </p>
      </div>
    </>
  );
};

export default CreateNewAccount;
