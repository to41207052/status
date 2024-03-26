'use client'
import React, { useState } from 'react';
import { fetchStatus } from '@/app/api/api';

const NamePage: React.FC = () => {
    const [name, setName] = useState('');
    const [searchResult, setSearchResult] = useState<any>(null);

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
        <div>
            <input 
                type="text" 
                value={name} 
                onChange={handleInputChange} 
                placeholder="Enter name and see the results"
            />
            <div>
                {searchResult ? (
                    <pre>{JSON.stringify(searchResult, null, 2)}</pre>
                ) : (
                    <div>No data</div>
                )}
            </div>
        </div>
    );
};

export default NamePage;
