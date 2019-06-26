// the type is any for not setting message.
let message;
message = 'abc';


// the type is same of stringArray and stringArray2.
let stringArray = (<string>message).split('b');
let stringArray2 = (message as string).split('b');

// the message2 auto set to string.
let message2 = 'abe';
// the message2 has string method.
message2.toLocaleLowerCase();
