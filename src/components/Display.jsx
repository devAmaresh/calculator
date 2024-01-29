const Display=({displayContent})=>{
    return(
      <input type="text" className="w-100 mb-2 border border-2 border-success rounded" value={displayContent} readOnly/>
    );
}

export default Display;