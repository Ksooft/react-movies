import { useEffect, useState } from 'react'


const Pagination = ({postsPerPage, currentPage, changePage}) => {
    const [arrCurrButt, setCurrentButton] = useState([])
    const pages = []
    const width = window.innerWidth
    for (let i = 1; i <= postsPerPage; i++) {
        pages.push(i)
    }
    let newPages = []
    const nextPage = e => {
        e.preventDefault()
        if (arrCurrButt[arrCurrButt.length - 1] !== postsPerPage) {
            newPages = [...pages]
            newPages = newPages.slice(arrCurrButt[0], arrCurrButt[arrCurrButt.length - 1] + 1)
            setCurrentButton(newPages)
        }
    }

    const prevPage = e => {
        e.preventDefault()
        if (arrCurrButt[0] !== 1) {
            newPages = [...pages]
            newPages = newPages.slice(arrCurrButt[0] - 2, arrCurrButt[arrCurrButt.length - 1] - 1)
            setCurrentButton(newPages)
        }
    }
    useEffect(() => {
        if (width < 510) {
            newPages = [...pages]
            if (newPages.length > 5) {
                newPages = newPages.slice(0, 5)
            } else if (newPages.length <= 5) {
                newPages = [...pages]
            }
            setCurrentButton(newPages)
            return
        }
        newPages = [...pages]
        if (newPages.length > 10) {
            newPages = newPages.slice(0, 10)
        } else if (newPages.length <= 10) {
            newPages = [...pages]
        }
        setCurrentButton(newPages)
    }, [postsPerPage])

    return (
        <div className="pagination-wrapper" style={{textAlign: 'center'}}>
            <ul className="pagination">
                <li onClick={prevPage} className={arrCurrButt[0] === 1 ? "waves-effect disabled" : "waves-effect"}>
                    <a href="/"><i className="material-icons">chevron_left</i></a>
                </li>
                {arrCurrButt.map(p => {
                    return <li key={p}
                        className={p === currentPage ? "waves-effect active" : "waves-effect hover"}
                        onClick={e => changePage(p, e)}>
                        <a href="/">{p}</a>
                    </li>
                })}
                <li onClick={nextPage} className={arrCurrButt[arrCurrButt.length - 1] === postsPerPage ? "waves-effect disabled" : "waves-effect"}>
                    <a href="/"><i className="material-icons">chevron_right</i></a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
