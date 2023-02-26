let fleet={A:"",Flag:"",B:"",Tank:"",Protected:"",Offtank:""};

function update(){
    for(let s in fleet){
        if(fleet[s]==""){
            continue;
        }
        for(let i=0;i<fleet[s].skills.length;i++){
            fleet[s].skills[i](s);
        }
    }
    for(let s in fleet){
        if(fleet[s]==""){
            continue;
        }
        document.getElementById(s).innerHTML=`<table>
        <thead>
        <tr><th colspan=4>${s}:${fleet[s].name}</th></tr>
        </thead>
        <tbody>
        <tr><th>Stat</th><td>Base</td><td>Current</td><td>Modifier</td>
        <tr><th>HP</th><td>${fleet[s].stats[0]}</td><td>${Math.floor(fleet[s].d_stats[0])}</td><td>${fleet[s].coeff[0]}%</td>
        <tr><th>FP</th><td>${fleet[s].stats[1]}</td><td>${Math.floor(fleet[s].d_stats[1])}</td><td>${fleet[s].coeff[1]}%</td>
        <tr><th>TRP</th><td>${fleet[s].stats[2]}</td><td>${Math.floor(fleet[s].d_stats[2])}</td><td>${fleet[s].coeff[2]}%</td>
        <tr><th>AVI</th><td>${fleet[s].stats[3]}</td><td>${Math.floor(fleet[s].d_stats[3])}</td><td>${fleet[s].coeff[3]}%</td>
        <tr><th>AA</th><td>${fleet[s].stats[4]}</td><td>${Math.floor(fleet[s].d_stats[4])}</td><td>${fleet[s].coeff[4]}%</td>
        <tr><th>RLD</th><td>${fleet[s].stats[5]}</td><td>${Math.floor(fleet[s].d_stats[5])}</td><td>${fleet[s].coeff[5]}%</td>
        <tr><th>EVA</th><td>${fleet[s].stats[6]}</td><td>${Math.floor(fleet[s].d_stats[6])}</td><td>${fleet[s].coeff[6]}%</td>
        <tr><th>ARM</th><td>${fleet[s].stats[7]}</td><td>${fleet[s].d_stats[7]}</td><td>${fleet[s].coeff[7]}</td>
        <tr><th>SPD</th><td>${fleet[s].stats[8]}</td><td>${Math.floor(fleet[s].d_stats[8])}</td><td>${fleet[s].coeff[8]}</td>
        <tr><th>ACC</th><td>${fleet[s].stats[9]}</td><td>${Math.floor(fleet[s].d_stats[9])}</td><td>${fleet[s].coeff[9]}%</td>
        <tr><th>LCK</th><td>${fleet[s].stats[10]}</td><td>${Math.floor(fleet[s].d_stats[10])}</td><td>${fleet[s].coeff[10]}%</td>
        <tr><th>ASW</th><td>${fleet[s].stats[11]}</td><td>${Math.floor(fleet[s].d_stats[11])}</td><td>${fleet[s].coeff[11]}%</td>
        <tr><th>CST</th><td>${fleet[s].stats[12]}</td><td>${Math.floor(fleet[s].d_stats[12])}</td><td>${fleet[s].coeff[12]}</td>
        </tbody>
        </table>`;
    }
}
//hp,fp,trp,avi,aa,rld,eva,arm,spd,acc,lck,asw,cost
let ships={
    "107": new ship("107","CL","SR","RN","Dido","Dido",[3744,157,178,0,387,193,111,"L",32,160,85,168,11],[
        function(position){
            for(let key in fleet){
                if(fleet[key].classification==="Dido"){
                    fleet[key].d_stats[1]+=fleet[key].stats[1]*0.15;
                    fleet[key].coeff[1]+=15;
                    fleet[key].d_stats[2]+=fleet[key].stats[2]*0.15;
                    fleet[key].coeff[2]+=15;
                    fleet[key].d_stats[4]+=fleet[key].stats[4]*0.15;
                    fleet[key].coeff[4]+=15;
                }
            }
        },
        function(position){
            let i=0;
            for(let key in fleet){
                if(fleet[key].affiliation==="RN"&&i<4){
                    fleet[position].d_stats[1]+=fleet[key].stats[1]*0.06;
                    fleet[position].coeff[1]+=6;
                    fleet[position].d_stats[4]+=fleet[key].stats[4]*0.06;
                    fleet[position].coeff[4]+=6;
                    fleet[position].d_stats[5]+=fleet[key].stats[5]*0.06;
                    fleet[position].coeff[5]+=6;
                    i++;
                    if(fleet[key].name=="Queen Elizabeth"){
                        fleet[key].d_stats[1]+=fleet[key].stats[1]*0.07;
                        fleet[key].coeff[1]+=7;
                        fleet[key].d_stats[5]+=fleet[key].stats[5]*0.07;
                        fleet[key].coeff[5]+=7;
                        fleet[key].d_stats[6]+=fleet[key].stats[6]*0.07;
                        fleet[key].coeff[1]+=6;
                        //main guns crit +0.2
                    }
                }
            }
        }
    ]),
    "130":new ship("130","BB","E","RN","Queen Elizabeth","Queen Elizabeth",[7512,403,0,0,212,143,33,"H",24,68,25,0,14],[
        function(position){
            for(let key in fleet){
                if(fleet[key].affiliation==="RN"){
                    for(let i=1;i<7;i++){
                        fleet[key].d_stats[i]+=fleet[key].stats[i]*0.15;
                        fleet[key].coeff[i]+=15;
                    }
                }
            }
        }
    ]),
};


window.onload=function(event){}