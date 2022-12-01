const $li = document.querySelectorAll(".banner_list > li"),
  $big_img = document.querySelector(".big_img"),
  $img = document.querySelector(".big_img>img");

$li.forEach(function (list, idx) {
  list.addEventListener("click", function () {
    let target = this.getAttribute("data-imgUrl");
    $big_img.classList.remove("on");
    setTimeout(function () {
      $img.setAttribute("src", target);
      $big_img.classList.add("on");
    }, 1000);
  });
});
