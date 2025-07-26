## WC Tool

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
