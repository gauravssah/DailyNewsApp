import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=809ff72368874be4ab94ce7845ea6708&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    handalPre = async () => {
        // console.log("previous")

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=809ff72368874be4ab94ce7845ea6708&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handalNext = async () => {
        // console.log("handalNext")

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=809ff72368874be4ab94ce7845ea6708&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1,
                loading: false
            })
        }
    }



    render() {

        return (

            <div className='container my-5'>
                <h2>DailyNews - Top HeadLines</h2>

                {this.state.loading && <Spinner />}


                <div className='row'>

                    {!this.state.loading && this.state.articles.map((element) => {

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

                <div className='container d-flex justify-content-between'>

                    {!this.state.loading && <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handalPre}> &larr; Previous</button>}

                    {!this.state.loading && <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handalNext}>Next &rarr;</button>}

                </div>

            </div>
        )
    }
}

export default News
