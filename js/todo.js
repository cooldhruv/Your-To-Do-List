
	var a = document.getElementById('bt').addEventListener("click", myFunction);
   
     

function myFunction(e){

  var b = document.getElementById("myText").value;
  
  if(localStorage.getItem('ar')===null){
    var ar = new Array();
    ar.push(b);
  
    localStorage.setItem('ar',JSON.stringify(ar));
  }

  else{
    var ar = JSON.parse(localStorage.getItem('ar'));
    ar.push(b);
    
    localStorage.setItem('ar',JSON.stringify(ar));
  }

  
  document.getElementById('frm1').reset();

  fetchit();

  e.preventDefault();
  

}


function fetchit(){

  var ar = JSON.parse(localStorage.getItem('ar'));
  var pending_flag = ar.length;
  document.getElementById('np').innerHTML = pending_flag;
  var fetchedId = document.getElementById('demo');

  fetchedId.innerHTML = '';

  for(var i=0;i<ar.length;i++){
    var fetched = ar[i];

    fetchedId.innerHTML += '<div class = "well">'+(i+1)+'. '+fetched+'<button class = "hmari" onclick = "canDelete(\''+i+'\');">'+'Done'+'</button>'+'</div>'+'<br>';
  }
}


function canDelete(r){
  var ar = JSON.parse(localStorage.getItem('ar'));
  
  

  

  for(var j = 0;j<ar.length;j++){
    if(j==r){
      var glah = ar[j];
      ar.splice(j,1);
  }
 }

 

  
  localStorage.setItem('ar',JSON.stringify(ar));
  fetchit();
  completeit(glah);
}


function completeit(c){
  

  if (localStorage.getItem('arr')===null) {
    var arr = new Array();

    arr.push(c);

    localStorage.setItem('arr',JSON.stringify(arr));

  }

  else{
    var arr = JSON.parse(localStorage.getItem('arr'));

    arr.push(c);

    localStorage.setItem('arr',JSON.stringify(arr));
  }

  fetchForComplete();

 } 

function fetchForComplete(){
  var arr = JSON.parse(localStorage.getItem('arr'));
  var complete_flag = arr.length;
  document.getElementById('np2').innerHTML = complete_flag;
  var fetchComp = document.getElementById('demon');

  fetchComp.innerHTML = '';

  for(var i=0;i<arr.length;i++){
    var fetchedComp = arr[i];

    fetchComp.innerHTML += '<div class  = "well">'+(i+1)+'. '+fetchedComp+'<button class = "hmari2" onclick = "myFunction2(\''+fetchedComp+'\',\''+i+'\')">'+'Move Back to Pending ones'+'</button>'+'</div>';
  }
}

function myFunction2(p,l){
 

  

    var ar = JSON.parse(localStorage.getItem('ar'));
    ar.push(p);
    localStorage.setItem('ar',JSON.stringify(ar));
    

 

  var arr = JSON.parse(localStorage.getItem('arr'));

  for(var j = 0;j<arr.length;j++){
    if(j==l){
      var glah2 = arr[j];
      arr.splice(j,1);
  }
 }

  
  localStorage.setItem('arr',JSON.stringify(arr));
  fetchit();  
  fetchForComplete();

  
  

  
  
  
}


function getConfirmation(){
  var confirmation = confirm('Do you want to refresh the list?');
  if(confirmation==true){
    localStorage.clear();
    window.location.reload();
  }

  else{
    alert('Changes will not be removed');
  }


}

