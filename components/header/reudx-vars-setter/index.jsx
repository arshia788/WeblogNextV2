'use client';

import { useDispatch, useSelector } from "react-redux";

import { setuserImageValue } from "@/store/slices/userImageSlice";
import { userIsActivetoTrue } from "@/store/slices/user-is-active";
import { loggedtoTrue } from "@/store/slices/logedSlice";
import { setRoleValue } from "@/store/slices/roleSlice";

export default function ReduxVarsDefaultValueSetter(props) {



    // ! deghat kon ke dari inja to headers miay set mikoni maghadri defaulti ro.

    const dispatch = useDispatch();

    dispatch(setuserImageValue(props.data.user_image));
    
    {props.data.user_is_active ? dispatch(userIsActivetoTrue):null}
    
    dispatch(setRoleValue(props.data.role));

    {props.data.loged ? dispatch(loggedtoTrue()):null}
    

    

    return (
        <div className="w-0">

        </div>
    )
}
