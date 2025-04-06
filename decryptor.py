import sys
import re

def main():
    with open("encrypted-people.txt") as file:
        content = file.read()

    repl = {
        "void": "0",
        "u": "1",
        "U": "2",
        "z": "3",
        "T": "4",
        "t": "5",
        "x": "6",
        "_": "8",
        "HUGE": "9",
        "cam": "-",
        "com": ".",

        "6": "b",
        "B": "a",
        "k": "s",
        "K": "c",
        "-": "e",
        "j": "r",
        "\\)": "m",
        "@": "n",
        "2": "u",
        "H": "\"",
        ";": ":",
        "&": "g",
        "5": ",",

        "#": "f",
        "\\(": "l",
        "\\}": "i",
        "N": "d",

        "\\[": "j",
        "\\]": "k",
        "L": "t",
        "!": "o",
        "1": "v",
        "\\^": "w",

        "o": "y",
        "O": "z",
        "\\{": "h",
        "\\~": " ",

        "FFH": "{\"",
        "F5": "},",
        "FF5": "}},",
        "FFF": "}}}",
        "F": "}",
        ":::": "[]",
        "::": "]",
        ":": "[",
        "\\+\\+": ")",
        "\\+": "(",
        "\"": "'",
    }

    repl_lit = {
        "void": "0",
        "u": "1",
        "U": "2",
        "z": "3",
        "T": "4",
        "t": "5",
        "x": "6",
        "_": "8",
        "HUGE": "9",
        "cam": "-",
        "com": ".",

        "6": "b",
        "B": "a",
        "k": "s",
        "K": "c",
        "-": "e",
        "j": "r",
        ")": "m",
        "@": "n",
        "2": "u",
        "H": "\"",
        ";": ":",
        "&": "g",
        "5": ",",

        "#": "f",
        "(": "l",
        "}": "i",
        "N": "d",

        "[": "j",
        "]": "k",
        "L": "t",
        "!": "o",
        "1": "v",
        "^": "w",

        "o": "y",
        "O": "z",
        "{": "h",
        "~": " ",

        "FFH": "{\"",
        "F5": "},",
        "FF5": "}},",
        "FFF": "}}}",
        "F": "}",
        ":::": "[]",
        "::": "]",
        ":": "[",
        "++": ")",
        "+": "(",
        "\"": "'",

    }

    with open("decrypted-people.json", "w") as out:
        output = re.sub("|".join(repl), lambda x: repl_lit[x.group(0)], content).replace("s*", "S")
        output = output.replace("\"*f", "\"F")
        output = output.replace("\"*b", "\"B")
        output = output.replace("\"*r", "\"R")
        output = output.replace("\"*p", "\"P")
        output = output.replace("\"*t", "\"T")
        output = output.replace("\"*l", "\"L")
        output = output.replace("\"*z", "\"Z")
        output = output.replace("\"*d", "\"D")
        output = output.replace("\"*h", "\"H")
        output = output.replace("\"*j", "\"J")
        output = output.replace("\"*n", "\"N")
        output = output.replace("\"*v", "\"V")
        output = output.replace("\"s*", "\"S")
        output = output.replace("\"c*", "\"C")
        output = output.replace("\"m*", "\"M")
        output = output.replace("\"w*", "\"W")
        output = output.replace("\"a*", "\"A")
        output = output.replace("\"e*", "\"E")
        output = output.replace("\"i*", "\"I")
        output = output.replace("\"g*", "\"G")
        output = output.replace("\"k*", "\"K")
        output = output.replace("\"o*", "\"O")
        output = output.replace("\"y*", "\"Y")
        output = output.replace("\"q*", "\"Q")
        output = output.replace("\"u*", "\"U")

        output = output.replace("*f", "F")
        output = output.replace("*b", "B")
        output = output.replace("*r", "R")
        output = output.replace("*p", "P")
        output = output.replace("*t", "T")
        output = output.replace("*l", "L")
        output = output.replace("*z", "Z")
        output = output.replace("*d", "D")
        output = output.replace("*h", "H")
        output = output.replace("*j", "J")
        output = output.replace("*n", "N")
        output = output.replace("*v", "V")
        output = output.replace("s*", "S")
        output = output.replace("c*", "C")
        output = output.replace("m*", "M")
        output = output.replace("w*", "W")
        output = output.replace("a*", "A")
        output = output.replace("e*", "E")
        output = output.replace("i*", "I")
        output = output.replace("g*", "G")
        output = output.replace("k*", "K")
        output = output.replace("o*", "O")
        output = output.replace("y*", "Y")
        output = output.replace("q*", "Q")
        output = output.replace("u*", "U")


        # Maybe this was wrongy :3 uwu TvT
        # also walso, where could the little wittle x be?
        output = output.replace("Q*", "Q")
        output = output.replace("Pasquale", "Pasquale")
        print(output, file=out)

if __name__ == "__main__":
    main()
