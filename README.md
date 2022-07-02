## News API Shell

_Shell for the [News API service](https://newsapi.org/)_

### Getting start

You have to import the news factory and pass your API key to it:

    const factory = new NewsFactory(`Your API key`);

Then you can create one of the three instance to work with:

* News - working with data from the "everything" section
* Bestsellers - working with data from the "top-headlines" section
* Publishers - working with data from the "sources" section

After that create configuration object and pass it to the instance 
you will be working with:

    // you must pass all required parameters
    // if you don't need some field, pass empty string
    const validConfigForEverething = { 
        q: 'movies', 
        sources: 'bbc-news', 
        domains: 'www.bbc.co.uk' 
    };

    const everything = factory.getInstanceOf('everything');
    const topHeadlines = factory.getInstanceOf('top-headlines');
    const sources = factory.getInstanceOf('sources');

And use it:

    everything.request(config)
        .then((response) => {
            console.log(response); // data
        });
