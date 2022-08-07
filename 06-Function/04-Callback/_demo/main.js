// Main Function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
//CallBack : Yes
function showOk() {
  alert('You agreed.');
}
//Callack: No
function showCancel() {
  alert('You canceled the execution.');
}
// functions showOk, showCancel are passed as arguments to ask
ask('Do you agree?', showOk, showCancel); 