const mix = require("laravel-mix");

// set root folder
mix.setPublicPath("./")
	.react("public/js/gidi-flights-public.js", "public/js/gidi-flights-public.bundle.js")
	.js("admin/js/gidi-flights-admin.js", "admin/js/gidi-flights-admin.bundle.js")
	.sass("public/css/gidi-flights-public.scss", "public/css/gidi-flights-public.bundle.css")
	.sass("admin/css/gidi-flights-admin.scss", "admin/css/gidi-flights-admin.bundle.css")
	.minify([
		'admin/js/gidi-flights-admin.bundle.js',
		'public/js/gidi-flights-public.bundle.js',
		'admin/css/gidi-flights-admin.bundle.css',
		'public/css/gidi-flights-public.bundle.css',
	]);
