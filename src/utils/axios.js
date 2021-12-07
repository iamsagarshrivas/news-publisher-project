import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://s3-ap-southeast-1.amazonaws.com"
});

axiosInstance.interceptors.response.use((result) => result.data, (error) => Promise.reject(error));

/** @typedef {{ID: number, TITLE: string, URL: string, PUBLISHER: string, CATEGORY: string, HOSTNAME: string, TIMESTAMP: Date}} INewsItem */


/**
 * 
 * @returns {Promise<INewsItem[]>}
 */
export const fetchAllNews = () => axiosInstance.get("/he-public-data/newsf6e2440.json");
export const fetchPublishers = () => 
{
    return fetchAllNews().then(news => 
        news.reduce((acc, newsItem) => 
    {
        if (Object.prototype.hasOwnProperty.call(acc, newsItem.PUBLISHER))
        {
            acc[newsItem.PUBLISHER].push(newsItem);

        }
        else
        {
            acc[newsItem.PUBLISHER] = [newsItem];
        }
        return acc;
    },{}));
}