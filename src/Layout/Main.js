import React, { Component } from 'react'
import Movies from '../Components/Movies'
import Preloader from '../Components/Preloader'
import Search from '../Components/Search'
import Modal from '../Components/Modal'
import ModalPreloader from '../Components/ModalPreloader'
import Pagination from '../Components/Pagination'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            lastRequest: '',
            type: 'all',
            movies: [],
            isLoaded: false,
            modal: false,
            modalContent: {},
            isLoadedModal: true,
            postsPerPage: 0,
            currentPage: 1
        }
        this.mainRef = React.createRef()
    }
    
    // first mount
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, 
                isLoaded: true, 
                postsPerPage: Math.ceil(data.totalResults / 10),
                lastRequest: 'matrix' }))
    }

    // onclick link to reload page
    componentDidUpdate(prevProps) {
        if (prevProps.reboot !== this.props.reboot && this.props.reboot) {
            if (this.state.lastRequest !== 'matrix') {
                this.searchMovies()
            } else if (this.state.lastRequest === 'matrix' && this.state.type !== 'all') {
                this.searchMovies()
            }
            
        }
    }

    // search movies
    searchMovies = (value, type = 'all') => {
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${value ? value : 'matrix'}${type !== 'all' ? `&type=${type}` : ''}`
        this.setState({isLoaded: false, lastRequest: `${value ? value : 'matrix'}`, type})
        this.state.currentPage !== 1 && this.setState({ currentPage: 1})
        fetch(url)
            .then(response => response.json())
            .then(data => { this.setState({ movies: data.Search, 
                isLoaded: true,
                postsPerPage: Math.ceil(data.totalResults / 10) }) })
    }

    // change type search
    handleFilter = (e, search) => {
        this.setState(() => ({ type: e.target.value }), () => {
            this.searchMovies(search, this.state.type)
        })
    }

    // modal
    openModal = e => {
        this.setState({ isLoadedModal: false })
        const id = e.currentTarget.dataset.id
        setTimeout(() => {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
                .then(response => response.json())
                .then(data => this.setState({ modal: true, modalContent: data, isLoadedModal: true }))
        }, 500);
        document.querySelector('.modal-detail-content').scrollTop = 0
    }

    // pagination
    changePage = (number, e) => {
        e.preventDefault()
        if (number !== this.state.currentPage) {
            this.setState({ currentPage: number, isLoaded: false })
            const movie = this.state.lastRequest
            const type = this.state.type
            setTimeout(() => {
                fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${type !== 'all' ? `&type=${type}` : ''}&page=${number}`)
                    .then(response => response.json())
                    .then(data => this.setState({ movies: data.Search, isLoaded: true }))
            }, 300);
        } 
    }

    

    render() {
        const {movies = [], isLoaded, modal, modalContent, isLoadedModal, postsPerPage, currentPage, type} = this.state
        return (
            <main className="container content" ref={this.mainRef}>
                <Search searchMovies={this.searchMovies} handleFilter={this.handleFilter} stateType={type} />
                {isLoaded ? <Movies movies={movies} openModal={this.openModal} /> : <Preloader />}
                {isLoadedModal ? '' : <ModalPreloader />}
                <Modal isOpened={modal} onModalClose={() => this.setState({ modal: false, modalContent: {} })} content={modalContent} />
                {movies.length ? <Pagination postsPerPage={postsPerPage} currentPage={currentPage} changePage={this.changePage} /> : ''}
            </main>
        )
    }
}

export default Main

