import { createSlice } from "@reduxjs/toolkit";


const UserImageSlice= createSlice({
    name:'userImage',
    initialState: {value:'https://avatars.dicebear.com/api/bottts/irueoi.svg'},
    reducers:{
        setuserImageSlice:(state,acion)=>{
            state.value=acion.payload
        }
    }
})

export const {setuserImageSlice}= UserImageSlice.actions;
export default  UserImageSlice.reducer;


