const fs = require('fs');
const readline = require('readline');
const greetings = require('./greetings');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name
rl.question('Enter your name: ', (name) => {
    // Generate personalized greeting
    const greetingMessage = greetings.generateGreeting(name);

    // Save the greeting to output.txt
    fs.writeFile('output.txt', greetingMessage, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Greeting saved to output.txt!');
        }

        // Close the readline interface
        rl.close();
    });
});