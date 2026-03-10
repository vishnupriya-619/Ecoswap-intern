const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const Products = require("../models/productschema.js")
const Organization = require("../models/organizationschema.js")
const Userproducts = require("../models/userproductschema.js")
const uploads = require("../services/imageservices.js")

router.post("/add", uploads.single("cover_image"), async (req, res) => {
    try {
        const { productName, description, category, quantity, price } = req.body
        const token = req.headers.authorization.slice(7)
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        const organization = await Organization.findOne({ "_id": decoded.id })
        if (!organization) {
            const userproduct = new Userproducts({
                userId: decoded.id,
                productName,
                description,
                category,
                quantity,
                price,
                image: req.file && req.file?.filename
            })
            await userproduct.save()
        res.send({ message: "Successfully added", product:userproduct })

        }
        else {
            const product = new Products({
                organizationId: decoded.id,
                productName,
                description,
                category,
                quantity,
                price,
                image: req.file && req.file?.filename
            })
            await product.save()
        res.send({ message: "Successfully added", product })

        }
    }
    catch (e) {
        if (e instanceof jwt.JsonWebTokenError || e instanceof jwt.TokenExpiredError) {
            res.status(403).send({ message: "jwt error", error: e })

        }
        res.status(400).send({ message: "Error Occured", error: e })
    }
})

router.get("/view", async (req, res) => {
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    const products = await Products.find({ })

    if (!products) {
        return res.status(404).send({ message: "No products" })
    }

    res.send({ message: "Organization Products", products })

})

module.exports = router
