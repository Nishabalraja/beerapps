import React, { useState, useEffect } from "react";
import axios from "axios";


function Table() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers?page=1');
      console.log(response.data, "getdata");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>welcome</h1>
      {data && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Tagline</th>
              {/* Add more headers if needed */}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.tagline}</td>
                {/* Add more cells if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Table;
