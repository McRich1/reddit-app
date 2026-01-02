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
                <img className="img" src ="/reddit-logo1.png" alt="reddit-logo" />
                <SearchBar input={input} setInput={setInput} onSearch={handleSearch}/> 
                <div>test</div>
                <div>test</div>
                <div>test</div>
              </header>
            </>
        )
    }

    export default NavigationHeader;
   