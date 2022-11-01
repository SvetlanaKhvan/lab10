
////Arrays
let lab1=[5,5,0,5,5,10,10];
let lab2=[5,5,5,5,5,5,10];
let lab3=[5,10,10,15];
let lab4_5=[10,5,3,5,5,5,10,10,10,10,5];
let lab6=[5,5,10,4,5,10];
let lab8=[5,10,10,10,5];

//Variables
let quiz1=28;

function get_sum(lab) {
let sum_lab = 0;
for (let i = 0; i < lab.length; i++) {
sum_lab+=lab[i];
}
return sum_lab;
}

function main(l1,l2,l3,l4_5,l6,l8){
       lab1=get_sum(l1);
       lab2=get_sum(l2);
       lab3=get_sum(l3);
       lab4_5=get_sum(l4_5);
       lab6=get_sum(l6);
       lab8=get_sum(l8);

       total_score= quiz1+(lab1+lab2+lab3+lab4_5+lab6+lab8)*60/280;
      return total_score
}

let final=main(lab1,lab2,lab3,lab4_5,lab6,lab8);

const results = {
	lab1:lab1,
	lab2:lab2, 
	lab3:lab3, 
	lab4_5:lab4_5, 
	lab6:lab6, 
	lab8:lab8, 
	quiz1:quiz1 , 
	sums:[lab1,lab2,lab3,lab4_5,lab6,lab8],
	sumtotal:lab1+lab2+lab3+lab4_5+lab6+lab8, 
	total_score: final, 
};
console.log(results);
