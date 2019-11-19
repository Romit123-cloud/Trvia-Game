var questions = {
    firstQ: "In what year was Michael Jordan drafted?",
    secondQ: "Who was the previous NBA Commisioner before Adam Silver?",
    thirdQ: "Which NBA Franchise has won the most NBA Championship Titles?",
    fourthQ:
      "What is it called when a player fouls a bad free-throw shooter intentionally?",
    fifthQ: "Which NBA coach has coached both Michael Jordan and Kobe Bryant?",
    sixthQ:
      "The Los Angeles Lakers won the 1980 NBA Championship with who as their assisstant coach?",
    seventhQ: "Dwyane Wade's nickname is ... ?"
  };
  ​
  $(document).ready(function() {
    console.log("Ready!");
    console.log("Time for our JS and JQuery to kick in!");
  ​
    var time = 40;
    var timerval;
    var isCorrect = 0;
    var isIncorrect = 0;
    var isUnanswered = 0;
  ​
    var $body = $("body");
    var $table = $("table");
    hideTable();
    function hideTable() {
      $table.hide();
    }
  ​
    var $startButton = $("<button>");
    $startButton.html("Let's See!");
    $("#start").append($startButton);
  ​
    $startButton.on("click", function() {
      console.log(questions);
      console.log("Let's Begin!");
      confirm("Shall We Proceed?");
      $startButton.hide();
      showTable();
      timer();
    });
  ​
    function showTable() {
      $("#firstQ").text(questions.firstQ);
      $("#secondQ").text(questions.secondQ);
      $("#thirdQ").text(questions.thirdQ);
      $("#fourthQ").text(questions.fourthQ);
      $("#fifthQ").text(questions.fifthQ);
      $("#sixthQ").text(questions.sixthQ);
      $("#seventhQ").text(questions.seventhQ);
      $table.show();
      console.log("Dynamically Added Questions DOM Manip");
    }
  ​
    function timer() {
      timerval = setInterval(decrement, 1000);
    }
  ​
    function decrement() {
      time--;
      console.log(time);
      var $header = $(".header");
      $header.text("You have " + time + " seconds remaining");
      $header.css("font-weight", "bold");
      $header.css("font-size", "30px");
      time > 0 ? $header.text("You have " + time + " seconds remaining") : stop();
    }
  ​
    function stop() {
      clearInterval(timerval);
      results();
    }
  ​
    function results() {
      var container = $(".container");
      container.hide();
      var resultsdiv = $("#results");
      resultsdiv.css("text-align", "center");
      var resultsHeader = $("<h1>");
      resultsHeader.text("Final Score");
      var correctLine = $("<p>");
      correctLine.text("You answered " + isCorrect + " questions correctly.");
      var incorrectLine = $("<p>");
      incorrectLine.text(
        "You answered " + isIncorrect + " questions incorrectly."
      );
      var unansweredLine = $("<p>");
      unansweredLine.text("You have " + isUnanswered + " unanswered questions.");
      resultsdiv.append(resultsHeader);
      resultsdiv.append(correctLine);
      resultsdiv.append(incorrectLine);
      resultsdiv.append(unansweredLine);
      // $('#results').html(<h2>Hello</h2>)
    }
  });
  //  https://css-tricks.com/centering-list-items-horizontally-slightly-trickier-than-you-might-think/