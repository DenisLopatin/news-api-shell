import API from '../API';

export default class Publishers extends API {
    constructor(protected readonly APIKey: string) {
        super();
        this.APIBaseURL += `top-headlines/sources?apiKey=${this.APIKey}`;
    }
}
