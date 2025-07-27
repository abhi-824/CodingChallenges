# 🛠️ wc-tool | Word Count Utility in TypeScript

A clone of the Unix `wc` (word count) command, built as part of the [Coding Challenges](https://codingchallenges.fyi/challenges/challenge-wc) series.

This tool supports counting:
- Bytes (`-c`)
- Lines (`-l`)
- Words (`-w`)
- Characters (`-m`)

### Step one

```
ts-node index.ts -c "test.txt"
```

Output:
```
Bytes in this file: 342190
```

### Step Two

```
ts-node index.ts -l "test.txt"
```

Output:
```
Lines in this file: 7145
```

### Step Three
```
ts-node index.ts -w "test.txt"
```

Output:
```
Words in this file: 58164
```

### Step Four
```
ts-node index.ts -m "test.txt"
```
Output:
```
Characters in this file: 339292
```

### Step Five
```
ts-node index.ts "test.txt"
```
Output:
```
342190 7145 58164 339292
```


### Step Six
```
cat test.txt | ts-node index.ts
```
Output:
```
342190 7145 58164 339292
```

### Todo: 
- [ ] -lm and combination options should also work
- [ ] Unit tests
- [ ] validations

### Learnings:

#### UTF-8 Encoding Overview

UTF-8 is a variable-width character encoding used to represent Unicode characters. It uses 1 to 4 bytes per character depending on the Unicode code point.

| Bytes | Unicode Range (Hex)    | Usage Examples                                                                 |
|-------|------------------------|--------------------------------------------------------------------------------|
| 1     | U+0000 – U+007F        | Basic ASCII characters (English letters, digits, control characters, etc.)    |
| 2     | U+0080 – U+07FF        | Latin-1 Supplement, Latin Extended-A, Greek, Cyrillic, Arabic, Hebrew, etc.   |
| 3     | U+0800 – U+FFFF        | Most common characters in BMP including CJK (Chinese, Japanese, Korean), etc.|
| 4     | U+010000 – U+10FFFF    | Supplementary characters: rare symbols, emojis, historical scripts, etc.      |

> **Note:** All UTF-8 byte sequences are backwards-compatible with ASCII.

#### Using stdin for reading piped input

```
    process.stdin.on('data', chunk => {
        data += chunk.toString();
    });
    process.stdin.on('end', () => {
        console.log(data)
        content = data;
        executeCommand(command);
    });
```
