import {IoNotificationsOutline} from 'react-icons/io5';

import {FiMoon} from 'react-icons/fi';
import {BsSun} from 'react-icons/bs';

export default function LogInNotifTheme() {
  return (
    <div className='flex justify-end items-center gap-4 w-[250px]'>

      {/* dark ngiht */}

      {/* in relative shod ta on on circle biad absolute beshe biad ro in .*/}
        <div className='relative flex justify-center items-center gap-1 border-2 border-blue-500 w-[54px] h-[28px] bg-white rounded-full'>
          <span className='w-4 h-4'><FiMoon /></span>
          <span className='w-4 h-4'><BsSun /></span>
          <span className='w-6 h-6 bg-blue-500 rounded-full absolute top-0 right-0'></span>
        </div>

        {/* notif */}
        <div className='relative  w-8 h-8 flex justify-center items-center'>
          <IoNotificationsOutline className='w-6 h-6'/>
          <span className='absolute top-0 right-0'>4</span>
        </div>

      {/* login */}
      <div>
        <button className='rounded bg-blue-500 px-3 py-1 text-white text-base  sm:text-sm '>ورود / ثبت نام</button>
      </div>

    </div>
  )
}
