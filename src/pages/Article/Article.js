import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Article extends Component {
    render () {
        const { article } = this.props;
        return (
            <div className='page-content'>
                <h1>{article.title}</h1>
                <p className='page-content__content-block__text'>{article.text}</p>
                <Link 
                    className='page-content__content-block__back-link'
                    to='/'>
                    Назад
                </Link>
            </div>
        )
    }
}
