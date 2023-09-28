import React from 'react';
import { useSelector } from 'react-redux';

const BeerTable = () => {
  const beers = useSelector((state) => state.beers);
 
  console.log("Rendering SomeComponent");
  return (
    
    <table className="table mt-5">
      <thead className='table-active table-primary'>
        <tr>
          <th className='border border-dark '>Id</th>
          <th className='border border-dark' >Name</th>
          <th className='border border-dark'>Tagline</th>
          <th className='border border-dark'>First Brewed</th>
          {/* <th className='border border-dark'  style={{ width:'100px', backgroundColor:'#FFD700' }}>Description</th> */}
          <th className='border border-dark'>Image</th>
          <th className='border border-dark'>Abv</th>
          <th className='border border-dark'>Ibu</th>
          <th className='border border-dark'>Target_Fg</th>
          <th className='border border-dark'>Target_Og</th>
          <th className='border border-dark'>Edc</th>
          <th className='border border-dark'>Srm</th>
          <th className='border border-dark'>Ph</th>
          <th className='border border-dark'>Attenuation_Level</th>
          <th className='border border-dark'>Volume Value</th>
          <th className='border border-dark'>Volume Unit</th>
          <th className='border border-dark'> Boil Volume Value</th>
          <th className='border border-dark'> Boil Volume Unit</th>
        </tr>
      </thead>
      <tbody>
        {beers.map((beer) => (
          <tr key={beer.id} className='table-active'>
             <td className='border border-dark'>{beer.id}</td>
            <td className='border border-dark'>{beer.name}</td>
            <td className='border border-dark'>{beer.tagline}</td>
            <td className='border border-dark'>{beer.first_brewed}</td>
            {/* <td className='border border-dark'>{beer.description}</td> */}
            <td className='border border-dark'>  <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '100px',maxHeight:'50px' }} /></td>
            <td className='border border-dark'>{beer.abv}</td>
            <td className='border border-dark'>{beer.ibu}</td>
            <td className='border border-dark'>{beer.target_fg}</td>
            <td className='border border-dark'>{beer.target_og}</td>
            <td className='border border-dark'>{beer.ebc}</td>
            <td className='border border-dark'>{beer.srm}</td>
            <td className='border border-dark'>{beer.ph}</td>
            <td className='border border-dark'>{beer.attenuation_level}</td>
            <td className='border border-dark'>{beer.volume.value}</td>
            <td className='border border-dark'>{beer.volume.unit}</td>
            <td className='border border-dark'>{beer.boil_volume.value}</td>
            <td className='border border-dark'>{beer.boil_volume.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
};

export default BeerTable;
