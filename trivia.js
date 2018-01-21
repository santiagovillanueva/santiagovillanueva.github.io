var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        
        score++
document.searchImage.src = "images/Correct.png"
    }
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        
         score++
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
        
    
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
        
    
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    
document.searchImage.src = "images/Correct.png"
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
}
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Correct.png"
    }
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
    }
    document.view.qscore.value=score
}
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="What does VGC stand for? \na)Video Game Contest \nb)Video Game Championship \nc)Video Game Competition \nd)Video Game Challenge";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was VGC 2016s Pokemon World Champion? \na)Ryota Otsubo \nb)Aaron Zheng \nc)Wolfe Glick \nd)James Baek";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which VGC Pokemon does not apply fake out pressure? \na)Togedemaru \nb)Gothitelle \nc)Incineroar \nd)Ludicolo";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is a spread move? \na)Dazzling Gleam \nb)High Horsepower \nc)Overheat \nd)Hydro Pump";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which Mega evolved Pokemon gains the ability Huge Power? \na)Swampert \nb)Metagross \nc)Mawile \nd)Tyranitar";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="During a sandstorm, weather conditions boost the _____ stat of rock type Pokemon. \na)Attack \nb)Defence \nc)Special Attack \nd)Special Defence";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="From the 6 Pokemon of a team, how many can be brought per match? \na)3 \nb)4 \nc)5 \nd)6";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which VGC Championship introduced the Tapus? \na)VGC 2015 \nb)VGC 2016 \nc)VGC 2017 \nd)VGC 2018";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following moves has no priority? \na)Rapid Spin \nb)Extreme Speed \nc)Mach Punch \nd)Aqua Jet";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following Pokemon get access to Trick Room? \na)Amoonguss \nb)Camerupt \nc)Musharna \nd)Stakataka";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")

}
	i++; 
}
