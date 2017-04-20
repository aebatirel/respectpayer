/**
 * Created by Ahmet TheMagnificent on 18.04.2017.
 */
var model={
    currentLeader:null,
    Leaders: [
        {
            clickCount:0,
            name:'DJ Gurbetçi Adolf',
            imgsrc:'img/hitler-getty.jpg'
        },
        {
            clickCount:0,
            name:'Anarşik Stalin',
            imgsrc:'img/CroppedStalin1943.jpg'
        },
        {
            clickCount:0,
            name:'KJ Uuuuuuuun',
            imgsrc:'img/3763E84700000578-0-image-m-15_1471599719704.jpg'
        }
    ]
}
var octopus={
    init: function () {
        model.currentLeader=model.Leaders[0];
        LeaderListView.init();
        LeaderView.init();

    },
    getCurrentLeader: function () {
        return model.currentLeader;
    },
    getLeaderstoprison:function () {
        return model.Leaders;
    },
    setLeadertoprison:function (Leader) {
      model.currentLeader=Leader;
    },
    incrementCounter:function () {
        model.currentLeader.clickCount++;
        LeaderView.render();
    }
}
var LeaderView={
    init:function () {
        this.leaderElem=document.getElementById('leader');
        this.LeaderNameElem=document.getElementById('leadername');
        this.leaderimageElem=document.getElementById('leader_img');
        this.countElem=document.getElementById('click_count');
        this.leaderbtn=document.getElementById('btn_leader');
        this.leaderimageElem.addEventListener('click',function (e){
            octopus.incrementCounter();
        } );
        this.render;
    },
    render:function () {
        var currentLeader=octopus.getCurrentLeader();
        this.countElem.textContent=currentLeader.clickCount+" respects given";
        this.LeaderNameElem.textContent=currentLeader.name;
        this.leaderimageElem.src=currentLeader.imgsrc;
        if(model.currentLeader==null){
            document.getElementById("myP").style.visibility = "hidden";
        }else{
            document.getElementById("myP").style.visibility = "visible";
        }
    }

};
var LeaderListView={
    init: function () {
        this.leaderlistitem=document.getElementById('leader-list');
        this.render();
    },
    render: function(){
     var leaders=octopus.getLeaderstoprison();
     this.leaderlistitem.innerHTML='';
     for(var i=0;i<leaders.length;i++){
         var leader = leaders[i];
         var elem=document.createElement('li');;
         elem.textContent=leader.name;
         elem.addEventListener('click',(function (leader) {
             return function () {
                 octopus.setLeadertoprison(leader);
                 LeaderView.render();
             };
         })(leader));

         this.leaderlistitem.appendChild(elem);
     };
}
};
octopus.init();
// zaaa xd