module.exports = {
  async home(req, res) {
    res
      .status(200)
      .json({
        Judul: "Test Case Junior Back End Developer",
        Kegiatan: "Magang Bersertifikat ADS x Kampus Merdeka",
        Peserta: "Farhan Septiadi",
      });
  },
};
