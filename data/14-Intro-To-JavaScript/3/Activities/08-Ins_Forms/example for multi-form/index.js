// Select the submit button
var submit = document.getElementsByTagName("button");
function formsubmit() {

  // Prevent the page from refreshing
  event.preventDefault();
  console.log(this.form.getElementsByTagName("input")[0].value);

}

for(i=0; i<submit.length; i++){
submit[i].addEventListener("click",formsubmit)};