// Deobfuscated Code
class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    let queryObject = {};
    let queryParams = { ...this.queryString };

    if (queryParams.minPrice && queryParams.maxPrice) {
      if (queryParams.maxPrice.includes(">")) {
        queryObject.price = {
          $gte: queryParams.minPrice,
        };
      } else {
        queryObject.price = {
          $gte: queryParams.minPrice,
          $lte: queryParams.maxPrice,
        };
      }
    }

    if (queryParams.propertyType) {
      let propertyTypes = queryParams.propertyType
        .split(",")
        .map((type) => type.trim());
      queryObject.propertyType = {
        $in: propertyTypes,
      };
    }

    if (queryParams.roomType) {
      queryObject.roomType = queryParams.roomType;
    }

    if (queryParams.amenities) {
      queryObject["amenities.name"] = {
        $all: queryParams.amenities,
      };
    }

    this.query = this.query.find(queryObject);
    return this;
  }

  search() {
    let searchObject = {};
    let searchParams = { ...this.queryString };

    if (searchParams.city) {
      searchObject = {
        $or: [
          {
            "address.city": searchParams.city.toLowerCase().replaceAll(" ", ""),
          },
          {
            "address.state": searchParams.city
              .toLowerCase()
              .replaceAll(" ", ""),
          },
          {
            "address.area": searchParams.city.toLowerCase().replaceAll(" ", ""),
          },
        ],
      };
    }

    if (searchParams.guests) {
      searchObject.maximumGuest = {
        $gte: searchParams.guests,
      };
    }

    if (searchParams.dateIn && searchParams.dateOut) {
      searchObject.$and = [
        {
          currentBookings: {
            $not: {
              $elemMatch: {
                $or: [
                  {
                    fromDate: { $lt: searchParams.dateOut },
                    toDate: { $gt: searchParams.dateIn },
                  },
                  {
                    fromDate: { $lt: searchParams.dateIn },
                    toDate: { $gt: searchParams.dateIn },
                  },
                ],
              },
            },
          },
        },
      ];
    }

    this.query = this.query.find(searchObject);
    return this;
  }

  paginate() {
    let page = this.queryString.page * 1 || 1;
    let limit = this.queryString.limit * 1 || 12;
    let skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;

// Obfuscated Code
// const _0x1bd59a=_0x8ff4;(function(_0x434234,_0x1d22ba){const _0x149aab=_0x8ff4,_0x185fdc=_0x434234();while(!![]){try{const _0xf9592=parseInt(_0x149aab(0xd7))/0x1*(parseInt(_0x149aab(0xcd))/0x2)+-parseInt(_0x149aab(0xba))/0x3*(parseInt(_0x149aab(0xb6))/0x4)+-parseInt(_0x149aab(0xcc))/0x5*(parseInt(_0x149aab(0xbd))/0x6)+parseInt(_0x149aab(0xbc))/0x7+-parseInt(_0x149aab(0xc0))/0x8*(-parseInt(_0x149aab(0xbf))/0x9)+-parseInt(_0x149aab(0xc4))/0xa*(-parseInt(_0x149aab(0xc5))/0xb)+-parseInt(_0x149aab(0xbb))/0xc*(-parseInt(_0x149aab(0xc6))/0xd);if(_0xf9592===_0x1d22ba)break;else _0x185fdc['push'](_0x185fdc['shift']());}catch(_0x51d7f1){_0x185fdc['push'](_0x185fdc['shift']());}}}(_0x5536,0xca7bd));class APIFeatures{constructor(_0x1d9265,_0x577a62){const _0x45f673=_0x8ff4;this['query']=_0x1d9265,this[_0x45f673(0xb3)]=_0x577a62;}['filter'](){const _0x33ce2d=_0x8ff4;let _0x42ac95={},_0x4a70a3={...this[_0x33ce2d(0xb3)]};_0x4a70a3['minPrice']&&_0x4a70a3[_0x33ce2d(0xcf)]&&(_0x4a70a3[_0x33ce2d(0xcf)][_0x33ce2d(0xc7)]('>')?_0x42ac95['price']={'$gte':_0x4a70a3['minPrice']}:_0x42ac95[_0x33ce2d(0xd3)]={'$gte':_0x4a70a3[_0x33ce2d(0xbe)],'$lte':_0x4a70a3[_0x33ce2d(0xcf)]});if(_0x4a70a3[_0x33ce2d(0xd0)]){let _0x155114=_0x4a70a3[_0x33ce2d(0xd0)][_0x33ce2d(0xd6)](',')[_0x33ce2d(0xc2)](_0x1bfa06=>_0x1bfa06[_0x33ce2d(0xb9)]());_0x42ac95[_0x33ce2d(0xd0)]={'$in':_0x155114};}return _0x4a70a3[_0x33ce2d(0xd1)]&&(_0x42ac95[_0x33ce2d(0xd1)]=_0x4a70a3[_0x33ce2d(0xd1)]),_0x4a70a3[_0x33ce2d(0xb2)]&&(_0x42ac95[_0x33ce2d(0xb8)]={'$all':_0x4a70a3[_0x33ce2d(0xb2)]}),this[_0x33ce2d(0xb7)]=this[_0x33ce2d(0xb7)][_0x33ce2d(0xc9)](_0x42ac95),this;}[_0x1bd59a(0xd8)](){const _0x47ffe3=_0x1bd59a;let _0x2228d6={},_0x5ca61c={...this[_0x47ffe3(0xb3)]};return _0x2228d6=_0x5ca61c[_0x47ffe3(0xc3)]?{'$or':[{'address.city':_0x5ca61c['city'][_0x47ffe3(0xca)]()[_0x47ffe3(0xb5)]('\x20','')},{'address.state':_0x5ca61c[_0x47ffe3(0xc3)][_0x47ffe3(0xca)]()[_0x47ffe3(0xb5)]('\x20','')},{'address.area':_0x5ca61c[_0x47ffe3(0xc3)][_0x47ffe3(0xca)]()[_0x47ffe3(0xb5)]('\x20','')}]}:{},_0x5ca61c[_0x47ffe3(0xd2)]&&(_0x2228d6[_0x47ffe3(0xc1)]={'$gte':_0x5ca61c[_0x47ffe3(0xd2)]},_0x5ca61c[_0x47ffe3(0xd2)]),_0x5ca61c[_0x47ffe3(0xc8)]&&_0x5ca61c[_0x47ffe3(0xcb)]&&(_0x2228d6[_0x47ffe3(0xd4)]=[{'currentBookings':{'$not':{'$elemMatch':{'$or':[{'fromDate':{'$lt':_0x5ca61c[_0x47ffe3(0xcb)]},'toDate':{'$gt':_0x5ca61c[_0x47ffe3(0xc8)]}},{'fromDate':{'$lt':_0x5ca61c['dateIn']},'toDate':{'$gt':_0x5ca61c['dateIn']}}]}}}}]),this[_0x47ffe3(0xb7)]=this[_0x47ffe3(0xb7)][_0x47ffe3(0xc9)](_0x2228d6),this;}['paginate'](){const _0x7a5238=_0x1bd59a;let _0xb6c350=this[_0x7a5238(0xb3)][_0x7a5238(0xb4)]*0x1||0x1,_0xec9b1d=this[_0x7a5238(0xb3)][_0x7a5238(0xce)]*0x1||0xc,_0x153a02=(_0xb6c350-0x1)*_0xec9b1d;return this['query']=this['query']['skip'](_0x153a02)[_0x7a5238(0xce)](_0xec9b1d),this;}}function _0x8ff4(_0x16ad2a,_0x528fe1){const _0x553630=_0x5536();return _0x8ff4=function(_0x8ff46,_0x41c0e7){_0x8ff46=_0x8ff46-0xb2;let _0x5a5df2=_0x553630[_0x8ff46];return _0x5a5df2;},_0x8ff4(_0x16ad2a,_0x528fe1);}module[_0x1bd59a(0xd5)]=APIFeatures;function _0x5536(){const _0x4b15f0=['31421riUcEY','includes','dateIn','find','toLowerCase','dateOut','15KcEJFo','22846cKoiFz','limit','maxPrice','propertyType','roomType','guests','price','$and','exports','split','17odxWoR','search','amenities','queryString','page','replaceAll','4RqhahD','query','amenities.name','trim','4772748YYYAGT','6840Tseqxz','7412552Yzrrnu','1503030SvoQKo','minPrice','117nuLyBV','308128rBpYLD','maximumGuest','map','city','402790nEGUAB','11aaUNYZ'];_0x5536=function(){return _0x4b15f0;};return _0x5536();}
