import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About, Whatever, Article } from '../../pages';
import { apiService } from '../../services';
import spinnerGif from '../../assets/images/spinner.gif';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: true
        }
    }

    componentWillMount() {
        apiService.getArticles()
            .then(res => {
                this.articles = res;
                this.setState({ spinner: false })
            })
            .catch(err => console.log(err));
    }

    homeRender = () => (<Home articles={this.articles} />)

    articleRender = (props) => {
        const id = parseInt(props.match.params.id);
        const article = this.articles.find(article => article.id === id);
        return article ? <Article article={article} /> : <p>Not found</p>        
    };

    render() {
        const { spinner } = this.state;
        return (
            <div>
                {
                    spinner
                        ? <div><img src={spinnerGif} /></div>
                        : <main>
                            <Switch>
                                <Route exact path='/' render={this.homeRender} />
                                <Route path='/about' component={About} />
                                <Route path='/whatever' component={Whatever} />
                                <Route path='/:id' render={this.articleRender} />
                            </Switch>
                        </main>
                }
            </div>
        )
    }
}
