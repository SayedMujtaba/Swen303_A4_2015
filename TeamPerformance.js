
function clear(){
	var x = d3.select("#part1")
	x.select("svg").remove();
}

function Performance(home, away, score, round, s, name){
	
	//console.log(name);
	var CentralPulse = [];
	var NorthernMystics = [];
	var WaikatoBayPM = [];
	var SouthernSteel = [];
	var CanterburyTactix = [];
	var NSWalesSwifts = [];
	var Adelaide = [];
	var Melbourne = [];
	var WCFever = [];
	var QueenlandFireB = [];

	function initialize(TeamName, s1){
		
		var value = new Object();
		value.TeamName = TeamName;
		value.won = 0;
		value.played = 0;
		value.rankPoint = 0;
		value.overAllRank = 0;
		value.Round1To6 = 0;
		value.Round7To14 = 0;
		value.Round15To17 = 0;
		value.s = s1;
		return value;
	}
	function addSeason(summarys){
		var allS = new Object;

		return allS.summary = summarys;
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
	function update(TeamW, TeamL, array, game, rounds){
		//console.log(rounds);
		for(var i = 0; i < array.length; i++){
			if(TeamW == array[i].TeamName){
				array[i].played = array[i].played + 1;
				if(game){
					array[i].won = array[i].won + 1;
					array[i].rankPoint = array[i].rankPoint + 2;
					if(rounds<= 6){
						array[i].Round1To6 = array[i].Round1To6 + 1;
						//array[i].Round1To14 = array[i].Round1To14 + 2;  
					}else if(rounds < 15 && rounds >6){
						array[i].Round7To14 = array[i].Round7To14 + 1; 
					}else if(rounds >14){
						array[i].Round15To17 = array[i].Round15To17 + 1;
					}
				}
			} if(TeamL == array[i].TeamName){
				array[i].played = array[i].played+1;
			}
		}
	}

	function updatePlayed(array, team1, team2){
		for(var i = 0; i<array.length; i++){
			if(array[i].TeamName == team1){
				array[i].played = array[i].played+1;
			}if(array[i].TeamName == team2){
				array[i].played = array[i].played+1;
			}
		}
	}
	function addRank(array){
		
		for(var i=0; i<array.length;i++){
			array[i].overAllRank = 1+i;
		
		}
		
	}
	
/*Creating the a summary of a season then adding it finial array */
	
	var finial =[];
	for(var j = 0; j<s; j++){
		var summary = [];
		for(var i = 0; i< home[j].length; i++){

			if(score[j][i] != "" && score[j][i].indexOf("draw") == -1){
				var num = score[j][i].match(/(\d+)/g);
				if(num.length ==2){
					if(+num[0]> +num[1]){
						//console.log(contain(summary, home[s][i]));
						if(contain(summary, home[j][i])){
							if(contain(summary, away[j][i])){
								update(home[j][i], away[j][i], summary, true, round[j][i]);
							}else{
								summary.push(initialize(away[j][i], j+2008));
								update(home[j][i], away[j][i], summary, true, round[j][i]);
							}
						}else{
							if(contain(summary, away[j][i])){
								summary.push(initialize(home[j][i], j+2008));
								update(home[j][i], away[j][i], summary, true, round[j][i]);
							}else{
								summary.push(initialize(away[j][i], j+2008));
								summary.push(initialize(home[j][i], j+2008));
								update(home[j][i], away[j][i], summary, true, round[j][i]);
							}
							
						}
					}else{
						if(contain(summary, away[j][i])){
							if(contain(summary, home[j][i])){
								update(away[j][i], home[j][i], summary, true, round[j][i]);
							}else{
								summary.push(initialize(home[j][i], j+2008));
								update(away[j][i], home[j][i], summary, true, round[j][i]);
							}
							
						}else{
							if(contain(summary, home[j][i])){
								summary.push(initialize(away[j][i], j+2008));
								update(away[j][i], home[j][i], summary, true, round[j][i]);
							}else{
								summary.push(initialize(home[j][i], j+2008));
								summary.push(initialize(away[j][i], j+2008));
								update(away[j][i], home[j][i], summary, true, round[j][i]);
							}
							
						}
					}
				}else if(num.length>2){// draw then add 1 to total game played
						if(contain(summary, home[j][i])){
							if(contain(summary, away[j][i])){
								updatePlayed(summary, home[j][i]);
							}else{
								summary.push(initialize(away[j][i], 2008));
								updatePlayed(summary, home[j][i]);
							}
							
						}else{
							if(contain(summary, away[j][i])){
								summary.push(initialize(home[j][i], j+2008));
								updatePlayed(summary, home[j][i]);
							}else{
								summary.push(initialize(away[j][i], j+2008));
								summary.push(initialize(home[j][i], j+2008));
								updatePlayed(summary, home[j][i]);
							}
							
						}
						
					}
			}else if(score[j][i] != "" && score[j][i].indexOf("draw") != -1){//2008 score array has draw string in it 
				if(contain(summary, home[j][i])){
							if(contain(summary, away[j][i])){
								updatePlayed(summary, home[j][i]);
							}else{
								summary.push(initialize(away[j][i], 2008));
								updatePlayed(summary, home[j][i]);
							}
				}else{
							if(contain(summary, away[j][i])){
								summary.push(initialize(home[j][i], j+2008));
								updatePlayed(summary, home[j][i]);
							}else{
								summary.push(initialize(away[j][i], j+2008));
								summary.push(initialize(home[j][i], j+2008));
								updatePlayed(summary, home[j][i]);
							}
							
					}

			}
		}
		
		summary.sort(function(a, b){
			return d3.descending(a.rankPoint, b.rankPoint);});
		addRank(summary);
		finial.push(addSeason(summary));
	}	
	
	
	for(var j = 0; j<finial.length; j++){
		for (var i = 0; i<finial[j].length; i++) {
			
		 if(finial[j][i].TeamName == 'New South Wales Swifts'){
		 	NSWalesSwifts.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Central Pulse'){
		 	CentralPulse.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Northern Mystics'){
		 	NorthernMystics.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Waikato Bay of Plenty Magic'){
		 	WaikatoBayPM.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Southern Steel'){
		 	SouthernSteel.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Canterbury Tactix'){
		 	CanterburyTactix.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Adelaide Thunderbirds'){
		 	Adelaide.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Melbourne Vixens'){
		 	Melbourne.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'West Coast Fever'){
		 	WCFever.push(finial[j][i]);
		 }
		 if(finial[j][i].TeamName == 'Queensland Firebirds'){
		 	QueenlandFireB.push(finial[j][i]);
		 }
		 
		 
		}

	}

	var data = [];
	if(name == 'New South Wales Swifts'){
		data = NSWalesSwifts;
	}else if(name == 'Central Pulse'){
		 	data=CentralPulse;
	}else if(name == 'Northern Mystics'){
		 	data=NorthernMystics;
	}else if(name == 'Waikato Bay of Plenty Magic'){
		 	data=WaikatoBayPM;
	}else if(name == 'Southern Steel'){
		 	data=SouthernSteel;
	}else if(name == 'Canterbury Tactix'){
		 	data=CanterburyTactix;
	}else if(name == 'Adelaide Thunderbirds'){
		 	data=Adelaide;
	}else if(name == 'Melbourne Vixens'){
		 	data=Melbourne;
	}else if(name == 'West Coast Fever'){
		 	data=WCFever;
	}else if(name == 'Queensland Firebirds'){
		 	data=QueenlandFireB;
	}
		 

	
	var width = 600;
	var height = 400;
	var margin = {top: 20, right: 20, bottom: 40, left: 60};

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(16);

	var tip = d3.tip()
		  .attr('class', 'd3-tip')
		  .offset([-10, 0])
		  .html(function(d) {
		    return "<strong>Rank:" + d.overAllRank + "<br/>"+"Round 1-6: " + d.Round1To6+" wins"+ 
		    "</strong><br/><span style='color:#fff'>" + "Round 7-14: "+d.Round7To14 + " wins"+ "<br/>Round 15-17: "+d.Round15To17 +" wins</span>";
		  });

	var svg = d3.select("#part1").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.bottom + margin.top)
		.append("g")
		.attr("transform", "translate("+ margin.left + "," + margin.top +")");

		svg.call(tip);

		
		
			
		x.domain(data.map(function(d){return d.s;}));
		y.domain([0, d3.max(data, function(d){return d.played;})]);
		
		

		svg.append("g")
			.attr("transform", "translate("+ width/2+", 0)")
			.append("text")
			.style("text-anchor", "middle")
			.text(name);	

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height+ ")")
			.call(xAxis)
			.append("text")
			.attr("transform", "translate("+ width+", 40)")
			.style("font-size", "15px")
			.style("text-anchor", "end")
			.text("Seasons");

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "-3.71em")
			.style("text-anchor", "end")
			.text("Total Games Won");		

		svg.selectAll(".bar")
			.data(data)
			.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function(d){return x(d.s);})
			.attr("width", x.rangeBand())
			.attr("y", function(d){return y(d.won);})
			.attr("height", function(d){return height-y(d.won);})
			.on('mouseover', tip.show)
     		.on('mouseout', tip.hide);	

}