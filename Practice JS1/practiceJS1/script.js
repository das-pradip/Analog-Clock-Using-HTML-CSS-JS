// 4 pillars of DOM

// 1.Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listner

let v =  document.getElementById("hello");

v.innerHTML = "<h1>Great</h1>"
v.style.color = "purple"
v.style.backgroundColor = "cyan";


var flag = 0;

    v.addEventListener("click",function(){
        if(flag == 0){
        v.innerHTML = "cute"
        v.style.color = "pink"
        v.style.backgroundColor = "green"
        flag = 1
        }
        else{
            v.innerHTML = "Great"
            v.style.color = "purple"
            v.style.backgroundColor = "cyan";
            flag = 0 
        }
     })

let p = document.querySelectorAll("p");
p.forEach(function(e){
    console.log(e) 
})