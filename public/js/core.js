$(document).ready(function(){

	preklapljanjeMedStranmi();
	izrisKolendarja();
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
		izrisGrafaKlavnica();

	});

	$("#filetiranjePrsa-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#filetiranjePrsa").show();
		izrisGrafovFiletiranjePrsa();

	});

	$("#filetiranjeSZD-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#filetiranjeSZD").show();
		izrisGrafovFiletiranjeSZD();

	});

	$("#filetiranjeBeder-povezava").click(function(){
		console.log("Kliknjeno");
		skrijVse();
		$("#filetiranjeBeder").show();
		izrisGrafovFiletiranjeBedra();

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

function izrisKolendarja(){
	$("#calendar-container").calendar(
		{
        // view: 'month',
        width: 320,
        height: 320,
        // startWeek: 0,
        // selectedRang: [new Date(), null],
     
        onSelected: function (view, date, data) {
            
        }
        
    }
	);
}

function izrisGrafaKlavnica(){

    $('#klavnica-grafProduktivnosti').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        
        series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [98,120,101,80],
            animation: true
        },
        {
            name: 'Normativ',
            type: 'spline',
            showInLegend:true,
            data: [100,100,100,100],
            animation: true
        }

        ]
    });
    
}

function izrisGrafovFiletiranjePrsa(){

    $('#filetiranje-grafIzplenaI').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf izplena' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        
        series: [{
            name: 'Izplen',
            showInLegend:true,
            data: [72,77,80,90],
            animation: true
        },
        {
            name: 'Teoretični izplen',
            type: 'spline',
            showInLegend:true,
            data: [70,70,70,70],
            animation: true
        }

        ]
    });

    $('#filetiranje-grafIzplenaII').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf izplena' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        
        series: [{
            name: 'Izplen',
            showInLegend:true,
            data: [72,77,80,90],
            animation: true
        },
        {
            name: 'Teoretični izplen',
            type: 'spline',
            showInLegend:true,
            data: [70,70,70,70],
            animation: true
        }

        ]
    });

    $('#filetiranje-grafProduktivnostiI').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        
        series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [72,77,80,90],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [70,70,70,70],
            animation: true
        }

        ]
    });

    $('#filetiranje-grafProduktivnostiII').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        
        series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [72,77,80,90],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [70,70,70,70],
            animation: true
        }

        ]
    });
    
}

function izrisGrafovFiletiranjeSZD(){

	$('#filetiranjeSZD-grafProduktivnostiI').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        
        series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [20,21,23,23],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [21,21,21,21],
            animation: true
        }

        ]
    });

    $('#filetiranjeSZD-grafProduktivnostiII').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        
       	series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [20,21,23,23],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [21,21,21,21],
            animation: true
        }

        ]
    });
}

function izrisGrafovFiletiranjeBedra(){

	$('#filetiranjeBedra-grafProduktivnostiI').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        
        series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [20,21,23,23],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [21,21,21,21],
            animation: true
        }

        ]
    });

    $('#filetiranjeBedra-grafProduktivnostiII').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        
       	series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [20,21,23,23],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [21,21,21,21],
            animation: true
        }

        ]
    });

    $('#filetiranjeBedraBrez-grafProduktivnostiI').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        
        series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [20,21,23,23],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [21,21,21,21],
            animation: true
        }

        ]
    });

    $('#filetiranjeBedraBrez-grafProduktivnostiII').highcharts({
        chart:{
            type: 'area'
            
        },
        title: {
            text: 'Graf produktivnosti' 
        },
        xAxis: {
            categories: ["22.9.2016","23.9.2016","22.9.2016","23.9.2016"],
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            allowDecimals: true,
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        
       	series: [{
            name: 'Produktivnost',
            showInLegend:true,
            data: [20,21,23,23],
            animation: true
        },
        {
            name: 'Normativ produktivnosti',
            type: 'spline',
            showInLegend:true,
            data: [21,21,21,21],
            animation: true
        }

        ]
    });
}