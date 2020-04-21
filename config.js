var config = {
    style: 'mapbox://styles/kaleidoscope-nordic/ck8600z750nsl1inwoav0bz44',
    accessToken: 'pk.eyJ1Ijoia2FsZWlkb3Njb3BlLW5vcmRpYyIsImEiOiJjazg1enVnaXIwOHZrM21tcmZjbDUxaDRwIn0.pOG773RmH9HB62xgqQzR5Q',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Europan 16 Norway',
    subtitle: 'Welcome to the most exciting round of Europan to date. Europan is the worlds largest architecture competition. Come and take a look at the range of different exciting sites we have to offer.',
    byline: 'By Europan Norway',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Europa',
            title: 'All sites E16',
            image: './path/to/image/source.png',
            description: 'Europan 16 has a total of 34 sites across 12 countries',
            location: {
                center: [7.26527, 52.03094],
                zoom: 3.75,
                pitch: 52,
                bearing: -15.92
            },
            onChapterEnter: [
                // {
                //     layer: 'TestsitesEU',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'TestsitesEU',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'NO sites',
            title: 'Norway sites',
            image: './path/to/image/source.png',
            description: 'The five Norwegian sites offer a range of different challenges raning from urban-rural divide, creating life and reviving a heritage town centre to redeveloping an industrial island in the centre of a city.',
            location: {
                center: [9.53893, 62.39672],
                zoom: 5,
                pitch: 43,
                bearing: 0.91
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'test',
            title: 'Haugesund Risøy',
            image: './path/to/image/source.png',
            description: 'Risøy er en sentrumsbydel med verftsindustri som er viktig for både byen og regionen, og med eldre boligbebyggelse med svært varierende bokvalitet. Bydelen skårer lavt på sist gjennomførte levekårsundersøkelse, men har et stort potensial som et attraktivt boområde med sterk stedsidentitet.',
            location: {
              center: [5.26763, 59.41244],
                zoom: 13.5,
                pitch: 60,
                bearing: -20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
