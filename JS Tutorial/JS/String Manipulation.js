let str = "Asadullah Samo";
console.log(`Hi, ${str}`);

//   1. length()
console.log("Length of Asadullah Samo is "+str.length);

//   2. charAt(arg)
console.log("Char at 2 of Asad is "+str.charAt(2));        //  or console.log(str[2]);

//   3. string substring(startIndex, endIndex);       // end index is excluded
    let line = "I am learning Javascript";
    console.log("Substring is " + line.substring(2, 10));

    // 4. indeoxOf(arg) OR indexOf(arg, indextoSearchFrom)      --> if string is not found, it'll return -1
    // and lastIndexOf(arg)
    let ind = line.lastIndexOf("a");
    console.log("Last index of am is " +ind);

    ind = line.indexOf("Javascript");
    console.log("Index of Javascript is " + ind);

    // 5. trim(), trimStart(), trimEnd()

    str = "      This is VS Code     ";
    console.log("After applying trim() "+ str.trim());

    // 6. toUpperCase() and toLowerCase()
    console.log(str.toLowerCase());

    // 7. replace(strToReplace, strToReplaceWith)
    console.log(line.replace("Javascript", "JS"));

    // 8. Boolean includes(str)  --> Check whether string is present or not      
    console.log(line.includes("Javascript"));
    // or to check whether string is present or not we can also use indexOf(str) if it returns -1 means string is not present)