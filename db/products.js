const product_category_json = [
  {
    "id": 0,
    "category": "kitchen",
    "updated_at": "2019-06-06T07:56:52 -04:00",
    "created_at": "2019-01-24T03:59:41 -04:00"
  },
  {
    "id": 1,
    "category": "electronics",
    "updated_at": "2019-06-06T07:56:52 -04:00",
    "created_at": "2019-01-24T03:59:41 -04:00"
  }
];

const products_json = [
  {
    "id": 0,
    "name": "abcd1",
    "sku": "5db1c055332e5e96c26b91f0",
    "seller_id": 0,
    "warehouse_id": 0,
    "picture": "http://placehold.it/32x32",
    "quantity": 22,
    "price": 25,
    "currency": "INR",
    "one_time_limit": 3,
    "description": "Enim ad officia duis fugiat nulla dolore ex. Cillum Lorem enim occaecat esse anim laborum quis voluptate. Fugiat amet ut exercitation ipsum consequat.\r\n",
    "updated_at": "2019-07-26T01:16:09 -04:00",
    "created_at": "2019-06-04T10:13:58 -04:00"
  },
  {
    "id": 1,
    "sku": "5db1c055eaae9b0a1cc8fd98",
    "name": "abcd2",
    "seller_id": 1,
    "warehouse_id": 1,
    "picture": "http://placehold.it/32x32",
    "quantity": 35,
    "price": 33,
    "currency": "INR",
    "one_time_limit": 3,
    "description": "Commodo duis quis do sit eiusmod do cillum aliqua. Tempor do ipsum sit officia cupidatat veniam ad magna eiusmod qui ipsum cillum nostrud irure. Irure irure duis anim nulla ad dolor eu aute duis ut nostrud est sint. Sunt tempor labore incididunt commodo adipisicing occaecat nisi minim irure in adipisicing non ad culpa. Laborum reprehenderit ex pariatur reprehenderit ad do officia eiusmod incididunt. Excepteur sint cillum deserunt occaecat.\r\n",
    "updated_at": "2019-05-14T09:38:28 -04:00",
    "created_at": "2019-03-12T10:20:58 -04:00"
  },
  {
    "id": 2,
    "sku": "5db1c055d3310a4cb30fbf83",
    "name": "abcd3",
    "seller_id": 2,
    "warehouse_id": 2,
    "picture": "http://placehold.it/32x32",
    "quantity": 23,
    "price": 22,
    "currency": "INR",
    "one_time_limit": 3,
    "description": "Officia fugiat ad nisi nostrud culpa mollit excepteur. Nulla adipisicing enim voluptate ipsum sunt exercitation veniam. Laboris Lorem nisi commodo dolor non incididunt minim ullamco. Veniam sint nostrud incididunt occaecat duis ad. Cupidatat cillum fugiat labore enim cupidatat dolor nostrud quis. Occaecat ex ipsum dolore sint velit consequat non. Aliquip veniam sunt cupidatat voluptate tempor occaecat est amet est qui exercitation amet.\r\n",
    "updated_at": "2019-09-28T09:18:12 -04:00",
    "created_at": "2019-01-03T02:04:20 -04:00"
  },
  {
    "id": 3,
    "sku": "5db1c055db641b598f87ced8",
    "name": "abcd4",
    "seller_id": 3,
    "warehouse_id": 3,
    "picture": "http://placehold.it/32x32",
    "quantity": 20,
    "price": 29,
    "currency": "INR",
    "one_time_limit": 2,
    "description": "Amet consectetur amet aliqua veniam proident sint nostrud duis veniam officia. Veniam cillum occaecat fugiat ad esse amet voluptate et commodo consequat nostrud ad adipisicing ex. Id officia nisi labore sint dolor enim non. Non in minim laborum consectetur aliqua qui sint Lorem. Consectetur consectetur occaecat amet amet incididunt sit ea sint elit deserunt culpa ad enim non. Qui sit nisi irure incididunt do Lorem enim. Commodo duis eiusmod reprehenderit labore exercitation laboris tempor veniam anim magna.\r\n",
    "updated_at": "2019-03-27T06:27:01 -04:00",
    "created_at": "2019-05-27T07:28:00 -04:00"
  },
  {
    "id": 4,
    "sku": "5db1c05567ecbe79411e8b27",
    "name": "abcd5",
    "seller_id": 4,
    "warehouse_id": 4,
    "picture": "http://placehold.it/32x32",
    "quantity": 23,
    "price": 31,
    "currency": "INR",
    "one_time_limit": 3,
    "description": "Consequat tempor irure elit Lorem dolor proident ipsum aute sunt elit ea excepteur velit ullamco. Dolor sint incididunt sunt deserunt ullamco cillum sunt pariatur amet labore cupidatat aliqua cillum velit. Quis laborum velit laboris exercitation. Sit officia in occaecat tempor reprehenderit reprehenderit tempor ad adipisicing. Ipsum pariatur est velit ad est ipsum et sunt id sunt ex nisi quis. Ea ullamco fugiat esse qui anim nulla dolore anim veniam.\r\n",
    "updated_at": "2019-03-21T11:57:47 -04:00",
    "created_at": "2019-08-30T04:34:14 -04:00"
  },
  {
    "id": 5,
    "sku": "5db1c05554f88eeba709f308",
    "name": "abcd6",
    "seller_id": 5,
    "warehouse_id": 5,
    "picture": "http://placehold.it/32x32",
    "quantity": 24,
    "price": 22,
    "currency": "INR",
    "one_time_limit": 3,
    "description": "Veniam cillum sint sunt nostrud ipsum sunt velit. Aute laborum aute et consectetur exercitation qui irure commodo eu enim ipsum. Nulla laborum amet qui deserunt culpa ipsum non exercitation occaecat est qui est fugiat. Dolore aute sunt officia consectetur dolor esse. Culpa in officia dolor nostrud commodo laborum id anim non dolor.\r\n",
    "updated_at": "2019-09-27T07:34:43 -04:00",
    "created_at": "2019-05-05T03:00:50 -04:00"
  }
];

const seller_json = [
  {
    "id": 0,
    "user_id": 0,
    "about_us": "Laborum duis dolore exercitation mollit ullamco aliqua esse deserunt fugiat cillum. Laborum ullamco consequat sunt Lorem proident anim. Elit cupidatat id adipisicing exercitation. Exercitation eu consequat esse anim. Elit deserunt minim deserunt tempor nostrud. Eiusmod culpa magna aute consectetur ullamco magna exercitation. Anim laborum occaecat proident esse dolore aliqua sint reprehenderit.\r\n",
    "logo": "http://placehold.it/32x32",
    "name": "Wilkerson Stewart",
    "verified": 1,
    "email": "wilkersonstewart@terrasys.com",
    "phone": "+971 (887) 512-2601",
    "street": "997 Blake Avenue, Sheatown, South Carolina, 7721",
    "city": "Templeton",
    "state": "North Dakota",
    "country": "Djibouti",
    "latitude": 43.866359,
    "longitude": 45.581239,
    "updated_at": "2019-10-01T09:16:08 -04:00",
    "created_at": "2019-01-06T10:57:45 -04:00"
  },
  {
    "id": 1,
    "user_id": 1,
    "about_us": "Et eu id pariatur veniam ullamco quis. Pariatur dolore sunt sunt sunt. Irure in dolor eiusmod labore ea ipsum sit laborum ea fugiat culpa fugiat. Laboris occaecat proident occaecat officia dolor anim quis quis ad cupidatat culpa pariatur. Officia dolore esse labore velit magna nulla exercitation consectetur ad sunt deserunt voluptate magna enim. Laborum mollit mollit anim minim officia nisi.\r\n",
    "logo": "http://placehold.it/32x32",
    "name": "Hillary Poole",
    "verified": 0,
    "email": "hillarypoole@terrasys.com",
    "phone": "+971 (872) 547-3098",
    "street": "505 Logan Street, Warren, American Samoa, 8664",
    "city": "Grantville",
    "state": "Texas",
    "country": "France",
    "latitude": 11.396475,
    "longitude": 72.941494,
    "updated_at": "2019-01-31T11:46:59 -04:00",
    "created_at": "2019-01-05T02:30:05 -04:00"
  },
  {
    "id": 2,
    "user_id": 2,
    "about_us": "Anim nostrud occaecat ipsum fugiat nostrud reprehenderit et ex ex velit et cupidatat amet officia. Veniam quis labore amet irure non non duis laboris qui qui sit. Et nulla eiusmod nostrud nostrud velit quis. Ex elit aliquip minim minim est laboris laborum. Dolore sint reprehenderit eu occaecat est excepteur adipisicing nulla mollit ullamco. Laboris voluptate ullamco aliqua voluptate reprehenderit. Aliqua dolor culpa magna quis.\r\n",
    "logo": "http://placehold.it/32x32",
    "name": "Sawyer Rogers",
    "verified": 1,
    "email": "sawyerrogers@terrasys.com",
    "phone": "+971 (945) 412-3696",
    "street": "716 Grant Avenue, Orviston, Hawaii, 9858",
    "city": "Bourg",
    "state": "New Jersey",
    "country": "Israel",
    "latitude": -79.789446,
    "longitude": 135.893973,
    "updated_at": "2019-04-16T09:46:00 -04:00",
    "created_at": "2019-01-30T01:42:56 -04:00"
  },
  {
    "id": 3,
    "user_id": 3,
    "about_us": "Ullamco laboris ullamco excepteur labore sit veniam commodo ut in dolor est eu laborum laborum. Ea et consequat labore sunt aute cupidatat pariatur in ad cupidatat tempor. Aute amet aliqua irure cupidatat anim. Aute sint minim incididunt non.\r\n",
    "logo": "http://placehold.it/32x32",
    "name": "Dejesus Rowland",
    "verified": 0,
    "email": "dejesusrowland@terrasys.com",
    "phone": "+971 (986) 456-2022",
    "street": "406 Williams Avenue, Muir, Northern Mariana Islands, 4306",
    "city": "Cherokee",
    "state": "Marshall Islands",
    "country": "Yugoslavia",
    "latitude": 19.309257,
    "longitude": -159.414799,
    "updated_at": "2019-07-18T06:27:06 -04:00",
    "created_at": "2019-09-04T05:28:31 -04:00"
  },
  {
    "id": 4,
    "user_id": 4,
    "about_us": "Exercitation duis eu ipsum ea ad magna magna enim ex sit reprehenderit nostrud deserunt ad. Exercitation sint anim elit sint dolor eu qui fugiat id ullamco eu amet fugiat. Aliquip in labore non proident id ut ea pariatur nisi adipisicing.\r\n",
    "logo": "http://placehold.it/32x32",
    "name": "Jordan Prince",
    "verified": 0,
    "email": "jordanprince@terrasys.com",
    "phone": "+971 (820) 407-2307",
    "street": "797 Jewel Street, Wescosville, Maryland, 7555",
    "city": "Thatcher",
    "state": "Puerto Rico",
    "country": "Netherlands Antilles",
    "latitude": -85.297681,
    "longitude": 7.707907,
    "updated_at": "2019-01-28T02:58:37 -04:00",
    "created_at": "2019-08-30T01:03:47 -04:00"
  },
  {
    "id": 5,
    "user_id": 5,
    "about_us": "Eu voluptate Lorem sint incididunt amet laboris mollit ullamco aliquip. Laboris non tempor aliquip incididunt. Laboris ullamco cupidatat dolore est voluptate eiusmod dolore velit aliqua dolor consequat consequat dolor et. Consequat ullamco duis velit proident excepteur elit fugiat proident qui.\r\n",
    "logo": "http://placehold.it/32x32",
    "name": "Herrera Blankenship",
    "verified": 1,
    "email": "herrerablankenship@terrasys.com",
    "phone": "+971 (829) 408-2643",
    "street": "185 Bergen Court, Johnsonburg, Oklahoma, 3984",
    "city": "Grapeview",
    "state": "California",
    "country": "Haiti",
    "latitude": 65.816767,
    "longitude": -97.091783,
    "updated_at": "2019-06-11T10:25:56 -04:00",
    "created_at": "2019-03-27T04:22:03 -04:00"
  }
];

const warehouse_json = [
  {
    "id": 0,
    "seller_id": 0,
    "pictures": "http://placehold.it/32x32",
    "about_us": "Occaecat officia laborum nostrud Lorem aliquip aliqua laborum nulla pariatur. Sunt pariatur reprehenderit elit adipisicing ut quis ipsum duis cupidatat laboris mollit. In et cupidatat dolor incididunt veniam ea duis sunt commodo.\r\n",
    "verified": 1,
    "email": "herrerablankens12hip@terrasys.com",
    "phone": "+971 (893) 573-3907",
    "street": "292 Quay Street, Whitestone, Georgia, 643",
    "city": "Fairforest",
    "state": "Vermont",
    "country": "Comoros",
    "latitude": 37.580078,
    "longitude": -35.486104,
    "updated_at": "2019-03-25T11:44:02 -04:00",
    "created_at": "2019-07-25T11:19:12 -04:00"
  },
  {
    "id": 1,
    "seller_id": 1,
    "pictures": "http://placehold.it/32x32",
    "about_us": "Id deserunt officia eu ex ipsum in. Exercitation aliquip dolore aliqua laborum laboris. Eu officia veniam occaecat quis dolore dolor id consectetur est ipsum magna.\r\n",
    "verified": 1,
    "email": "herrerablankensh2ip@terrasys.com",
    "phone": "+971 (880) 404-3876",
    "street": "380 Beaver Street, Beechmont, Washington, 9124",
    "city": "Caroleen",
    "state": "Ohio",
    "country": "Cambodia",
    "latitude": 15.41129,
    "longitude": 79.597053,
    "updated_at": "2019-04-04T02:11:55 -04:00",
    "created_at": "2019-02-24T12:09:27 -04:00"
  },
  {
    "id": 2,
    "seller_id": 12,
    "pictures": "http://placehold.it/32x32",
    "about_us": "Nulla eu Lorem et ex do aliquip nostrud qui. Nisi amet reprehenderit eu Lorem sint incididunt voluptate dolore officia mollit commodo. Dolor culpa irure voluptate est deserunt est voluptate velit et qui. Enim deserunt minim ex non sunt. Consequat fugiat magna aliquip cillum. Enim incididunt occaecat dolor fugiat aliqua ut non veniam cupidatat velit sint. Ex incididunt id sit ea sint quis ad eiusmod commodo eu velit eu.\r\n",
    "verified": 1,
    "email": "herrerablankens3hip@terrasys.com",
    "phone": "+971 (814) 487-2788",
    "street": "940 Guernsey Street, Kaka, Maryland, 6800",
    "city": "Wintersburg",
    "state": "Guam",
    "country": "Croatia (Hrvatska)",
    "latitude": 23.641031,
    "longitude": 167.414818,
    "updated_at": "2019-03-01T02:16:04 -04:00",
    "created_at": "2019-02-16T07:28:36 -04:00"
  },
  {
    "id": 3,
    "seller_id": 3,
    "pictures": "http://placehold.it/32x32",
    "about_us": "Id tempor irure exercitation Lorem. Consequat laboris sunt excepteur Lorem ut Lorem nulla mollit. Nostrud cillum nulla est eiusmod elit enim nostrud cupidatat cupidatat dolore ullamco consectetur incididunt pariatur. Voluptate in cillum ipsum qui. Deserunt qui consectetur cillum cillum commodo ea nisi adipisicing.\r\n",
    "verified": 0,
    "email": "herrerablankens4hip@terrasys.com",
    "phone": "+971 (824) 519-2779",
    "street": "662 Bills Place, Churchill, Nevada, 8659",
    "city": "Summerfield",
    "state": "Utah",
    "country": "Mauritania",
    "latitude": 15.666028,
    "longitude": 74.550819,
    "updated_at": "2019-07-04T06:59:26 -04:00",
    "created_at": "2019-10-15T04:45:27 -04:00"
  },
  {
    "id": 4,
    "seller_id": 4,
    "pictures": "http://placehold.it/32x32",
    "about_us": "Eu duis id non reprehenderit excepteur anim ut amet. Amet ut irure proident officia adipisicing excepteur ipsum deserunt proident anim anim nisi sunt ipsum. Elit commodo irure est incididunt fugiat nostrud magna ullamco. Aliquip enim ullamco culpa eu sunt eiusmod sit culpa velit sunt pariatur. Aute dolor magna incididunt eiusmod excepteur sint nostrud Lorem anim nulla sit eiusmod ex. Tempor officia voluptate cillum ea cupidatat ex sunt adipisicing. Tempor duis qui laboris excepteur pariatur id in qui.\r\n",
    "verified": 1,
    "email": "herrerablanken5ship@terrasys.com",
    "phone": "+971 (972) 440-2964",
    "street": "639 Gunther Place, Oasis, Maine, 8218",
    "city": "Clayville",
    "state": "Delaware",
    "country": "Brunei Darussalam",
    "latitude": -69.850768,
    "longitude": 5.205644,
    "updated_at": "2019-01-04T06:19:31 -04:00",
    "created_at": "2019-09-28T12:25:04 -04:00"
  }
];

module.exports = {
  product_category_json,
  products_json,
  seller_json,
  warehouse_json
}