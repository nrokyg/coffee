// JavaScript Document
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(function() {
  var h = $(window).height();
 
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});