import {createSlice} from '@reduxjs/toolkit';


// ? user-is-active baray zamani hast ke bekhay phone number ro bedi  

const roleSlice= createSlice({
    name:'role',



    
    initialState:4,
    reducers:{


        setRoleVlaue: (state,action)=>{
            state=action.payload
        },
    }
})


export const {setRoleVlaue} = roleSlice.actions;

export default roleSlice.reducer;





