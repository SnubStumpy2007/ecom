const router = require('express').Router();
const { Category, Product } = require('../../models'); // Import Category and Product models

// GET all categories and their associated products
router.get('/', (req, res) => {
    // Find all categories along with their associated products using Sequelize's findAll method
    Category.findAll({  // This reads the whole Category table from the database https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-select-queries
        include: {
            model: Product, // Include the Product model
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] // Specify the attributes to include
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(404).json({ message: 'No categories found' }); // Handle case when no categories are found
            return;
        }
        res.json(dbCatData); // Send the retrieved data as JSON response
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); // Handle errors with a 500 response
    });
});

// GET a specific category by ID along with its associated products
router.get('/:id', (req, res) => {
    // Find a specific category by its ID along with associated products using Sequelize's findOne method
    Category.findOne({  // Same thing as findAll, but looking for a specific category
        where: {
            id: req.params.id
        },
        include: {
            model: Product, // Include the Product model
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] // Specify the attributes to include
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(404).json({ message: 'No categories found' }); // Handle case when no categories are found
            return;
        }
        res.json(dbCatData); // Send the retrieved data as JSON response
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Create a new category
router.post('/', (req, res) => {
    // Create a new category using Sequelize's create method
    Category.create({
        category_name: req.body.category_name // Get category_name from the request body
    })
    .then(dbCatData => res.json(dbCatData)) // Send the created category data as JSON response.  dbCatData stands for Database Category Data
    .catch(err => {
        console.log(err);
        res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Update a category by ID
router.put('/:id', (req, res) => {
    // Update a category by its ID using Sequelize's update method
    Category.update(req.body, {  // update querys.
        where: {
            id: req.params.id // Use the provided ID parameter to identify the category to update
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(404).json({ message: 'No category found with this id' }); // Handle case when category is not found
            return;
        }
        res.json(dbCatData); // Send the updated category data as JSON response
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); // Handle errors with a 500 response
    });
});

// Delete a category by ID
router.delete('/:id', (req, res) => {
    // Delete a category by its ID using Sequelize's destroy method
    Category.destroy({  // Delete queries where etc...
        where: {
            id: req.params.id // Use the provided ID parameter to identify the category to delete
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
            res.status(404).json({ message: 'No category found with that id.' }); // Handle case when category is not found
            return;
        }
        res.json(dbCatData); // Send the deleted category data as JSON response
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); // Handle errors with a 500 response
    });
});

module.exports = router;
