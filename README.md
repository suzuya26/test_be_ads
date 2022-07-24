## Setelah pertama kali clone repos
`npm i`
## Mohon ganti database.js di folder config dengan username dan password postgresql masing masing 
## mulai server secara local
`yarn develop`

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir

## Lampiran jawaban soal Test Case Junior Back End Developer ADS X MBKM
dicobakan dengan postman
# 1.1 List semua kategori
Method : GET
EndPoint : http://localhost:8000/get-all-categories
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658655038/ads/image_2022-07-24_163036564_v49zfl.png)
# 1.2 List kategori dengan produk terbanyak
Method : GET
EndPoint : http://localhost:8000/get-most-categories
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656373/ads/image_2022-07-24_165251554_jn2ewd.png)
response lebih lengkap :
`
{
    "List Most catgories ": [
        {
            "id": 1,
            "name": "Elektronik",
            "count": "3"
        },
        {
            "id": 3,
            "name": "Fashion Wanita",
            "count": "0"
        },
        {
            "id": 5,
            "name": "Olahraga",
            "count": "1"
        },
        {
            "id": 4,
            "name": "Handphone & Tablet",
            "count": "1"
        },
        {
            "id": 2,
            "name": "Fashion Pria",
            "count": "1"
        }
    ]
}
`
# 1.3 & 1.4 List Produk beserta asset dan diurut dari harga termurah
Method : GET
EndPoint : http://localhost:8000/get-all-products
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656335/ads/image_2022-07-24_165213700_dhit03.png)
response lebih lengkap: 
`
[
    {
        "id": 2,
        "category_id": 1,
        "name": "Logitech H111 Headset Stereo Single Jack 3.5mm",
        "slug": "logitech-h111-headset-stereo-single-jack-3-5mm",
        "price": 80000,
        "asset": [
            {
                "image": "logitech-h111.png"
            },
            {
                "image": "logitech-h111-headset-stereo-single-jack-3-5mm.png"
            }
        ],
        "kategori": {
            "name": "Elektronik"
        }
    },
    {
        "id": 1,
        "category_id": 1,
        "name": "Logitech H111 Headset Stereo Single Jack 3.5mm",
        "slug": "logitech-h111-headset-stereo-single-jack-3-5mm",
        "price": 80000,
        "asset": [],
        "kategori": {
            "name": "Elektronik"
        }
    },
    {
        "id": 5,
        "category_id": 5,
        "name": "Papan alat bantu Push Up Rack Board Fitness Workout Gym ",
        "slug": "papan-alat-bantu-push-up-rack-board-fitness-workout-gym ",
        "price": 90000,
        "asset": [
            {
                "image": "papan-alat-bantu-push-up.png"
            }
        ],
        "kategori": {
            "name": "Olahraga"
        }
    },
    {
        "id": 3,
        "category_id": 1,
        "name": "Philips Rice Cooker - Inner Pot 2L Bakuhanseki - HD3110/33 ",
        "slug": "philips-rice-cooker -inner-pot-2l-bakuhanseki-hd3110-33 ",
        "price": 249000,
        "asset": [
            {
                "image": "philips.png"
            },
            {
                "image": "philips-rice-cooker.png "
            },
            {
                "image": "philips-rice-cooker-inner-pot-2l-bakuhanseki-hd3110-33.png"
            }
        ],
        "kategori": {
            "name": "Elektronik"
        }
    },
    {
        "id": 6,
        "category_id": 2,
        "name": "Jim Joker - Sandal Slide Kulit Pria Bold 2S Hitam - Hitam",
        "slug": "jim-joker-sandal-slide-kulit-pria-bold-2s-hitam-hitam",
        "price": 305000,
        "asset": [
            {
                "image": "jim-joker-sandal-slide-kulit-pria-bold-2s-hitam-hitam.png"
            }
        ],
        "kategori": {
            "name": "Fashion Pria"
        }
    },
    {
        "id": 4,
        "category_id": 4,
        "name": "Iphone 12 64Gb/128Gb/256Gb Garansi Resmi IBOX/TAM - Hitam, 64Gb",
        "slug": "iphone-12-64gb-128gb-256gb-garansi-resmi-ibox-tam-hitam-64gb",
        "price": 11340000,
        "asset": [
            {
                "image": "iphone-12-64gb-128gb-256gb.png"
            }
        ],
        "kategori": {
            "name": "Handphone & Tablet"
        }
    }
]
`

# 2 Menambahkan Produk beserta upload multipe image ke tablle product_asset
Method : POST
EndPoint : http://localhost:8000/upload-product
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658655856/ads/image_2022-07-24_164414414_hlq3ok.png)
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658655971/ads/image_2022-07-24_164609385_nrngqo.png)
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656065/ads/image_2022-07-24_164743134_sm16ci.png)

# 3 Mengedit Produk yang sudah diupload
Method : POST
EndPoint : http://localhost:8000/edit-product/:id
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656723/ads/image_2022-07-24_165840341_hvum3a.png)
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656689/ads/image_2022-07-24_165807603_ghbqip.png)

chek produk by id :
Method : GET
EndPoint : http://localhost:8000/get-product/:id
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656723/ads/image_2022-07-24_165840341_hvum3a.png)

# 4 Menghapus Produk beserta asset yang terkait
Method : DELETE
EndPoint : http://localhost:8000/delete-product/:id
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656947/ads/image_2022-07-24_170224709_tklefk.png)
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658656987/ads/image_2022-07-24_170305522_k1s7il.png)

# 5 Menambah Asset Baru untuk suatu produk
Method : POST
EndPoint : http://localhost:8000/add-asset/:idproduct
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658657252/ads/image_2022-07-24_170730362_kqys3z.png)
kalau produk nya tidak ada :
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658657318/ads/image_2022-07-24_170836270_weaksf.png)

# 6 Menghapus Asset suatu produk
Method : DELETE
EndPoint : http://localhost:8000/delete-asset/:idasset
![image](https://res.cloudinary.com/drakr4vtu/image/upload/v1658657410/ads/image_2022-07-24_171008539_kpor6w.png)
