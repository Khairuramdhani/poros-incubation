import React, {  useState, useEffect } from "react";
import Cards from "./Cards";

function Mainn(){
    const [klik, setKlik] = useState(0);

    useEffect(() => {
        document.title = `Klik ke-${klik}` ;
    }, [klik]);
    
    function Klik (){
        setKlik(klik + 1);
    }
    return(
        <>
        <body>
        <div className="angka">{klik} number changes detected</div>
        <div className="container">
        <Cards Klik = {Klik}/>
        </div>
        </body>
        </>
        
    );

}
export default Mainn