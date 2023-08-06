const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models"); // Import Tag, Product, and ProductTag models

// GET all tags and their associated products
router.get("/", (req, res) => {
  Tag.findAll({
    include: {
      model: Product, // Include the Product model
      attributes: ["product_name", "price", "stock", "category_id"], // Specify attributes to include
    },
  })
    .then((dbTagData) => res.json(dbTagData)) // Send the retrieved data as JSON response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

// GET a specific tag by ID along with its associated products
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id, // Find by the provided ID parameter
    },
    include: {
      model: Product, // Include the Product model
      attributes: ["product_name", "price", "stock", "category_id"], // Specify attributes to include
    },
  })
    .then((dbTagData) => res.json(dbTagData)) // Send the retrieved data as JSON response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Create a new tag
router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name, // Get tag_name from the request body
  })
    .then((dbTagData) => res.json(dbTagData)) // Send the created tag data as JSON response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Update a tag by ID
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id, // Update the tag with the provided ID parameter
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" }); // Handle case when tag is not found
        return;
      }
      res.json(dbTagData); // Send the updated tag data as JSON response
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Delete a tag by ID
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id, // Delete the tag with the provided ID parameter
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" }); // Handle case when tag is not found
        return;
      }
      res.json(dbTagData); // Send the deleted tag data as JSON response
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Handle errors with a 500 response
    });
});

module.exports = router; // Export the router for use in other parts of the application
