const express = require('express');
const app = express();

const product = [
    {
        "id":"flowerkey",
        "name":"Aesthetic keychains",
        "company":"keys",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the customized key chain , most preferred key chain by the  customer , it gives sheik ,  and classy look . most hot selling product.",
        "category":"keychain",
        "shipping":true,
        "featured":true
     },
     {
        "id":"leafkey",
        "name":"Floral keychain",
        "company":"keys",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the customized key chain , most preferred key chain by the  customer , it gives sheik ,  and classy look . most hot selling product.",
        "category":"keychain",
        "shipping":true
     },
     {
        "id":"letterkey",
        "name":"Initial keychain",
        "company":"keys",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" these are made up of pressed flowers which are not artificial but looks vibrant in keychains , the demand of the customized pressed flower chain rose our profits",
        "category":"keychain",
        "shipping":true
     },
     {
        "id":"pinkkey",
        "name":"Pink Heart keychain",
        "company":"keys",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" Looking for something minimal and cute? SeeThru got you! Pink heart keychains",
        "category":"keychain",
        "shipping":true
     },
     {
        "id":"namekey",
        "name":"Name keychain",
        "company":"keys",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" Looking for something minimal and cute? SeeThru got you! Pink heart keychains",
        "category":"keychain",
        "shipping":true
     },
     {
        "id":"bluepen",
        "name":"Cool stud pendant!!",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" this firmly called as a cool stud pendant according to the customer we’ve made a vibrant pendant with tincture of brown colour can be worn by all ",
        "category":"pendant",
        "shipping":true
     },
     {
        "id":"ovalpen",
        "name":"Flora Dora",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"pendant",
        "shipping":true,
        "featured":true
     },
     {
        "id":"leafpen",
        "name":"Leaf Pendant",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"pendant",
        "shipping":true
     },
     {
        "id":"ovalpen",
        "name":"Oval Pendant",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"pendant",
        "shipping":true
     },
     {
        "id":"petalpen",
        "name":"Petal Pendant",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"pendant",
        "shipping":true
     },
     {
        "id":"ringpen",
        "name":"Ring Pendant",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"pendant",
        "shipping":true
     },
     {
        "id":"yellowpen",
        "name":"Yellow Pendant",
        "company":"pendants",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"pendant",
        "shipping":true
     },
     {
        "id":"transmug",
        "name":"Transparent Mug Coaster",
        "company":"Coasters",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"coasters",
        "shipping":true,
        "featured":true
     },
     {
        "id":"colormug",
        "name":"Colorful Mug Coaster",
        "company":"Coasters",
        "price":15000,
        "colors":[
        ],
        "image":"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":" the flora dora , the minimal looking pendant consist of a single bud of flower , gives smooth and soft vibe  ",
        "category":"coasters",
        "shipping":true
     }
   

];

app.get('/products',(req,res)=>{
    res.send(product);
})



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening to port ${port}...`)
})
