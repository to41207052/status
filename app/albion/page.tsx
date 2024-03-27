import React from "react";

export default async function Menu(){
  async function create():Promise<myStatus>{
    'use server'
    const fetchMyStatus = async():Promise<myStatus> => {   
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
const data: myStatus = await fetechData();
const a: any = data.LifetimeStatistics
console.log(`${JSON.stringify(data)}`)


return (
    <>
    
    <div className="status-container flex">
      <div className="status-info flex flex-col justify-start items-start">
        <p>ID:</p>
        <p>Name:</p>
        <p>Guild:</p>
        <p>連盟:</p>
        <p>死の名声:</p>
        <p>殺害の名声:</p>
        <p>PvE Total:</p>
        <p>綿採取 合計:</p>
        <p>皮採取 合計:</p>
        <p>鉱石採取 合計:</p>
        <p>石採取 合計:</p>
        <p>木採取 合計:</p>
        <p>採取全般合計:</p>
        <p>製造系合計:</p>
        <p>釣り名声:</p>
        <p>農業名声:</p>
        <p>クリスタルリーグ:</p>
        <p>最終データ更新日:</p>
      </div>
      <div className="status-data ml-20 flex flex-col justify-start text-left">
        <p>{data.Id}</p>
        <p>{data.Name}</p>
        <p>-{data.GuildName}</p>
        <p>-{data.AllianceName}</p>
        <p>{data.DeathFame}</p>
        <p>{data.KillFame}</p>
        <p>{a.PvE.Total}</p>
        <p>{a.Gathering.Fiber.Total}</p>
        <p>{a.Gathering.Hide.Total}</p>
        <p>{a.Gathering.Ore.Total}</p>
        <p>{a.Gathering.Rock.Total}</p>
        <p>{a.Gathering.Wood.Total}</p>
        <p>{a.Gathering.All.Total}</p>
        <p>{a.Crafting.Total}</p>
        <p>{a.FishingFame}</p>
        <p>{a.FarmingFame}</p>
        <p>{a.CrystalLeague}</p>
        <p>{a.Timestamp}</p>
      </div>
    </div>

    <div>
        {/* footer */}
    </div></>
 
)
}