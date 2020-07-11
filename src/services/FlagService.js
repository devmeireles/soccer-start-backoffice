const countries = [
    {
        "name": "Afghanistan",
        "slug": "afghanistan",
        "alpha3": "afg"
    },
    {
        "name": "Åland Islands",
        "slug": "aland-islands",
        "alpha3": "ala"
    },
    {
        "name": "Albania",
        "slug": "albania",
        "alpha3": "alb"
    },
    {
        "name": "Algeria",
        "slug": "algeria",
        "alpha3": "dza"
    },
    {
        "name": "American Samoa",
        "slug": "american-samoa",
        "alpha3": "asm"
    },
    {
        "name": "Andorra",
        "slug": "andorra",
        "alpha3": "and"
    },
    {
        "name": "Angola",
        "slug": "angola",
        "alpha3": "ago"
    },
    {
        "name": "Anguilla",
        "slug": "anguilla",
        "alpha3": "aia"
    },
    {
        "name": "Antarctica",
        "slug": "antarctica",
        "alpha3": "ata"
    },
    {
        "name": "Antigua and Barbuda",
        "slug": "antigua-and-barbuda",
        "alpha3": "atg"
    },
    {
        "name": "Argentina",
        "slug": "argentina",
        "alpha3": "arg"
    },
    {
        "name": "Armenia",
        "slug": "armenia",
        "alpha3": "arm"
    },
    {
        "name": "Aruba",
        "slug": "aruba",
        "alpha3": "abw"
    },
    {
        "name": "Australia",
        "slug": "australia",
        "alpha3": "aus"
    },
    {
        "name": "Austria",
        "slug": "austria",
        "alpha3": "aut"
    },
    {
        "name": "Azerbaijan",
        "slug": "azerbaijan",
        "alpha3": "aze"
    },
    {
        "name": "Bahamas",
        "slug": "bahamas",
        "alpha3": "bhs"
    },
    {
        "name": "Bahrain",
        "slug": "bahrain",
        "alpha3": "bhr"
    },
    {
        "name": "Bangladesh",
        "slug": "bangladesh",
        "alpha3": "bgd"
    },
    {
        "name": "Barbados",
        "slug": "barbados",
        "alpha3": "brb"
    },
    {
        "name": "Belarus",
        "slug": "belarus",
        "alpha3": "blr"
    },
    {
        "name": "Belgium",
        "slug": "belgium",
        "alpha3": "bel"
    },
    {
        "name": "Belize",
        "slug": "belize",
        "alpha3": "blz"
    },
    {
        "name": "Benin",
        "slug": "benin",
        "alpha3": "ben"
    },
    {
        "name": "Bermuda",
        "slug": "bermuda",
        "alpha3": "bmu"
    },
    {
        "name": "Bhutan",
        "slug": "bhutan",
        "alpha3": "btn"
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "slug": "bolivia",
        "alpha3": "bol"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "slug": "bonaire",
        "alpha3": "bes"
    },
    {
        "name": "Bosnia and Herzegovina",
        "slug": "bosnia-herzegovina",
        "alpha3": "bih"
    },
    {
        "name": "Botswana",
        "slug": "botswana",
        "alpha3": "bwa"
    },
    {
        "name": "Bouvet Island",
        "slug": "bouvet island",
        "alpha3": "bvt"
    },
    {
        "name": "Brazil",
        "slug": "brazil",
        "alpha3": "bra"
    },
    {
        "name": "Virgin Islands (British)",
        "slug": "british-virgin-islands",
        "alpha3": "vgb"
    },
    {
        "name": "British Indian Ocean Territory",
        "slug": "british indian ocean territory",
        "alpha3": "iot"
    },
    {
        "name": "Brunei Darussalam",
        "slug": "brunei-darussalam",
        "alpha3": "brn"
    },
    {
        "name": "Bulgaria",
        "slug": "bulgaria",
        "alpha3": "bgr"
    },
    {
        "name": "Burkina Faso",
        "slug": "burkina-faso",
        "alpha3": "bfa"
    },
    {
        "name": "Burundi",
        "slug": "burundi",
        "alpha3": "bdi"
    },
    {
        "name": "Cambodia",
        "slug": "cambodia",
        "alpha3": "khm"
    },
    {
        "name": "Cameroon",
        "slug": "cameroon",
        "alpha3": "cmr"
    },
    {
        "name": "Canada",
        "slug": "canada",
        "alpha3": "can"
    },
    {
        "name": "Cabo Verde",
        "slug": "cabo-verde",
        "alpha3": "cpv"
    },
    {
        "name": "Cayman Islands",
        "slug": "cayman-islands",
        "alpha3": "cym"
    },
    {
        "name": "Central African Republic",
        "slug": "central-african-republic",
        "alpha3": "caf"
    },
    {
        "name": "Chad",
        "slug": "chad",
        "alpha3": "tcd"
    },
    {
        "name": "Chile",
        "slug": "chile",
        "alpha3": "chl"
    },
    {
        "name": "China",
        "slug": "china",
        "alpha3": "chn"
    },
    {
        "name": "Hong Kong",
        "slug": "hong-kong",
        "alpha3": "hkg"
    },
    {
        "name": "Macao",
        "slug": "macao",
        "alpha3": "mac"
    },
    {
        "name": "Christmas Island",
        "slug": "christmas island",
        "alpha3": "cxr"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "slug": "cocos (keeling) islands",
        "alpha3": "cck"
    },
    {
        "name": "Colombia",
        "slug": "colombia",
        "alpha3": "col"
    },
    {
        "name": "Comoros",
        "slug": "comoros",
        "alpha3": "com"
    },
    {
        "name": "Congo",
        "slug": "congo",
        "alpha3": "cog"
    },
    {
        "name": "Congo, Democratic Republic of the",
        "slug": "congo",
        "alpha3": "cod"
    },
    {
        "name": "Cook Islands",
        "slug": "cook-islands",
        "alpha3": "cok"
    },
    {
        "name": "Costa Rica",
        "slug": "costa-rica",
        "alpha3": "cri"
    },
    {
        "name": "Côte d'Ivoire",
        "slug": "cote-divoire",
        "alpha3": "civ"
    },
    {
        "name": "Croatia",
        "slug": "croatia",
        "alpha3": "hrv"
    },
    {
        "name": "Cuba",
        "slug": "cuba",
        "alpha3": "cub"
    },
    {
        "name": "Curaçao",
        "slug": "curaçao",
        "alpha3": "cuw"
    },
    {
        "name": "Cyprus",
        "slug": "cyprus",
        "alpha3": "cyp"
    },
    {
        "name": "Czechia",
        "slug": "czechia",
        "alpha3": "cze"
    },
    {
        "name": "Denmark",
        "slug": "denmark",
        "alpha3": "dnk"
    },
    {
        "name": "Djibouti",
        "slug": "djibouti",
        "alpha3": "dji"
    },
    {
        "name": "Dominica",
        "slug": "dominica",
        "alpha3": "dma"
    },
    {
        "name": "Dominican Republic",
        "slug": "dominican-republic",
        "alpha3": "dom"
    },
    {
        "name": "Ecuador",
        "slug": "ecuador",
        "alpha3": "ecu"
    },
    {
        "name": "Egypt",
        "slug": "egypt",
        "alpha3": "egy"
    },
    {
        "name": "El Salvador",
        "slug": "el-salvador",
        "alpha3": "slv"
    },
    {
        "name": "Equatorial Guinea",
        "slug": "equatorial-guinea",
        "alpha3": "gnq"
    },
    {
        "name": "Eritrea",
        "slug": "eritrea",
        "alpha3": "eri"
    },
    {
        "name": "Estonia",
        "slug": "estonia",
        "alpha3": "est"
    },
    {
        "name": "Ethiopia",
        "slug": "ethiopia",
        "alpha3": "eth"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "slug": "falkland islands (malvinas)",
        "alpha3": "flk"
    },
    {
        "name": "Faroe Islands",
        "slug": "faroe-islands",
        "alpha3": "fro"
    },
    {
        "name": "Fiji",
        "slug": "fiji",
        "alpha3": "fji"
    },
    {
        "name": "Finland",
        "slug": "finland",
        "alpha3": "fin"
    },
    {
        "name": "France",
        "slug": "france",
        "alpha3": "fra"
    },
    {
        "name": "French Guiana",
        "slug": "french-guyana",
        "alpha3": "guf"
    },
    {
        "name": "French Polynesia",
        "slug": "french polynesia",
        "alpha3": "pyf"
    },
    {
        "name": "French Southern Territories",
        "slug": "french southern territories",
        "alpha3": "atf"
    },
    {
        "name": "Gabon",
        "slug": "gabon",
        "alpha3": "gab"
    },
    {
        "name": "Gambia",
        "slug": "gambia",
        "alpha3": "gmb"
    },
    {
        "name": "Georgia",
        "slug": "georgia",
        "alpha3": "geo"
    },
    {
        "name": "Germany",
        "slug": "germany",
        "alpha3": "deu"
    },
    {
        "name": "Ghana",
        "slug": "ghana",
        "alpha3": "gha"
    },
    {
        "name": "Gibraltar",
        "slug": "gibraltar",
        "alpha3": "gib"
    },
    {
        "name": "Greece",
        "slug": "greece",
        "alpha3": "grc"
    },
    {
        "name": "Greenland",
        "slug": "greenland",
        "alpha3": "grl"
    },
    {
        "name": "Grenada",
        "slug": "grenada",
        "alpha3": "grd"
    },
    {
        "name": "Guadeloupe",
        "slug": "guadeloupe",
        "alpha3": "glp"
    },
    {
        "name": "Guam",
        "slug": "guam",
        "alpha3": "gum"
    },
    {
        "name": "Guatemala",
        "slug": "guatemala",
        "alpha3": "gtm"
    },
    {
        "name": "Guernsey",
        "slug": "guernsey",
        "alpha3": "ggy"
    },
    {
        "name": "Guinea",
        "slug": "guinea",
        "alpha3": "gin"
    },
    {
        "name": "Guinea-Bissau",
        "slug": "guinea-bissau",
        "alpha3": "gnb"
    },
    {
        "name": "Guyana",
        "slug": "guyana",
        "alpha3": "guy"
    },
    {
        "name": "Haiti",
        "slug": "haiti",
        "alpha3": "hti"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "slug": "heard island and mcdonald islands",
        "alpha3": "hmd"
    },
    {
        "name": "Holy See",
        "slug": "holy see",
        "alpha3": "vat"
    },
    {
        "name": "Honduras",
        "slug": "honduras",
        "alpha3": "hnd"
    },
    {
        "name": "Hungary",
        "slug": "hungary",
        "alpha3": "hun"
    },
    {
        "name": "Iceland",
        "slug": "iceland",
        "alpha3": "isl"
    },
    {
        "name": "India",
        "slug": "india",
        "alpha3": "ind"
    },
    {
        "name": "Indonesia",
        "slug": "indonesia",
        "alpha3": "idn"
    },
    {
        "name": "Iran (Islamic Republic of)",
        "slug": "iran",
        "alpha3": "irn"
    },
    {
        "name": "Iraq",
        "slug": "iraq",
        "alpha3": "irq"
    },
    {
        "name": "Ireland",
        "slug": "ireland",
        "alpha3": "irl"
    },
    {
        "name": "Isle of Man",
        "slug": "isle of man",
        "alpha3": "imn"
    },
    {
        "name": "Israel",
        "slug": "israel",
        "alpha3": "isr"
    },
    {
        "name": "Italy",
        "slug": "italy",
        "alpha3": "ita"
    },
    {
        "name": "Jamaica",
        "slug": "jamaica",
        "alpha3": "jam"
    },
    {
        "name": "Japan",
        "slug": "japan",
        "alpha3": "jpn"
    },
    {
        "name": "Jersey",
        "slug": "jersey",
        "alpha3": "jey"
    },
    {
        "name": "Jordan",
        "slug": "jordan",
        "alpha3": "jor"
    },
    {
        "name": "Kazakhstan",
        "slug": "kazakhstan",
        "alpha3": "kaz"
    },
    {
        "name": "Kenya",
        "slug": "kenya",
        "alpha3": "ken"
    },
    {
        "name": "Kiribati",
        "slug": "kiribati",
        "alpha3": "kir"
    },
    {
        "name": "Korea (Democratic People's Republic of)",
        "slug": "korea (democratic people's republic of)",
        "alpha3": "prk"
    },
    {
        "name": "Korea, Republic of",
        "slug": "korea-republic",
        "alpha3": "kor"
    },
    {
        "name": "Kuwait",
        "slug": "kuwait",
        "alpha3": "kwt"
    },
    {
        "name": "Kyrgyzstan",
        "slug": "kyrgyzstan",
        "alpha3": "kgz"
    },
    {
        "name": "Lao People's Democratic Republic",
        "slug": "laos",
        "alpha3": "lao"
    },
    {
        "name": "Latvia",
        "slug": "latvia",
        "alpha3": "lva"
    },
    {
        "name": "Lebanon",
        "slug": "lebanon",
        "alpha3": "lbn"
    },
    {
        "name": "Lesotho",
        "slug": "lesotho",
        "alpha3": "lso"
    },
    {
        "name": "Liberia",
        "slug": "liberia",
        "alpha3": "lbr"
    },
    {
        "name": "Libya",
        "slug": "libya",
        "alpha3": "lby"
    },
    {
        "name": "Liechtenstein",
        "slug": "liechtenstein",
        "alpha3": "lie"
    },
    {
        "name": "Lithuania",
        "slug": "lithuania",
        "alpha3": "ltu"
    },
    {
        "name": "Luxembourg",
        "slug": "luxembourg",
        "alpha3": "lux"
    },
    {
        "name": "North Macedonia",
        "slug": "macedonia-fyr",
        "alpha3": "mkd"
    },
    {
        "name": "Madagascar",
        "slug": "madagascar",
        "alpha3": "mdg"
    },
    {
        "name": "Malawi",
        "slug": "malawi",
        "alpha3": "mwi"
    },
    {
        "name": "Malaysia",
        "slug": "malaysia",
        "alpha3": "mys"
    },
    {
        "name": "Maldives",
        "slug": "maldives",
        "alpha3": "mdv"
    },
    {
        "name": "Mali",
        "slug": "mali",
        "alpha3": "mli"
    },
    {
        "name": "Malta",
        "slug": "malta",
        "alpha3": "mlt"
    },
    {
        "name": "Marshall Islands",
        "slug": "marshall-islands",
        "alpha3": "mhl"
    },
    {
        "name": "Martinique",
        "slug": "martinique",
        "alpha3": "mtq"
    },
    {
        "name": "Mauritania",
        "slug": "mauritania",
        "alpha3": "mrt"
    },
    {
        "name": "Mauritius",
        "slug": "mauritius",
        "alpha3": "mus"
    },
    {
        "name": "Mayotte",
        "slug": "mayotte",
        "alpha3": "myt"
    },
    {
        "name": "Mexico",
        "slug": "mexico",
        "alpha3": "mex"
    },
    {
        "name": "Micronesia (Federated States of)",
        "slug": "micronesia (federated states of)",
        "alpha3": "fsm"
    },
    {
        "name": "Moldova, Republic of",
        "slug": "moldova",
        "alpha3": "mda"
    },
    {
        "name": "Monaco",
        "slug": "monaco",
        "alpha3": "mco"
    },
    {
        "name": "Mongolia",
        "slug": "mongolia",
        "alpha3": "mng"
    },
    {
        "name": "Montenegro",
        "slug": "montenegro",
        "alpha3": "mne"
    },
    {
        "name": "Montserrat",
        "slug": "montserrat",
        "alpha3": "msr"
    },
    {
        "name": "Morocco",
        "slug": "morocco",
        "alpha3": "mar"
    },
    {
        "name": "Mozambique",
        "slug": "mozambique",
        "alpha3": "moz"
    },
    {
        "name": "Myanmar",
        "slug": "myanmar",
        "alpha3": "mmr"
    },
    {
        "name": "Namibia",
        "slug": "namibia",
        "alpha3": "nam"
    },
    {
        "name": "Nauru",
        "slug": "nauru",
        "alpha3": "nru"
    },
    {
        "name": "Nepal",
        "slug": "nepal",
        "alpha3": "npl"
    },
    {
        "name": "Netherlands",
        "slug": "netherlands",
        "alpha3": "nld"
    },
    {
        "name": "New Caledonia",
        "slug": "new-caledonia",
        "alpha3": "ncl"
    },
    {
        "name": "New Zealand",
        "slug": "new-zealand",
        "alpha3": "nzl"
    },
    {
        "name": "Nicaragua",
        "slug": "nicaragua",
        "alpha3": "nic"
    },
    {
        "name": "Niger",
        "slug": "niger",
        "alpha3": "ner"
    },
    {
        "name": "Nigeria",
        "slug": "nigeria",
        "alpha3": "nga"
    },
    {
        "name": "Niue",
        "slug": "niue",
        "alpha3": "niu"
    },
    {
        "name": "Norfolk Island",
        "slug": "norfolk island",
        "alpha3": "nfk"
    },
    {
        "name": "Northern Mariana Islands",
        "slug": "northern-mariana-islands",
        "alpha3": "mnp"
    },
    {
        "name": "Norway",
        "slug": "norway",
        "alpha3": "nor"
    },
    {
        "name": "Oman",
        "slug": "oman",
        "alpha3": "omn"
    },
    {
        "name": "Pakistan",
        "slug": "pakistan",
        "alpha3": "pak"
    },
    {
        "name": "Palau",
        "slug": "palau",
        "alpha3": "plw"
    },
    {
        "name": "Palestine, State of",
        "slug": "palestine",
        "alpha3": "pse"
    },
    {
        "name": "Panama",
        "slug": "panama",
        "alpha3": "pan"
    },
    {
        "name": "Papua New Guinea",
        "slug": "papua-new-guinea",
        "alpha3": "png"
    },
    {
        "name": "Paraguay",
        "slug": "paraguay",
        "alpha3": "pry"
    },
    {
        "name": "Peru",
        "slug": "peru",
        "alpha3": "per"
    },
    {
        "name": "Philippines",
        "slug": "philippines",
        "alpha3": "phl"
    },
    {
        "name": "Pitcairn",
        "slug": "pitcairn",
        "alpha3": "pcn"
    },
    {
        "name": "Poland",
        "slug": "poland",
        "alpha3": "pol"
    },
    {
        "name": "Portugal",
        "slug": "portugal",
        "alpha3": "prt"
    },
    {
        "name": "Puerto Rico",
        "slug": "puerto-rico",
        "alpha3": "pri"
    },
    {
        "name": "Qatar",
        "slug": "qatar",
        "alpha3": "qat"
    },
    {
        "name": "Réunion",
        "slug": "réunion",
        "alpha3": "reu"
    },
    {
        "name": "Romania",
        "slug": "romania",
        "alpha3": "rou"
    },
    {
        "name": "Russian Federation",
        "slug": "russia",
        "alpha3": "rus"
    },
    {
        "name": "Rwanda",
        "slug": "rwanda",
        "alpha3": "rwa"
    },
    {
        "name": "Saint Barthélemy",
        "slug": "saint barthélemy",
        "alpha3": "blm"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "slug": "saint helena, ascension and tristan da cunha",
        "alpha3": "shn"
    },
    {
        "name": "Saint Kitts and Nevis",
        "slug": "st-kitts-and-nevis",
        "alpha3": "kna"
    },
    {
        "name": "Saint Lucia",
        "slug": "st-lucia",
        "alpha3": "lca"
    },
    {
        "name": "Saint Martin (French part)",
        "slug": "saint-martin",
        "alpha3": "maf"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "slug": "saint pierre and miquelon",
        "alpha3": "spm"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "slug": "st-vincent-and-the-grenadines",
        "alpha3": "vct"
    },
    {
        "name": "Samoa",
        "slug": "samoa",
        "alpha3": "wsm"
    },
    {
        "name": "San Marino",
        "slug": "san-marino",
        "alpha3": "smr"
    },
    {
        "name": "Sao Tome and Principe",
        "slug": "sao-tome-e-principe",
        "alpha3": "stp"
    },
    {
        "name": "Saudi Arabia",
        "slug": "saudi-arabia",
        "alpha3": "sau"
    },
    {
        "name": "Senegal",
        "slug": "senegal",
        "alpha3": "sen"
    },
    {
        "name": "Serbia",
        "slug": "serbia",
        "alpha3": "srb"
    },
    {
        "name": "Seychelles",
        "slug": "seychelles",
        "alpha3": "syc"
    },
    {
        "name": "Sierra Leone",
        "slug": "sierra-leone",
        "alpha3": "sle"
    },
    {
        "name": "Singapore",
        "slug": "singapore",
        "alpha3": "sgp"
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "slug": "sint-maarten",
        "alpha3": "sxm"
    },
    {
        "name": "Slovakia",
        "slug": "slovakia",
        "alpha3": "svk"
    },
    {
        "name": "Slovenia",
        "slug": "slovenia",
        "alpha3": "svn"
    },
    {
        "name": "Solomon Islands",
        "slug": "solomon-islands",
        "alpha3": "slb"
    },
    {
        "name": "Somalia",
        "slug": "somalia",
        "alpha3": "som"
    },
    {
        "name": "South Africa",
        "slug": "south-africa",
        "alpha3": "zaf"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "slug": "south georgia and the south sandwich islands",
        "alpha3": "sgs"
    },
    {
        "name": "South Sudan",
        "slug": "south-sudan",
        "alpha3": "ssd"
    },
    {
        "name": "Spain",
        "slug": "spain",
        "alpha3": "esp"
    },
    {
        "name": "Sri Lanka",
        "slug": "sri-lanka",
        "alpha3": "lka"
    },
    {
        "name": "Sudan",
        "slug": "sudan",
        "alpha3": "sdn"
    },
    {
        "name": "Suriname",
        "slug": "suriname",
        "alpha3": "sur"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "slug": "svalbard and jan mayen",
        "alpha3": "sjm"
    },
    {
        "name": "Eswatini",
        "slug": "eswatini",
        "alpha3": "swz"
    },
    {
        "name": "Sweden",
        "slug": "sweden",
        "alpha3": "swe"
    },
    {
        "name": "Switzerland",
        "slug": "switzerland",
        "alpha3": "che"
    },
    {
        "name": "Syrian Arab Republic",
        "slug": "syria",
        "alpha3": "syr"
    },
    {
        "name": "Taiwan, Province of China",
        "slug": "chinese-taipei",
        "alpha3": "twn"
    },
    {
        "name": "Tajikistan",
        "slug": "tajikistan",
        "alpha3": "tjk"
    },
    {
        "name": "Tanzania, United Republic of",
        "slug": "tanzania",
        "alpha3": "tza"
    },
    {
        "name": "Thailand",
        "slug": "thailand",
        "alpha3": "tha"
    },
    {
        "name": "Timor-Leste",
        "slug": "timor-leste",
        "alpha3": "tls"
    },
    {
        "name": "Togo",
        "slug": "togo",
        "alpha3": "tgo"
    },
    {
        "name": "Tokelau",
        "slug": "tokelau",
        "alpha3": "tkl"
    },
    {
        "name": "Tonga",
        "slug": "tonga",
        "alpha3": "ton"
    },
    {
        "name": "Trinidad and Tobago",
        "slug": "trinidad-and-tobago",
        "alpha3": "tto"
    },
    {
        "name": "Tunisia",
        "slug": "tunisia",
        "alpha3": "tun"
    },
    {
        "name": "Turkey",
        "slug": "turkey",
        "alpha3": "tur"
    },
    {
        "name": "Turkmenistan",
        "slug": "turkmenistan",
        "alpha3": "tkm"
    },
    {
        "name": "Turks and Caicos Islands",
        "slug": "turks-and-caicos-islands",
        "alpha3": "tca"
    },
    {
        "name": "Tuvalu",
        "slug": "tuvalu",
        "alpha3": "tuv"
    },
    {
        "name": "Uganda",
        "slug": "uganda",
        "alpha3": "uga"
    },
    {
        "name": "Ukraine",
        "slug": "ukraine",
        "alpha3": "ukr"
    },
    {
        "name": "United Arab Emirates",
        "slug": "united-arab-emirates",
        "alpha3": "are"
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "slug": "united kingdom of great britain and northern ireland",
        "alpha3": "gbr"
    },
    {
        "name": "United States of America",
        "slug": "united-states",
        "alpha3": "usa"
    },
    {
        "name": "United States Minor Outlying Islands",
        "slug": "united states minor outlying islands",
        "alpha3": "umi"
    },
    {
        "name": "Uruguay",
        "slug": "uruguay",
        "alpha3": "ury"
    },
    {
        "name": "Uzbekistan",
        "slug": "uzbekistan",
        "alpha3": "uzb"
    },
    {
        "name": "Vanuatu",
        "slug": "vanuatu",
        "alpha3": "vut"
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "slug": "venezuela",
        "alpha3": "ven"
    },
    {
        "name": "Viet Nam",
        "slug": "vietnam",
        "alpha3": "vnm"
    },
    {
        "name": "Virgin Islands (U.S.)",
        "slug": "us-virgin-islands",
        "alpha3": "vir"
    },
    {
        "name": "Wallis and Futuna",
        "slug": "wallis and futuna",
        "alpha3": "wlf"
    },
    {
        "name": "Western Sahara",
        "slug": "western sahara",
        "alpha3": "esh"
    },
    {
        "name": "Yemen",
        "slug": "yemen",
        "alpha3": "yem"
    },
    {
        "name": "Zambia",
        "slug": "zambia",
        "alpha3": "zmb"
    },
    {
        "name": "Zimbabwe",
        "slug": "zimbabwe",
        "alpha3": "zwe"
    },
    {
        "name": "England",
        "slug": "england",
        "alpha3": "gb-eng"
    },
    {
        "name": "Scotland",
        "slug": "scotland",
        "alpha3": "gb-sct"
    },
    {
        "name": "Kosovo",
        "slug": "kosovo",
        "alpha3": "xk"
    },
    {
        "name": "Ireland",
        "slug": "ireland-republic",
        "alpha3": "irl"
    },
    {
        "name": "Northern Ireland",
        "slug": "northern-ireland",
        "alpha3": "gbr"
    }
];

export default {
    getFlagSlug(flag) {
        return countries.find(country => country.slug === flag);
    },
}