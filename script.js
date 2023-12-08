
let image = document.getElementById("image");

let onMouseMove = (e) => {
    let paragraph = document.getElementById("paragraph");
   /*  paragraph.textContent += "Hi"; */
    let dot = document.createElement("div");
    dot.className = "dot";
    document.body.appendChild(dot);
    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
}

image.addEventListener("mousemove", onMouseMove);