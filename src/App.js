import "./App.css";
import InputNShow from "./Input&Show";
import Title from "./TitleComponent";
function App() {
   return (
      <div className="App">
         <Title />
         <div
            style={{
               height: "60vh",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <InputNShow />
         </div>
      </div>
   );
}

export default App;
