import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItems extends Component {



    render() {

        let { tital, description, imageUrl, newsUrl } = this.props;

        return (

            <div>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tital}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItems
