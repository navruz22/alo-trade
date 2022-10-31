const {
  createOffer,
  getOffers,
  getMessagesByOffer,
  getOfferByUser,
} = require("./offer");
const router = require("express").Router();
const auth = require("./../../middleware/auth.middleware");

router.post("/create", auth, createOffer);
router.post("/getoffers", auth, getOffers);
router.post("/getmessagesbyoffer", auth, getMessagesByOffer);
router.post("/getofferbyuser", auth, getOfferByUser);

module.exports = router;
