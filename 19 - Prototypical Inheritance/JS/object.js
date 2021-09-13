// Notes:    
    let input = "age"; 
    let obj = {
        name_:"csg",
        age:20
    }    
    // 1) use of ? in chaining.    
        console.log(obj["name_"].length); // Gives the length of the string value.
        // console.log(obj["name"].length); // throw error as 'name' key is undefined in obj and we get the length of the undefined.
        console.log(obj["name"]?.length); // Using of '?' doesn't throw error, It will gives the length of string(in this case) or "undefined" if the key is not awailable

    // 2) Use of delete keyword
        delete obj.name_;  
        console.log(obj);  
    
    obj = {
        name_:"csg",
        age:20
    }
    // 3) for-in loop
        for(key in obj){
            console.log(`${key} -> ${obj[key]}`);
        }    


    let laptop1 = {
        cpu: "i5",
        ram: "6GB",
        os: "window",
        compare: function(other){
            if(laptop1.cpu>other.cpu)
                console.log(laptop1);
            else console.log(other) 
            //or 
            if(this.cpu>other.cpu)
                console.log(this);  
            else console.log(other)    
        }
    } 
    let laptop2 = {
        cpu: "i7", 
        ram: "8GB",
        os: "linux",
        compare: function(other){
            if(this.cpu>other.cpu)
                console.log(this);  
            else console.log(other)    
        }, 
    }

    laptop1.compare(laptop2);    
    laptop2.compare(laptop1); 

    laptop1_copy = Object.create(laptop1) // To create the new object from the prototype of existing object    

    console.log(laptop1_copy); //It only have the protype of an parent object. 