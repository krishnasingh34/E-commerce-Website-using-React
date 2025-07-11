import p1_img from '../assets/kurti.webp'
import p2_img from '../assets/men1.webp'
import p3_img from '../assets/saree.avif'
import p4_img from '../assets/men2.jpg'
import p5_img from '../assets/men3.webp'
import p6_img from '../assets/women3.jpg'
import p7_img from '../assets/men4.jfif'
import p8_img from '../assets/women4.webp'
import p9_img from '../assets/men5.webp'
import p10_img from '../assets/women5.webp'
import p11_img from '../assets/men6.webp'
import p12_img from '../assets/women6.webp'
import p13_img from '../assets/men7.jfif'
import p14_img from '../assets/jacket.webp'
import p15_img from '../assets/men8.jpg'
import p16_img from '../assets/women8.jfif'
import p36_img from '../assets/2.webp'
import p37_img from '../assets/3.jfif'
import p38_img from '../assets/4.avif'
import p39_img from '../assets/5.avif'
import p40_img from '../assets/6.webp'
import p41_img from '../assets/7.jpg'
import p42_img from '../assets/8.avif'
import p43_img from '../assets/1.avif'
import p21_img from '../assets/kid1.jpg'
import p23_img from '../assets/kid2.jfif'
import p25_img from '../assets/kid3.jfif'
import p27_img from '../assets/kid4.webp'
import p29_img from '../assets/kid5.jfif'
import p31_img from '../assets/kid6.jfif'
import p33_img from '../assets/kid7.webp'
import p35_img from '../assets/kid8.jfif'
import p45_img from '../assets/kurta-pyjama.webp'
import p46_img from '../assets/shirt.webp'
import p47_img from '../assets/hoodie.webp'
import p48_img from '../assets/sweatshirt.webp'

let all_product = [
    { id: 2, name: "Casual Shirt", category: "Men", image: p2_img, new_price: 60.0, old_price: 90.5 },
    { id: 4, name: "Casual Shirt", category: "Men", image: p4_img, new_price: 90.0, old_price: 140.0 },
    { id: 5, name: "T-Shirt", category: "Men", image: p5_img, new_price: 45.0, old_price: 70.0 },
    { id: 7, name: "Trouser", category: "Men", image: p7_img, new_price: 95.0, old_price: 150.0 },
    { id: 9, name: "Vest Jacket", category: "Men", image: p9_img, new_price: 70.0, old_price: 110.0 },
    { id: 11, name: "Blazer", category: "Men", image: p11_img, new_price: 92.0, old_price: 145.0 },
    { id: 13, name: "Sweater", category: "Men", image: p13_img, new_price: 40.0, old_price: 65.0 },
    { id: 15, name: "T-Shirt", category: "Men", image: p15_img, new_price: 78.0, old_price: 115.0 },
    { id: 37, name: "Hoodie", category: "Men", image: p37_img, new_price: 85.0, old_price: 130.0 },
    { id: 39, name: "Shirt", category: "Men", image: p39_img, new_price: 55.0, old_price: 100.0 },
    { id: 41, name: "Sweater", category: "Men", image: p41_img, new_price: 88.0, old_price: 135.0 },
    { id: 43, name: "T-Shirt", category: "Men", image: p43_img, new_price: 99.0, old_price: 160.0 },

    { id: 1, name: "Kurti", category: "Women", image: p1_img, new_price: 50.0, old_price: 80.5 },
    { id: 3, name: "Saree", category: "Women", image: p3_img, new_price: 75.0, old_price: 120.0 },
    { id: 6, name: "Dress", category: "Women", image: p6_img, new_price: 85.0, old_price: 130.0 },
    { id: 8, name: "Leggings", category: "Women", image: p8_img, new_price: 55.0, old_price: 100.0 },
    { id: 10, name: "Jumpsuit", category: "Women", image: p10_img, new_price: 88.0, old_price: 135.0 },
    { id: 12, name: "Gown", category: "Women", image: p12_img, new_price: 99.0, old_price: 160.0 },
    { id: 14, name: "Denim Jacket", category: "Women", image: p14_img, new_price: 90.0, old_price: 140.0 },
    { id: 16, name: "Skirt", category: "Women", image: p16_img, new_price: 73.0, old_price: 110.0 },
    { id: 36, name: "Gown", category: "Women", image: p36_img, new_price: 45.0, old_price: 70.0 },
    { id: 38, name: "Leggings", category: "Women", image: p38_img, new_price: 95.0, old_price: 150.0 },
    { id: 40, name: "Jumpsuit", category: "Women", image: p40_img, new_price: 70.0, old_price: 110.0 },
    { id: 42, name: "Dress", category: "Women", image: p42_img, new_price: 92.0, old_price: 145.0 },

    { id: 21, name: "Denim Shirt", category: "Kids", image: p21_img, new_price: 85.0, old_price: 140.0 },
    { id: 23, name: "Cargo Pants", category: "Kids", image: p23_img, new_price: 88.0, old_price: 130.0 },
    { id: 25, name: "Trousers", category: "Kids", image: p25_img, new_price: 76.0, old_price: 120.0 },
    { id: 27, name: "Tank Top", category: "Kids", image: p27_img, new_price: 49.0, old_price: 80.0 },
    { id: 29, name: "Formal Pants", category: "Kids", image: p29_img, new_price: 98.0, old_price: 160.0 },
    { id: 31, name: "Leather Jacket", category: "Kids", image: p31_img, new_price: 150.0, old_price: 250.0 },
    { id: 33, name: "Gym Shorts", category: "Kids", image: p33_img, new_price: 55.0, old_price: 90.0 },
    { id: 35, name: "Casual Blazer", category: "Kids", image: p35_img, new_price: 105.0, old_price: 170.0 },
    { id: 48, name: "Sweatshirt", category: "Kids", image: p48_img, new_price: 70.0, old_price: 100.0 },
    { id: 45, name: "Kurta Pyjama", category: "Kids", image: p45_img, new_price: 110.0, old_price: 200.0 },
    { id: 47, name: "Hoodie", category: "Kids", image: p47_img, new_price: 55.0, old_price: 80.0 },
    { id: 46, name: "Shirt", category: "Kids", image: p46_img, new_price: 120.0, old_price: 200.0 }
]

export default all_product;