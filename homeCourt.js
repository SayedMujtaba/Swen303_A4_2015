function main(home, venue, score, j){
	function addTo(i,val){
		var jsonArg = new Object();
		jsonArg.home = home[j][i];
		jsonArg.venue = venue[j][i];
		if(val == 0){
			jsonArg.value = 0.00;
		}
		else{
			jsonArg.value = 80.00;
		}
		jsonArg.won = val;
		jsonArg.played= 1;
		return jsonArg;
	}

	function elem(home, obj){
		if(obj.length == 0){
			return false;
		}
		else{
			for (var i = 0; i < obj.length; i++){
				if(home == obj[i].home){
					return true;
				}
			}
			return false;
		}
	}

	function change(home, obj, val){
		for (var i = 0; i < obj.length; i++){
			if(home == obj[i].home){
				obj[i].played = obj[i].played + 1;
				if(val){
					obj[i].won = obj[i].won + 1;
					
				}
				obj[i].value = 80 * obj[i].won/obj[i].played;
				
			}
		}
	}

	var theFinal= [];
	for(var i = 0; i < home[j].length; i++){
		if(score[j][i] != ""){
			var regex = /(\d+)/g;
				var num = score[j][i].match(regex);
				var num1 = +num[0];
				var num2 = +num[1];
			if(+num[0] > +num[1]){
				if(elem(home[j][i], theFinal)){
					change(home[j][i], theFinal,true);
				}
				else{
					theFinal.push(addTo(i,1));
				}
			}
			else{
				if(elem(home[j][i], theFinal)){
					change(home[j][i], theFinal);
				}
				else{
					theFinal.push(addTo(i,0,false));
				}
			}
		}
		
	}
	
	var jsonArray = JSON.parse(JSON.stringify({"children": theFinal}));
	

	////////////////////////////
	var diameter =500,//this number her is the size of the screen OK!!!! fucking hell
	    format = d3.format(",d"),
	    color = d3.scale.category20c();

	var bubble = d3.layout.pack()
	    .sort(null)
	    .size([600, 500])
	    .padding(2);

	var svg = d3.select("#part2").append("svg")
	    .attr("width", 700)
	    .attr("height", 500)
	    .attr("class", "bubble");

	var tip = d3.tip()
        .attr('class', 'd3-tip2')
        .offset([-10, 0])
        .html(function(d) {
	        return "<strong>" + d.home + "<br/>"+"Won " + d.won+" out of "+d.played+" games at home";
    	});

	var node = svg.selectAll(".node")
	  .data(bubble.nodes(jsonArray)
			.filter(function(d) { return !d.children; }))
	.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" +d.x+ "," + d.y + ")"; });

	 node.call(tip);

	node.append("circle")
	  .attr("r", function(d) { return d.value; })
	  .style("fill", function(d) { 
	  	if(d.home == "Adelaide Thunderbirds"){
	  		return "#FF33CC";
	  	}
	  	else if(d.home == "Central Pulse"){
	  		return "#FFFF00";
	  	}
	  	else if(d.home == "Canterbury Tactix"){
	  		return "#FF0000";
	  	}
	  	else if(d.home == "Melbourne Vixens"){
	  		return "#0D6100";
	  	}
	  	else if(d.home == "New South Wales Swifts"){
	  		return "#3366FF";
	  	}
	  	else if(d.home == "Northern Mystics"){
	  		return "#33CCFF";
	  	}
	  	else if(d.home == "Queensland Firebirds"){
	  		return "#F76105";
	  	}
	  	else if(d.home == "Southern Steel"){
	  		return "#CF0D61";
	  	}
	  	else if(d.home == "Waikato Bay of Plenty Magic"){
	  		return "#6D0000";
	  	}
	  	else if(d.home == "West Coast Fever"){
	  		return "#47A600";
	  	}
	  return "#EEE8AA"; })
	  .on('mouseover', tip.show)
      .on('mouseout', tip.hide);;
		
}

function clear2(){
	var x = d3.select("#part2");
	x.select("svg").remove();
}