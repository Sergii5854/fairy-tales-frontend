import React, {Component} from 'react';
import './styles.styl';


// import search from './ic_search.svg'

export default class Search  extends Component {
    state = {};


    render() {
        return (
            <div className='search'>
                <button
                    type="submit"
                    className="search__submit search__btn">

                </button>
                <input
                    className="search__input"
                    placeholder="Search"
                    type="text"/>

            </div>
        )
    }
}
