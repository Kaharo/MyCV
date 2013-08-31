var chartData = [
    {
		value : 6.0,                
		color: "#D97041"
	},
	{
		value : 6.5,
		color: "#C7604C"
	},
	{
		value : 5.0,
		color: "#21323D"
	},
	{
		value : 6.5,
		color: "#9D9B7F"
	}
];
// IELTS color
// var chartData = [
// 	{
// 		value : 6.0,                
// 		color: "#00a7ac" //"#D97041"
// 	},
// 	{
// 		value : 6.5,
// 		color: "#e01837" //"#C7604C"
// 	},
// 	{
// 		value : 5.0,
// 		color: "#ba5fa3" //"#21323D"
// 	},
// 	{
// 		value : 6.5,
// 		color: "#f5901c" //"#9D9B7F"
// 	}
// ];
var options ={
    
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 3,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 1,
	//Number - The centre starting value
	scaleStartValue : 4,
	
    
	//Boolean - Show line for each value in the scale
	scaleShowLine : true,
	
	//String - The colour of the scale line
	scaleLineColor : "rgba(0,0,0,.1)",
	
	//Number - The width of the line - in pixels
	scaleLineWidth : 1,
	
	//Boolean - whether we should show text labels
	scaleShowLabels : true,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
    
    scaleFontSize : 10,
};
var myPolarArea = new Chart(document.getElementById("canvas_for_IELTS").getContext("2d")).PolarArea(chartData, options);