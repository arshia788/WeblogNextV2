import Link from 'next/link';
import SignInComponent from '@/components/auth-components/sign-in/page';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getData= async(token)=>{

  const data= await fetch(`${process.env.SERVER_URL}/api/user/token-to-user`,{cache:'no-store', headers:{token}});


  const outData= await data.json();

  if(outData.data.loged){
    redirect('/setting')
  }else{
    return outData
  }

}

export default async function signInPage() {

  const cookieStore= cookies();
  const token= cookieStore.get('token')?cookieStore.get('token').value:null
  const data= await getData(token)

  return (
    <div className='flex justify-center items-center mt-12'>
        <div className='flex flex-col gap-8 p-4 rounded-lg bg-zinc-100 '>
        <div className='flex justify-between items-center'>
            <h1>  ورود به حساب کاربری</h1>
            <Link href={'/sign-up'} className='bg-zinc-200 px-3 py-1 rounded-md hover:text-blue-500 duration-300'>
                ثبت نام
            </Link>
        </div>
          <SignInComponent />
        </div>

    </div>
  )
}
