//  creating variables for every ID
const result= document.getElementById('result');
const length= document.getElementById('length');
const uppercase= document.getElementById('uppercase');
const lowercase= document.getElementById('lowercase');
const numbers= document.getElementById('numbers');
const symbols= document.getElementById('symbols');
const generate= document.getElementById('generate');
const clipboard= document.getElementById('clipboard');

//---------------------------------------------------------------------------------------



// in below functions, we use charset of alphabets and numbers  ||  go to this link -> https://net-comber.com/charset.html

// lowercase function
function Lower(){
return(String.fromCharCode(Math.floor(Math.random()*26)+65));
}
//Upper case function 
function Upper(){
    return(String.fromCharCode(Math.floor(Math.random()*26)+97));
}
//symbol function
function Symbolfunc(){
    const symbolarray = '!@#$%^&*(){}<>,/?'
    return(  symbolarray[  Math.floor(  Math.random()*symbolarray.length  )  ]  );
}
// number generator
function Numberfunc(){
    // return(String.fromCharCode(Math.floor(Math.random()*10)+48));
const numarr = '0123456789';
return(  numarr[  Math.floor(  Math.random()*numarr.length  )  ]  );

}
// array consists of functions
var functionArray = [];
functionArray.push(Lower);
functionArray.push(Upper);
functionArray.push(Symbolfunc);
functionArray.push(Numberfunc);


//---------------------------------------------------------------------------------------



// code for clipboard copy

clipboard.addEventListener('click', () => {      // event listener for clipboard id. i.e  clipboard icon
	const textarea = document.createElement('textarea');
	const password = result.innerText;
	
	if(!password) { alert('first generate password  🤔'); return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password is now copied to clipboard  😋');
});


//---------------------------------------------------------------------------------------



// code for generate button

generate.addEventListener('click' , () => {     // event listener for  generate button

    // take values    
    var lengthofpass = length.value;
    var lower = lowercase.checked;
    var upper = uppercase.checked;
    var number = numbers.checked;
    var symbol = symbols.checked;
	// and send output
	result.innerText = sendOutput( lengthofpass , lower , upper , number , symbol );
});


//---------------------------------------------------------------------------------------




// creating function for password gen

function sendOutput( lengthofpass , lower , upper , number , symbol ) { 

    var pass = '';    // output password init

    // we have to print nothing if user selects no options
    total = lower + upper + number + symbol;
    if(total == 0){
        return 'select atleast one option below   🤠';
    }
    // console.log("array init size is ", functionArray.length);

    if( !lower){
        functionArray.splice(functionArray.indexOf(Lower), 1);
    }
    if( !upper){
        functionArray.splice(functionArray.indexOf(Upper), 1);
    }
    if( !symbol){
        functionArray.splice(functionArray.indexOf(Symbolfunc), 1);
    }
    if( !number){
        functionArray.splice(functionArray.indexOf(Numberfunc), 1);
    }
    // console.log("length of array");
    // console.log(lower , upper , symbol , number);
    var len = functionArray.length;
    for( var i = 0; i < lengthofpass; i++ ){
        var index = Math.floor(Math.random()*len);
    
         var val = functionArray[index]();
        // console.log(val);
        pass+= val;
    }
    console.log(pass);
    return pass;
}
















