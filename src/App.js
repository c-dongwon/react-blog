import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/list")
    .then(res => setData(res.data))
  },[])

  console.log(data)
  return (
    <div>
      {
       data.map(item => <span>
        {item.idx}<br/>
        {item.title}<br/>
        {item.date}<br/>
        {item.content}<br/>
        {item.name}
        </span>)
      }
    </div>
  );
};
export default App;