const Buttons=({process})=>{
    const ibutton=[
        "C",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "+",
        "-",
        "*",
        "/",
        "=",
        "."
    ]
    return(
    <>
     <div className="container">
        <div className="row text-center">
       
     {ibutton.map((item,index)=>{
        return(
        <div key={index} className="col-4">
        <button className="w-75 p-2 rounded mb-1 btn btn-info" onClick={()=>{process(item)}}>
            {item}
        </button>
        </div>
        )} 
     )}
     </div>
     </div>
     </>
    );
}

export default Buttons;