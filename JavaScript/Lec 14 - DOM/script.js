// console.log("////////////",images)

// console.log(images[0])
// console.dir(images[0])

// console.log(images[0].src)
// images[0].src = 'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg'


// const images = document.getElementsByTagName("img")
// let imageUrls = [
//     "https://st4.depositphotos.com/13503176/40939/i/450/depositphotos_409390682-stock-photo-silhouette-ancient-syzygium-cumini-tree.jpg",
//     "https://tse2.mm.bing.net/th/id/OIP.zfTMZmfHEiTEOM8ja1OxcwHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
//     "https://tse1.mm.bing.net/th/id/OIP.nKtcVM_xTugg39jYRAKSXAHaEJ?r=0&w=626&h=351&rs=1&pid=ImgDetMain&o=7&rm=3"
// ]
// // for(let i=0; i<images.length; i++){
// //     images[i].src= imageUrls[i]
// // }

// imageUrls.forEach((url, index) => {
//   images[index].src = url;
// });

// const imagesByClassName = document.getElementsByClassName('css-images')
// console.log("///////////", imagesByClassName)

// const firstImageById = document.getElementById('first-image')
// console.log("---------", firstImageById)
// console.dir(firstImageById)

const image = document.querySelector("#first-image")
console.log(image)

const pic = document.querySelectorAll(".css-images")
console.log("Images", pic)
console.log("2nd image", pic[1])