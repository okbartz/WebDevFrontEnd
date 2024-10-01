console.log("Objects exercise using F1 examples"); 

var team = {
    teamname: "Mercedes",
    base: "Brackley",
    principal: "Toto Wolff",
    drivers: {
        name: ["Lewis Hamilton", "George Russel"],
        dob: [Date(1985,1,7), Date(1998,2,12)],
        points:[[25,18,0,25,25], [12,10,25,8,10]]
            

        
    },
    

};


//8
let {teamname, base} = team;

console.log(team.teamname, " ",team.base)



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


