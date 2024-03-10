import React, {useState} from "react";


function Cards({ Klik }){

        const [tombol1,setTombol1] = useState(1);
        const [tombol2,setTombol2] = useState(2);
        const [tombol3,setTombol3] = useState(3);
        const [tombol4,setTombol4] = useState(4);

        function menambahkanKlik_1 (){
            setTombol1(tombol1 + 1);
            Klik();
        }
        function menambahkanKlik_2 (){
            setTombol2(tombol2 + 2);
            Klik();
        }
        function menambahkanKlik_3 (){
            setTombol3(tombol3 + 3);
            Klik();
        }
        function menambahkanKlik_4 (){
            setTombol4(tombol4 + 4);
            Klik();
        }

    return(
        <>
        <div className="item item-1" onClick={menambahkanKlik_1} >{tombol1}</div>
        <div className="item item-2" onClick={menambahkanKlik_2}>{tombol2}</div>
        <div className="item item-3" onClick={menambahkanKlik_3}>{tombol3}</div>
        <div className="item item-4" onClick={menambahkanKlik_4}>{tombol4}</div>
        </>
            
    );
}

export default Cards