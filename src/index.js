module.exports = function solveEquation(equation) {
    let components = equation.split(' ');
    let a = components[0];
    let b = components.slice(3, 5).join('');
    let c = components.slice(7).join('');
    let D = b*b - 4 * a * c;
    let x1 = (-b + Math.sqrt(D))/(2*a);
    let x2 = (-b - Math.sqrt(D))/(2*a);
    console.log(components);
    console.log(Math.min(x1,x2), Math.max(x1,x2));

    return [Math.round(Math.min(x1,x2)), Math.round(Math.max(x1,x2))];
};
