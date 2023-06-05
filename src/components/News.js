import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            apikey: "809ff72368874be4ab94ce7845ea6708",
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyNewsApp`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })

    }

    async componentDidMount() {
        this.updateNews()
    }

    handalPre = async () => {
        this.setState({ page: --this.state.page })
        this.updateNews()
    }

    handalNext = async () => {
        this.setState({ page: ++this.state.page })
        this.updateNews()
    }



    render() {

        return (

            <div className='container my-5'>
                <h2 className='text-center'>DailyNews - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines </h2>

                {this.state.loading && <Spinner />}


                <div className='row'>

                    {!this.state.loading && this.state.articles.map((element) => {

                        if (element.urlToImage == null) {
                            element.urlToImage = 'https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg'
                        }



                        if (element.description == null) {
                            element.description = 'No description'
                        }

                        return <div className='col-md-4 my-3' key={element.url}>
                            <NewsItems tital={element.title.slice(0, 52) + "..."} description={element.description.slice(0, 150) + " ..."} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.author} date={element.publishedAt} source={element.source} />
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
