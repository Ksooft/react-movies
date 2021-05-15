const Header = ({initial}) => {

    function defaultState(e) {
        e.preventDefault()
        initial()
    }

    return (
        <nav className="light-blue accent-2">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo" onClick={defaultState}>Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/Ksooft" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Header
