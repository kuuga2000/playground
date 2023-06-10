const path = require('path')
module.exports = {
    'static/store/company/desktop/id_ID/company_purchased/purchased': {
        import: path.resolve(__dirname, "..", "/app/design/frontend/company/default/company_purchased/purchased"),
        dependOn: "vendor/vendor",
    },
    'static/store/company/desktop/id_ID/company_customer/customer': {
        import: path.resolve(__dirname, "..", "/app/design/frontend/company/default/company_customer/customer"),
        dependOn: "vendor/vendor",
    },
    'vendor/vendor': ["react", "react-dom"],
}
