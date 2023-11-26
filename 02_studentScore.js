/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {
   switch (true) {
      case score>100: return "Incorrect score";

      case score>=91 && score==100: return "Grade A"; 

      case score>=81 && score<=90: return "Grade B"; 

      case score>=71 && score<=80: return "Grade C"; 

      case score>=61 && score<=70: return "Grade D"; 

      case score>=51 && score<=60: return "Grade E"; 

      default: return "Fail"

   }
}

let score = 100;
console.log(calculateGrade(score));