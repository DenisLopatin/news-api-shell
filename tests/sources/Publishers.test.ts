// @ts-nocheck
import { API_KEY } from '../../API_KEY';
import Sources from '../../src/v2/news/sources/Publishers';

const publishers = new Sources(API_KEY);
const validConfig = { category: '', language: 'en', country: '' };

describe('the instance has', () => {
    test('ok status from the response with the valid configuration for sources', async () => {
        const data = await publishers.request(validConfig);
        expect(data.status).toBe('ok');
    });
})
