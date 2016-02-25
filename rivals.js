
var width = 600;
var height = 300;
var y;
var x;
var theFinal= [];
var xPad = 0;

function startRival(home, away, score, date){
	xpad =0;
	for(var k = 0; k < home.length; k++){
		for(var i = 0; i < home[k].length; i++){
			if(score[k][i] != ""){
				if(!elem(home[k][i],away[k][i],theFinal)){
					var jsonArg = new Object();
					jsonArg.team1 = home[k][i];
					jsonArg.team2 = away[k][i];
					var regex = /(\d+)/g;
   					var num = score[k][i].match(regex);
   					var num1 = +num[0];
   					var num2 = +num[1];
					jsonArg.score = [[num1,num2]];
					jsonArg.date = [[k,date[k][i]]];
					theFinal.push(jsonArg);
				}
				else{
					change(home[k][i],away[k][i],score[k][i],date[k][i],k,theFinal);
				}
			}
			
		}
	}



	var color1 ="#0D6100";
	var color2 ="#FF33CC";
	var idx = 12;
	var size = theFinal[idx].score.length;
	var widBar = width/(size*2);

	y = d3.scale.linear().domain([0,100]).range([height, 0]);
	x = d3.scale.linear().domain([0,size]).range([0, width]);
	
	var svg = d3.select("#part4").append("svg")
		.attr("height", "1000px")
		.attr("width", "1000px")
		.style("margin-left","200px");

	svg.append("rect")
		.attr("x", xpad)
		.attr("y", 300)
		.attr("width", width+"px")
		.attr("height", "2px");

	svg.append("rect")
		.attr("x", xpad)
		.attr("y", 0)
		.attr("width", 2)
		.attr("height", 600);

	svg.append("text")
		.attr("x",xpad+600)
		.attr("y", 34)
		.attr("class","team1")
		.style("fill",color1)
		.style("font-size", "34px")
		.text(theFinal[idx].team1);

	svg.append("text")
		.attr("x",xpad+600)
		.attr("y", 600)
		.attr("class","team2")
		.style("fill",color2)
		.style("font-size", "34px")
		.text(theFinal[idx].team2);

	var chart = svg.selectAll("div")
		.data(theFinal[idx].score)
	.enter()

	var g = chart.append("g");

	var topR = g.append("rect")
		.style("fill", color1)
		.attr("class", "topR")
		.attr("x", function(d,i){return xpad+x(i)+2;})
		.attr("y", function(d){return y(d[0])})
		.attr("width", widBar+"px")
		.attr("height", function(d){return height- y(d[0]);});

	//bot
	var botR = g.append("rect")
		.style("fill",color2)
		.attr("class", "botR")
		.attr("x", function(d,i){return xpad+x(i)+2;})
		.attr("y", 302)
		.attr("width",widBar+"px")
		.attr("height", function(d){return height- y(d[1]);})

	var topT = g.append("text")
		.attr("class", "topT")
		.attr("x", function(d,i){return xpad+x(i) + 2;})
		.attr("y", function(d){return y(d[0]) + 2})
		.attr("dy", ".80em")
		.style("fill","white")
		.text(function(d){return d[0];});

	var botT= g.append("text")
		.attr("class", "botT")
		.attr("x", function(d,i){return xpad+x(i)+ 2;})
		.attr("y", function(d){return 302 +height - y(d[1]) -2})
		.attr("dy", "-.10em")
		.style("fill","white")
		.text(function(d){return d[1];});




}



function transform(idx){
	var size = theFinal[idx].score.length;
	//y.domain([0,80]).range([height, 0]);
	x.domain([0,size]).range([0, width]);
	var widBar = width/(size*2);

	var svg = d3.select("#part4");


	var color1;
	var color2;
	if(theFinal[idx].team1 == "Adelaide Thunderbirds"){
  		color1 = "#FF33CC";
  	}
  	else if(theFinal[idx].team1 == "Melbourne Vixens"){
  		color1 = "#0D6100";
  	}
  	else if(theFinal[idx].team1 == "Waikato Bay of Plenty Magic"){
  		color1 = "#6D0000";
  	}

  	if(theFinal[idx].team2 == "Adelaide Thunderbirds"){
  		color2 = "#FF33CC";
  	}
  	else if(theFinal[idx].team2 == "Queensland Firebirds"){
  		color2 = "#F76105";
  	}
  	else if(theFinal[idx].team2 == "Southern Steel"){
  		color2 = "#CF0D61";
  	}
  	else if(theFinal[idx].team2 == "New South Wales Swifts"){
  		color2 = "#3366FF";
  	}

  	svg.select(".team1")
  		.transition()
  		.duration(750)
  		.style("fill",color1)
  		.text(theFinal[idx].team1);

  	svg.select(".team2")
  		.transition()
  		.duration(750)
  		.style("fill",color2)
  		.text(theFinal[idx].team2);

	svg.selectAll(".topR")
		.transition()
		.duration(750)
		.attr("y", function(d,i){return y(0)})
		.attr("height", function(d){return height- y(0);});

	svg.selectAll(".topR")
		.data(theFinal[idx].score)
		.transition()
		.delay(750)
		.duration(750)
		.style("fill", color1)
		.attr("x", function(d,i){return xpad+x(i)+2;})
		.attr("y", function(d,i){return y(d[0])})
		.attr("width", widBar+"px")
		.attr("height", function(d){return height- y(d[0]);});

	svg.selectAll(".topT")
		.transition()
		.text(function(d){return "";});

	svg.selectAll(".topT")
		.data(theFinal[idx].score)
		.transition()
		.attr("x", function(d,i){return xpad+x(i)+4;})
		.attr("y", function(d){return y(d[0])});

	svg.selectAll(".topT")
		.data(theFinal[idx].score)
		.transition()
		.delay(1500)
		.text(function(d){return d[0];});

	svg.selectAll(".botR")
		.transition()
		.duration(750)
		.attr("y", function(d,i){return y(0)})
		.attr("height", function(d){return height- y(0);});

	svg.selectAll(".botR")
		.data(theFinal[idx].score)
		.transition()
		.delay(750)
		.style("fill", color2)
		.duration(750)
		.attr("x", function(d,i){return xpad+x(i)+2;})
		.attr("y", 302)
		.attr("width",widBar+"px")
		.attr("height", function(d){return height- y(d[1]);});

	svg.selectAll(".botT")
		.transition()
		.text(function(d){return "";});

	svg.selectAll(".botT")
		.data(theFinal[idx].score)
		.transition()
		.attr("x", function(d,i){return xpad+x(i)+4;})
		.attr("y", function(d){return 302 +height - y(d[1]);});

	svg.selectAll(".botT")
		.data(theFinal[idx].score)
		.transition()
		.delay(1500)
		.text(function(d){return d[1];});

}

function elem(team1, team2, arry){
	for(var i = 0; i < arry.length; i++){
		if((team1 == arry[i].team1 && team2 == arry[i].team2) || (team2 == arry[i].team1 && team1 == arry[i].team2)){
			return true;
		}
	}
	return false;
}


function change(team1, team2, score, date, k, arry){
	for(var i = 0; i < arry.length; i++){
		if(team1 == arry[i].team1 && team2 == arry[i].team2){
			var regex = /(\d+)/g;
			var num = score.match(regex);
			var num1 = +num[0];
			var num2 = +num[1];
			arry[i].score.push([num1,num2]);
			var added = false;
			for(var j = 0; j < arry[i].date.length && !added; j++){
				if (arry[i].date[j][0] == k){
					arry[i].date[j].push(date);
					added = true;
				}
			}

			if(!added){
				arry[i].date.push([k,date]);
			}
				
		}
		else if(team2 == arry[i].team1 && team1 == arry[i].team2){
			var regex = /(\d+)/g;
			var num = score.match(regex);
			var num1 = +num[1];
			var num2 = +num[0];
			arry[i].score.push([num1,num2]);
			var added = false;
			for(var j = 0; j < arry[i].date.length && !added; j++){
				if (arry[i].date[j][0] == k){
					arry[i].date[j].push(date);
					added = true;
				}
			}

			if(!added){
				arry[i].date.push([k,date]);
			}
		}


	}
}