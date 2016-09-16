# CustomContextMenuJS
ContextMenuSimplifiedForNoobs

You want to do add custom contextmenu to some item on your webpage? 
You dont want to bother with styling and other stuff?
Here is an option for you. Simply include CustomContextMenu.js on your page and implement it like this:
  CCmenu(Selector, [Array of menu items]);
    Selector: this can be a html node like document.getElementById("blabla"), or a Jquery selector like $('div').
    Array of menu items: this array should contain objects like this one:
    {item: "some text", callback: function(targetElement){something to do when clicked} }.
    
    At the end it should look like this:
```
    CCmenu($('.class'), [
  {
      item: "some text", 
      callback: function(targetElement){
      something to do when clicked
      }},
  {
      item: "some text2", 
      callback: function(targetElement){
      something to do when clicked2
      }},
  {
      item: "some text3", 
       callback: function(targetElement){
      something to do when clicked3
      }},
    ]);
```
