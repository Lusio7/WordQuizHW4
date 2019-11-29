# WordQuizHW4
Word quiz with timer and other features

Created git clone on to local hard drive

created the shell in html
created main div container
div with start quiz

div for where the actual quiz 
div inside of that for the question with multiple answers
div for the icons/imgs

created div for the choices for the answers: "A" "B" "C"

created div for the timer
div for the timer gauge

created div to indicate progress on wrong/correctAnswers

linked to js and css sheets

In the js sheet started by selecting all elements

then created string of variables with questions and answers

created additional variables to ensure the game ended at the last question and did not loop back to beginning

created a timer for each question and styled the timer gauge etc.

created a function to render the questions
called the elements and manipulated them with inner.html, as well as the images
created the choice options

created an event listender to start the game when startQuiz is clicked

created a function to render progress
created a for loop to run through the question index and add to progrss bar when correct

created an if/else function to add to user's score if answerCorrect and detract if answerWrong

created a function to checkAnswer with if/else to add or detract from score with %

created images to match scores determined by %
