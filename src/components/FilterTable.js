import React from 'react';
import { useSelector } from 'react-redux';
import DateFilters from './DateFilters';

const SomeComponent = () => {
  const beers = useSelector((state) => state.beers);

  console.log("Rendering SomeComponent");
  console.log("Beers:", beers); // Check if beers array is correct

  return (
    <div>
      <DateFilters />
      <table className="table">
        <thead>
          {/* ... */}
        </thead>
        <tbody>
          {beers.map((beer) => (
            <tr key={beer.id}>
              {/* Render beer information */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SomeComponent;