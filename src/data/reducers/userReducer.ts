import { UserActionTypes, SetClientProfileAction, setClientProfile } from "../actions/userAction";
import { SET_CLIENT_PROFILE, SET_VISITOR_PROFILE, LOGOUT } from "../constant";
import { UserProfile } from "../profile";

interface UserState{
  islogin: boolean;
  profile: UserProfile | null;
}

const initialState: UserState = {
  islogin: false,
  profile: null,
}

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_VISITOR_PROFILE:
      console.log("reducer - set visitor called");
      return{
        ...state,
        islogin:true,
        profile:action.payload,
      };
    case SET_CLIENT_PROFILE:
      return{
        ...state,
        islogin: true,
        profile: action.payload,
      }
    case LOGOUT:
      return{
        ...state,
        islogin:false,
        profile:null,
      }    
    default:
      return state;
  }
};

export default userReducer;