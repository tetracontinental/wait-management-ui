const TotalWaiting = ({ total, groups }) => (
  <div className="border p-4 mb-4">
    <h2 className="text-xl font-bold mb-2">全体</h2>
    <p>{groups} 組</p>
    <p>{total} 人</p>
  </div>
);

export default TotalWaiting;