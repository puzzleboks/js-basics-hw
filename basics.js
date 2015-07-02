// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//Number. The Javascript operator typeof() returns the data type.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//String. Any set of characters within quotes is a string in Javascript.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//Array. Javascript can store multiple values in a single variable.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//Number. NaN is still a numeric type. This just means that the value cannot be represented.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//'hamburgers'. The plus operator can add numbers together or concatenate strings.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//NaN. Javascript is trying to perform subtraction on two items that are not numbers.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//'johnny5'. Javascript assumes that 5 is a string (type coercion) and concatenates the two strings.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//NaN. Multiplication operation won't work because 'luftbaloons' is a string, so NaN is returned. 

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
//1. [2,4,6,] pop removes the last item in an array. 
//2. [2,4,6,8,10] push adds an item to the end of an array. 
//3. [3,2,4,6,8] unshift adds items to the beginning of an array, and returns the new length.

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
