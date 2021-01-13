const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    attributes: ["id", "product_name", "price", "stock", "category_id"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  });
  res.json(tags);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  });
  res.json(tag);
});

router.post("/", async (req, res) => {
  // create a new tag
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
