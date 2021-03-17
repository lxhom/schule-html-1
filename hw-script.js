window.onload = () => {
  let tick = 0;
  let text = "Hello World!";

  let setTexts = text => {
    document.querySelector("#text").innerText = text;
    document.title = text;
  }

  let tickFunction = () => {
    console.log("ticking")
    setTexts(text.substr(0, tick));
    if (tick % 2 === 0 && tick > text.length) { document.querySelector("#text").classList.toggle("cursor") }
    tick++;
  }

  setInterval(tickFunction, 250)
}

let switchTheme = () => {
  document.documentElement.classList.toggle("dark-mode");
}
