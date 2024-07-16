import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NamespaceList = () => {
  const [namespaces, setNamespaces] = useState([]);

  useEffect(() => {
    const fetchNamespaces = async () => {
      const response = await axios.get('/api/namespaces');
      setNamespaces(response.data);
    };
    fetchNamespaces();
  }, []);

  return (
    <div>
      <h1>Namespaces</h1>
      <ul>
        {namespaces.map((ns) => (
          <li key={ns.metadata.uid}>{ns.metadata.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamespaceList;
