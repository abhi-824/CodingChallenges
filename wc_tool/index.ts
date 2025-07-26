import * as fs from 'fs';

const args = process.argv.slice(2);
const command = args[0];
const filePath = command ? args[1] : args[0];
let content;


const countBytes = () => {
    let totalBytes = 0;
    for (let i = 0; i < content.length; i++) {
        const codePoint = content.codePointAt(i);
        if (codePoint <= 0x7F) {
            totalBytes += 1;
        } else if (codePoint <= 0x7FF) {
            totalBytes += 2;
        } else if (codePoint <= 0xFFFF) {
            totalBytes += 3;
        } else if (codePoint <= 0x10FFFF) {
            totalBytes += 4;
            i++;
        }
    }
    return totalBytes;
}

const countLines = () => {
    const lines = content.split('\n');
    let lineCount = lines.length;
    if (lines[lineCount - 1] === '') {
        lineCount--;
    }
    return lineCount;
}

const countWords = () => {
    const words = content.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

const countChars = () => {
    const characters = content.split('');
    return characters.length;
}


const executeCommand = (command) => {
    switch (command) {
        case '-c':
            console.log("Bytes in this file: " + countBytes());
            break;
        case '-l':
            console.log("Lines in this file: " + countLines());
            break;

        case '-w':
            console.log("Words in this file: " + countWords());
            break;

        case '-m':
            console.log("Characters in this file: " + countChars());
            break;

        default:
            console.log(countBytes() + " " + countLines() + " " + countWords() + " " + countChars())
            break;

    }
}

if (!filePath) {
    let data = '';
    process.stdin.on('data', chunk => {
        data += chunk.toString();
    });
    process.stdin.on('end', () => {
        console.log(data)
        content = data;
        executeCommand(command);
    });
} else {
    content = fs.readFileSync(filePath, 'utf-8');
    executeCommand(command);
}
