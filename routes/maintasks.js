const express = require("express");
const router = express.Router();
const {
    getAllForms,
    sendForm,
} = require("../controllers/maintasks");

router.get("/", getAllForms);
router.post("/", sendForm);

module.exports = router;