// pages/index.js

import { useState } from 'react';

export default function Home() {
  // useState フックを使用して、待機リストの状態を管理します
  // これにより、コンポーネントの再レンダリングなしでデータを更新できます（SPA の特徴）
  const [waitingList, setWaitingList] = useState([]);
  const [newName, setNewName] = useState('');

  // 新しい人を待機リストに追加する関数
  const addPerson = (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作を防ぎます
    if (newName.trim()) {
      // 現在の待機リストに新しい人を追加します（SPA の状態更新）
      setWaitingList([...waitingList, newName.trim()]);
      setNewName(''); // 入力フィールドをクリアします
    }
  };

  // 待機リストから人を削除する関数
  const removePerson = (index) => {
    // filter を使用して、指定されたインデックスの人を除いた新しい配列を作成します（SPA の状態更新）
    const newList = waitingList.filter((_, i) => i !== index);
    setWaitingList(newList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">待機リスト管理アプリ</h1>
      
      {/* フォーム: 新しい人を追加するための入力 */}
      <form onSubmit={addPerson} className="mb-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="名前を入力"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          追加
        </button>
      </form>

      {/* 待機リストの表示 */}
      <ul>
        {waitingList.map((person, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{person}</span>
            {/* 削除ボタン: クリックすると特定の人を削除します（SPA のインタラクション） */}
            <button
              onClick={() => removePerson(index)}
              className="bg-red-500 text-white p-1 rounded"
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {/* 待機中の人数を表示 */}
      <p className="mt-4">現在の待機人数: {waitingList.length}</p>
    </div>
  );
}