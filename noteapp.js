 
function add_note(){
  let text = document.getElementById('text');
  if(text.value === ""){
    alert("Empty Note, Please Enter!")
  }
    else{
  let ul = document.getElementById('mylist');
  let li = document.createElement('li');  
  let span = document.createElement('span');
  let editnote = document.createElement('button');
    editnote.addEventListener("click",function(){
      edit_note(editnote);
    });
    editnote.innerHTML = "Edit";
    editnote.style.backgroundColor = "yellow";
    editnote.style.borderRadius = "10px";
    editnote.style.padding = "5px";
    editnote.style.color = "black";
    
  let deletenote = document.createElement('button');
    deletenote.addEventListener("click",function(){
      delete_note(deletenote);
    });
      deletenote.innerHTML = "Delete";
    deletenote.style.backgroundColor = "Red";
    deletenote.style.borderRadius = "10px";
    deletenote.style.padding = "5px";
    deletenote.style.color = "black";
  li.innerHTML= text.value;
  span.append(editnote)
  span.append(deletenote)
  li.append(span)
  ul.appendChild(li)
  text.value="";
  }
  }
  function edit_note(editnote){
    let text = document.getElementById('text');
    text.value= "";
    text.value = editnote.parentNode.parentNode.innerHTML.split('<')[0]
    let ul = editnote.parentNode.parentNode.parentNode
    ul.removeChild(editnote.parentNode.parentNode)
    
  }
    
  function delete_note(deletenote){
     let ul = deletenote.parentNode.parentNode.parentNode
     ul.removeChild(deletenote.parentNode.parentNode)
      }
    