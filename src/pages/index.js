import { useState } from 'react';

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-gray-600">{label}</span>
    <span className="text-lg font-medium">{value}</span>
  </div>
);

const WaitingInfo = () => {
  const [data, setData] = useState({
    total: { groups: 30, people: 100 },
    areas: [
      { name: 'AREA1', groups: 10, people: 35 },
      { name: 'AREA2', groups: 12, people: 40 },
      { name: 'AREA3', groups: 8, people: 25 },
    ],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">待機情報</h1>
      
      <Card title="全体">
        <Stat label="組数" value={`${data.total.groups} 組`} />
        <Stat label="人数" value={`${data.total.people} 人`} />
      </Card>

      {data.areas.map((area, index) => (
        <Card key={index} title={area.name}>
          <Stat label="組数" value={`${area.groups} 組`} />
          <Stat label="人数" value={`${area.people} 人`} />
        </Card>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <WaitingInfo />
      </main>
    </div>
  );
}