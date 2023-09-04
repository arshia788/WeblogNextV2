import { createSlice } from "@reduxjs/toolkit";


const UserImageSlice= createSlice({
    name:'userImage',
    initialState: {value:'https://secure.gravatar.com/avatar/username?s=60&d=identicon'},
    reducers:{
        setUserImageValue:(state,acion)=>{
            state.value=acion.payload
        }
    }
})

export const {setUserImageValue}= UserImageSlice.actions;
export default  UserImageSlice.reducer;


