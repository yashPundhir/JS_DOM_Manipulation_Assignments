//Solution Script of Problem Statement 1

let upperPart = document.querySelector(
	".side-bar .crayons-card .crayons-subtitle-2"
);
upperPart.innerHTML = "Yash Pundhir";
let lowerPart = document.querySelector(
	".side-bar .crayons-card .color-base-70"
);
lowerPart.innerHTML = "I Write Code";

//Solution Script of Problem Statement 2

let product = [];
let data = document.querySelectorAll(
	".main .as-imagegrid .as-imagegrid--7up .row .as-imagegrid-item > :first-child .as-imagegrid-item-title"
);
for (let item of data) {
	product.push(item.textContent);
}
let prod = [];
for (let item of product) {
	let change = item.split(" ");
	prod.push(change[0]);
}
console.log(prod);

//Solution Script of Problem Statement 3

let faqParent = document.createElement("section");
faqParent.className = "parent";
document
	.querySelector(
		".hcfe-content .primary-container .page-width-container .main-content .no-article-survey .accordion-homepage"
	)
	.appendChild(faqParent);
let faq = document.createElement("h3");
faq.textContent = "My New FAQ";
faqParent.appendChild(faq);

//Solution Script of Problem Statement 4

let phoneNumber = document.querySelector(
	"#footer .container-infinite .container-text .contact-us .customer-support .one-tel-number"
);
phoneNumber.innerText = "+91 8445727388";

//Solution Script of Problem Statement 5
//still doubtful (why does the buy now content disappear)

let mainPart = document.getElementById("smartphone-deals");
let cards = mainPart.querySelectorAll(".listing .mytabs");
let card = cards[5].querySelector(".diwali-deals-product-sale-pro");
let button = document.createElement("a");
button.setAttribute("href", "#");
button.setAttribute("class", "diwali-deals-product-sale-btn");
button.innerText = "Check out";
card.append(button);

//Solution Script of Problem Statement 6

//Solution Script of Problem Statement 7

//Solution Script of Problem Statement 8

let langBox = document.querySelector(".L3eUgb .qarstb .vcVZ7d #SIvCob");
let lang = langBox.querySelectorAll("a");
for (let i = 0; i < lang.length; i = i + 2) {
	langBox.removeChild(lang[i]);
}

//Solution Script of Problem Statement 9

let heading = document.querySelector(
	".wf-section .grid-container .content-width-extra-large .display-heading-1"
);
heading.style.fontFamily = "monospace";
heading.style.color = "#B1361E";

//Solution Script of Problem Statement 10

//Solution Script of Problem Statement 11

let imageBox = document.querySelector(".header .wrapper .logo .icon");
imageBox.style.backgroundImage =
	"url('https://ineuron.ai/images/ineuron-logo.png')";
imageBox.style.marginLeft = "10px";

//Solution Script of Problem Statement 12

let button = document.querySelector(
	".application-main .d-md-flex .flex-auto .d-md-flex div div main div .js-notice div div section .js-braintree-encrypt .btn"
);
button.style.backgroundColor = "red";

//Solution Script of Problem Statement 13

let heading = document.querySelector(".fl-heading-text");
heading.innerHTML = "JSBOOTCAMP";

//Solution Script of Problem Statement 14

let heading = document.querySelector(".HotDealsAll__Heading__2fIbe");
heading.style.fontSize = "80px";

//Solution Script of Problem Statement 15

//Solution Script of Problem Statement 16

let heading = document.querySelector(".section-title_title__VEDfK");
heading.innerHTML = "Start with Scratch";

//Solution Script of Problem Statement 17

//Solution Script of Problem Statement 18

let footer = document.querySelector(".p-footer");
footer.style.backgroundColor = "orange";

//Solution Script of Problem Statement 19

let image = document.querySelector(".navbar-brand img");
let src = image.currentSrc;
console.log(src);

//Solution Script of Problem Statement 20

content = document.querySelector(
	".productcard .index__three-products-1-mb .section-box .desc"
);
content.style.color = "orange";
