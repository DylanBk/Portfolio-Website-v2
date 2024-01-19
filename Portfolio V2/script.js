window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
    document.getElementById("navbar").style.height = "6rem";
  } else {
    document.getElementById("navbar").style.height = "4rem";
  }
}