(function(w,d){

  var floatBox = {};

  floatBox.init = function(opts){
    var selector = opts.selector || ".floatBox";
    var el = d.querySelector(selector);
    addClass(el,'fbx-box');
    var initialBottomStop = null;
    var slides = null;
    var data = el.dataset;
    el.style.width = el.clientWidth + 'px';
    var intitalPos = el.offsetTop;

    if( data.bottomstop ){
      initialBottomStop = d.querySelector(data.bottomstop).offsetTop - 20;
    }

    if( data.slides ){
      slides = el.querySelectorAll('div');
      console.log(slides);
      for(var i = 0;i<slides.length;i++){
        slides[i].style.display = 'none';
      }
      slides[0].style.display = 'block';
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


      if(slides){
        for(var i = 0;i<slides.length;i++){
          slides[i].style.display = 'none';
        }
        if(getScrollPercent() > 50){
          slides[1].style.display = 'block';
        }else{
          slides[0].style.display = 'block';
        }
      }


    });

    function getScrollPercent() {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return h[st]||b[st] / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }

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
