function $(id){
	return document.getElementById(id);
}
window.onload = function(){
	code();	
	}
        $('change').onclick=code;
                function code(){
    var num=parseInt(Math.random()*9000+1000);
    	$('code').src='code.php?num='+num;
	}
