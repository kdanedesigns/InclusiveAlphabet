function redirect(selectedMenuName, redirectPage){

	var redirectPageString = new String(redirectPage);
	if(redirectPageString.indexOf("http") != -1)
	{

		var confirmResult = confirm("You are being transfered to an external Web page, Inclusive Alphabet \nWeb will continue to stay open in the background.");
		if(confirmResult)
			window.open(redirectPage);
		return;
	}
	else
	{
		location.href=redirectPage;
//		window.navigate(redirectPage);
	}	

	return;
}

