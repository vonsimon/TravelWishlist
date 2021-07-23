let countries = [
    {
        "name": "Afghanistan",
        "a2": "AF",
        "a3": "AFG",
        "numeric": "004"
    },
    {
        "name": "Aland Islands",
        "a2": "AX",
        "a3": "ALA",
        "numeric": "248"
    },
    {
        "name": "Albania",
        "a2": "AL",
        "a3": "ALB",
        "numeric": "008"
    },
    {
        "name": "Algeria",
        "a2": "DZ",
        "a3": "DZA",
        "numeric": "012"
    },
    {
        "name": "American Samoa",
        "a2": "AS",
        "a3": "ASM",
        "numeric": "016"
    },
    {
        "name": "Andorra",
        "a2": "AD",
        "a3": "AND",
        "numeric": "020"
    },
    {
        "name": "Angola",
        "a2": "AO",
        "a3": "AGO",
        "numeric": "024"
    },
    {
        "name": "Anguilla",
        "a2": "AI",
        "a3": "AIA",
        "numeric": "660"
    },
    {
        "name": "Antarctica",
        "a2": "AQ",
        "a3": "ATA",
        "numeric": "010"
    },
    {
        "name": "Antigua and Barbuda",
        "a2": "AG",
        "a3": "ATG",
        "numeric": "028"
    },
    {
        "name": "Argentina",
        "a2": "AR",
        "a3": "ARG",
        "numeric": "032"
    },
    {
        "name": "Armenia",
        "a2": "AM",
        "a3": "ARM",
        "numeric": "051"
    },
    {
        "name": "Aruba",
        "a2": "AW",
        "a3": "ABW",
        "numeric": "533"
    },
    {
        "name": "Australia",
        "a2": "AU",
        "a3": "AUS",
        "numeric": "036"
    },
    {
        "name": "Austria",
        "a2": "AT",
        "a3": "AUT",
        "numeric": "040"
    },
    {
        "name": "Azerbaijan",
        "a2": "AZ",
        "a3": "AZE",
        "numeric": "031"
    },
    {
        "name": "Bahamas (the)",
        "a2": "BS",
        "a3": "BHS",
        "numeric": "044"
    },
    {
        "name": "Bahrain",
        "a2": "BH",
        "a3": "BHR",
        "numeric": "048"
    },
    {
        "name": "Bangladesh",
        "a2": "BD",
        "a3": "BGD",
        "numeric": "050"
    },
    {
        "name": "Barbados",
        "a2": "BB",
        "a3": "BRB",
        "numeric": "052"
    },
    {
        "name": "Belarus",
        "a2": "BY",
        "a3": "BLR",
        "numeric": "112"
    },
    {
        "name": "Belgium",
        "a2": "BE",
        "a3": "BEL",
        "numeric": "056"
    },
    {
        "name": "Belize",
        "a2": "BZ",
        "a3": "BLZ",
        "numeric": "084"
    },
    {
        "name": "Benin",
        "a2": "BJ",
        "a3": "BEN",
        "numeric": "204"
    },
    {
        "name": "Bermuda",
        "a2": "BM",
        "a3": "BMU",
        "numeric": "060"
    },
    {
        "name": "Bhutan",
        "a2": "BT",
        "a3": "BTN",
        "numeric": "064"
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "a2": "BO",
        "a3": "BOL",
        "numeric": "068"
    },
    {
        "name": "Bonaire",
        "a2": " Sint Eustatius and Saba",
        "a3": "BQ",
        "numeric": "BES"
    },
    {
        "name": "Bosnia and Herzegovina",
        "a2": "BA",
        "a3": "BIH",
        "numeric": "070"
    },
    {
        "name": "Botswana",
        "a2": "BW",
        "a3": "BWA",
        "numeric": "072"
    },
    {
        "name": "Bouvet Island",
        "a2": "BV",
        "a3": "BVT",
        "numeric": "074"
    },
    {
        "name": "Brazil",
        "a2": "BR",
        "a3": "BRA",
        "numeric": "076"
    },
    {
        "name": "British Indian Ocean Territory (the)",
        "a2": "IO",
        "a3": "IOT",
        "numeric": "086"
    },
    {
        "name": "Brunei Darussalam",
        "a2": "BN",
        "a3": "BRN",
        "numeric": "096"
    },
    {
        "name": "Bulgaria",
        "a2": "BG",
        "a3": "BGR",
        "numeric": "100"
    },
    {
        "name": "Burkina Faso",
        "a2": "BF",
        "a3": "BFA",
        "numeric": "854"
    },
    {
        "name": "Burundi",
        "a2": "BI",
        "a3": "BDI",
        "numeric": "108"
    },
    {
        "name": "Cabo Verde",
        "a2": "CV",
        "a3": "CPV",
        "numeric": "132"
    },
    {
        "name": "Cambodia",
        "a2": "KH",
        "a3": "KHM",
        "numeric": "116"
    },
    {
        "name": "Cameroon",
        "a2": "CM",
        "a3": "CMR",
        "numeric": "120"
    },
    {
        "name": "Canada",
        "a2": "CA",
        "a3": "CAN",
        "numeric": "124"
    },
    {
        "name": "Cayman Islands (the)",
        "a2": "KY",
        "a3": "CYM",
        "numeric": "136"
    },
    {
        "name": "Central African Republic (the)",
        "a2": "CF",
        "a3": "CAF",
        "numeric": "140"
    },
    {
        "name": "Chad",
        "a2": "TD",
        "a3": "TCD",
        "numeric": "148"
    },
    {
        "name": "Chile",
        "a2": "CL",
        "a3": "CHL",
        "numeric": "152"
    },
    {
        "name": "China",
        "a2": "CN",
        "a3": "CHN",
        "numeric": "156"
    },
    {
        "name": "Christmas Island",
        "a2": "CX",
        "a3": "CXR",
        "numeric": "162"
    },
    {
        "name": "Cocos (Keeling) Islands (the)",
        "a2": "CC",
        "a3": "CCK",
        "numeric": "166"
    },
    {
        "name": "Colombia",
        "a2": "CO",
        "a3": "COL",
        "numeric": "170"
    },
    {
        "name": "Comoros (the)",
        "a2": "KM",
        "a3": "COM",
        "numeric": "174"
    },
    {
        "name": "Congo (the Democratic Republic of the)",
        "a2": "CD",
        "a3": "COD",
        "numeric": "180"
    },
    {
        "name": "Congo (the)",
        "a2": "CG",
        "a3": "COG",
        "numeric": "178"
    },
    {
        "name": "Cook Islands (the)",
        "a2": "CK",
        "a3": "COK",
        "numeric": "184"
    },
    {
        "name": "Costa Rica",
        "a2": "CR",
        "a3": "CRI",
        "numeric": "188"
    },
    {
        "name": "Côte d'Ivoire",
        "a2": "CI",
        "a3": "CIV",
        "numeric": "384"
    },
    {
        "name": "Croatia",
        "a2": "HR",
        "a3": "HRV",
        "numeric": "191"
    },
    {
        "name": "Cuba",
        "a2": "CU",
        "a3": "CUB",
        "numeric": "192"
    },
    {
        "name": "Curaçao",
        "a2": "CW",
        "a3": "CUW",
        "numeric": "531"
    },
    {
        "name": "Cyprus",
        "a2": "CY",
        "a3": "CYP",
        "numeric": "196"
    },
    {
        "name": "Czechia",
        "a2": "CZ",
        "a3": "CZE",
        "numeric": "203"
    },
    {
        "name": "Denmark",
        "a2": "DK",
        "a3": "DNK",
        "numeric": "208"
    },
    {
        "name": "Djibouti",
        "a2": "DJ",
        "a3": "DJI",
        "numeric": "262"
    },
    {
        "name": "Dominica",
        "a2": "DM",
        "a3": "DMA",
        "numeric": "212"
    },
    {
        "name": "Dominican Republic (the)",
        "a2": "DO",
        "a3": "DOM",
        "numeric": "214"
    },
    {
        "name": "Ecuador",
        "a2": "EC",
        "a3": "ECU",
        "numeric": "218"
    },
    {
        "name": "Egypt",
        "a2": "EG",
        "a3": "EGY",
        "numeric": "818"
    },
    {
        "name": "El Salvador",
        "a2": "SV",
        "a3": "SLV",
        "numeric": "222"
    },
    {
        "name": "Equatorial Guinea",
        "a2": "GQ",
        "a3": "GNQ",
        "numeric": "226"
    },
    {
        "name": "Eritrea",
        "a2": "ER",
        "a3": "ERI",
        "numeric": "232"
    },
    {
        "name": "Estonia",
        "a2": "EE",
        "a3": "EST",
        "numeric": "233"
    },
    {
        "name": "Eswatini",
        "a2": "SZ",
        "a3": "SWZ",
        "numeric": "748"
    },
    {
        "name": "Ethiopia",
        "a2": "ET",
        "a3": "ETH",
        "numeric": "231"
    },
    {
        "name": "Falkland Islands (the) [Malvinas]",
        "a2": "FK",
        "a3": "FLK",
        "numeric": "238"
    },
    {
        "name": "Faroe Islands (the)",
        "a2": "FO",
        "a3": "FRO",
        "numeric": "234"
    },
    {
        "name": "Fiji",
        "a2": "FJ",
        "a3": "FJI",
        "numeric": "242"
    },
    {
        "name": "Finland",
        "a2": "FI",
        "a3": "FIN",
        "numeric": "246"
    },
    {
        "name": "France",
        "a2": "FR",
        "a3": "FRA",
        "numeric": "250"
    },
    {
        "name": "French Guiana",
        "a2": "GF",
        "a3": "GUF",
        "numeric": "254"
    },
    {
        "name": "French Polynesia",
        "a2": "PF",
        "a3": "PYF",
        "numeric": "258"
    },
    {
        "name": "French Southern Territories (the)",
        "a2": "TF",
        "a3": "ATF",
        "numeric": "260"
    },
    {
        "name": "Gabon",
        "a2": "GA",
        "a3": "GAB",
        "numeric": "266"
    },
    {
        "name": "Gambia (the)",
        "a2": "GM",
        "a3": "GMB",
        "numeric": "270"
    },
    {
        "name": "Georgia",
        "a2": "GE",
        "a3": "GEO",
        "numeric": "268"
    },
    {
        "name": "Germany",
        "a2": "DE",
        "a3": "DEU",
        "numeric": "276"
    },
    {
        "name": "Ghana",
        "a2": "GH",
        "a3": "GHA",
        "numeric": "288"
    },
    {
        "name": "Gibraltar",
        "a2": "GI",
        "a3": "GIB",
        "numeric": "292"
    },
    {
        "name": "Greece",
        "a2": "GR",
        "a3": "GRC",
        "numeric": "300"
    },
    {
        "name": "Greenland",
        "a2": "GL",
        "a3": "GRL",
        "numeric": "304"
    },
    {
        "name": "Grenada",
        "a2": "GD",
        "a3": "GRD",
        "numeric": "308"
    },
    {
        "name": "Guadeloupe",
        "a2": "GP",
        "a3": "GLP",
        "numeric": "312"
    },
    {
        "name": "Guam",
        "a2": "GU",
        "a3": "GUM",
        "numeric": "316"
    },
    {
        "name": "Guatemala",
        "a2": "GT",
        "a3": "GTM",
        "numeric": "320"
    },
    {
        "name": "Guernsey",
        "a2": "GG",
        "a3": "GGY",
        "numeric": "831"
    },
    {
        "name": "Guinea",
        "a2": "GN",
        "a3": "GIN",
        "numeric": "324"
    },
    {
        "name": "Guinea-Bissau",
        "a2": "GW",
        "a3": "GNB",
        "numeric": "624"
    },
    {
        "name": "Guyana",
        "a2": "GY",
        "a3": "GUY",
        "numeric": "328"
    },
    {
        "name": "Haiti",
        "a2": "HT",
        "a3": "HTI",
        "numeric": "332"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "a2": "HM",
        "a3": "HMD",
        "numeric": "334"
    },
    {
        "name": "Holy See (the)",
        "a2": "VA",
        "a3": "VAT",
        "numeric": "336"
    },
    {
        "name": "Honduras",
        "a2": "HN",
        "a3": "HND",
        "numeric": "340"
    },
    {
        "name": "Hong Kong",
        "a2": "HK",
        "a3": "HKG",
        "numeric": "344"
    },
    {
        "name": "Hungary",
        "a2": "HU",
        "a3": "HUN",
        "numeric": "348"
    },
    {
        "name": "Iceland",
        "a2": "IS",
        "a3": "ISL",
        "numeric": "352"
    },
    {
        "name": "India",
        "a2": "IN",
        "a3": "IND",
        "numeric": "356"
    },
    {
        "name": "Indonesia",
        "a2": "ID",
        "a3": "IDN",
        "numeric": "360"
    },
    {
        "name": "Iran (Islamic Republic of)",
        "a2": "IR",
        "a3": "IRN",
        "numeric": "364"
    },
    {
        "name": "Iraq",
        "a2": "IQ",
        "a3": "IRQ",
        "numeric": "368"
    },
    {
        "name": "Ireland",
        "a2": "IE",
        "a3": "IRL",
        "numeric": "372"
    },
    {
        "name": "Isle of Man",
        "a2": "IM",
        "a3": "IMN",
        "numeric": "833"
    },
    {
        "name": "Israel",
        "a2": "IL",
        "a3": "ISR",
        "numeric": "376"
    },
    {
        "name": "Italy",
        "a2": "IT",
        "a3": "ITA",
        "numeric": "380"
    },
    {
        "name": "Jamaica",
        "a2": "JM",
        "a3": "JAM",
        "numeric": "388"
    },
    {
        "name": "Japan",
        "a2": "JP",
        "a3": "JPN",
        "numeric": "392"
    },
    {
        "name": "Jersey",
        "a2": "JE",
        "a3": "JEY",
        "numeric": "832"
    },
    {
        "name": "Jordan",
        "a2": "JO",
        "a3": "JOR",
        "numeric": "400"
    },
    {
        "name": "Kazakhstan",
        "a2": "KZ",
        "a3": "KAZ",
        "numeric": "398"
    },
    {
        "name": "Kenya",
        "a2": "KE",
        "a3": "KEN",
        "numeric": "404"
    },
    {
        "name": "Kiribati",
        "a2": "KI",
        "a3": "KIR",
        "numeric": "296"
    },
    {
        "name": "Korea (the Democratic People's Republic of)",
        "a2": "KP",
        "a3": "PRK",
        "numeric": "408"
    },
    {
        "name": "Korea (the Republic of)",
        "a2": "KR",
        "a3": "KOR",
        "numeric": "410"
    },
    {
        "name": "Kuwait",
        "a2": "KW",
        "a3": "KWT",
        "numeric": "414"
    },
    {
        "name": "Kyrgyzstan",
        "a2": "KG",
        "a3": "KGZ",
        "numeric": "417"
    },
    {
        "name": "Lao People's Democratic Republic (the)",
        "a2": "LA",
        "a3": "LAO",
        "numeric": "418"
    },
    {
        "name": "Latvia",
        "a2": "LV",
        "a3": "LVA",
        "numeric": "428"
    },
    {
        "name": "Lebanon",
        "a2": "LB",
        "a3": "LBN",
        "numeric": "422"
    },
    {
        "name": "Lesotho",
        "a2": "LS",
        "a3": "LSO",
        "numeric": "426"
    },
    {
        "name": "Liberia",
        "a2": "LR",
        "a3": "LBR",
        "numeric": "430"
    },
    {
        "name": "Libya",
        "a2": "LY",
        "a3": "LBY",
        "numeric": "434"
    },
    {
        "name": "Liechtenstein",
        "a2": "LI",
        "a3": "LIE",
        "numeric": "438"
    },
    {
        "name": "Lithuania",
        "a2": "LT",
        "a3": "LTU",
        "numeric": "440"
    },
    {
        "name": "Luxembourg",
        "a2": "LU",
        "a3": "LUX",
        "numeric": "442"
    },
    {
        "name": "Macao",
        "a2": "MO",
        "a3": "MAC",
        "numeric": "446"
    },
    {
        "name": "Republic of North Macedonia",
        "a2": "MK",
        "a3": "MKD",
        "numeric": "807"
    },
    {
        "name": "Madagascar",
        "a2": "MG",
        "a3": "MDG",
        "numeric": "450"
    },
    {
        "name": "Malawi",
        "a2": "MW",
        "a3": "MWI",
        "numeric": "454"
    },
    {
        "name": "Malaysia",
        "a2": "MY",
        "a3": "MYS",
        "numeric": "458"
    },
    {
        "name": "Maldives",
        "a2": "MV",
        "a3": "MDV",
        "numeric": "462"
    },
    {
        "name": "Mali",
        "a2": "ML",
        "a3": "MLI",
        "numeric": "466"
    },
    {
        "name": "Malta",
        "a2": "MT",
        "a3": "MLT",
        "numeric": "470"
    },
    {
        "name": "Marshall Islands (the)",
        "a2": "MH",
        "a3": "MHL",
        "numeric": "584"
    },
    {
        "name": "Martinique",
        "a2": "MQ",
        "a3": "MTQ",
        "numeric": "474"
    },
    {
        "name": "Mauritania",
        "a2": "MR",
        "a3": "MRT",
        "numeric": "478"
    },
    {
        "name": "Mauritius",
        "a2": "MU",
        "a3": "MUS",
        "numeric": "480"
    },
    {
        "name": "Mayotte",
        "a2": "YT",
        "a3": "MYT",
        "numeric": "175"
    },
    {
        "name": "Mexico",
        "a2": "MX",
        "a3": "MEX",
        "numeric": "484"
    },
    {
        "name": "Micronesia (Federated States of)",
        "a2": "FM",
        "a3": "FSM",
        "numeric": "583"
    },
    {
        "name": "Moldova (the Republic of)",
        "a2": "MD",
        "a3": "MDA",
        "numeric": "498"
    },
    {
        "name": "Monaco",
        "a2": "MC",
        "a3": "MCO",
        "numeric": "492"
    },
    {
        "name": "Mongolia",
        "a2": "MN",
        "a3": "MNG",
        "numeric": "496"
    },
    {
        "name": "Montenegro",
        "a2": "ME",
        "a3": "MNE",
        "numeric": "499"
    },
    {
        "name": "Montserrat",
        "a2": "MS",
        "a3": "MSR",
        "numeric": "500"
    },
    {
        "name": "Morocco",
        "a2": "MA",
        "a3": "MAR",
        "numeric": "504"
    },
    {
        "name": "Mozambique",
        "a2": "MZ",
        "a3": "MOZ",
        "numeric": "508"
    },
    {
        "name": "Myanmar",
        "a2": "MM",
        "a3": "MMR",
        "numeric": "104"
    },
    {
        "name": "Namibia",
        "a2": "NA",
        "a3": "NAM",
        "numeric": "516"
    },
    {
        "name": "Nauru",
        "a2": "NR",
        "a3": "NRU",
        "numeric": "520"
    },
    {
        "name": "Nepal",
        "a2": "NP",
        "a3": "NPL",
        "numeric": "524"
    },
    {
        "name": "Netherlands (the)",
        "a2": "NL",
        "a3": "NLD",
        "numeric": "528"
    },
    {
        "name": "New Caledonia",
        "a2": "NC",
        "a3": "NCL",
        "numeric": "540"
    },
    {
        "name": "New Zealand",
        "a2": "NZ",
        "a3": "NZL",
        "numeric": "554"
    },
    {
        "name": "Nicaragua",
        "a2": "NI",
        "a3": "NIC",
        "numeric": "558"
    },
    {
        "name": "Niger (the)",
        "a2": "NE",
        "a3": "NER",
        "numeric": "562"
    },
    {
        "name": "Nigeria",
        "a2": "NG",
        "a3": "NGA",
        "numeric": "566"
    },
    {
        "name": "Niue",
        "a2": "NU",
        "a3": "NIU",
        "numeric": "570"
    },
    {
        "name": "Norfolk Island",
        "a2": "NF",
        "a3": "NFK",
        "numeric": "574"
    },
    {
        "name": "Northern Mariana Islands (the)",
        "a2": "MP",
        "a3": "MNP",
        "numeric": "580"
    },
    {
        "name": "Norway",
        "a2": "NO",
        "a3": "NOR",
        "numeric": "578"
    },
    {
        "name": "Oman",
        "a2": "OM",
        "a3": "OMN",
        "numeric": "512"
    },
    {
        "name": "Pakistan",
        "a2": "PK",
        "a3": "PAK",
        "numeric": "586"
    },
    {
        "name": "Palau",
        "a2": "PW",
        "a3": "PLW",
        "numeric": "585"
    },
    {
        "name": "Palestine",
        "a2": " State of",
        "a3": "PS",
        "numeric": "PSE"
    },
    {
        "name": "Panama",
        "a2": "PA",
        "a3": "PAN",
        "numeric": "591"
    },
    {
        "name": "Papua New Guinea",
        "a2": "PG",
        "a3": "PNG",
        "numeric": "598"
    },
    {
        "name": "Paraguay",
        "a2": "PY",
        "a3": "PRY",
        "numeric": "600"
    },
    {
        "name": "Peru",
        "a2": "PE",
        "a3": "PER",
        "numeric": "604"
    },
    {
        "name": "Philippines (the)",
        "a2": "PH",
        "a3": "PHL",
        "numeric": "608"
    },
    {
        "name": "Pitcairn",
        "a2": "PN",
        "a3": "PCN",
        "numeric": "612"
    },
    {
        "name": "Poland",
        "a2": "PL",
        "a3": "POL",
        "numeric": "616"
    },
    {
        "name": "Portugal",
        "a2": "PT",
        "a3": "PRT",
        "numeric": "620"
    },
    {
        "name": "Puerto Rico",
        "a2": "PR",
        "a3": "PRI",
        "numeric": "630"
    },
    {
        "name": "Qatar",
        "a2": "QA",
        "a3": "QAT",
        "numeric": "634"
    },
    {
        "name": "Réunion",
        "a2": "RE",
        "a3": "REU",
        "numeric": "638"
    },
    {
        "name": "Romania",
        "a2": "RO",
        "a3": "ROU",
        "numeric": "642"
    },
    {
        "name": "Russian Federation (the)",
        "a2": "RU",
        "a3": "RUS",
        "numeric": "643"
    },
    {
        "name": "Rwanda",
        "a2": "RW",
        "a3": "RWA",
        "numeric": "646"
    },
    {
        "name": "Saint Barthélemy",
        "a2": "BL",
        "a3": "BLM",
        "numeric": "652"
    },
    {
        "name": "Saint Helena",
        "a2": " Ascension and Tristan da Cunha",
        "a3": "SH",
        "numeric": "SHN"
    },
    {
        "name": "Saint Kitts and Nevis",
        "a2": "KN",
        "a3": "KNA",
        "numeric": "659"
    },
    {
        "name": "Saint Lucia",
        "a2": "LC",
        "a3": "LCA",
        "numeric": "662"
    },
    {
        "name": "Saint Martin (French part)",
        "a2": "MF",
        "a3": "MAF",
        "numeric": "663"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "a2": "PM",
        "a3": "SPM",
        "numeric": "666"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "a2": "VC",
        "a3": "VCT",
        "numeric": "670"
    },
    {
        "name": "Samoa",
        "a2": "WS",
        "a3": "WSM",
        "numeric": "882"
    },
    {
        "name": "San Marino",
        "a2": "SM",
        "a3": "SMR",
        "numeric": "674"
    },
    {
        "name": "Sao Tome and Principe",
        "a2": "ST",
        "a3": "STP",
        "numeric": "678"
    },
    {
        "name": "Saudi Arabia",
        "a2": "SA",
        "a3": "SAU",
        "numeric": "682"
    },
    {
        "name": "Senegal",
        "a2": "SN",
        "a3": "SEN",
        "numeric": "686"
    },
    {
        "name": "Serbia",
        "a2": "RS",
        "a3": "SRB",
        "numeric": "688"
    },
    {
        "name": "Seychelles",
        "a2": "SC",
        "a3": "SYC",
        "numeric": "690"
    },
    {
        "name": "Sierra Leone",
        "a2": "SL",
        "a3": "SLE",
        "numeric": "694"
    },
    {
        "name": "Singapore",
        "a2": "SG",
        "a3": "SGP",
        "numeric": "702"
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "a2": "SX",
        "a3": "SXM",
        "numeric": "534"
    },
    {
        "name": "Slovakia",
        "a2": "SK",
        "a3": "SVK",
        "numeric": "703"
    },
    {
        "name": "Slovenia",
        "a2": "SI",
        "a3": "SVN",
        "numeric": "705"
    },
    {
        "name": "Solomon Islands",
        "a2": "SB",
        "a3": "SLB",
        "numeric": "090"
    },
    {
        "name": "Somalia",
        "a2": "SO",
        "a3": "SOM",
        "numeric": "706"
    },
    {
        "name": "South Africa",
        "a2": "ZA",
        "a3": "ZAF",
        "numeric": "710"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "a2": "GS",
        "a3": "SGS",
        "numeric": "239"
    },
    {
        "name": "South Sudan",
        "a2": "SS",
        "a3": "SSD",
        "numeric": "728"
    },
    {
        "name": "Spain",
        "a2": "ES",
        "a3": "ESP",
        "numeric": "724"
    },
    {
        "name": "Sri Lanka",
        "a2": "LK",
        "a3": "LKA",
        "numeric": "144"
    },
    {
        "name": "Sudan (the)",
        "a2": "SD",
        "a3": "SDN",
        "numeric": "729"
    },
    {
        "name": "Suriname",
        "a2": "SR",
        "a3": "SUR",
        "numeric": "740"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "a2": "SJ",
        "a3": "SJM",
        "numeric": "744"
    },
    {
        "name": "Sweden",
        "a2": "SE",
        "a3": "SWE",
        "numeric": "752"
    },
    {
        "name": "Switzerland",
        "a2": "CH",
        "a3": "CHE",
        "numeric": "756"
    },
    {
        "name": "Syrian Arab Republic",
        "a2": "SY",
        "a3": "SYR",
        "numeric": "760"
    },
    {
        "name": "Taiwan (Province of China)",
        "a2": "TW",
        "a3": "TWN",
        "numeric": "158"
    },
    {
        "name": "Tajikistan",
        "a2": "TJ",
        "a3": "TJK",
        "numeric": "762"
    },
    {
        "name": "Tanzania",
        "a2": " United Republic of",
        "a3": "TZ",
        "numeric": "TZA"
    },
    {
        "name": "Thailand",
        "a2": "TH",
        "a3": "THA",
        "numeric": "764"
    },
    {
        "name": "Timor-Leste",
        "a2": "TL",
        "a3": "TLS",
        "numeric": "626"
    },
    {
        "name": "Togo",
        "a2": "TG",
        "a3": "TGO",
        "numeric": "768"
    },
    {
        "name": "Tokelau",
        "a2": "TK",
        "a3": "TKL",
        "numeric": "772"
    },
    {
        "name": "Tonga",
        "a2": "TO",
        "a3": "TON",
        "numeric": "776"
    },
    {
        "name": "Trinidad and Tobago",
        "a2": "TT",
        "a3": "TTO",
        "numeric": "780"
    },
    {
        "name": "Tunisia",
        "a2": "TN",
        "a3": "TUN",
        "numeric": "788"
    },
    {
        "name": "Turkey",
        "a2": "TR",
        "a3": "TUR",
        "numeric": "792"
    },
    {
        "name": "Turkmenistan",
        "a2": "TM",
        "a3": "TKM",
        "numeric": "795"
    },
    {
        "name": "Turks and Caicos Islands (the)",
        "a2": "TC",
        "a3": "TCA",
        "numeric": "796"
    },
    {
        "name": "Tuvalu",
        "a2": "TV",
        "a3": "TUV",
        "numeric": "798"
    },
    {
        "name": "Uganda",
        "a2": "UG",
        "a3": "UGA",
        "numeric": "800"
    },
    {
        "name": "Ukraine",
        "a2": "UA",
        "a3": "UKR",
        "numeric": "804"
    },
    {
        "name": "United Arab Emirates (the)",
        "a2": "AE",
        "a3": "ARE",
        "numeric": "784"
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland (the)",
        "a2": "GB",
        "a3": "GBR",
        "numeric": "826"
    },
    {
        "name": "United States Minor Outlying Islands (the)",
        "a2": "UM",
        "a3": "UMI",
        "numeric": "581"
    },
    {
        "name": "United States of America (the)",
        "a2": "US",
        "a3": "USA",
        "numeric": "840"
    },
    {
        "name": "Uruguay",
        "a2": "UY",
        "a3": "URY",
        "numeric": "858"
    },
    {
        "name": "Uzbekistan",
        "a2": "UZ",
        "a3": "UZB",
        "numeric": "860"
    },
    {
        "name": "Vanuatu",
        "a2": "VU",
        "a3": "VUT",
        "numeric": "548"
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "a2": "VE",
        "a3": "VEN",
        "numeric": "862"
    },
    {
        "name": "Viet Nam",
        "a2": "VN",
        "a3": "VNM",
        "numeric": "704"
    },
    {
        "name": "Virgin Islands (British)",
        "a2": "VG",
        "a3": "VGB",
        "numeric": "092"
    },
    {
        "name": "Virgin Islands (U.S.)",
        "a2": "VI",
        "a3": "VIR",
        "numeric": "850"
    },
    {
        "name": "Wallis and Futuna",
        "a2": "WF",
        "a3": "WLF",
        "numeric": "876"
    },
    {
        "name": "Western Sahara",
        "a2": "EH",
        "a3": "ESH",
        "numeric": "732"
    },
    {
        "name": "Yemen",
        "a2": "YE",
        "a3": "YEM",
        "numeric": "887"
    },
    {
        "name": "Zambia",
        "a2": "ZM",
        "a3": "ZMB",
        "numeric": "894"
    },
    {
        "name": "Zimbabwe",
        "a2": "ZW",
        "a3": "ZWE",
        "numeric": "716"
    }
]

export default countries