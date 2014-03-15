'use strict';

var	fs = require('fs'),
	path = require('path'),
//	winston = require('winston'),
	templates = module.parent.require('../public/src/templates.js');

var constants = Object.freeze({
	'name': "Admin Email",
	'admin': {
		'route': '/admin-email',
		'icon': 'fa-envelope-o'
	}
});

var AdminEmail = {
		registerPlugin: function(custom_header, callback) {
			custom_header.plugins.push({
				"route": constants.admin.route,
				"icon": constants.admin.icon,
				"name": constants.name
			});

			return custom_header;
		},
		addRoute: function(custom_routes, callback) {
			fs.readFile(path.resolve(__dirname, './public/templates/admin/plugins/admin-email.tpl'), function (err, template) {
				custom_routes.routes.push({
					"route": constants.admin.route,
					"method": "get",
					"options": function(req, res, callback) {
						callback({
							req: req,
							res: res,
							route: constants.admin.route,
							name: constants.name,
							content: template
						});
					}
				});

				callback(null, custom_routes);
			});
		}
	};
module.exports = AdminEmail;

/*
(function(admin-email) {
    var email = '';
    
	var admin = {};

	admin.menu = function(custom_header) {
		custom_header.plugins.push({
			route: '/plugins/admin-email',
			icon: 'fa-envelope-o',
			name: 'Admin Email'
		});

		return custom_header;
	};
	admin-email.admin = admin;
	
	admin-email.init = function(app, middleware, controllers) {
		app.get('/admin/plugins/imgur', middleware.admin.buildHeader, renderAdmin);
		app.get('/api/admin/plugins/imgur', renderAdmin);

	};
	function renderAdmin(req, res, next) {
		res.render('admin/plugins/admin-email');
	}
	
}(module.exports));
*/
