import {createSlice} from '@reduxjs/toolkit';


// ? ma 3ta darim az slice ha aval zamani ke logged hast ya na.  

// motaghir aval baray in hast ke bebinim kar bar login kardeh ya na

// 2vomi baray in hast 


const loggedSlice= createSlice({
    name:'logged',

    // chon aval bayad false bashe ta moghi ke biad o log bokoneh. 

    initialState:false,
    reducers:{
        loggedtoFalse: (state,action)=>{state=false},

        // agar inja login kard bad biad true beshe. 
        loggedtoTrue: (state,action)=>{state=true},
    }
})


export const {loggedtoFalse, loggedtoTrue} = loggedSlice.actions;

export default loggedSlice.reducer;





