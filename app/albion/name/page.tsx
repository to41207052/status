'use client'
import React, { useState } from 'react';
import { fetchStatus } from '@/app/api/api';
import Link from 'next/link';

const NamePage: React.FC = () => {
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
        <><div>
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter name and see the results"
                    className='border border-black' />
                <div>
                    {searchResult && searchResult.players ? (
                        
                        <div>
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
            </div></>
    );
};

export default NamePage;
