import { data } from "autoprefixer";

async function fetchData() {
    /* const endpoint = 'http://localhosts:3000/api/posts';
    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error('Falied to fetch data from the API');
    }
    return response.json(); */
    return {items: []}
}

export default async function Blog() {
    // Call the fetchData function here
    const data = await fetchData();
    const items = data && data.items ? [...data.items] : []

    return (
        <main className="">
            <h1>Blog Page</h1>
            <p>Posts:</p>
            {items && items.map((item, idx) => {
                return <div key={`post-${idx}`} >
                        <h2>{item.title}</h2>
                    </div>
                

            
                
            })} 
        </main>
    );
}



