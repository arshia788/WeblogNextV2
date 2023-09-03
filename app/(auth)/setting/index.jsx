import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getData = async (token) => {

    const data = await fetch(`${process.env.SERVER_URL}/api/user/token-to-user`, { cache: 'no-store', headers: { token } });


    const outData = await data.json();

    if (!outData.data.loged) {
        redirect('/')
    } else {
        return outData
    }

}

export default async function Setting() {

    const cookieStore = cookies();
    const token= cookieStore('token')? cookieStore('token').value :null;

    const data= await getData(token)

    return (
        <div>Setting</div>
    )
}
