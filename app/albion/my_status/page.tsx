import Home from "@/app/page";


export default async function MyStatus(){
    async function create():Promise<mystatus>{
        'use server'
        const fetchMyStatus = async():Promise<mystatus> => {   
            const res = await fetch("https://ori-api.onrender.com/albion/mystatus")
            const data = await res.json();
            return data;
        };
        return fetchMyStatus();
    }
    const fetechData = async () => {
        const result = await create();
        return result;
    };
    const data: mystatus = await fetechData();
    console.log(`${JSON.stringify(data)}`)

    
    return (
        <>
        <div>
         
            <Home />    
      
        </div>
        <div>
            
            <p>ID: {data.Id}</p>
            <p>Name: {data.Name}</p>
            <p>Guild: {data.GuildName}</p>
            <p>連盟: {data.AllianceName}</p>
            <p>死の名声: {data.DeathFame}</p>
            <p>殺害の名声: {data.KillFame}</p>
            <p>PvE Total: {data.LifetimeStatistics.PvE.Total}</p>
            <p>綿採取 合計: {data.LifetimeStatistics.Gathering.Fiber.Total}</p>
            <p>皮採取 合計: {data.LifetimeStatistics.Gathering.Hide.Total}</p>
            <p>鉱石採取 合計: {data.LifetimeStatistics.Gathering.Ore.Total}</p>
            <p>石採取 合計: {data.LifetimeStatistics.Gathering.Rock.Total}</p>
            <p>木採取 合計: {data.LifetimeStatistics.Gathering.Wood.Total}</p>
            <p>採取全般合計: {data.LifetimeStatistics.Gathering.All.Total}</p>
            <p>製造系合計: {data.LifetimeStatistics.Crafting.Total}</p>
            <p>釣り名声: {data.LifetimeStatistics.FishingFame}</p>
            <p>農業名声: {data.LifetimeStatistics.FarmingFame}</p>
            <p>クリスタルリーグ: {data.LifetimeStatistics.CrystalLeague}</p>
            <p>最終データ更新日: {data.LifetimeStatistics.Timestamp}</p>
        </div>
        <div>
            {/* footer */}
        </div></>
     
    )
}
// http://localhost:3000/albion/my_status