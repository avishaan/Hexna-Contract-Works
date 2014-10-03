var Party = Backbone.Model.extend({
	defaults: {
		firstName: '',
		lastName: ''
	}
});

var Question = Backbone.Model.extend({
	defaults: {
		questionText: '',
		inputType: '',
		input: ''
	}
});