'use client';

import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ThreeDots } from "react-loader-spinner";

// toast---
import { toast } from 'react-toastify';


// redux--
import { useDispatch, useSelector } from "react-redux";

// redux actions---
import { setUserImageValue } from "@/store/slices/userImageSlice";



export default function UpdateUserData({ token }) {

    const dispatch= useDispatch();

    const usernameRef = useRef();
    const blog_nameRef = useRef();
    const displaynameRef = useRef();
    const passwordRef = useRef();
    const detailsRef = useRef();

    const [userDefaultValue, setUserDefaultValue] = useState(false);
    const [imageNmae, setImageName] = useState('');
    const [userDefValuesReloader, setUserDefValuesReloader]= useState(false);


    useEffect(() => {

        axios.get('/api/user/user-setting-default-items', { headers: { token } })

            .then(data => {
                dispatch(setUserImageValue(data.data.data.image))
                setUserDefaultValue(data.data.data);
            })

            .catch(error => {
                console.log(error.response.data);
            })

    }, [userDefValuesReloader])


    const usernameupdater = (e) => {
        e.preventDefault();


        const formData = {
            username: usernameRef.current.value === "" ? undefined : usernameRef.current.value,
        };

        axios.post('/api/user/update', formData, { headers: { token } })
            .then(data => {
                toast.success(" به روز رسانی با موفقیت انجام شد", {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })

            .catch(error => {
                const message = error.response.data ? error.response.data : "خطا"
                toast.success(message, {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })

            })
    };

    const blognameupdater = (e) => {
        e.preventDefault();


        const formData = {
            blog_name: blog_nameRef.current.value === "" ? undefined : blog_nameRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })
            .then(data => {
                toast.success(" به روز رسانی با موفقیت انجام شد", {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })

            .catch(error => {
                const message = error.response.data ? error.response.data : "خطا"
                toast.success(message, {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })
    };

    const displaynameupdater = (e) => {
        e.preventDefault();


        const formData = {
            displayname: displaynameRef.current.value === "" ? undefined : displaynameRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })
            .then(data => {
                console.log(data.data);
            })

            .catch(error => {
                const message = error.response.data ? error.response.data : "خطا"
                toast.success(message, {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })
    };

    const detailsupdater = (e) => {
        e.preventDefault();


        const formData = {
            details: detailsRef.current.value === "" ? undefined : detailsRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })
            .then(data => {
                toast.success(" به روز رسانی با موفقیت انجام شد", {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })

            })

            .catch(error => {
                const message = error.response.data ? error.response.data : "خطا"
                toast.success(message, {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })
    };

    const passwordupdater = (e) => {
        e.preventDefault();


        const formData = {
            password: passwordRef.current.value === "" ? undefined : passwordRef.current.value,
        };

        axios.post('/api/user/update', formData, { headers: { token } })
            .then(data => {
                toast.success(" به روز رسانی با موفقیت انجام شد", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })

            .catch(error => {
                const message = error.response.data ? error.response.data : "خطا"
                toast.success(message, {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })
    };

    const imageupdater = (e) => {
        e.preventDefault();

        axios.post('/api/user/update-user-image', e.target, { headers: { token } })
            .then(data => {

                setUserDefValuesReloader(!userDefaultValue)
                toast.success(" به روز رسانی با موفقیت انجام شد", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })

            .catch(error => {
                const message = error.response.data ? error.response.data : "خطا"
                toast.success(message, {
                    autoClose: 3000,

                    hideProgressBar: false,

                    closeOnClick: true,

                    pauseOnHover: true,

                    draggable: true,

                    progress: undefined,
                })
            })
    };




    return (
        <div className="flex justify-center items-center ">
            <form className="flex flex-col gap-20 p-4 w-[800px]">


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
                                <div> تصویر وبلاگ </div>

                                <div className="flex justify-between items-center gap-2">

                                    <form
                                        onSubmit={imageupdater}
                                        className="flex justify-start items-center gap-4">

                                        <div className="w-32 h-32 relative">

                                            <Image alt="user image"
                                                fill
                                                src={userDefaultValue.image !== '' ? userDefaultValue.image : userDefaultValue.default_image}
                                                className="object-cover rounded-full"
                                            />
                                        </div>

                                        <div className="w-32 h-24 flex justify-center items-center">

                                            <input

                                                // *inja miay az bakhaseh files estefadeh mikoni. 
                                                onChange={(e) => {
                                                    setImageName(e.target.files[0].name);
                                                }}
                                                type="file"
                                                id="file"
                                                name="file"
                                                hidden
                                            />

                                            <div className="w-32 h-32 flex justify-center items-center gap-2">

                                                {/* inja omadi esme ro gofti ke agar chizi gozasht biad emse image ro neshon bedeh. */}

                                                <label className=" line-clamp-1
                                                w-32 min-w-32
                                                bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded h-8 flex justify-center items-center cursor-pointer" htmlFor="file">
                                                    {
                                                        imageNmae === ''
                                                            ? 'انتخاب عکس'
                                                            :
                                                            imageNmae
                                                    }
                                                </label>
                                            </div>

                                        </div>


                                        <button
                                            type='submit'
                                            className="bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded w-24 min-w-24 h-10 flex justify-center items-center">ذخیره عکس
                                        </button>

                                    </form>

                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div> نام کاربری جدید </div>

                                <div className="flex justify-between items-center gap-2">

                                    <input
                                        // ? defaultValue mishe on meghdari ke dar halat adi hast

                                        defaultValue={userDefaultValue.username}
                                        ref={usernameRef}
                                        type="text" placeholder="نام کاربری جدید"
                                        className='border-b-2 border-zinc-200  p-2 outline-none focus:border-blue-500 w-full'
                                    />

                                    <button
                                        onClick={usernameupdater} className="bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded w-20 min-w-20 h-10 flex justify-center items-center">آپدیت</button>


                                </div>
                            </div>


                            <div className="flex flex-col gap-1">
                                <div>نام وبلاگ جدید</div>

                                <div className="flex justify-between items-center gap-2">

                                    <input
                                        // ? defaultValue mishe on meghdari ke dar halat adi hast

                                        defaultValue={userDefaultValue.blog_name}
                                        ref={blog_nameRef}
                                        type="text" placeholder="نام وبلاگ جدید"
                                        className='border-b-2 border-zinc-200  p-2 outline-none focus:border-blue-500 w-full'
                                    />

                                    <button
                                        onClick={blognameupdater} className="bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded w-20 min-w-20 h-10 flex justify-center items-center">آپدیت</button>


                                </div>

                            </div>

                            <div className="flex flex-col gap-1">
                                <div> نام نمایشی جدید </div>
                                <div className="flex justify-between items-center gap-2">

                                    <input
                                        // ? defaultValue mishe on meghdari ke dar halat adi hast

                                        defaultValue={userDefaultValue.displayname}
                                        ref={displaynameRef}
                                        type="text" placeholder="نام نمایشی جدید"
                                        className='border-b-2 border-zinc-200  p-2 outline-none focus:border-blue-500 w-full'
                                    />

                                    <button
                                        onClick={displaynameupdater} className="bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded w-20 min-w-20 h-10 flex justify-center items-center">آپدیت</button>


                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div>   درباره وبلاگ </div>
                                <div className="flex justify-between items-center gap-2">

                                    <input
                                        // ? defaultValue mishe on meghdari ke dar halat adi hast

                                        defaultValue={userDefaultValue.details}
                                        ref={detailsRef}
                                        type="text" placeholder="نام کاربری جدید"
                                        className='border-b-2 border-zinc-200 rounded-md p-2 outline-none focus:border-b-blue-500 w-full'
                                    />

                                    <button
                                        onClick={detailsupdater} className="bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded w-20 min-w-20 h-10 flex justify-center items-center">آپدیت</button>


                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div> رمز عبور جدید </div>
                                <div className="flex justify-between items-center gap-2">

                                    <input
                                        // ? defaultValue mishe on meghdari ke dar halat adi hast

                                        defaultValue={userDefaultValue.password}
                                        ref={passwordRef}
                                        type="text" placeholder="نام کاربری جدید"
                                        className='border-b-2 border-zinc-200 rounded-md p-2 outline-none focus:border-b-blue-500 w-full'
                                    />

                                    <button
                                        onClick={passwordupdater} className="bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded w-20 min-w-20 h-10 flex justify-center items-center">آپدیت</button>


                                </div>
                            </div>

                        </div>

                }



            </form>
        </div>
    )
}
