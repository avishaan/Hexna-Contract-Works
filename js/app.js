$(document).ready(function() {
	//Header
	var header = $("<h1>Hexna Auto Sublease</h1>");
	$("header").append(header);

	//Footer
	var footer = $("<br><p>Hexna Corp.</p><p>http://www.hexna.com</p>")
	$("footer").append(footer);
	$("footer").on("click", function(){
		alert("Why would you click that?\n\nInteresting...");
	})

	//Initial
	var initialDesc = $("<div id=\"initialDesc\"><p>Let Hexna give you " + 
					"peace of mind when you choose to sublease your property. " + 
					"Preparing a sublease is time-consuming and often difficult. " + 
					"If you don't use the proper legal language in drafting your arrangement, " + 
					"you're left with no recourse if something goes wrong. Using our software, " + 
					"you can easily create legally binding, airtight leases in a matter of minutes.</p></div>");
	$("section").append(initialDesc);
	var nextButton = $("<button type=button>Let's begin</button>");
	$("section").append(nextButton);

	$(nextButton).on("click",function() {
		$("section #initialDesc").remove();
		$(this).remove();
		//Cost-Basis Wizard
		var costBasisTitle = $("<h3>Cost-Basis Wizard</h3>");
		$("section").append(costBasisTitle);
		var lessorRentCycle = new Question({ 
			question: "Rent per month: ",
			inputType: "number",
		});
		var questionView = new QuestionView({ model: lessorRentCycle});
		questionView.render();
	});
});