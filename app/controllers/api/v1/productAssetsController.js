const { Products ,Product_assets} = require("../../../models");
const cloudinary = require("../../../../config/cloudinary");
const { image } = require("../../../../config/cloudinary");

module.exports = {
  //upload asset ke cloud
  async uploadAssetCloud(req, res) {
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    const tanggal = Date.now();
    const namaFile = "Product Assets " + tanggal;

    cloudinary.uploader.upload(
      file,
      { public_id: "ads/" + namaFile },
      function (err, result) {
        if (!!err) {
          console.log(err);
          return res.status(400).json({
            message: "Gagal upload file!",
          });
        }
        console.log(namaFile);
        console.log(result.url);
        res.status(201).json({
          message: "Upload image berhasil",
          url: result.url,
          namafile: namaFile,
        });
      }
    );
  },
  //delete asset di cloud, public id itu nama file di cloudnya,
  // kalau mau mencoba mohon di copy paste "namafile" dlu hasil respon upload gambarnya
  async deleteAssetCloud(req, res) {
    const nameasset = "ads/"+req.body.public_id;
    cloudinary.uploader.destroy(nameasset, function (error, result) {
      if (!!error) {
        return res.status(400).json({
          message: "Gagal hapus file!",
        });
      }
      res.status(200).json({
        message: "Hapus Image berhasil",
        status: result
      });
    });
  },
  async addAsset(req,res){
    try {
      const id_product = req.params.idproduct
      const cekProduct = await Products.findOne({
        where : {id:id_product}
      })
      if(!cekProduct){
        return res.status(404).json("tidak ditemukan produk terkait")
      }
      const newAssets = await Product_assets.create({
        product_id : id_product,
        image: req.body.image
      })
      return res.status(201).json({"berhasil nambah asset baru ": newAssets})
    } catch (error) {
      res.status(422).json({msg: error.message, pesan : "asset baru gagal ditambah"})
    }
  },
  async removeAsset(req,res){
    try {
      const id_asset = req.params.idasset 
      await Product_assets.destroy({
        where : {id : id_asset}
      })
      res.status(200).json("berhasil hapus asset")
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};
