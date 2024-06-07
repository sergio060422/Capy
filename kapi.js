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
    let lk = "https://capybara-356k.onrender.com/rand";
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
}

function cfun(){
    let res = new XMLHttpRequest();
    let lk = "https://api.capy.lol/v1/fact";
    res.addEventListener("load", change_text);
    res.responseType = "json";
    res.open("GET", lk, true);
    res.send(null);
    
    
}

let ok = 1, dp = 1;

function cdir(){
    setInterval(function (){
        let elm = document.getElementById("d4");
        let sc = document.getElementById("sc");
        if(dp){
            dp = 0;
            elm.style.display = "block";
            let caf = document.getElementById("caf");
            caf.removeEventListener("click", cdir);
        }
        if(ok){
            sc.src = "Images/Supercapy-Right.png";
            elm.classList.add("moveR");
            elm.classList.remove("moveL");
            ok = 0;
        }
        else{
            sc.src = "Images/Supercapy-Left.png";
            elm.classList.add("moveL");
            elm.classList.remove("moveR");          
            ok = 1;
        }
    }, 3000);
    setInterval(cfun(), 10000);
    
    
}

function bdir(){
    let elm = document.getElementById("caf");
    elm.addEventListener("click", cdir);
}

window.addEventListener("load", bt);
window.addEventListener("load", bdir);




