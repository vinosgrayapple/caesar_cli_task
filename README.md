## CLI tool for encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

**Installation**

```bash
$ git clone https://github.com/vinosgrayapple/caesar_cli_task.git
$ cd cli-tool && npm install
$ cd task1
```

**CLI tool usage (short alias and full name):**

- **-s, --shift**: a shift
-  **-i, --input**: an input file
-  **-o, --output**: an output file
-  **-a, --action**: an action encode/decode

**Examples usage**

```bash
node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

node caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt

node caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `CLI tool for encode and decode a text!`
>
> output.txt
> `JSP avvs mvy lujvkl huk kljvkl h alea!`


## License
[MIT](https://choosealicense.com/licenses/mit/)
