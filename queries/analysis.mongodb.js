db = db.getSiblingDB('mongoflix')

print("\n--- RAPORT ANALITYCZNY BAZY MONGOFLIX ---")

// Jakie filmy są z gatunku sci-fi?
print("\n1. Filmy z gatunku 'sci-fi':")
const sciFi = db.filmy.find({gatunki: "sci-fi"}, {_id: 0, tytuł: 1}).toArray();
printjson(sciFi)
