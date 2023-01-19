import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
  .weather1{
        position: relative;
        background-image: url(Chaos/Fotos/Sonne.gif);
        background-size: cover;
        background-repeat: no-repeat;
        border: rgb(85, 79, 79);
        border-width: 2px;
        border-style: none;
        width: 100%;
        height: 170px;
}
.weather2{
    position: relative;
    background-image: url(Chaos/Fotos/Regnen.gif);
    background-size: cover;
    background-repeat: no-repeat;
    border: rgb(85, 79, 79);
    border-width: 2px;
    border-style: none;
    width: 100%;
    height: 170px;
}
.weather3{
    position: relative;
    background-image: url(Chaos/Fotos/Schnee.gif);
    background-size: cover;
    background-repeat: no-repeat;
    border: rgb(85, 79, 79);
    border-width: 2px;
    border-style: none;
    width: 100%;
    height: 170px;
}



.info1{
  position: relative;
    background-image: url(Chaos/Fotos/info1.png);
    background-size: cover;
    background-repeat: no-repeat;
    border: rgb(85, 79, 79);
    border-width: 2px;
    border-style: none;
    width: 100%;
    height: 170px;  
}
.info2{
  position: relative;
    background-image: url(Chaos/Fotos/info1.png);
    background-size: cover;
    background-repeat: no-repeat;
    border: rgb(85, 79, 79);
    border-width: 2px;
    border-style: none;
    width: 100%;
    height: 170px;  
}
.info3{
  position: relative;
    background-image: url(Chaos/Fotos/info3.png);
    background-size: cover;
    background-repeat: no-repeat;
    border: rgb(85, 79, 79);
    border-width: 2px;
    border-style: none;
    width: 100%;
    height: 170px;  
}
.info4{
  position: relative;
    background-image: url(Chaos/Fotos/info4.png);
    background-size: cover;
    background-repeat: no-repeat;
    border: rgb(85, 79, 79);
    border-width: 2px;
    border-style: none;
    width: 100%;
    height: 170px;  
}


  `]





})
export class AppComponent {
  start=true
  play=false
  spieler1Name=''
  spieler2Name=''
  spieler3Name=''
  spieler4Name=''
  spieler5Name=''
  spieler6Name=''
  gameStartErrorText=''

  gameStartError(){
    this.start=true
    this.play=false
    this.gameStartErrorText='Entweder 4 oder 6 Spieler können im Teammodus spielen!'
  }
anzahlPlayers=6
anzahlPlayersPl(){
  this.anzahlPlayers=this.anzahlPlayers+1
  if(this.anzahlPlayers>6){
    this.anzahlPlayers=6
  }
}
anzahlPlayersMin(){
  this.anzahlPlayers=this.anzahlPlayers-1
  if(this.anzahlPlayers<2){
    this.anzahlPlayers=2
  }
}
Players=['']
player6Mode=false
 startGame(){
  this.start=false
  this.play=true
      if(this.teamModeOn==true){
          if(this.spieler1Name==''||this.spieler2Name==''||this.spieler4Name==''||this.spieler5Name==''){
            this.gameStartError()
          }
          else{
            this.Players=[this.spieler1Name,this.spieler4Name,this.spieler2Name,this.spieler5Name,this.spieler3Name,this.spieler6Name];
            this.player6Mode=true
          }
          if(this.spieler3Name==''&&this.spieler6Name==''){
          this.Players=[this.spieler1Name,this.spieler4Name,this.spieler2Name,this.spieler5Name];
          this.player6Mode=false
          }
      }
      
      if(this.teamModeOn==false){
        if(this.anzahlPlayers==6){
            this.Players=[this.spieler1Name,this.spieler2Name,this.spieler3Name,this.spieler4Name,this.spieler5Name,this.spieler6Name]
        }
        if(this.anzahlPlayers==5){
          this.Players=[this.spieler1Name,this.spieler2Name,this.spieler3Name,this.spieler4Name,this.spieler5Name]
        }
        if(this.anzahlPlayers==4){
          this.Players=[this.spieler1Name,this.spieler2Name,this.spieler3Name,this.spieler4Name]
        }
        if(this.anzahlPlayers==3){
          this.Players=[this.spieler1Name,this.spieler2Name,this.spieler3Name]
        }
        if(this.anzahlPlayers==2){
          this.Players=[this.spieler1Name,this.spieler2Name]
        }
      
 }
  console.log('Players: '+this.Players)
  console.log(this.teamModeOn)
  console.log('Mode 6:  '+this.player6Mode)
  this.weiter()
 }
teamModeOn=true
teamModeText='TEAMMODUS AN'
teamMode(){
if(this.teamModeOn==true)
  {this.teamModeOn=false;
  this.teamModeText='EINZELMODUS AN'
  }
else{this.teamModeOn=true;
  this.teamModeText='TEAMMODUS AN'}

}


 day=true
 night=false
 dayLeft :number=43
 nightLeft=5
 nightF(){
this.day=false
this.night=true
this.dayLeft=43
this.nightLeft=5
this.nightHour=20
 }
 dayF(){
  this.day=true
  this.night=false
  this.nightLeft=5
  this.dayMinute=0
  this.dayHour=6
 }
dayHour :number=6
dayMinute=0
nightHour=20
nightMinute=0


weatherStatus=Math.random()
weatherStatusp="weather2"
weatherPA=['Draußen ist es sonnig gerade, es gibt keine Fahrverbote',
'Rutschgefahr durch starken Regen, kein Fahrrad oder E-Scooter benutzen',
'Ein schwerer Schneefall hat die Straßen bedeckt. Fortbewegung nur zu Fuß und mit halber Geschwindigkeit möglich',]
weatherP=this.weatherPA[Math.round((this.weatherStatus+0.1667)*3)-1]
weatherGo(){
  this.weatherStatus=Math.random()
  if(this.weatherStatus>0.667){
    this.weatherStatusp="weather3"}{
    if(this.weatherStatus>0.333&&this.weatherStatus<0.667){
      this.weatherStatusp="weather2"
    }{
      if(this.weatherStatus<0.333){
        this.weatherStatusp="weather1"
      }
    }
  }
  //  if(this.weatherStatus<0.167){
  //   this.weatherStatus=0.9
  // }
  this.weatherP=this.weatherPA[Math.round((this.weatherStatus+0.1667)*3)-1]
  console.log('weather status:'+this.weatherStatus)
  console.log('weather status:'+(Math.round((this.weatherStatus+0.1667)*3)-1))
}






infoStatus=Math.round(Math.random()*4)
infoStartup='info'+this.infoStatus
infoHCh='infoH'+this.infoStatus
infoPCh='infoP'+this.infoStatus
infoH1=['Aufpassen','Zugsperre','Polizei Untersuchung','Demonstrationen']
infoP1=['Aufgrund von Bauarbeiten am Gleisverkehr fahren alle Züge zweimal langsam.',
'Aufgrund von Bauarbeiten fallen alle Züge aus',
'Die Kriminellen verstecken sich in Our City. Die Polizei hat diesen Abschnitt komplett gesperrt.',
'Die massiven Demonstrationen in Our City haben dazu geführt, dass alle Verkehrsmittel lahmgelegt wurden. Die Fußgänger und E-Scooter bewegen sich mit halber Geschwindigkeit.']
infoH=this.infoH1[this.infoStatus-1]
infoP=this.infoP1[this.infoStatus-1]
infoGo(){
  this.infoStatus=Math.round(Math.random()*4)
  if(this.infoStatus==0){
    this.infoStatus=4
  }
this.infoH=this.infoH1[this.infoStatus-1]
this.infoP=this.infoP1[this.infoStatus-1]
this.infoStartup='info'+this.infoStatus
console.log('Info STatus:'+this.infoStatus)
}



turnN=Math.round(Math.random()*(this.Players.length-1))
turn=this.Players[this.turnN]
turnOn(){
this.turnN=this.turnN+1
if(this.turnN>this.Players.length-1){
  this.turnN=0
}
this.turn=this.Players[this.turnN]
this.playerCheck()
console.log('Turn:'+this.turn)
console.log('Turn N:'+this.turnN)
console.log('players'+this.Players)
}
playerActive=0
playerCheck()
{
  if(this.turnN==0){
    this.player1Plays()
    this.playerActive=1
  }
  if(this.turnN==1){
    this.player4Plays()
    this.playerActive=4
  }
  if(this.turnN==2){
    this.player2Plays()
    this.playerActive=2
  }
  if(this.turnN==3){
    this.player5Plays()
    this.playerActive=5
  }
  if(this.turnN==4){
    this.player3Plays()
    this.playerActive=3
  }
  if(this.turnN==5){
    this.player6Plays()
    this.playerActive=6
  }

}











nachrichten=['helfe den Freiwilligen, die Bäume im Ostpark zu pflanzen. Dafür musst du einfach hingehen oder hinfahren.','Gehe fünf Züge nur zu Fuß ohne anderes Verkehrsmittel dazwischen zu nutzen.',
'Nimm am Marathon teil. Das gesammelte Geld wird dem Waldschutz gespendet. Mache 2 Runden mit dem Fahrrad um Außengürtel OurCity.',
'Ein Entenjunges findet seine Mama nicht mehr. Gehe zum Park um dem Jungtier bei der Suche zu helfen.',
'Gehe zum Rathaus, dort wird gegen die unzureichende Umweltschutzpolitik der Stadt demonstriert.',
'Gehe ins Fitnessstudio, du musst fit bleiben, um mehr zu Fuß gehen zu können.',
'Es gibt einen Mangel an Elektroautos in OurCity, fahre die nächsten 8 Züge kein Elektroauto']
nachrichtP=''
nachrichtenN=[Math.round(Math.random()*(this.nachrichten.length-1)),
  Math.round(Math.random()*(this.nachrichten.length-1)),
  Math.round(Math.random()*(this.nachrichten.length-1)),
  Math.round(Math.random()*(this.nachrichten.length-1)),
  Math.round(Math.random()*(this.nachrichten.length-1)),
  Math.round(Math.random()*(this.nachrichten.length-1))]
umweltVer=[0,0,0,0,0,0]
nachrichtBleibt=0
nachrichtBleibtArray=[11,11,11,11,11,11]
player1Plays()
{
this.nachrichtP=this.nachrichten[this.nachrichtenN[0]]
this.nachrichtBleibtArray[0]=this.nachrichtBleibtArray[0]-1
this.nachrichtBleibt=this.nachrichtBleibtArray[0]
if(this.nachrichtBleibt==0){
  this.ablehnen()
}
console.log('koka'+this.nachrichtBleibtArray[0])
}
player2Plays()
{
  this.nachrichtP=this.nachrichten[this.nachrichtenN[1]]
  this.nachrichtBleibtArray[1]=this.nachrichtBleibtArray[1]-1
this.nachrichtBleibt=this.nachrichtBleibtArray[1]
}
player3Plays()
{
  this.nachrichtP=this.nachrichten[this.nachrichtenN[2]]
  this.nachrichtBleibtArray[2]=this.nachrichtBleibtArray[2]-1
this.nachrichtBleibt=this.nachrichtBleibtArray[2]
}
player4Plays()
{
  this.nachrichtP=this.nachrichten[this.nachrichtenN[3]]
  this.nachrichtBleibtArray[3]=this.nachrichtBleibtArray[3]-1
this.nachrichtBleibt=this.nachrichtBleibtArray[3]
}
player5Plays()
{
  this.nachrichtP=this.nachrichten[this.nachrichtenN[4]]
  this.nachrichtBleibtArray[4]=this.nachrichtBleibtArray[4]-1
this.nachrichtBleibt=this.nachrichtBleibtArray[4]
}
player6Plays()
{
  this.nachrichtP=this.nachrichten[this.nachrichtenN[5]]
  this.nachrichtBleibtArray[5]=this.nachrichtBleibtArray[5]-1
this.nachrichtBleibt=this.nachrichtBleibtArray[5]
}

ablehnen(){
this.nachrichtenN[this.playerActive]=Math.round(Math.random()*(this.nachrichten.length-1))
this.umweltVer[this.playerActive-1]=this.umweltVer[this.playerActive-1]-5
this.nachrichtP=this.nachrichten[this.nachrichtenN[this.playerActive]]
this.nachrichtBleibtArray[this.playerActive-1]=11
console.log('ablehnen works')
}

erledigt(){
  this.nachrichtenN[this.playerActive]=Math.round(Math.random()*(this.nachrichten.length-1))
  this.CO2[this.playerActive-1]=this.CO2[this.playerActive-1]-20
  this.nachrichtP=this.nachrichten[this.nachrichtenN[this.playerActive]]
  this.nachrichtBleibtArray[this.playerActive-1]=11
  }
missionspunkteZahl:number=0
missionspunkteAdd(){
  this.umweltVer[this.playerActive-1]=this.umweltVer[this.playerActive-1]+this.missionspunkteZahl
}








 title = 'OurCity';
  EmissionsStandG1=0
  EmissionsStandG2=0

  
  EmissionsStandG1Plus(){
 
    if(this.EmissionsStandG1<10){
      this.EmissionsStandG1=this.EmissionsStandG1+1}{}

  }
  EmissionsStandG1Minus(){
    if(this.EmissionsStandG1>0){
    this.EmissionsStandG1=this.EmissionsStandG1-1}{}
  }
  EmissionsStandG2Plus(){
    if(this.EmissionsStandG2<10){
    this.EmissionsStandG2=this.EmissionsStandG2+1}{}
  }
  EmissionsStandG2Minus(){
    if(this.EmissionsStandG2>0){
    this.EmissionsStandG2=this.EmissionsStandG2-1}{}
  }
  ampel=1
  
CO2=[0,0,0,0,0,0]
warning=''
warningOn=false
CO2Check(){
  this.CO2[this.playerActive-1]=this.CO2[this.playerActive-1]+this.fahrzeugKosten
  this.EmissionsStandG1=this.CO2[0]+this.CO2[1]+this.CO2[2]
  this.EmissionsStandG2=this.CO2[3]+this.CO2[4]+this.CO2[5]
  if(this.EmissionsStandG1>750){
  this.play=false
  this.warning='Aufgrund der großen Abgasmenge verlor Team 1!'
  this.warningOn=true
  }
  if(this.EmissionsStandG2>750){
    this.play=false
    this.warning='Aufgrund der großen Abgasmenge verlor Team 2!'
    this.warningOn=true
    }
}






fahrzeuge=[
  {
    name:'Gehen',
    Würfel:'1 x Grün',
    Kosten:0
  },
  {
    name:'Fahrrad',
    Würfel:'2 x Grün',
    Kosten:5
  },
  {
    name:'Auto',
    Würfel:'1 x Blau + 1 x Rot',
    Kosten:45
  },
  {
    name:'Bahn',
    Würfel:'1 x Blau + 1 x Grün',
    Kosten:20
  },
  {
    name:'E-Auto',
    Würfel:'1 x Blau + 1 x Rot',
    Kosten:35
  },
  {
    name:'E-Roller',
    Würfel:'1 x Rot + 1 x Grün',
    Kosten:15
  }
]
fahrzeugname=''
fahrzeugwuerfel=''
fahrzeugKosten=0
fahrzeugeOn(x:number){
  this.fahrzeugname=this.fahrzeuge[x].name
  this.fahrzeugwuerfel=this.fahrzeuge[x].Würfel
  this.fahrzeugKosten=this.fahrzeuge[x].Kosten
}
fahrzeugeRefresh(){
  this.fahrzeugname=''
  this.fahrzeugwuerfel=''
  this.fahrzeugKosten=0
  this.missionspunkteZahl=0
}

weiter(){
  this.ampel=Math.random()
  if(this.day==true){
    this.dayLeft=this.dayLeft-1
    this.dayHour=Math.round(6+(42-this.dayLeft)/3)
    this.dayMinute=this.dayMinute+2
  }
  if(this.night==true){
    this.nightLeft=this.nightLeft-1
    this.nightHour=Math.round(20+(6-this.nightLeft)*2)
    this.dayMinute=this.dayMinute+2
    if(this.nightHour>23){
      this.nightHour=this.nightHour-24
    }
  }
  if(this.dayLeft==1){this.nightF()
  }
  if(this.nightLeft==1){
    this.dayF()
  }

  if(this.dayMinute==6){this.dayMinute=0}
this.weatherGo()
this.infoGo()
this.CO2Check()
this.turnOn()
this.fahrzeugeRefresh()
console.log('CO2'+this.CO2)
  }
}