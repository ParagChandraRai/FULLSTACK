
import React,{useState} from 'react'
const Stock = () => {
    const[Fnotebook,setFnotebook]=useState(2);
    const[Tnotebook,setTnotebook]=useState(10);
    const[pencil,setPencil]=useState(8);
    const[Eraser,setEraser]=useState(3);
    const[drawing,setdrawing]=useState(2);
    const[total,setTotal]=useState(25);
  
    const change=()=>{
    var n=document.getElementById("num").value;
    if(Fnotebook<1||Tnotebook<1||pencil<1||drawing<1||Eraser<1)
    {
        alert("Out of Stock");
    }
    else
    {
    if(n==1)
        setFnotebook(Fnotebook-1);
    if(n==2)
        setTnotebook(Tnotebook-1);
    if(n==3)
         setPencil(pencil-1);
    if(n==5)
         setdrawing(drawing-1);     
    if(n==4)
     setEraser(Eraser-1);
    
     setTotal(total-1);
    }
    
   };
  return (
    <div>
      <table border="1">
        <tr>
            <td>1</td>
            <td>Four Line NoteBook</td>
            <td>{Fnotebook}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Two Line NoteBook</td>
            <td>{Tnotebook}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>HB pencil</td>
            <td>{pencil}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Eraser</td>
            <td>{Eraser}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Drawing notebook</td>
            <td>{drawing}</td>
        </tr>
      </table>
      Total stock:{total}<br></br>
      sell by id:<input type="number" id="num"></input><br></br>
      <button type="button" onClick={change} value="click">Click</button>
    </div>
  )
}

export default Stock
