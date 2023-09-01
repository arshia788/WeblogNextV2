import {createSlice} from '@reduxjs/toolkit';


// ? ma 3ta darim az slice ha aval zamani ke logged hast ya na.  

const loggedSlice= createSlice({
    name:'logged',
    initialState:false,
    reducers:{
        loggedtoFalse: (state,action)=>{state=false},
        loggedtoTrue: (state,action)=>{state=true},
    }
})


export const {loggedtoFalse, loggedtoTrue} = loggedSlice.actions;

export default loggedSlice.reducer;





