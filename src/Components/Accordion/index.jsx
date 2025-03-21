import { useState } from "react";
import data from "./data";
import "./styles.css"
export default function Accordian() {
    const [selected, setselected] = useState(null);
    const[EnableMultiSelection,setEnableMultiSelection]=useState(false)
    const[Multiple,setMultiple]=useState([])
    function handleSingleSelection(getCurrentid) {
        setselected(getCurrentid===selected?(null):getCurrentid);
    }
    function handleMultiSelection(getCurrentid){
       let cpyMultiple=[...Multiple]
       const findIndex=cpyMultiple.indexOf(getCurrentid)
       console.log(findIndex)
    if(findIndex===-1){
        cpyMultiple.push(getCurrentid)
    }else{
        cpyMultiple.splice(findIndex,1)
    }
    setMultiple(cpyMultiple)
    console.log(selected,cpyMultiple);
 
}

 
    return (
        <>
            <div className="wrapper">
                <button onClick={()=>setEnableMultiSelection(!EnableMultiSelection)}>Enable Multi Selection</button>
                <div className="Accordian">
                    {
                        data && data.length > 0 ? (
                            data.map((dataItems) => (
                                <div className="item" key={dataItems.id}> {/* ✅ Added key prop to avoid React warning */}
                                    <div 
                                        onClick={EnableMultiSelection?
                                         ()=>   handleMultiSelection(dataItems.id)
                                            :() => handleSingleSelection(dataItems.id)} 
                                        className="title"
                                    >
                                        <h3>{dataItems.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        EnableMultiSelection?Multiple.includes(dataItems.id)&&
                                        <div className="content">
                                        {dataItems.answer}
                                    </div>: selected === dataItems.id &&<div className="content">
                                        {dataItems.answer}
                                    </div>
                             
                                    }
                                </div>
                            ))
                        ) : (
                            <div>No data found</div>
                        )
                    }
                </div>
            </div>
        </>
    );
}
