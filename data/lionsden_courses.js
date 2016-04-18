var request = require("request");

request.post({
  uri: "https://lionsden.molloy.edu/ICS/Course_Search/Course_Search.jnz?portlet=Course_Schedules&screen=Advanced+Course+Search&screenType=next",
  method: "POST",
  form: {
  	
  	pg0$V$ddlTerm: "2016;FA", //term
  	pg0$V$ddlDept: "", //subject
  	pg0$V$ddlCourseFrom: "", //from
  	pg0$V$ddlCourseTo: "", //to
  	pg0$V$ddlTitleRestrictor: "",//beginswith
  	pg0$V$ddlCourseRestrictor: "",//coursecode
  	pg0$V$ddlDivision: "", //division
  	pg0$V$ddlMethod: "",//method
  	pg0$V$ddlTimeFrom: "",//timefrom
  	pg0$V$ddlTimeTo: "",//timeto
  	pg0$V$days: "rdAnyDay",//meets any day
  	pg0$V$ddlFaculty: "", //faculty
  	pg0$V$ddlCampus: "",//campus
  	pg0$V$ddlBuilding: "",//building
  	pg0$V$ddlSecStatus: "OpenFull",//sectionstatus
  	pg0$V$txtMin: "",
  	pg0$V$txtMax: "",
  	pg0$V$btnSearch: "Search"	
 
   }

}, function(error, response, body) {
  console.log(body);
});