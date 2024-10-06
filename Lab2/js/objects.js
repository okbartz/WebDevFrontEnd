console.log("Objects exercise using F1 examples"); 

var team = {
    teamname: "Mercedes",
    base: "Brackley",
    principal: "Toto Wolff",
    // drivers: {
    //     name: ["Lewis Hamilton", "George Russel"],
    //     dob: [new Date(1985,1,7),new Date(1998,2,12)],
    //     points:[[25,18,0,25,25], [12,10,25,8,10]]
            

        
    // },
    

};


team.drivers = [ 
    { name: "Lewis Hamilton", dob: new Date(1985, 1, 7) },
    { name: "George Russell", dob: new Date(1998, 2, 15) }
];

team.drivers[0].points = [25, 18, 0, 25];
team.drivers[1].points = [12, 10, 25, 8];

//8

let {teamname, base} = team;

console.log(teamname,base);

let {drivers:[,george]} = team;
console.log(george);


function totalPoints(){



    let arraything = team.drivers.points

let total = 0;

    let i = 0;

    while (i < arraything.length) {
        
        
        let j = 0;

            while (j < arraything[i].length) {
                
                total = total + arraything[i][j]

                

                j++;
            }
    

        i++;
    }
    


    console.log(total)

}

console.log(JSON.stringify(team, null , 4));

let {points:[disqualified,...counted]} = george
let countedpoints = counted.reduce((a, b) => a + b, 0)

console.log(countedpoints);

//arrays exercises begin
console.log("Arrays exercise");

let examplearray = [1, 3, 1, 7, 9];
console.log(examplearray);
console.log(examplearray[1]);
console.log(examplearray.length);

examplearray.sort();

console.log(examplearray);
console.log(examplearray.indexOf(7));

let examplearray1 = examplearray.reverse();
console.log(examplearray1);
examplearray1 = examplearray.pop();
console.log(examplearray1);

var index = examplearray.indexOf(9)

examplearray.splice(index,1);
console.log(examplearray);

console.log("filter, map and reduce")
examplearray = [1,3,1,7,9];
console.log(examplearray);


let filtered = examplearray.filter(x => x < 6);
console.log(filtered);

filtered = examplearray.filter(x => x == 1);
console.log(filtered);

console.log(examplearray);

let squared = examplearray.map(x => x * x);
console.log(squared)

let plus3 = examplearray.map(x => x + 3);
console.log(plus3)

//gets the corresponding chat for the number
let pairs = examplearray.map(x => [x, String.fromCharCode(x + 64)]);
console.log(pairs);

//map returns an array, but what does each element of the array contain? 
// map allows you to transform the form or structure of data, not just the values.

let sumoflist = examplearray.reduce((x,y) => x + y);
console.log(sumoflist)

// reduce works by starting at the beginning (left) of the list and iterating through the list,
//  applying the function defined by the lambda to each element
//   where the first parameter (x) is the accumulated result so far and y is the current element. 

let sumoflist1 = examplearray.reduce((x,y) => x * y);
console.log(sumoflist1)

let findMaxList = examplearray.reduce((x,y) => Math.max(x,y));
console.log(findMaxList)

//1d array compared to normal map which is 2d
let flatmaplist = examplearray.flatMap(x => [x, String.fromCharCode(x + 64)]);
console.log(flatmaplist);


//combing map and reduce -- challenge

let coordinates = [[0,1], [3,4], [-5,12], [2,2]];

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1, 2));
  }

  let corddistance = coordinates.map(([x,y]) => distance(x,y,0,0));
  console.log(corddistance);

  let average = corddistance.reduce((x,y) => x + y)/corddistance.length;
    console.log(average);

  