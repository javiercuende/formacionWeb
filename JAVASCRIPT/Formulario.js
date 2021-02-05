function recogerDatos(){

	

		let name = document.getElementById("name").value;
		let email = document.getElementById("email").value;
		let subject = document.getElementById("subject").value;
		let message = document.getElementById("message").value;
	

	console.log(name+ " " + email + " " + subject + " " + message);
	
}


$ . ajax ({

datos : JSON . stringify ({
" name " : name ,
" email " : email ,
" subject " : subject ,
" message " : message
}) ,
success : function ( data ) {
$ ( " # responseJS " ) . html ( " Insercion realizada . " ) ;
} ,
error : function ( res ) {
alert ( " ERROR " + res . statusText ) ;
}
}) ;

