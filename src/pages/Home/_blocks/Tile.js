import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tile.styles.scss';

export class Tile extends Component {
    render () {
        const {title, description, type, id} = this.props;
        return (
            <div className='tile'>
                <div className='tile__text'>
                    <h3 className='tile__text__title'>{title}</h3>
                    <p className='tile__text__description'>{description}</p>
                </div>
                <img className='tile__img' src={`http://placekitten.com/500/300?image=${id}`} />
            </div>
        )
    }
}

Tile.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    }
