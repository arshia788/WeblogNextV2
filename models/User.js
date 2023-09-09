import { Schema, model, models } from "mongoose"


const userSchema= new Schema({

    blog_name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    displayname:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true,
        default:'',
    }
    ,password:{
        type:String,
        required:true
    }
    ,phone:{
        type:String,
        required:true
    }
    ,
    createdAt:{
        type:String,
        required:true
    }
    ,

    // in mishe vaseh mogehi ke dareh signup mikoneh va be sorat random ye img barash dar nazar gerefteh misheh. 
    
    default_image:{
        type:String,
        required:true
    },

    image:{
        type:String,
        default: ""
    },
    role:{
        type:Number,
        required:true,

        enum:[1,2,3,4],
        default:3
    }
    ,
    // in active code vase taid karbar hast. 

    active_code:{
        type:Number,
        required:true
    }
    ,

    // 
    active_code_number:{
        type:Number,
        required:true,
        default:5
    }
    ,

    user_is_active:{
        type:Boolean,
        required:true,
        default:false,
    },

    // in vase admin hast 
    viewed:{
        type:Boolean,
        required:true,
        default:false,
    },

    // kar bari ke hast che post hai ro liked kard. 
    liked_posts:{
        type:Array,
        required:true,
        default:[]
    },

    // in ham mesle liked hast faght inja bookmark mishan. 
    // * in like o bookmark ye array daran ke daronesh id on like ha ya bookmark ha hast.

    bookmarked_posts:{
        type:Array,
        required:true,
        default:[]
    },

    // in ham ya array dareh ke daronesh id on kar bar hai hast ke omadeh follow kardeh. 
    followings:{
        type:Array,
        required:true,
        default:[]
    },

    // 
    notifications:{
        type:Array,
        required:true,
        default:[]
    },

    // in mishe hamoon token ahraz hovayati karbar 
    token:{
        type:String,
        // required:true,
        default:''
    },


})


export default models.User || model("User", userSchema);