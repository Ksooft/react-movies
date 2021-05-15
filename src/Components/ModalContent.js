const ModalContent = ({k, content}) => {
    if (k !== 'Poster' && k !== 'Metascore' && k !== 'imdbRating' && k !== 'imdbVotes' && k !== 'imdbID' && k !== 'Type' && k !== 'DVD' && k !== 'Website' && k !== 'Response') {
        if (k === 'Ratings') {
            return <li><span className="modal-key">Ratings:</span>
                {content[k].length ? content[k].map((r, i) => (
                    <span key={i} className="modal-ratings">
                        <span className="modal-ratings-source">Source:</span> {r.Source} Value: {r.Value}
                    </span>
                )) : <span className="modal-value">N/A</span>}
            </li>
        }
        return <li><span className="modal-key">{k === 'totalSeasons' ? 'Total seasons' : k}:</span> <span className="modal-value">{content[k]}</span></li>
    } else {
        return ''
    }
}

export default ModalContent
