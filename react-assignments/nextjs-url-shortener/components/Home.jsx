import { useState } from 'react';
import { shortenUrl } from '../utils/api';
import ShortenedUrlList from './ShortenedUrlList';

const Home = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    try {
      setLoading(true);
      const response = await shortenUrl(longUrl);
      setShortenedUrls([response.data.result, ...shortenedUrls]);
      setLongUrl('');
    } catch (error) {
      console.error('Error shortening URL:', error.message);
      // Handle error and show notification
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter URL to shorten"
      />
      <button onClick={handleShorten} disabled={loading}>
        Shorten
      </button>
      {loading && <LoadingSpinner />}
      <ShortenedUrlList urls={shortenedUrls} />
    </div>
  );
};

export default Home;
