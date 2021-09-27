function init() {


    
  // this function is called when the page load is complete and therefore all DOM elements will have been created
  /*var targetContainer = document.getElementById('app');
  //alert(VueContentClone);
  // now inject the content loaded from the VueContent.html document into the DIV that is the designated container
  targetContainer.appendChild(VueContentClone);
  //now that all Vue.js application related HTML elements are in the DOM, we can initialize Vue.js*/
  $("#app").load("index.html");
  //alert('kya hai?');
  //initVue();
}/* init */

function resetPollInternval(e){
  $("#app").load("index.html");
  var src = e.getSource();
  var poll = src.findComponent("poll1");
  if(pol1 != null)
     pol1.setInterval(-1);
}