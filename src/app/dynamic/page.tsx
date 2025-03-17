// Routed page 
// app\dynamic\page.tsx -> url/dynamic

//Fetch data
// async function getData() {
//     const res = await fetch('http://uri:port/endpoint', {
//         next: {
//             revalidate: 30 
//-------------re-fetch data -> X seconds, otherwise pull from cache
//-------------set to 0 to not cache data
//         }
//     })

//     //Fulfill promise
//     return res.json();
// }

export default async function Dynamic() {
    //Call function to fetch data from server
    //const data = await getData();

    return (
        <main className="min-h-screen">
            <div className="text-black dark:text-white">This is a route that brings in data from a server</div>

            {/* Map over data to display */}
            {/* <>
                {
                    data.map((data) => (
                        <div key={data.key}>
                            <h1>{data.title}</h1>
                        </div>
                    ))
                }
            </> */}

        </main>
    )
}