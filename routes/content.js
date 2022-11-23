let express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(["100.103.138.13", 2, 3]);

  let k =
    "adb shell am start -a android.intent.action.VIEW -n org.xbmc.kodi/.Splash";
});

module.exports = router;
