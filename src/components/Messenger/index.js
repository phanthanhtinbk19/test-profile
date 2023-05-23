import { useEffect } from "react";

function Mesenger() {
    useEffect(()=>{
        const embeCode = 'm.me/hoanglaota.95';
        document.getElementById('chat-messenger-container').innerHTML = embeCode;
    },[])
    return <div id="chat-messenger-container"></div>;
}

export default Mesenger;