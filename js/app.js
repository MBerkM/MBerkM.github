var onScreenTime = 3000;
function getFetchData(){
    //debugger;
    fetch('https://yesno.wtf/api')
        .then(result => result.json())
        .then(data => {
            changeSceneToResult(data.image,data.answer);
            console.log("data", data);
        })
}
//İlk kullanıldığında hata verdiği için arkadan fonksiyonu bir defa çağırıyoruz
//Sonuç sayfanın fonksiyonu
function changeSceneToResult(image, answer){
    document.getElementById("main-header").style.visibility = "hidden";
    document.getElementById("main-input").style.visibility = "hidden";
    document.getElementById("result-header").style.visibility = "visible";
    document.getElementById("result-header").innerHTML = answer;
    document.body.style.backgroundImage = `url(${image})`;
    setTimeout(() => {  changeBackToQuestion(); }, onScreenTime);
}
//Soru sayfasına dönüş fonksiyonu
function changeBackToQuestion(){
    document.getElementById("main-header").style.visibility = "visible";
    document.getElementById("main-input").style.visibility = "visible";
    document.getElementById("result-header").style.visibility = "hidden";
    document.getElementById("main-input").value = "";
    document.body.style.backgroundImage = "url(https://media.tenor.com/5sglUOGwcfYAAAAC/batman-thinking.gif)";
}    
//? tuşuna basılma
const input = document.addEventListener('keydown', (e) => {
    if (e.key == "?"){
        //debugger;
        console.log("question mark");
        getFetchData();
    }
})


    /*
    document.getElementById("main-header").style.visibility = "hidden";
    document.getElementById("main-input").style.visibility = "hidden";
    document.getElementById("main-input").style.visibility = "hidden";
    document.getElementById("result-header").style.visibility = "visible"; 
    */


    //document.body.style.backgroundImage = "url(" + data.image + ")";
    //document.getElementById("result-header").innerHTML = data.answer;

    //bu çalışıyor:
    /*
    let cevap = null;
    et foto = null;
    fetch('https://yesno.wtf/api')
    .then(result => result.json())
    .then(data => {
        console.log("data",data);
        cevap = data.answer;
        foto = data.image;
    })
    

    */