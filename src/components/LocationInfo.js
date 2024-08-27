const LocationInfo = ({ areaName, locations }) => (
  <div className="border p-4 mb-4">
    <h3 className="text-lg font-semibold mb-2">{areaName}</h3>
    {locations.map((location, index) => (
      <div key={index} className="mb-2">
        <p>ID_{location.id}: {location.name} : REMAINING : {location.numPeople}</p>
      </div>
    ))}
  </div>
);

export default LocationInfo;