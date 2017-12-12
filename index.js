window.onload = onReady;
function onReady() {
	(function() {
		var componentOverlays = document.querySelectorAll('.component-overlay');

		if(!componentOverlays.length) {
			return;
		}

		for(var i =0; i<componentOverlays.length; i++) {
			componentOverlays[i].addEventListener('click', onOverlayOpen.bind(this));
		}

		function onOverlayOpen(event) {
			var target = event.target,
				currTarget = event.currentTarget,
				closetype = currTarget.getAttribute("data-type") || 'auto';

			if(target.classList.contains('role-trigger')) {
				var contentId = target.getAttribute('data-id');
				var container = currTarget.querySelector(contentId);

				container.classList.add('active');
			}
			if(closetype === 'auto') {
				if(target.classList.contains('role-parent')) {
					target.classList.remove('active');	
				}
			}
		}

	})();
}