var parseCourseHistory = document.getElementById("parseCourse");

parseCourseHistory.addEventListener("click",function(){

	var data = (document.getElementById("courseHistory").value);
	var myRegexp = /([A-Z]{3} \d{3})/g;

	var courseCodes = data.match(myRegexp);
	alert(courseCodes);
});
