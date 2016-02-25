


	var teams = [];
	var venFinal= [];

	

	function toInfinity(){
		var e = document.getElementById("dropdownV");
		var strUser = e.options[e.selectedIndex].text;

		for(var i = 0; i < venFinal.length; i++){
			if(venFinal[i].venue == strUser){
				transformV(i);
			}
		}
	}

	function transformV(idx){
		var g;

		if(venFinal[idx].played[0] == 0){
			g = qf.selectAll(".qfarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = qf.selectAll(".qfarc")
	      		.data(pie(venFinal[idx].win[0]))
	      		.transition()
		   	  	.duration(500)
	      		.style("opacity", 1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}
		
		if(venFinal[idx].played[1] == 0){
			g = ad.selectAll(".adarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = ad.selectAll(".adarc")
	      		.data(pie(venFinal[idx].win[1]))
	      		.transition()
		   	  	.duration(500)
	      		.style("opacity", 1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

		if(venFinal[idx].played[2] == 0){
			g = ct.selectAll(".ctarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = ct.selectAll(".ctarc")
	      .data(pie(venFinal[idx].win[2]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity",1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	   	if(venFinal[idx].played[3] == 0){
			g = nm.selectAll(".nmarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = nm.selectAll(".nmarc")
	      .data(pie(venFinal[idx].win[3]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity",1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	    if(venFinal[idx].played[4] == 0){
			g = nsws.selectAll(".nswsarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = nsws.selectAll(".nswsarc")
	      .data(pie(venFinal[idx].win[4]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity", 1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	    if(venFinal[idx].played[5] == 0){
			g = mv.selectAll(".mvarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = mv.selectAll(".mvarc")
	      .data(pie(venFinal[idx].win[5]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity", 1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	    if(venFinal[idx].played[6] == 0){
			g = wcf.selectAll(".wcfarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			 g = wcf.selectAll(".wcfarc")
	      .data(pie(venFinal[idx].win[6]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity",1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

		if(venFinal[idx].played[7] == 0){
			g = wbpm.selectAll(".wbpmarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = wbpm.selectAll(".wbpmarc")
	      .data(pie(venFinal[idx].win[7]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity",1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	    if(venFinal[idx].played[8] == 0){
			g = cb.selectAll(".cbarc")
				.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = cb.selectAll(".cbarc")
	      .data(pie(venFinal[idx].win[8]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity",1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	    if(venFinal[idx].played[9] == 0){
			g = ss.selectAll(".ssarc")
			.transition()
		   	  	.duration(500)
				.style("opacity", 0);
		}
		else{
			g = ss.selectAll(".ssarc")
	      .data(pie(venFinal[idx].win[9]))
	      .transition()
		   	  	.duration(500)
	      .style("opacity",1);

		   	g.select("path")
		   	  .transition()
		   	  .duration(750)
		      .attrTween("d", arcTween);

		    g.select("text")
		      .transition()
		   	  .duration(750)
		      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
		      .style("text-anchor", "middle")
		      .text(function(d,i) {
		      	var text = winOrLose(i)
		      	console.log(d);
		      	if(d.data == 0){
		      		text = "";
		      	}
		      	return text;
		      });
		}

	    

	}
	function arcTween(a) {
	  var i = d3.interpolate(this._current, a);
	  this._current = i(0);
	  return function(t) {
	  	return arc(i(t));
	  };
	}
	
	function elem1(arry, team){
		for(var i = 0; i <arry.length; i++){
			if(arry[i] == team){
				return true;
			}
		}
		return false;
	}
	

	function addVenue(ven,team,win){
		var jsonArg = new Object();
		jsonArg.venue = ven;
		jsonArg.team = [team];
		jsonArg.win= [[win,0]];
		jsonArg.played = [1];
		return jsonArg;
	}

	function checkVenue(arry, ven){
		for(var i = 0; i < arry.length; i ++){
			if(ven == arry[i].venue){
				return i;
			}
		}
		var jsonArg = new Object();
		jsonArg.venue = ven;
		jsonArg.team = teams;
		jsonArg.win= []
		jsonArg.played = [];
		for(var i = 0; i < teams.length; i++){
			jsonArg.win.push([0,0]);
			jsonArg.played.push(0);
		}
		arry.push(jsonArg);
		return arry.length-1;
	}

	function addTeamV(arry, team, win, idx){

		arry[idx].team.push(team);
		arry[idx].win.push([win,0]);
		arry[idx].played.push(1);

	}

	function checkTeamAtVenue(arry, team, idx){
		for(var i = 0; i < arry[idx].team.length; i++){
			if(arry[idx].team[i] == team){
				return true;
			}
		}
		return false;
	}

	function changeTeamV(arry, team, idx, win){
		for(var i = 0; i < arry[idx].team.length; i++){

			if(arry[idx].team[i] == team){
				arry[idx].win[i][0] = arry[idx].win[i][0] + win;
				arry[idx].played[i] = arry[idx].played[i] + 1;
			}
		}
	}

	function calcLoss(arry){
		for(var i = 0; i < arry.length; i++){
			for(var j = 0; j < arry[i].team.length; j++ ){
				var wins = arry[i].win[j][0];
				var plays = arry[i].played[j];
				var loss = plays-wins;
				arry[i].win[j][1] = loss;
			}
		}
	}

var qf;	
var ad;
var ct;
var nm;
var nsws;
var mv;
var wcf;
var wbpm;
var cb;
var ss;
var pie;
var color;
var winOrLose;
var arc;

function startVenue(venue, home, away, score){
	qf = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.append("g")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	ad = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.append("g")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	ct = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.append("g")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	nm = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	nsws = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	mv = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	wcf = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	wbpm = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	cb = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	ss = d3.select("#part5").append("svg")
		.attr("height", "250px")
		.attr("width", "220px")
		.style("margin-left","50px")
		.attr("transform", "translate(" + 100 + "," + 100 + ")");

	pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return d; });

	color = d3.scale.ordinal()
	    .range(["#1E90FF", "#C71585"]);

	winOrLose = d3.scale.ordinal()
	    .range(["Wins", "Losses"]);

	arc = d3.svg.arc()
	    .outerRadius(100)
	    .innerRadius(50);

		for(var i = 0; i < home[5].length; i++){
			if(home[5][i] != "" && !elem1(teams, home[5][i])){
				teams.push(home[5][i]);
			}
		}

		for(var k = 0; k < home.length; k++){
			for(var i = 0; i < home[k].length; i++){
				if(score[k][i] != ""){
					var ven = venue[k][i];
					var team = home[k][i];
					var win;
					var regex = /(\d+)/g;
					var num = score[k][i].match(regex);
					
						var num1 = +num[0];
						var num2 = +num[1];

						if(num1 > num2){
							win= 1;
						}
						else{
							win = 0;
						}

					var idx = checkVenue(venFinal, ven);

					
					if(!checkTeamAtVenue(venFinal,team,idx)){
						addTeamV(venFinal, team, win,idx);
					}
					else{
						changeTeamV(venFinal,team,idx,win);
					}

					team = away[k][i];

					if(num2 > num1){
						win= 1;
					}
					else{win = 0;}

					if(!checkTeamAtVenue(venFinal,team,idx)){
					addTeamV(venFinal, team, win, idx);
					}
					else{
						changeTeamV(venFinal,team,idx,win);
					}
				}	
			}
		}

		calcLoss(venFinal);
		for(var i = 0; i < venFinal.length; i ++){
			var x = document.getElementById("dropdownV");
			var option = document.createElement("option");
			option.text = venFinal[i].venue;
			x.add(option);
		}

		///////////////////////////////////////////////////////
		

		var qfg = qf.selectAll(".arc")
	      .data(pie(venFinal[0].win[0]))
	    .enter().append("g")
	      .attr("class", "qfarc");

	    

	    qfg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    qfg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    qfg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[0];
	    	});

		var adg = ad.selectAll(".arc")
	      .data(pie(venFinal[0].win[1]))
	    .enter().append("g")
	      .attr("class", "adarc");

	   	adg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    adg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    adg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[1];
	    	});

		var ctg = ct.selectAll(".arc")
	      .data(pie(venFinal[0].win[2]))
	    .enter().append("g")
	      .attr("class", "ctarc");

	   	ctg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    ctg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    ctg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[2];
	    	});

		var nmg = nm.selectAll(".arc")
	      .data(pie(venFinal[0].win[3]))
	    .enter().append("g")
	      .attr("class", "nmarc");

	   	nmg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    nmg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    nmg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[3];
	    	});

		var nswsg = nsws.selectAll(".arc")
	      .data(pie(venFinal[0].win[4]))
	    .enter().append("g")
	      .attr("class", "nswsarc");

	   	nswsg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    nswsg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    nswsg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[4];
	    	});

		var mvg = mv.selectAll(".arc")
	      .data(pie(venFinal[0].win[5]))
	    .enter().append("g")
	      .attr("class", "mvarc");

	   	mvg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    mvg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    mvg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[5];
	    	});

		var wcfg = wcf.selectAll(".arc")
	      .data(pie(venFinal[0].win[6]))
	    .enter().append("g")
	      .attr("class", "wcfarc");

	   	wcfg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    wcfg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    wcfg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[6];
	    	});

		var wbpmg = wbpm.selectAll(".arc")
	      .data(pie(venFinal[0].win[7]))
	    .enter().append("g")
	      .attr("class", "wbpmarc");

	   	wbpmg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    wbpmg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    wbpmg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[7];
	    	});

		var cbg = cb.selectAll(".arc")
	      .data(pie(venFinal[0].win[8]))
	    .enter().append("g")
	      .attr("class", "cbarc");

	   	cbg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    cbg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    cbg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[8];
	    	});

		var ssg = ss.selectAll(".arc")
	      .data(pie(venFinal[0].win[9]))
	    .enter().append("g")
	      .attr("class", "ssarc");

	   	ssg.append("path")
	      .attr("d", arc)
	      .style("fill", function(d,i) {return color(i)})
	      .each(function(d) { this._current = d; });

	    ssg.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d,i) {
	      	var text = winOrLose(i)
	      	if(d.data == 0){
	      		text = "";
	      	}
	      	return text;
	      });

	    ssg.append("text")
	    	.attr("text-anchor", "middle")
	    	.attr("y", "120px")
	    	.text(function(d){
	    		return venFinal[0].team[9];
	    	});
		///////////////////////////////////////////////////////
	}

