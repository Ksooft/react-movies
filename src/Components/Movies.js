import Movie from './Movie'

const Movies = ({movies, openModal}) => {
    const searchMathes = []
    const countsMathes = {}
    movies.forEach(m => searchMathes.push(m.imdbID))
    for (let i = 0; i < searchMathes.length; i++) {
        const element = searchMathes[i];

        if (!countsMathes.hasOwnProperty(element)) {
            countsMathes[element] = 0
        }
        countsMathes[element]++
    }
    return (
        <>
            {movies.length 
                ? <div className="cards">
                    {movies.map(m => {
                        if (m.imdbID !== 'tt6320628' && countsMathes[m.imdbID] < 2) {
                            return <Movie key={m.imdbID} {...m} openModal={openModal} />
                        } 
                        return ''
                    })}
                </div>
                : <h3>Nothing found!</h3>}
        </>
    )
}

export default Movies

