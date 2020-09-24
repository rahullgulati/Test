function validateForm() {
    var x = document.forms["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    ErrorText= "";
    if ( ( form.checkme[0].checked == false ) && ( form.checkme[1].checked == false ) )
    {
        alert ( "Please fill the check box" );
        return false;
    }
    if (ErrorText= "") { form.submit() }
  }