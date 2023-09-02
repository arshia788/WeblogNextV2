import {createSlice} from '@reduxjs/toolkit';


// ? user-is-active baray zamani hast ke bekhay phone number ro bedi  

const userIsActiveSlice= createSlice({
    name:'userIsActive',
    initialState:{value:false},
    reducers:{
        userIsActivetoFalse: (state,action)=>{state.value=false},
        userIsActivetoTrue: (state,action)=>{state.value=true},
    }
})


export const {userIsActivetoFalse, userIsActivetoTrue} = userIsActiveSlice.actions;

export default userIsActiveSlice.reducer;





