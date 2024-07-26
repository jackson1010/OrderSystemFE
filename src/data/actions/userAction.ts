import {SET_CLIENT_PROFILE, SET_VISITOR_PROFILE, LOGOUT } from "../constant";
import { ClientProfile, VisitorProfile } from "../profile";


export interface SetVisitorProfileAction{
  type: typeof SET_VISITOR_PROFILE;
  payload: VisitorProfile;
}

export interface SetClientProfileAction{
  type: typeof SET_CLIENT_PROFILE;
  payload: ClientProfile;
}

export interface LogoutAction{
  type: typeof LOGOUT;
}

export type UserActionTypes = SetVisitorProfileAction | SetClientProfileAction| LogoutAction

export const setVisitorProfile = (data: VisitorProfile): SetVisitorProfileAction =>({
  type: SET_VISITOR_PROFILE,
  payload: data,
})

export const setClientProfile = (data: ClientProfile): SetClientProfileAction =>({
  type: SET_CLIENT_PROFILE,
  payload: data,
}) 

export const logout = () => ({
  type: LOGOUT,
})
