'use client';

import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { ThreeDots } from "react-loader-spinner";

export default function UpdateUserData({ token }) {

    console.log(token);
    const usernameRef = useRef();
    const blog_nameRef = useRef();
    const displaynameRef = useRef();
    const passwordRef = useRef();

    const [userDefaultValue, setUserDefaultValue] = useState(false);

    useEffect(() => {

        axios.get('/api/user/user-setting-default-items', { headers: { token } })

            .then(data => {
                console.log(data);
                setUserDefaultValue(data.data.data);
            })

            .catch(error => {
                console.log(error.response.data);
            })

    }, [])


    const updater = (e) => {
        e.preventDefault()
        const formData={
            username:usernameRef.current.value ===""? undefined :usernameRef.current.value,

            blog_name:blog_nameRef.current.value ===""? undefined :blog_nameRef.current.value,

            displayname:displaynameRef.current.value ===""? undefined :displaynameRef.current.value,

            password:passwordRef.current.value===""? undefined :passwordRef.current.value ,
        }

        // mogeh darkhast omadi in token ro ham behesh dadi. 
        axios.post('/api/user/update',formData, { headers: { token } })
            .then(data => {
                console.log(data.data);
            })

            .catch(error => {
                console.log(error.response.data);
            })
    }


    return (
        <div className="flex justify-center items-center ">
            <form className="flex flex-col gap-16 p-4 w-[800px]">

                <button 
                type="submit"
                onClick={updater} className="fixed top-40 left-10 bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded">آپدیت</button>
                {
                    !userDefaultValue ?
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{ margin: 'auto' }}
                            wrapperClassName=""
                            visible={true}
                        />
                        :
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-1">
                                <div> نام کاربری جدید </div>
                                <input
                                    
                                    // ? defaultValue mishe on meghdari ke dar halat adi hast

                                    defaultValue={userDefaultValue.username}
                                    ref={usernameRef}
                                    type="text" placeholder="نام کاربری جدید"
                                    className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                                />
                            </div>


                            <div className="flex flex-col gap-1">
                                <div>نام وبلاگ جدید</div>
                                <input
                                defaultValue={userDefaultValue.blog_name}
                                    ref={blog_nameRef}
                                    type="text" placeholder="نام وبلاگ جدید"
                                    className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <div> نام نمایشی جدید </div>
                                <input
                                defaultValue={userDefaultValue.displayname}
                                    ref={displaynameRef}
                                    type="text" placeholder="نام نمایشی جدید"
                                    className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <div> رمز عبور جدید </div>
                                <input
                                    ref={passwordRef}
                                    type="text" placeholder="رمز عبور جدید"
                                    className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                                />
                            </div>
                        </div>

                }



            </form>
        </div>
    )
}
