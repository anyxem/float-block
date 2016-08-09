(function(w,d){

  var floatBox = {};

  floatBox.init = function(opts){
    var selector = opts.selector || ".floatBox";

    var el = d.querySelector(selector);
    addClass(el,'fbx-box');
    var initialBottomStop = null;

    var data = el.dataset;

    console.log(data);

    el.style.width = el.clientWidth + 'px';
    el.style.height = el.clientHeight + 'px';

    var intitalPos = el.offsetTop;

    if( data.bottomstop ){
      initialBottomStop = d.querySelector(data.bottomstop).offsetTop - 20;
    }

    w.addEventListener('scroll',function(e){

      if( intitalPos < w.scrollY ) {
        addClass(el,'-fbx-sticky');

        if( initialBottomStop !== null ){
          if(w.scrollY+el.clientHeight  >  initialBottomStop ){
            el.style.top = '-'+ (w.scrollY+el.clientHeight - initialBottomStop) +'px';
          }else{
            el.style.top = '0'
          }
        }

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
