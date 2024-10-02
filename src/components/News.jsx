import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
      <>
        <div>This my newscb application that will show the exact news </div>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </>

    )
  }
}

export default News;