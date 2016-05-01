function newRequirments(coursesTaken, requiredCourses) 
{
	var newCourse = clone(requiredCourses); // copy object
	
	for (var ii in coursesTaken)
	{
		var course = coursesTaken[ii];
		
		for (var jj in course)
		{
			if (isInArray(course[jj],newCourse[ii]))
			{
				delete newCourse[ii][jj];
			}
		}
	}
	return newCourse;
}

function isInArray(value, array) 
{
	for(var i = 0; i < array.length; i++)
	{
		if(value === array[i])
		{
			return true
		}
		
	}
	return false;
}



function clone(obj) {
    if (null === obj || "object" !== typeof obj)
    {
    	return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj)
    {
        if (obj.hasOwnProperty(attr))
        {
        	copy[attr] = obj[attr];
        }
    }
    return copy;
}

