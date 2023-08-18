import React from 'react'

const NewsItem = (props) => {

    const replaceImage = (error) => {
        error.target.src = 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg';
    }

    let { title, description, imageurl, newsUrl, publishedAt, author, source } = props;

    return (
        <div>
            <div className="card" style={{ width: "18rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                <span className=" newspublishername badge rounded-pill bg-danger text-light" style={{ zIndex: "1", position: "absolute", right: "-10px", top: "-8px", fontWeight: "bold" }}>
                    {source}</span>
                <img src={imageurl} className="card-img-top" style={{ maxHeight: "10rem", minHeight: "10rem" }} alt="image" onError={replaceImage} />
                <div className="card-body" style={{ maxHeight: "18rem", minHeight: "18rem" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>

                    <div style={{ position: "absolute", bottom: "1rem" }}>
                        <p className="card-text"><small className="text-muted">By- {author} on {new Date(publishedAt).toUTCString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-warning" style={{ fontWeight: "bold" }} >Read More</a>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
