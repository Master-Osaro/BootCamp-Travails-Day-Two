const data = require("../datatype");

describe("Datatype functions",function(){

    it("should return string length", function(){
        expect(data.datatype("hello")).toEqual(5);
    });
    it("should return the length of an empty string", function(){
    	expect(data.datatype("")).toEqual(0)
    });
    it("should return no value with null as input", function(){
        expect(data.datatype(null)).toEqual("no value");
    });
    it("should return less than 100 with 44 as input", function(){
        expect(data.datatype(44)).toEqual("Value is less than 100");
    });
    it("should return greater than 100 with 101 as input", function(){
        expect(data.datatype(101)).toEqual("Value is greater than 100");
    });
    it("should return equal to 100 with 100 as input", function(){
    	expect(data.datatype(100)).toEqual("Value is equal to 100");
    });
    it("should return bool value if value = bool", function(){
        expect(data.datatype(true)).toEqual(true);
    });
    it("should return 2", function(){
        expect(data.datatype([4,3,2])).toEqual(2);
    });
    it("should not be defined", function(){
       expect(data.datatype([4, 9])).not.toBeDefined();
   });
});