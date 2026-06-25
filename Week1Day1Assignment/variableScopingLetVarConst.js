const genderType = "male"
//const genderType = "female"

function printGender()
{
    let color = "brown"
    if (genderType.startsWith("female"))
    {

        var age = 30;
        let color = "pink"; 
        console.log("color inside if block "+color); 

    }

    console.log("Age : "+age); //

    console.log("color outside if block "+color); 

    
}

printGender();
console.log("Global Gender Type: " + genderType);