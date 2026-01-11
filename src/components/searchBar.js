import "../App.css"
import {  Search } from "lucide-react";

function SearchBar (prop){
    function handleInput (e){
        prop.setInput(e.target.value)
    }
    function handleSubmit (e){
        e.preventDefault();
        if(prop.input.trim()) {
            prop.onSearch(prop.input)
        }
    }
    function handleIconClick() {
        console.log("testing")
        if(prop.input.trim()){
            prop.onSearch(prop.input);
        }
    }

    return(
        <>
        
         <form onSubmit={handleSubmit} className="searchContainer">
             
              <input 
                 className="searchBar" 
                 type='text' 
                 id='searchBar' 
                 placeholder='Search...' 
                 value={prop.input} 
                 onChange={handleInput} 
              />
                <Search onClick={handleIconClick} style={{cursor: "pointer", color:"grey", marginLeft:"5px"}} />
            </form>
        </>
    );
}

export default SearchBar;