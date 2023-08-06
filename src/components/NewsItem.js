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
        let { title, description, imageurl, newsUrl } = this.props;

        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" alt="..." onError={this.replaceImage} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-warning" style={{ fontWeight: "bold" }} >Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
