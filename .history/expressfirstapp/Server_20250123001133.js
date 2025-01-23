import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//making the app
const app = express();
const PORT = 4000;

//middlewar--> every request will pass through this
app.use(express.json());
app.use(cors());
// sabai domain bata request linux

try {
  mongoose.connect("mongodb+srv://monikapoudel08:5nZGFl3ymeAJJUjs@cluster0.u4myt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("Mongodb connected successfully");
} catch (error) {
  console.log("could not connect to the database");
}

//define schema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: false },
});
//Define Mode1
const Student = mongoose.model("student", StudentSchema);

//Define students route
app.get("/students", async (req, res) => {
  try {
    const response = await Student.find();
    return res.status(200).json(response);
  } catch (error) {
    console.log("something went wrong");
  }
});

//create student route
app.post("/students", async(req, res)=>{
try{
  console.log(req.body);
  const newStudent = await new Student(req.body).save();
  console.log(newStudent);
  return res.status(200).json(newStudent)
 } catch (error) {
  console.log("something went wrong", error);
 }

});

//Student delete route
app.delete("/student", async (req,res)=>{
  try{
     const deleteStudent=await Student.findByIdAndDelete(req.body.id);
     console.log(deleteStudent);
  }catch (error){
    console.log("something went wrong,error");
}
});

//test request to the server
app.get("/test", (req, res) => {
  res.status(200).json({
    message: "server is working",
  });
});

//run the server
app.listen(PORT, () => {
  console.log("server is running");
});
