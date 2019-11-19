var questions = {
    firstQ: "In Naruto Shippuden, how does Sasuke Uchiha awaken the Rinnegan?",
    secondQ: "Yurameshi Usuke is the main character of which 90's anime?",
    thirdQ: "Which Shonen Jump thriller has Saiyans turning into apes when they see the moon?",
    fourthQ:
      "What vintage Shonen Jump anime has characters based off of constellations?",
    fifthQ: "Which villian vowed to use the Hogyoku to wipe the world away?",
    sixthQ:
      "Why can't Sanji from One Piece touch females?",
    seventhQ: "Characters from the anime Black Clover carry around a book that is called a..."
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
    $startButton.html("Start!");
    $("#start").append($startButton);
  ​
    $startButton.on("click", function() {
      console.log(questions);
      console.log("Let's start!");
      confirm("Shall We Begin?");
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
      
    }
  });
  