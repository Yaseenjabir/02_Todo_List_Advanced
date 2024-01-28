const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');
function addTask(){
  if(inputBox.value === ''){
    alert("Please Add Something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    inputBox.value = ''
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
}
listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
})

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
};