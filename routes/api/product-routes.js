const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models"); // Import necessary models

// The `/api/products` endpoint

// GET all products
router.get("/", (req, res) => {
  // Find all products along with associated Category and Tag data using Sequelize's findAll method
  Product.findAll({
    attributes: ["id", "product_name", "price", "stock"], // Specify the attributes to include
    include: [
      {
        model: Category, // Include the Category model
        attributes: ["category_name"], // Include the category_name attribute
      },
      {
        model: Tag, // Include the Tag model
        attributes: ["tag_name"], // Include the tag_name attribute
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData)) // Send product data as JSON response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

// GET one product by ID
router.get("/:id", (req, res) => {
  // Find a specific product by its ID along with associated Category and Tag data using Sequelize's findOne method
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "product_name", "price", "stock"], // Specify the attributes to include
    include: [
      {
        model: Category, // Include the Category model
        attributes: ["category_name"], // Include the category_name attribute
      },
      {
        model: Tag, // Include the Tag model
        attributes: ["tag_name"], // Include the tag_name attribute
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData)) // Send product data as JSON response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Create a new product
router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        // If there are product tags, create pairings in ProductTag model
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds)) // Send productTagIds as JSON response
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Handle errors with a 400 response
    });
});

// Update a product by ID
router.put("/:id", (req, res) => {
  // Update product data by ID using Sequelize's update method
  Product.update(req.body, {
    where: {
      id: req.params.id, // Use the provided ID parameter to identify the product to update
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        // Update product tags in ProductTag model
        ProductTag.findAll({
          where: { product_id: req.params.id },
        }).then((productTags) => {
          // Create filtered list of new tag_ids and remove tags if necessary
          // ... (code continues, updating and removing tags)
        });
      }

      return res.json(product); // Send the updated product data as JSON response
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Handle errors with a 400 response
    });
});

// Delete a product by ID
router.delete("/:id", (req, res) => {
  // Delete a product by its ID using Sequelize's destroy method
  Product.destroy({
    where: {
      id: req.params.id, // Use the provided ID parameter to identify the product to delete
    },
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' }); // Handle case when product is not found
        return;
      }
      res.json(dbProductData); // Send the deleted product data as JSON response
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

module.exports = router;
