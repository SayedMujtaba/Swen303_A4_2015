function clearInterCountry(){
	d3.select("#part3").select("svg").remove();

}

function interCountry(home, away, score, s, country){
	//Team nz----
	var CentralPulse = [];
	var NorthernMystics = [];
	var WaikatoBayPM = [];
	var SouthernSteel = [];
	var CanterburyTactix = [];
	//Team Aus
	var NSWalesSwifts = [];
	var Adelaide = [];
	var Melbourne = [];
	var WCFever = [];
	var QueenlandFireB = [];

	var nz = ["Central Pulse","Northern Mystics", "Waikato Bay of Plenty Magic", "Southern Steel", "Canterbury Tactix"];
	
	var aus =["New South Wales Swifts","Adelaide Thunderbirds", "Melbourne Vixens", "West Coast Fever", "Queensland Firebirds"];
	

	function initialize(TeamName, s1){
		var value = new Object();
		value.TeamName = TeamName;
		value.won = 0;
		value.overAllRank = 0;
		value.played = 0;
		value.s = s1;
		return value; 
	}

	function contain(array, Team){
		if(array.length == 0){
			return false;
		}
		else{
			for(var i = 0; i<array.length; i++){
				if(Team == array[i].TeamName){
					return true;
				}
			}
			return false;
		}
	}

	function update(winner, loser, array){
		for(var i = 0; i < array.length; i++){
			if(winner == array[i].TeamName){
				array[i].won = array[i].won +1;
				array[i].played = array[i].played+1;
			}
			if(loser == array[i].TeamName){
				array[i].played = array[i].played+1;
			}
		}
	}
	var NZTeam =[];
	var AusTeam = [];
	function sortTeam(array){
		//console.log(array);
		for(var i = 0; i<array.length; i++){
			if(nz.indexOf(array[i].TeamName) == 0){
				CentralPulse.push(array[i]);
				NZTeam.push(array[i]);
			}else if(nz.indexOf(array[i].TeamName) == 1){
				NorthernMystics.push(array[i]);
				NZTeam.push(array[i]);
			}else if(nz.indexOf(array[i].TeamName) == 2){
				WaikatoBayPM.push(array[i]);
				NZTeam.push(array[i]);
			}else if(nz.indexOf(array[i].TeamName) == 3){
				SouthernSteel.push(array[i]);
				NZTeam.push(array[i]);
			}else if(nz.indexOf(array[i].TeamName) == 4){
				CanterburyTactix.push(array[i]);
				NZTeam.push(array[i]);
			}

			if(aus.indexOf(array[i].TeamName) == 0){
				NSWalesSwifts.push(array[i]);
				AusTeam.push(array[i]);
			}else if(aus.indexOf(array[i].TeamName) == 1){
				Adelaide.push(array[i]);
				AusTeam.push(array[i]);
			}else if(aus.indexOf(array[i].TeamName) == 2){
				Melbourne.push(array[i]);
				AusTeam.push(array[i]);
			}else if(aus.indexOf(array[i].TeamName) == 3){
				WCFever.push(array[i]);
				AusTeam.push(array[i]);
			}else if(aus.indexOf(array[i].TeamName) == 4){
				QueenlandFireB.push(array[i]);
				AusTeam.push(array[i]);
			}
		}
	}

	//console.log(nz.indexOf("Northern Mystics"));
	for(var j = 0; j<s; j++){
		var array = [];
		for(var i = 0; i<home[j].length; i++){
			if(score[j][i] != ""){
				var num = score[j][i].match(/(\d+)/g);
					if(+num[0]> +num[1]){//home winning, away lossing
						if(nz.indexOf(home[j][i]) !=  -1 && aus.indexOf(away[j][i]) != -1){
							if(contain(array, home[j][i])){
								if(contain(array, away[j][i])){
									update(home[j][i], away[j][i], array);
								}else{
									array.push(initialize(away[j][i], j+2008));
									update(home[j][i], away[j][i], array);
								}
							}else{
								if(contain(array, away[j][i])){
									array.push(initialize(home[j][i], j+2008));
									update(home[j][i], away[j][i], array);	
								}else{
									array.push(initialize(home[j][i], j+2008));
									array.push(initialize(away[j][i], j+2008));
									update(home[j][i], away[j][i], array);
								}
								
							}
						}else if(aus.indexOf(home[j][i]) != -1 && nz.indexOf(away[j][i]) != -1){
							if(contain(array, home[j][i])){
								update(home[j][i], away[j][i], array);
							}else{
								array.push(initialize(home[j][i], j+2008));
								update(home[j][i], away[j][i], array);
							}
						}
					}else{
						if(nz.indexOf(home[j][i]) !=  -1 && aus.indexOf(away[j][i]) != -1){
							if(contain(array, away[j][i])){
								if(contain(array, home[j][i])){
									update(away[j][i], home[j][i], array);	
								}else{
									array.push(initialize(home[j][i], j+2008));
									update(away[j][i], home[j][i], array);	
								}
								
							}else{
								if(contain(array, home[j][i])){
									array.push(initialize(away[j][i], j+2008));
									update(away[j][i], home[j][i], array);
								}else{
									array.push(initialize(away[j][i], j+2008));
									array.push(initialize(home[j][i], j+2008));
									update(away[j][i], home[j][i], array);
								}
								
							}
						}else if(aus.indexOf(home[j][i]) != -1 && nz.indexOf(away[j][i]) != -1){
							if(contain(array, away[j][i])){
								if(contain(array, home[j][i])){
									update(away[j][i], home[j][i], array);	
								}else{
									array.push(initialize(home[j][i], j+2008));
									update(away[j][i], home[j][i], array);	
								}
								
							}else{
								if(contain(array, home[j][i])){
									array.push(initialize(away[j][i], j+2008));
									update(away[j][i], home[j][i], array);
								}else{
									array.push(initialize(away[j][i], j+2008));
									array.push(initialize(home[j][i], j+2008));
									update(away[j][i], home[j][i], array);
								}
							}
						}
					}					
								
			}			
		}
		sortTeam(array);
	}

	var data1 = [];
	var data2 = [];
	var data3 = [];
	var data4 = [];
	var data5 = [];

	if(country == "nz"){
		data1 = CentralPulse;
		color1 = "#FFFF00";
		data2 = NorthernMystics;
		color2 = "#3366FF";
		data3 = WaikatoBayPM;
		color3 = "#6D0000";
		data4 = SouthernSteel;
		color4 = "#CF0D61";
		data5 = CanterburyTactix;
		color5 ="#FF0000";
	}else {
		data1 = NSWalesSwifts;
		color1 = "#3366FF";
		data2 = Adelaide;
		color2 = "#FF33CC";
		data3 = Melbourne;
		color3 = "#0D6100";
		data4 = WCFever;
		color4 = "#47A600";
		data5 = QueenlandFireB;
		color5 = "#F76105";
	}
	
	var margin = {top: 30, right: 40, bottom: 30, left: 50},
		width = 800 - margin.left - margin.right,
		height = 450 - margin.top - margin.bottom;

	
	var	x = d3.time.scale().range([0, width]);

	var y = d3.scale.linear()
		.range([height, 0]);


	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");

	var line1 = d3.svg.line()
		.x(function(d){return x(d.s);})
		.y(function(d){return y(d.won);});
	var line2 = d3.svg.line()
		.x(function(d){return x(d.s);})
		.y(function(d){return y(d.won);});
	var line3 = d3.svg.line()
		.x(function(d){return x(d.s);})
		.y(function(d){return y(d.won);});
	var line4 = d3.svg.line()
		.x(function(d){return x(d.s);})
		.y(function(d){return y(d.won);});
	var line5 = d3.svg.line()
		.x(function(d){return x(d.s);})
		.y(function(d){return y(d.won);});				

	var tip = d3.tip()
		.attr('class', 'd3-tipInterCountry')
		.offset([-10, 0])
		 .html(function(d) {
		    return "<strong> Name: " + d.TeamName+ 
		    "</strong>";
		  });	


	var svg = d3.select("#part3").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.bottom + margin.top)
		.append("g")
		.attr("transform", "translate("+ 200 + "," + margin.top +")");

	svg.call(tip);

	x.domain(d3.extent(data1, function(d) { return d.s; }));
	y.domain([0, d3.max(data1, function(d) { return d.played; })]);

	x.domain(d3.extent(data2, function(d) { return d.s; }));
	y.domain([0, d3.max(data2, function(d) { return d.played; })]);

	x.domain(d3.extent(data3, function(d) { return d.s; }));
	y.domain([0, d3.max(data3, function(d) { return d.played; })]);

	x.domain(d3.extent(data4, function(d) { return d.s; }));
	y.domain([0, d3.max(data4, function(d) { return d.played; })]);

	x.domain(d3.extent(data5, function(d) { return d.s; }));
	y.domain([0, d3.max(data5, function(d) { return d.played; })]);

	svg.append("g")
			.attr("transform", "translate("+ width/2+", 0)")
			.append("text")
			.style("text-anchor", "middle")
			.text(function(d){
				if(country == 'nz'){
					return 'New Zealand';
				}else{
					return 'Australia';
				}
			});

	svg.append("g")			// Add the X Axis
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.append("text")
			.attr("transform", "translate("+ width+", 25)")
			.style("font-size", "10px")
			.style("text-anchor", "end")
			.text("Year");

	svg.append("g")			// Add the Y Axis
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "-4em")
			.style("text-anchor", "end")
			.text("Total Games Won");		

	svg.append("path")
		.attr("class", "line")
		.style("stroke", color1)
		.style("fill", "none")
		.style("stroke-width", 2)
		.attr("d", line1(data1))
		.data(data1)
		.on('mouseover', tip.show)
		.on('mouseout', tip.hide);

	svg.append("path")
		.attr("class", "line")
		.style("stroke", color2)
		.style("fill", "none")
		.style("stroke-width", 2)
		.attr("d", line1(data2))
		.data(data2)
		.on('mouseover', tip.show)
     	.on('mouseout', tip.hide);

	svg.append("path")
		.attr("class", "line")
		.style("stroke", color3)
		.style("stroke-width", 2)
		.style("fill", "none")
		.attr("d", line1(data3))
		.data(data3)
		.on('mouseover', tip.show)
     	.on('mouseout', tip.hide);


	svg.append("path")
		.attr("class", "line")
		.style("stroke", color4)
		.style("fill", "none")
		.style("stroke-width", 2)
		.attr("d", line1(data4))
		.data(data4)
		.on('mouseover', tip.show)
     	.on('mouseout', tip.hide);

	svg.append("path")
		.attr("class", "line")
		.style("stroke", color5)
		.style("fill", "none")
		.style("stroke-width", 2)
		.attr("d", line1(data5))
		.data(data5)
		.on('mouseover', tip.show)
     	.on('mouseout', tip.hide);				

	
		

	
}