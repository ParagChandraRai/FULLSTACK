function f()
{
    var value=document.getElementById("input").value;
//    alert(value);
var newDiv = document.createElement("div");
var str="_________________________________ ."
for(var i=1;i<=value;i++)
{

    str= "i "+str;

    
    newDiv.appendChild(str);

}



}