function SearchBar({setSearch}){
    return (

        <>
            <div className="Search_Container">
               <i className="ri-search-line search_icon"></i> 
               <input onChange={(e)=>setSearch(e.target.value)} type="text" name="" id="" placeholder="Search Country!" className="input" />

                        
            </div>
        
        </>
    )
}

export default SearchBar;