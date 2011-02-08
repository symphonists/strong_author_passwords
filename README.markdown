# Strong Author Passwords

* Version: 1.0
* Build Date: 2011-02-08
* Author: Nick Dunn
* Requirements: Symphony 2.0.6

## Background

I have a client who have a strict password policy for all of their systems. This extension enforces these rules when you create or edit an author (Symphony user). The rules are:

* At least 15 characters in length
* At least 1 lower case character
* At least 1 upper case character
* At least 1 numeric character
* At least 1 non-alphanumeric character (e.g. a symbol such as %)

This extension does not attempt to show a password strength meter; instead, all of the above rules are required. The user can not complete the form unless all rules are satisfied.

## Installation

1. Upload the 'strong_author_passwords' folder in this archive to your Symphony 'extensions' folder.
2. Enable it by selecting the "Strong Author Passwords", choose Enable from the with-selected menu, then click Apply.