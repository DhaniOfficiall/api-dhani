window.setTimeout("getip()",1000);
function getip(){
  var xhr=new XMLHttpRequest();
  var url='https://api.ipify.org?format=json';
  xhr.onloadend=function(){
  data=JSON.parse(this.responseText);
  document.getElementById("ip").textContent=data.ip
};
xhr.open("GET",url,true);
xhr.send();
}
