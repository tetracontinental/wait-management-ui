const AreaWaiting = ({ areaName, groups, people }) => (
  <div className="border p-4 mb-4">
    <h3 className="text-lg font-semibold mb-2">{areaName}</h3>
    <p>{groups} 組</p>
    <p>{people} 人</p>
  </div>
);

export default AreaWaiting;