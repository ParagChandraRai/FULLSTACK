document.getElementById("f1").addEventListener("click", fun1);
document.getElementById("f2").addEventListener("click", fun2);
document.getElementById("f3").addEventListener("click", fun3);
document.getElementById("f4").addEventListener("click", fun4);
document.getElementById("f5").addEventListener("click", fun5);
function fun1() 
{
  // Get the first paragraph by tag name
  const firstParagraph = document.querySelector('p');
  alert(firstParagraph.textContent);
}
function fun2()
{
  // Get each paragraph by their id
  const para1 = document.querySelector('#p1');
  const para2 = document.querySelector('#p2');
  const para3 = document.querySelector('#p3');
  const para4 = document.querySelector('#p4');

  console.log('Paragraph 1:', para1.textContent);
  console.log('Paragraph 2:', para2.textContent);
  console.log('Paragraph 3:', para3.textContent);
  console.log('Paragraph 4:', para4.textContent);

}
function fun3()
{
  // Get all paragraphs as a nodeList using tag name
  var nodeList = document.querySelectorAll("p");
 
  // Loop through the nodeList and get the text content of each paragraph

    for(var i=0;i<nodeList.length;i++)
    {
     console.log( nodeList[i].textContent);
    }
}
function fun4()
{
    var nodeList = document.querySelectorAll("p");
  for(var i=0;i<nodeList.length;i++)
{
 
 nodeList[i].style.backgroundColor = "red"; 
 nodeList[i].style.border = "10px solid blue";
nodeList[i].style.fontSize ="x-large";
nodeList[i].style.fontSize='16px'
nodeList[i].style.fontFamily = 'Arial';

}
}
function fun5()
{
    var nodeList = document.querySelectorAll("p");
for(var i=0;i<nodeList.length;i++)
{
 if(i%2==0)
 nodeList[i].style.backgroundColor = "red"; 
 else
  nodeList[i].style.backgroundColor = "green"; 
}		 

}