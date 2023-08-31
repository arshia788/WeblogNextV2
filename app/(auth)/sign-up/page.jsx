import SignUpComponent from '@/components/auth-components/sign-up/page';
import Link from 'next/link';


export default function signUpPage() {
  return (
    <div className='flex justify-center items-center mt-12'>
        <div className='flex flex-col gap-8 p-4 rounded-lg bg-zinc-100 '>
        <div className='flex justify-between items-center'>
            <h1>ثبت نام در سایت</h1>
            <Link href={'/sign-in'} className='bg-zinc-200 px-3 py-1 rounded-md hover:text-blue-500 duration-300'>
                ورود
            </Link>
        </div>
            <SignUpComponent />

        </div>

    </div>
  )
}
