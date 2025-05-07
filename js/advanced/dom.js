// Accessing Elements

// const title = document.getElementById("title");  // it will get the id  
// const title = document.getElementByClassName("heading") , it will return a  HTMLCollection it is different from array and NodeList
// title.id , title.className  we can use it like this

// title.getAttribute('id')  title.getAttribute('class')  // use to get the attributes like : id,class,href,src,alt,title,type,value,name ,placeholder etc...
// title.setAttribute('id','bg-green') // use to set the attribute , rememeber it will over-write the old attribute

// title.style.backgroundColor = "green"  // also we can set the styles 

// title.innerText    ,  'DOM learnig on chai or code'   // exact code
// title.textContent  ,  'DOM learnig on chai or code  test text'  // all the texts
// title.innerHtml    ,  'DOM learnig on chai or code  <span style="display: none;">test text</span>'  // everything inside the tag

// document.querySelector("h2")   , return the first matched tag 
// document.querySelector('#title')  , get the tag which as id="title"
// document.querySelector('.heading') , get the first tag which has class="heading"
// document.querySelector("input[type=password]")  , get the tag which has <input type="password"


// document.querySelectorAll('li') , it will give NodeList(3) [li, li, li] , similar to array but different no map ,slice and other functions

// const tempClassList = document.getElementsByClassName('list-item')  // we need to convert it to an Array
// const myConvertedArray = Array.from(tempClassList)  // to convert it to an array

// traversing 

// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);    // return a html collection
// console.log(parent.children[0].innerHTML)

// for (let index = 0; index < parent.children.length; index++) {
//     console.log(parent.children[index].innerHTML)
// }

// parent.children[0].style.color = 'red'

// console.log(parent.firstElementChild)    // first elemet of the parent
// console.log(parent.lastElementChild)     // last element of the parent   

// const dayOne = document.querySelector('.day')
// console.log(dayOne.parentElement)   // to access the parent node
// console.log(dayOne.nextElementSibling)   // give the sibling element

// console.log("NODES : ", parent.childNodes)


// Creating Elements

// const div = document.createElement('div')
// div.className = "bg-green"
// div.id = "ele_id"                              // its fist get the value then set the value
// div.setAttribute('title', 'deepest_labyrinth')  // best practice , because it directly set the value
// div.style.color = 'red'
// div.style.padding = '12px'
// // div.innerHTML = "hello there..."                         // get the innerHTML and over-write the text
// const addText = document.createTextNode("hello there...")   // it will create the text node
// div.appendChild(addText)                                    // and append it
// console.log(div)

// document.body.appendChild(div)


// Remove Elements


// function addLanguage(langName) {
//     const li = document.createElement('li')
//     // li.innerText = langName    // not optmize
//     li.appendChild(document.createTextNode(langName))   // optmize
//     document.querySelector('.language').appendChild(li)
// }
// addLanguage("python")


// const secondLang = document.querySelector("li:nth-child(2)")
// // secondLang.innerHTML = "golang"
// secondLang.outerHTML = "<li>cpp</li>"   // or we can use this

// const lastLang = document.querySelector('li:last-child')
// lastLang.remove()   // to remove the element