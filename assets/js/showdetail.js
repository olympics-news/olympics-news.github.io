document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".expended-icon").forEach(function (el) {
    el.addEventListener("click", function (e) {
      let img = e.target;
      const contry_name = img.dataset.contryName;
      if (img.src.includes("/imgs/icons/collapse.svg")) {
        img.src = "/imgs/icons/expand.svg";
      } else {
        img.src = "/imgs/icons/collapse.svg";
      }
      document
        .querySelectorAll(`[data-relation="${contry_name}"]`)
        .forEach(function (el) {
          el.classList.toggle("hidden");
        });
    });
  });
});
