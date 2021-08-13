function add (question1,question2,question3,question4,question5) {
  return (question1 + question2 + question3 + question4 + question5)
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    let question1 = parseInt($("input:radio[name = question1]:checked").val());
    let question2 = parseInt($("input:radio[name = question2]:checked").val());
    let question3 = parseInt($("input:radio[name = question3]:checked").val());
    let question4 = parseInt($("input:radio[name = question4]:checked").val());
    let question5 = parseInt($("input:radio[name = question5]:checked").val());
    let answer = add(question1,question2,question3,question4,question5)

    if (answer <= 6) {
      $("#backend").show();
    } else if (answer === 7) {
      $("#fullstack").show();
    } else if (answer > 8) {
      $("#frontend").show();
    }

    $(".survey").hide();
  });
});
