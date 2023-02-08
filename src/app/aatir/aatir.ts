// works as interface

export interface Aatir {
    available: Number,
    booked : Number,
    name: String,
    total : Number,
}

export interface AatirList { 
    roomType : String,
    amenities : String,
    price: Number,
    image : String[],
    checkIn: Date,
    checkOut: Date,
}
export interface Movie {
    title: String,
    description: String,
    releaseDate: Date,
    actors: Number,
}

export interface Actor {
    name: String,
    dob : Date,
    movies : Number,
}