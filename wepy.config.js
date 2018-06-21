const path = require("path");
const prod = process.env.NODE_ENV === "production";

module.exports = {
  wpyExt: ".wpy",
  cliLogs: !prod,
  resolve: {
    modules: ["node_modules"]
  },
  compilers: {
    less: {
      compress: prod
    },
    typescript: {
      compilerOptions: {
        module: "system",
        noImplicitAny: true,
        removeComments: true,
        preserveConstEnums: true,
        sourceMap: true
      }
    }
  },
  plugins: {}
};
