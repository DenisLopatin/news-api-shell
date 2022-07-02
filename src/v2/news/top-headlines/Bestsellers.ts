import API from '../API';

export default class Bestsellers extends API {
    constructor(protected readonly APIKey: string) {
        super();
        this.APIBaseURL += `top-headlines?apiKey=${this.APIKey}`;
    }
}
