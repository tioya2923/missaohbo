import React, { useState, useEffect } from "react";
import axios from "axios";

const YoutubeChannelVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(
        `https://www.youtube.com/@MadalenaMalesso`, {
          params: {
            part: 'snippet',
            channelId: 'UChrwZLbSh1uY9KehKPYrBKw', // Substitua pelo ID do seu canal
            maxResults: 10, // Número de vídeos para buscar
            key: 'YOUR_API_KEY' // Substitua pela sua chave da API do YouTube
          }
        }
      );

      setVideos(response.data.items);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map((video, index) => (
        <div key={index}>
          <h2>{video.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YoutubeChannelVideos;
