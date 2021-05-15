const Movie = ({Poster: poster, Title: title, Year: year, imdbID: id, Type: type, openModal}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={poster === 'N/A' ? `https://via.placeholder.com/300x444?text=${title}` : poster} alt={title} />
                <button className="btn-floating halfway-fab waves-effect waves-light light-blue accent-2" 
                    data-id={id}
                    onClick={e => openModal.apply(this, [e])}>
                    <i className="material-icons">add</i>
                </button>
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
        </div>
    )

}

export default Movie
