interface NewsPaper {
    request(config: newsConfig | bestsellersConfig): Promise<newsResponse>;
    request(config: publishersConfig): Promise<sourcesResponse>;
}
