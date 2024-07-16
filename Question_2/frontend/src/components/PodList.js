import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PodList = () => {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    const fetchPods = async () => {
      const response = await axios.get('/api/pods');
      setPods(response.data);
    };
    fetchPods();
  }, []);

  return (
    <div>
      <h1>Pods</h1>
      <ul>
        {pods.map((pod) => (
          <li key={pod.metadata.uid}>{pod.metadata.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PodList;
