var ClickStructList=function (text) {
  window.alert("click");
  window.alert(text);
 };

 var text="Hello World";
 document.getElementById("struct_list").innerHTML="<li    
   onClick='ClickStructList(\""+text+"\");'><a href='#'>"+text;
