const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");


exports.getFlights = async (req, res) => {
   try {
    const flights = Flights;
    res.status(200).json({
        massage: "All Flights",
        flights: flights,
    });
   }catch (err) {
    res.status(500).json({massege: err});
   }
}

exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "flight found",
            flight,
        })
    }catch (err) {
        res.status(500).json({massege: err});
    }
}

exports.addFlight = async (req, res) => {
    try {
      const {title, time, price, date} = await req.body;

      const newFlight = {
        id: uuid(),
        title,
        time,
        price,
        date,
      };

      Flights.push(newFlight);

      res.status(201).json({
        message: "Flight created",
        newFlight,
      });
    }catch (err) {
     res.status(500).json({massege: err});
    }
 }


exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "flight updated",
            flight,
        })
    }catch (err) {
        res.status(500).json({massege: err});
    }
}

exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "flight deleted",
            flight,
        })
    }catch (err) {
        res.status(500).json({massege: err});
    }
}