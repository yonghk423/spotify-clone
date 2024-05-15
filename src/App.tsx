import React, { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { spotifyGetData } from './api/api';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await spotifyGetData();
      } catch (error: any) {
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