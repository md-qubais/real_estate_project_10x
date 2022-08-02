 
 import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
     <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainContainer/>}/>
      {/* routing only for login and signup */}
      <Route/>
    </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
