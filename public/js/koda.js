$(document).ready(function(){
	console.log("Zagnano");
	branjeVnosaKlavnica();
	branjeVnosaFiletiranjePrsa();
});

function branjeVnosaKlavnica(){

	$("#klavnica-shraniVnos").click(function(){

		console.log("Zaznan klik");
		var stZaklanih = $("#klavnica-stZaklanih").val();
		var stUr = $("#klavnica-stUr").val();
		var normativ =$("#klavnica-produktivnostNormativ").val();
		var produktivnost = $("#klavnica-produktivnost").val();

		var k1,k2,k3,k4;

		if(jeStevilo(stZaklanih)){
			k1=true;
			$("#klavnica-stZaklanih").removeClass("bg-danger");
		}else{
			k1=false;
			$("#klavnica-stZaklanih").addClass("bg-danger");
		}

		if(jeStevilo(stUr)){
			k2=true;
			$("#klavnica-stUr").removeClass("bg-danger");
		}else{
			k2=false;
			$("#klavnica-stUr").addClass("bg-danger");
		}
		if(jeStevilo(normativ)){
			k3=true;
			$("#klavnica-produktivnostNormativ").removeClass("bg-danger");
		}else{
			k3=false;
			$("#klavnica-produktivnostNormativ").addClass("bg-danger");
		}
		if(jeStevilo(produktivnost)){
			k4=true;
			$("#klavnica-produktivnost").removeClass("bg-danger");
		}else{
			k4=false;
			$("#klavnica-produktivnost").addClass("bg-danger");
		}

		if(k1 && k2 && k3 && k4){
			var SQLstavek = sprintf("INSERT into klavnica ('','','','','') VALUES ('%d','%d','%d','%d');")
		}
	});
		
}

function branjeVnosaFiletiranjePrsa(){

	$("#fileriranjePrsa-shraniVnos").click(function(){

		console.log("Zaznan klik");
		var izmena = pridobiStIzmene();
		
		var tezaPrsa = $("#filetiranjePrsa-tezaPrsi").val();
		var tezaFileja =$("#filetiranjePrsa-tezaFileja").val();
		var izplen = $("#filetiranjePrsa-izplen").val();
		var delezObreznin = $("#filetiranjePrsa-delezObreznin").val();
		var normativ = $("#filetiranjePrsa-normativ").val();
		var produktivnost = $("#filetiranjePrsa-produktivnost").val();

		var k1,k2,k3,k4,k5,k6;

		if(jeStevilo(tezaPrsa)){
			k1=true;
			$("#filetiranjePrsa-tezaPrsi").removeClass("bg-danger");
		}else{
			k1=false;
			$("#filetiranjePrsa-tezaPrsi").addClass("bg-danger");
		}

		if(jeStevilo(tezaFileja)){
			k2=true;
			$("#filetiranjePrsa-tezaFileja").removeClass("bg-danger");
		}else{
			k2=false;
			$("#filetiranjePrsa-tezaFileja").addClass("bg-danger");
		}
		if(jeStevilo(izplen)){
			k3=true;
			$("#filetiranjePrsa-izplen").removeClass("bg-danger");
		}else{
			k3=false;
			$("#filetiranjePrsa-izplen").addClass("bg-danger");
		}
		if(jeStevilo(delezObreznin)){
			k4=true;
			$("#filetiranjePrsa-delezObreznin").removeClass("bg-danger");
		}else{
			k4=false;
			$("#filetiranjePrsa-delezObreznin").addClass("bg-danger");
		}
		if(jeStevilo(normativ)){
			k5=true;
			$("#filetiranjePrsa-normativ").removeClass("bg-danger");
		}else{
			k5=false;
			$("#filetiranjePrsa-normativ").addClass("bg-danger");
		}
		if(jeStevilo(delezObreznin)){
			k6=true;
			$("#filetiranjePrsa-produktivnost").removeClass("bg-danger");
		}else{
			k6=false;
			$("#filetiranjePrsa-produktivnost").addClass("bg-danger");
		}

		if(k1 && k2 && k3 && k4 && k5 && k6){
			var SQLstavek = sprintf("INSERT into filetiranjePrsa ('','','','','') VALUES ('%d','%d','%d','%d');")
		}
	});
		
}

function zapisiVBazo( SQLstavek ){

	var zapisano;
	
	$.ajax({
		    type: "POST",
		    url: "/zapisiVBazo",
		    dataType: 'json',
		    contentType: 'application/json', 
		    async: false,
		    data: JSON.stringify({SQLstavek}),

		    success: function (odgovor){
	                odgovor=JSON.parse(odgovor);
	                	

		    }
	});
}

function jeStevilo(input){
	return ($).isNumeric(input);
}

function pridobiStIzmene(){

}