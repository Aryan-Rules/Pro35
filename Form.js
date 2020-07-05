class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1=createInput("Email-Id");
    this.button = createButton('Continue');
  }
  hide(){
    this.input1.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("Donate For A Cause");
    title.position(145,0);
    
    var title1=createElement('h2')
    title1.html("Mid Day Meal Program")
    title1.position(155,50)
   
    var titledash=createElement('h5');
     titledash.html("<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>");
     titledash.position(135,30);
     
     var title1dash=createElement('h5');
     title1dash.html("<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>")
     title1dash.position(135,75)
    this.input.position(190,160);
    this.button.position(225,250);
    this.input1.position(190,200)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.input1.hide();
      this.button.hide();
      var q1= createElement('h5')
      q1.html("Q1-Do you think our school needs to provide free meals for kids who are very poor ?")
      q1.position(20,130)

      var q1a=createInput("Yes/No(type)")
      q1a.position(30,180)

      var q2=createElement('h5')
      q2.html("Q2-Are you willing to contribute a small amount every month?")
      q2.position(20,200);

      var q2a=createInput("Yes/No(type)");
      q2a.position(30,250);

      var q3=createElement('h5')
      q3.html("Q3-How much are you willing to contribute?")
      q3.position(20,270);

      var q3a=createInput("Amount")
      q3a.position(30,320)

      var buttton1=createButton("Submit")
      buttton1.position(450,370)

      buttton1.mousePressed(()=>{
      
        buttton1.hide();
        q1.hide();
        q1a.hide();
        q2.hide();
        q2a.hide();
        q3.hide();
        q3a.hide();

         var greeting=createElement('h2')
         greeting.html("THANKS FOR YOUR SUPPORT!!!")
         greeting.position(100,150)

         var greeting1=createElement('h2')
         greeting1.html("IT MEANS A LOT")
         greeting1.position(160,200)
      });

      
      voter.voteranswer1=q1a.value();
      voter.voteranswer2=q2a.value();
      voter.voteranswer3=q3a.value();

      voter.name = this.input.value();
      voter.Email=this.input1.value();
      voterCount+=1;
      voter.index = voterCount;
      voter.update();
      voter.updateCount(voterCount);
      console.log(voterCount)
    });

  }
}

