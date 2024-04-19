'use client'
import Home from '@/app/page';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const OtherStatus: React.FC = () => {
    const router = useParams();
    const id:string | string[] = router.id; 
    console.log(router)
    const [data, setData] = useState<myStatus | null>(null);
    

    useEffect(() => {
        const fetchData = async () => {

                const res = await fetch(`https://ori-api.onrender.com/albion/status/${id}`);
                const data:myStatus = await res.json();
                

                setData(data);
            
        };

        if (id) {
            fetchData();
        }
    }, [id, router]);


    return (
        <><div>

            <Home /><br />

        </div><div>
                {data ? (
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
                            <td>{data.LifetimeStatistics.PvE.Total}</td>
                        </tr>

                        <tr>
                        <th>綿採取 合計:</th>
                        <td>{data.LifetimeStatistics.Gathering.Fiber.Total}</td>
                        </tr>

                        <tr>
                        <th>皮採取 合計:</th>
                        <td>{data.LifetimeStatistics.Gathering.Hide.Total}</td>
                        </tr>
                        <tr>
                        <th>鉱石採取 合計:</th>
                        <td>{data.LifetimeStatistics.Gathering.Ore.Total}</td>
                        </tr>
                        <tr>
                        <th>石採取 合計:</th>
                        <td>{data.LifetimeStatistics.Gathering.Rock.Total}</td>
                        </tr>
                        <tr>
                        <th>木採取 合計:</th>
                        <td>{data.LifetimeStatistics.Gathering.Wood.Total}</td>
                        </tr>
                        <tr>
                        <th>採取全般合計:</th>
                        <td>{data.LifetimeStatistics.Gathering.All.Total}</td>
                        </tr>
                        <tr>
                        <th>製造系合計:</th>
                        <td>{data.LifetimeStatistics.Crafting.Total}</td>
                        </tr>
                        <tr>
                        <th>釣り名声:</th>
                        <td>{data.LifetimeStatistics.FishingFame}</td>
                        </tr>
                        <tr>
                        <th>農業名声:</th>
                        <td>{data.LifetimeStatistics.FarmingFame}</td>
                        </tr>
                        <tr>
                        <th>クリスタルリーグ:</th>
                        <td>{data.LifetimeStatistics.CrystalLeague}</td>
                        </tr>
                        <tr>
                        <th>最終データ更新日:</th>
                        <td>{data.LifetimeStatistics.Timestamp}</td>
                        </tr>
                        </table>
                  </div>

                  
                ) : (
                    <div>Loading...</div>
                )}
            </div></>
    );
};

export default OtherStatus;
