var showData = () => {
    event.preventDefault();

    let weight = $("#weight").val();
    let age = $("#age").val();
    let metabolism = [];
    $("div input[name='metabolism']").each(function(){
        if($(this).is(":checked")){
            metabolism.push($(this).attr('value'));
        }
    });
    let goal = [];
    $("div input[name='goal']").each(function () {
        if ($(this).is(":checked")) {
            goal.push($(this).attr('value'));
        }
    });
    metabolism = metabolism[0];
    goal = goal[0];
    console.log(weight, age, metabolism, goal);

    var minCal, normCal, rate, goalCal;
    minCal = weight * 11;
    console.log(minCal);

    if(metabolism == 'Slow'){
        if(age>=20 && age<=29){
            normCal = (minCal * 0.40) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 30 && age<= 39) {
            normCal = (minCal * 0.35) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 40 && age <= 49) {
            normCal = (minCal * 0.30) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 50 && age <=59) {
            normCal = (minCal * 0.25) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
    }
    else if( metabolism == "Medium"){
        if (age >= 20 && age <= 29) {
            normCal = (minCal * 0.45) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 30 && age <= 39) {
            normCal = (minCal * 0.40) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 40 && age <= 49) {
            normCal = (minCal * 0.35) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 50 && age <=59) {
            normCal = (minCal * 0.30) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }        
    }
    else if( metabolism == 'Fast'){
        if (age >= 20 && age <= 29) {
            normCal = (minCal * 0.50) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 30 && age <= 39) {
            normCal = (minCal * 0.45) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 40 && age <= 49) {
            normCal = (minCal * 0.40) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        }
        if (age >= 50 && age <= 59) {
            normCal = (minCal * 0.35) + minCal;
            console.log("Everyday active calories needed")
            console.log(normCal);
        } 
    }

    //--------------------------------------------------------------------------

    //goal calculations
    if (goal == "Lose") {
        goalCal = normCal - 500;
        console.log("If you are trying to lose weight your target goal is: ")
        console.log(goalCal);
    }
    else if (goal == "Maintain") {
        goalCal = normCal;
        console.log("If you are trying to maintain current weight your target goal is: ")
        console.log(goalCal);
    }
    else if (goal == "Gain") {
        goalCal = normCal + 500;
        console.log("If you are trying to gain weight your target goal is: ")
        console.log(goalCal);
    }
      //-----------------------------------------------------------------------------

    //New global variables 
    var fatCal, proteinCal, carbCal, fatG, proteinG, carbG, unit;

    //Macro Calculations

    unit = goalCal / 6;
    fatCal = unit;
    proteinCal = unit * 2;
    carbCal = unit * 3;

    fatG = fatCal / 9;
    proteinG = proteinCal / 4;
    carbG = carbCal / 4;

    // //body fat percent calculations optional
    // var bodyfat, targetfat, currentfat, massneeded, idealweight, lossneeded;

    console.log("**********************************************************");
    console.log("Your target caloric intake is " + goalCal.toFixed(2) + ".");
    console.log("You can consume " + fatCal.toFixed(2) + " calories from fat.");
    console.log("You can consume " + fatG.toFixed(2) + " grams from fat.");
    console.log("**********************************************************");
    console.log("You can consume " + proteinCal.toFixed(2) + " calories from protein.");
    console.log("You can consume " + proteinG.toFixed(2) + " grams from protein.");
    console.log("**********************************************************");
    console.log("You can consume " + carbCal.toFixed(2) + " calories from carbohydrates.");
    console.log("You can consume " + carbG.toFixed(2) + " grams from carbohydrates.");
    console.log("**********************************************************");

    //Display results on html
    var cardDiv = $("<div>");

    var cardTitle = $("<p>").text("Your target caloric intake is " + goalCal.toFixed(2) + ".");
    var line1 = $("<p>").text("You can consume " + fatCal.toFixed(2) + " calories from fat.");
    var line2 = $("<p>").text("You can consume " + fatG.toFixed(2) + " grams from fat.");
    var line3 = $("<p>").text("You can consume " + proteinCal.toFixed(2) + " calories from protein.");
    var line4 = $("<p>").text("You can consume " + proteinG.toFixed(2) + " grams from protein.");
    var line5 = $("<p>").text("You can consume " + carbCal.toFixed(2) + " calories from carbohydrates.");
    var line6 = $("<p>").text("You can consume " + carbG.toFixed(2) + " grams from carbohydrates.");

    cardDiv.append(cardTitle).append(line1).append(line2).append(line3).append(line4).append(line5).append(line6);

    $("#results").html(cardDiv);



    

}