# Front-End Interview Test - Development

* Part A: HTML + CSS

Usage of SCSS preprocessor:
	- It is completely compatible with all versions of CSS.
	- Greatly enhances CSS development.
	- Results in clean, extensible and reusable CSS code

Applied Progressive Enhancement Design method to make the website adapt to all device sizes.

* Part B: Javascript

Usage of AngularJS Javascript framework:
	- It is a structural framework for dynamic web apps 
	- One of the best frameworks for developing a Single Page Application (SPA)
	- It allows for the extension of HTML's syntax to convey the application's components effortlessly.
	- Angular makes much of the code you would otherwise have to write completely redundant.
	- Best Features are two-way binding, templating, modularization, dependency injection, etc

Since I didn't have much experience with Webpack & babel, and due to lack of time to learn it, I used gulp as a task/build runner, also IE and Safari browsers don't support ES6 and because I was unable to investigate how to use babel to fix it, unfortunately it doesn't work properly in IE and Safari browsers but works perfectly in Chrome and Firefox.

# Installation instructions

First make sure Gulp is globally installed, by running:
<pre>
	<code>
		npm install -g gulp
		npm install --save gulp-cli
	</code>
</pre>
After cloning the project, run the following commands:
<pre>
	<code>
		npm install
		gulp build
		gulp run
	</code>
</pre>

This will start the development server, the TODO sample app should be available at the following url:

http://localhost:8080/frontend-code-challenge/#!/src/app/home