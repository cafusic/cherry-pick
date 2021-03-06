(function(picked) {
  function pick(element) {
    if ( "undefined" === typeof element.style ) return ;

    const border = element.style.border;
    element.style.border = "thick solid #0000FF";

    picked.parent = element.parentElement;
    picked.inspect = function() {
      console.log(element);
    };
    picked.unpick = function() {
        element.style.border = border;
    };
  }

  document.addEventListener("mouseover",function(event) {
    picked.unpick();
    pick(event.target);
  });

  document.addEventListener("keyup", function(event) {
    if (event.key == "w" ) {
      picked.unpick();
      pick(picked.parent);
    }

    if (event.key == "q") {
      picked.inspect();
    }
  });
}({
  parent: {},
  inspect: function() {},
  unpick: function() {}
}));
