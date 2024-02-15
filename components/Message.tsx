import React, { useEffect } from 'react';

interface props {
    msg: string
}

function Message({msg}: props) {
    console.log("Message component body...");

    useEffect(() => {

        console.log("component mount");

        return () => {
            console.log("component unmount");
            
        }        

    }, [])
    
    return (
        <div>
            {msg}
        </div>
    );
}

export default Message;