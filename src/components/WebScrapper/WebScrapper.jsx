// src/components/ScraperComponent.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function WebScrapper() {
    const [url, setUrl] = useState('');
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/scrape?url=${url}`);
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData({});
            }
        };

        if (url) {
            fetchData();
        }
    }, [url]);

    return (
        <div>
            <h2>Flipkart Scraper</h2>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            {error && <p>Error: {error}</p>}
            {data.title && (
                <div>
                    <h3>Title: {data.title}</h3>
                    <p>Price: {data.price}</p>
                    <img src={data.img_src} alt="Product" />
                </div>
            )}
        </div>
    );
}

export default WebScrapper;
