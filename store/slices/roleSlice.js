import {createSlice} from '@reduxjs/toolkit';


// ? user-is-active baray zamani hast ke bekhay phone number ro bedi  

const roleSlice= createSlice({
    name:'role',

    // ? in mishe halat hay ma 

    // 1= admin / 2=editor /3= normal user / 4=not logged

    // dar halat default gozashti 4 chon kasi logged nakardeh. 
    
    initialState:4,
    reducers:{

        // inja omadi on role ro dadi be state ma hala on state add aval hast 4. 
        
        setRoleVlaue: (state,action)=>{
            state=action.payload
        },
    }
})


export const {setRoleVlaue} = roleSlice.actions;

export default roleSlice.reducer;





