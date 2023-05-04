
var arr=[];
   function AddTask()
   {
    var txt=document.getElementById("task").value;
	 var taskdata=document.getElementById("txtarea");
	  
	arr.push(txt);
	task.value="";
	taskdata.value="";
	for(var i=0;i<arr.length;i++)
    {
       taskdata.value=taskdata.value+arr[i]+"\n";
                              
    }
	 
   }
   function show()
   {
	   var taskdata=document.getElementById("txtarea");
	    if(arr.length==0)
        {
            showtask.value="";
            alert("PLEASE ENTER SOME TASK");
        }
        else
        {
          showtask.value=arr.pop();
          taskdata.value="";
          for(var i=0;i<arr.length;i++)
          {
			 
            taskdata.value=taskdata.value+arr[i]+"\n";           
                      
           }
        }
   }