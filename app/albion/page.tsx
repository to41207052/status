import { table } from "console";
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
    <div>
      <table>
        <tr>
          <th>ID:</th>
          <td>{data.Id}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{data.Name}</td>
        </tr>
        <tr>
          <th>Guild:</th>
          <td>-{data.GuildName}</td>
        </tr>
        <tr>
          <th>連盟:</th>
          <td>-{data.AllianceName}</td>
        </tr>

        <tr>
          <th>死の名声:</th>
          <td>{data.DeathFame}</td>
        </tr>

        <tr>
          <th>殺害の名声:</th>
          <td>{data.KillFame}</td>
        </tr>

        <tr>
          <th>PvE Total:</th>
          <td>{a.PvE.Total}</td>
        </tr>

        <tr>
        <th>綿採取 合計:</th>
        <td>{a.Gathering.Fiber.Total}</td>
        </tr>

        <tr>
        <th>皮採取 合計:</th>
        <td>{a.Gathering.Hide.Total}</td>
        </tr>
        <tr>
        <th>鉱石採取 合計:</th>
        <td>{a.Gathering.Ore.Total}</td>
        </tr>
        <tr>
        <th>石採取 合計:</th>
        <td>{a.Gathering.Rock.Total}</td>
        </tr>
        <tr>
        <th>木採取 合計:</th>
        <td>{a.Gathering.Wood.Total}</td>
        </tr>
        <tr>
        <th>採取全般合計:</th>
        <td>{a.Gathering.All.Total}</td>
        </tr>
        <tr>
        <th>製造系合計:</th>
        <td>{a.Crafting.Total}</td>
        </tr>
        <tr>
        <th>釣り名声:</th>
        <td>{a.FishingFame}</td>
        </tr>
        <tr>
        <th>農業名声:</th>
        <td>{a.FarmingFame}</td>
        </tr>
        <tr>
        <th>クリスタルリーグ:</th>
        <td>{a.CrystalLeague}</td>
        </tr>
        <tr>
        <th>最終データ更新日:</th>
        <td>{a.Timestamp}</td>
        </tr>
      </table>
    </div>

    <div>
        {/* footer */}
    </div></>
 
)
}