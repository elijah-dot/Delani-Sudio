//image one

$("#topone").click(function () {
  $("#textone").css("display", "block");
  $("#topone").css("display", "none");
});
$("#textone").click(function () {
  $("#topone").css("display", "block");
  $("#textone").css("display", "none");
});

//image two

$("#toptwo").click(function () {
  $("#texttwo").css("display", "block");
  $("#toptwo").css("display", "none");
});
$("#texttwo").click(function () {
  $("#toptwo").css("display", "block");
  $("#texttwo").css("display", "none");
});

//image three

$("#topthree").click(function () {
  $("#textthree").css("display", "block");
  $("#topthree").css("display", "none");
});
$("#textthree").click(function () {
  $("#topthree").css("display", "block");
  $("#textthree").css("display", "none");
});

// Portfolio Section.
//boxfour
$("#ma").hover(
  function () {
    $("#mb").css("display", "none").slideDown(1000);
  },
  function () {
    $("#mb").css("display", "block").slideUp(1000);
  }
);

//boxfive
$("#mc").hover(
  function () {
    $("#md").css("display", "none").slideDown(1000);
  },
  function () {
    $("#md").css("display", "block").slideUp(1000);
  }
);

//boxsix
$("#me").hover(
  function () {
    $("#mf").css("display", "none").slideDown(1000);
  },
  function () {
    $("#mf").css("display", "block").slideUp(1000);
  }
);

//boxseven
$("#mg").hover(
  function () {
    $("#mh").css("display", "none").slideDown(1000);
  },
  function () {
    $("#mh").css("display", "block").slideUp(1000);
  }
);
//boxeight
$("#mi").hover(
  function () {
    $("#mj").css("display", "none").slideDown(1000);
  },
  function () {
    $("#mj").css("display", "block").slideUp(1000);
  }
);
//boxnine
$("#mk").hover(
  function () {
    $("#ml").css("display", "none").slideDown(1000);
  },
  function () {
    $("#ml").css("display", "block").slideUp(1000);
  }
);
//boxten
$("#mm").hover(
  function () {
    $("#mn").css("display", "none").slideDown(1000);
  },
  function () {
    $("#mn").css("display", "block").slideUp(1000);
  }
);
//boxeleven
$("#mo").hover(
  function () {
    $("#mp").css("display", "none").slideDown(1000);
  },
  function () {
    $("#mp").css("display", "block").slideUp(1000);
  }
);

let emailInput = document.forms["form"]["email"];
let nameInput = document.forms["form"]["name"];

let type_error = document.getElementById("name_error");
let messages = document.getElementById("message");

function validate() {
  if (emailInput.value <= 0) {
    type_error.innerHTML = "enter email";
    type_error.style.color = "red";
    type_error.style.fontSize = "30px";
    type_error.style.fontWeight = "bolder";
    emailInput.focus();
    return false;
  } else {
    emailInput.style.border = "solid 2px green";
  }

  if (nameInput.value <= 0) {
    type_error.innerHTML = "enter name";
    type_error.style.color = "red";
    type_error.style.fontSize = "30px";
    type_error.style.fontWeight = "bolder";
    nameInput.focus();
    return false;
  } else {
    nameInput.style.border = "solid 2px green";
    type_error.innerHTML = "";
  }
  if (messages.value <= 0) {
    type_error.innerHTML = "write your message";
    type_error.style.color = "red";
    type_error.style.fontSize = "30px";
    type_error.style.fontWeight = "bolder";
    messages.focus();
    return false;
  } else {
    messages.style.border = "solid 2px green";
    type_error.innerHTML =
      "your message has been" + "<br>" + "received and recorded";
    type_error.style.color = "yellowgreen";
    type_error.style.fontSize = "30px";
    type_error.style.fontWeight = "bolder";
  }
}

//reset buton

function rub() {
  emailInput.value = "";
  nameInput.value = "";
  messages.value = "";
  type_error.innerHTML = "Cleared";
  type_error.style.color = "green";
  type_error.style.fontSize = "30px";
  type_error.style.fontWeight = "bolder";
}
