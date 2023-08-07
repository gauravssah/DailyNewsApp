import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultImage: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg',
        };
    }

    replaceImage = (error) => {
        //replacement of broken Image
        error.target.src = this.state.defaultImage;
    }
    render() {
        let { title, description, imageurl, newsUrl, publishedAt, author } = this.props;

        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" style={{ maxHeight: "10rem", minHeight: "10rem" }} alt="image" onError={this.replaceImage} />
                    <div className="card-body" style={{ maxHeight: "18rem", minHeight: "18rem" }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>

                        <div style={{ position: "absolute", bottom: "1rem" }}>

                            <h6 className="card-subtitle mb-2 text-muted">By- {author}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">At- {publishedAt}</h6>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-warning" style={{ fontWeight: "bold" }} >Read More</a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
