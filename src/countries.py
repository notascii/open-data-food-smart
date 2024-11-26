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
		"Afghanistan", "afghanistan", "AF", "AFG", "4", "ISO 3166-2:AF",
	],

	"Åland Islands": [
		"Åland Islands", "aland islands", "AX", "ALA", "248", "ISO 3166-2:AX",
	],

	"Albania": [
		"Albania", "albania", "AL", "ALB", "8", "ISO 3166-2:AL",
	],

	"Algeria": [
		"Algeria", "algeria", "DZ", "DZA", "12", "ISO 3166-2:DZ",
        "algerie", 
	],

	"American Samoa": [
		"American Samoa", "american samoa", "AS", "ASM", "16", "ISO 3166-2:AS",
	],

	"Andorra": [
		"Andorra", "andorra", "AD", "AND", "20", "ISO 3166-2:AD",
	],

	"Angola": [
		"Angola", "angola", "AO", "AGO", "24", "ISO 3166-2:AO",
	],

	"Anguilla": [
		"Anguilla", "anguilla", "AI", "AIA", "660", "ISO 3166-2:AI",
	],

	"Antarctica": [
		"Antarctica", "antarctica", "AQ", "ATA", "10", "ISO 3166-2:AQ",
	],

	"Antigua and Barbuda": [
		"Antigua and Barbuda", "antigua and barbuda", "AG", "ATG", "28", "ISO 3166-2:AG",
	],

	"Argentina": [
		"Argentina", "argentina", "AR", "ARG", "32", "ISO 3166-2:AR",
	],

	"Armenia": [
		"Armenia", "armenia", "AM", "ARM", "51", "ISO 3166-2:AM",
	],

	"Aruba": [
		"Aruba", "aruba", "AW", "ABW", "533", "ISO 3166-2:AW",
	],

	"Australia": [
		"Australia", "australia", "AU", "AUS", "36", "ISO 3166-2:AU",
	],

	"Austria": [
		"Austria", "austria", "AT", "AUT", "40", "ISO 3166-2:AT",
        "osterreich", 
	],

	"Azerbaijan": [
		"Azerbaijan", "azerbaijan", "AZ", "AZE", "31", "ISO 3166-2:AZ",
	],

	"Bahamas": [
		"Bahamas", "bahamas", "BS", "BHS", "44", "ISO 3166-2:BS",
	],

	"Bahrain": [
		"Bahrain", "bahrain", "BH", "BHR", "48", "ISO 3166-2:BH",
	],

	"Bangladesh": [
		"Bangladesh", "bangladesh", "BD", "BGD", "50", "ISO 3166-2:BD",
	],

	"Barbados": [
		"Barbados", "barbados", "BB", "BRB", "52", "ISO 3166-2:BB",
	],

	"Belarus": [
		"Belarus", "belarus", "BY", "BLR", "112", "ISO 3166-2:BY",
	],

	"Belgium": [
		"Belgium", "belgium", "BE", "BEL", "56", "ISO 3166-2:BE",
        "belgique", "belgien", 
	],

	"Belize": [
		"Belize", "belize", "BZ", "BLZ", "84", "ISO 3166-2:BZ",
	],

	"Benin": [
		"Benin", "benin", "BJ", "BEN", "204", "ISO 3166-2:BJ",
	],

	"Bermuda": [
		"Bermuda", "bermuda", "BM", "BMU", "60", "ISO 3166-2:BM",
	],

	"Bhutan": [
		"Bhutan", "bhutan", "BT", "BTN", "64", "ISO 3166-2:BT",
	],

	"Bolivia, Plurinational State of": [
		"Bolivia, Plurinational State of", "bolivia, plurinational state of", "BO", "BOL", "68", "ISO 3166-2:BO",
        "bolivia",
	],

	"Bonaire, Sint Eustatius and Saba": [
		"Bonaire, Sint Eustatius and Saba", "bonaire, sint eustatius and saba", "BQ", "BES", "535", "ISO 3166-2:BQ",
	],

	"Bosnia and Herzegovina": [
		"Bosnia and Herzegovina", "bosnia and herzegovina", "BA", "BIH", "70", "ISO 3166-2:BA",
	],

	"Botswana": [
		"Botswana", "botswana", "BW", "BWA", "72", "ISO 3166-2:BW",
	],

	"Bouvet Island": [
		"Bouvet Island", "bouvet island", "BV", "BVT", "74", "ISO 3166-2:BV",
	],

	"Brazil": [
		"Brazil", "brazil", "BR", "BRA", "76", "ISO 3166-2:BR",
        "brasil", 
	],

	"British Indian Ocean Territory": [
		"British Indian Ocean Territory", "british indian ocean territory", "IO", "IOT", "86", "ISO 3166-2:IO",
	],

	"Brunei Darussalam": [
		"Brunei Darussalam", "brunei darussalam", "BN", "BRN", "96", "ISO 3166-2:BN",
	],

	"Bulgaria": [
		"Bulgaria", "bulgaria", "BG", "BGR", "100", "ISO 3166-2:BG",
	],

	"Burkina Faso": [
		"Burkina Faso", "burkina faso", "BF", "BFA", "854", "ISO 3166-2:BF",
	],

	"Burundi": [
		"Burundi", "burundi", "BI", "BDI", "108", "ISO 3166-2:BI",
	],

	"Cabo Verde": [
		"Cabo Verde", "cabo verde", "CV", "CPV", "132", "ISO 3166-2:CV",
        "vendee", 
	],

	"Cambodia": [
		"Cambodia", "cambodia", "KH", "KHM", "116", "ISO 3166-2:KH",
	],

	"Cameroon": [
		"Cameroon", "cameroon", "CM", "CMR", "120", "ISO 3166-2:CM",
	],

	"Canada": [
		"Canada", "canada", "CA", "CAN", "124", "ISO 3166-2:CA",
	],

	"Cayman Islands": [
		"Cayman Islands", "cayman islands", "KY", "CYM", "136", "ISO 3166-2:KY",
	],

	"Central African Republic": [
		"Central African Republic", "central african republic", "CF", "CAF", "140", "ISO 3166-2:CF",
	],

	"Chad": [
		"Chad", "chad", "TD", "TCD", "148", "ISO 3166-2:TD",
	],

	"Chile": [
		"Chile", "chile", "CL", "CHL", "152", "ISO 3166-2:CL",
        
	],

	"China": [
		"China", "china", "CN", "CHN", "156", "ISO 3166-2:CN",
        "chine",
	],

	"Christmas Island": [
		"Christmas Island", "christmas island", "CX", "CXR", "162", "ISO 3166-2:CX",
	],

	"Cocos (Keeling) Islands": [
		"Cocos (Keeling) Islands", "cocos (keeling) islands", "CC", "CCK", "166", "ISO 3166-2:CC",
	],

	"Colombia": [
		"Colombia", "colombia", "CO", "COL", "170", "ISO 3166-2:CO",
	],

	"Comoros": [
		"Comoros", "comoros", "KM", "COM", "174", "ISO 3166-2:KM",
	],

	"Congo": [
		"Congo", "congo", "CG", "COG", "178", "ISO 3166-2:CG",
	],

	"Congo, Democratic Republic of the": [
		"Congo, Democratic Republic of the", "congo, democratic republic of the", "CD", "COD", "180", "ISO 3166-2:CD",
	],

	"Cook Islands": [
		"Cook Islands", "cook islands", "CK", "COK", "184", "ISO 3166-2:CK",
	],

	"Costa Rica": [
		"Costa Rica", "costa rica", "CR", "CRI", "188", "ISO 3166-2:CR",
        "costa-rica"
	],

	"Côte d'Ivoire": [
		"Côte d'Ivoire", "cote d'ivoire", "CI", "CIV", "384", "ISO 3166-2:CI",
        "cote-d-ivoire", 
	],

	"Croatia": [
		"Croatia", "croatia", "HR", "HRV", "191", "ISO 3166-2:HR",
	],

	"Cuba": [
		"Cuba", "cuba", "CU", "CUB", "192", "ISO 3166-2:CU",
	],

	"Curaçao": [
		"Curaçao", "curacao", "CW", "CUW", "531", "ISO 3166-2:CW",
	],

	"Cyprus": [
		"Cyprus", "cyprus", "CY", "CYP", "196", "ISO 3166-2:CY",
	],

	"Czechia": [
		"Czechia", "czechia", "CZ", "CZE", "203", "ISO 3166-2:CZ",
        "czech-republic", "česka-republika"
	],

	"Denmark": [
		"Denmark", "denmark", "DK", "DNK", "208", "ISO 3166-2:DK",
        "danemark", 
	],

	"Djibouti": [
		"Djibouti", "djibouti", "DJ", "DJI", "262", "ISO 3166-2:DJ",
	],

	"Dominica": [
		"Dominica", "dominica", "DM", "DMA", "212", "ISO 3166-2:DM",
	],

	"Dominican Republic": [
		"Dominican Republic", "dominican republic", "DO", "DOM", "214", "ISO 3166-2:DO",
	],

	"Ecuador": [
		"Ecuador", "ecuador", "EC", "ECU", "218", "ISO 3166-2:EC",
	],

	"Egypt": [
		"Egypt", "egypt", "EG", "EGY", "818", "ISO 3166-2:EG",
	],

	"El Salvador": [
		"El Salvador", "el salvador", "SV", "SLV", "222", "ISO 3166-2:SV",
	],

	"Equatorial Guinea": [
		"Equatorial Guinea", "equatorial guinea", "GQ", "GNQ", "226", "ISO 3166-2:GQ",
	],

	"Eritrea": [
		"Eritrea", "eritrea", "ER", "ERI", "232", "ISO 3166-2:ER",
	],

	"Estonia": [
		"Estonia", "estonia", "EE", "EST", "233", "ISO 3166-2:EE",
	],

	"Eswatini": [
		"Eswatini", "eswatini", "SZ", "SWZ", "748", "ISO 3166-2:SZ",
	],

	"Ethiopia": [
		"Ethiopia", "ethiopia", "ET", "ETH", "231", "ISO 3166-2:ET",
	],

	"Falkland Islands (Malvinas)": [
		"Falkland Islands (Malvinas)", "falkland islands (malvinas)", "FK", "FLK", "238", "ISO 3166-2:FK",
	],

	"Faroe Islands": [
		"Faroe Islands", "faroe islands", "FO", "FRO", "234", "ISO 3166-2:FO",
	],

	"Fiji": [
		"Fiji", "fiji", "FJ", "FJI", "242", "ISO 3166-2:FJ",
	],

	"Finland": [
		"Finland", "finland", "FI", "FIN", "246", "ISO 3166-2:FI",
        "suomi", 
	],

	"France": [
		"France", "france", "FR", "FRA", "250", "ISO 3166-2:FR",
        "bretagne", "normandie", "isere", "vandee", "francia", "saint-philibert", "provence", "frankreich", "alsace", 
	],

	"French Guiana": [
		"French Guiana", "french guiana", "GF", "GUF", "254", "ISO 3166-2:GF",
	],

	"French Polynesia": [
		"French Polynesia", "french polynesia", "PF", "PYF", "258", "ISO 3166-2:PF",
	],

	"French Southern Territories": [
		"French Southern Territories", "french southern territories", "TF", "ATF", "260", "ISO 3166-2:TF",
	],

	"Gabon": [
		"Gabon", "gabon", "GA", "GAB", "266", "ISO 3166-2:GA",
	],

	"Gambia": [
		"Gambia", "gambia", "GM", "GMB", "270", "ISO 3166-2:GM",
	],

	"Georgia": [
		"Georgia", "georgia", "GE", "GEO", "268", "ISO 3166-2:GE",
	],

	"Germany": [
		"Germany", "germany", "DE", "DEU", "276", "ISO 3166-2:DE",
        "deutschland", "allemagne", "alemania", "germania", "tyskland", "schleswig-holstein", 
	],

	"Ghana": [
		"Ghana", "ghana", "GH", "GHA", "288", "ISO 3166-2:GH",
	],

	"Gibraltar": [
		"Gibraltar", "gibraltar", "GI", "GIB", "292", "ISO 3166-2:GI",
	],

	"Greece": [
		"Greece", "greece", "GR", "GRC", "300", "ISO 3166-2:GR",
        "grece", 
	],

	"Greenland": [
		"Greenland", "greenland", "GL", "GRL", "304", "ISO 3166-2:GL",
        "griechenland", 
	],

	"Grenada": [
		"Grenada", "grenada", "GD", "GRD", "308", "ISO 3166-2:GD",
	],

	"Guadeloupe": [
		"Guadeloupe", "guadeloupe", "GP", "GLP", "312", "ISO 3166-2:GP",
	],

	"Guam": [
		"Guam", "guam", "GU", "GUM", "316", "ISO 3166-2:GU",
	],

	"Guatemala": [
		"Guatemala", "guatemala", "GT", "GTM", "320", "ISO 3166-2:GT",
	],

	"Guernsey": [
		"Guernsey", "guernsey", "GG", "GGY", "831", "ISO 3166-2:GG",
	],

	"Guinea": [
		"Guinea", "guinea", "GN", "GIN", "324", "ISO 3166-2:GN",
	],

	"Guinea-Bissau": [
		"Guinea-Bissau", "guinea-bissau", "GW", "GNB", "624", "ISO 3166-2:GW",
	],

	"Guyana": [
		"Guyana", "guyana", "GY", "GUY", "328", "ISO 3166-2:GY",
        "guyane", 
	],

	"Haiti": [
		"Haiti", "haiti", "HT", "HTI", "332", "ISO 3166-2:HT",
	],

	"Heard Island and McDonald Islands": [
		"Heard Island and McDonald Islands", "heard island and mcdonald islands", "HM", "HMD", "334", "ISO 3166-2:HM",
	],

	"Holy See": [
		"Holy See", "holy see", "VA", "VAT", "336", "ISO 3166-2:VA",
	],

	"Honduras": [
		"Honduras", "honduras", "HN", "HND", "340", "ISO 3166-2:HN",
	],

	"Hong Kong": [
		"Hong Kong", "hong kong", "HK", "HKG", "344", "ISO 3166-2:HK",
	],

	"Hungary": [
		"Hungary", "hungary", "HU", "HUN", "348", "ISO 3166-2:HU",
        "magyarorszag", 
	],

	"Iceland": [
		"Iceland", "iceland", "IS", "ISL", "352", "ISO 3166-2:IS",
	],

	"India": [
		"India", "india", "IN", "IND", "356", "ISO 3166-2:IN",
	],

	"Indonesia": [
		"Indonesia", "indonesia", "ID", "IDN", "360", "ISO 3166-2:ID",
	],

	"Iran, Islamic Republic of": [
		"Iran, Islamic Republic of", "iran, islamic republic of", "IR", "IRN", "364", "ISO 3166-2:IR",
	],

	"Iraq": [
		"Iraq", "iraq", "IQ", "IRQ", "368", "ISO 3166-2:IQ",
	],

	"Ireland": [
		"Ireland", "ireland", "IE", "IRL", "372", "ISO 3166-2:IE",
	],

	"Isle of Man": [
		"Isle of Man", "isle of man", "IM", "IMN", "833", "ISO 3166-2:IM",
	],

	"Israel": [
		"Israel", "israel", "IL", "ISR", "376", "ISO 3166-2:IL",
	],

	"Italy": [
		"Italy", "italy", "IT", "ITA", "380", "ISO 3166-2:IT",
        "italie", "italia", "italien",
	],

	"Jamaica": [
		"Jamaica", "jamaica", "JM", "JAM", "388", "ISO 3166-2:JM",
	],

	"Japan": [
		"Japan", "japan", "JP", "JPN", "392", "ISO 3166-2:JP",
        "japon", 
	],

	"Jersey": [
		"Jersey", "jersey", "JE", "JEY", "832", "ISO 3166-2:JE",
	],

	"Jordan": [
		"Jordan", "jordan", "JO", "JOR", "400", "ISO 3166-2:JO",
	],

	"Kazakhstan": [
		"Kazakhstan", "kazakhstan", "KZ", "KAZ", "398", "ISO 3166-2:KZ",
	],

	"Kenya": [
		"Kenya", "kenya", "KE", "KEN", "404", "ISO 3166-2:KE",
	],

	"Kiribati": [
		"Kiribati", "kiribati", "KI", "KIR", "296", "ISO 3166-2:KI",
	],

	"Korea, Democratic People's Republic of": [
		"Korea, Democratic People's Republic of", "korea, democratic people's republic of", "KP", "PRK", "408", "ISO 3166-2:KP",
	],

	"Korea, Republic of": [
		"Korea, Republic of", "korea, republic of", "KR", "KOR", "410", "ISO 3166-2:KR",
	],

	"Kuwait": [
		"Kuwait", "kuwait", "KW", "KWT", "414", "ISO 3166-2:KW",
	],

	"Kyrgyzstan": [
		"Kyrgyzstan", "kyrgyzstan", "KG", "KGZ", "417", "ISO 3166-2:KG",
	],

	"Lao People's Democratic Republic": [
		"Lao People's Democratic Republic", "lao people's democratic republic", "LA", "LAO", "418", "ISO 3166-2:LA",
	],

	"Latvia": [
		"Latvia", "latvia", "LV", "LVA", "428", "ISO 3166-2:LV",
	],

	"Lebanon": [
		"Lebanon", "lebanon", "LB", "LBN", "422", "ISO 3166-2:LB",
	],

	"Lesotho": [
		"Lesotho", "lesotho", "LS", "LSO", "426", "ISO 3166-2:LS",
	],

	"Liberia": [
		"Liberia", "liberia", "LR", "LBR", "430", "ISO 3166-2:LR",
	],

	"Libya": [
		"Libya", "libya", "LY", "LBY", "434", "ISO 3166-2:LY",
	],

	"Liechtenstein": [
		"Liechtenstein", "liechtenstein", "LI", "LIE", "438", "ISO 3166-2:LI",
	],

	"Lithuania": [
		"Lithuania", "lithuania", "LT", "LTU", "440", "ISO 3166-2:LT",
	],

	"Luxembourg": [
		"Luxembourg", "luxembourg", "LU", "LUX", "442", "ISO 3166-2:LU",
	],

	"Macao": [
		"Macao", "macao", "MO", "MAC", "446", "ISO 3166-2:MO",
	],

	"Madagascar": [
		"Madagascar", "madagascar", "MG", "MDG", "450", "ISO 3166-2:MG",
	],

	"Malawi": [
		"Malawi", "malawi", "MW", "MWI", "454", "ISO 3166-2:MW",
	],

	"Malaysia": [
		"Malaysia", "malaysia", "MY", "MYS", "458", "ISO 3166-2:MY",
        "malaisie", 
	],

	"Maldives": [
		"Maldives", "maldives", "MV", "MDV", "462", "ISO 3166-2:MV",
	],

	"Mali": [
		"Mali", "mali", "ML", "MLI", "466", "ISO 3166-2:ML",
	],

	"Malta": [
		"Malta", "malta", "MT", "MLT", "470", "ISO 3166-2:MT",
	],

	"Marshall Islands": [
		"Marshall Islands", "marshall islands", "MH", "MHL", "584", "ISO 3166-2:MH",
	],

	"Martinique": [
		"Martinique", "martinique", "MQ", "MTQ", "474", "ISO 3166-2:MQ",
	],

	"Mauritania": [
		"Mauritania", "mauritania", "MR", "MRT", "478", "ISO 3166-2:MR",
	],

	"Mauritius": [
		"Mauritius", "mauritius", "MU", "MUS", "480", "ISO 3166-2:MU",
	],

	"Mayotte": [
		"Mayotte", "mayotte", "YT", "MYT", "175", "ISO 3166-2:YT",
	],

	"Mexico": [
		"Mexico", "mexico", "MX", "MEX", "484", "ISO 3166-2:MX",
        "ciudad-de-mexico", "estado-de-mexico", "guanajuato", "jalisco", "cdmx", "durango", 
	],

	"Micronesia, Federated States of": [
		"Micronesia, Federated States of", "micronesia, federated states of", "FM", "FSM", "583", "ISO 3166-2:FM",
	],

	"Moldova, Republic of": [
		"Moldova, Republic of", "moldova, republic of", "MD", "MDA", "498", "ISO 3166-2:MD",
	],

	"Monaco": [
		"Monaco", "monaco", "MC", "MCO", "492", "ISO 3166-2:MC",
	],

	"Mongolia": [
		"Mongolia", "mongolia", "MN", "MNG", "496", "ISO 3166-2:MN",
	],

	"Montenegro": [
		"Montenegro", "montenegro", "ME", "MNE", "499", "ISO 3166-2:ME",
	],

	"Montserrat": [
		"Montserrat", "montserrat", "MS", "MSR", "500", "ISO 3166-2:MS",
	],

	"Morocco": [
		"Morocco", "morocco", "MA", "MAR", "504", "ISO 3166-2:MA",
        "maroc", 
	],

	"Mozambique": [
		"Mozambique", "mozambique", "MZ", "MOZ", "508", "ISO 3166-2:MZ",
	],

	"Myanmar": [
		"Myanmar", "myanmar", "MM", "MMR", "104", "ISO 3166-2:MM",
	],

	"Namibia": [
		"Namibia", "namibia", "nan", "NAM", "516", "ISO 3166-2:NA",
	],

	"Nauru": [
		"Nauru", "nauru", "NR", "NRU", "520", "ISO 3166-2:NR",
	],

	"Nepal": [
		"Nepal", "nepal", "NP", "NPL", "524", "ISO 3166-2:NP",
	],

	"Netherlands, Kingdom of the": [
		"Netherlands, Kingdom of the", "netherlands, kingdom of the", "NL", "NLD", "528", "ISO 3166-2:NL",
        "pays-bas", "netherlands", "niederlande", "nederland"
	],

	"New Caledonia": [
		"New Caledonia", "new caledonia", "NC", "NCL", "540", "ISO 3166-2:NC",
	],

	"New Zealand": [
		"New Zealand", "new zealand", "NZ", "NZL", "554", "ISO 3166-2:NZ",
        "new-zealand"
	],

	"Nicaragua": [
		"Nicaragua", "nicaragua", "NI", "NIC", "558", "ISO 3166-2:NI",
	],

	"Niger": [
		"Niger", "niger", "NE", "NER", "562", "ISO 3166-2:NE",
	],

	"Nigeria": [
		"Nigeria", "nigeria", "NG", "NGA", "566", "ISO 3166-2:NG",
	],

	"Niue": [
		"Niue", "niue", "NU", "NIU", "570", "ISO 3166-2:NU",
	],

	"Norfolk Island": [
		"Norfolk Island", "norfolk island", "NF", "NFK", "574", "ISO 3166-2:NF",
	],

	"North Macedonia": [
		"North Macedonia", "north macedonia", "MK", "MKD", "807", "ISO 3166-2:MK",
	],

	"Northern Mariana Islands": [
		"Northern Mariana Islands", "northern mariana islands", "MP", "MNP", "580", "ISO 3166-2:MP",
	],

	"Norway": [
		"Norway", "norway", "NO", "NOR", "578", "ISO 3166-2:NO",
	],

	"Oman": [
		"Oman", "oman", "OM", "OMN", "512", "ISO 3166-2:OM",
	],

	"Pakistan": [
		"Pakistan", "pakistan", "PK", "PAK", "586", "ISO 3166-2:PK",
	],

	"Palau": [
		"Palau", "palau", "PW", "PLW", "585", "ISO 3166-2:PW",
	],

	"Palestine, State of": [
		"Palestine, State of", "palestine, state of", "PS", "PSE", "275", "ISO 3166-2:PS",
	],

	"Panama": [
		"Panama", "panama", "PA", "PAN", "591", "ISO 3166-2:PA",
	],

	"Papua New Guinea": [
		"Papua New Guinea", "papua new guinea", "PG", "PNG", "598", "ISO 3166-2:PG",
	],

	"Paraguay": [
		"Paraguay", "paraguay", "PY", "PRY", "600", "ISO 3166-2:PY",
	],

	"Peru": [
		"Peru", "peru", "PE", "PER", "604", "ISO 3166-2:PE",
        "lima", 
	],

	"Philippines": [
		"Philippines", "philippines", "PH", "PHL", "608", "ISO 3166-2:PH",
	],

	"Pitcairn": [
		"Pitcairn", "pitcairn", "PN", "PCN", "612", "ISO 3166-2:PN",
	],

	"Poland": [
		"Poland", "poland", "PL", "POL", "616", "ISO 3166-2:PL",
        "polska", "pologne", "polen"
	],

	"Portugal": [
		"Portugal", "portugal", "PT", "PRT", "620", "ISO 3166-2:PT",
	],

	"Puerto Rico": [
		"Puerto Rico", "puerto rico", "PR", "PRI", "630", "ISO 3166-2:PR",
	],

	"Qatar": [
		"Qatar", "qatar", "QA", "QAT", "634", "ISO 3166-2:QA",
	],

	"Réunion": [
		"Réunion", "reunion", "RE", "REU", "638", "ISO 3166-2:RE",
	],

	"Romania": [
		"Romania", "romania", "RO", "ROU", "642", "ISO 3166-2:RO",
	],

	"Russian Federation": [
		"Russian Federation", "russian federation", "RU", "RUS", "643", "ISO 3166-2:RU",
	],

	"Rwanda": [
		"Rwanda", "rwanda", "RW", "RWA", "646", "ISO 3166-2:RW",
	],

	"Saint Barthélemy": [
		"Saint Barthélemy", "saint barthelemy", "BL", "BLM", "652", "ISO 3166-2:BL",
	],

	"Saint Helena, Ascension and Tristan da Cunha": [
		"Saint Helena, Ascension and Tristan da Cunha", "saint helena, ascension and tristan da cunha", "SH", "SHN", "654", "ISO 3166-2:SH",
	],

	"Saint Kitts and Nevis": [
		"Saint Kitts and Nevis", "saint kitts and nevis", "KN", "KNA", "659", "ISO 3166-2:KN",
	],

	"Saint Lucia": [
		"Saint Lucia", "saint lucia", "LC", "LCA", "662", "ISO 3166-2:LC",
	],

	"Saint Martin (French part)": [
		"Saint Martin (French part)", "saint martin (french part)", "MF", "MAF", "663", "ISO 3166-2:MF",
	],

	"Saint Pierre and Miquelon": [
		"Saint Pierre and Miquelon", "saint pierre and miquelon", "PM", "SPM", "666", "ISO 3166-2:PM",
	],

	"Saint Vincent and the Grenadines": [
		"Saint Vincent and the Grenadines", "saint vincent and the grenadines", "VC", "VCT", "670", "ISO 3166-2:VC",
	],

	"Samoa": [
		"Samoa", "samoa", "WS", "WSM", "882", "ISO 3166-2:WS",
	],

	"San Marino": [
		"San Marino", "san marino", "SM", "SMR", "674", "ISO 3166-2:SM",
	],

	"Sao Tome and Principe": [
		"Sao Tome and Principe", "sao tome and principe", "ST", "STP", "678", "ISO 3166-2:ST",
	],

	"Saudi Arabia": [
		"Saudi Arabia", "saudi arabia", "SA", "SAU", "682", "ISO 3166-2:SA",
	],

	"Senegal": [
		"Senegal", "senegal", "SN", "SEN", "686", "ISO 3166-2:SN",
	],

	"Serbia": [
		"Serbia", "serbia", "RS", "SRB", "688", "ISO 3166-2:RS",
	],

	"Seychelles": [
		"Seychelles", "seychelles", "SC", "SYC", "690", "ISO 3166-2:SC",
	],

	"Sierra Leone": [
		"Sierra Leone", "sierra leone", "SL", "SLE", "694", "ISO 3166-2:SL",
	],

	"Singapore": [
		"Singapore", "singapore", "SG", "SGP", "702", "ISO 3166-2:SG",
	],

	"Sint Maarten (Dutch part)": [
		"Sint Maarten (Dutch part)", "sint maarten (dutch part)", "SX", "SXM", "534", "ISO 3166-2:SX",
	],

	"Slovakia": [
		"Slovakia", "slovakia", "SK", "SVK", "703", "ISO 3166-2:SK",
	],

	"Slovenia": [
		"Slovenia", "slovenia", "SI", "SVN", "705", "ISO 3166-2:SI",
	],

	"Solomon Islands": [
		"Solomon Islands", "solomon islands", "SB", "SLB", "90", "ISO 3166-2:SB",
	],

	"Somalia": [
		"Somalia", "somalia", "SO", "SOM", "706", "ISO 3166-2:SO",
	],

	"South Africa": [
		"South Africa", "south africa", "ZA", "ZAF", "710", "ISO 3166-2:ZA",
        "south-africa", 
	],

	"South Georgia and the South Sandwich Islands": [
		"South Georgia and the South Sandwich Islands", "south georgia and the south sandwich islands", "GS", "SGS", "239", "ISO 3166-2:GS",
	],

	"South Sudan": [
		"South Sudan", "south sudan", "SS", "SSD", "728", "ISO 3166-2:SS",
	],

	"Spain": [
		"Spain", "spain", "ES", "ESP", "724", "ISO 3166-2:ES",
        "espagne", "espana", "spanien"
	],

	"Sri Lanka": [
		"Sri Lanka", "sri lanka", "LK", "LKA", "144", "ISO 3166-2:LK",
        "sri-lanka", 
	],

	"Sudan": [
		"Sudan", "sudan", "SD", "SDN", "729", "ISO 3166-2:SD",
	],

	"Suriname": [
		"Suriname", "suriname", "SR", "SUR", "740", "ISO 3166-2:SR",
	],

	"Svalbard and Jan Mayen": [
		"Svalbard and Jan Mayen", "svalbard and jan mayen", "SJ", "SJM", "744", "ISO 3166-2:SJ",
	],

	"Sweden": [
		"Sweden", "sweden", "SE", "SWE", "752", "ISO 3166-2:SE",
        "sverige", 
	],

	"Switzerland": [
		"Switzerland", "switzerland", "CH", "CHE", "756", "ISO 3166-2:CH",
        "suisse", "schweiz"
	],

	"Syrian Arab Republic": [
		"Syrian Arab Republic", "syrian arab republic", "SY", "SYR", "760", "ISO 3166-2:SY",
	],

	"Taiwan, Province of China": [
		"Taiwan, Province of China", "taiwan, province of china", "TW", "TWN", "158", "ISO 3166-2:TW",
        "taiwan", 
	],

	"Tajikistan": [
		"Tajikistan", "tajikistan", "TJ", "TJK", "762", "ISO 3166-2:TJ",
	],

	"Tanzania, United Republic of": [
		"Tanzania, United Republic of", "tanzania, united republic of", "TZ", "TZA", "834", "ISO 3166-2:TZ",
	],

	"Thailand": [
		"Thailand", "thailand", "TH", "THA", "764", "ISO 3166-2:TH",
        "thailande",
	],

	"Timor-Leste": [
		"Timor-Leste", "timor-leste", "TL", "TLS", "626", "ISO 3166-2:TL",
	],

	"Togo": [
		"Togo", "togo", "TG", "TGO", "768", "ISO 3166-2:TG",
	],

	"Tokelau": [
		"Tokelau", "tokelau", "TK", "TKL", "772", "ISO 3166-2:TK",
	],

	"Tonga": [
		"Tonga", "tonga", "TO", "TON", "776", "ISO 3166-2:TO",
	],

	"Trinidad and Tobago": [
		"Trinidad and Tobago", "trinidad and tobago", "TT", "TTO", "780", "ISO 3166-2:TT",
	],

	"Tunisia": [
		"Tunisia", "tunisia", "TN", "TUN", "788", "ISO 3166-2:TN",
        "tunisie",
	],

	"Türkiye": [
		"Türkiye", "turkiye", "TR", "TUR", "792", "ISO 3166-2:TR",
        "turquie", "turkey", 
	],

	"Turkmenistan": [
		"Turkmenistan", "turkmenistan", "TM", "TKM", "795", "ISO 3166-2:TM",
	],

	"Turks and Caicos Islands": [
		"Turks and Caicos Islands", "turks and caicos islands", "TC", "TCA", "796", "ISO 3166-2:TC",
	],

	"Tuvalu": [
		"Tuvalu", "tuvalu", "TV", "TUV", "798", "ISO 3166-2:TV",
	],

	"Uganda": [
		"Uganda", "uganda", "UG", "UGA", "800", "ISO 3166-2:UG",
	],

	"Ukraine": [
		"Ukraine", "ukraine", "UA", "UKR", "804", "ISO 3166-2:UA",
	],

	"United Arab Emirates": [
		"United Arab Emirates", "united arab emirates", "AE", "ARE", "784", "ISO 3166-2:AE",
        "united-arab-emirates", 
	],

	"United Kingdom of Great Britain and Northern Ireland": [
		"United Kingdom of Great Britain and Northern Ireland", "united kingdom of great britain and northern ireland", "GB", "GBR", "826", "ISO 3166-2:GB",
        "united-kingdom", "royaume-uni", "uk", "UK"
	],

	"United States of America": [
		"United States of America", "united states of america", "US", "USA", "840", "ISO 3166-2:US",
        "united-states", "usa", "estados-unidos", "etats-unis", 
	],

	"United States Minor Outlying Islands": [
		"United States Minor Outlying Islands", "united states minor outlying islands", "UM", "UMI", "581", "ISO 3166-2:UM",
	],

	"Uruguay": [
		"Uruguay", "uruguay", "UY", "URY", "858", "ISO 3166-2:UY",
	],

	"Uzbekistan": [
		"Uzbekistan", "uzbekistan", "UZ", "UZB", "860", "ISO 3166-2:UZ",
	],

	"Vanuatu": [
		"Vanuatu", "vanuatu", "VU", "VUT", "548", "ISO 3166-2:VU",
	],

	"Venezuela, Bolivarian Republic of": [
		"Venezuela, Bolivarian Republic of", "venezuela, bolivarian republic of", "VE", "VEN", "862", "ISO 3166-2:VE",
	],

	"Viet Nam": [
		"Viet Nam", "viet nam", "VN", "VNM", "704", "ISO 3166-2:VN",
        "vietnam", 
	],

	"Virgin Islands (British)": [
		"Virgin Islands (British)", "virgin islands (british)", "VG", "VGB", "92", "ISO 3166-2:VG",
	],

	"Virgin Islands (U.S.)": [
		"Virgin Islands (U.S.)", "virgin islands (u.s.)", "VI", "VIR", "850", "ISO 3166-2:VI",
	],

	"Wallis and Futuna": [
		"Wallis and Futuna", "wallis and futuna", "WF", "WLF", "876", "ISO 3166-2:WF",
	],

	"Western Sahara": [
		"Western Sahara", "western sahara", "EH", "ESH", "732", "ISO 3166-2:EH",
	],

	"Yemen": [
		"Yemen", "yemen", "YE", "YEM", "887", "ISO 3166-2:YE",
	],

	"Zambia": [
		"Zambia", "zambia", "ZM", "ZMB", "894", "ISO 3166-2:ZM",
	],

	"Zimbabwe": [
		"Zimbabwe", "zimbabwe", "ZW", "ZWE", "716", "ISO 3166-2:ZW",
	],

})

subregion_country = Groups({
    
})

region_country = Groups({
    
})


