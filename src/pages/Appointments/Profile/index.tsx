import { Link } from "react-router-dom";
import "./styles.css";
import { ArrowLeftIcon } from "lucide-react";


const Profile = () =>{


    return(
        <div className="visitorcontentbg">
            <div className="bg-slate-100/70 min-h-lvh">
                <div className="bg-blue-900 pt-5 px-4 text-slate-100 font-bold h-16">
                <Link to="/">
                <ArrowLeftIcon className="inline mr-4 backbtn" />
                </Link>
                <h3 className="text-base font-bold inline">Profile Page</h3>
                <span style={{ float: "right" }}>en</span>
                </div>
            </div>
            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos"></img>
        </div>

    );

}

export default Profile;