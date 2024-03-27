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
                      <p>{data.LifetimeStatistics.PvE.Total}</p>
                      <p>{data.LifetimeStatistics.Gathering.Fiber.Total}</p>
                      <p>{data.LifetimeStatistics.Gathering.Hide.Total}</p>
                      <p>{data.LifetimeStatistics.Gathering.Ore.Total}</p>
                      <p>{data.LifetimeStatistics.Gathering.Rock.Total}</p>
                      <p>{data.LifetimeStatistics.Gathering.Wood.Total}</p>
                      <p>{data.LifetimeStatistics.Gathering.All.Total}</p>
                      <p>{data.LifetimeStatistics.Crafting.Total}</p>
                      <p>{data.LifetimeStatistics.FishingFame}</p>
                      <p>{data.LifetimeStatistics.FarmingFame}</p>
                      <p>{data.LifetimeStatistics.CrystalLeague}</p>
                      <p>{data.LifetimeStatistics.Timestamp}</p>
                    </div>
                  </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div></>
    );
};

export default OtherStatus;
