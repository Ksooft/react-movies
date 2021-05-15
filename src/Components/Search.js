import React, { Component } from 'react'
import Filters from './Filters'

class Search extends Component {
    state = {
        search: '',
    }

    handleKey = event => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.props.stateType)
        }
    }

    render() {
        const {searchMovies, handleFilter, stateType} = this.props
        const {search} = this.state
        return (
        <div className="row">
            <div className="input-field">
                <input placeholder="Search" type="search" className="validate" id="search"
                    value={this.state.search} 
                    onChange={e => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                    <button className="btn btn-search light-blue accent-2" onClick={() => searchMovies(search, stateType)}>search</button>
            </div>
            <Filters filtered={handleFilter} stateType={stateType} search={search} />
        </div>
        )
    }
}

export default Search
