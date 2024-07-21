import "./styles.css";
import CreateNewAccount from "./CreateNewAccount";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GehaLogo from "../../assets/logo/Logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForgetPassword from "./ForgetPassword";
import { Card } from "@/components/ui/card";
import { TriangleAlertIcon } from "lucide-react";
import { useState } from "react";
import { setClientProfile, setVisitorProfile } from "@/data/actions/userAction";
import { AppDispatch } from "@/data/store";
import { signIn } from "@/data/api/signInAPI";
import { getProfile } from "@/data/api/profileAPI";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError]= useState<string | null>(null);

  const handleLogin = async () => {
    try{
      const loginResponse = await signIn({username, password})
      
      console.log(username, password);
      if(loginResponse.status == 200){
        const {token , authority} = await loginResponse.data;
        console.log( token, authority);

        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userAuthority', authority);

        const userDetailsResponse = await getProfile(token, username);

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
          setLoginError('Failed to fetch user details.');
        }
      }
    }catch(error){
      console.error('error: ', error);
    }
  };

  return (
    <div className="flex">
      <div className="leftbanner bg-slate-500 flex-auto hidden sm:block" />
      <div className="flex-auto basis-80 sm:flex-grow-0 p-8">
        <>
          <Card className="mb-2 p-2 text-xs bg-red-100 text-red-500 font-bold text-center">
            <TriangleAlertIcon className="m-auto" />
            <p>Demo Web Application</p>
            <div className="font-normal mt-2">
              <p>Do Not enter your credential!!!</p>
            </div>
          </Card>
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
              <Dialog>
                <DialogTrigger>
                  <p className="text-blue-500 font-base mt-6 cursor-pointer underline">
                    Sign Up for Geha Booking
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <CreateNewAccount />
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
            </div>

            <div className="mobilewidget">
              <Drawer>
                <DrawerTrigger>
                  <p className="text-blue-500 font-base mt-6 cursor-pointer underline">
                    Sign Up for Geha Booking
                  </p>
                </DrawerTrigger>
                <DrawerContent className="pb-8" style={{ minHeight: "50%" }}>
                  <DrawerHeader>
                    <CreateNewAccount />
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
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
