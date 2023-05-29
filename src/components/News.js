import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },

        // ------------------------------------------------------------

        {
            "source": {
                "id": "handelsblatt",
                "name": "Handelsblatt"
            },
            "author": "Katrin Terpitz",
            "title": "Bärchenwurst“-Hersteller drosselt Produktion: „Verwerfungen auf dem Fleischmarkt“",
            "description": "Weil der Fleischkonsum einbricht, orientiert sich Deutschlands zweitgrößter Wursthersteller neu. Für Fleisch aus dem Bioreaktor will In Family Foods die komplette Infrastruktur liefern.",
            "url": "https://www.handelsblatt.com/unternehmen/handel-konsumgueter/das-unternehmergespraech-baerchenwurst-hersteller-drosselt-produktion-auf-dem-fleischmarkt-gibt-es-immense-verwerfungen/29167704.html",
            "urlToImage": "https://www.handelsblatt.com/images/baerchen-wurst/29167726/3-format2003.jpg",
            "publishedAt": "2023-05-28T09:48:52+00:00",
            "content": "Düsseldorf Vor zwei Jahren fusionierten die traditionsreichen Wursthersteller Reinert und Kemper zu In Family Foods, der neuen Nummer zwei in Deutschland. Weil hierzulande aber immer weniger Fleisch … [+12584 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Maram Humaid",
            "title": "Day of mourning: 200,000 Palestinian families lose UN food aid",
            "description": "By August, the WFP will be forced to suspend operations in the West Bank and Gaza if no funding is received.",
            "url": "http://www.aljazeera.com/news/2023/5/28/wfp-cuts-aid-to-200-000-palestinian-families",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/05/1E3A0759-copy-1685250260.jpg?resize=1920%2C1440",
            "publishedAt": "2023-05-28T09:30:07Z",
            "content": "Gaza The message Aisha Abu Obeid received on her mobile in early May hit her like a thunderbolt. Her monthly food voucher from the United Nations World Food Programme (WFP), it said, would be stopped… [+6089 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Hanna Duggal, Marium Ali",
            "title": "Why do more than 800 million people live in hunger?",
            "description": "Ten percent of the worlds population does not have enough food, the highest number in more than a decade.",
            "url": "http://www.aljazeera.com/news/2023/5/28/why-is-global-hunger-on-the-rise-2",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/05/INTERACTIVE_HUNGER_DAY_MAY25_2023-1685258010.png?resize=1200%2C675",
            "publishedAt": "2023-05-28T07:32:15Z",
            "content": "Hunger levels are rising around the world.\r\nAs many as 828 million people or 10 percent of the worlds population go to bed hungry each night, 46 million more than the previous year, according to the … [+3045 chars]"
        },
        {
            "source": {
                "id": "google-news-uk",
                "name": "Google News (UK)"
            },
            "author": "BBC",
            "title": "Plans for supermarket price cap on basic food - BBC",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiJGh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy91ay02NTczNjk0NNIBKGh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy91ay02NTczNjk0NC5hbXA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-05-28T04:11:53+00:00",
            "content": null
        },
        {
            "source": {
                "id": "google-news-ca",
                "name": "Google News (Canada)"
            },
            "author": "The Globe and Mail",
            "title": "Biden and McCarthy agree to 2-year budget deal to raise debt ceiling, enhance work requirements for food aid - The Globe and Mail",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnRoZWdsb2JlYW5kbWFpbC5jb20vYnVzaW5lc3MvYXJ0aWNsZS1iaWRlbi1hbmQtbWNjYXJ0aHktYWdyZWUtdG8tdGFsay1vbi1kZWJ0LWNyaXNpcy1ob3VzZS1zcGVha2VyLXNheXMv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-05-27T23:03:33+00:00",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "What is a balanced diet? Knowing the answer can help you make better food choices.",
            "description": "A balanced diet is vital for maintaining good mental and physical health, optimal weight and fitness, and assuring you feel your best.",
            "url": "https://www.usatoday.com/story/life/health-wellness/2023/05/14/what-is-a-balanced-diet-and-why-the-answer-is-important/70188995007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/01/03/USAT/dba26ab9-095c-4e83-8962-150ae33e479c-GettyImages-1390699821.jpg?auto=webp&crop=2120,1193,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2023-05-15T05:29:25+00:00",
            "content": "A balanced diet is vital for maintaining good mental and physical health, optimal weight and fitness, and assuring you feel your best.\r\n\"Finding a way of eating that is nutritious and sustainable not… [+4891 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "U.S. prices pick up, showing inflation pressures persist",
            "description": "The Fed is paying particular attention to so-called core prices, which exclude volatile food and energy costs and are regarded as a better gauge of longer-term inflation trends.",
            "url": "https://www.politico.com/news/2023/05/10/u-s-prices-pick-up-showing-inflation-pressures-persist-00096178",
            "urlToImage": "https://static.politico.com/ef/04/f68dc3864544b1f2113911afe2d6/grocery-shopping-13587.jpg",
            "publishedAt": "2023-05-10T12:54:50+00:00",
            "content": "The Fed is paying particular attention to so-called core prices, which exclude volatile food and energy costs and are regarded as a better gauge of longer-term inflation trends. Core prices rose 0.4%… [+2972 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Dipak K Dash",
            "title": "Government to provide 5 kg free food grains to poor for May & June",
            "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
            "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T04:23:00Z",
            "content": null
        }

    ]





    constructor() {
        super();
        // console.log("helooooo")

        this.state = {
            articles: this.articles,
            loading: false
        }

    }


    render() {
        return (
            <div className='container my-5'>
                <h2>DailyNews - Top HeadLines</h2>

                <div className='row'>

                    {this.state.articles.map((element) => {

                        if (element.urlToImage == null) {
                            element.urlToImage = 'https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg'
                        }

                        if (element.description == null) {
                            element.description = 'no description'
                        }
                        return <div className='col-md-4 my-3' key={element.url}>
                            <NewsItems tital={element.title.slice(0, 52) + "..."} description={element.description.slice(0, 50) + " ..."} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>



            </div>
        )
    }
}

export default News
