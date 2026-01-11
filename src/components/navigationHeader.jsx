    import SearchBar from "./searchBar";
    import { useState } from "react";
    

    function NavigationHeader (){
        const[input, setInput] = useState("");
        function handleSearch (searchTerm) {
        //search logic goes here
      }
        return(
            <>
              <header className="App-header">
                <div className="reddit-logo-container">
                <img className="img" src ="/reddit-logo1.png" alt="reddit-logo" />
                <h6 style={{marginLeft: "10px"}}> <span style={{color:"#2046dfff"}}>Reddit</span><span style={{color:"black"}}>Minimal</span></h6>
                </div>
                <SearchBar input={input} setInput={setInput} onSearch={handleSearch}/> 
              </header>
            </>
        )
    }

    export default NavigationHeader;
   