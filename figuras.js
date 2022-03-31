//Codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`el area del cuadrado mide: ${areaCuadrado} cm2`);

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados de la figura miden: lado 1: ${ladoTriangulo1} cm, lado 2: ${ladoTriangulo2} cm
            , base : ${baseTriangulo} y su altura es ${alturaTriangulo} cm `);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log(`El perimetro de la figura mide: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;

console.log(`el area del la figura mide: ${areaTriangulo} cm2`);

console.groupEnd();

