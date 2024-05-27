import React, { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { spotifyGetData } from './api/api';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await spotifyGetData();
        console.log("data test", data)
      } catch (error) {
        if (error instanceof Error)
          console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    </div>
  )
}

export default App