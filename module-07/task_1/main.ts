import { returnGreeting } from "./greetings_module";
import * as allGreetingFunctions from "./greetings_module";
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module";

console.log(returnGreeting("Hola!")); // The message from Greetings_module is Hola!
console.log(allGreetingFunctions.returnGreeting("Ciao!")); // The message from Greetings_module is Ciao!
console.log(returnGreetingLength("Privet!")); // The message from GreetingsLength_module is Privet! It is 7 characters long.
