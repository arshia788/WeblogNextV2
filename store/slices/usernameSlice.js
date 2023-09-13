import {createSlice} from '@reduxjs/toolkit';


// ? user-is-active baray zamani hast ke bekhay phone number ro bedi  

const usernameSlice= createSlice({
    name:'username',
    initialState:{value:''},
    reducers:{
        setusernameSlice: (state,action)=>{
            state.value =action.payload
        },
    }
})


export const {setusernameSlice} = usernameSlice.actions;

export default usernameSlice.reducer;





