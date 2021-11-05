function floodFill(lista, x, y, newColor){
    currColor = lista[y][x];
    function paint(x, y, currColor, newColor){
        // checking if it's out of boundaries and if it's currColor:
        // if (x < 0 || y < 0 || x >= lista[0].length || y >= lista.length || lista[y][x] !== currColor){
        //     return
        // }

        //checking only currColor after checking lista, lista[y] and lista [x]
        if (lista && lista[y] && lista[x] && lista[y][x] === currColor){
        lista[y][x] = newColor;
        paint(x + 1, y, currColor, newColor);
        paint(x - 1, y, currColor, newColor);
        paint(x, y + 1, currColor, newColor);
        paint(x, y - 1, currColor, newColor);
        } else return
    }
    paint(x, y, currColor, newColor)
}

let desenho = [
    ['x', 'o', 'o', 'x', 'x', 'x'],
    ['x', 'o', 'x', 'o', 'x', 'x'],
    ['x', 'o', 'o', 'x', 'x', 'x'],
    ['x', 'o', 'x', 'x', 'x', 'x'],
    ['x', 'o', 'x', 'x', 'x', 'x'],
]

console.log('antes: ', desenho);
floodFill(desenho, 2, 2, 'H');
console.log('depois: ', desenho)