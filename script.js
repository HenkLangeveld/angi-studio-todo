const subLists = document.querySelectorAll(".js-accordion")

function handleAccordionClick() {
  event.preventDefault();

  if(this.style.getPropertyValue('--rotation') === '180deg') {
    this.style.setProperty('--rotation', '0deg');
  } else {
    this.style.setProperty('--rotation', '180deg');
  };
  accordionItem = this.querySelector(".js-accordion__item");
  accordionItem.classList.toggle("is-collapsed")

}

subLists.forEach(list => {
  list.addEventListener("click", handleAccordionClick)
});