var QuestionView = Backbone.View.extend({
	render: function(){
		var html = "<p>" + this.model.get("question") + "</p>";
		this.$el.html(html);
	}
});