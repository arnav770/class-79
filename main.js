var student_array=[];

function submit(){

    var name1=document.getElementById("student_1").value;
    var name2=document.getElementById("student_2").value;
    var name3=document.getElementById("student_3").value;
    var name4=document.getElementById("student_4").value;

    //to insert value in array
    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);

    console.log(student_array);

    //to display on html
    document.getElementById("display").innerHTML=student_array

    //to hide button submit
    document.getElementById("buttsub").style.display="none";

    //to show button sort
    document.getElementById("buttsort").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("display").innerHTML=student_array
}
