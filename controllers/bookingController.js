// Deobfuscated Code

const stripe = require("stripe")(process.env.STRIPE_SECRECT_KEY);
const Property = require("../Models/propertyModel");
const Booking = require("../Models/bookingModel");
const moment = require("moment");

// payment intent using the Stripe API.
exports.getcheckOutSession = async (req, res, next) => {
  const { amount, currency, paymentMethodTypes, propertyName } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency || "inr",
      payment_method_types: paymentMethodTypes,
      description: "Payment for testing",
      metadata: {
        propertyName: JSON.stringify(propertyName),
      },
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log(error);
  }
};

// new booking for a property.
exports.createBookings = async (req, res) => {
  try {
    if (!req.user) {
      throw new Error("Please login First");
    }
    const { property, price, guests, fromDate, toDate } = req.body;
    const fromMoment = moment(fromDate);
    const toMoment = moment(toDate);
    const numberOfnights = toMoment.diff(fromMoment, "days");
    const propertyDoc = await Property.findById(property);
    const isBooked = propertyDoc.currentBookings.some((booking) => {
      return (
        (new Date(fromDate) <= booking.toDate &&
          new Date(fromDate) >= booking.fromDate) ||
        (new Date(toDate) <= booking.toDate &&
          new Date(toDate) >= booking.fromDate)
      );
    });
    if (isBooked) {
      return res.status(400).json({
        status: "fail",
        message: "The property is already booked for the requested dates.",
      });
    }
    const booking = await Booking.create({
      property,
      price,
      guests,
      fromDate,
      toDate,
      numberOfnights,
      user: req.user._id,
    });
    const updatedProperty = await Property.findByIdAndUpdate(
      property,
      {
        $push: {
          currentBookings: {
            bookingId: booking.id,
            fromDate,
            toDate,
            userId: booking.user,
          },
        },
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        booking,
        updatedProperty,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Retrieves all bookings for a logged-in user.
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    });
    res.status(200).json({
      status: "success",
      data: {
        bookings,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Retrieves the details of a specific booking.
exports.getBookingDetails = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    res.status(200).json({
      status: "success",
      data: {
        bookings: booking,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
};

//  Obfuscated Code

// function _0x374c(_0x45269e, _0x4e8c75) {
//   const _0x5ad7ab = _0x5ad7();
//   return (
//     (_0x374c = function (_0x374cd5, _0x31522f) {
//       _0x374cd5 = _0x374cd5 - 0x161;
//       let _0x5e4e4e = _0x5ad7ab[_0x374cd5];
//       return _0x5e4e4e;
//     }),
//     _0x374c(_0x45269e, _0x4e8c75)
//   );
// }
// const _0x47bcba = _0x374c;
// (function (_0x3922a2, _0x4513dd) {
//   const _0x4e92f3 = _0x374c,
//     _0x5ce8d2 = _0x3922a2();
//   while (!![]) {
//     try {
//       const _0x459f18 =
//         (-parseInt(_0x4e92f3(0x16c)) / 0x1) *
//           (-parseInt(_0x4e92f3(0x185)) / 0x2) +
//         -parseInt(_0x4e92f3(0x174)) / 0x3 +
//         parseInt(_0x4e92f3(0x17e)) / 0x4 +
//         -parseInt(_0x4e92f3(0x169)) / 0x5 +
//         (-parseInt(_0x4e92f3(0x161)) / 0x6) *
//           (parseInt(_0x4e92f3(0x186)) / 0x7) +
//         parseInt(_0x4e92f3(0x16a)) / 0x8 +
//         (-parseInt(_0x4e92f3(0x168)) / 0x9) *
//           (-parseInt(_0x4e92f3(0x17d)) / 0xa);
//       if (_0x459f18 === _0x4513dd) break;
//       else _0x5ce8d2["push"](_0x5ce8d2["shift"]());
//     } catch (_0xd33294) {
//       _0x5ce8d2["push"](_0x5ce8d2["shift"]());
//     }
//   }
// })(_0x5ad7, 0x1ddc7);
// const path = require(_0x47bcba(0x184)),
//   dotenv = require(_0x47bcba(0x17f))[_0x47bcba(0x183)]({
//     path: path["join"](__dirname, _0x47bcba(0x171)),
//   }),
//   stripe = require(_0x47bcba(0x163))(process["env"][_0x47bcba(0x16b)]),
//   Property = require(_0x47bcba(0x181)),
//   Booking = require(_0x47bcba(0x179)),
//   moment = require(_0x47bcba(0x180));
// (exports[_0x47bcba(0x173)] = async (_0x297d2c, _0x49896a, _0x59c719) => {
//   const _0x16b53a = _0x47bcba,
//     {
//       amount: _0x4500ed,
//       currency: _0x49c2e8,
//       paymentMethodTypes: _0x311324,
//       propertyName: _0x2b7964,
//     } = _0x297d2c["body"];
//   try {
//     const _0x5de697 = await stripe["paymentIntents"][_0x16b53a(0x165)]({
//       amount: _0x4500ed * 0x64,
//       currency: _0x49c2e8 || _0x16b53a(0x164),
//       payment_method_types: _0x311324,
//       description: "Payment\x20for\x20testing",
//       metadata: { propertyName: JSON[_0x16b53a(0x18b)](_0x2b7964) },
//     });
//     _0x49896a["json"]({ clientSecret: _0x5de697[_0x16b53a(0x189)] });
//   } catch (_0x34f36b) {
//     _0x49896a["status"](0x1f4)[_0x16b53a(0x18a)]({
//       error: _0x34f36b[_0x16b53a(0x166)],
//     }),
//       console[_0x16b53a(0x16e)](_0x34f36b);
//   }
// }),
//   (exports[_0x47bcba(0x178)] = async (_0x138f64, _0x455dac) => {
//     const _0xf0cd39 = _0x47bcba;
//     try {
//       if (!_0x138f64["user"]) throw new Error(_0xf0cd39(0x16d));
//       const {
//           property: _0x2c3f01,
//           price: _0x5e245c,
//           guests: _0x33c873,
//           fromDate: _0x218414,
//           toDate: _0x3a7827,
//         } = _0x138f64[_0xf0cd39(0x177)],
//         _0x2b126b = moment(_0x218414),
//         _0x4a49fc = moment(_0x3a7827),
//         _0x1950a2 = _0x4a49fc["diff"](_0x2b126b, "days"),
//         _0x58d45f = await Property["findById"](_0x2c3f01),
//         _0x20e033 = _0x58d45f["currentBookings"]["some"]((_0x549e2d) => {
//           const _0xbe46e3 = _0xf0cd39;
//           return (
//             (_0x549e2d["fromDate"] <= new Date(_0x218414) &&
//               new Date(_0x218414) <= _0x549e2d[_0xbe46e3(0x175)]) ||
//             (_0x549e2d[_0xbe46e3(0x176)] <= new Date(_0x3a7827) &&
//               new Date(_0x3a7827) <= _0x549e2d[_0xbe46e3(0x175)])
//           );
//         });
//       if (_0x20e033)
//         return _0x455dac[_0xf0cd39(0x16f)](0x190)[_0xf0cd39(0x18a)]({
//           status: "fail",
//           message: _0xf0cd39(0x187),
//         });
//       const _0x3e275 = await Booking["create"]({
//           property: _0x2c3f01,
//           price: _0x5e245c,
//           guests: _0x33c873,
//           fromDate: _0x218414,
//           toDate: _0x3a7827,
//           numberOfnights: _0x1950a2,
//           user: _0x138f64[_0xf0cd39(0x17c)][_0xf0cd39(0x188)],
//         }),
//         _0x123c35 = await Property["findByIdAndUpdate"](
//           _0x2c3f01,
//           {
//             $push: {
//               currentBookings: {
//                 bookingId: _0x3e275["id"],
//                 fromDate: _0x218414,
//                 toDate: _0x3a7827,
//                 userId: _0x3e275[_0xf0cd39(0x17c)],
//               },
//             },
//           },
//           { new: !![] }
//         );
//       _0x455dac[_0xf0cd39(0x16f)](0xc8)["json"]({
//         status: "success",
//         data: { booking: _0x3e275, updatedProperty: _0x123c35 },
//       });
//     } catch (_0x4d40ef) {
//       _0x455dac[_0xf0cd39(0x16f)](0x191)[_0xf0cd39(0x18a)]({
//         status: _0xf0cd39(0x170),
//         message: _0x4d40ef[_0xf0cd39(0x166)],
//       });
//     }
//   }),
//   (exports[_0x47bcba(0x167)] = async (_0x5a725c, _0x1c7e62) => {
//     const _0x14470f = _0x47bcba;
//     try {
//       const _0x5a127d = await Booking["find"]({
//         user: _0x5a725c["user"]["_id"],
//       });
//       _0x1c7e62[_0x14470f(0x16f)](0xc8)[_0x14470f(0x18a)]({
//         status: _0x14470f(0x182),
//         data: { bookings: _0x5a127d },
//       });
//     } catch (_0x428728) {
//       _0x1c7e62[_0x14470f(0x16f)](0x191)[_0x14470f(0x18a)]({
//         status: "fail",
//         message: _0x428728[_0x14470f(0x166)],
//       });
//     }
//   }),
//   (exports[_0x47bcba(0x162)] = async (_0x118235, _0x19ccc4) => {
//     const _0x2c1d59 = _0x47bcba;
//     try {
//       const _0xde8771 = await Booking[_0x2c1d59(0x17b)](
//         _0x118235[_0x2c1d59(0x172)][_0x2c1d59(0x17a)]
//       );
//       _0x19ccc4[_0x2c1d59(0x16f)](0xc8)[_0x2c1d59(0x18a)]({
//         status: _0x2c1d59(0x182),
//         data: { bookings: _0xde8771 },
//       });
//     } catch (_0x5a626a) {
//       _0x19ccc4[_0x2c1d59(0x16f)](0x191)[_0x2c1d59(0x18a)]({
//         status: "fail",
//         message: _0x5a626a[_0x2c1d59(0x166)],
//       });
//     }
//   });
// function _0x5ad7() {
//   const _0x68bb5f = [
//     "getcheckOutSession",
//     "579450dzhbZk",
//     "toDate",
//     "fromDate",
//     "body",
//     "createBookings",
//     "../Models/bookingModel",
//     "bookingId",
//     "findById",
//     "user",
//     "10HgsAFi",
//     "349336GBYGsk",
//     "dotenv",
//     "moment",
//     "../Models/propertyModel",
//     "success",
//     "config",
//     "path",
//     "6nVnsIz",
//     "1419236lcdmuz",
//     "The\x20property\x20is\x20already\x20booked\x20for\x20the\x20requested\x20dates.",
//     "_id",
//     "client_secret",
//     "json",
//     "stringify",
//     "6MSCSiW",
//     "getBookingDetails",
//     "stripe",
//     "inr",
//     "create",
//     "message",
//     "getUserBookings",
//     "2851209qgpuwB",
//     "916830TJOrtI",
//     "1898128leVGHq",
//     "STRIPE_SECRECT_KEY",
//     "20058NSxBYK",
//     "Please\x20login\x20First",
//     "log",
//     "status",
//     "fail",
//     "../config.env",
//     "params",
//   ];
//   _0x5ad7 = function () {
//     return _0x68bb5f;
//   };
//   return _0x5ad7();
// }
