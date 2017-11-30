var term = "";
var numResults = 0;
var startDate = 19000101;
var endDate = 20171101;

$("#search").on("click", function() {

	term = $("#searchTerm").val().trim();
	console.log("search term: " + term);

	startDate = $("#startYear").val().trim() + "0101";
	console.log("Start Date: " + startDate);

	endDate = $("#endYear").val().trim() + "1231";
	console.log("End Date: " + endDate);

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








		
	})  //done function

})  //on click