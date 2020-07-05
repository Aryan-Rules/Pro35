class Game {
  constructor(){}


  async start(){
  
      voter = new Voter();
      var voterCountRef = await database.ref('voterCount').once("value");
      if(voterCountRef.exists()){
        voterCount = voterCountRef.val();
        voter.getCount();
      }
      form = new Form()
      form.display();
    
  }

 
}
