import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
      <>
        <h1>NewsCB</h1> 

    <div className='m-4'>
    <div className='row'>
            <div className="col-md-3 my-2">
               <NewsItem title="my title" description="my desc" imageUrl="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"/>
            </div>
            <div className="col-md-3 my-2">
               <NewsItem title="my title" description="my desc" imageUrl="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"/>
            </div>
            <div className="col-md-3 my-2">
               <NewsItem title="my title" description="my desc" imageUrl="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"/>
            </div>
            <div className="col-md-3 my-2">
               <NewsItem title="my title" description="my desc" imageUrl="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"/>
            </div>
            <div className="col-md-3 my-2">
               <NewsItem title="my title" description="my desc" imageUrl="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"/>
            </div>
        </div>

    </div>
       
      </>

    )
  }
}

export default News;