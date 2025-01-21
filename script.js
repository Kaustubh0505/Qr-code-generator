function getvalue(){
    let a = document.getElementById("input").value;
    return a
}

const img=document.getElementById("img")

function generateqr(){
    let g = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${getvalue()}`

    img.src=g
}
