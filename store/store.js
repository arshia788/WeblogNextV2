import {configureStore} from '@reduxjs/toolkit'

import logedSlice from './slices/logedSlice'
import roleSlice from './slices/roleSlice'
import userIsActive from './slices/user-is-active'


const store= configureStore({
    reducer:{
        logedSlice:logedSlice,
        roleSlice:roleSlice,
        userIsActive:userIsActive,
    }
})

export default store;