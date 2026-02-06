import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title:String,
  description:String,
  age:{type:Number, required:true},
});



const noteModel =  mongoose.model("Note", noteSchema);

export default noteModel;