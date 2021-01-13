const router = require('express').Router();
const { where } = require('sequelize/types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const catagories = await Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }
    ]
  });
  res.json(catagories);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const catagories = await Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }
    ]
  });
  res.json(catagories);
});

router.post('/', (req, res) => {
  // create a new category
  const category = await Category.create({
    category_name: req.body.category_name
  });
  res.json(category);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const category = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json(category);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
