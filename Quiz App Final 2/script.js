const questionText=document.querySelector(".question-text");
const optionBox=document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num");
const answerDescription=document.querySelector(".answer-description");
const nextQuestionBtn=document.querySelector(".next-question-btn");
const correctAnswers=document.querySelector(".correct-answer");
const seeResultBtn=document.querySelector(".see-result-btn");
const remainingTime=document.querySelector(".remaining-time");
const timeUpText=document.querySelector(".time-up-text");
const quizHomeBox=document.querySelector(".quiz-home-box");
const quizBox=document.querySelector(".quiz-box");
const quizOverBox=document.querySelector(".quiz-over-box");
const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
const goHomeBtn=document.querySelector(".go-home-btn");
const categoryBox=document.querySelector(".category-box");
const categoryText=document.querySelector(".category-text");
const startQuizBtn=document.querySelector(".start-quiz-btn");
let totaltime=0;
let attempt=0;
let questionIndex=0;
let score=0;
let number=0;
let myArray=[];
let interval;
let categoryIndex;
    
myApp=[
{
     category:"Pipes and Cisterns",
     quizWrap:[ 
    {
    question:'Two pipes A & B can fill the tank in 12 hours and 36 hours respectively. If both the pipes are opened simultaneously, how much time will be required to fill the tank?',
    options:['6 hours', '9 hours','12 hours','15 hours',],
    answer:3,
    description:"You Can Add Some Description"
   },
   {
    question:'Two pipes can fill a tank in 6 hours and 8 hours respectively while a third pipe empties the full tank in 12 hours. If all the three pipes operate simultaneously, in how much time will the tank be filled?',
    options:['7(1/2) hrs',' 4(4/5) hrs',' 3 (2/7) hrs ','1(1/5) hrs'],
    answer:3
   },
   {
    question:'Two pipes can fill a tank in 10 and 14 minutes respectively and a waste pipe can empty 4 gallons per minute. If all the pipes working together can fill the tank in 6 minutes, what is the capacity of the tank?',
    options:[' 120 gallons','240 gallons',' 450 gallons','840 gallons'],
    answer:4
   },
   {
    question:'An electric pump can fill a tank in 4 hours. Due to leakage in the tank, it took 4(1/2) hrs to fill the tank. If the tank is full, how much time will the leak take to empty the full tank?',
    options:[' 8 hrs ','16 hrs','21 hrs ',' 36 hrs'],
    answer:4
   },
   {
    question:'Two pipes fills a cistern in 15 hrs and 20 hrs respectively. The pipes are opened simultaneously and it is observed that it took 26 min more to fill the cistern because of leakage at the bottom. If the cistern is full, then in what time will the leak empty it?',
    options:['  35 hrs',' 70 hrs','180 hrs',' 300 hrs'],
    answer:3,
	description:"You Can Add Some Description"
   },
   {
    question:' It is observed that the pipe A can fill the tank in 15 hrs and the same tank is filled by pipe B in 20 hrs. The third pipe C can vacant the tank in 25 hrs. If all the pipes get opened initially and after 10 hrs, the pipe C is closed, then how long will it take to fill the tank?',
    options:[' 3 hrs',' 7 hrs','12 hrs','20 hrs'],
    answer:3
   },
   {
    question:' Two pipes A & B can fill a tank in 5 min & 10 min respectively. Both the pipes are opened together but after 2 min, pipe A is turned off. What is the total time required to fill the tank?',
    options:[' 4 min',' 6 min','14 min',' 20 min'],
    answer:3
   },
   {
    question:'A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?',
    options:['16 hrs',' 20 hrs','25 hrs','40 hrs'],
    answer:4
   },
   {
    question:'Two pipes can fill a tank in 18 minutes and 15 minutes. An outlet pipe can empty the tank in 45 minutes. If all the pipes are opened when the tank is empty, then how many minutes will it take to fill the tank?',
    options:['9 mins.',' 10 mins.','11 mins.','12 mins'],
    answer:2,
	description:"You Can Add Some Description"
   },
   {
    question:'Two pipes A and B can fill a cistern in 37 1/2 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after: ',
    options:['  6 mins.','9 mins.','12 mins ','15 mins.'],
    answer:2
   },
  
        ]
},
    {
     category:"Probability",
     quizWrap:[ 
        {
    question:'A box contains 3 blue marbles, 4 red, 6 green marbles and 2 yellow marbles. If three marbles are picked at random, what is the probability that they are all blue?',
    options:[' 1/455','2/455','4/455 ','1/91'],
    answer:1
   },
   {
    question:'What is the probability of getting a sum 9 from two throws of a dice?',
    options:['1/6','1/8','1/9 ','1/12'],
    answer:3
   },
   {
    question:'In a cycle race there are 5 persons named as J,K,L,M,N participated for 5 positions. How many number of ways can M finishes always before N?',
    options:['20','36','55','60'],
    answer:2
   },
   {
    question:'A Bag contains 6 Blue Balls and 4 Red Balls. 4 balls are picked at random. What is the probability that 2 are Blue and 2 are Red?',
    options:['1/5','1/7','3/8','3/7'],
    answer:2
   },
   {
    question:'A Bag contains 6 Blue Balls and 4 Red Balls. 3 balls are picked at random. What is the prob. that none of them is Red?',
    options:['1/3','1/5','1/6','1/7'],
    answer:3
   },
   {
    question:'The probability that A speaks truth is 3/5 and that of B speaking truth is 4/7. What is the probability that they agree in stating the same fact?',
    options:['12/35','18/35','21/35','15/35'],
    answer:2,
	description:"You Can Add Some Description"
   },
   {
    question:'A box contains 3 blue marbles, 4 red, 6 green marbles and 2 yellow marbles. If four marbles are picked at random, what is the probability that none is blue?',
    options:['17/91','33/91','51/91','65/91'],
    answer:1
   },
  { question:'If two dice are thrown simultaneously, then find the probability that the sum of numbers appeared on the dice is 6 or 7?',
    options:['5/6','5/36','7/36','11/36'],
    answer:4
},
{
    question:'The probability that Alex will solve a problem is 1/5. What is the probability that he solves at least one problem out of 4 problems?',
    options:['64/125','256/625','64/625','369/625'],
    answer:4
   },
   {
    question:'Two dice are thrown together. What is the probability that the sum of the number on the two faces is divisible by 4?',
    options:['2/9','1/9','1/4','1/3'],
    answer:4
   },

        ]
},
    {
     category:"Problems on age",
     quizWrap:[ 
     {
         question:"The ratio of the ages of Esha and her mother is 1 : 4 and the ratio of the ages of Esha's mother and her brother is 9 : 1. If Esha's brother is 5 years younger than Esha. What will be the age of Esha's mother after 4 years?",
         options:["36 years","40 years","45 years","50 years"],
         answer:2
        },
        {
         question:"Mohan was 7 years younger to Raman 5 years back. After 5 years, the ratio of ages of Mohan and Jill will be 3 : 4. The sum of ages of Mohan and Jill is 53 years. Find the current age of Raman.(in years)",
         options:["22","24","29","34"],
         answer:3,
        },
        {
         question:"Miku's age is 9/11th of his brother's age and the age of Miku's father is 23 years more than the age of Miku. If the average age of Miku, Miku's father and Miku's brother is 27 years, find the age of Miku.",
         options:["18 years","22 years","20 years","15 years"],
         answer:1
        },
        {
         question:"The average age of a group of 15 employees is 24 years. If 5 more employees join the group, the average age increases by 2 years. Find the average age of the new employees",
         options:["35","30","24","32"],
         answer:0,
		 description:"You Can Add Some Description"
        }
        ,
        {
         question:"Five years ago, the age of John was 5 times that of his son. After 5 years, his age will be 3 times that of his son. After how many years, will he be twice as old as his son?",
         options:["15 years","25 years","30 years","40 years"],
         answer:2
        },
        {
            question:'Two years ago, the age of Rajan was 4 times that of his son. After 5 years, the ratio of ages of Rajan to his son will be 5 : 2. What is the present age of his son?',
            options:['8 years','14 years','7 years','9 years'],
            answer:4
           },
           {
            question:'The sum of the ages of Kidambi and Srikanth 14 years hence will be equal to 2 times their present age. If at present Kidambi is 8 years elder to Srikanth, then what are their present ages?',
            options:[' 22, 8','29, 12','18, 10',' 13, 6'],
            answer:3
           },
           {
            question:'The product of the ages of Asha and Nithi is 540. If twice the age of Asha is more than Nithi’s age by 6 years, then find Asha’s age?',
            options:['18 years','20 years','16 years','22 years'],
            answer:1
           },
           {
            question:'The ratio of B’s age six years hence to C’s present age is 5: 3. B is eleven years younger than A. If A’s present age is twice the age of C, then find B’s age, 4 years ago?',
            options:['13 years','15 years','16 years','17 years'],
            answer:2
           },
           {
            question:'After 2 years, the age of Karthi is 2 times the present age of Silambu. Preethi is 8 years elder than Silambu. Find the present age of Karthi, if the present age of Preethi is 23 years?',
            options:[' 28 years',' 26 years',' 24 years',' 30 years'],
            answer:1
           },
        ]
    },
    
     {
     category:"Profit and loss",
     quizWrap:[ 
     {
    question:'Vipin started a business with an investment of Rs. 42,000. After 5 months Amit joined him with a capital of Rs. 22,000. At the end of the year the total profit was Rs.16,409. What is Vipin’s share in the profit?',
    options:['Rs. 16244','Rs. 12568','Rs. 10782','Rs. 5677'],
    answer:2
   },
   {
    question:'An article costing Rs. 363 is marked to be sold at a price which gives a profit of 20%. What will be its selling price in a sale when 15% is taken off the marked price?',
    options:['Rs. 390.56','Rs. 390.26','Rs. 382.26','Data inadequate'],
    answer:3
   },
   {
    question:'A shopkeeper gives a discount of 10% in every 4 months at an article. If a man purchases it for Rs. 25515 in the month of December, then what was the initial price of that article in the month of January?',
    options:['Rs. 40000','Rs. 36000','Rs. 35000','Rs. 45000'],
    answer:3
   },
   {
    question:'A smartphone costs 10 times the cost of a headphone. On selling smartphone there is a profit of 15% while the total profit on selling both headphone and smartphone is 20%. If there is a profit of Rs. 2800 on selling headphone then find the cost price of smartphone?',
    options:['Rs. 20000','Rs. 30000','Rs. 50000 ','Rs. 40000'],
    answer:4,
	description:"You Can Add Some Description"
   },
   {
    question:'A profit of 13% is made by selling a shirt after offering a discount of 20%. If the marked price of the shirt is Rs. 2260, find its cost price.',
    options:[' Rs 1850','Rs 1780','RS 1600','Rs 1900'],
    answer:3
   },
   {
    question:'Anil makes a profit of 18% on cost price by selling a washing machine for Rs. 5900. If the cost price of the machine is increased by 5% and he wants to earn the same profit, What will be the new profit percent on selling price?',
    options:['14.63%','12.25%','15.96%','17.14%'],
    answer:1
   },
   {
    question:'Himansh purchased a Mobile phone and a laptop for Rs. 32000. He sold the Mobile phone at a loss of 10% and the Laptop at a profit of 10%. If his total profit was 1200, find the cost price of the laptop.',
    options:['Rs 10000','Rs 22000','Rs 28000','Rs 16000'],
    answer:2
   },
   {
    question:'A shopkeeper marks the marked price 25% more than the cost price that is Rs. 1500. After giving two successive discounts of 12% and x% he losses Rs. 15. Find the value of x.',
    options:['12%','10%','15%','9%'],
    answer:2
   },
   {
    question:'Rama Kant dealing in bed sheets allows 4% discount on the marked price. What price must be marked on a bed sheet that cost Rs. 480 so as to make a profit of 10%?',
    options:['Rs 520','Rs 620','Rs 650','Rs 550'],
    answer:4
   },
   {
    question:'After getting two successive discounts Apurva got a jeans at Rs. 714 whose marked price is Rs. 1000. If the second discount is 15% find the first discount.',
    options:['12.5%','15%','16%','20%'],
    answer:3
   },
         
        ]
    },
    {
     category:"Gk",
     quizWrap:[ 
     {
    question:'The Rajya Sabha can have a maximum strength of howmany members?',
    options:['230','250','270','290'],
    answer:1
   },
   {
    question:'Which State has the largest coastline in India?',
    options:['West Bengal','Gujrat','Tripura','Manipur'],
    answer:1
   },
   {
    question:'Which metal is not attacked by the environment?',
    options:['Gold','Silver','Mercury','Copper'],
    answer:1
   },
   {
    question:'FIFA World Cup 2018 would be held in which country?',
    options:['India','Germany',' Russia','Kenya'],
    answer:2,
	description:"You Can Add Some Description"
   },
   {
    question:'Which was the Capital of Andhra State when it was made a separate State inthe year 1953?',  
    options:['Magadh','Kurnool',' Kolkata','Delhi'],
    answer:1
   },
  
   {
    question:'Which vitamin is synthesised in the body by intestinal bacteria?',
    options:['Vitamin K','Vitamin A','Vitamin C ','Vitamin E'],
    answer:0
   }, 
   {
    question:'A temperature difference of 25°C is equivalent to a temperature difference of howmany F?', 
    options:['55° F','65° F',' 45° F','35° F'],
    answer:2
    },
   
   {

    question:'English is the official language of which State?',
    options:['West Bengal','Nagaland','Tripura ','Andra Pradesh'],
    answer:1
   }, 
   {

    question:'In which year, some more commercial banks in addition to the first lot of 141 were nationalised in India?',
    
    options:['1985','1980',' 1990','1987'],
    answer:1
   }, 
   {

    question:'Which vitamin is essential for the coagulation of blood?',
    options:['Vitamin K','Vitamin A','Vitamin C ','Vitamin E'],
    answer:0
   }, 
        ]
    },
    {
     category:"General Science",
     quizWrap:[ 
     {
    question:'The relationship between the water fern Azola and the cyanobacterium Annabena is: ',
    options:[' symbiotic','mutual',' Survival',' Proto-support'],
    answer:0
   },
   {
    question:' In which wildebeest reserve is the tiger-tailed macaque?',
   
    options:[' Nilgiri',' Dihang-Dibang',' Nokrek',' None of these'],
    answer:0
   },
   {
    question:'Who is the Chairman of Western Ghats Ecology Expert Panel (WGEEP)?',
    options:['nuclear waste',' invasive alien species','Modified Living Organisms (LMO)','None of these'],
    answer:1
   },
   {
    question:'In which unit is the thickness of the stratospheric ozone gas layer measured?',
    options:[' Caverts','Dobson unit','Melsen Unit ','None of these'],
    answer:1,
	description:"You Can Add Some Description"
   },
   {
    question:'Which of the following multilateral conference is meant to protect human health and the environment from sustainable organic pollutants?',
    options:[' bone conference',' Stockholm conference',' Rotterdam conference ',' Basel  conference'],
    answer:1
   },

   {

    question:' Which of the following is not a traditional source of energy?',
    options:[' Natural Gas',' Mineral Oil','Geothermal energy',' Coal'],
    answer:2
   },
   {
    question:' Which of the following is known as the suicide sac of the cell?',
    options:[' Lysozyme','golgibody','ribosome','None of these'],
    answer:0
   },
   {
    question:'Which of these diseases is also known as encephalitis?',
    options:['Japanese encephalitis','Tetanus','Dengue',' Rabies'],
    answer:0
   },
   {
    question:' Will florescence occur in understory plants (SDP), when?',
    options:['Nights are short-lived','the days are long term','Long-term nights',' None of these'],
    answer:2
   },
   {
    question:' Which of the following is V.A.M. (VAM) is fungus?',
    options:['Glomus species','Fusarium species','Rhizoctonia species',' Pythium species'],
    answer:0
   },

         
        ]
    }
        ]
function createCategory(){
   //console.log(myApp[1].category);
    for(let i=0; i<myApp.length; i++){
        categoryList=document.createElement("div");
        categoryList.innerHTML=myApp[i].category;
        categoryList.setAttribute("data-id",i);
        categoryList.setAttribute("onclick","selectCategory(this)");
        categoryBox.appendChild(categoryList)
    }
    
}
function selectCategory(ele){
    categoryIndex=ele.getAttribute("data-id");
    //console.log(categoryIndex)
    categoryText.innerHTML=myApp[categoryIndex].category;
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
}
function load(){
    number++;
   questionText.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].question;
    creatOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " +myApp[categoryIndex].quizWrap.length;
}
function creatOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[categoryIndex].quizWrap[questionIndex].options.length; i++){
        const option=document.createElement("div");
              option.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].options[i];
              option.classList.add("option");
              option.id=i;
              option.style.animationDelay=animationDelay + "s";
              animationDelay=animationDelay+0.2;
              option.setAttribute("onclick","check(this)");
              optionBox.appendChild(option);
        
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
   let hitDuplicate=0;
   if(myArray.length == 0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
                //if duplicate found
                hitDuplicate=1;
                
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    
    myArray.push(randomNumber);
    console.log(myArray)
    load();
}

function check(ele){
    const id=ele.id;
    if(id==myApp[categoryIndex].quizWrap[questionIndex].answer){
       ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else{
        ele.classList.add("wrong");
        //show correct option when clicked answer is wrong
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();
    
    if(number == myApp[categoryIndex].quizWrap.length){
        quizOver();
    }
}
function timeIsUp(){
    showTimeUpText();
    //when time is up Show Correct Answer
    for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
                if(number == myApp[categoryIndex].quizWrap.length){
                    quizOver();
                  }
            }
        }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    if(number == myApp.length){
        quizOver();
      }
}
function startTimer(){
    let timeLimit=10;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
      timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
            
            }
            if(timeLimit < 6){
                remainingTime.classList.add("less-time");  
            }
            remainingTime.innerHTML=timeLimit;
            if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
    }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered")
    }
}
function showAnswerDescription(){
    if(typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
        answerDescription.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].description;
    }
    
}
function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}
function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}
function showTimeUpText(){
    timeUpText.classList.add("show");
}
function hideTimeUpText(){
    timeUpText.classList.remove("show");
    
}
function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
   generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}
function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    //document.querySelector(".total-time").innerHTML=attempt-score;
    const percentage=(score/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML=percentage.toFixed(2) +"%";
}
function resetQuiz(){
  attempt=0;
  //questionIndex=0;
  score=0;
  number=0;
  myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}
seeResultBtn.addEventListener("click", ()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
     })

startAgainQuizBtn.addEventListener("click", ()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click", ()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show")
    resetQuiz();
})
  
//startQuizBtn.addEventListener("click", ()=>{
   // quizHomeBox.classList.remove("show");
   // quizBox.classList.add("show");
   // nextQuestion();
//})

window.onload=()=>{
    createCategory();
}