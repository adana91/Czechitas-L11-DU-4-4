// tady je místo pro náš program

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]


console.log(`a) vsechna cisla`)
numbers.forEach((number) => {
    console.log(number)
})

console.log(`b) druhe mocniny`)
numbers.forEach((number) => {
    console.log(number * number)
})

console.log(`c) zaporna cisla`)
numbers.forEach((number) => {
	if (number < 0) {
		console.log(number)
	}
})

console.log(`d) absolutni hodnoty cisel`)
numbers.forEach((number) => {
    if (number < 0) {
        console.log(-1 * number)
    } else (
        console.log(number)
    )
})

console.log(`e) suda cisla`)
numbers.forEach((number) => {
    if (number % 2 == 0) {
        console.log(number)
    }
})

console.log(`f) cisla jejichz absolutni hodnota je delitelna tremi`)
numbers.forEach((number) => {
    if (number < 0) {
        absoluteValue = number * -1
            if (absoluteValue % 3 == 0) {
                console.log(number)
            }
    } else {
        if (number % 3 == 0) {
            console.log(number)
        }
    }
})

console.log(`g) jak daleko je kazde cislo od cisla 5`)
numbers.forEach((number) => {
    let indexNum = numbers.indexOf(number)
    let index5 = numbers.indexOf(5)
    console.log(index5 - indexNum)
})

console.log(`h) Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5`)
numbers.forEach((number) => {
    let indexNum = numbers.indexOf(number)
    let index5 = numbers.indexOf(5)
    let distance = index5 - indexNum
    console.log(distance * distance)
})

console.log(`i) Spočítejte, kolik je v seznamu záporných čísel.`)
let negNumbers = 0
numbers.forEach((number) => {
    if (number < 0) {
        negNumbers++
    } 
})
console.log(negNumbers)

console.log(`j) Spočítejte součet všech čísel v poli`)
let sum = 0
numbers.forEach((number) => {
    sum += number
})
console.log(sum)

console.log(`k) Spočítejte průměr všech čísel v poli`)
let sum1 = 0
numbers.forEach((number) => {
    sum1 += number
})
console.log(sum1 / numbers.length)

console.log(`l) Spočítejte součet všech kladných čísel v poli.`)
let sumPos = 0
numbers.forEach((number) => {
    if (number > 0) {
        sumPos += number
}})
console.log(sumPos)




