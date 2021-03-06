<?php
	
	class Extension_Strong_Author_Passwords extends Extension {

		public function getSubscribedDelegates(){
			return array(
				array(
					'page'		=> '/backend/',
					'delegate'	=> 'InitaliseAdminPageHead',
					'callback'	=> 'initalise_admin_page_head'
				)
			);
		}
		
		public function initalise_admin_page_head($context){
			$page = Administration::instance()->Page;
			if ($page instanceof contentSystemAuthors) {
				$page->addStylesheetToHead(URL . '/extensions/strong_author_passwords/assets/strong_author_passwords.authors.css', 'screen', 100);
				$page->addScriptToHead(URL . '/extensions/strong_author_passwords/assets/strong_author_passwords.authors.js', 51);
			}
		}
				
	}
	
?>