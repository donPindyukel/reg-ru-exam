import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tile } from './_blocks';

import './home.styles.scss';

export class Home extends Component {

    classNameChoice = (type) => 
        `page-content__content-block__articles-list__item normal ${type}`
    

    articlesList = (articles) => articles
        .map(article =>
            <li className={this.classNameChoice(article.type)} 
                key={article.id}
            >
                <Link 
                    className='page-content__content-block__articles-list__item__link'
                    to={{ pathname: `/${article.id}` }}>
                    <Tile title={article.title}
                        description={article.description}
                        type={article.type}
                        id={article.id}
                    />
                </Link>
            </li>)

    render() {
        const { articles } = this.props;
        return (
            <div className='page-content'>
                <h1>Articles</h1>
                <div className='page-content__content-block'>
                    <ul className='page-content__content-block__articles-list'>
                        {this.articlesList(articles)}
                    </ul>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            text: PropTypes.string
        })).isRequired
}
