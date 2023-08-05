// let url = fetch('https://api.api-ninjas.com/v1/animals?name=' + 'cheetah')
// .then(function (res){
//     console.log(res);
//     return res.json()
// })
// .then(function (data){
//     console.log(data);
// })



document.getElementById('random').addEventListener('click' , ()=>{
    let url = 'https://dog.ceo/api/breeds/image/random';
    fetch (url)
    .then(function (res){
        console.log(res);
        return res.json();
    })
    .then(function (data){
        console.log(data);
        display_image(data.message)
    })
    .catch(function (e){
        console.log("Error" + e);
    })
})


function display_image(image_url){
    let img = document.getElementById('img');
    img.src = image_url;
    
}
