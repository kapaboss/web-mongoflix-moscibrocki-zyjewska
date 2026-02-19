db = db.getSiblingDB('mongoflix');

db.filmy.drop()
db.recenzje.drop()


console.log("--- Start: Inicjalizacja bazy Mongoflix ---");

db.filmy.insertMany([
    {
        _id: 1,
        tytuł: "Titanic",
        data_premiery: ISODate("1997-12-19"),
        gatunki: ["dramat", "romans"],
        reżyser: "James Cameron",
        aktorzy: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
        typDostępu: "Premium",
        licznikWyświetleń: 42567842
    },
    {
        _id: 2,
        tytuł: "Incepcja",
        data_premiery: ISODate("2010-07-16"),
        gatunki: ["sci-fi", "thriller", "akcja"],
        reżyser: "Christopher Nolan",
        aktorzy: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        typDostępu: "Premium",
        licznikWyświetleń: 38900412
    },
    {
        _id: 3,
        tytuł: "Gladiator",
        data_premiery: ISODate("2000-05-05"),
        gatunki: ["dramat", "historyczny", "akcja"],
        reżyser: "Ridley Scott",
        aktorzy: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        typDostępu: "Standard",
        licznikWyświetleń: 27654321
    },
    {
        _id: 4,
        tytuł: "Interstellar",
        data_premiery: ISODate("2014-11-07"),
        gatunki: ["sci-fi", "dramat", "przygodowy"],
        reżyser: "Christopher Nolan",
        aktorzy: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
        typDostępu: "Premium",
        licznikWyświetleń: 41234567
    },
    {
        _id: 5,
        tytuł: "Matrix",
        data_premiery: ISODate("1999-03-31"),
        gatunki: ["sci-fi", "akcja"],
        reżyser: "Lana Wachowski, Lilly Wachowski",
        aktorzy: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        typDostępu: "Standard",
        licznikWyświetleń: 39876543
    },
    {
        _id: 6,
        tytuł: "Avatar",
        data_premiery: ISODate("2009-12-18"),
        gatunki: ["sci-fi", "przygodowy", "fantasy"],
        reżyser: "James Cameron",
        aktorzy: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        typDostępu: "Premium",
        licznikWyświetleń: 50123456
    },
    {
        _id: 7,
        tytuł: "Joker",
        data_premiery: ISODate("2019-10-04"),
        gatunki: ["dramat", "kryminalny", "thriller"],
        reżyser: "Todd Phillips",
        aktorzy: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        typDostępu: "Standard",
        licznikWyświetleń: 34567890
    },
    {
        _id: 8,
        tytuł: "Forrest Gump",
        data_premiery: ISODate("1994-07-06"),
        gatunki: ["dramat", "komedia"],
        reżyser: "Robert Zemeckis",
        aktorzy: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        typDostępu: "Standard",
        licznikWyświetleń: 36789012
    }
]);


db.recenzje.insertMany([
    {
        _id: 1,
        nazwaUzytk: "JanekDzbanek",
        ocena: 9,
        recenzja: "Niesamowita historia i świetna gra aktorska.",
        film_id: 1   // Titanic
    },
    {
        _id: 2,
        nazwaUzytk: "Kasia1999",
        ocena: 8,
        recenzja: "Bardzo wciągający film, świetny klimat.",
        film_id: 2   // Incepcja
    },
    {
        _id: 3,
        nazwaUzytk: "MatiPro",
        ocena: 10,
        recenzja: "Arcydzieło kina science-fiction!",
        film_id: 4   // Interstellar
    },
    {
        _id: 4,
        nazwaUzytk: "FilmowyFan",
        ocena: 7,
        recenzja: "Dobry, ale momentami zbyt przewidywalny.",
        film_id: 3   // Gladiator
    },
    {
        _id: 5,
        nazwaUzytk: "OlaKino",
        ocena: 6,
        recenzja: "Efekty świetne, fabuła trochę słabsza.",
        film_id: 6   // Avatar
    },
    {
        _id: 6,
        nazwaUzytk: "Tomek_92",
        ocena: 8,
        recenzja: "Klasyk kina akcji, zawsze wracam.",
        film_id: 5   // Matrix
    },
    {
        _id: 7,
        nazwaUzytk: "AniaRecenzuje",
        ocena: 9,
        recenzja: "Mocny i poruszający film.",
        film_id: 7   // Joker
    },
    {
        _id: 8,
        nazwaUzytk: "KinoManiak",
        ocena: 10,
        recenzja: "Ponadczasowy i wzruszający.",
        film_id: 8   // Forrest Gump
    }
]);

console.log("--- Sukces: Mongoflix gotowy do pracy! ---");




