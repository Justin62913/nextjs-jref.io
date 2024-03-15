'use client'
import { useEffect } from "react";


export default function Error({error, reset}) {
    useEffect(() => {
        console.log('Error Page', error);
    }, [error]);

    const retryRequest = () => {
        reset();
    }   
    return (
        <main>
            <h1>Error Page</h1>
            <p>Sorry, an error occurred.</p>
            <button onClick={retryRequest}>Retry Request</button>
        </main>
    );
}




