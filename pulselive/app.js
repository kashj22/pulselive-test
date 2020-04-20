
let myData;
fetch("player-stats.json")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    //place the json data in myData array
    myData = data.players;
    console.log(myData);
    

    //build dropdown menu
    let buildOptions = (d) => {

      let select = document.getElementById("select");
      let option1 = document.createElement("option");
      option1.value = 0;
      option1.innerHTML = "Select a player";
      select.appendChild(option1);
      //for each player, create an option element
      d.forEach((item, index) => {
        let option = document.createElement("option");
        console.log(item, index);
        //assign it a value
        option.value = index + 1;
        //populate the html with the player's name
        option.innerHTML = `${item.player.name.first} ${item.player.name.last}`;
        //add each option tag to the select tag
        select.appendChild(option);
      })

      //function that will be called each time a player is selected for drop down menu
      let outputData = (e) => {
        //this is the event object
        console.log(e);
        console.log(e.target.value);
        let playerIndex = (e.target.value);
        console.log(myData[e.target.value - 1]);
        //obj variable allows us to access the json data for each player when clicked
        let obj = myData[e.target.value - 1];
        
        
        let image = document.getElementById("image");


        if(playerIndex == 1) {
          image.src = "assets/toby.png";
        }else if(playerIndex == 2) {
          image.src = "assets/yaya.png";
        }else if(playerIndex == 3) {
          image.src = "assets/rooney.png";
        }else if(playerIndex == 4) {
          image.src = "assets/per.png";
        }else if(playerIndex == 5) {
          image.src = "assets/mahrez.png";
        }else {
          image.src = " ";
        }

        let playerName = document.getElementById("playerName");
        let playerPosition = document.getElementById("playerPosition");
        let appearances = document.getElementById("appearances");
        let goals = document.getElementById("goals");
        let assists = document.getElementById("assists");
        let goalspermatch = document.getElementById("goalspermatch");
        let passesperminute = document.getElementById("passesperminute");


        playerName.innerHTML = `${obj.player.name.first} ${obj.player.name.last}`;
        playerPosition.innerHTML = `${obj.player.info.positionInfo}`;
        goals.innerHTML = `${obj.stats[0].value}`;

        if(playerIndex == 4) {
          appearances.innerHTML = `${obj.stats[5].value}`;
          assists.innerHTML = "0";
          goalspermatch.innerHTML = (obj.stats[0].value / obj.stats[5].value).toFixed(2);
          passesperminute.innerHTML = ((obj.stats[4].value + obj.stats[7].value) / obj.stats[6].value).toFixed(2);
        }else{
          appearances.innerHTML = `${obj.stats[6].value}`;
          assists.innerHTML = `${obj.stats[5].value}`;
          goalspermatch.innerHTML = (obj.stats[0].value / obj.stats[6].value).toFixed(2);
          passesperminute.innerHTML = ((obj.stats[4].value + obj.stats[8].value) / obj.stats[7].value).toFixed(2);
        }

      }

      select.addEventListener("change", outputData);
    }

    buildOptions(myData);   
  })
  .catch((err) => {
    console.log(`Error: ${err.name}: ${err.message}`)
  })





  







 

