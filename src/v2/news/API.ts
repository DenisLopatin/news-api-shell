import { requestConfig, generalNewsConfig } from '../interfaces/config';
import { serverResponse } from '../interfaces/response';

export default abstract class API {
    protected APIBaseURL = 'https://newsapi.org/v2/';

    public async request(config: generalNewsConfig): Promise<newsResponse>
    public async request(config: publishersConfig): Promise<sourcesResponse>
    public async request(config: requestConfig): Promise<serverResponse> {
        const url = this.getFullUrlFromConfig(config);
        const response = await fetch(url);
        return await response.json() as Promise<serverResponse>;
    }

    protected getFullUrlFromConfig(config: requestConfig): string {
        return Object.entries(config).reduce((acc, [ field, value ]) => {
            const query = `&${field}=${value as string}`;
            const previousPath = acc.slice();
            return `${previousPath}${query}`;
        }, this.APIBaseURL);
    }
}
