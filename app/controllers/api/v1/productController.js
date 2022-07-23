const { Products } = require("../../../models");
const cloudinary = require("../../../../config/cloudinary");

module.exports = {
  async uploadAssets(req, res) {
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
        console.log(result);
        console.log(result.url);
        res.status(201).json({
          message: "Upload image berhasil",
          url: result.url,
          namafile: namaFile,
        });
      }
    );
  },
  async deleteAssets(req, res) {
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
};
