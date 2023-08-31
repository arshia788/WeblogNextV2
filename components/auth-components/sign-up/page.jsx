'use client';

import { useForm } from 'react-hook-form';


export default function SignUpComponent() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch

        // chon dari az next estefadeh mikoni az {} bayad estefadeh bokoni.
    } = useForm({})

    // havaset bashe ke niaz az preventDefault estefadeh bokoni chon khodesh miad anjam mideh in kar ro. 

    const signUper = () => {

        const formData = {
            username: watch('username'),
            displayname: watch('displayname'),
            blog_name: watch('blog_name'),
            phone: watch('phone'),
            password: watch('password'),
        }

        console.log(formData);
    }

    const activeBtn = {
        username: watch('username') ?watch('username'):'',
        displayname: watch('displayname') ?watch('displayname'):'' ,
        blog_name: watch('blog_name') ?watch('blog_name'):'' ,
        phone: watch('phone') ?watch('phone'):'' ,
        password: watch('password') ?watch('password'):'' ,
    }


    return (
        <div className='w-[400px]'>

            {/* vaghti mikhy az hook form estefadeh bokoni bayad az handleSubmit estefadeh bokoni va on singUper ro bedi.*/}


            <form onSubmit={handleSubmit(signUper)} className='flex flex-col gap-8 p-4'>

                <div>

                    <input
                        autoComplete='off'
                        type='text'
                        placeholder='نام کاربری' className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                        {
                        ...register('username', {
                            required: true,
                            minLength: 8,
                            maxLength: 20
                        })
                        }
                    />
                    {
                        errors.username && errors.username.type === 'required' && (<div className='text-rose-600 text-sm'>لطفا نام کاربری را وارد کنید</div>)
                        ||
                        errors.username && errors.username.type === 'minLength' && (<div className='text-rose-600 text-sm'> باید بیشتر از 8 کارکتر وارد کنید</div>)
                        ||
                        errors.username && errors.username.type === 'maxLength' && (<div className='text-rose-600 text-sm'> باید کمتر از 20 کارکتر وارد کنید</div>)
                    }

                </div>

                <div>

                    <input
                        autoComplete='off'
                        type='text'
                        placeholder='نام نمایشی' className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                        {
                        ...register('displayname', {
                            required: true,
                            minLength: 8,
                            maxLength: 20
                        })
                        }
                    />
                    {
                        errors.displayname && errors.displayname.type === 'required' && (<div className='text-rose-600 text-sm'>لطفا نام نمایشی را وارد کنید</div>)
                        ||
                        errors.displayname && errors.displayname.type === 'minLength' && (<div className='text-rose-600 text-sm'> باید بیشتر از 8 کارکتر وارد کنید</div>)
                        ||
                        errors.displayname && errors.displayname.type === 'maxLength' && (<div className='text-rose-600 text-sm'> باید کمتر از 20 کارکتر وارد کنید</div>)
                    }

                </div>

                <div>

                    <input
                        autoComplete='off'
                        type='text'
                        placeholder='نام وبلاگ' className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                        {
                        ...register('blog_name', {
                            required: true,
                            minLength: 4,
                            maxLength: 40
                        })
                        }
                    />
                    {
                        errors.blog_name && errors.blog_name.type === 'required' && (<div className='text-rose-600 text-sm'>لطفا نام وبلاگ را وارد کنید</div>)
                        ||
                        errors.blog_name && errors.blog_name.type === 'minLength' && (<div className='text-rose-600 text-sm'> باید بیشتر از 4 کارکتر وارد کنید</div>)
                        ||
                        errors.blog_name && errors.blog_name.type === 'maxLength' && (<div className='text-rose-600 text-sm'> باید کمتر از 40 کارکتر وارد کنید</div>)
                    }

                </div>

                <div>

                    <input
                        autoComplete='off'
                        type='text'
                        placeholder="912 * * * * *" className='ltr border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                        {
                        ...register('phone', {
                            required: true,
                            minLength: 10,
                            maxLength: 10,

                        })
                        }
                    />
                    {
                        errors.phone && errors.phone.type === 'required' && (<div className='text-rose-600 text-sm'>لطفا شماره تلفن را وارد کنید</div>)
                        ||
                        errors.phone && errors.phone.type === 'minLength' && (<div className='text-rose-600 text-sm'> باید 10 کارکتر وارد کنید</div>)
                        ||
                        errors.phone && errors.phone.type === 'maxLength' && (
                            <div>

                                <div className='text-rose-600 text-sm'>  باید 10 کارکتر وارد کنید
                                </div>
                                <div>
                                    لطفا از 0 و +98 در ابتدای شماره همراه استفاده نکنید
                                </div>

                            </div>

                        )
                    }

                </div>

                <div>

                    <input
                        autoComplete='off'
                        type='password'
                        placeholder="رمز عبور" className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                        {
                        ...register('password', {
                            required: true,
                            minLength: 8,
                            maxLength: 24
                        })
                        }
                    />
                    {
                        errors.password && errors.password.type === 'required' && (<div className='text-rose-600 text-sm'>لطفا  رمز عبور  را وارد کنید</div>)
                        ||
                        errors.password && errors.password.type === 'minLength' && (<div className='text-rose-600 text-sm'> باید بیشتر از 8 کارکتر وارد کنید</div>)
                        ||
                        errors.password && errors.password.type === 'maxLength' && (<div className='text-rose-600 text-sm'> باید کمتر از 24 کارکتر وارد کنید</div>)
                    }

                </div>

                <button

                // nmizari aslan click anjam besheh agar in shart ha true nabashe. 
                    disabled={
                        activeBtn.username.length > 0 &&
                            activeBtn.displayname.length > 0 &&
                            activeBtn.blog_name.length > 0 &&
                            activeBtn.phone.length > 0 &&
                            activeBtn.password.length > 0
                            ? false
                            : true
                    }
                    className=
                    {
                        activeBtn.username.length > 0 &&
                            activeBtn.displayname.length > 0 &&
                            activeBtn.blog_name.length > 0 &&
                            activeBtn.phone.length > 0 &&
                            activeBtn.password.length > 0 
                            ?
                            'bg-blue-500 transition-all duration-500 hover:bg-blue-600 text-white flex justify-center items-center h-10 w-full rounded-md '
                            :
                            'bg-blue-300 transition-all duration-500 hover:bg-blue-400 text-white flex justify-center items-center h-10 w-full rounded-md '
                    }

                    type='submit'>ثبت نام</button>

            </form>

        </div>
    )
}
