import {createSlice} from '@reduxjs/toolkit';


const loggedSlice= createSlice({
    name:'logged',


    initialState:{value:false},
    reducers:{
        loggedtoFalse: (state,action)=>{state.value=false},
        loggedtoTrue: (state,action)=>{state.value=true},
    }
})


export const {loggedtoFalse, loggedtoTrue} = loggedSlice.actions;

export default loggedSlice.reducer;





