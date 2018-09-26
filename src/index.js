module.exports = function solveEquation(equation) {
    const clearEquation = equation.split(' ').join('').split('*x^2').join(',').split('*x').join(',').split(',');
    const aEquation = clearEquation[0];
    const bEquation = clearEquation[1];
    const cEquation = clearEquation[2];
    
    const discriminant = bEquation*bEquation - 4*aEquation*cEquation;
    let solution = [];
    
    if (discriminant > 0) {
        let firstX = (-bEquation - Math.sqrt(discriminant) )/(2*aEquation);
        let secondX = (-bEquation + Math.sqrt(discriminant) )/(2*aEquation);
        solution.push( Math.round(firstX * 100) / 100 );
        solution.push( Math.round(secondX * 100) / 100 );
    }
    
    return solution.sort( (a, b) => a - b);
    
}
