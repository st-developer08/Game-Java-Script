let score = 0


let first = prompt("1. какой из них свойства \n a)splice \n b)length \n c)indexof"  )

if (first === "b"){
    score++
}

let second = prompt('2.Что выведет этот код? \n let a = [1, 2, 3];\n a[10] = 99;\n console.log(a.length);\n a) 11\n b) 12\n c) 13')
if(second === "a"){
    score++
}

let thirth = prompt('3. Найди ошибку:\n let text = " JavaScript "\n let result = text.trim().toUppercase();\n console.log(result);\n a) ошибка в toUppercase\n b) NaN\n c) Тут нет ошибок')

if(thirth === "a"){
    score++
}

let four = prompt('4. Что выведет этот код?\n let a = 5;\n let b = 5;\n console.log(a == b);\n a) false\n b) true\n c) NaN')
if(four === "b"){
    score++
}

let five = prompt('5.Что выведет? \n console.log(typeof NaN) \n a)undefined \n b)Nan \n c)number')

if(five === "c"){
    score++
}

alert(`Тест заверщен \n Правилных ответов ${score} из 5`)

