// components/ShortenedUrlList.js
import styles from '../styles/ShortenedUrlList.module.css';

const ShortenedUrlList = ({ urls }) => {
  return (
    <div className={styles.shortenedUrlList}>
      <h2>Shortened URLs:</h2>
      <ul>
        {urls.map((url) => (
          <li key={url.code}>
            <a href={url.full_short_link} target="_blank" rel="noopener noreferrer">
              {url.original_link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortenedUrlList;
