import API from '../API';

export default class News extends API {
    constructor(protected readonly APIKey: string) {
        super();
        this.APIBaseURL += `everything?apiKey=${this.APIKey}`;
    }
}
