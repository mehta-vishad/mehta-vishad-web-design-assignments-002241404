var count = 1;

function addNewStudent() {
  var table = document.getElementById("myTable");
  var tbodyRef = table.getElementsByTagName("tbody")[0];
  var studName=table.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || 'Student 0';
  var lastIndex=studName.split(" ")[1];

  var trNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML='<input id="checkbox" type= "checkbox" onClick="onCheckBoxClick(this)"/><br /><br /><img src="down.png" width="25px" onclick="showRow(this)"/>';
  var trStuCell = document.createElement("td");
  trStuCell.innerHTML="Student "+(parseInt(lastIndex)+1);
  var trTeachCell = document.createElement("td");
  trTeachCell.innerHTML="Teacher "+(parseInt(lastIndex)+1);
  var trAward = document.createElement("td");
  trAward.innerHTML="Approved";
  var trSem = document.createElement("td");
  trSem.innerHTML="Fall";
  var trType = document.createElement("td");
  trType.innerHTML="TA";
  var trBudget = document.createElement("td");
  trBudget.innerHTML=parseInt("12345");
  var trPerc = document.createElement("td");
  trPerc.innerHTML="100%";
  var trDel=document.createElement("td");
  trDel.setAttribute("class","de");
  var trEdit=document.createElement("td");
  trEdit.setAttribute("class","de");
  

  trNode.appendChild(trCheckBoxCell);
  trNode.appendChild(trStuCell);
  trNode.appendChild(trTeachCell);
  trNode.appendChild(trAward);
  trNode.appendChild(trSem);
  trNode.appendChild(trType);
  trNode.appendChild(trBudget);
  trNode.appendChild(trPerc);
  trNode.appendChild(trDel);
  trNode.appendChild(trEdit);

  tbodyRef.appendChild(trNode);

  var trDrop = document.createElement("tr");
  trDrop.setAttribute("class", "dropDownTextArea");
  
  var trAdv = document.createElement("td");
  trAdv.setAttribute("colspan","8");
  trAdv.innerHTML="Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
  trDrop.appendChild(trAdv);

  tbodyRef.appendChild(trDrop);

  alert("Student "+(parseInt(lastIndex)+1)+" Record has been added!");
}

// function onCheckBoxClick(checkbox) {
//   var subbut = document.getElementById("button");
//   var rowSelect = checkbox.parentElement.parentElement;
//   var table = document.getElementById("myTable");
//   var delhdr = table.lastElementChild.firstElementChild.lastElementChild.previousElementSibling;
//   var edihdr = table.lastElementChild.firstElementChild.lastElementChild;
//   var deleteButton = rowSelect.querySelector('#delete'); // Select delete button within the row
//   var editButton = rowSelect.querySelector('#edit'); // Select edit button within the row

//   if (checkbox.checked) {
//       // Checkbox is checked, show buttons and change row color
//       rowSelect.style.backgroundColor = "yellow";
//       subbut.style.backgroundColor = "orange";
//       deleteButton.style.display = "inline-block"; // Display delete button
//       editButton.style.display = "inline-block"; // Display edit button
//       delhdr.style.display = "table-cell";
//       edihdr.style.display = "table-cell";
//   } else {
//       // Checkbox is unchecked, hide buttons and reset row color
//       rowSelect.style.backgroundColor = "white";
//       subbut.style.backgroundColor = "grey";
//       deleteButton.style.display = "none"; // Hide delete button
//       editButton.style.display = "none"; // Hide edit button
//       delhdr.style.display = "none";
//       edihdr.style.display = "none";
//   }
// }

// Event listener for checkboxes
var checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', onCheckBoxClick(checkbox));
});

function showRow(imgElement){

  var dropDownRow = imgElement.parentElement.parentElement.nextElementSibling;

  if (dropDownRow.style.display === 'none' || dropDownRow.style.display === '') {
    dropDownRow.style.display = 'table-row';        
  } else {
    dropDownRow.style.display = 'none';
  }
}


function createDeleteButton() {
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("id","delet");
  
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    var row = deleteButton.parentNode.parentNode;
    row.parentNode.removeChild(row);
    var studNam=row.firstElementChild.nextElementSibling.innerHTML;
    var lastInd=studNam.split(" ")[1];
    alert("Student "+parseInt(lastInd)+" record has been deleted!");
    var anySelected = 0;
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (cb) {
    if (cb.checked) {
      anySelected++;
    }
    });
    if(anySelected==0){
      var trDele=row.lastElementChild.previousElementSibling;
      var trEdi=row.lastElementChild;
      var table = document.getElementById("myTable");
      var delhead=table.lastElementChild.firstElementChild.lastElementChild.previousElementSibling;
      var edhead=table.lastElementChild.firstElementChild.lastElementChild;
      trDele.style.display='none';
      trEdi.style.display='none';
      delhead.style.display='none';
      edhead.style.display='none';
      var subbut=document.getElementById('button');
      subbut.style.backgroundColor='grey';
      subbut.style.cursor='not-allowed';
      subbut.disabled=true;
    }  
  });
  return deleteButton;
}

function createEditButton() {
  var editButton = document.createElement("button");
  editButton.setAttribute("id","edit")
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
    // Display an edit popup
    var row = editButton.parentNode.parentNode;
    var studentName = row.firstElementChild.nextElementSibling.innerText;
    var editPopup = prompt("Edit details of " + studentName, studentName + "'s details:");
    if (editPopup !== null) {
      // Display a success message when Update is clicked
      alert(studentName + " data updated successfully.");
    }
    // var anySelected = 0;
    // var checkboxes = document.querySelectorAll("input[type='checkbox']");
    // checkboxes.forEach(function (cb) {
    // if (cb.checked) {
    //   anySelected++;
    // }
    // });
    // if(anySelected==0){
    //   var trDele=row.lastElementChild.previousElementSibling;
    //   var table = document.getElementById("myTable");
    //   var delhead=table.lastElementChild.firstElementChild.lastElementChild.previousElementSibling;
    //   trDele.style.display='none';
    //   delhead.style.display='none';
    // }  
  });
  return editButton;
}

function onCheckBoxClick(checkbox) {
  var subbut=document.getElementById('button');
  var row = checkbox.parentNode.parentNode;
  row.style.backgroundColor = 'yellow';
  var trDele=row.lastElementChild.previousElementSibling;
  var trEdi=row.lastElementChild;
  var table = document.getElementById("myTable");
  var delhead=table.lastElementChild.firstElementChild.lastElementChild.previousElementSibling;
  var edhead=table.lastElementChild.firstElementChild.lastElementChild;
  var deleteButton = row.querySelector("#delet");
  var editButton=row.querySelector("#edit");
  if (checkbox.checked) {
    // Checkbox is checked, create delete button
    subbut.style.backgroundColor='orange';
    subbut.disabled=false;
    subbut.style.cursor='auto';
    
    trDele.style.display='table-cell';
    trEdi.style.display='table-cell';
    delhead.style.display='table-cell';
    edhead.style.display='table-cell';
    if (!deleteButton) {
      deleteButton = createDeleteButton();
      editButton = createEditButton();
      trDele.appendChild(deleteButton);
      trEdi.appendChild(editButton);
    }
  } else {
    // Checkbox is unchecked, remove delete button
    if (deleteButton) {
      deleteButton.parentNode.removeChild(deleteButton);
    }
    if (editButton) {
      editButton.parentNode.removeChild(editButton);
    }
    row.style.backgroundColor="white";
    trDele.style.display='none';
    trEdi.style.display='none';
    var anySelected = false;
    checkboxes.forEach(function (cb) {
    if (cb.checked) {
      anySelected = true;
    }
    });
    if(!anySelected){
      subbut.style.backgroundColor='grey';
      subbut.style.cursor='not-allowed';
      subbut.disabled=true;
      var table = document.getElementById("myTable");
      var delhead=table.lastElementChild.firstElementChild.lastElementChild.previousElementSibling;
      var edhead=table.lastElementChild.firstElementChild.lastElementChild;
      delhead.style.display='none';
      edhead.style.display='none';
    }
  }
}

