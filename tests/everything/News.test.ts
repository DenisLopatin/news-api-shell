// @ts-nocheck
import { API_KEY } from '../../API_KEY';
import News from '../../src/v2/news/everything/News';

const news = new News(API_KEY);
const validConfig = { q: 'movies', sources: 'bbc-news', domains: 'www.bbc.co.uk' };
const invalidConfig = { invalidField: 'invalid data for news instance' };

describe('the instance has', () => {
    test('ok status from the response with the valid configuration for news', async () => {
        const data = await news.request(validConfig);
        expect(data.status).toBe('ok');
    });

    test('error status from the response with the invalid configuration for news', async () => {
        const data = await news.request(invalidConfig);
        expect(data.status).toBe('error');
    });
})
