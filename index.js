const array = [
    "red",
    "neutral",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "red",
    "red",
    "blue",
    "neutral",
    "blue",
    "red",
    "blue",
    "blue",
    "black",
    "neutral",
    "neutral",
    "red",
    "blue",
    "neutral",
    "neutral",
    "red",
    "neutral"
]

let num = 0
let ray = []
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    ray = ray.concat([element])
    num += 1
    if (num == 5) {
        console.log(ray)
        num = 0
        ray = [] // Reset ray to an empty array
    }
}

// Print the remaining elements in ray if there are any
if (ray.length > 0) {
    console.log(ray)
}
