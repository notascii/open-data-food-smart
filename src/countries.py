class Groups:
    groups = {}
    elts_to_group = {}
    
    def __init__(self, l):
        self.groups = l
        self.update()
        
    def update(self):
        self.elts_to_group = {}
        for identifier, elts in self.groups.items():
            for elt in elts:
                self.elts_to_group[elt] = identifier
    
    def get_group(self, elt):
        if elt not in self.elts_to_group:
            return None
        return self.elts_to_group[elt]
    
    def get_elts(self, group):
        if group not in self.groups:
            return None
        return self.groups[group]
    
    def get_all_elts(self):
        return self.elts_to_group.keys()
    
    def get_groups_name(self):
        return self.groups.keys()
    

country_acronyms = Groups({

	"Afghanistan": [
		"Afghanistan", "AF", "AFG", "4", "ISO 3166-2:AF",
	],

	"Åland Islands": [
		"Åland Islands", "AX", "ALA", "248", "ISO 3166-2:AX",
	],

	"Albania": [
		"Albania", "AL", "ALB", "8", "ISO 3166-2:AL",
	],

	"Algeria": [
		"Algeria", "DZ", "DZA", "12", "ISO 3166-2:DZ",
	],

	"American Samoa": [
		"American Samoa", "AS", "ASM", "16", "ISO 3166-2:AS",
	],

	"Andorra": [
		"Andorra", "AD", "AND", "20", "ISO 3166-2:AD",
	],

	"Angola": [
		"Angola", "AO", "AGO", "24", "ISO 3166-2:AO",
	],

	"Anguilla": [
		"Anguilla", "AI", "AIA", "660", "ISO 3166-2:AI",
	],

	"Antarctica": [
		"Antarctica", "AQ", "ATA", "10", "ISO 3166-2:AQ",
	],

	"Antigua and Barbuda": [
		"Antigua and Barbuda", "AG", "ATG", "28", "ISO 3166-2:AG",
	],

	"Argentina": [
		"Argentina", "AR", "ARG", "32", "ISO 3166-2:AR",
	],

	"Armenia": [
		"Armenia", "AM", "ARM", "51", "ISO 3166-2:AM",
	],

	"Aruba": [
		"Aruba", "AW", "ABW", "533", "ISO 3166-2:AW",
	],

	"Australia": [
		"Australia", "AU", "AUS", "36", "ISO 3166-2:AU",
	],

	"Austria": [
		"Austria", "AT", "AUT", "40", "ISO 3166-2:AT",
	],

	"Azerbaijan": [
		"Azerbaijan", "AZ", "AZE", "31", "ISO 3166-2:AZ",
	],

	"Bahamas": [
		"Bahamas", "BS", "BHS", "44", "ISO 3166-2:BS",
	],

	"Bahrain": [
		"Bahrain", "BH", "BHR", "48", "ISO 3166-2:BH",
	],

	"Bangladesh": [
		"Bangladesh", "BD", "BGD", "50", "ISO 3166-2:BD",
	],

	"Barbados": [
		"Barbados", "BB", "BRB", "52", "ISO 3166-2:BB",
	],

	"Belarus": [
		"Belarus", "BY", "BLR", "112", "ISO 3166-2:BY",
	],

	"Belgium": [
		"Belgium", "BE", "BEL", "56", "ISO 3166-2:BE",
	],

	"Belize": [
		"Belize", "BZ", "BLZ", "84", "ISO 3166-2:BZ",
	],

	"Benin": [
		"Benin", "BJ", "BEN", "204", "ISO 3166-2:BJ",
	],

	"Bermuda": [
		"Bermuda", "BM", "BMU", "60", "ISO 3166-2:BM",
	],

	"Bhutan": [
		"Bhutan", "BT", "BTN", "64", "ISO 3166-2:BT",
	],

	"Bolivia, Plurinational State of": [
		"Bolivia, Plurinational State of", "BO", "BOL", "68", "ISO 3166-2:BO",
	],

	"Bonaire, Sint Eustatius and Saba": [
		"Bonaire, Sint Eustatius and Saba", "BQ", "BES", "535", "ISO 3166-2:BQ",
	],

	"Bosnia and Herzegovina": [
		"Bosnia and Herzegovina", "BA", "BIH", "70", "ISO 3166-2:BA",
	],

	"Botswana": [
		"Botswana", "BW", "BWA", "72", "ISO 3166-2:BW",
	],

	"Bouvet Island": [
		"Bouvet Island", "BV", "BVT", "74", "ISO 3166-2:BV",
	],

	"Brazil": [
		"Brazil", "BR", "BRA", "76", "ISO 3166-2:BR",
	],

	"British Indian Ocean Territory": [
		"British Indian Ocean Territory", "IO", "IOT", "86", "ISO 3166-2:IO",
	],

	"Brunei Darussalam": [
		"Brunei Darussalam", "BN", "BRN", "96", "ISO 3166-2:BN",
	],

	"Bulgaria": [
		"Bulgaria", "BG", "BGR", "100", "ISO 3166-2:BG",
	],

	"Burkina Faso": [
		"Burkina Faso", "BF", "BFA", "854", "ISO 3166-2:BF",
	],

	"Burundi": [
		"Burundi", "BI", "BDI", "108", "ISO 3166-2:BI",
	],

	"Cabo Verde": [
		"Cabo Verde", "CV", "CPV", "132", "ISO 3166-2:CV",
	],

	"Cambodia": [
		"Cambodia", "KH", "KHM", "116", "ISO 3166-2:KH",
	],

	"Cameroon": [
		"Cameroon", "CM", "CMR", "120", "ISO 3166-2:CM",
	],

	"Canada": [
		"Canada", "CA", "CAN", "124", "ISO 3166-2:CA",
	],

	"Cayman Islands": [
		"Cayman Islands", "KY", "CYM", "136", "ISO 3166-2:KY",
	],

	"Central African Republic": [
		"Central African Republic", "CF", "CAF", "140", "ISO 3166-2:CF",
	],

	"Chad": [
		"Chad", "TD", "TCD", "148", "ISO 3166-2:TD",
	],

	"Chile": [
		"Chile", "CL", "CHL", "152", "ISO 3166-2:CL",
	],

	"China": [
		"China", "CN", "CHN", "156", "ISO 3166-2:CN",
	],

	"Christmas Island": [
		"Christmas Island", "CX", "CXR", "162", "ISO 3166-2:CX",
	],

	"Cocos (Keeling) Islands": [
		"Cocos (Keeling) Islands", "CC", "CCK", "166", "ISO 3166-2:CC",
	],

	"Colombia": [
		"Colombia", "CO", "COL", "170", "ISO 3166-2:CO",
	],

	"Comoros": [
		"Comoros", "KM", "COM", "174", "ISO 3166-2:KM",
	],

	"Congo": [
		"Congo", "CG", "COG", "178", "ISO 3166-2:CG",
	],

	"Congo, Democratic Republic of the": [
		"Congo, Democratic Republic of the", "CD", "COD", "180", "ISO 3166-2:CD",
	],

	"Cook Islands": [
		"Cook Islands", "CK", "COK", "184", "ISO 3166-2:CK",
	],

	"Costa Rica": [
		"Costa Rica", "CR", "CRI", "188", "ISO 3166-2:CR",
	],

	"Côte d'Ivoire": [
		"Côte d'Ivoire", "CI", "CIV", "384", "ISO 3166-2:CI",
	],

	"Croatia": [
		"Croatia", "HR", "HRV", "191", "ISO 3166-2:HR",
	],

	"Cuba": [
		"Cuba", "CU", "CUB", "192", "ISO 3166-2:CU",
	],

	"Curaçao": [
		"Curaçao", "CW", "CUW", "531", "ISO 3166-2:CW",
	],

	"Cyprus": [
		"Cyprus", "CY", "CYP", "196", "ISO 3166-2:CY",
	],

	"Czechia": [
		"Czechia", "CZ", "CZE", "203", "ISO 3166-2:CZ",
	],

	"Denmark": [
		"Denmark", "DK", "DNK", "208", "ISO 3166-2:DK",
	],

	"Djibouti": [
		"Djibouti", "DJ", "DJI", "262", "ISO 3166-2:DJ",
	],

	"Dominica": [
		"Dominica", "DM", "DMA", "212", "ISO 3166-2:DM",
	],

	"Dominican Republic": [
		"Dominican Republic", "DO", "DOM", "214", "ISO 3166-2:DO",
	],

	"Ecuador": [
		"Ecuador", "EC", "ECU", "218", "ISO 3166-2:EC",
	],

	"Egypt": [
		"Egypt", "EG", "EGY", "818", "ISO 3166-2:EG",
	],

	"El Salvador": [
		"El Salvador", "SV", "SLV", "222", "ISO 3166-2:SV",
	],

	"Equatorial Guinea": [
		"Equatorial Guinea", "GQ", "GNQ", "226", "ISO 3166-2:GQ",
	],

	"Eritrea": [
		"Eritrea", "ER", "ERI", "232", "ISO 3166-2:ER",
	],

	"Estonia": [
		"Estonia", "EE", "EST", "233", "ISO 3166-2:EE",
	],

	"Eswatini": [
		"Eswatini", "SZ", "SWZ", "748", "ISO 3166-2:SZ",
	],

	"Ethiopia": [
		"Ethiopia", "ET", "ETH", "231", "ISO 3166-2:ET",
	],

	"Falkland Islands (Malvinas)": [
		"Falkland Islands (Malvinas)", "FK", "FLK", "238", "ISO 3166-2:FK",
	],

	"Faroe Islands": [
		"Faroe Islands", "FO", "FRO", "234", "ISO 3166-2:FO",
	],

	"Fiji": [
		"Fiji", "FJ", "FJI", "242", "ISO 3166-2:FJ",
	],

	"Finland": [
		"Finland", "FI", "FIN", "246", "ISO 3166-2:FI",
	],

	"France": [
		"France", "FR", "FRA", "250", "ISO 3166-2:FR",
	],

	"French Guiana": [
		"French Guiana", "GF", "GUF", "254", "ISO 3166-2:GF",
	],

	"French Polynesia": [
		"French Polynesia", "PF", "PYF", "258", "ISO 3166-2:PF",
	],

	"French Southern Territories": [
		"French Southern Territories", "TF", "ATF", "260", "ISO 3166-2:TF",
	],

	"Gabon": [
		"Gabon", "GA", "GAB", "266", "ISO 3166-2:GA",
	],

	"Gambia": [
		"Gambia", "GM", "GMB", "270", "ISO 3166-2:GM",
	],

	"Georgia": [
		"Georgia", "GE", "GEO", "268", "ISO 3166-2:GE",
	],

	"Germany": [
		"Germany", "DE", "DEU", "276", "ISO 3166-2:DE",
	],

	"Ghana": [
		"Ghana", "GH", "GHA", "288", "ISO 3166-2:GH",
	],

	"Gibraltar": [
		"Gibraltar", "GI", "GIB", "292", "ISO 3166-2:GI",
	],

	"Greece": [
		"Greece", "GR", "GRC", "300", "ISO 3166-2:GR",
	],

	"Greenland": [
		"Greenland", "GL", "GRL", "304", "ISO 3166-2:GL",
	],

	"Grenada": [
		"Grenada", "GD", "GRD", "308", "ISO 3166-2:GD",
	],

	"Guadeloupe": [
		"Guadeloupe", "GP", "GLP", "312", "ISO 3166-2:GP",
	],

	"Guam": [
		"Guam", "GU", "GUM", "316", "ISO 3166-2:GU",
	],

	"Guatemala": [
		"Guatemala", "GT", "GTM", "320", "ISO 3166-2:GT",
	],

	"Guernsey": [
		"Guernsey", "GG", "GGY", "831", "ISO 3166-2:GG",
	],

	"Guinea": [
		"Guinea", "GN", "GIN", "324", "ISO 3166-2:GN",
	],

	"Guinea-Bissau": [
		"Guinea-Bissau", "GW", "GNB", "624", "ISO 3166-2:GW",
	],

	"Guyana": [
		"Guyana", "GY", "GUY", "328", "ISO 3166-2:GY",
	],

	"Haiti": [
		"Haiti", "HT", "HTI", "332", "ISO 3166-2:HT",
	],

	"Heard Island and McDonald Islands": [
		"Heard Island and McDonald Islands", "HM", "HMD", "334", "ISO 3166-2:HM",
	],

	"Holy See": [
		"Holy See", "VA", "VAT", "336", "ISO 3166-2:VA",
	],

	"Honduras": [
		"Honduras", "HN", "HND", "340", "ISO 3166-2:HN",
	],

	"Hong Kong": [
		"Hong Kong", "HK", "HKG", "344", "ISO 3166-2:HK",
	],

	"Hungary": [
		"Hungary", "HU", "HUN", "348", "ISO 3166-2:HU",
	],

	"Iceland": [
		"Iceland", "IS", "ISL", "352", "ISO 3166-2:IS",
	],

	"India": [
		"India", "IN", "IND", "356", "ISO 3166-2:IN",
	],

	"Indonesia": [
		"Indonesia", "ID", "IDN", "360", "ISO 3166-2:ID",
	],

	"Iran, Islamic Republic of": [
		"Iran, Islamic Republic of", "IR", "IRN", "364", "ISO 3166-2:IR",
	],

	"Iraq": [
		"Iraq", "IQ", "IRQ", "368", "ISO 3166-2:IQ",
	],

	"Ireland": [
		"Ireland", "IE", "IRL", "372", "ISO 3166-2:IE",
	],

	"Isle of Man": [
		"Isle of Man", "IM", "IMN", "833", "ISO 3166-2:IM",
	],

	"Israel": [
		"Israel", "IL", "ISR", "376", "ISO 3166-2:IL",
	],

	"Italy": [
		"Italy", "IT", "ITA", "380", "ISO 3166-2:IT",
	],

	"Jamaica": [
		"Jamaica", "JM", "JAM", "388", "ISO 3166-2:JM",
	],

	"Japan": [
		"Japan", "JP", "JPN", "392", "ISO 3166-2:JP",
	],

	"Jersey": [
		"Jersey", "JE", "JEY", "832", "ISO 3166-2:JE",
	],

	"Jordan": [
		"Jordan", "JO", "JOR", "400", "ISO 3166-2:JO",
	],

	"Kazakhstan": [
		"Kazakhstan", "KZ", "KAZ", "398", "ISO 3166-2:KZ",
	],

	"Kenya": [
		"Kenya", "KE", "KEN", "404", "ISO 3166-2:KE",
	],

	"Kiribati": [
		"Kiribati", "KI", "KIR", "296", "ISO 3166-2:KI",
	],

	"Korea, Democratic People's Republic of": [
		"Korea, Democratic People's Republic of", "KP", "PRK", "408", "ISO 3166-2:KP",
	],

	"Korea, Republic of": [
		"Korea, Republic of", "KR", "KOR", "410", "ISO 3166-2:KR",
	],

	"Kuwait": [
		"Kuwait", "KW", "KWT", "414", "ISO 3166-2:KW",
	],

	"Kyrgyzstan": [
		"Kyrgyzstan", "KG", "KGZ", "417", "ISO 3166-2:KG",
	],

	"Lao People's Democratic Republic": [
		"Lao People's Democratic Republic", "LA", "LAO", "418", "ISO 3166-2:LA",
	],

	"Latvia": [
		"Latvia", "LV", "LVA", "428", "ISO 3166-2:LV",
	],

	"Lebanon": [
		"Lebanon", "LB", "LBN", "422", "ISO 3166-2:LB",
	],

	"Lesotho": [
		"Lesotho", "LS", "LSO", "426", "ISO 3166-2:LS",
	],

	"Liberia": [
		"Liberia", "LR", "LBR", "430", "ISO 3166-2:LR",
	],

	"Libya": [
		"Libya", "LY", "LBY", "434", "ISO 3166-2:LY",
	],

	"Liechtenstein": [
		"Liechtenstein", "LI", "LIE", "438", "ISO 3166-2:LI",
	],

	"Lithuania": [
		"Lithuania", "LT", "LTU", "440", "ISO 3166-2:LT",
	],

	"Luxembourg": [
		"Luxembourg", "LU", "LUX", "442", "ISO 3166-2:LU",
	],

	"Macao": [
		"Macao", "MO", "MAC", "446", "ISO 3166-2:MO",
	],

	"Madagascar": [
		"Madagascar", "MG", "MDG", "450", "ISO 3166-2:MG",
	],

	"Malawi": [
		"Malawi", "MW", "MWI", "454", "ISO 3166-2:MW",
	],

	"Malaysia": [
		"Malaysia", "MY", "MYS", "458", "ISO 3166-2:MY",
	],

	"Maldives": [
		"Maldives", "MV", "MDV", "462", "ISO 3166-2:MV",
	],

	"Mali": [
		"Mali", "ML", "MLI", "466", "ISO 3166-2:ML",
	],

	"Malta": [
		"Malta", "MT", "MLT", "470", "ISO 3166-2:MT",
	],

	"Marshall Islands": [
		"Marshall Islands", "MH", "MHL", "584", "ISO 3166-2:MH",
	],

	"Martinique": [
		"Martinique", "MQ", "MTQ", "474", "ISO 3166-2:MQ",
	],

	"Mauritania": [
		"Mauritania", "MR", "MRT", "478", "ISO 3166-2:MR",
	],

	"Mauritius": [
		"Mauritius", "MU", "MUS", "480", "ISO 3166-2:MU",
	],

	"Mayotte": [
		"Mayotte", "YT", "MYT", "175", "ISO 3166-2:YT",
	],

	"Mexico": [
		"Mexico", "MX", "MEX", "484", "ISO 3166-2:MX",
	],

	"Micronesia, Federated States of": [
		"Micronesia, Federated States of", "FM", "FSM", "583", "ISO 3166-2:FM",
	],

	"Moldova, Republic of": [
		"Moldova, Republic of", "MD", "MDA", "498", "ISO 3166-2:MD",
	],

	"Monaco": [
		"Monaco", "MC", "MCO", "492", "ISO 3166-2:MC",
	],

	"Mongolia": [
		"Mongolia", "MN", "MNG", "496", "ISO 3166-2:MN",
	],

	"Montenegro": [
		"Montenegro", "ME", "MNE", "499", "ISO 3166-2:ME",
	],

	"Montserrat": [
		"Montserrat", "MS", "MSR", "500", "ISO 3166-2:MS",
	],

	"Morocco": [
		"Morocco", "MA", "MAR", "504", "ISO 3166-2:MA",
	],

	"Mozambique": [
		"Mozambique", "MZ", "MOZ", "508", "ISO 3166-2:MZ",
	],

	"Myanmar": [
		"Myanmar", "MM", "MMR", "104", "ISO 3166-2:MM",
	],

	"Namibia": [
		"Namibia", "nan", "NAM", "516", "ISO 3166-2:NA",
	],

	"Nauru": [
		"Nauru", "NR", "NRU", "520", "ISO 3166-2:NR",
	],

	"Nepal": [
		"Nepal", "NP", "NPL", "524", "ISO 3166-2:NP",
	],

	"Netherlands, Kingdom of the": [
		"Netherlands, Kingdom of the", "NL", "NLD", "528", "ISO 3166-2:NL",
	],

	"New Caledonia": [
		"New Caledonia", "NC", "NCL", "540", "ISO 3166-2:NC",
	],

	"New Zealand": [
		"New Zealand", "NZ", "NZL", "554", "ISO 3166-2:NZ",
	],

	"Nicaragua": [
		"Nicaragua", "NI", "NIC", "558", "ISO 3166-2:NI",
	],

	"Niger": [
		"Niger", "NE", "NER", "562", "ISO 3166-2:NE",
	],

	"Nigeria": [
		"Nigeria", "NG", "NGA", "566", "ISO 3166-2:NG",
	],

	"Niue": [
		"Niue", "NU", "NIU", "570", "ISO 3166-2:NU",
	],

	"Norfolk Island": [
		"Norfolk Island", "NF", "NFK", "574", "ISO 3166-2:NF",
	],

	"North Macedonia": [
		"North Macedonia", "MK", "MKD", "807", "ISO 3166-2:MK",
	],

	"Northern Mariana Islands": [
		"Northern Mariana Islands", "MP", "MNP", "580", "ISO 3166-2:MP",
	],

	"Norway": [
		"Norway", "NO", "NOR", "578", "ISO 3166-2:NO",
	],

	"Oman": [
		"Oman", "OM", "OMN", "512", "ISO 3166-2:OM",
	],

	"Pakistan": [
		"Pakistan", "PK", "PAK", "586", "ISO 3166-2:PK",
	],

	"Palau": [
		"Palau", "PW", "PLW", "585", "ISO 3166-2:PW",
	],

	"Palestine, State of": [
		"Palestine, State of", "PS", "PSE", "275", "ISO 3166-2:PS",
	],

	"Panama": [
		"Panama", "PA", "PAN", "591", "ISO 3166-2:PA",
	],

	"Papua New Guinea": [
		"Papua New Guinea", "PG", "PNG", "598", "ISO 3166-2:PG",
	],

	"Paraguay": [
		"Paraguay", "PY", "PRY", "600", "ISO 3166-2:PY",
	],

	"Peru": [
		"Peru", "PE", "PER", "604", "ISO 3166-2:PE",
	],

	"Philippines": [
		"Philippines", "PH", "PHL", "608", "ISO 3166-2:PH",
	],

	"Pitcairn": [
		"Pitcairn", "PN", "PCN", "612", "ISO 3166-2:PN",
	],

	"Poland": [
		"Poland", "PL", "POL", "616", "ISO 3166-2:PL",
	],

	"Portugal": [
		"Portugal", "PT", "PRT", "620", "ISO 3166-2:PT",
	],

	"Puerto Rico": [
		"Puerto Rico", "PR", "PRI", "630", "ISO 3166-2:PR",
	],

	"Qatar": [
		"Qatar", "QA", "QAT", "634", "ISO 3166-2:QA",
	],

	"Réunion": [
		"Réunion", "RE", "REU", "638", "ISO 3166-2:RE",
	],

	"Romania": [
		"Romania", "RO", "ROU", "642", "ISO 3166-2:RO",
	],

	"Russian Federation": [
		"Russian Federation", "RU", "RUS", "643", "ISO 3166-2:RU",
	],

	"Rwanda": [
		"Rwanda", "RW", "RWA", "646", "ISO 3166-2:RW",
	],

	"Saint Barthélemy": [
		"Saint Barthélemy", "BL", "BLM", "652", "ISO 3166-2:BL",
	],

	"Saint Helena, Ascension and Tristan da Cunha": [
		"Saint Helena, Ascension and Tristan da Cunha", "SH", "SHN", "654", "ISO 3166-2:SH",
	],

	"Saint Kitts and Nevis": [
		"Saint Kitts and Nevis", "KN", "KNA", "659", "ISO 3166-2:KN",
	],

	"Saint Lucia": [
		"Saint Lucia", "LC", "LCA", "662", "ISO 3166-2:LC",
	],

	"Saint Martin (French part)": [
		"Saint Martin (French part)", "MF", "MAF", "663", "ISO 3166-2:MF",
	],

	"Saint Pierre and Miquelon": [
		"Saint Pierre and Miquelon", "PM", "SPM", "666", "ISO 3166-2:PM",
	],

	"Saint Vincent and the Grenadines": [
		"Saint Vincent and the Grenadines", "VC", "VCT", "670", "ISO 3166-2:VC",
	],

	"Samoa": [
		"Samoa", "WS", "WSM", "882", "ISO 3166-2:WS",
	],

	"San Marino": [
		"San Marino", "SM", "SMR", "674", "ISO 3166-2:SM",
	],

	"Sao Tome and Principe": [
		"Sao Tome and Principe", "ST", "STP", "678", "ISO 3166-2:ST",
	],

	"Saudi Arabia": [
		"Saudi Arabia", "SA", "SAU", "682", "ISO 3166-2:SA",
	],

	"Senegal": [
		"Senegal", "SN", "SEN", "686", "ISO 3166-2:SN",
	],

	"Serbia": [
		"Serbia", "RS", "SRB", "688", "ISO 3166-2:RS",
	],

	"Seychelles": [
		"Seychelles", "SC", "SYC", "690", "ISO 3166-2:SC",
	],

	"Sierra Leone": [
		"Sierra Leone", "SL", "SLE", "694", "ISO 3166-2:SL",
	],

	"Singapore": [
		"Singapore", "SG", "SGP", "702", "ISO 3166-2:SG",
	],

	"Sint Maarten (Dutch part)": [
		"Sint Maarten (Dutch part)", "SX", "SXM", "534", "ISO 3166-2:SX",
	],

	"Slovakia": [
		"Slovakia", "SK", "SVK", "703", "ISO 3166-2:SK",
	],

	"Slovenia": [
		"Slovenia", "SI", "SVN", "705", "ISO 3166-2:SI",
	],

	"Solomon Islands": [
		"Solomon Islands", "SB", "SLB", "90", "ISO 3166-2:SB",
	],

	"Somalia": [
		"Somalia", "SO", "SOM", "706", "ISO 3166-2:SO",
	],

	"South Africa": [
		"South Africa", "ZA", "ZAF", "710", "ISO 3166-2:ZA",
	],

	"South Georgia and the South Sandwich Islands": [
		"South Georgia and the South Sandwich Islands", "GS", "SGS", "239", "ISO 3166-2:GS",
	],

	"South Sudan": [
		"South Sudan", "SS", "SSD", "728", "ISO 3166-2:SS",
	],

	"Spain": [
		"Spain", "ES", "ESP", "724", "ISO 3166-2:ES",
	],

	"Sri Lanka": [
		"Sri Lanka", "LK", "LKA", "144", "ISO 3166-2:LK",
	],

	"Sudan": [
		"Sudan", "SD", "SDN", "729", "ISO 3166-2:SD",
	],

	"Suriname": [
		"Suriname", "SR", "SUR", "740", "ISO 3166-2:SR",
	],

	"Svalbard and Jan Mayen": [
		"Svalbard and Jan Mayen", "SJ", "SJM", "744", "ISO 3166-2:SJ",
	],

	"Sweden": [
		"Sweden", "SE", "SWE", "752", "ISO 3166-2:SE",
	],

	"Switzerland": [
		"Switzerland", "CH", "CHE", "756", "ISO 3166-2:CH",
	],

	"Syrian Arab Republic": [
		"Syrian Arab Republic", "SY", "SYR", "760", "ISO 3166-2:SY",
	],

	"Taiwan, Province of China": [
		"Taiwan, Province of China", "TW", "TWN", "158", "ISO 3166-2:TW",
	],

	"Tajikistan": [
		"Tajikistan", "TJ", "TJK", "762", "ISO 3166-2:TJ",
	],

	"Tanzania, United Republic of": [
		"Tanzania, United Republic of", "TZ", "TZA", "834", "ISO 3166-2:TZ",
	],

	"Thailand": [
		"Thailand", "TH", "THA", "764", "ISO 3166-2:TH",
	],

	"Timor-Leste": [
		"Timor-Leste", "TL", "TLS", "626", "ISO 3166-2:TL",
	],

	"Togo": [
		"Togo", "TG", "TGO", "768", "ISO 3166-2:TG",
	],

	"Tokelau": [
		"Tokelau", "TK", "TKL", "772", "ISO 3166-2:TK",
	],

	"Tonga": [
		"Tonga", "TO", "TON", "776", "ISO 3166-2:TO",
	],

	"Trinidad and Tobago": [
		"Trinidad and Tobago", "TT", "TTO", "780", "ISO 3166-2:TT",
	],

	"Tunisia": [
		"Tunisia", "TN", "TUN", "788", "ISO 3166-2:TN",
	],

	"Türkiye": [
		"Türkiye", "TR", "TUR", "792", "ISO 3166-2:TR",
	],

	"Turkmenistan": [
		"Turkmenistan", "TM", "TKM", "795", "ISO 3166-2:TM",
	],

	"Turks and Caicos Islands": [
		"Turks and Caicos Islands", "TC", "TCA", "796", "ISO 3166-2:TC",
	],

	"Tuvalu": [
		"Tuvalu", "TV", "TUV", "798", "ISO 3166-2:TV",
	],

	"Uganda": [
		"Uganda", "UG", "UGA", "800", "ISO 3166-2:UG",
	],

	"Ukraine": [
		"Ukraine", "UA", "UKR", "804", "ISO 3166-2:UA",
	],

	"United Arab Emirates": [
		"United Arab Emirates", "AE", "ARE", "784", "ISO 3166-2:AE",
	],

	"United Kingdom of Great Britain and Northern Ireland": [
		"United Kingdom of Great Britain and Northern Ireland", "GB", "GBR", "826", "ISO 3166-2:GB",
	],

	"United States of America": [
		"United States of America", "US", "USA", "840", "ISO 3166-2:US",
	],

	"United States Minor Outlying Islands": [
		"United States Minor Outlying Islands", "UM", "UMI", "581", "ISO 3166-2:UM",
	],

	"Uruguay": [
		"Uruguay", "UY", "URY", "858", "ISO 3166-2:UY",
	],

	"Uzbekistan": [
		"Uzbekistan", "UZ", "UZB", "860", "ISO 3166-2:UZ",
	],

	"Vanuatu": [
		"Vanuatu", "VU", "VUT", "548", "ISO 3166-2:VU",
	],

	"Venezuela, Bolivarian Republic of": [
		"Venezuela, Bolivarian Republic of", "VE", "VEN", "862", "ISO 3166-2:VE",
	],

	"Viet Nam": [
		"Viet Nam", "VN", "VNM", "704", "ISO 3166-2:VN",
	],

	"Virgin Islands (British)": [
		"Virgin Islands (British)", "VG", "VGB", "92", "ISO 3166-2:VG",
	],

	"Virgin Islands (U.S.)": [
		"Virgin Islands (U.S.)", "VI", "VIR", "850", "ISO 3166-2:VI",
	],

	"Wallis and Futuna": [
		"Wallis and Futuna", "WF", "WLF", "876", "ISO 3166-2:WF",
	],

	"Western Sahara": [
		"Western Sahara", "EH", "ESH", "732", "ISO 3166-2:EH",
	],

	"Yemen": [
		"Yemen", "YE", "YEM", "887", "ISO 3166-2:YE",
	],

	"Zambia": [
		"Zambia", "ZM", "ZMB", "894", "ISO 3166-2:ZM",
	],

	"Zimbabwe": [
		"Zimbabwe", "ZW", "ZWE", "716", "ISO 3166-2:ZW",
	],

})

subregion_country = Groups({
    
})

region_country = Groups({
    
})


