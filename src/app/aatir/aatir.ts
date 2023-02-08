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