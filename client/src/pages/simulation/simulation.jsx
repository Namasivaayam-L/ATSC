import React from 'react'

const Simulation = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      // Fetch video URLs from backend
      const fetchVideos = async () => {
        try {
          const response = await axios.get('http://localhost:5000/videos');
          setVideos(response.data);
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };
      fetchVideos();
    }, []);

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh', padding: '20px' }}>
        {videos.map((video, index) => (
          <div key={index} style={{ width: 'calc(50% - 10px)', height: 'calc(50% - 10px)', position: 'relative' }}>
            <video
              src={`http://localhost:5000/videos/${video.filename}`}
              controls
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
  )
}

export default Simulation