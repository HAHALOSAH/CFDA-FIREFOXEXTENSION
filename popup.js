document.getElementById("go").addEventListener("click", function () {
  var firstHref = "https://justin226.github.io/cfda";
  
  console.log(firstHref);
  
  var creating = browser.tabs.create({
    url:firstHref,
    active:true
  });
    
});
