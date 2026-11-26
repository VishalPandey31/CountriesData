
import './index.css'
function SelectMenu({ setSearch }) {
    return (
        <select defaultValue="" onChange={(e) => setSearch(e.target.value)} className="Select_Container">
            <option value="" disabled hidden>
                Filter by Region
            </option>

            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

export default SelectMenu;