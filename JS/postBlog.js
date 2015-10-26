function postBlog()
{
	var input_title = document.getElementById('input_title').value;
	var input_lastname = document.getElementById('input_lastname').value;
	var input_firstname = document.getElementById('input_firstname').value;
	var input_middlename = document.getElementById('input_middlename').value;
	var input_content = document.getElementById('input_content').value;
	
	document.getElementById('title').innerHTML = input_title;
	var date_today = new Date();
	document.getElementById('author').innerHTML = input_lastname + " " + input_firstname + " " + input_middlename;
	document.getElementById('content').innerHTML = input_content;	
}
