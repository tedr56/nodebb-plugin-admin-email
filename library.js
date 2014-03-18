'use strict';

var	fs = require('fs'),
	path = require('path'),
//	winston = require('winston'),
	Meta = module.parent.require('./meta'),
	templates = module.parent.require('../public/src/templates.js');

    
var AdminEmail = {
    send: function(req, res, next) {
	res.json(200, {message: 'Email send'});
    },
    onLoad: function(app, middleware, controllers) {
	    function render(req, res, next) {
		    res.render('admin/plugins/admin-email', {});
	    }
	    app.get('/admin/plugins/admin-email', middleware.admin.buildHeader, render);
	    app.get('/api/admin/plugins/admin-email', render);
	    app.post('/api/admin/plugins/admin-email/send', AdminEmail.send);
    },
    admin: {
	menu: function(custom_header, callback) {
	    custom_header.plugins.push({
		    "route": '/plugins/admin-email',
		    "icon": 'fa-envelope-o',
		    "name": 'Admin Email'
	    });

	    return custom_header;
	}
    }
}
module.exports = AdminEmail;