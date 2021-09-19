
//page professional
var prof_page = document.getElementById("professional");
//page personal
var per_page = document.getElementById("professional");

//tab(heading,data,id)
function tab(head,ob,id){
    var tab = document.getElementById(id);
    var html_data = "<h2>"+head+"</h2>"+"<p id='content'>"+ob+"</p>";
    tab.innerHTML = html_data;
}
function objectiveTab(){
    var ob = "I am an passionate self driven person who like to explore technology.";
    var ob2 = "I like to get involved in projects and help people out with motivation and ideas from my part.";
    tab("Objective","<i>"+ob+ob2+"</i>","objective");
}
function cen(block){
    return "<div class='center'>"+block+"</div>"
}
function just(block){
    return "<div class='jestified'>"+block+"</div>"
}
function left(block){
    return "<div class='left'>"+block+"</div>"
}
function right(block){
    return "<div class='right'>"+block+"</div>"
}
function head2(block){
    return "<h2>"+block+"</h2>";
}
function head3(block){
    return "<h3>"+block+"</h3>";
}
function item(block){
    return "<li>"+block+"</li>";
}
function educationTab(){
    var headings = ["Bachelor's Degree","Higher secondary schooling","Primary schooling"];
    var schools = [
        "Sri Eshwar college of Engineering<br>(2018-2022)<br>Score - 7.3 CGPA",
        "Dr.V.G.N.Mat.Hr.Sec.School<br>(2015-2018)<br>Score - 73.5%",
        "N.M.C.Mat.Hr.Sec.School<br>(2015)<br>Score - 85.6%",
    ]
    var block ="";
    for(let i = 0; i<headings.length ; i++){
        var temp = "<h3>"+cen(headings[i])+"</h3>";
        var temp2 = cen(schools[i]);
        block += item(temp+temp2);
    }
    
    tab("Education","<ul>"+block+"</ul>","education");
}
function contactTab(){
    var contact = [
        "ganeshsivakumar13042000@gmail.com",
        "91-9629323015",
        "118,Ramachandra Nagar, Fort Nagar West, Othakkalmandapam, Coimbatore - 641032"
    ]
    var block = "";
    var icons = [
        "icons/1.png",
        "icons/2.png",
        "icons/3.png",
    ]
    for(let i = 0; i<contact.length ; i++){
        var temp = "<div><img class='icon' src='"+icons[i]+"'>"+contact[i]+"</div>";
        block += item(temp)+"<br>";
    }
    tab("Contact","<ul>"+block+"</ul>","contact");
}

function personal(){
    na = "GANESH K S"
    document.getElementById("name").innerHTML = cen(na);
    objectiveTab();
    educationTab();
    contactTab();
}

function project(){
    var heading = cen("<h2>Project</h2>");
    var topics = [
        "enhanced ar",
        "implementation of iot for vehicle payload monitering"
    ]
    var one = [
        "I made an realtime interactive AR with Physcics based Rendering.",
        "This provides reflections and postprocessing effect like RIM.",
        "It is made possible with an simple device with 360-degree camera.",
        "The device capture ambient lighting and provide reflections.",
    ];
    var two =[
        "We used load cell to measureelectric vehicle payload.",
        "This data is send to the AWS cloud via Wi-fi",
        "This enables engineers to check loading and battery warenty.",
        "This is also constantly monitered and displayed on vehicle dashboard.",
        "In case of overloading an notification is sent to the user's mobile.",

    ];
    var desc = [one,two];
    var block = "";
    for(let i = 0; i< topics.length; i++){
        block += cen(head3(topics[i]));
        block += "<ul>";
        var temp = desc[i];
        for(let j= 0; j < temp.length; j++){
            block += item(just("<div class = 'dot'></div>"+temp[j]));
        }
        block += "</ul>";
        block += "<br>";
    }
    //tab(heading,data,id)
    tab(heading,block,"project");
}
function ciricular(){
    var heading = cen("<h2>Extra-ciricular Activities</h2>");
    var topics = [
        "mentoring",
        "class representatrive",
        "project coordinator"
    ]
    var one = [
        "I did mentoring for juniors and seniors for two years.",
        "During the perion, I learnt how to handle different minded people and help them overcome stage fear.",
    ];
    var two = [
        "I was the class representative during the first year of my college.",
        "Responsiblities ment a lot during the time.",
    ];
    var three = [
        "I volenteered myself as the project coordinator on my first yeat project(Enhanced AR).",
        "It was totally new, but I managed to get things up and running.",
    ];
    
    var desc = [one,two,three];
    var block = "";
    for(let i = 0; i< topics.length; i++){
        block += left(head3(topics[i]));
        var temp = desc[i];
        for(let j= 0; j < temp.length; j++){
            block += just(temp[j]);
        }
        //block += "<br>";
    }
    tab(heading,block,"ciricular");

}
function certifiaction(){
    var heading = cen("<h2>Achivements and Certifiaction</h2>");
    var topics = [
        "robotics camp",
        "project expo",
    ]
    var one = [
        "Attended robatics camp conducted by Akshaya college during my school holidays.",
        "We learnt the fundamentals and alse buid an robatic arm as a team.",
    ];
    var two = [
        "Our team won first place in college level project expo for the project Fluid mechanics kit.",
        "currently persueing a NPTEL cource on robotics.",
    ];

    var desc = [one,two];
    var block = "";
    for(let i = 0; i< topics.length; i++){
        block += left(head3(topics[i]));
        var temp = desc[i];
        for(let j= 0; j < temp.length; j++){
            block += just(temp[j]);
        }
        //block += "<br>";
        
    }
    tab(heading,block,"certifiaction");
}
//next update
function softwere(){
    var heading = cen("<h2>softwere Exposure</h2>");
    var topics = [
        "parametric modeling",
        "concept modelling",
        "analysis",
        "office package",
        "programming languages",
    ]
    var assets = [
        "assets/mech.jpg",
        "assets/blender.jpg",
        "assets/ansys.jpg",
        "assets/office.jpg",
        "assets/cs.jpg",
    ]
    var block = "";
    for(let i = 0; i< topics.length; i++){
        block += "<div>"
        block += "<img class='assets' src = '"+assets[i]+"'>";
        block += left(head3(topics[i]));
        block += "</div>"
    }
    tab(heading,block,"softwere");
}



function professional(){
    project();
    ciricular();
    certifiaction();
    softwere();
}


personal();
professional();

function sty(){
    var width = window.innerWidth;
    //tab
    if(width<1352 && width>650){
        document.getElementById("personal").style ="width: 70%;margin-left: 15%;";
        document.getElementById("professional").style ="margin-left: calc(15%);background-color:greeen";
        
    }
    //phone
    else if(width<650 ){
        document.getElementById("personal").style ="width: 90%;margin-left: 5%";
        document.getElementById("professional").style ="width: 90%;margin-left: calc(5%);background-color:greeen";
        
    }
    //pc
    else{
        var hei = document.getElementById("professional").clientHeight;
        document.getElementById("personal").style =" height:"+hei+"px;";
        document.getElementById("professional").style ="";
    }
}

function pr(){
    var width = window.innerWidth;
    document.getElementById("name").innerHTML = cen(width);
}
sty();
window.onresize = sty;

//window.onresize = pr;
window.addEventListener("resize",sty);
