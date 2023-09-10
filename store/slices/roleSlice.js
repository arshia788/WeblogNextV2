import {createSlice} from '@reduxjs/toolkit';


// ? user-is-active baray zamani hast ke bekhay phone number ro bedi  

const roleSlice= createSlice({
    name:'role',



    
    initialState:{value:4},
    reducers:{


        setRoleValue: (state,action)=>{
            state.value =action.payload
        },
    }
})


export const {setRoleValue} = roleSlice.actions;

export default roleSlice.reducer;





