'use client'
import Home from '@/app/page';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const OtherStatus: React.FC = () => {
    const router = useRouter();
    const id = router;
    console.log(router)
    const [data, setData] = useState<mystatus | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // const res = await fetch(`https://ori-api.onrender.com/albion/status/qJkHQXYsQI-_H71DF0Qw0Q`);
                const res = await fetch(`https://ori-api.onrender.com/albion/status/${id}`);
                const data = await res.json();
                setData(data);
            
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    console.log(data)

    return (
        <><div>

            <Home /><br />

        </div><div>
                {data ? (
                    <div>
                        <h1>OTHER STATUS</h1>
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
                        <p>採集データ更新日: {data.LifetimeStatistics.Timestamp}</p>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div></>
    );
};

export default OtherStatus;
