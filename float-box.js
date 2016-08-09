(function(w,d){

  var floatBox = {};

  floatBox.init = function(opts){
    var selector = opts.selector || ".floatBox";

    var el = d.querySelector(selector);
    addClass(el,'fbx-box');

    el.style.width = el.clientWidth + 'px';

    var intitalPos = el.offsetTop;

    w.addEventListener('scroll',function(e){

      if( intitalPos < w.scrollY ) {
        addClass(el,'-fbx-sticky');
      }else{
        removeClass(el,'-fbx-sticky');
      }


    });

    function addClass(el,cls){
      if( el.className.indexOf(cls) == -1 ){
        el.className += ' '+cls;
      }

    }

    function removeClass(el,cls){
      var elClass = el.className;
      while(elClass.indexOf(cls) != -1)
           elClass = elClass.replace(cls, '');
      el.className = elClass;
    }

  }

  window.floatBox = floatBox;

}(window,document));

floatBox.init({selector:'.floatBox'});
