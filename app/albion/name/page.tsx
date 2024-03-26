"use client"
export default async function whoStatus(){
    async function create():Promise<ApiResponse>{
        
        const fetchMyStatus = async():Promise<ApiResponse> => {   
            const res = await fetch("https://ori-api.onrender.com/albion/katura")
            const data = await res.json();
            return data;
        };
        return fetchMyStatus();
    }
    const fetechData = async () => {
        const result = await create();
        return result;
    };

    const apires = await fetechData();
    const data:Player[] = apires.players 
    console.log(`${JSON.stringify(data[0])}`)

    
    return (
        <div>
            <h1>name: {data[0].Name}</h1>
            <h1>guild: {data[0].GuildName}</h1>
            <h1>name: {data[1].Name}</h1>
            <h1>guild: {data[1].GuildName}</h1>
            <h1>name: {data[2].Name}</h1>
            <h1>guild: {data[2].GuildName}</h1>
        </div>
     
    )
}
// http://localhost:3000/albion/name