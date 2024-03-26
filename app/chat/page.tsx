"use client"
import React, { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string>(''); // 入力テキストを管理するstate

  useEffect(() => {
    // 最初のロード時にはデータを取得
    fetchComment();
  }, []);

  const fetchComment = () => {
    fetch("http://localhost:3300/comment")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data: string) => {
        setData(data);
      })
      .catch((error: any) => {
        setError(error.message);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Enterキーが押されたら新しいデータを取得
      fetchComment();
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown} // Enterキーのイベントハンドラーを追加
      />
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {data ? (
            <pre>{data}</pre>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
