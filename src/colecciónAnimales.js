db.animales.drop()

db.animales.insertMany(
    {raza: "serpiente",longevidad: 36,dieta: "carnivora",tamaño:{peso: 46.2,altura: 2.5}},
    {raza: "iguana",longevidad: 24 ,dieta: "omnivora",tamaño:{peso: 1.3,altura: 1.3}},
    {raza: "elefante",longevidad: 67,dieta: "herbivora",tamaño:{peso: 2791.3,altura: 3.2}},
    {raza: "gato",longevidad: 32 ,dieta: "carnivora",tamaño:{peso:3.8,altura: 0.5}},
    {raza: "perro",longevidad: 32,dieta: "omnivora",tamaño:{peso: 3.6,altura: 0.6}},
    {raza: "jirafa",longevidad: 56,dieta: "hervivora",tamaño:{peso: 852.4,altura: 5.4}},
    {raza: "mochuelo",longevidad: 67,dieta: "carnivora",tamaño:{peso:0.2,altura:0.6}},
    {raza: "rata",longevidad:15,dieta: "omnivora",tamaño:{peso: 0.3,altura:0.1}},
    {raza: "león",longevidad: 45,dieta: "carnivora",tamaño:{peso: 31.6,altura: 1.3}},
    {raza: "tortuga",longevidad:103,dieta: "herbivora",tamaño:{peso:535.2,altura:0.4}},
    {raza: "vaca",longevidad: 50,dieta: "hervibora",tamaño:{peso:1178.3,altura:1.2}}
    )