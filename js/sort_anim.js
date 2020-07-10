///////////////sort anim///////////////////
class sort_anim {
	constructor(title2,data2,selector2) {
	
		this.title = title2;
		this.data = data2;
		this.selector = selector2;
		this.font_size = "12px";
		this.col_w = "col s1 l1";
		this.col_h = "20px";
		this.speed = 2000;
        this.step = 0;
        this.delay = 1400;

	} //end constructor
    
    gen()
    {
        var t = this;
        var data = t.data;
        var sel = t.selector;
        var w = t.col_w;
        var h = t.col_h;
        var fs = t.font_size;
        var col_num = data.length-1;
        
        //remove all
        $('.ycolumn').remove();
        $(sel).html("<h2>"+t.title+"</h2>");
        //genrate
        for (var i = 0; i <= col_num; i++) 
        {
            //create div with w as class and ys+i as its id for later selection
            $('<div class="'+'ycolumn '+w+' ys'+i+'">'+data[i]+'<div/>')
            .css({
              'height':h,
              'font-size': fs
            }).appendTo(sel);
        }//end for
     
        
        
        
    }//end gen 

          
    ychange(i,targ,yclass)
    {

        $(".ys"+i).addClass(yclass);
        $(".ys"+targ).addClass(yclass); 

    }//end move_to
    
    
    
}//end sort anim

///////////////end sort anim///////////////////