import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {

    // articles = [
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Jay Croft",
    //         "title": "Winning numbers announced for massive Mega Millions jackpot - CNN",
    //         "description": "Friday night’s Mega Millions jackpot is estimated at $1.35 billion, the fourth-highest ever for the lottery.",
    //         "url": "https://www.cnn.com/2023/08/04/us/mega-millions-jackpot-drawing-friday/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230804125426-mega-millions-080323.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-08-05T03:09:00Z",
    //         "content": "The winning numbers for Friday nights Mega Millions jackpot, estimated at $1.35 billion, are 11-30-45-52-56 with a Mega Ball of 20.\r\nIf there is a winning ticket, it would be the second-highest jackp… [+798 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Jonathan Vanian",
    //         "title": "Meta's Threads will soon have search and web functions, Zuckerberg says - CNBC",
    //         "description": "Meta's Threads app will soon get a search function and be available to access via the web, as CEO Mark Zuckerberg tries to take on Twitter",
    //         "url": "https://www.cnbc.com/2023/08/04/metas-threads-to-have-search-and-web-functions-zuckerberg-says-.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107268892-1688996618217-gettyimages-1513200328-kaluthotage-notitle230707_npKjG.jpeg?v=1691194197&w=1920&h=1080",
    //         "publishedAt": "2023-08-05T00:09:00Z",
    //         "content": "Meta's Twitter-like Threads app will soon get a search function and be available to access via the web.\r\nIn a Threadspost on Friday, Meta CEO Mark Zuckerberg said the new features will be \"coming in … [+1321 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Abigail Summerville, Milana Vinn, David Carnevali",
    //         "title": "Exclusive: UBS nears major investment bank restructuring - Reuters",
    //         "description": `"UBS Group AG https://www.reuters.com/markets/companies/UBSG.S\" target=\"_blank\">(UBSG.S)</a> is poised to make sweeping changes to the senior ranks of its investment banking division globally as soon as Monday, marking a new milestone in the process o…"`,
    //         "url": "https://www.reuters.com/business/finance/ubs-nears-major-investment-bank-restructuring-sources-2023-08-04/",
    //         "urlToImage": "https://www.reuters.com/resizer/KBxse5tvTTUwMj6V4PGMzZ7CqhE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JEUUCAZE5JM2ZJG5LQRWLOR2SI.jpg",
    //         "publishedAt": "2023-08-04T23:52:00Z",
    //         "content": "NEW YORK, Aug 4 (Reuters) - UBS Group AG (UBSG.S) is poised to make sweeping changes to the senior ranks of its investment banking division globally as soon as Monday, marking a new milestone in the … [+3888 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Barron's"
    //         },
    //         "author": "Randall W. Forsyth",
    //         "title": "The Fed Will Disappoint Wall Street and Main Street - Barron's",
    //         "description": "Don’t look for lower inflation or interest-rate cuts anytime soon. Instead, higher bond yields probably are in the offing.",
    //         "url": "https://www.barrons.com/articles/the-fed-will-disappoint-wall-street-and-main-street-fedf3b57",
    //         "urlToImage": "https://images.barrons.com/im-830343/social",
    //         "publishedAt": "2023-08-04T23:40:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": ", USA TODAY",
    //         "title": "Michigan Lottery: Muskegon Co. man wins Mega Money Match jackpot - USA TODAY",
    //         "description": "A 67-year-old Muskegon County man recently won $1.1 million on the Michigan Lottery's Mega Money Match.",
    //         "url": "https://www.usatoday.com/story/money/2023/08/04/michigan-lottery-mega-jackpot-money-match/70532799007/",
    //         "urlToImage": "https://www.gannett-cdn.com/authoring/authoring-images/2023/08/03/PDTF/70519913007-080123-fast-cash-mega-money-ma.jpg?auto=webp&crop=648,366,x1,y25&format=pjpg&width=1200",
    //         "publishedAt": "2023-08-04T23:23:09Z",
    //         "content": "It couldn't be right. That's what a Muskegon County, Michigan, man thought when he saw his Mega Money Match Fast Cash ticket from the Michigan Lottery matched a number to win the game's progressive j… [+2484 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Forbes"
    //         },
    //         "author": "Antonio Pequeño IV",
    //         "title": "Twitter HQ Landlord Paid San Francisco Over $4,000 In Fees After Musks Team Installed 'X' Sign On Roof - Forbes",
    //         "description": "The sign stood atop Twitters San Francisco headquarters for three days and received criticism from nearby residents for its bright, flashing lights.",
    //         "url": "https://www.forbes.com/sites/antoniopequenoiv/2023/08/04/twitter-hq-landlord-paid-san-francisco-over-4000-in-fees-after-musks-team-installed-x-sign-on-roof/",
    //         "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64cd862d90152b7b5a364b30/0x0.jpg?format=jpg&crop=2556,1437,x0,y5,safe&width=1200",
    //         "publishedAt": "2023-08-04T23:17:42Z",
    //         "content": "The landlord of Twitter's San Francisco headquarters paid the city $4,447 in fees this week after the social media companynow known as Xconstructed and hastily removed a glowing X sign atop its roof,… [+3721 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "WAYNE PARRY",
    //         "title": "4 new offshore wind power projects proposed for New Jersey Shore; 2 would be far out to sea - The Associated Press",
    //         "description": "Four new wind farms are being proposed off the New Jersey coast. At least two of them would be more than twice as far out to sea as other projects that have drawn the ire of residents who don’t want to see windmills on the horizon. Essen, Germany-based RWE an…",
    //         "url": "https://apnews.com/article/offshore-wind-new-jersey-ef06281bc44a0831decf6d0a72079c6e",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/e2c57ef/2147483647/strip/true/crop/3648x2052+0+342/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2Fae%2F1d9a7c1f69d8b42fe909a482d6a8%2Fe29d3586af8242289bee4f906d1adaf2",
    //         "publishedAt": "2023-08-04T23:16:00Z",
    //         "content": "ATLANTIC CITY, N.J. (AP) Wind power developers proposed four new projects off the New Jersey Shore on Friday, a surge that would more than double the number of wind farms built off its coast if they … [+3893 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Chron.com"
    //         },
    //         "author": "Chron",
    //         "title": "ERCOT issues Weather Watch as Texas grid shatters demand record - Chron",
    //         "description": null,
    //         "url": "https://www.chron.com/news/houston-texas/article/ercot-texas-grid-heat-energy-18279978.php",
    //         "urlToImage": null,
    //         "publishedAt": "2023-08-04T21:58:52Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Michael Sheetz",
    //         "title": "Astra conducts layoffs, raises debt and shifts focus to spacecraft engines in bid to survive - CNBC",
    //         "description": "Struggling space company Astra is cutting 25% of its workforce and restructuring to focus more on its spacecraft engine business.",
    //         "url": "https://www.cnbc.com/2023/08/04/astra-conducts-layoffs-raises-debt-shifts-focus-to-spacecraft-engines.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107282339-1691182635633-astra_spacecraft_engine.png?v=1691185379&w=1920&h=1080",
    //         "publishedAt": "2023-08-04T21:42:59Z",
    //         "content": "Struggling space company Astra is cutting 25% of its workforce, the company announced Friday, and restructuring to focus more on its spacecraft engine business, which will delay progress on the small… [+2713 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-verge",
    //             "name": "The Verge"
    //         },
    //         "author": "Emma Roth",
    //         "title": "Judge dismisses major arguments in Google antitrust case - The Verge",
    //         "description": "A judge has dismissed several key claims in an antitrust lawsuit filed against Google, including allegations that the design of the companys search engine harmed competitors.",
    //         "url": "https://www.theverge.com/2023/8/4/23820538/google-antitrust-lawsuit-claims-dismissed",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/zoPORZsYcJT2WjI5lx7z45IV7As=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016886/STK093_Google_03.jpg",
    //         "publishedAt": "2023-08-04T21:35:50Z",
    //         "content": "Judge dismisses major arguments in Google antitrust case\r\nJudge dismisses major arguments in Google antitrust case\r\n / Google wont have as much to defend when it goes to trial next month.\r\nByEmma Rot… [+2277 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Adriana Diaz",
    //         "title": "Millions of US workers near retirement age have zero money saved: report - New York Post ",
    //         "description": "“After a lifetime of work, all Americans should be able to retire with dignity,” Sen. Sheldon Whitehouse (D-R.I.), said.",
    //         "url": "https://nypost.com/2023/08/04/millions-of-us-workers-near-retirement-age-with-zero-savings/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000019325654.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2023-08-04T21:35:00Z",
    //         "content": "Were not doing great.Only one in 10 low-income workers between the ages of 51 and 64 had any retirement savings in 2019 a significant decline compared with one in five low-income workers in 2007,… [+4930 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KGET 17"
    //         },
    //         "author": "Luis Garcia",
    //         "title": "Target at Valley Plaza mall to enforce chaperone policy for teens after 4 p.m. - KGET 17",
    //         "description": "BAKERSFIELD, Calif. (KGET) — The Target store located at the Valley Plaza mall will begin to enforce a chaperone policy, which states teenagers must be accompanied by a guardian in order to enter the store after 4 p.m. A Target employee said an increase of fi…",
    //         "url": "https://www.kget.com/news/local-news/target-at-valley-plaza-mall-to-enforce-chaperone-policy-for-teens-after-4-p-m/",
    //         "urlToImage": "https://www.kget.com/wp-content/uploads/sites/2/2023/08/Target-at-Valley-Plaza.jpg?w=1280",
    //         "publishedAt": "2023-08-04T21:20:19Z",
    //         "content": "BAKERSFIELD, Calif. (KGET) — The Target store located at the Valley Plaza mall will begin to enforce a chaperone policy, which states teenagers must be accompanied by a guardian in order to enter the… [+396 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": ", USA TODAY",
    //         "title": "Google users will get alerts when they appear in search result - USA TODAY",
    //         "description": "Google is rolling out an alert when users appear in a search result, as well as the ability to remove personal information and explicit photos.",
    //         "url": "https://www.usatoday.com/story/tech/2023/08/04/google-users-alerts-search-result/70530494007/",
    //         "urlToImage": "https://www.gannett-cdn.com/authoring/authoring-images/2023/08/04/USAT/70532935007-ap-google-news-automation.jpg?auto=webp&crop=4114,2324,x0,y209&format=pjpg&width=1200",
    //         "publishedAt": "2023-08-04T21:12:46Z",
    //         "content": "Want to know if your information is popping up on Google? It will alert you.\r\nThe company is rolling out a new dashboard to alerts users when their personal information appears online, or when a new … [+2167 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Cheyenne DeVon",
    //         "title": "Tupperwares stock price is up nearly 500% in 2 weeks—but think carefully before buying into the hype, says CFP - CNBC",
    //         "description": "Tupperware's share price has sky rocketed as retail traders focus their attention on the company. But investing in so-called \"meme stocks\" can be risky.",
    //         "url": "https://www.cnbc.com/2023/08/04/tupperwares-stock-price-is-up-nearly-500-percent-in-two-weeks.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107256886-1686768768431-gettyimages-1481252432-dsc03426_b675287b-747a-4310-b0e3-8571f1905e7a.jpeg?v=1691183449&w=1920&h=1080",
    //         "publishedAt": "2023-08-04T21:10:49Z",
    //         "content": "Lately, it seems that retail traders have been focused on Tupperware.\r\nLate Thursday, the consumer products company announced it had finalized an agreement with its lenders to restructure its debt. S… [+2915 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Barron's"
    //         },
    //         "author": "Karishma Vanjani",
    //         "title": "PayPal Stock Extends Decline as Analyst Cites Threat From Apple - Barron's",
    //         "description": "Analysts at Evercore downgraded the stock to the equivalent of Hold because of Intensifying competition and declines in operating margins.",
    //         "url": "https://www.barrons.com/articles/paypal-stock-apple-downgrade-782a57dc",
    //         "urlToImage": "https://images.barrons.com/im-830044/social",
    //         "publishedAt": "2023-08-04T20:51:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Fox Business"
    //         },
    //         "author": "Daniella Genovese",
    //         "title": "Wells Fargo fixing tech issue after customers report missing deposit transactions - Fox Business",
    //         "description": "Wells Fargo said Friday that it has been working to resolve a technical issue that caused some customers' deposit transactions to disappear from their accounts.",
    //         "url": "https://www.foxbusiness.com/lifestyle/wells-fargo-fixing-tech-issue-customers-report-missing-deposit-transactions",
    //         "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/Wells-Fargo-NYC.jpg?ve=1&tl=1",
    //         "publishedAt": "2023-08-04T20:49:59Z",
    //         "content": "Wells Fargo is working to resolve a technical issue after several customers reported that their deposit transactions had disappeared from their accounts. \r\nCustomers started to report the problem to … [+2024 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Cointelegraph"
    //         },
    //         "author": "Marcel Pechman",
    //         "title": "Coinbase earnings show the company is now much more than just an exchange - Cointelegraph",
    //         "description": "Coinbase earnings show the exchange has extended its focus far beyond trading fee revenue.",
    //         "url": "https://cointelegraph.com/news/coinbase-earnings-show-the-company-is-now-much-more-than-just-an-exchange",
    //         "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDgvNjU1YzJhMjUtZjE4Ny00YjdhLTllODgtNDYwMmNkOTVmYTliLmpwZw==.jpg",
    //         "publishedAt": "2023-08-04T20:31:26Z",
    //         "content": "Coinbase, a leading U.S. cryptocurrency exchange, shared its second-quarter results on Aug. 3. Despite showing a net loss, some positives emerged, like a 13% cut in operating expenses from the last q… [+5028 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "WSBTV.com News Staff",
    //         "title": "Woman says Popeyes employees ripped her hair out because she complained about wrong order - Yahoo! Voices",
    //         "description": "She says she tried having her order fixed, but an employee climbed into her car and attacked her.",
    //         "url": "https://news.yahoo.com/woman-says-popeye-employees-ripped-201352326.html",
    //         "urlToImage": "https://media.zenfs.com/en/wsb_cox_articles_232/37a119bf0006b9826f0c52d7eb6dde9d",
    //         "publishedAt": "2023-08-04T20:13:52Z",
    //         "content": "An Atlanta woman is filing a lawsuit against Popeyes and several employees of the location she visited last September.\r\nDenetra Dawson says she went to the Popeyes on Cleveland Ave. to get dinner for… [+1801 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CT Post"
    //         },
    //         "author": "CTPost",
    //         "title": "Deeds: 'Supernatural' star Jensen Ackles buys historic CT mansion - CTPost",
    //         "description": null,
    //         "url": "https://www.ctpost.com/realestate/article/sasco-hill-road-southport-ct-mansion-sold-18267222.php",
    //         "urlToImage": null,
    //         "publishedAt": "2023-08-04T20:06:10Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Hamza Shaban",
    //         "title": "Apple stock falls 5% as hardware slowdown overshadows another record quarter for services - Yahoo Finance",
    //         "description": "Apple's services business has set consecutive sales records, but Wall Street was more focused on sliding revenue from hardware.",
    //         "url": "https://finance.yahoo.com/news/apple-stock-falls-5-as-hardware-slowdown-overshadows-another-record-quarter-for-services-200557147.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/lRNQUF.GBh0hgtkeeu0ptw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/f11840c0-32d7-11ee-b5f0-4370241f372c",
    //         "publishedAt": "2023-08-04T20:05:57Z",
    //         "content": "For the third time this fiscal year Apple has set a record for its growing services business. But the most valuable company on Wall Street has another three-quarter streak going: shrinking revenue.\r\n… [+2835 chars]"
    //     }

    // ]

    static defaultProps = {
        country: "in",
        pagesize: 8,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            // apiKay: "809ff72368874be4ab94ce7845ea6708"
            apiKay: "74cced90f2fe4c18b6b482f0cca82a9b"

        }

        if (this.props.category === "general") {
            document.title = "DailyNews: Your Source for Real-Time Updates on Politics, Business, Technology, Sports, and Entertainment"
        } else {
            document.title = `${this.textCaptlize(this.props.category)} - DailyNews`;
        }


    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKay}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    handalPrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKay}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,
        })
    }

    handalNext = async () => {


        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKay}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            })
        }

    }

    textCaptlize = (word) => {
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }

    render() {
        return (
            <div className='container my-3 ' >

                <h2 className='my-3 text-center'>{this.props.category === "general" ? "DailyNews - Top Headlines" : `DailyNews - Top Headlines of
                 ${this.textCaptlize(this.props.category)}`} </h2>

                {this.state.loading && <Spinner />}

                <div className="row mb-4 " >
                    {!this.state.loading && this.state.articles?.map((elements) => {

                        if (elements.description === null) {
                            elements.description = "Description Not Available..."
                        }

                        if (elements.title === null) {
                            elements.description = "Title Not Available..."
                        }

                        return <div className="col md-3 my-3 d-flex justify-content-center" key={elements.url}>
                            <NewsItem title={elements.title.length > "36" ? elements.title.slice(0, 36) + "..." : elements.title} description={elements.description?.length > "100" ? elements.description.slice(0, 100) + "..." : elements.description} imageurl={elements.urlToImage === null ? "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg" : elements.urlToImage} newsUrl={elements.url} author={elements.author === null ? "Unknown" : elements.author} publishedAt={elements.publishedAt} source={elements.source.name} />
                        </div>
                    })}
                </div>

                {!this.state.loading && <div className="container d-flex justify-content-between mb-5" >
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-warning" onClick={this.handalPrev} style={{ fontWeight: "bold" }}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-warning" onClick={this.handalNext} style={{ fontWeight: "bold" }}>Next &rarr;</button>
                </div>}

            </div>
        )
    }
}

export default News
