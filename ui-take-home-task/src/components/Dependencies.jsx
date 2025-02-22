import { useEffect, useState } from "react";
import { fetchDependencies } from "../api/graphAPI";

const Dependencies = ({ flow, selectedDeps, setSelectedDeps }) => {
  const [dependencies, setDependencies] = useState([]);

  useEffect(() => {
    fetchDependencies(flow).then(setDependencies);
  }, [flow]);

  return (
    <div>
      <h3>Dependencies</h3>
      {dependencies.map(dep => (
        <label key={dep}>
          <input
            type="checkbox"
            checked={selectedDeps.includes(dep)}
            onChange={() =>
              setSelectedDeps(prev =>
                prev.includes(dep) ? prev.filter(d => d !== dep) : [...prev, dep]
              )
            }
          />
          {dep}
        </label>
      ))}
    </div>
  );
};

export default Dependencies;
