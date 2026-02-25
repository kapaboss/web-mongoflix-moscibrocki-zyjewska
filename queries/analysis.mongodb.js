db = db.getSiblingDB('mongoflix')

print("\n--- RAPORT ANALITYCZNY BAZY MONGOFLIX ---")

// Jakie filmy są z gatunku sci-fi?
print("\n1. Filmy z gatunku 'sci-fi':")
const sciFi = db.filmy.find({gatunki: "sci-fi"}, {_id: 0, tytuł: 1}).toArray();
printjson(sciFi)

// Filmy stworzone po 2000 roku, z oceną powyżej 8
print("\n2. Które filmy zostały stworzone po 2000 roku i mają ocenę powyżej 8?")
const rokIOcena = db.filmy.aggregate([
    { $lookup: { from: "recenzje", localField: "_id", foreignField: "film_id", as: "recenzje" }},
    { $unwind: "$recenzje" },
    { $match: { data_premiery: { $gt: new Date("2000-01-01")}, "recenzje.ocena": { $gt: 8 }}},
    { $project: { _id: 0, tytuł: 1, data_premiery: 1, ocena: "$recenzje.ocena" }}]).toArray()
printjson(rokIOcena)