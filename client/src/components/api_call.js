import React from 'react'
import axios from 'axios'


class categoryClick extends React.Component {
    state = {articles : {}}
    
    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?category=${this.params.category}country=us&apiKey=${process.env.NA_API_KEY}&language=en&pageSize=100`)  
        .then(response => this.setState({ articles: response.data.articles }))
    }

    render() {
        console.log(this.state.articles)
        const {articles} = this.state
        return (
            articles.map(article => (
            <div className='listarticle'>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
                <h6>{article.source.name}</h6>
                <a href={article.url} />
            </div>))
        )
    }
}
