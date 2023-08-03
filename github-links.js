document.addEventListener("DOMContentLoaded", function () {
    const githubLinks = document.querySelectorAll(".github-link");
    githubLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const url = link.getAttribute("data-url");
        if (url) {
          console.log("Clicked on the link:", url);
          window.open(url, "_blank");
        }
      });
    });
  });
  