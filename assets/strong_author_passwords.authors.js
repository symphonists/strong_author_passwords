var StrongAuthorPasswords = {
	
	critera: null,
	
	init: function() {
		var self = this;
		
		var password = jQuery('input[name="fields[password]"]');
		
		this.criteria = jQuery(
			'<ul id="strong-author-password-criteria">\
		 		<li class="length">15 characters in length</li>\
				<li class="lowercase">At least one lowercase character</li>\
				<li class="uppercase">At least one uppercase character</li>\
				<li class="number">At least one number</li>\
				<li class="alphanumeric">At least one non-alphanumeric (e.g. % or @)</li>\
			</ul>');
		password.parent().append(this.criteria);
		
		var submit_button = jQuery('form').find('*[type="submit"]');
		var valid = true;
		
		password.live('keyup', function() {
			if(!password.parent().is(':visible')) return;
			valid = self.check_password_strength( jQuery(this).val() );
			if(!valid) {
				submit_button.attr('disabled', 'disabled');
			} else {
				submit_button.removeAttr('disabled');
			}
		});
		
		jQuery('form').bind('submit', function(e) {
			password.trigger('keyup');
			if(!valid) e.preventDefault();
		});
		
	},
	
	check_password_strength: function(password) {
		
		var valid = true;
		this.criteria.find('li').removeClass('fail').addClass('success');
		
		if(password.length < 15) {
			this.criteria.find('.length').removeClass('success').addClass('fail');
			valid = false;
		}
		
		if(!password.match(/[a-z]/)) {
			this.criteria.find('.lowercase').removeClass('success').addClass('fail');
			valid = false;
		}
		
		if(!password.match(/[A-Z]/)) {
			this.criteria.find('.uppercase').removeClass('success').addClass('fail');
			valid = false;
		}
		
		if(!password.match(/[0-9]/)) {
			this.criteria.find('.number').removeClass('success').addClass('fail');
			valid = false;
		}
		
		if(!password.match(/[^a-zA-Z0-9\s]/)) {
			this.criteria.find('.alphanumeric').removeClass('success').addClass('fail');
			valid = false;
		}
		
		return valid;
		
	}
	
};

jQuery(document).ready(function() {
	StrongAuthorPasswords.init();	
});