console.log('in script js');

$(document).ready(onReady);

function onReady( ) {
    console.log('so ready!');

   let titleHeader = $('h1');
   // let titleHeader = <h1>.. </h1>

   console.log('title header is', titleHeader);
   // console.log('titleHeader', <h1>....</h1>)
}


//DOM
//<li> id= "madame-li-element">Getters and Setters </li>
//<li class= first-and-last >
// id is only once class u can use more than once
function onReady( ) {
    console.log('so ready!');


   let allListItems= $('li');
   console.log('li elements', allListItems)

  let JustOneListItem = $('#madame-li-element');
  // let justthatONlistItem =<li>...<li>
  JustOneListItem.text('DOM Manipulation');
// <li>... </li>.text('dom manipulatiors)
// . --> class
  $('.first-and-last').css('color', 'blue');
  // [<li>,<li>].css('color','blue)
  
  $('ul').append('<li>Forms</li>');
// append means im going to put something in the end 

  
  $('the-button').on('click', whenIClickTheButton);
  
  function whenIClickTheButton() {
    console.log('someone clicked me!'); }
    $('li').last().remove();
//getter: get the text of an element (grabbing)
    let titleText=$('h1').text();
    console.log('title of text is', titleText);



    //setter: set the text of an element

let louderTitleText=titleText.toUpperCase();
//gaiman jquery intro' 
$('h1').text(louderTitleText)
//gaiman jquery intro
  } 


 
 //end of onReady()         //                  
