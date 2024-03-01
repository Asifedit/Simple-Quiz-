
// Add Your Question 
const questions = [{
      question : 'which is The largest animal currently alive is the world',
        answers :[
            {text:'shark',          correct: false},
            {text:'blue whale',           correct: true},
            {text:'elephant',       correct: false},
            {text:'giraffe',        correct: false},
            ]},
    {
        question: 'which is smallest city in the world',
        answers: [
            { text: 'Vatican City', correct: true },
            { text: 'Neoal',        correct: false },
            { text: 'India',        correct: false },
            { text: 'Plastine',     correct: false },
                ] },
    {
        question: 'which is learget desert in the world',
        answers: [
            { text: 'kalahaei',     correct: false },
            { text: 'Gobi Desert',         correct: false },
            { text: 'Sahara Desert',       correct: false },
            { text: 'Antarctic Polar Desert',   correct: true },
                ] },
     {
        question: 'The smallest known wild animal in India  ',
        answers: [
            { text: 'shark',        correct: false },
            { text: 'ant',          correct: false },
            { text: 'Etruscan shrew', correct: false },
            { text: 'the shrew',        correct: true },
                ] },
                {
        question: ' temporary memory is in computer ',
        answers: [
            { text: 'hard disk',     correct: false },
            { text: 'ram',          correct: true },
            { text: 'none of this', correct: false},
            { text: 'sd card',      correct: false },
                ] },
         {
        question: ' total  days in 2024 in a full year',
        answers: [
            { text: ' 365',         correct: false },
            { text: '367',          correct: false },
            { text: 'none of this', correct: true},
            { text: '12',           correct: false },
                ] },
                
          {
        question: ' The largest planet in our solar syste ',
        answers: [
            { text: ' Earth',    correct: false },
            { text: 'mars',      correct: false },
            { text: 'Jupiter',   correct: true},
            { text: 'sun',       correct: false },
                ] },
          {
        question: ' How many Cricket world cups does India have ',
        answers: [
            { text: ' 1',        correct: false },
            { text: ' 3 ',      correct: false },
            { text: '5',         correct: false},
            { text: 'none of this',  correct: true },
                ] },
         {
        question: ' When do we celebrate our Independence Day 15th August _____',
        answers: [
            { text: ' 11pm',        correct: false },
            { text: ' 11:30 Am ',      correct: false },
            { text: '12 am',         correct: false},
            { text: '8 am',  correct: true },
                ] },
      {
        question: 'Who was the first Prime Minister of India',
        answers: [ 
            { text: 'Narendra Modi',       correct: false },
            { text: 'Manmohan Singh',         correct: false },
            { text: 'Jawaharlal Nehru', correct: true },
            { text: 'Vishwanath Pratap Singh ',        correct: false },
         ]}]
// collect all eliment
    const questionElement = document.getElementById('question')
    const answerButton = document.getElementById('answer-buttons')
    const nextButton = document.getElementById('next-btn')
    var scorelavel=  document.getElementById('showScor')
// fast score 
    let currentQuestionIndex =  0
    let score  = 0
//started Question 
    function startQuiz() {
       currentQuestionIndex = 0
       score = 0
       nextButton.innerHTML = 'Next'.toUpperCase()
       showQuestion()
    }
//show all questions and Answers step by step 
    function showQuestion() {
// view score 
        scorelavel.innerHTML = "YOUR SCORE : "+`${score}`
        scorelavel.style.display = 'block'
        resetastate()
        let currentQuestion = questions[currentQuestionIndex]
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo +". " +currentQuestion.question.toLocaleUpperCase() + ' ?';          
// Find right answer       
        currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = "&#x00A0;"+answer.text.toUpperCase()+"&#x00A0;";
        button.classList.add('btn')
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
// Listen button  click or not    
  button.addEventListener('click',(e)=> {
       if (answer.correct == true) {
              button.classList.add('correct')
              score++
              scorelavel.innerHTML = "YOUR SCORE : "+`${score}`
          }
     else {
           button.classList.add('incorrect')
           }
     Array.from(answerButton.children).forEach(button=>{
     button.disabled = true
     nextButton.style.display = 'block'
     if (button.dataset.correct === 'true') {
         button.classList.add('correct')
     }
     })  } ) }); }
//delete previous answer 
    function resetastate() {
       nextButton.style.display = 'none'
       while (answerButton.firstChild) {
       answerButton.removeChild(answerButton.firstChild)  
       }}
//Confirm next question available or not
    function hendelnextButton() {
        currentQuestionIndex++
        (currentQuestionIndex < questions.length) ? showQuestion() : showScore()
    }
// button click 
   nextButton.addEventListener('click',()=>{
       (currentQuestionIndex < questions.length) ? hendelnextButton() : startQuiz()
   }) 
function perform(questions,score) {
    var per =  (score/questions.length)*100
    if (per >= 90) {
        return "A+  "
    }
    if (per >= 75) {
        return "A"
    }
    if (per >= 50) {
        return `B`
    }
    if (per >= 35) {
        return "c"
    }
    if (per >= 1) {
        return "D"
    }
      }
//show score 
  function showScore() {
       resetastate()
       perform(questions,score)
       var persent =  (score/questions.length)*100
       scorelavel.style.display = 'none'
       questionElement.innerHTML = ""
       nextButton.innerHTML = 'PLAY AGAIN'
       var alldlDetail = document.createElement('ul')
       alldlDetail.classList.add('QuestionEnd')
       questionElement.appendChild(alldlDetail)
       nextButton.style.display = 'block'
       alldlDetail.innerHTML = `Your performance 
                                <li>total Questions     -  <span>${questions.length}</span></li>
                                <li>total right Answer  -  <span>${score}</span></li>
                                <li>total worng answer  -  <span>${questions.length-score}</span></li>
                                <li>Your got            -  <span>${persent.toFixed(0)}%</span></li>
                                <li>Your Grade          -  <span>${perform(questions,score)}</span></li>
                                `.toUpperCase()
   }
   
  startQuiz()
  
  