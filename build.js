const fs = require("fs"), tariff = require("tariff")

fs.writeFileSync("ist.cjs.js",
                 "// (This file is generated from ist.js. Don't edit it directly.)\n\n" +
                 tariff(fs.readFileSync("ist.js", "utf8")))
