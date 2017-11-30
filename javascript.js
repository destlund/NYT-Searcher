var term = "";
var numResults = 0;
var startDate = 19000101;
var endDate = 20171101;

$("#search").on("click", function() {

	term = $("#searchTerm").val().trim();
	console.log("search term: " + term);


	if ($("#startYear").val() > 0) {
		startDate = $("#startYear").val().trim() + "0101";
		console.log("Start Date: " + startDate);
	} else {
		//nothing
	}

	if ($("#endYear").val() > 0) {
		endDate = $("#endYear").val().trim() + "0101";
		console.log("End Date: " + endDate);
	} else {
		//nothing
	}


	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
		term + "&api_key=1e1716fb78ac45f7b3268681435313f3&begin_date=" + 
		startDate + "&end_date=" + endDate;
	console.log("URL: " + queryURL);


	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(res) {
		var results = res.response.docs;
		console.log("results: " + results);

		for (var i = 0; i < results.length; i++) {
			var numbering = i + 1;
			console.log("Number: " + numbering);
			var headline = results[i].headline.main;
			console.log("headline: " + headline);
			var author = results[i].byline.orignal;
			console.log("author: " + author);
			var numbering = i + 1;
			console.log("Number: " + numbering);


			var p = $("<p>").text(numbering + headline + author);

			$("#results").append(p);
			
		} //for loop







		
	})  //done function

})  //on click