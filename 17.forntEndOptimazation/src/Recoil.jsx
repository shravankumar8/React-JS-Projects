import { useState } from "react"

function Recoil(){
    const [count,setCount] = useState(0)
    return(
        <>
        <div style={{
            width:"400px",height:"400px"
        }}>
<button onClick={()=>{
    setCount(count+1)
}}>
    increase

</button>
        <h1>{count}</h1>
        </div>
        <button onClick={()=>{
            setCount(count-1)
        }}>
            decrement
        </button>
        </>
    )
}
export default Recoil
