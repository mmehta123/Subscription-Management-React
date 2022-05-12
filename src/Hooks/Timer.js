import { useEffect, useState } from "react";

const useTime=()=>{
    const [time,setTime]=useState();
    
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000);
    return time;
}
export default useTime;