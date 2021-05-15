const Filter = ({type, handleRadio, state}) => {
    return (
        <label>
            <input className="with-gap" type="radio" name="type" value={type}
                checked={state === type}
                onChange={e => handleRadio(e)}
            />
            <span>{type[0].toUpperCase() + type.slice(1)}</span>
        </label>
    )
}

export default Filter
