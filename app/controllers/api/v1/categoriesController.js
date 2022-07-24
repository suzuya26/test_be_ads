const Sequelize = require("sequelize");
const { Products, Categories } = require("../../../models");
module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await Categories.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json({ "List all catgories ": categories });
      if (!categories) {
        res.status(404).json("products not found");
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  async getMostCategories(req, res) {
    try {
      const categories = await Categories.findAll({
        attributes: {
          include: [
            [
              Sequelize.fn("COUNT", Sequelize.col("produknya.category_id")),
              "count",
            ],
          ],
          exclude: ["createdAt", "updatedAt"],
        },
        include: [{ model: Products, as: "produknya", attributes: [] }],
        group: ["Categories.id"],
        order: [["count", "DESC"]],
      });
      res.status(200).json({ "List Most catgories ": categories });
      if (!categories) {
        res.status(404).json("products not found");
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
