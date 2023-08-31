'use client';

import {useForm} from 'react-hook-form';


export default function SignInComponent() {

    const {
        register,
        handleSubmit,
        formState:{errors},
        watch

    // chon dari az next estefadeh mikoni az {} bayad estefadeh bokoni.
    } = useForm({})

    // havaset bashe ke niaz az preventDefault estefadeh bokoni chon khodesh miad anjam mideh in kar ro. 
    
    const signIner=()=>{

        const formData={
            phone:watch('phone'),
            password:watch('password'),
        }

        console.log(formData);
    }


  return (
    <div className='w-[400px]'>

        {/* vaghti mikhy az hook form estefadeh bokoni bayad az handleSubmit estefadeh bokoni va on singUper ro bedi.*/}


        <form onSubmit={handleSubmit(signIner)} className='flex flex-col gap-8 p-4'>


            <div>

                <input
                autoComplete='off' 
                type='text' 
                placeholder="912 * * * * *" className='ltr border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
                {
                    ...register('phone',{
                        required:true,
                        minLength:10,
                        maxLength:10
                    })
                }
                />
                {
                errors.phone && errors.phone.type==='required' && (<div className='text-rose-600 text-sm'>لطفا نام وبلاگ را وارد کنید</div>) 
                ||
                errors.phone && errors.phone.type==='minLength' && (<div className='text-rose-600 text-sm'> باید 10 کارکتر وارد کنید</div>)
                ||
                errors.phone && errors.phone.type==='maxLength' && (
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
                    ...register('password',{
                        required:true,
                        minLength:8,
                        maxLength:24
                    })
                }
                />
                {
                errors.password && errors.password.type==='required' && (<div className='text-rose-600 text-sm'>لطفا  رمز عبور  را وارد کنید</div>) 
                ||
                errors.password && errors.password.type==='minLength' && (<div className='text-rose-600 text-sm'> باید بیشتر از 8 کارکتر وارد کنید</div>)
                ||
                errors.password && errors.password.type==='maxLength' && (<div className='text-rose-600 text-sm'> باید کمتر از 24 کارکتر وارد کنید</div>)
                }

            </div>

            <button 
            className='bg-blue-500 transition-all duration-500 hover:bg-blue-600 text-white flex justify-center items-center h-10 w-full rounded-md '
            type='submit'> ورود</button>
        </form>

    </div>
  )
}
