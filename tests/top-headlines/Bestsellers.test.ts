// @ts-nocheck
import { API_KEY } from '../../API_KEY';
import Bestsellers from '../../src/v2/news/top-headlines/Bestsellers';

const bestsellers = new Bestsellers(API_KEY);
const validConfig = { q: 'bitcoin', sources: '', category: '', country: '' };
const invalidConfig = { invalidField: 'invalid data for bestsellers instance' };

describe('the instance has', () => {
    test('ok status from the response with the valid configuration for bestsellers', async () => {
        const data = await bestsellers.request(validConfig);
        expect(data.status).toBe('ok');
    });

    test('error status from the response with the invalid configuration for bestsellers', async () => {
        const data = await bestsellers.request(invalidConfig);
        expect(data.status).toBe('error');
    });
})
