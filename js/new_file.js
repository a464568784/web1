window.onload=function(){
	var ahotWord=document.getElementsByClassName("hotword");
	var aimg1=document.getElementsByClassName("img-1");
	var aimg2=document.getElementsByClassName("img-2");
	
	ahotWord[1].onmousemove=function(){
		aimg1[0].style.display='none';
		aimg2[0].style.display='block';
		ahotWord[1].style.color='coral';
		ahotWord[0].style.color='#000000';
		ahotWord[1].style.borderBottom='solid coral';
		ahotWord[0].style.borderBottom='none';
	}
	ahotWord[0].onmousemove=function(){
		aimg1[0].style.display='block';
		aimg2[0].style.display='none';
		ahotWord[0].style.color='coral';
		ahotWord[1].style.color='#000000';
		ahotWord[0].style.borderBottom='solid coral';
		ahotWord[1].style.borderBottom='none';
	}
	
	var aSgin=document.getElementById("sgin");
	var aSginIn=document.getElementsByClassName("sginin")[0];
	var aCloseSgin=document.getElementById("closeSgin");
	var aJoin=document.getElementById("join");
	var aJoinIn=document.getElementsByClassName("joinin")[0];
	var aCloseJoin=document.getElementById("closejoin");
	
	aSgin.onclick=function(){
		aSginIn.style.display='block';
	}
	aCloseSgin.onclick=function(){
		aSginIn.style.display='none';
	}
	aJoin.onclick=function(){
		aJoinIn.style.display='block';
	}
	aCloseJoin.onclick=function(){
		aJoinIn.style.display='none';
	}
	if (screen && screen.width > 800) {
  	drag($(".joininTop"));
}
	drag($(".sgininTop"));

	
	//验证注册
	$('.Jwarning').css({'color':'red'});
		$('input[name=username]').blur(function(){
			if (this.value.length<6) {
				$(this).data({'s':0})
				$('#lab1').css({'opacity':'1'})
				$('#join1').addClass('has-error')
			} else{
				$('#lab1').css({'opacity':'0'})
				$(this).data({'s':1})
				$('#join1').removeClass('has-error')
				$('#join1').addClass('has-success')
			}
		});
		$('input[name=password]').blur(function(){
			if (this.value.length<8) {
				$(this).data({'s':0})
				$('#lab2').css({'opacity':'1'})
				$('#join2').addClass('has-error')
			} else{
				$(this).data({'s':1})
				$('#lab2').css({'opacity':'0'})
				$('#join2').removeClass('has-error')
				$('#join2').addClass('has-success')
			}
		});
		$('input[name=repassword]').blur(function(){
			l1=$('input[name=password]').val();
			l2=this.value;
			
			if (l1!=l2) {
				$(this).data({'s':0})
				$('#lab3').css({'opacity':'1'})
				$('#join3').addClass('has-error')
			} else{
				$(this).data({'s':1})
				$('#lab3').css({'opacity':'0'})
				$('#join3').removeClass('has-error')
				$('#join3').addClass('has-success')
			}
		})
		$('input[name=email]').blur(function(){
			val=this.value;
			
			if (!val.match(/^\w+@\w+\.\w+$/i)) {
				$(this).data({'s':0})
				$('#lab4').css({'opacity':'1'})
				$('#join4').addClass('has-error')
			} else{
				$(this).data({'s':1})
				$('#lab4').css({'opacity':'0'})
				$('#join4').removeClass('has-error')
				$('#join4').addClass('has-success')
			}
		})
		$('form').submit(function(){
			$('.jointxt').blur();
			
			tot=0;
			
			$('.jointxt').each(function(){
				tot+=$(this).data('s');
			})
			 if(tot!=4){
			return false;
			}else{
				alert('注册成功')
			}
		});
	
}

function drag(obj){
			obj.bind("mousedown", Sstart);
			
			function Sstart(event){
				deltaX=event.clientX-obj.parent().offset().left;
				deltaY=event.clientY-obj.parent().offset().top;
				
				$(document).bind("mousemove", Smove);
				$(document).bind("mouseup", Sstop);
				
				
			}
			
			function Smove(event){
				obj.parent().css({
					"left":(event.clientX-deltaX)+"px",
					"top":(event.clientY-deltaY)+"px"
				})
				return false;
			}
			
			function Sstop(){
				$(document).unbind("mousemove", Smove);
				$(document).unbind("mouseup", Sstop);
			}
		}
