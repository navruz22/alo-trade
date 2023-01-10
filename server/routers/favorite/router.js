const router = require("express").Router();
const authMiddleware = require("../../middleware/auth.middleware");
const { createFavorite, getFavorites, deleteFavorite } = require("./favorite");

router.post("/create", authMiddleware, createFavorite);
router.post("/get", authMiddleware, getFavorites);
router.post("/delete", deleteFavorite);

module.exports = router;
