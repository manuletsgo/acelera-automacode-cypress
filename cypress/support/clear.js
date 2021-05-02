const rimraf = require("rimraf")

rimraf.sync("./reports/assets")
rimraf.sync("./reports/features")
rimraf.sync("./reports/json")
rimraf.sync("./reports/screenshots")
rimraf.sync("./reports/snapshots")
rimraf.sync("./reports/*.html")
