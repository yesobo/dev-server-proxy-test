var path = require("path");

module.exports = {
  entry: {
    app: ["./app/scripts/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    proxy: [
      {
        context: [
          "/api",
          "/api/test",
          "/sap",
          "/tas"
        ],
        target: 'http://localhost:3000',
        secure: false
      }
    ]
  }
};