function inverterString(s) {
    return s.split("").reverse().join("");
}

let texto = "string invertidA";
console.log("Original:", texto);
console.log("Invertido:", inverterString(texto));
