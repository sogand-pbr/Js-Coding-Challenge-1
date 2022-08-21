///testData1
let MarksMass=78;
let Marksheight=1.69;
let JohnMass=92;
let Johansheight=1.95;
let JohansBMI =JohnMass / Johansheight**2;
let MarksBMI =MarksMass / Marksheight**2;
let MarkHigherBMI=console.log(MarksBMI>JohansBMI);
//////////////////////////////////////////////
//testData1=
 MarksMass=95;
 Marksheight=1.88;
 JohnMass=85;
 Johansheight=1.76;
JohansBMI =JohnMass / Johansheight**2;
MarksBMI =MarksMass / Marksheight**2;
MarkHigherBMI=console.log(MarksBMI>JohansBMI);
////
if (MarksBMI>JohansBMI){
 console.log(`Marks BMI (${MarksBMI}) is higher than Johns BMI (${JohansBMI})`)
} else {
 console.log(`johns BMI (${JohansBMI}) is higher than Marks BMI (${MarksBMI})`)
}