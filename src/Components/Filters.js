import Filter from './Filter'

const Filters = ({stateType, filtered, search}) => {

    const handleRadio = e => filtered(e, search)

    return (
        <div>
            <Filter type={'all'} handleRadio={handleRadio} state={stateType} />
            <Filter type={'movie'} handleRadio={handleRadio} state={stateType} />
            <Filter type={'series'} handleRadio={handleRadio} state={stateType} />
            <Filter type={'game'} handleRadio={handleRadio} state={stateType} />
        </div>
    )
}

export default Filters
