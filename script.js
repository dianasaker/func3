function findstr(){
	var count=0;
	var word=document.getElementById("word").value;
	var ltr=document.getElementById("ltr").value;
	var x=word.split("");
	for(i=0;i<x.length;i++){
		if(x[i]==ltr){
			count++;
		}
	}
	console.log(count);
}
