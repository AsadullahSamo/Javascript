for(let i=0; i<10; i++){
    if(i==5){
        break;
    }
    document.write(i);
    document.write("<br>");
}

document.write("<br><br>")
// breaking outer loop with inner break, we give outer loop a name, and write break statement with this name

outer: for(let i=1; i<=10; i++){
    document.write(i);
    document.write("<br>");

    for(let j=1; j<=2; j++){
        if(i==4){
            break outer;
        }
        document.write("Asad");
        document.write("<br>");
    }      // end of inner loop

}         //  end of outer loop