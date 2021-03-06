# CustomContextMenuJS
Context Menu Simplified For Front End

You want to do add custom contextmenu to some item on your webpage? 
You dont want to bother with styling and other stuff?
Here is an option for you. Simply include CustomContextMenu.js on your page and implement it like this:
```  
CCmenu(Selector, [Array of menu items]); 
```
    
```Selector```: this argument can be a html node like:
```
    document.getElementById("blabla")
```
or a JQuery selector like:
```
$('div')
```
    
```Array of menu items```: this array should contain objects like this one:
```
{item: "some text", callBack: function(targetElement){something to do when clicked} }
```
    
At the end it should look like this:
```
    CCmenu($('.class'), [
  {
      item: "some text", 
      callBack: function(targetElement){
      something to do when clicked
      }},
  {
      item: "some text2", 
      callBack: function(targetElement){
      something to do when clicked2
      }},
  {
      item: "some text3", 
       callBack: function(targetElement){
      something to do when clicked3
      }},
    ]);
```
Here is a working pen for you: http://codepen.io/malipetek/pen/amkzGm

You can include the file by pasting this to head section:
```
<script src="https://cdn.rawgit.com/malipetek/CCmenu.js/master/CustomContextMenu.js"> </script>
```


>Please note that these keywords are occupied by this module in global/window environment: <br/>
>**"CCmenu", "CCmenuCoreObject", "CCmenuGlobalArray".**
>
>Please also note that these CSS classnames will be occupied by inserted CSS: <br/>
>**"rightclickmenu", "rightitem", "rightclickmenu-mobile", "rightitem-mobile", "rightitem:hover".**
