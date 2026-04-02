import { useEffect, useState } from "react";
import "./App.css"
function App(){
    const [advice, setAdvice]= useState("Please Enter the Buttton Get Advice")
    const [count, setCount] = useState(0);

    async function getadive(){

        const res = await fetch ("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=> c + 1)
       
    }
    useEffect(()=>{
        getadive()
    },[])
    
    return(
        <div className="container">
            <h1>ADVICE</h1>
            <p>{advice}</p>
            <button onClick={getadive}>Click {count}</button>
        </div>
    )
}
export default App;