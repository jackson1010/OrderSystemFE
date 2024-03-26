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
import { setUser } from "@/data/actions/userAction";
import GehaLogo from "../../assets/logo/Logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForgetPassword from "./ForgetPassword";
import { Card } from "@/components/ui/card";
import { TriangleAlertIcon } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    alert("Demo Login , Assume login success...");
    dispatch(
      setUser({
        islogin: true,
        username: "Sample User",
        jwttoken: "Sample Token",
      })
    );
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="leftbanner bg-slate-500 flex-auto hidden sm:block" />
      <div className="flex-auto basis-80 sm:flex-grow-0 p-8">
        <>
          <img src={GehaLogo} className="logotop" autoFocus />
          <Card className="mt-6 mb-2 p-2 text-xs bg-red-100 text-red-500 font-bold text-center">
            <TriangleAlertIcon className="m-auto" />
            <p>Warning !!!</p>
            <div className="font-normal mt-2">
              <p>This is a Demo Web Application</p>
              <p>Do not enter your personal info !!!</p>
            </div>
          </Card>
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
