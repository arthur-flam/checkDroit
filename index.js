var prompt = require('prompt');
var Nightmare = require('nightmare');

prompt.start();
prompt.message="";
prompt.delimiter = "";

prompt.get(['username', 'password'], function (err, result) {
    if (err) return console.log(err);
    new Nightmare()
	.useragent("Pour avoir les admissibilites en avance - @ArthurFlam")
	.goto('https://cas.univ-paris1.fr/cas/login?service=https://esup.univ-paris1.fr/Login')
	.type('input[id="username"]', result.username)
	.type('input[id="password"]', result.password)
	.click('.btn-submit')
	.wait()
        .evaluate(function (page){
	    return document.documentElement.innerHTML;
	}, function (res){console.log(res);})
	.run (function (err, nightmare) {
	    if (err) return console.log(err);
	    console.log('Done!');
	});
});

