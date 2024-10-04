import { useState } from "react";
import "./WebStyle.css";
import TextField from "@mui/material/TextField";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import { FaHourglassStart } from "react-icons/fa";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { IoRemove } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";
import { FaRegCircleStop } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
function InputNShow() {
   const [input, setInput] = useState();
   const [tasks, setTasks] = useState([]);
   // const [uncompleted, setUncompleted] = useState();
   // const [started, setStarted] = useState();
   // const [completed, setCompleted] = useState();
   const [id, setId] = useState(tasks.length);
   const [status, setStatus] = useState("Uncompleted");

   let taskkToshow = tasks.map((tasok) => {
      if (status == "Uncompleted" && tasok.status == "Uncompleted") {
         return (
            <div style={{ marginBottom: "10px" }} key={tasok.id}>
               <ul style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
                  <li
                     style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#2c3e50",
                        padding: "12px",
                        border: "1px solid #bdc3c7",
                        borderRadius: "8px",
                        backgroundColor: "#ecf0f1",
                        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                     }}
                     onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dfe6e9")}
                     onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ecf0f1")}
                  >
                     <IoRemove
                        data-tooltip-id="First-tooltip"
                        data-tooltip-content="Remove"
                        data-tooltip-place="top"
                        style={{ width: "21px", height: "21px" }}
                        onClick={() => {
                           setTasks(
                              tasks.filter((tassk) => {
                                 return tasok.id !== tassk.id;
                              })
                           );
                        }}
                     />
                     <VscDebugStart
                        data-tooltip-id="Second-tooltip"
                        data-tooltip-content="Begin"
                        style={{ width: "21px", height: "21px" }}
                        onClick={() => {
                           setTasks(
                              tasks.map((taski) => {
                                 return taski.id == tasok.id
                                    ? { ...taski, status: "Started" }
                                    : taski;
                              })
                           );
                        }}
                     />
                     {tasok.task}
                  </li>
               </ul>
               <Tooltip
                  id="First-tooltip"
                  style={{ backgroundColor: "#D2122E", fontWeight: "bold" }}
               />
               <Tooltip
                  id="Second-tooltip"
                  style={{ backgroundColor: "#F7Bc00", color: "black", fontWeight: "bold" }}
               />
            </div>
         );
      }
      if (status == "Started" && tasok.status == "Started") {
         return (
            <div style={{ marginBottom: "10px" }} key={tasok.id}>
               <ul style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
                  <li
                     style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#2c3e50",
                        padding: "12px",
                        border: "1px solid #bdc3c7",
                        borderRadius: "8px",
                        backgroundColor: "#ecf0f1",
                        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                     }}
                     onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dfe6e9")}
                     onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ecf0f1")}
                  >
                     <FaRegCircleStop
                        data-tooltip-id="First-tooltip"
                        data-tooltip-content="Stop"
                        data-tooltip-place="top"
                        style={{ width: "21px", height: "21px" }}
                        onClick={() => {
                           setTasks(
                              tasks.map((taski) => {
                                 return taski.id == tasok.id
                                    ? { ...taski, status: "Uncompleted" }
                                    : taski;
                              })
                           );
                        }}
                     />
                     <IoMdDoneAll
                        data-tooltip-id="Second-tooltip"
                        data-tooltip-content="Finished"
                        style={{ width: "21px", height: "21px" }}
                        onClick={() => {
                           setTasks(
                              tasks.map((taski) => {
                                 return taski.id == tasok.id
                                    ? { ...taski, status: "Completed" }
                                    : taski;
                              })
                           );
                        }}
                     />
                     {tasok.task}
                  </li>
               </ul>
               <Tooltip
                  id="First-tooltip"
                  style={{ backgroundColor: "#D2122E", fontWeight: "bold" }}
               />
               <Tooltip
                  id="Second-tooltip"
                  style={{
                     backgroundColor: "rgb(30, 112, 30)",
                     color: "white",
                     fontWeight: "bold",
                  }}
               />
            </div>
         );
      }
      if (status == "Completed" && tasok.status == "Completed") {
         return (
            <div style={{ marginBottom: "10px" }} key={tasok.id}>
               <ul style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
                  <li
                     style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#2c3e50",
                        padding: "12px",
                        border: "1px solid #bdc3c7",
                        borderRadius: "8px",
                        backgroundColor: "#ecf0f1",
                        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                     }}
                     onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dfe6e9")}
                     onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ecf0f1")}
                  >
                     <IoRemove
                        data-tooltip-id="First-tooltip"
                        data-tooltip-content="Remove"
                        data-tooltip-place="top"
                        style={{ width: "21px", height: "21px" }}
                        onClick={() => {
                           setTasks(
                              tasks.filter((tassk) => {
                                 return tasok.id !== tassk.id;
                              })
                           );
                        }}
                     />

                     {tasok.task}
                  </li>
               </ul>
               <Tooltip
                  id="First-tooltip"
                  style={{
                     backgroundColor: "#D2122E",
                     color: "white",
                     fontWeight: "bold",
                  }}
               />
            </div>
         );
      }
   });

   return (
      <div
         className="ContainerTODOS"
         style={{
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            width: "1000px",
            alignItems: "center",
            gap: "12px",
            justifyContent: "center",
            boxShadow: "1px 1px 300px ",
         }}
      >
         <div className="InputField">
            <div>
               <TextField
                  value={input}
                  id="standard-basic"
                  label="Enter your task"
                  variant="standard"
                  style={{ width: "320px" }}
                  InputLabelProps={{ className: "LabelProp" }}
                  onChange={(ev) => {
                     setInput(ev.target.value);
                  }}
               />
            </div>
            <div style={{ width: "100%" }}>
               <Button
                  variant="contained"
                  endIcon={<Add />}
                  onClick={() => {
                     setTasks([...tasks, { id: id + 1, task: input, status: "Uncompleted" }]);

                     setInput("");
                     document.getElementById("standard-basic").focus();
                     setId(id + 1);
                  }}
               >
                  Add
               </Button>
            </div>
         </div>
         <div className="Todos">
            <div className="ToDos-Divider" style={{ display: "flex" }}>
               <section
                  className="Divid1"
                  style={{
                     backgroundColor: status == "Uncompleted" ? "#c62828" : "",
                     color: status == "Uncompleted" ? "#fff" : "",
                  }}
                  onClick={() => {
                     setStatus("Uncompleted");
                  }}
               >
                  <UnpublishedIcon />
                  <h6>Uncompleted</h6>
               </section>
               <section
                  className="Divid2"
                  style={{
                     backgroundColor: status == "Started" ? "#f7bc00" : "",
                  }}
                  onClick={() => {
                     setStatus("Started");
                  }}
               >
                  <FaHourglassStart style={{ width: "20px", height: "20px" }} />
                  <h6>Started</h6>
               </section>
               <section
                  className="Divid3"
                  style={{
                     backgroundColor: status == "Completed" ? "rgb(30, 112, 30)" : "",
                     color: status == "Completed" ? "#fff" : "",
                  }}
                  onClick={() => {
                     setStatus("Completed");
                  }}
               >
                  <CheckCircleIcon />
                  <h6>Completed</h6>
               </section>
            </div>
         </div>
         <hr style={{ width: "100%" }} />
         <div className="ToDos-Container">{taskkToshow}</div>
      </div>
   );
}

export default InputNShow;
