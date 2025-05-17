export default function youFormFunc() {
  !(function e(t) {
    let o = document.createElement("link");
    (o.rel = "stylesheet"), (o.href = t), document.head.appendChild(o);
  })("https://app.youform.com/widgets/widget.css");
  let e = document.querySelectorAll("[data-youform-open]");
  e.forEach(function (e) {
    e.addEventListener("click", function () {
      event.preventDefault();
      let t = e.getAttribute("data-youform-open"),
        o = e.getAttribute("data-youform-position");
      o || (o = "center"),
        (function e(t, o) {
          let n = document.querySelector(".youform-modal-overlay");
          n ||
            ((n = document.createElement("div")).classList.add(
              "youform-modal-overlay"
            ),
            "center" == o && n.classList.add("as-modal"));
          let r = document.createElement("div");
          r.classList.add("youform-modal-content"),
            "center" != o && r.classList.add("bottom-right");
          let a = document.createElement("button");
          a.classList.add("youform-close-button"),
            a.appendChild(
              (function e() {
                let t = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                return (
                  t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                  t.setAttribute("viewBox", "0 0 24 24"),
                  t.setAttribute("width", "30"),
                  t.setAttribute("height", "30"),
                  (t.innerHTML =
                    '<path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>'),
                  t
                );
              })()
            ),
            a.addEventListener("click", l),
            r.appendChild(a);
          let d = document.createElement("iframe");
          function l() {
            document.body.removeChild(n),
              (document.body.style.overflow = "auto");
          }
          (d.src = `https://app.youform.com/forms/${t}`),
            (d.frameBorder = 0),
            r.appendChild(d),
            n.appendChild(r),
            document.body.appendChild(n),
            n.addEventListener("click", function (e) {
              e.target === n && l();
            }),
            document.getElementsByTagName("body")[0],
            (document.body.style.overflow = "hidden");
        })(t, o);
    });
  });
}
document.addEventListener("DOMContentLoaded", youFormFunc),
  document.addEventListener("livewire:navigate", () => {
    console.log("navigate"), setTimeout(youFormFunc, 1500);
  });
