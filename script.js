
function currentGrade(){
    var homework = document.getElementById("homework").value;
    var homeworkWeight = document.getElementById("hwWeight").value;  // "90"
    var hwWeight = parseInt(homeworkWeight) * .01;  // 90
    var hwArr = split(homework);
    var hwAvg = averageGrade(hwArr) * hwWeight;

    var classwork = document.getElementById("classwork").value;
    var classworkWeight = document.getElementById("cwWeight").value;
    var cwWeight = parseInt(classworkWeight) * .01;
    var cwArr = split(classwork);
    var cwAvg = averageGrade(cwArr) * cwWeight;

    var participation = document.getElementById("participation").value;
    var participationWeight = document.getElementById("pWeight").value;
    var pWeight = parseInt(participationWeight) * .01;
    var pArr = split(participation);
    var pAvg = averageGrade(pArr) * pWeight;

    var tests = document.getElementById("tests").value;
    var testWeight = document.getElementById("tWeight").value;
    var tWeight = parseInt(testWeight) * .01;
    var tArr = split(tests);
    var tAvg = averageGrade(tArr) * tWeight;

    var projects = document.getElementById("projects").value;
    var projectWeight = document.getElementById("prWeight").value;
    var prWeight = parseInt(projectWeight) * .01;
    var prArr = split(projects);
    var prAvg = averageGrade(prArr) * prWeight;

    var finalGrade = hwAvg + cwAvg + pAvg + tAvg + prAvg;

    console.log(finalGrade)

    document.getElementById("currentGrade").innerHTML = "Final grade: " + finalGrade;

    return finalGrade;

}

function split(str){
    var arr = str.split(",");
    for(var i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function averageGrade(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    var avg = sum / arr.length
    return avg;
}


function calculateFinalGrade() {
    var curGrade = currentGrade();
    var gradeWanted = document.getElementById("gradeWanted").value;
    var fWeight = document.getElementById("finalWeight").value;
    var finalWeight = fWeight * .01;
    var currentWeight = 1 - finalWeight;
    var weightedCurrent = (curGrade) * (currentWeight);
    var requiredFinalGrade = (gradeWanted - weightedCurrent) / finalWeight;

    document.getElementById("calculateFinalGrade").innerHTML = "Grade Required: " + requiredFinalGrade;
    return requiredFinalGrade;


}



//hello Sammy, make sure to figure out the math for Final Grade Calculator, and find a way to get currentGrade down into the Final
//grade calculator function. After that, start working in CSS to style it up!!!!~!