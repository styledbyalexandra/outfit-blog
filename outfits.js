//LISTA OUTFITURI
const outfits = [

{
image:"outfits/outfit1.jpg",
page:"outfit.html?id=1"
},

{
image:"outfits/outfit2.jpg",
page:"outfit.html?id=2"
},

{
image:"outfits/outfit3.jpg",
page:"outfit.html?id=3"
}

]

//GRID HOMEPAGE
const grid = document.getElementById("grid")

outfits.forEach(outfit => {

grid.innerHTML += `
<div class="card">

<a href="${outfit.page}">
<img src="${outfit.image}">
</a>

</div>
`

})


//PRODUCT OBJECT

const products = {

1: [
{
img:"products/top1.jpg",
link:"https://amzn.to/xxxxx"
},
{
img:"products/leggings1.jpg",
link:"https://amzn.to/xxxxx"
},
{
img:"products/shoes1.jpg",
link:"https://amzn.to/xxxxx"
},
{
img:"products/bag1.jpg",
link:"https://amzn.to/xxxxx"
},
{
img:"products/watch1.jpg",
link:"https://amzn.to/xxxxx"
}
],

2: [
{
img:"products/top2.jpg",
link:"https://amzn.to/xxxxx"
},
{
img:"products/pants2.jpg",
link:"https://amzn.to/xxxxx"
}
]

}



//SCRIPTUL CARE SCHIMBA PAGINA 
const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const outfit = outfits.find(o => o.page.includes("id=" + id))

if(outfit){
document.getElementById("outfit-image").src = outfit.image
}

const outfitProducts = products[id]

if(outfitProducts){

for(let i=0;i<outfitProducts.length;i++){

document.getElementById("img"+(i+1)).src = outfitProducts[i].img
document.getElementById("p"+(i+1)).href = outfitProducts[i].link

}

}