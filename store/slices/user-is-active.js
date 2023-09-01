import {createSlice} from '@reduxjs/toolkit';


// ? user-is-active baray zamani hast ke bekhay phone number ro bedi  

const userIsActiveSlice= createSlice({
    name:'userIsActive',
    initialState:false,
    reducers:{
        userIsActivetoFalse: (state,action)=>{state=false},
        userIsActivetoTrue: (state,action)=>{state=true},
    }
})


export const {userIsActivetoFalse, userIsActivetoTrue} = userIsActiveSlice.actions;

export default userIsActiveSlice.reducer;





