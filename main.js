function open_file(file_name) {
	window.location = file_name;
}

function checkInput() {
	var username = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password-id").value;
	if(username === "" || email === "" || password === "") {
		alert("There is an empty field");
		return false;
	} else {
		open_file('user_profile.html')
		return true;
	}
}

function checkPlan() {
	var id = document.getElementById("name").value;
	for(let i = 0; i < id.length; ++ i) {
		if(id[i] < '0' || id[i] > '9') {
			alert("Wrong id :(" + id[i]);
			return false;	
		}
	}
	//... we get information from database and download it
	
	open_file('index.html');
	alert("Information about your trip sent to your mail");
	return true;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
