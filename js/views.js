var QuestionView = Backbone.View.extend({
	el: $('section'),
	
	initialize: function(){
		_.bindAll(this, 'render');
	},

	render: function(){
		var html = this.model.get('question');
		$(this.el).append(html);
	}
});