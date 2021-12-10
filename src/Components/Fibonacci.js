function CalculateFibonacciSequence(rounds) {
    let n1 = 0
    let n2 = 1
    let result = "0"
    for (let index = 0; index < rounds; index++) {
        result += `, ${n2}`
        let temporaryN2 = n2
        n2 = n1 + n2
        n1 = temporaryN2
    }
    return result
}

export default CalculateFibonacciSequence;