export function countOfAtoms(formula: string): string {
    let i = 0
    const n = formula.length

    const parseAtom = (): string => {
        let atom = formula[i]
        i++
        while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
            atom += formula[i]
            i++
        }
        return atom
    };

    const parseNum = (): number => {
        if (i >= n || isNaN(Number(formula[i]))) {
            return 1
        }
        let num = 0
        while (i < n && !isNaN(Number(formula[i]))) {
            num = num * 10 + Number(formula[i])
            i++
        }
        return num
    };

    const stack: Map<string, number>[] = [new Map()]

    while (i < n) {
        if (formula[i] === '(') {
            i++
            stack.push(new Map())
        } else if (formula[i] === ')') {
            i++
            const num = parseNum()
            const poppedMap = stack.pop()!
            for (const [atom, count] of poppedMap) {
                stack[stack.length - 1].set(atom, (stack[stack.length - 1].get(atom) || 0) + count * num)
            }
        } else {
            const atom = parseAtom()
            const num = parseNum()
            stack[stack.length - 1].set(atom, (stack[stack.length - 1].get(atom) || 0) + num)
        }
    }

    const finalMap = stack.pop()!
    const sortedAtoms = Array.from(finalMap).sort((a, b) => a[0].localeCompare(b[0]))

    let result = ''
    for (const [atom, count] of sortedAtoms) {
        result += atom + (count > 1 ? count : '')
    }

    return result
}