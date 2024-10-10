import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {

    const {title, description, imageUrl, newsUrl} = this.props;

    return (
      <>
        <div className="card" style={{width: "18rem"}}>
        <img width={200} height={150} src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-primary readMoreBtn">Read more</a>
        </div>
        </div>
      </>
    )
  }
}

export default NewsItem