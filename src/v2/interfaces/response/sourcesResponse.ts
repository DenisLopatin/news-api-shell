interface sourcesResponse {
    status: 'ok' | 'error',
    sources: {
        id: string,
        name: string,
        description: string,
        url: string,
        category: string,
        language: string,
        country: string,
    }[],
}
