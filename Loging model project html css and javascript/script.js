      const loginBtn = document.querySelector("#login");
      const loginModelElement = document.querySelector(".loginModel");

      const closeBtn = document.querySelector(" .loginModel span");
      loginBtn.addEventListener("click", () => {
        loginModelElement.classList.add("showModel");
      });

      closeBtn.addEventListener("click", () => {
        loginModelElement.classList.remove("showModel");
      });