$(document).ready(function() {
	var execute = true;

	var sunfyreTable = $('table')[2];
	var sunfyreRow = $(sunfyreTable).find('tr:last-child');
	var sunfyreFriend = sunfyreRow.find('a.link-type-player');
	var sunfyreImgSource = sunfyreRow.find('img').attr('src');

	if(sunfyreImgSource !== undefined) {

		var body = $('body').append('<div class="modal-sunfyre-content"></div>');
		var modal = $('.modal-sunfyre-content');
		modal.append('<div class="modal-container"></div>');

		var modalContainer = modal.find('.modal-container');

		modalContainer
		.append('<img class="img-modal-sunfyre" src="' + sunfyreImgSource + '"/>')

		modalContainer
		.append('<p class="content-modal">O seu amigo sunfyre, o verdadeiro, que sempre perde com você é <strong>' 
			+ sunfyreFriend.text() + '</strong></p>');


		modalContainer.append('<span class="exit-modal-sunfyre">X</span>');

		$('.exit-modal-sunfyre').on('click', function () {
			$('.modal-sunfyre-content').fadeOut("slow", function () {
				this.remove();
			});
		});

	}
});