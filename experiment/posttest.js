/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      if( questionNumber == 4 ){
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <img src="${currentQuestion.src}" />
          <div class="answers"> ${answers.join("")} </div>`
        );
      }
      else{output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );}
      // add this question and its answers to the output
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers black
        answerContainers[questionNumber].style.color = "black";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "To implement multiple output functions (sum of product type-SOP) using demultiplexer, additional __________type of gates are required. ",  ///// Write the question inside double quotes
      answers: {
        a: "AND",                  ///// Write the option 1 inside double quotes
        b: "OR",                  ///// Write the option 2 inside double quotes
        c: "NOT",
        d: "EX-OR",                              ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "Design, construct and verify a 1:2 demux using NOR gates only. Get the simulation results evaluated from your faculty.",  ///// Write the question inside double quotes
      answers: {
       // a: "1/V^?? vs. f",                  ///// Write the option 1 inside double quotes
       // b: "f vs. 1/V^1/2",                  ///// Write the option 2 inside double quotes
       // c: "1/V vs. f",                  ///// Write the option 3 inside double quotes
       // d: "none"                   ///// Write the option 4 inside double quotes
      },
      //correctAnswer: "b"                ///// Write the correct option inside double quotes
    },     
    
    {
      question: "Can 1:4 demux chips be cascaded to build 1:8 demux?",  ///// Write the question inside double quotes
     // src :"Ex2postQ3.PNG",
      answers: {
        a: "Yes",                  ///// Write the option 1 inside double quotes
        b: "No",                  ///// Write the option 2 inside double quotes
      //  c: "Y = D",                  ///// Write the option 3 inside double quotes
      //  d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },   
    
    {
      question: "To implement a full adder, which of the following demux would be preferable?",  ///// Write the question inside double quotes
     // src :"Ex2postQ4.PNG",
      answers: {
        a: "1:4",                  ///// Write the option 1 inside double quotes
        b: "1:8",                  ///// Write the option 2 inside double quotes
        c: "1:16",                  ///// Write the option 3 inside double quotes
        d: "1:32"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, 

    {
      question: "The figure shown below represents____________.",  ///// Write the question inside double quotes
      src :"images/PostQ5.PNG",
      answers: {
        a: "half adder",                  ///// Write the option 1 inside double quotes
        b: "full adder",                  ///// Write the option 2 inside double quotes
        c: "half subtractor",                  ///// Write the option 3 inside double quotes
        d: "full subtractor"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }
    ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////