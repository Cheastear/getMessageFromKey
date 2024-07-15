const main = document.querySelector(".main");

const array = [
    {
        key: "3245",
        value: "hellow, world"
    }
];

window.addEventListener("load", (e) => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    const value = array.find((elem)=> elem.key == key)?.value;
    
    main.innerHTML = value;
})