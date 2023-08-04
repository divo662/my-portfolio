document.addEventListener("DOMContentLoaded", function () {
    const githubLinks = document.querySelectorAll(".github-link");
    githubLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  });
  
  