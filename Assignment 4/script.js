var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

var validfName = false;
var validlName = false;
var validEmail = false;
var validPhone = false;
var validAddr1 = false;
var validcity = false;
var validstate= false;
var validzip = false;


var regexName = /^[a-zA-Z ]+$/;
var regexEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var regexAddr1= /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;
var regexZip  = /^\d{5}[-\s]?(?:\d{4})?$/;
var regexCity = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
var regexState = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var emailId = document.getElementById("emailId");
var phoneNumber = document.getElementById("phoneNumber");
var streetAddressLine1 = document.getElementById("streetAddressLine1");
var streetAddressLine2 = document.getElementById("streetAddressLine2");
var zipcode = document.getElementById("zipcode")
var city = document.getElementById("city");
var state = document.getElementById("state");


firstName.addEventListener("input", validate);
lastName.addEventListener("input", validate);
emailId.addEventListener("input", validate);
phoneNumber.addEventListener("input", validate);
streetAddressLine1.addEventListener("input", validate);
zipcode.addEventListener("input", validate);
city.addEventListener("input", validate);
state.addEventListener("input", validate);



function validate(e) {
    var value = e.target.value;
    var type = e.target.id;
    var errorId = "error_" + type;

    switch (type) {
        case "firstName":
            if (!value.trim().match(regexName)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validfName = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validfName = true;
            }
            break;

        case "lastName":
            if (!value.trim().match(regexName)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validlName = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validlName = true;
            }
            break;

        case "emailId":
            if (!value.trim().match(regexEmail)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validEmail = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validEmail = true;
            }
            break;

        case "phoneNumber":
            if (!value.trim().match(regexPhone)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validPhone = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validPhone = true;
            }
            break;

        case "streetAddressLine1":
            if (!value.trim().match(regexAddr1)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validAddr1 = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validAddr1 = true;
            }
            break;

        case "zipcode":
            if (!value.trim().match(regexZip)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validzip = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validzip = true;
            }
            break;

        case "city":
            if (!value.trim().match(regexCity)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validcity = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validcity = true;
            }
            break;

        case "state":
            if (!value.trim().match(regexState)) {
                document.getElementById(errorId).style.display = "block";
                e.target.style.border = "2px solid red";
                validstate = false;
            } else {
                document.getElementById(errorId).style.display = "none";
                e.target.style.border = "";
                validstate = true;
            }
            break;
    }
}

var food=document.getElementById("food");
var checkboxContainer = document.getElementById("checkboxContainer");

food.addEventListener("change", onListboxSelection);
var optionsListbox = {
    Pizza: ["regular", "medium", "large"],
    Coffee: ["small", "tall", "grande"],
    Sub: ["6 inch", "footlong"],
    Samosa: ["paneer", "veggie", "schezwan", "pizza"],
    Donut: ["glazed", "chocolate overload"]
};

let textbox;  
let labelAddIn;

function onListboxSelection(e){
    var fooditem = food.value;
    var checkboxes = optionsListbox[fooditem];
    var anyselected = false;

    
    checkboxContainer.innerHTML = "";
    

    
    if (checkboxes) {
        checkboxes.forEach(function (labelText) {
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = labelText;
            checkbox.value = e.target.value;
            checkbox.id = "optionsCheckBoxes";

            var label = document.createElement("label");
            label.htmlFor = labelText;
            label.appendChild(document.createTextNode(labelText));

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
            checkboxContainer.appendChild(document.createElement("br"));
        });
    }
    var checkboxesInQuestion = checkboxContainer.querySelectorAll("#optionsCheckBoxes");
    //console.log(checkboxesInQuestion);
    checkboxesInQuestion.forEach(function(checkb) {
        checkb.addEventListener("change", onCheckBoxClick);
    });
    
    
    function onCheckBoxClick(e) {
        var check = e.target;
        var anyselected = false;
        var textcont = document.getElementById("textContainer");
        textcont.innerHTML=""; // Clear existing content
    
        // Check if any checkbox is checked
        var checkboxesInQuestion = checkboxContainer.querySelectorAll("#optionsCheckBoxes");
        checkboxesInQuestion.forEach(function(checkb) {
            if (checkb.checked) {
                anyselected = true;
            }
        });
    
        // If any checkbox is checked, create the textbox
        if (anyselected) {
            textbox = document.createElement("input");
            textbox.type = "text";
            textbox.setAttribute("required","required");
            labelAddIn = document.createElement("label");
            labelAddIn.htmlFor = "AdditionalInstructions";
            labelAddIn.appendChild(document.createTextNode("Instructions: "));
            textcont.appendChild(labelAddIn);
            textcont.appendChild(textbox);
        } 
        // If no checkbox is checked, remove the textbox
        else {
            textbox = null; // Reset textbox variable
            labelAddIn = null;
        }
    }
    
}





var mytable = document.getElementById("myTable");
var checkCon = document.getElementById("checkboxContainer");
var textCon = document.getElementById("textContainer");
// on submit button click
function submitted(e) {
    e.preventDefault();
    var submitButton = document.getElementById("subbut");
    
    //only if valid vars are true then only submit
    if (!(validfName && validEmail && validPhone && validlName && validzip && validAddr1 && validcity && validstate )) { 
        alert("Please fill all the required fields with the correct values!");
    }else{
        mytable.style.display="block";
        //create table, table heading, table row
        //reset the form
        //create second row if second submission
        var title = document.querySelector('input[name="title"]:checked').value;
        //code to get checkbox
        var listbox = document.getElementById("food");
        var checkbox = "";
        var checkboxes = document.querySelectorAll("#optionsCheckBoxes");
        checkboxes.forEach(function(checkb) {
            if (checkb.checked) {
                checkbox = checkbox + "," + checkb.name; 
                console.log(checkbox);
            }
        });

        //end of that

        var tr = document.createElement("tr");
        var tdtitle = document.createElement("td");
        var tdfirstname = document.createElement("td");
        var tdLastname = document.createElement("td");
        var tdemailId = document.createElement("td");
        var tdphoneNumber = document.createElement("td");
        var tdzipcode = document.createElement("td");
        var tdstrAdd1 = document.createElement("td");
        var tdstrAdd2 = document.createElement("td");
        var tdcity = document.createElement("td");
        var tdstate = document.createElement("td");
        var tdListBox = document.createElement("td");
        var tdcheckBox = document.createElement("td");
        var tdcheckBoxInstructions = document.createElement("td");
        var tdhowDidYouHear = document.createElement("td");
        var tdComments = document.createElement("td");
        
        
        tdtitle.textContent = title;
        tdfirstname.textContent = firstName.value;
        tdLastname.textContent = lastName.value;
        tdemailId.textContent = emailId.value;
        tdphoneNumber.textContent = phoneNumber.value;
        tdzipcode.textContent = zipcode.value;
        tdstrAdd1.textContent = streetAddressLine1.value;
        tdstrAdd2.textContent = streetAddressLine2.value;
        tdcity.textContent = city.value;
        tdstate.textContent = state.value;
        tdListBox.textContent = listbox.value;
        tdcheckBox.textContent = checkbox;
        tdcheckBoxInstructions.textContent = textbox.value;
        tdhowDidYouHear.textContent = getSelectedCheckboxes("hdhcontainer");
        tdComments.textContent = document.getElementById("comments").value;
        
        tr.appendChild(tdtitle);
        tr.appendChild(tdfirstname);
        tr.appendChild(tdLastname);
        tr.appendChild(tdemailId);
        tr.appendChild(tdphoneNumber);
        tr.appendChild(tdstrAdd1);
        tr.appendChild(tdstrAdd2);
        tr.appendChild(tdcity);
        tr.appendChild(tdstate);
        tr.appendChild(tdzipcode);
        tr.appendChild(tdListBox);
        tr.appendChild(tdcheckBox);
        tr.appendChild(tdcheckBoxInstructions);
        tr.appendChild(tdhowDidYouHear);
        tr.appendChild(tdComments);


        mytable.appendChild(tr);
        form.reset();
        //textCon.removeChild(textbox);
        //textCon.removeChild(labelAddIn);
        //textbox = null; 
        //labelAddIn = null;
        //textbox.parentElement.removeChild(textbox);
        //labelAddIn.parentElement.removeChild(labelAddIn);
        //checkbox.parentNode.removeChild(checkbox);
        checkCon.innerHTML="";
        textCon.innerHTML="";
        //checkboxesInQuestion.parentElement.removeChild(checkboxesInQuestion);
    }
    
}


var formFields = [
    firstName,
    lastName,
    emailId,
    phoneNumber,
    streetAddressLine1,
    city,
    state,
    zipcode,   
];

// Function to check if all form fields are valid
function areAllFieldsValid() {
    return (
        validfName &&
        validlName &&
        validEmail &&
        validPhone &&
        validAddr1 &&
        validstate && 
        validcity  && 
        validzip  
        
    );
}

formFields.forEach(function (field) {
    field.addEventListener("input", function () {
        var submitButton = document.getElementById("subbut");
        if (areAllFieldsValid()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});


function getSelectedCheckboxes(containerId) {
    var checkboxes = document.querySelectorAll("#" + containerId + " input[type='checkbox']:checked");
    var selectedValues = [];
    for (var i = 0; i < checkboxes.length; i++) {
        selectedValues.push(checkboxes[i].value);
    }
    return selectedValues;

}





