import React from "react";
import "./App.css";
import Function from "./components/Function/Function";
import MathOperations from "./components/MathOperations/MathOperations";
import Numbers from "./components/Numbers/Numbers";
import Result from "./components/Result/Result";


const App = () => {
  
  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <Numbers onClickNumber={number => console.log('Number: ', number)}/>
      <Function 
        onContentClear={clear => console.log("Clear: ", clear)}
        onDelete={backSpace => console.log("backSpace: ", backSpace)}
      />
      <MathOperations 
        onClickOperation={operation => console.log("Operation: ", operation)}
        onClickEqual={equal => console.log("Equal: ",equal)}
      />
    </main>
  );
};
export default App;
