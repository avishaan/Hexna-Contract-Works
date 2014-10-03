var QuestionView = Backbone.View.extend({
	tagName: 'span',
	id: 'question-view',
	className: 'question',
	el: $('section'),
	template: _.template('<%= questionText %>'),
	initialize: function(){
		_.bindAll(this, 'render');
	},
	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});