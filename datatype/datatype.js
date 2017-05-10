exports.datatype = (value) =>{
  if (typeof value === "string")
  	{
  		return value.length;
    }
    else if (typeof value === "undefined")
    {
    	return "no value";
    }
    else if (typeof value === "boolean")
    {
    	return value;
    }
    else if (typeof value === "number")
    {
    	if (value > 100)
    	{
    		return "Value is greater than 100";
    	}
   else if (value === 100) 
    	{
    			return "Value is equal to 100";
    	}
    	else 
    	{
    		return "Value is less than 100";

    	}
    }
    else if(value === null)
    {
    	return "no value";
    }
     else if (typeof value === "object")
    {
    	if(typeof value[2] === "number" || typeof value[2] === "string" || typeof value[2] ==="boolean")
    	{
         return value[2];
    	}
    	else
    	{
    		return undefined;
    	}
    	
    }
    else if (typeof value === "function")
    {
        return value(true);
    }
    

}
