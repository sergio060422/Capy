let lst = ["Images/capy%20(6).jpeg"];
let p = 0, sz = 1;

function bt(){
    let bl = document.getElementById("bl");
    let br = document.getElementById("br");
    let bd = document.getElementById("dw");
    bl.addEventListener("click", btl);
    bl.addEventListener("mousedown", opa)
    bl.addEventListener("mouseup", nopa);
    br.addEventListener("click", btr);
    br.addEventListener("mousedown", opa)
    br.addEventListener("mouseup", nopa);
    bd.addEventListener("mousedown", opa)
    bd.addEventListener("mouseup", nopa);

}

function opa(e) {
    let bt = e.target;
    bt.style.opacity = 0.5;  
}

function nopa(e) {
    let bt = e.target;
    bt.style.opacity = 1;  
}

function btl(e){
    if(p > 0){
        p--;
        let ig = document.getElementById("ig");
        ig.src = lst[p];
        let dw = document.getElementById("dw");
        dw.href = lst[p];
    }
}

function btr(e){
    if(p == sz - 1){
        p++;
        sz++;
        req();
    }
    else{
        p++;
        let ig = document.getElementById("ig");
        ig.src = lst[p];
        let dw = document.getElementById("dw");
        dw.href = lst[p];
    }
    
}

function req(){
    let lk = "https://api.capy.lol/v1/capybara";
    let res = new XMLHttpRequest();
    res.addEventListener("load", show);
    res.responseType = "blob";
    res.open("GET", lk, true);
    res.send(null);
}

function show(ev){
    let dt = ev.target;
    
    if(dt.status == 200){
        let lk = URL.createObjectURL(dt.response);
        let ig = document.getElementById("ig");
        ig.src = lk;
        lst.push(lk);
        let dw = document.getElementById("dw");
        dw.href = lst[p];
    }
}

let XD = 1;

function change_text(e){
    let dt = e.target;
    let elm = document.getElementById("d4");
    
    if(dt.status == 200){
        let ans = dt.response["data"]["fact"];
        let tx = document.getElementById("pp");
        
        tx.textContent = ans;
    }
    if(XD){
        elm.classList.add("anima1");
        elm.classList.remove("anima2");
        document.getElementById("sc").src = "Images/Supercapy-Left.png";
        XD = 0;
    }
    else{
        elm.classList.add("anima2");
        elm.classList.remove("anima1");
        document.getElementById("sc").src = "Images/Supercapy-Right.png";
        XD = 1;
    }
}

function cfun(){
    let res = new XMLHttpRequest();
    let lk = "https://api.capy.lol/v1/fact";
    res.addEventListener("load", change_text);
    res.responseType = "json";
    res.open("GET", lk, true);
    res.send(null);
    
    
}

function cf(){
    let elm = document.getElementById("bd");
    elm.addEventListener("click", cfun);
}

window.addEventListener("load", bt);
window.addEventListener("load", cf);




