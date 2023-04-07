//check input
const inputField = document.getElementById("inputField");
const buttonInput = document.getElementById("buttonInput");


let content
inputField.addEventListener("input", () => {
  if (inputField.value) {
    buttonInput.textContent = "Search";
    content = true
    return content
  } else {
    buttonInput.textContent = "Add book";
    showBook.
    content = false
    return content
  }
});


const popup = document.getElementById('popup')

const addingBook = document.getElementById("addingBook")
const cancelBook = document.getElementById("cancelBook")

buttonInput.addEventListener("click", () => {

  if(content){
    searchBook()
  }else{
    popup.classList.remove("hidden")

  }
})

cancelBook.addEventListener("click", () => {
    popup.classList.add("hidden")
})

addingBook.addEventListener("click", addBook)

const showBook = document.querySelector(".show-book")
function addBook(){
    const nameValue = document.querySelector(".name-value")
    const resumeValue = document.querySelector(".resume-value")
    const yearValue = document.querySelector(".year-value")

    const outer = document.createElement("div")
    outer.classList.add("ml-7", "flex", "justify-between", "outer")

    const wrap = document.createElement("div")
    const nama = document.createElement("h3")
    nama.textContent = nameValue.value
    const resume = document.createElement("p")
    resume.textContent = resumeValue.value
    const year = document.createElement("p")
    year.textContent = yearValue.value

    const labelNew = document.createElement("label")
    labelNew.classList.add("flex", "flex-col")
    const inputNew = document.createElement("input")
    inputNew.type = "checkbox"
    const spanNew = document.createElement('span')
    spanNew.textContent = "Done Reading"

    wrap.append(nama, resume, year)

    labelNew.append(inputNew, spanNew)
    outer.append(wrap, labelNew)

    showBook.append(outer)

    nameValue.value = " "
    resumeValue.value = " "
    yearValue.value = " "
    popup.classList.add("hidden")
}


const searchBook = () => {
  const trimText = inputField.value.toLowerCase().trim()
  const booksList = showBook.querySelectorAll(".outer")

  booksList.forEach((book) => {
    const name = book.querySelector("h3").textContent.toLowerCase().trim()
    const resume = book.querySelector("p:first-of-type").textContent.toLowerCase().trim()
    const year = book.querySelector("p:last-of-type").textContent.toLowerCase().trim()

    if(name.includes(trimText) || resume.includes(trimText) || year.includes(trimText)){
      book.style.display = "flex"
    }else{
      book.style.display = "none"
    }
  })
}

const checkboxes = document.querySelectorAll('input[type="checkbox"')

checkboxes.forEach((boxes) => {
  boxes.addEventListener('click', () => {
    const outerDiv = boxes.parentNode.parentNode

    if(boxes.checked){
      outerDiv.remove();
    }
  })
})