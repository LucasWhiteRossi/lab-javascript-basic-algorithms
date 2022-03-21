// Iteration 1: Names and Input
const hacker1 = "chromedriver"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Google Chrome"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
                
} else if(hacker1.length < hacker2.length){
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);        

} else {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);

}

// Iteration 3: Loops
// Uppercase + spaces
let newString = ''
for (let i = 0; i < hacker1.length; i++) {
    newString += hacker1[i].toUpperCase() + ' '
}
newString = newString.trim();
console.log(newString);

//reversing string
let reverseString = ''
for (let i = hacker1.length -1; i >=0 ; i--) {
    reverseString += hacker1[i]
}
console.log(reverseString);


// length and lexical order. Nested conditionals
if(hacker1.length > hacker2.length){
    
    if (hacker1 > hacker2){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else {
        console.log(`The driver's name goes first.`);
    }
    
} else if(hacker1.length < hacker2.length){

    if (hacker1 > hacker2){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log('Yo, the navigator goes first definitely.');
    }
} else {
    if (hacker1 > hacker2){
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
    } else {
        console.log('What?! You both have the same name?');
    }
}



// Bonus 1:
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut dictum sem. Fusce metus odio, iaculis eget ipsum eu, maximus facilisis dui. Sed imperdiet sed ipsum et venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae augue porta, malesuada risus a, blandit augue. Vivamus dictum at ipsum ultrices cursus. Praesent ac ligula eu mauris varius pharetra. Cras semper vehicula nunc, nec eleifend augue lacinia suscipit. Nam auctor purus dictum, elementum ante vel, vestibulum nunc. Morbi et elit congue, malesuada enim accumsan, pellentesque augue. Donec augue odio, aliquet quis feugiat eget, facilisis et nunc. Cras iaculis enim in risus rhoncus, et hendrerit libero rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut molestie, nunc ac vulputate congue, velit augue dapibus quam, at pretium velit elit pellentesque dui. Suspendisse pharetra nec lacus eget dictum. Donec condimentum mollis nulla, eu ultricies massa sollicitudin in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur interdum urna. Morbi suscipit porta purus et commodo. Suspendisse eget tellus ullamcorper, dignissim ex eget, lacinia tellus. Curabitur elementum molestie elit et pretium. Praesent vulputate nisl eget eros volutpat facilisis. Morbi varius ante nec turpis tempor rhoncus lobortis sit amet sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec metus leo, venenatis quis laoreet vel, rutrum a tortor. Fusce viverra nunc eget finibus rhoncus. Donec aliquam hendrerit velit, a faucibus justo luctus ut. Ut cursus lacus ut vehicula porttitor. Morbi malesuada facilisis enim, et auctor diam congue sed. Proin interdum id orci eget auctor."

let loremArray = lorem.replace(/,/g," ").replace(/\./g," ").toLowerCase();

const loremWordsCout = loremArray.split(" ").filter(function(a){return a !== ''}).length;

const loremEtCout = loremArray.split(" ").filter(function(a){return a == 'et'}).length;

console.log(`There are ${loremWordsCout} words in this text. The word et appears ${loremEtCout} times.`);

//Bonus 2:
function phraseToCheck(phrase){
    let simplifiedString = phrase.replace(/[^a-zA-Z]/g,'').toLowerCase();
    let isPalindrome = simplifiedString.split("").reverse().join("") === simplifiedString;
    return `${phrase} | Is a palindrome:${isPalindrome}`;
} 

console.log(phraseToCheck("A man, a plan, a canal, Panama!"));
console.log(phraseToCheck("Amor, Roma"));
console.log(phraseToCheck("race car"));
console.log(phraseToCheck("stack cats"));
console.log(phraseToCheck("step on no pets"));
console.log(phraseToCheck("taco cat"));
console.log(phraseToCheck("put it up"));
console.log(phraseToCheck("Was it a car or a cat I saw?"));
console.log(phraseToCheck("No 'x' in Nixon"));