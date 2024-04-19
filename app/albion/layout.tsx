'use client'
import Link from "next/link";
import { useState } from "react";
import { fetchStatus } from "../api/api";
import { ReactNode } from "react";



export default function Menu({ children }: { children: ReactNode }) {
  const [name, setName] = useState('');
    const [searchResult, setSearchResult] = useState<ApiResponse>();

    const fetchData = async (searchTerm: string) => {
        try {
            const result = await fetchStatus(searchTerm);
            setSearchResult(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setName(searchTerm);
        // 入力値が変更されるたびに検索を実行
        fetchData(searchTerm);
    };


    
  return (
    <>
    <header>
      <div className="flex">
        <div >
          <img src="https://ori-api.onrender.com/albion/avatar" alt="アバタ画像" />
        </div>
        <div>
          <p className="mt-20 text-5xl">名前検索</p>
          <Link href="/albion">RESET(topに戻る)</Link><br />
          <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter name and see the results"
                    className='border border-pink-950 rounded shadow-xl' />
        </div>
      </div>
      <div>
        <div>
          {searchResult && searchResult.players ? (
            <div>
              <p>検索結果</p>
              {searchResult.players.map((player, index) => (
              <Link key={index} href={`/albion/other_status/${player.Id}`}>
                <pre>{JSON.stringify(`name: ${player.Name}   id: ${player.Id}`)}</pre>
              </Link>
              ))}
            </div>
          ) : (
            <div>詳細</div>
          )}
        </div>
      </div>
    </header>
    <main className="ml-4">
      {children}
    </main></>
  );
}

