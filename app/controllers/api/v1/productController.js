const { Products ,Product_assets,Categories} = require("../../../models");

module.exports = {
  async uploadProduct(req,res){
    try {
      const{
        category_id,
        name,
        slug,
        price,
        product_images,
      } = req.body

      const newProduct = await Products.create({
        category_id : category_id,
        name : name,
        slug : slug,
        price : price,
      })
      // const arrayAssets = product_images.split("--")
      // console.log(arrayAssets)
      product_images.map((asset)=> {
        return (
            Product_assets.create({
            product_id:newProduct.id,
            image : asset
          })
        )
      })
      return res.status(201).json("product berhasil diupload, silahkan jalankan get /get-all-products untuk melihat semua produk yang sudah dimasukkan")
    } catch (error) {
      res.status(422).json({msg: error.message, pesan : "product gagal diupload"})
    }
  },
  async getAllProducts (req,res) {
    try {
      const allProducts = await Products.findAll({
        include : [{model :Product_assets,as: 'asset',attributes: ["image"]},{model:Categories,as:'kategori',attributes: ["name"]}],
        attributes:{exclude : ['createdAt', 'updatedAt']},
        order:[
          ['price','ASC']
        ]
      })
      if(!allProducts){
        res.status(404).json("products not found")
      }
      return res.status(200).json(allProducts)
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  async getProductsById (req,res) {
    try {
      const id_product = req.params.id
      const Product = await Products.findOne({
        where : {id:id_product},
        include : ['asset','kategori'],
        attributes:{exclude : ['createdAt', 'updatedAt']}
      })
      if(!Product){
        res.status(404).json("products not found")
      }
      return res.status(200).json(Product)
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  async editProduct(req,res){
    try {
      const id_product = req.params.id
      const{
        category_id,
        name,
        slug,
        price,
      } = req.body

      const editedProduct = await Products.update({
        category_id : category_id,
        name : name,
        slug : slug,
        price : price,
      },{
        where : {id:id_product}
      })
      return res.status(201).json("product berhasil diedit chek get produk /id produknya")
    } catch (error) {
      res.status(422).json({msg: error.message, pesan : "product gagal diedit"})
    }
  },
  async deleteProduct(req,res){
    try {
      const id_product = req.params.id
      await Product_assets.destroy({
        where : {product_id : id_product}
      })
      await Products.destroy({
        where : {id : id_product}
      })
      res.status(200).json("berhasil dihapus")
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};
