import { useState } from "react"
import Buttons from "./components/Buttons"
import Display from "./components/Display"
import Footer from "./components/Footer";
function App() {
  const [calc,setCalc]=useState("");
  const calculate=(buttonText)=>{
    if(buttonText==="C"){
      setCalc("");
    }
    else if(buttonText==="="){
      try {
        const fcalc=eval(calc);
        setCalc(fcalc);
      } catch (error) {
        setCalc(error.toString());
      }
    
  }
    else{
      setCalc(calc+buttonText);
    }
  }
  return (
    <>
    <h1 className="mt-2 text-center fw-bold">Calculator</h1>
    <div className="container p-2 border border-2 border-dark w-50 rounded">
    <Display displayContent={calc}/>
    <Buttons process={calculate}/>
    </div>
    <Footer/>
    </>
  )
}

export default App
