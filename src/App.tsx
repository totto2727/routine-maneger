import React from "react";
import {RoutineC} from './Component/Routine';

function App() {
  return <div className="App"><RoutineC name="aa" isComplete={true} works={[{name:"aaa",isComplete:true}]}/><p>test</p></div>;
}

export default App;
