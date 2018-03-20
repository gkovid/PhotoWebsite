
$(document).ready(function() {
	
	var userFeed = new Instafeed({
        get: 'user',
        userId: '3233993559',
        resolution: 'standard_resolution',
        accessToken: '3233993559.d627009.c3596fdcf8964c09ab2dec793a151d2d',
        sortBy: 'most-recent',
        template: '<div class="col-lg-6 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

});