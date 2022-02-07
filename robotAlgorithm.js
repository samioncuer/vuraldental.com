var düzlem = [];
for(var i =0; i<100; i++){
  düzlem.push(i);
}
var parasut_1 = Math.random();
var parasut_2 = Math.random();
var robot_1_index = parasut_1;
var robot_2_index = parasut_2;
var robot_index = 0;
var parasutBulundu = false;

function parasutBulunduMu(){
  if(robot_1_index == parasut_2 -1 || robot_1_index == parasut_2 -1 ||
     robot_2_index == parasut_1 -1 || robot_2_index == parasut_1 -1){
     return true;
   }else{
       return false;
   }
}

function bulustularMı(){
    if(robot_1_index == robot_2_index){
        return true;
    }else{
        return false;
    }
}

function digerRobotuAra(){
  while(!bulustularMı())
    if(!parasutBulunduMu()){
      robot_index--;
    }
    if(parasutBulunduMu()){
      robot_index--;
      robot_index--;
    }
}