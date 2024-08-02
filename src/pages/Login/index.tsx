import "./styles.css";
import CreateNewAccount from "./CreateNewAccount";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useDispatch } from "react-redux";
import GehaLogo from "../../assets/logo/Logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForgetPassword from "./ForgetPassword";
import { useState } from "react";
import { setClientProfile, setVisitorProfile } from "@/data/actions/userAction";
import { AppDispatch } from "@/data/store";
import { validateCredentials } from "@/utils/ScrollToTop/Validations/authValidation";
import { getProfile, signIn } from "@/data/api/apiClient";
import { DialogClose } from "@radix-ui/react-dialog";
import Alert from "@/components/ui/alert";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]= useState(false);
  const [errorMsg, setErrorMsg]= useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const clear =() =>{
    setUsername('');
    setPassword('');
  }

  const handleSignUpCompletion = () => {
    // Logic to handle sign up completion
    setIsDialogOpen(false);
    setIsDrawerOpen(false);
  };

  const handleLogin = async () => {
    
    const validateError = validateCredentials(username, password);
    
    if(validateError){
      clear();
      setErrorMsg("Invalid username or password")
      setError(true);
      setTimeout(()=>{
        setError(false);
      },5000);
      return;
    }

    try{
      const loginResponse = await signIn({username, password})
      if(loginResponse.status == 200){
        const {token , authority} = await loginResponse.data;

        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userAuthority', authority);

        const userDetailsResponse = await getProfile(username);

        if(userDetailsResponse.status==200){
          const userDetails = await userDetailsResponse.data;
          switch(authority){
            case 'VISITOR':
              dispatch(setVisitorProfile(userDetails));
              break;
            case 'CLIENT':
              dispatch(setClientProfile(userDetails));
              break;
          }
        }else{
          clear();
          setErrorMsg('Failed to fetch user details.');
          setError(true);
        }
      }
    }catch(error){
      clear();
      setErrorMsg("Invalid username or passwords");
      setError(true);
      console.error('error: ', error);
    }
  };

  return (
    <div className="flex">
      <div className="leftbanner bg-slate-500 flex-auto hidden sm:block" />
      <div className="flex-auto basis-80 sm:flex-grow-0 p-8">
        <>
          <img src={GehaLogo} className="logotop" autoFocus />
          <Input
            type="email"
            placeholder="Email"
            value={username}
            className="w-full mx-auto mt-8 text-base"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full mx-auto mt-4 text-base"
            onChange={(e) =>setPassword(e.target.value)}
          />
          <Button
            variant={"default"}
            className="w-full mx-auto mt-8 block"
            onClick={() => handleLogin()}
          >
            Log In
          </Button>

          <div className="w-full mx-auto block text-sm">
            <div className="desktopwidget">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <p className="text-blue-500 font-base mt-6 cursor-pointer underline"
                  onClick={()=> setIsDialogOpen(true)}>
                    Sign Up for Geha Booking
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogClose asChild>
                  </DialogClose>
                  <CreateNewAccount onSignUpComplete={handleSignUpCompletion}/>
                </DialogContent>
              </Dialog>
              <br />
              <Dialog>
                <DialogTrigger>
                  <p className="text-blue-500 font-base mt-3 cursor-pointer underline">
                    Forget Password
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <ForgetPassword />
                </DialogContent>
              </Dialog>
              {error &&(
                <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                  <p className="font-bold">Error message</p>
                  <p className="text-sm">{errorMsg}</p>
                </div>
              )}
            </div>

            <div className="mobilewidget">
              <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}> 
                <DrawerTrigger asChild>
                  <p className="text-blue-500 font-base mt-6 cursor-pointer underline"
                  onClick={() => setIsDrawerOpen(true)}>
                    Sign Up for Geha Booking
                  </p>
                </DrawerTrigger>
                <DrawerContent className="pb-8" style={{ minHeight: "50%" }}>
                  <DrawerHeader>
                    <CreateNewAccount onSignUpComplete={handleSignUpCompletion} />
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
              <br />
              <Drawer>
                <DrawerTrigger>
                  <p className="text-blue-500 font-base mt-3 cursor-pointer underline">
                    Forget Password
                  </p>
                </DrawerTrigger>
                <DrawerContent className="pb-8" style={{ minHeight: "50%" }}>
                  <DrawerHeader>
                    <ForgetPassword />
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
              {error &&(
                <Alert message={errorMsg} type="error"/>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
