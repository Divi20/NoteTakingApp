let text = document.getElementById('text').value;
 
function add_note(){

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
li.innerHTML= document.getElementById('text').value;
li.append(span)
li.append(editnote)
li.append(deletenote)
ul.appendChild(li)

}

function edit_note(editnote){
  
}
  
function delete_note(deletenote){
   
    }
  