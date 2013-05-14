$(function(){
	$("#btnAddList").click(function()
	{
		var value=$("#appendedInputButtons1").val();
		$("#listTable").append("<tr><td>"+value+"</td><tr>");
		$("#appendedInputButtons1").val("");
	})
	
	$("#btnAddItem").click(function()
	{
		var value=$("#appendedInputButtons2").val();
		$("#itemTable").append("<tr><td>"+value+"</td><tr>");
		$("#appendedInputButtons2").val("");
	})

})
