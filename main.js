// Sample for loop
const numArray = [5, -3, 10, 6, 30, 12, 80, 3, 23];
let max = numArray[0];

for(let i = 1; i < numArray.length; i++){
    if(numArray[i] > max){
        max = numArray[i];
    };
};


// Addition function with loop
function addition(numArr){
    let sum = numArr[0];
    for(let i = 1; i < numArr.length ; i++){
        sum += numArr[i]
    }
    return sum;
};

// Exercise 23 code
function renderDiv(){
    // render the div multiple times
    for(i = 1; i < 4; i++){
        cardClass = "card mb-2";
        switch(i){
            case 1:
                cardClass += " bg-primary";
                unitLabel = "Grams";
                unitAbrev = "gm"
                break;
            case 2:
                cardClass += " bg-success";
                unitLabel = "Kilogram";
                unitAbrev = "kg"
                break;
            case 3:
                cardClass += " bg-danger";
                unitLabel = "Ounces";
                unitAbrev = "oz"
                break;
            default:
                cardClass = "";
        };
        document.write(`
            <div class="${cardClass}">
                <div class="card-body">
                    <h4>${unitLabel}</h4>
                    <div id="${unitAbrev}Output">Output</div>
                </div>
            </div>
        `);
    };
    // compute the units
    // hide the div result
    document.getElementById('result').style.visibility = "hidden";
    // creat event listener to show hidden div
    document.getElementById('lbsInput').addEventListener(
        "input", 
        function(e){
            let lbs = e.target.value;
            document.getElementById('result').style.visibility = "visible";
            document.getElementById('gmOutput').innerHTML = lbs/0.00220462;
            document.getElementById('kgOutput').innerHTML = lbs/2.20462;
            document.getElementById('ozOutput').innerHTML = lbs*16;
        }
    );
    // create an event to show the hidden div

};

