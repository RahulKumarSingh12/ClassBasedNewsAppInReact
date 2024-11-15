import React, { Component } from 'react'

export default class NewsItem extends Component {

    articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Frances Vinall, Victoria Bisset, Heba Farouk Mahfouz, Lior Soroka, Bryan Pietsch, Abbie Cheeseman, Mohamad El Chamaa, Suzan Haidamous, Loveday Morris, Steve Hendrix, John Hudson",
            "title": "Live Briefing: IDF hits north Gaza’s last functioning hospital, officials say; U.S. officials in Israel - The Washington Post",
            "description": "Israel attacked Kamal Adwan Hospital, Gaza authorities said. White House officials Amos Hochstein and Brett McGurk are in Israel to meet with top leaders.",
            "url": "https://www.washingtonpost.com/world/2024/10/31/israel-iran-war-news-lebanon-gaza-palestine/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XIDF5ACQXCIYZFLYWK2AKQAJVU.jpg&w=1440",
            "publishedAt": "2024-10-31T12:24:21Z",
            "content": "Israeli forces on Thursday attacked Kamal Adwan Hospital, the last functioning hospital in northern Gaza, health officials said Thursday, amid growing concern over the humanitarian situation in the n… [+2052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Nika Shakhnazarova",
            "title": "Martha Stewart rips into her own Netflix documentary on release day, slams director’s work: ‘Lousy’ - New York Post ",
            "description": "The lifestyle guru, 83, did not mince words as she ripped into the film’s director, R.J. Cutler, over the final result.",
            "url": "https://nypost.com/2024/10/31/entertainment/martha-stewart-rips-into-her-own-netflix-documentary-on-release-day-i-hate-those-last-scenes/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/10/92755156.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-10-31T11:41:00Z",
            "content": "Martha Stewart is not happy with the way her new Netflix documentary, “Martha,” had turned out.\r\nThe lifestyle guru, 83, ripped into the doc’s filmmaker, R.J. Cutler, over the final result, saying it… [+2296 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Patrick Smith",
            "title": "LA hit by looting and chaos amid Dodgers World Series celebrations - NBC News",
            "description": "A bus was set on fire, shops were looted and fireworks thrown at police in scenes of lawlessness and \"absolute chaos\" in downtown LA following the Dodgers' historic World Series win over the New York Yankees on Wednesday night.",
            "url": "https://www.nbcnews.com/news/us-news/la-looting-dodgers-world-series-celebrations-rcna178178",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241031-dodgers-looting-mb-1110-df211d.jpg",
            "publishedAt": "2024-10-31T11:32:00Z",
            "content": "A bus was set on fire, shops were looted and fireworks thrown at police in scenes of lawlessness and \"absolute chaos\" in downtown LA following the Dodgers' historic World Series win over the New York… [+2392 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Zachary Cohen, Sean Lyngaas, Sara Murray",
            "title": "Election officials are outmatched by Elon Musk’s misinformation machine - CNN",
            "description": "Elon Musk’s misinformation megaphone has created a “huge problem” for election officials in key battleground states who told CNN they’re struggling to combat the wave of falsehoods coming from the tech billionaire and spreading wildly on his X platform.",
            "url": "https://www.cnn.com/2024/10/31/politics/election-officials-outmatched-elon-musk-misinformation/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2178881650.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-31T11:12:00Z",
            "content": "Elon Musks misinformationmegaphone has created a huge problem for election officials in key battleground states who told CNN theyre struggling to combat the wave of falsehoods coming from the tech bi… [+7647 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Elizabeth Robinson",
            "title": "L.A. Dodgers win World Series and Trump targets blue states in the campaign's last days: Morning Rundown - NBC News",
            "description": "Donald Trump wears orange vest, garbage, Nicky Jam, Elon Musk, Los Angeles Dodgers, New York Yankees, Spain floods, North Korea missile test, Starbucks non-dairy milk fee",
            "url": "https://www.nbcnews.com/news/dodgers-world-series-spain-floods-morning-rundown-rcna178170",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241030-dodgers-celebrate-lr-fc323a.jpg",
            "publishedAt": "2024-10-31T11:07:40Z",
            "content": "Donald Trump takes his campaign to New Mexico, one of several blue-state stops. The Los Angeles Dodgers take home a World Series title. And a trip underground to see a 600-ton sphere that scientists … [+8264 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Marina Pitofsky, Mark Robison",
            "title": "Election 2024 live updates: Trump, Harris both rally voters in Nevada; latest polls - USA TODAY",
            "description": "Former President Donald Trump and Vice President Kamala Harris will both address their supporters in a key swing state on Thursday: Nevada.",
            "url": "https://www.usatoday.com/story/news/politics/elections/2024/10/31/election-2024-live-updates-trump-harris-nevada/75943403007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/30/USAT/75943778007-usatsi-24624407.jpg?crop=1919,1079,x0,y0&width=1919&height=1079&format=pjpg&auto=webp",
            "publishedAt": "2024-10-31T10:07:17Z",
            "content": "Former President Donald Trump and Vice President Kamala Harris will both address supporters in a key swing state on Thursday: Nevada.\r\nTrump is holding a rally in Henderson, Nevada, located southeast… [+8564 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Lisa Pauline Mattackal",
            "title": "Futures tumble as Meta, Microsoft cost warnings highlight AI trade risks - Yahoo Finance",
            "description": "(Reuters) -Wall Street futures tumbled on Thursday as warnings from Meta Platforms and Microsoft about rising AI-related costs dampened optimism around...",
            "url": "https://finance.yahoo.com/news/futures-tumble-meta-microsoft-cost-094829806.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/d82fb6ccf31c252e5d801e3e08393175",
            "publishedAt": "2024-10-31T09:48:29Z",
            "content": "By Lisa Pauline Mattackal\r\n(Reuters) -Wall Street futures tumbled on Thursday as warnings from Meta Platforms and Microsoft about rising AI-related costs dampened optimism around megacap stocks, whic… [+2944 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "Watch: Hands-on with M4 MacBook Pro, iMac and the new Mac mini - 9to5Mac",
            "description": "YouTuber Brian Tong brings us a nice video of Apple’s Los Angeles hands-on showroom event on Wednesday, which let creators...",
            "url": "https://9to5mac.com/2024/10/31/watch-hands-on-m4-macbook-pro-imac-mac-mini/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/10/apple-las-showroom-mac-mini.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-10-31T09:48:23Z",
            "content": "YouTuber Brian Tong brings us a nice video of Apple’s Los Angeles hands-on showroom event on Wednesday, which let creators get their first hands on with the new M4-powered Mac product lineup. \r\nYou c… [+962 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ABC News",
            "title": "Civil rights groups warn of potential voter suppression ahead of Election Day - ABC News",
            "description": null,
            "url": "https://abcnews.go.com/Politics/civil-rights-groups-warn-potential-voter-suppression-ahead/story?id\\\\u003d115323820",
            "urlToImage": null,
            "publishedAt": "2024-10-31T09:26:28Z",
            "content": null
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "John T Psaropoulos",
            "title": "Ukraine prepares to fight North Korean troops in Kursk as war escalates - Al Jazeera English",
            "description": "South Korea, US say 3,000 North Korean troops are entering combat imminently. Experts unsure that’ll change war course.",
            "url": "https://www.aljazeera.com/news/2024/10/31/ukraine-prepares-to-fight-north-korean-troops-in-kursk-as-war-escalates",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/10/2024-01-05T113553Z_1928933399_RC2I95AUNY91_RTRMADP_3_UKRAINE-CRISIS-MISSILE-NORTH-KOREA-1730335918.jpg?resize=1920%2C1440",
            "publishedAt": "2024-10-31T08:42:45Z",
            "content": "Ukraine prepared to fight North Korean troops in the Russian region of Kursk on Wednesday, as the entry of a second nuclear power in Russias war against Ukraine threatened to escalate and broaden the… [+8593 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Breathtaking Views: NASA’s Perseverance Rover Battles Slippery Terrain To Reach Mars’ Summit - SciTechDaily",
            "description": "NASA's Perseverance rover is making a treacherous ascent up Jezero Crater's western wall, navigating slippery slopes and testing new driving strategies to enhance traction. With sights set on reaching the crater rim soon, it aims to investigate scientifically…",
            "url": "https://scitechdaily.com/breathtaking-views-nasas-perseverance-rover-battles-slippery-terrain-to-reach-mars-summit/",
            "urlToImage": "https://scitechdaily.com/images/NASA-Perseverance-Mars-Rover-Tracks-Reveal-Terrain-Slipperiness.jpg",
            "publishedAt": "2024-10-31T08:20:29Z",
            "content": "Tracks shown in this image indicate the slipperiness of the terrain Perseverance has encountered during its climb up the rim of Jezero Crater. The image was taken by one of rover’s navigation cameras… [+7465 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "North Korea launches new, perhaps more agile ICBM designed to reach U.S. mainland in first such test in almost a year - CBS News",
            "description": "North Korea launched a new, perhaps more agile ICBM in its first test in almost a year of a weapon designed to threaten the U.S. mainland, days ahead of the U.S. election.",
            "url": "https://www.cbsnews.com/news/north-korea-icbm-test-mainland-us-more-agile/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/10/31/ea818b02-9d08-466f-b67f-8d9a94b229d8/thumbnail/1200x630/89dedcda3e533bb593128cda29d8708a/ap24305196209485.jpg?v=da20036415aedcaca28a32ffe615549e",
            "publishedAt": "2024-10-31T07:57:00Z",
            "content": "Seoul, South Korea — North Korea launched a new intercontinental ballistic missile Thursday in its first test in almost a year of a weapon designed to threaten the U.S. mainland, days ahead of the U.… [+6926 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Lim Hui Jie",
            "title": "Asia markets slip as BOJ holds rates; China factory activity expands for first time since April - CNBC",
            "description": "The Bank of Japan is expected to hold rates at 0.25%, according to a Reuters poll of economists.",
            "url": "https://www.cnbc.com/2024/10/31/asia-markets.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108055316-1730329750125-gettyimages-2172308362-JAPAN_BOJ.jpeg?v=1730329798&w=1920&h=1080",
            "publishedAt": "2024-10-31T07:41:00Z",
            "content": "Kazuo Ueda, governor of the Bank of Japan (BOJ), speaks during a news conference at the central bank's headquarters in Tokyo, Japan\r\nAsia-Pacific markets slipped Thursday as investors look to the Ban… [+2421 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Lauren Kent, Sophie Tanno, Atika Shubert, Taylor Ward, Mauricio Torres, Lauren Said-Moorhouse",
            "title": "At least 95 killed and dozens missing in Spain’s flash floods - CNN",
            "description": "At least 95 people have been killed by severe flash floods in Spain, according to authorities on Wednesday, as emergency responders scramble to find dozens of missing people.",
            "url": "https://www.cnn.com/2024/10/30/europe/spain-flash-floods-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24304251598291.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-31T07:04:00Z",
            "content": "At least 95 people have been killed by severe flash floods in Spain, according to authorities on Wednesday, as emergency responders scramble to find dozens of missing people.\r\nIn the worst-affected r… [+6339 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Akron Beacon Journal"
            },
            "author": "Nate Ulrich",
            "title": "'It's a beautiful story': Bronny James scores first NBA points in Cleveland vs Cavs - Akron Beacon Journal",
            "description": "The Lakers' LeBron, Bronny James lost to the Cavs, yet their return to Cleveland was filled with special moments, including Bronny's first NBA bucket.",
            "url": "https://www.beaconjournal.com/story/sports/pro/cavs/2024/10/30/lebron-bronny-james-return-play-game-cleveland-cavs-ohio-lakers-stats-first-career-points/75949349007/",
            "urlToImage": "https://www.beaconjournal.com/gcdn/authoring/authoring-images/2024/10/30/NABJ/75951305007-usatsi-24628723.jpeg?crop=3985,2242,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-10-31T06:50:48Z",
            "content": "CLEVELAND Akron native LeBron James posed for photographs, gave hugs and exchanged handshakes with dozens of people, a collection of family, friends and fans, Wednesday night on his way out of Rocket… [+5457 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Ayana Archie",
            "title": "Arnold Schwarzenegger has endorsed Kamala Harris for president - NPR",
            "description": "Schwarzenegger served as the governor of California from 2003 to 2011. He said he is frustrated with both parties, and does not trust either, but felt compelled to speak out.",
            "url": "https://www.npr.org/2024/10/31/nx-s1-5173456/arnold-schwarzenegger-endorses-kamala-harris",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6122x3444+0+74/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F49%2Fb7%2F6b8a70814557a30c419f1d6314f5%2Fap24261488922399.jpg",
            "publishedAt": "2024-10-31T06:15:15Z",
            "content": "Former Republican governor and actor Arnold Schwarzenegger has endorsed Democratic nominee Kamala Harris for president.\r\nIn a lengthy Wednesday post on X, Schwarzenegger said he does not typically gi… [+1789 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tipranks.com"
            },
            "author": "Sheryl Sheth",
            "title": "Analysts Cautious on Super Micro Computer (NASDAQ:SMCI) Post E&Y Exit - TipRanks",
            "description": "Analysts have drawn caution on AI (artificial intelligence) player Super Micro Computer ($SMCI) stock after the surprise exit of its auditor, Ernst  Young LLP,...",
            "url": "https://us.tipranks.com/news/analysts-cautious-on-super-micro-computer-nasdaqsmci-post-ey-exit",
            "urlToImage": "https://blog.tipranks.com/wp-content/uploads/2024/10/shutterstock_1826145776-750x406.jpg",
            "publishedAt": "2024-10-31T05:05:01Z",
            "content": "Analysts have drawn caution on AI (artificial intelligence) player Super Micro Computer (SMCI) stock after the surprise exit of its auditor, Ernst &amp; Young LLP, yesterday. Ernst &amp; Young (E&amp… [+2678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Thursday, October 31, 2024 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/horoscopes/2024/10/31/horoscope-for-thursday-october-31-2024",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/2145dbd/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fac%2Ffd%2F790f04b15195427014757adc0272%2Fgeorgia-nicols.jpg",
            "publishedAt": "2024-10-31T05:02:27Z",
            "content": "Moon Alert\r\nAvoid shopping or important decisions from 11:30 a.m. to 1 p.m. Chicago time. After that, the moon moves from Libra into Scorpio.\r\nAries (March 21-April 19)\r\nTread carefully this morning,… [+3844 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Lex Harvey, Edward Szekeres",
            "title": "Live updates: The latest on war in the Middle East - CNN",
            "description": "Top US officials are heading to the Middle East seeking progress on resolving the conflicts in Gaza and Lebanon and to deter a further Iranian response to Israel. Follow live updates.",
            "url": "https://www.cnn.com/world/live-news/israel-iran-palestine-gaza-war-10-31-24-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2181226280.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-31T04:52:00Z",
            "content": "The amount of aid entering Gaza has sunk to the lowest level since Israels war in the enclave started, UN data shows.\r\nOnly 836 aid trucks have entered the Gaza Strip so far this month, according to … [+1193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Radiohead singer Thom Yorke walks off stage as fan shouts Gaza protests - BBC.com",
            "description": "Thom Yorke hit back at the fan after he heckled the singer over death numbers in Gaza during a performance in Melborne.",
            "url": "https://www.bbc.com/news/articles/c5yrv2zyd22o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f66d/live/0ab3d430-9750-11ef-9d53-85e9b8570d92.jpg",
            "publishedAt": "2024-10-31T04:44:54Z",
            "content": "Radiohead singer Thom Yorke briefly walked off stage during his Australian solo tour after an exchange with an audience member who heckled him with a protest about deaths in Gaza. \r\nVideos posted onl… [+2708 chars]"
        }
    ]


    constructor() {
        super();
        console.log(" Hello I am a Constructor from newscomponent  ");
        this.state = {
            "status": "ok",
            "totalResults": 38,
            articles: this.articles,
            loading: false
        }
    }

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className='my-3'>
                    <div className="card" >
                        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                        </div>
                        <img className="card-img-top" src={imageUrl} />
                        <div className="card-body">
                            <h5 className="card-title">{title} </h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' className="btn btn-dark"> Read More </a>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}


//<span class="badge badge-secondary">New</span>
