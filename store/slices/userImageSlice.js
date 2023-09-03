import { createSlice } from "@reduxjs/toolkit";


const UserImageSlice= createSlice({
    name:'userImage',
    initialState: {value:`https://secure.gravatar.com/avatar/username?s=60&d=identicon`},
    reducers:{
        setuserImageSlice:(state,acion)=>{
            state.value=acion.payload
        }
    }
})

export const {setuserImageSlice}= UserImageSlice.actions;
export default  UserImageSlice.reducer;


