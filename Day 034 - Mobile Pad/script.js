document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = document.getElementById("phone-number");

  document.querySelectorAll(".num").forEach((btn) => {
    btn.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      phoneNumber.value += value;
    });
  });

  document.getElementById("delete").addEventListener("click", function () {
    phoneNumber.value = phoneNumber.value.slice(0, -1);
  });

  document.getElementById("add").addEventListener("click", function () {
    alert(`${phoneNumber.value} saved`);
  });

  document.getElementById("call").addEventListener("click", function () {
    alert(`Calling ${phoneNumber.value}...`);
  });
});
