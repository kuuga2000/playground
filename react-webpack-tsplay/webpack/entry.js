const path = require('path')
const dirCode = '/app/design/frontend/company/default/';
const dirOutput = 'static/store/company/desktop/id_ID/';
module.exports = {
    purchased:{
      import: path.resolve(__dirname, "..", `${dirCode}company_purchased/purchased.tsx`),
      filename: `${dirOutput}company_purchased/[name].js`,
      dependOn: "vendor/vendor"
    },
    customer: {
      import: path.resolve(__dirname, "..", `${dirCode}company_customer/customer.tsx`),
      filename: `${dirOutput}company_customer/[name].js`,
      dependOn: "vendor/vendor"
    },
    'vendor/vendor': ["react", "react-dom"],
  }
