function calculate(a, b, operation)
{
    let result = null;
    switch(operation)
    {
        case "+":
            result = sum(a, b);
            break;
        
        case "-":
            result = substract(a, b);
            break;

        case "*":
            result = multiply(a, b);
            break;
            
        case "/":
            result = division(a, b);
            break; 

        case "%":
            result = divisionWithRemain(a, b);
            break; 
           
        case "sqrt":
            result = squareRoot(a);
            break; 

        case "^":
            result = power(a, b);
            break;
            
        default:
            break;   
    }

    return result;
}