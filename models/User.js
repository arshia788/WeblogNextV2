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
    display_name:{
        type:String,
        required:true
    }
    ,password:{
        type:String,
        required:true
    }
    ,phone:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
    ,
    createdAt:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    }


    ,role:{
        type:Number,
        required:true,
        // enum yani faght mitoneh bain hamin add ha bashe na meghdar digehi
        enum:[1,2,3,4],
        default:3
    }
    ,
    active_code:{
        type:Number,
        required:true
    },
    user_is_active:{
        type:Boolean,
        required:true,
        default:false,
    },
    viewed:{
        type:Boolean,
        required:true,
        default:false,
    },
    liked_posts:{
        type:Array,
        required:true,
        default:[]
    },
    bookmarked_posts:{
        type:Array,
        required:true,
        default:[]
    },
    followings:{
        type:Array,
        required:true,
        default:[]
    },
    notifications:{
        type:Array,
        required:true,
        default:[]
    },
    token:{
        type:String,
        required:true,
    },


})


export default models.User || model("User", userSchema)
