var Nightmare = require('nightmare');

new Nightmare()
    .goto('https://cas.univ-paris1.fr/cas/login?service=https://esup.univ-paris1.fr/Login')
    .type('input[id="username"]', 'id')
    .type('input[id="password"]', 'pass')
    .click('.btn-submit')
    .wait()
    .run(function (err, nightmare) {
	if (err) return console.log(err);
	console.log('Done!');
    });
