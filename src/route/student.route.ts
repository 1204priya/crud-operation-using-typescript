
import {createStudent,} from "../controllers/student.controller";
import {getStudentData} from "../controllers/student.controller";
import { studentValidations } from "../middlewares/student.validation";
import { updateStudents } from "../controllers/student.controller";
import { deleteData } from "../controllers/student.controller";
//import { findStudentById } from "../controller/student.controller.mjs";
 
export default (app:any)=>{ 

app.post("/student/data/api/addStudent",studentValidations,createStudent);
app.get("/student/data/api/addStudent",getStudentData);
app.put("/student/data/api/addStudent/:id",updateStudents);
app.delete("/student/data/api/addStudent/:id",deleteData)
}