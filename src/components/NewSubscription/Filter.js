import './Filter(css).css'

const Filter=(props)=>{
    const onSelectHandler=(event)=>{
        props.dataFromFilter(event.target.value)
    }
    return (
        <div className="filter">
            <div className="filter_control">
                <label>Filter By Year</label>
                <select value={props.filteredData} onChange={onSelectHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
            <span >{props.filteredData} Data</span>

        </div>
    );
}
export default Filter;