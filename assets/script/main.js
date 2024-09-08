"use strict";

const allServices = document.querySelectorAll(".menu__service-card");
const modal = document.querySelector(".menu__services-modal");
const modalClose = document.querySelector(".menu__services--modal-close");

allServices.forEach((service) => {
  service.addEventListener("click", function () {
    modal.classList.add("active-modal");
  });
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("active-modal");
});
