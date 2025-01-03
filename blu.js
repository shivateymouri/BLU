const _menu = document.querySelector("ul");
const _menuBtn = document.getElementById("menuBtn");
const _mobileMenuBox = document.createElement("div");
const closeBtn = document.createElement("span");
const _body = document.body;
const _btn = document.getElementById("btn");
const _btnIcon = document.getElementById("arrow");
const _btnTwo = document.getElementById("btnTwo");
const _accordian = document.getElementsByClassName("acoordian");
const _accordianBox = document.querySelectorAll(".accTab");
const accBox = document.createElement("p");
const _video = document.querySelector("#card-video");
const _front = document.querySelector("#card-front");
const _back = document.querySelector("#card-back");
const _colorBoxes = document.querySelectorAll(".colorBox");
const _accordianbox = document.querySelectorAll(".accordian-box");
// element select section
let menuContainerIsOpen = false;
_menuBtn.addEventListener("click", () => {
  if (!menuContainerIsOpen) {
    _mobileMenuBox.classList.add(
      "bg-blue-100",
      "h-screen",
      "w-1/2",
      "absolute",
      "top-0",
      "right-0"
    );
    _menu.classList.remove("hidden");
    _menu.classList.add("w-full", "flex", "flex-col", "mt-10", "items-center");
    closeBtn.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
`;
    closeBtn.classList.add("absolute", "text-blue-500", "top-2", "right-2");
    _mobileMenuBox.appendChild(_menu);
    _body.appendChild(_mobileMenuBox);
    menuContainerIsOpen = true;
    _mobileMenuBox.appendChild(closeBtn);
  }
});
closeBtn.addEventListener("click", () => {
  _mobileMenuBox.style.width = 0;
  menuContainerIsOpen = false;
  _menu.classList.add("hidden");
  closeBtn.classList.add("hidden");
});
//////////////////////////////////
_btn.addEventListener("mousemove", () => {
  _btn.addEventListener("mouseleave", () => {
    _btn.classList.remove("w-[100px]", "bg-blue-600");
  });
  _btn.classList.add("w-[100px]", "bg-blue-600");
});

_btnTwo.addEventListener("mousemove", () => {
  _btnTwo.addEventListener("mouseleave", () => {
    _btnTwo.classList.remove("w-[100px]", "bg-blue-600");
  });
  _btnTwo.classList.add("w-[100px]", "bg-blue-600");
});
////////////////////////////////////
let containerOpen = false;
_accordianBox.forEach((val, i) => {
  val.addEventListener("click", () => {
    if (!containerOpen) {
      val.style.height = "215px";
      val.style.transition = ".4s";
      containerOpen = true;
      _accordianbox[i].style.display = "block";
    } else {
      val.style.height = "85px";
      val.style.transition = ".4s";
      containerOpen = false;
      _accordianbox[i].style.display = "none";
    }
  });
});
/////////////////////////////////////

_colorBoxes.forEach((item) => {
  item.addEventListener("click", () => {
    const color = item.dataset.color;
    const videoPath = `img/card-${color}-video-cbg.webm`;
    const frontPath = `img/card-${color}-render-front.png`;
    const backPath = `img/card-${color}-render-back.png`;
    _video.src = videoPath;
    _front.src = frontPath;
    _back.src = backPath;
  });
});
