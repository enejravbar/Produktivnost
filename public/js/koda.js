$(document).ready(function(){

	preklapljanjeMedStranmi();
	skrijVse();

	$("#oddelki").click();
	
	$("#glavnaStran-povezava").click();

});

function skrijVse(){
	$("#glavnaStran").hide();
	$("#klavnica").hide();
	$("#filetiranjePrsa").hide();
	$("#filetiranjeSZD").hide();
	$("#filetiranjeBeder").hide();
	$("#arhivPorocil").hide();
}

function preklapljanjeMedStranmi(){
	$("#glavnaStran-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#glavnaStran").show();

	});

	$("#klavnica-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#klavnica").show();

	});

	$("#filetiranjePrsa-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#filetiranjePrsa").show();

	});

	$("#filetiranjeSZD-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#filetiranjeSZD").show();

	});

	$("#filetiranjeBeder-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#filetiranjeBeder").show();

	});

	$("#arhivPorocil-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#arhivPorocil").show();

	});

	// -----------------------------------------------

	$("#glavnaStran-klavnica").click(function(){
		$("#klavnica-povezava").click();

	});

	$("#glavnaStran-filetiranjePrsa").click(function(){
		$("#filetiranjePrsa-povezava").click();

	});

	$("#glavnaStran-filetiranjeSZD").click(function(){
		$("#filetiranjeSZD-povezava").click();

	});

	$("#glavnaStran-filetiranjeBeder").click(function(){
		$("#filetiranjeBeder-povezava").click();

	});

}