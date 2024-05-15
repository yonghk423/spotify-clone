import axios, { AxiosInstance } from 'axios';

const spotifyApi: AxiosInstance = axios.create({
    baseURL: 'https://accounts.spotify.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export const spotifyGetData = async () => {
    try {
        const response = await spotifyApi.post('/api/token', {
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_CLIENT_ID,
            client_secret: import.meta.env.VITE_CLIENT_SECRET,
        });

        const token = response.data.access_token;

        const spotifyArtistApi = axios.create({
            baseURL: 'https://api.spotify.com/v1',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const artistResponse = await spotifyArtistApi.get('/artists/4Z8W4fKeB5YxbusRsdQVPb');
        console.log("Artist data:", artistResponse.data);

        return artistResponse.data;
    } catch (error: any) {
        console.log(error.message);
    }
}


