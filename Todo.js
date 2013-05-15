$(function(){
	$("#btnAddList").click(function()
	{
		var value=$("#appendedInputButtons1").val();
		$("#listTable").append("<tr><td class='nameList'>"+value+"</td><tr>");
		$("#appendedInputButtons1").val("");
		$("#listItemInput").removeClass("invis");
		//bindClick();
		$(".nameList").removeClass("selected");
		$(this).addClass("selected");
	})
	
	// function bindClick(){
	// $(".nameList").unbind("click").click(function(){
		// $(".nameList").removeClass("selected");
		// $(this).addClass("selected");
	
	// })
	// }
	
	$("#btnAddItem").click(function()
	{	
		var value=$("#appendedInputButtons2").val();
		$("#itemTable").append("<tr id='tableRow'><td><input type='checkbox' style='width: 30px'></td><td>"+value+"</td><td><button class='close' style='width: 10px'>&times;</button></td><tr>");
		$("#appendedInputButtons2").val("");
	})
	
	$(".close").click(function()
	{
		$("#itemtable").remove("#tableRow");
	})
})
