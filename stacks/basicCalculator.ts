export function calculate(s: string): number {
    const isNumber = (char: string) => '0' <= char && char <= '9'
    let calculatedResult = 0
    let currentNumber = 0
    let sign = 1

    // 1 is default in signStackForParenthesis, so that we can have at least one number all the time.
    const signStackForParenthesis: number[] = [1] 

    // Get the last sign of the array, without Array.pop()
    const getLastSign = () => signStackForParenthesis[signStackForParenthesis.length - 1]

    // Calculate "current number" into the result.
    const calculateResult = () => {
        const finalSign = sign * getLastSign() // 1 or -1
        calculatedResult += currentNumber * finalSign // add positive/negative number
        currentNumber = 0 // reset the current number, as it is added (subtracted)
    }

    for (const char of s) {
        // We can do the following, with that "1 4" is not a valid number 14, and such
        // string won't be given by its rule of the question.

        if (isNumber(char)) {
            currentNumber = currentNumber * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0))
            
        } else { 
            calculateResult()

            if (char === '-') sign = -1
            else if (char === "+") sign = 1
            else if (char === "(") {
                // Make sure to push with the lastSign of parenthesis!
                // if two negatives, it should be positive, and that is why.
                signStackForParenthesis.push(sign * getLastSign())

                sign = 1 // need to reset, as the + sign can be skipped
            }
            else if (char === ")") signStackForParenthesis.pop()
        }
    }
    
    calculateResult()
    return calculatedResult
};