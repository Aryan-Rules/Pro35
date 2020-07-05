class Voter {
  constructor(){
    this.index = null;
    this.name = null;
    this.Email=null;
    this.voteranswer1=null;
    this.voteranswer2=null;
    this.voteranswer3=null;
  }

  getCount(){
    var voterCountRef = database.ref('voterCount');
    voterCountRef.on("value",(data)=>{
      voterCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      voterCount: count
    });
  }

  update(){
    var voterIndex = "voters/voter" + this.index;
    database.ref(voterIndex).set({
      name:this.name,
      Email:this.Email,
      voteranswer1:this.voteranswer1,
      voteranswer2:this.voteranswer2,
      voteranswer3:this.voteranswer3
    });
  }

  static getVoterInfo(){
    var voterInfoRef = database.ref('voters');
    voterInfoRef.on("value",(data)=>{
      allVoters = data.val();
    })
  }
}
