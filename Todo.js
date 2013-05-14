$(function(){
	$("#btnAddList").click(function()
	{
		var value=$("#appendedInputButtons1").val();
		$("#listTable").append("<tr><td class='nameList'>"+value+"</td><tr>");
		$("#appendedInputButtons1").val("");
		$("#listItemInput").removeClass("invis");
		bindClick();
	})
	
	function bindClick(){
	$(".nameList").unbind("click").click(function(){
		$(".nameList").removeClass("selected");
		$(this).addClass("selected");
	
	})
	}
	
	$("#btnAddItem").click(function()
	{	
		var value=$("#appendedInputButtons2").val();
		$("#itemTable").append("<tr><td><input type='checkbox'></td><td>"+value+"</td><tr>");
		$("#appendedInputButtons2").val("");
	})
})
