import { useState, useEffect } from "react"

export default function ProgressBar({timer}){
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("interval")
            setRemainingTime((p)=>p-10)
        }, 10)

        return ()=>{
            console.log("clearInter")
            clearInterval(interval)
        }
    }, [])

    return <progress value={remainingTime} max={timer} />
}
