'use client';

import { useDispatch } from "react-redux";

import { setUserImageValue } from "@/store/slices/userImageSlice";
import { userIsActivetoTrue } from "@/store/slices/user-is-active";
import { setRoleVlaue } from "@/store/slices/roleSlice";
import { loggedtoTrue } from "@/store/slices/logedSlice";

export default function ReduxVarsDefaultValueSetter(props) {
    
    
    // ! deghat kon ke dari inja to headers miay set mikoni maghadri defaulti ro.

    const dispatch = useDispatch();

    dispatch(setUserImageValue(props?.data.user_image));
    
    {props?.data.user_is_active ? dispatch(userIsActivetoTrue):null}
    
    dispatch(setRoleVlaue(props?.data.role));

    {props?.data.loged ? dispatch(loggedtoTrue):null}
    

    

    return (
        <div className="w-0">

        </div>
    )
}
