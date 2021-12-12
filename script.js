document.querySelector("button").addEventListener("click",function(){
    fetch("https://randomfox.ca/floof/")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        myimg.src=data["image"];
    });
});