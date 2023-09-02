import {configureStore} from '@reduxjs/toolkit'

import logedSlice from './slices/logedSlice'
import roleSlice from './slices/roleSlice'
import userIsActive from './slices/user-is-active';
import userImageSlice from './slices/userImageSlice';


const store= configureStore({
    reducer:{
        logedSlice:logedSlice,
        roleSlice:roleSlice,
        userIsActive:userIsActive,
        userImageSlice:userImageSlice
    }
})

export default store;