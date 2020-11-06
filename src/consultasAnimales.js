//animales con peso menor a 1000
db.animales.find({"tamaño.peso": {$gt:1000}})

//todos los animales cuya longevidad sea 32 y cuya dieta no sea carnivora (uso de $and (explícito), $eq y $ne)
db.animales.find({$and: [ {longevidad: {$eq: 32}} , {dieta:{$ne: "carnivora"}} ]})

//todos los animales que no vivan menos de 50 años ni cuyo nombre acabe por 'a' (uso de $nor, $lt y $regex)
db.animales.find({$nor: [{longevidad:{$lt:50}} , {raza: {$regex:/a$/}}]})

//Todos los animales que pesen entre 31.8 y 46.3 kg y los que tengan una altura superior a 3.0 m 
//(uso de $or, $and(implícito), $gte, $lte y $gt)
db.animales.find({$or: [ {"tamaño.peso":{$gte:31.8 , $lte:46.3}} , {"tamaño.altura":{$gt:3.0}} ] })

//Todos los animales que no son ni carnivoros ni herviboros de forma larga(uso de $not y $in)
db.animales.find({dieta: {$not: {$in: ["carnivora" , "herbivora"]}} })

//Todos los animales que no son ni carnivoros ni herbivoros de forma corta(uso de $nin)
db.animales.find({dieta: {$nin: ["carnivora", "herbivora"]} })

//Todos los animales que tenga en su nombre una a despues cualquier letra y despues una a,
//un ejemplo de este tipo de palabra sería 'casa' ($uso de $regex)
db.animales.find({raza: {$regex:/a.a/} })