interface newsConfig {
    q: string;
    sources: string;
    domains: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: string;
    sortBy?: string;
    page?: string | number;
    pageSize?: string | number;
}
