$(document).ready(function() {
	//Header
	var headerTitle = $("<h1>Hexna Contract Works</h1>");
	var headerDesc = $("<p>Let Hexna give you peace of mind when you choose to sublease your property. Preparing a sublease is time-consuming and often difficult. If you don't use the proper legal language in drafting your arrangement, you're left with no recourse if something goes wrong. Using our software, you can easily create legally binding, airtight leases in a matter of minutes.</p>");
	$("header").append(headerTitle);
	$("header").append(headerDesc);

	//Footer
	var footer = $("<br><p>Hexna Corp.</p><p>http://www.hexna.com</p>")
	$("footer").append(footer);

	//Cost-Basis Wizard
	var costBasisTitle = $("<h3>Cost-Basis Wizard</h3>");
	$("#costBasis").prepend(costBasisTitle);
});