var User = require('../Model/user');

var user = {
    name: "Admin",
    email: "admin@admin.com",
    password: "123456"
}

User.create(user, function(e) {
    if (e) {
        throw e;
    }
});