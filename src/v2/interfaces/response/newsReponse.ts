interface newsResponse {
    status: 'ok' | 'error';
    totalResult: number,
    articles: {
        sources: {
            id: string | null
            name: string
        },
        author: string | null,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string,
    }[],
}
