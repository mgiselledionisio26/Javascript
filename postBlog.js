function postBlog()
{
	alert("hi");
	var input_title = document.getElementById('input_title').value;
	var input_lastname = document.getElementById('input_lastname').value;
	var input_firstname = document.getElementById('input_firstname').value;
	var input_middlename = document.getElementById('input_middlename').value;
	var input_content = document.getElementById('content').value;
	
	document.getElementById('post-title').innerHTML = input_title;
	document.getElementById('post-author').innerHTML = input_lastname + " " + input_firstname + " " + input_middlename;
	document.getElementById('post-content').innerHTML = input_content;	
}
