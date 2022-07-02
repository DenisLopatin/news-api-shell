import News from '../news/everything/News';
import Bestsellers from '../news/top-headlines/Bestsellers';
import Publishers from '../news/sources/Publishers';

type instances = 'everything' | 'top-headlines' | 'sources';

export default class NewsFactory {
    constructor(protected readonly APIKey: string) {}

    public getInstanceOf(instanceOf: instances): NewsPaper {
        switch (instanceOf) {
            case 'everything': return new News(this.APIKey);
            case 'top-headlines': return new Bestsellers(this.APIKey);
            case 'sources': return new Publishers(this.APIKey);
        }
    }
}
