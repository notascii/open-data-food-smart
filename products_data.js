const products = [
  {
    categories:
      "Beverages and beverages preparations,Beverages,Waters,Spring waters",
    countries:
      "Belgique, Côte d'Ivoire, divoire, France, Allemagne, Guadeloupe, Italie, Luxembourg, Mali, Martinique, Nouvelle-Calédonie, Nouvelle-Calédonie, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "Saint-Martin, Colombie, gurson, France, 24610",
    origins: "France, fr:saint-martin, Colombie, gurson",
    product_name: "",
  },
  {
    categories: "Snacks, Chocolate",
    countries:
      "Algérie, Belgique, France, Guyane, Polynésie française, Allemagne, Guadeloupe, Hongrie, Luxembourg, Martinique, Maroc, Nouvelle-Calédonie, Nouvelle-Calédonie, Réunion, Espagne, Suisse, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places: "Algérie",
    origins: "Algérie",
    product_name: "Prince Chocolat biscuits au blé complet",
  },
  {
    categories:
      "Matières grasses,Petit-déjeuners,Produits à tartiner,Produits à tartiner sucrés,Pâtes à tartiner,Pâtes à tartiner au chocolat,Pâtes à tartiner aux noisettes,Pâtes à tartiner aux noisettes et au cacao",
    countries:
      "Algérie, Belgique, France, Allemagne, Guadeloupe, Italie, Luxembourg, Martinique, Maroc, Réunion, Espagne, Suisse, Tunisie, Émirats arabes unis, Norvège, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Nutella",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits sucrés & biscuits apéritifs,Biscuits,en:Biscuits et gâteaux,en:Biscuits secs,en:Snacks sucrés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, Réunion, européenne, Liban, Réunion, européenne",
    product_name: "Sésame",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Sodas,Boissons gazeuses sans jus de fruit,Sodas au cola,Boissons gazeuses sucrées sans jus de fruit,Boissons avec sucre ajouté",
    countries:
      "Belgique, France, allemagne, hongrie, italie, serbie, espagne, Suisse",
    manufacturing_places: "France, issy-les-moulineaux",
    origins: "France",
    product_name: "Coca-Cola",
  },
  {
    categories:
      "Meats and their products,Meats,Chicken and its products,Poultries,Chickens,Cooked poultries,Cooked chicken,Roast chicken",
    countries:
      "Belgique, France, Allemagne, Italie, Luxembourg, Maroc, Pays-Bas, Philippines, Pologne, Roumanie, Espagne, Suisse, Émirats arabes unis, Norvège, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Nutella",
  },
  {
    categories:
      "Getränke und Getränkezubereitungen,Getränke,Kohlensäurehaltige Getränke,Erfrischungsgetränke,Cola",
    countries: "frankreich, Allemagne, litauen, vereinigtes, Belgique",
    manufacturing_places:
      "atlanta, Géorgie du Sud-et-les Îles Sandwich du Sud, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    origins:
      "géorgie, Îles Pitcairn, sud-et-les, Wallis-et-Futuna, Géorgie du Sud-et-les Îles Sandwich du Sud, Îles Pitcairn, Soudan",
    product_name: "Coca-Cola",
  },
  {
    categories: "Yeast extract spreads",
    countries: "France, irlande, royaume-uni",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Yeast Extract",
  },
  {
    categories: "Boissons, Eaux, Eaux de sources, Boissons sans sucre ajouté",
    countries:
      "belgique, côte, divoire, france, luxembourg, , martinique, russie, suisse, royaume-uni",
    manufacturing_places: "France, italie",
    origins:
      "France, italie, en:cairanne, en:chambon-la-forêt, en:provence-alpes-côte, dazur, en:source, emma, en:source, ofélia, en:source, sainte, cécile, en:source, éléna, en:source, éléonore, en:vaucluse",
    product_name: "Eau de source",
  },
  {
    categories:
      "Boissons,Boissons gazeuses,Boissons édulcorées,Sodas,Boissons light,Boissons sans alcool,Sodas au cola,Sodas light,Sodas au cola light",
    countries:
      "Belgique, France, allemagne, hongrie, italie, espagne, Suisse, états-unis",
    manufacturing_places: "Serbie, France",
    origins: "Suisse",
    product_name: "Coke zero",
  },
  {
    categories: "Condiments, Gravy",
    countries:
      "Géorgie du Sud-et-les Îles Sandwich du Sud, rìoghachd, aonaichte",
    manufacturing_places:
      "géorgie, Îles Pitcairn, sud-et-les, Wallis-et-Futuna, Géorgie du Sud-et-les Îles Sandwich du Sud, Îles Pitcairn, Soudan",
    origins:
      "géorgie, Îles Pitcairn, sud-et-les, Wallis-et-Futuna, Géorgie du Sud-et-les Îles Sandwich du Sud, Îles Pitcairn, Soudan",
    product_name: "Roast Chicken Gravy",
  },
  {
    categories:
      "Milchprodukte,Fermentierte Lebensmittel,Fermentierte Milch,Käse,Ziegenkäse,Frischkäse,en:Cream cheeses",
    countries: "österreich, Allemagne",
    manufacturing_places: "allemagne",
    origins: "österreich",
    product_name: "Ziegenfrischkäse Natur",
  },
  {
    categories: "Meats,Farming products,Meat preparations",
    countries: "Nigéria",
    manufacturing_places: "Îles Mariannes du Nord, Nigéria",
    origins: "Brésil, Taïwan, Inde, Nigéria",
    product_name: "Kilishi",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs, Chocolat noir à moins de 70% de cacao en tablette",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Chocolat noir 65% de cacao",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fats,Vegetable fats,Olive tree products,Vegetable oils,Olive oils,Olive oils from France,Extra-virgin olive oils,Virgin olive oils",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Huile D’olive Vierge Extra Produit De France",
  },
  {
    categories: "Meals, Pizzas pies and quiches, Pizzas, en:margherita-pizza",
    countries: "Émirats arabes unis, Norvège",
    product_name: "Pizza express margherita",
    origins: "émirats, arabes, Tunisie",
    manufacturing_places: "émirats, arabes, Tunisie",
  },
  {
    categories: "Desserts, Jelly desserts, en:mixes-for-jelly-desserts",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Gelatina sabor Morango",
  },
  {
    categories:
      "Beverages and beverages preparations, Beverages, Carbonated drinks, Sodas, en:sweetened-beverages",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Blood Orange Spritz - Sparkling Pressé",
  },
  {
    categories: "Chicken and chorizo paella, en:rice-dishes",
    countries: "Émirats arabes unis, Norvège",
    origins: "european, Réunion",
    product_name: "High Protein Chicken & Chorizo Paella",
    manufacturing_places: "émirats, arabes, Tunisie",
  },
  {
    categories: "uk:Крем-сир",
    countries: "Ukraine",
    manufacturing_places: "Ukraine",
    origins: "Ukraine",
    product_name: "",
  },
  {
    categories: "en:cheeses",
    countries: "Allemagne",
    product_name: "Bio Bergkäse gerieben",
    origins: "allemagne",
    manufacturing_places: "allemagne",
  },
  {
    countries: "Allemagne",
    product_name: "Schweineschmalz",
    origins: "allemagne",
    manufacturing_places: "allemagne",
  },
  {
    countries: "Sainte-Lucie",
    product_name: "Salade de blé",
    origins: "sainte-lucie",
    manufacturing_places: "sainte-lucie",
  },
  {
    categories:
      "Getränke und Getränkezubereitungen,Getränke,Kohlensäurehaltige Getränke,Erfrischungsgetränke,Alkoholfreie Getränke,Cola,Gezuckerte Getränke",
    countries:
      "österreich, Belgique, bulgarien, kroatien, frankreich, Allemagne, ungarn, marokko, polen, rumänien, serbien, spanien, Suisse, vereinigtes, Belgique",
    manufacturing_places: "Belgique",
    origins: "vereinigtes, Belgique",
    product_name: "",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Nozes e seus produtos,Nozes,Amêndoas",
    countries:
      "bélgica, bulgária, Polynésie française, alemanha, grécia, hungria, polónia, Portugal, roménia, eslovénia, espanha, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Almonds",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Plats préparés, Soupes, Soupes de légumes, Soupes froides, Gaspacho",
    countries: "France",
    manufacturing_places: "espagne",
    origins: "France",
    product_name: "Alvalle Gazpacho l'original",
  },
  {
    categories:
      "Pequenos alomoços,Produtos para barrar,Doces para barrar,fr:Pâtes à tartiner,Creme para barrar de avelã,Creme para barrar de chocolate,Creme para barrar de avelã e cacau",
    countries:
      "argélia, colômbia, Costa Rica, , marfim, dinamarca, Polynésie française, alemanha, guadalupe, irão, iraque, Israël, itália, martinica, maurícia, mongólia, marrocos, nigéria, noruega, polónia, Portugal, reunião, rússia, ruanda, Sénégal, eslováquia, espanha, suécia, Espagne, Mexique",
    manufacturing_places: "Costa Rica, Samoa américaines",
    origins: "Costa Rica, Samoa américaines",
    product_name: "",
  },
  {
    categories:
      "Imbiss,Süßer Snack,Kakao und Kakaoprodukte,Schokoladen,Bitterschokoladen,en:Dark chocolate bar,en:Dark chocolate bar with more than 70% cocoa",
    countries:
      "algerien, Belgique, tschechien, frankreich, Allemagne, Guadeloupe, italien, marokko, Réunion, spanien, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "70% Cacao noir intense",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Produtos para barrar,Produtos para barrar à base de plantas,Doces para barrar,fr:Pâtes à tartiner,Creme para barrar de avelã,Creme para barrar de chocolate,Creme para barrar de avelã e cacau",
    countries:
      "áustria, bélgica, bulgária, Polynésie française, alemanha, hungria, itália, marrocos, Portugal, roménia, espanha, suíça, Espagne, Mexique",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains croustillants",
    countries:
      "Belgique, France, Guadeloupe, italie, Curaçao, Réunion, espagne, Suisse, en:en",
    manufacturing_places:
      "barilla, Allemagne, gmbh, wasastrasze, 10, 29229, celle, allemagne",
    origins: "allemagne",
    product_name: "Tartine croustillante FIBRES",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Eaux,Eaux de sources,Eaux minérales,Eaux gazeuses,Eaux minérales naturelles,Eaux minérales gazeuses,Eau minérale naturelle gazéifiée,en:Boissons-sans-sucre-ajoute",
    countries: "Belgique, France, italie, Luxembourg, pays-bas, Suisse",
    manufacturing_places: "bergame",
    origins: "italie, it:bergamo, it:san, pellegrino, terme",
    product_name: "S. Pellegrino Water",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Chocolates,Chocolates amargos,en:Extra fine dark chocolates",
    countries:
      "argélia, bélgica, Colombie, checa, finlândia, Polynésie française, polinésia, francesa, alemanha, itália, maurícia, marrocos, países, baixos, reunião, , espanha, suécia, suíça, reino, unido",
    manufacturing_places: "colombie",
    origins: "colombie",
    product_name: "Noir Excellence 90%",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates,Dark chocolate bar",
    countries:
      "Autriche, Belgique, France, Allemagne, Italie, Maroc, Pays-Bas, Réunion, Espagne, Suisse",
    manufacturing_places: "france, oloron-sainte-marie, 64400",
    origins: "france",
    product_name: "Excellence 85% Cacao Chocolat Noir Puissant",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal,Alimentos de origen vegetal,Frutos de cáscara y derivados,Frutos de cáscara,Anacardos",
    countries:
      "Autriche, bélgica, croacia, francia, alemania, hungría, Italie, Espagne, suecia, suiza, Espagne, Mexique",
    manufacturing_places: "52531, übach-palenberg, Allemagne",
    origins: "nepochádza, Swaziland, Allemagne",
    product_name: "Cashews",
  },
  {
    categories: "en:Crackers",
    countries:
      "áustria, bélgica, dinamarca, estónia, finlândia, Polynésie française, alemanha, itália, luxemburgo, Malte, marrocos, países, baixos, Portugal, espanha, suécia, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Original",
  },
  {
    categories:
      "Getränke, Mineralwasser, Natürliches Mineralwasser, Quellwasser, Wasser, en:natural-mineral-waters",
    countries: "Belgique, frankreich, Allemagne, Luxembourg, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "volvic",
  },
  {
    categories:
      "Beverages and beverages preparations, Beverages, Carbonated drinks, Waters, Spring waters, Mineral waters, Carbonated waters, Natural mineral waters, Carbonated natural mineral waters, en:carbonated-mineral-waters",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, en:haut-languedoc",
    product_name: "La salvetat",
  },
  {
    categories:
      "en:Beverages and beverages preparations,Alimentos e bebidas à base de plantas,Bebidas,Alimentos à base de plantas,en:Dairy substitutes,Substitutos do leite,Nozes e seus produtos,Bebidas à base de plantas,Leites de planta,Leites de frutos secos,Bebidas de amêndoa",
    countries:
      "albânia, áustria, bélgica, croácia, finlândia, Polynésie française, alemanha, grécia, hungria, Colombie, Grèce, irlanda, luxemburgo, países, baixos, noruega, polónia, Portugal, reunião, roménia, espanha, suécia, suíça, Espagne, Mexique, Israël",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Geröstete Mandel Ohne Zucker",
  },
  {
    categories:
      "Beverages and beverages preparations, Beverages, en:flavoured-syrups",
    countries: "Belgique, France, allemagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Liban, indiqué, en:non, indiqué",
    product_name: "Pulco Zitrone",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke,Pflanzliche Lebensmittel,Nüsse und Nussprodukte,Nüsse,Nusskerne,Walnüsse,Walnusskerne",
    countries:
      "österreich, Belgique, bulgarien, dänemark, frankreich, Allemagne, italien, niederlande, polen, Portugal, spanien",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "émirats, arabes, Tunisie",
    product_name: "Cerneaux de noix -nutriscore A- sans sel ajouté",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Céréales pour petit-déjeuner,Mueslis,Céréales aux fruits à coques,Pépites de céréales croustillantes,Pépites de céréales aux fruits à coques",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, allemagne, Guadeloupe, italie, Martinique, Curaçao, Réunion, slovénie, espagne, Suisse, royaume-uni",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "cruesly mélange de noix",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Biscoitos e Bolos,en:Biscuits and crackers,Biscoitos,Biscoitos recheados,Bolachas",
    countries:
      "Polynésie française, alemanha, itália, marrocos, Portugal, roménia, espanha, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Biscuits croquants au coeur onctueux de Nutella®",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke,Pflanzliche Lebensmittel,Frucht- und gemüsebasierte Lebensmittel,Fruchtbasierte Lebensmittel,Nüsse und Nussprodukte,Getrocknete Produkte,Getrocknete Produkte auf pflanzlicher Basis,Dörrobst,Getrocknete Früchtemischung,Nüsse",
    countries:
      "Belgique, bulgarie, croatie, Côte d'Ivoire, tchèque, France, allemagne, hongrie, italie, pologne, roumanie, serbie, espagne, suède, Suisse, royaume-uni",
    manufacturing_places: "alemania",
    origins: "allemagne",
    product_name: "Nusskern-Mischung, naturbelassen",
  },
  {
    categories:
      "Produits laitiers,Matières grasses,Produits à tartiner,Matières grasses à tartiner,Matières grasses animales,Matière grasse laitière,Produits laitiers à tartiner,Beurres,Beurres doux,Beurres de crème douce,en:Butter-82-fat-unsalted-easy-to-spread,Beurres tendres",
    countries: "Canada, France, Suisse, états-unis",
    manufacturing_places: "normandie, France",
    origins: "France",
    product_name: "Le Beurre Tendre Doux",
  },
  {
    categories:
      "Breakfasts,Spreads,Sweet spreads,fr:Pâtes à tartiner,Hazelnut spreads,Chocolate spreads,Cocoa and hazelnuts spreads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pâte à tartiner noisettes et cacao",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées",
    countries:
      "Algérie, Côte d'Ivoire, divoire, France, Martinique, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartine Doux",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Snacks,Céréales et pommes de terre,Pains,Pains croustillants",
    countries: "France, italie, espagne, Suisse",
    manufacturing_places: "barilla, Suède, Syrie, 682, 82, filipstad, zweden",
    origins: "suède",
    product_name: "Tartine croustillante Authentique",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Snacks,Céréales et pommes de terre,Tartines craquantes extrudées",
    countries: "Belgique, France, Luxembourg, Curaçao, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Cracotte Céréales Complètes",
  },
  {
    categories:
      "Snacks,Zoete snacks,Cacao en afgeleide producten,Chocoladeproducten,Pure chocolades",
    countries:
      "oostenrijk, Belgique, estland, Finlande, frankrijk, duitsland, italië, litouwen, slowakije, slovenië, spanje, verenigd, Belgique",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Chocolat noir - 85% cacao",
  },
  {
    categories:
      "Beverages, Carbonated drinks, Artificially sweetened beverages, Sodas, Diet beverages, Colas, Diet sodas, Diet cola soft drink",
    countries: "Espagne",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Coca-Cola zero azúcar",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Chocolate cereals,Aliments d'origine végétale,Aliments et boissons à base de végétaux,Céréales au chocolat,Céréales et dérivés,Céréales et pommes de terre,Céréales extrudées,Céréales pour petit déjeuner enrichies en vitamines et minéraux,Céréales pour petit-déjeuner,Petit-déjeuners,Pétales de blé chocolatés,Pétales de blé chocolatés enrichis en vitamines et minéraux",
    countries:
      "France, Guyane, Polynésie française, Guadeloupe, Martinique, Maroc, Nouvelle-Calédonie, Nouvelle-Calédonie, Réunion, Suisse",
    manufacturing_places: "France, rumilly, haute-savoie, itancourt, aisne",
    origins: "France",
    product_name: "Céréales Chocapic",
  },
  {
    categories:
      "Botanas,Snacks dulces,Cacao y sus productos,Chocolates,Chocolates negros,en:Cacao-et-derives,en:Chocolats,en:Chocolats-noirs,en:Chocolats-noirs-extra-fin",
    countries:
      "bélgica, Bulgarie, Colombie, checa, finlandia, alemania, países, bajos, polonia, Espagne",
    manufacturing_places:
      "übach-palenberg, heinsberg, (kreis), köln, (regierungsbezirk), nordrhein-westfalen, Allemagne",
    origins:
      "ludwig, weinrich, Norvège, Allemagne, ludwig, weinrich, fairtrade, Allemagne",
    product_name: "Extra dark chocolate 74% cacao",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines, en:light-margarines",
    countries: "France",
    manufacturing_places: "France",
    origins:
      "bondues, France, huile, Colombie, colza, Porto Rico, garantie, Guernesey",
    product_name: "Primevère",
  },
  {
    categories:
      "en:Beverages and beverages preparations,en:Plant-based foods and beverages,en:Beverages,en:Plant-based foods,en:Cereals and potatoes,en:Dairy substitutes,en:Cereals and their products,en:Milk substitutes,en:Plant-based beverages,en:Plant-based milk alternatives,en:Cereal-based drinks,en:Oat-based drinks",
    countries:
      "Géorgie du Sud-et-les Îles Sandwich du Sud, fhraing, Géorgie du Sud-et-les Îles Sandwich du Sud, ghearmailt, poblachd, Guyane, h-èireann, Géorgie du Sud-et-les Îles Sandwich du Sud, rìoghachd, aonaichte",
    manufacturing_places:
      "géorgie, Îles Pitcairn, sud-et-les, Wallis-et-Futuna, Géorgie du Sud-et-les Îles Sandwich du Sud, Îles Pitcairn, Soudan",
    origins:
      "géorgie, Îles Pitcairn, sud-et-les, Wallis-et-Futuna, Géorgie du Sud-et-les Îles Sandwich du Sud, Îles Pitcairn, Soudan",
    product_name: "Oat Drink Barista Edition",
  },
  {
    categories:
      "Getränke,Kohlensäurehaltige Getränke,Erfrischungsgetränke,Cola,Cola mit Zucker,Gezuckerte Getränke",
    countries:
      "albanien, algerien, Belgique, bosnien, Allemagne, herzegowina, bulgarien, kroatien, tschechien, frankreich, Allemagne, ungarn, Île Maurice, marokko, polen, Réunion, rumänien, russland, serbien, slowakei, Suisse",
    manufacturing_places: "رويبة",
    origins: "Belgique",
    product_name: "RECYCL",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Desserts,Desserts lactés,Desserts lactés fermentés,Skyrs,en:Desserts lactés,en:Desserts lactés fermentés,en:Desserts lactés fermentés nature,en:Produits fermentés,en:Produits laitiers,en:Produits laitiers fermentés,en:Skyrs nature",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Skyr Nature",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Snacks, Cereals and potatoes, Extruded crispbreads, en:crispbreads",
    countries: "Belgique, France, pays-bas, Sénégal",
    manufacturing_places: "peaugres, 07340",
    origins: "France",
    product_name: "Tartines craquantes au sarrasin imp",
  },
  {
    categories:
      "Imbiss,Süßer Snack,Kakao und Kakaoprodukte,Schokoladen,Milchschokoladen",
    countries: "österreich, tschechien, frankreich, Allemagne, ungarn, spanien",
    manufacturing_places: "allemagne",
    origins: "unspecified",
    product_name: "Alpenmilch Schokolade",
  },
  {
    categories: "brioche",
    countries: "France, allemagne, Suisse",
    manufacturing_places:
      "85150, vendée, France, pays, Colombie, Curaçao, loire, Curaçao, mothe, achard",
    origins: "Réunion, européenne",
    product_name: "La gâche tranchée",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Rusks,Multigrain rusks",
    countries: "Belgique, France, Réunion, Suisse",
    manufacturing_places: "granville, normandie, France",
    origins: "blé, origine, France",
    product_name: "Biscottes 6 céréales",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Légumineuses et dérivés,Petit-déjeuners,Produits à tartiner,Fruits à coques et dérivés,Pâtes à tartiner végétales,Produits à tartiner sucrés,Purées d'oléagineux,Beurres de légumineuses,Pâtes à tartiner,Beurres de fruits à coques,Beurres de cacahuètes",
    countries: "Belgique, France, maroc, Curaçao, Réunion, espagne, Suisse",
    manufacturing_places: "pays-bas",
    origins: "Liban, Réunion, européenne",
    product_name: "Pur beurre de cacahuète",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits",
    countries:
      "Belgique, France, Guadeloupe, Luxembourg, Belgique, la-reunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Belvita Petit Déjeuner Chocolat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Céréales pour petit-déjeuner,Flocons,Flocons de céréales,Flocons laminés,Flocons d'avoine",
    countries:
      "Belgique, France, allemagne, maroc, nouvelle-calédonie, espagne, Suisse",
    manufacturing_places: "allemagne",
    origins: "europe",
    product_name: "Flocons d'avoine",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Ontbijten,Granen en aardappels,Granen en graanproducten,Ontbijtgranen,Vlokken,Ontbijtvlokken,en:Rolled flakes,Havermoutvlokken",
    countries: "Belgique, frankrijk, duitsland, italië, Pays-Bas, spanje",
    manufacturing_places: "germania",
    origins: "europese, unie",
    product_name: "Zarte Haferflocken",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Snacks,Granen en aardappels,Knapperige broodproducten",
    countries: "Belgique, frankrijk, Luxembourg, Pays-Bas, zwitserland",
    manufacturing_places: "vervins, France",
    origins: "frankrijk",
    product_name: "Lu - Cracotte Original Wheat Slices, 250g (8.8oz)",
  },
  {
    categories:
      "Breakfasts,Spreads,Sweet spreads,fr:Pâtes à tartiner,Hazelnut spreads,Chocolate spreads,Cocoa and hazelnuts spreads",
    countries:
      "Argentine, australie, Belgique, Canada, colombie, France, allemagne, irlande, italie, japon, Luxembourg, pays-bas, Curaçao, Réunion, russie, arabie, saoudite, afrique, Îles Pitcairn, Soudan, espagne, suède, Suisse, royaume-uni, états-unis",
    manufacturing_places: "Argentine",
    origins: "Argentine",
    product_name: "Nutella",
  },
  {
    categories:
      "en:Beverages and beverages preparations,Alimentos e bebidas à base de plantas,Bebidas,Alimentos à base de plantas,Cereais e Batatas,en:Dairy substitutes,Cereais e seus produtos,Substitutos do leite,Bebidas à base de plantas,Leites de planta,Leites de cereais,Bebidas de aveia",
    countries:
      "bélgica, finlândia, Polynésie française, alemanha, hungria, itália, países, baixos, Portugal, espanha, suíça, turquia, Espagne, Mexique",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Ohne Zucker Hafer",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Breads, Sliced breads, Wholemeal breads, Wholemeal sliced breads",
    countries: "France, Suisse",
    manufacturing_places: "France, auvergne",
    origins: "France, auvergne",
    product_name: "14 Maxi Tranches complet sans sucres ajoutés",
  },
  {
    categories:
      "Breakfasts, Spreads, Sweet spreads, fr:Pâtes à tartiner, Creme para barrar de avelã, Creme para barrar de avelã e cacau, Creme para barrar de chocolate, Doces para barrar, Gorduras para barrar, Pequenos alomoços, Produtos para barrar, en:cocoa-and-hazelnuts-spreads",
    countries:
      "Polynésie française, alemanha, países, baixos, roménia, suécia, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "nutella",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Chocolates,Chocolates amargos,en:Extra fine dark chocolates",
    countries:
      "austrália, bélgica, canadá, Colombie, checa, dinamarca, estónia, Polynésie française, alemanha, hungria, Colombie, Grèce, irlanda, itália, líbano, marrocos, países, baixos, Portugal, sérvia, espanha, suíça, Espagne, Mexique",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Excellence 70% Cocoa Intense Dark",
  },
  {
    categories:
      "Boissons et préparations de boissons,Aliments et boissons à base de végétaux,Boissons,Aliments d'origine végétale,Boissons à base de végétaux,Préparations pour boissons,Cafés,Boissons instantanées,en:Instant coffee substitutes,Cafés solubles,Chicorée soluble,Chicorée et café en poudre soluble,Produits déshydratés,Produits lyophilisés à reconstituer",
    countries: "France, allemagne, Suisse",
    manufacturing_places: "France",
    origins:
      "café, origine, Liban, Guernesey, chicorée, Colombie, France, Norvège, Samoa, chicorée, principalement, Îles Pitcairn, nord, Colombie, Curaçao, France, France",
    product_name: "RICORE Original, Café & Chicorée, Boîte 260g",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits fourrés, Biscuits sec fourré à la pâte de fruits",
    countries: "France, Guadeloupe",
    manufacturing_places: "Liban, précisé",
    origins: "Liban, indiqué",
    product_name: "Figolu",
  },
  {
    categories:
      "Getränke und Getränkezubereitungen,Getränke,Kohlensäurehaltige Getränke,Erfrischungsgetränke,Cola,Gezuckerte Getränke",
    countries: "italien",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Coca-Cola",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains grillés,Petits pains grillés",
    countries: "France",
    manufacturing_places: "suède",
    origins: "suède",
    product_name: "Krisprolls complets sans sucres ajoutés",
  },
  {
    categories:
      "Boissons, Cacao et dérivés, Cacaos et chocolats en poudre, Boissons instantanées, Chocolats en poudre, en:B",
    countries: "France, Martinique",
    manufacturing_places: "France",
    origins:
      "République centrafricaine, fr:fèves, Colombie, cacao, dorigine, afrique",
    product_name: "1848 Chocolat en poudre",
  },
  {
    categories:
      "Condiments,Additifs alimentaires,Levure alimentaire,Levures de bière",
    countries: "France, Curaçao, Réunion, Suisse",
    manufacturing_places:
      "nutrition, Norvège, santé, sas, route, Colombie, castelnaudary, 31250, revel, France",
    origins: "France",
    product_name: "Levure de bière",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits,Shortbread cookies,Biscuit with chocolate covering,Digestives covered with chocolate,Shortbread cookie with chocolate",
    countries:
      "Belgique, France, Martinique, Réunion, Suisse, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Granola",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées, Margarines sans sel, Matière grasse végétale douce à teneur réduite en matière grasse, Pâtés végétaux, en:50-63-unsalted-vegetable-fat-margarine-type-high-in-omega-3",
    countries: "France, Curaçao, Réunion, Suisse",
    manufacturing_places: "ludres, 54710, lorraine, France",
    origins: "France",
    product_name: "Oméga 3® Doux",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals",
    countries: "France, Royaume-Uni, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Weetabix",
  },
  {
    categories:
      "en:Beverages and beverages preparations,Bebidas,Bebidas carbonatadas,Bebidas artificialmente doçeadas,Sodas,Bebidas dietéticas,Colas,en:Diet sodas,en:Diet cola soft drink",
    countries:
      "áustria, bélgica, Polynésie française, alemanha, Guernesey, hungria, itália, marrocos, Portugal, roménia, sérvia, espanha, suíça, tunísia, Espagne, Mexique",
    manufacturing_places: "Suisse",
    origins: "Suisse",
    product_name: "Zero Sugar",
  },
  {
    categories:
      "Snacks,Desserts,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates,Dark chocolate bar,Dark chocolate bar for cooking with more than 40% cocoa",
    countries: "Belgique, France, Allemagne, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Madagascar, afrique, amérique, Îles Pitcairn, Soudan",
    product_name: "Nestlé Dessert",
  },
  {
    categories:
      "Boissons,Eaux,Eaux de sources,Eaux minérales,Eaux minérales naturelles,Eau minérale naturelle non gazeuse",
    countries: "Belgique, France",
    manufacturing_places: "France",
    origins: "France, eau, minérale, Bangladesh, vosges",
    product_name: "hepar",
  },
  {
    categories:
      "Boissons,Eaux,Eaux de sources,Eaux minérales,Boissons sans alcool,Boissons sans sucre ajouté,Eaux minérales naturelles",
    countries: "Belgique, France, Luxembourg",
    manufacturing_places: "France, vittel",
    origins: "France",
    product_name: "eau minerale",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines, Light margarines",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Primevère",
  },
  {
    categories: "Snacks,Snacks salés,Amuse-gueules,Biscuits apéritifs",
    countries: "Belgique, France, Curaçao, Réunion, Suisse",
    manufacturing_places: "Curaçao, haye, fouassière, France",
    origins: "farine, Colombie, blé, origine, France",
    product_name: "Monaco",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains complets, Pains de mie complet",
    countries: "Belgique, frankreich, Guadeloupe, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain AMS complet",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Cereals with fruits,Mueslis,Mueslis with fruits",
    countries:
      "Belgique, France, Martinique, Mexique, Maroc, Réunion, Espagne, Suisse",
    manufacturing_places: "allemagne",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Muesli Superfruits",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Édulcorants,Sirops,Sirops simples,Sirops d'agave",
    countries:
      "France, Polynésie française, Polynésie française, Guadeloupe, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "mexique, en:mexique",
    product_name: "Sunny Via Agave syrup squeeze bottle imp",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains de mie,Pains complets,Pains de mie complet,en:Aliments d'origine végétale,en:Aliments et boissons à base de végétaux,en:Céréales et pommes de terre,en:Pains,en:Pains complets,en:Pains de mie,en:Pains de mie complet",
    countries: "France",
    manufacturing_places: "allemagne",
    origins: "Liban, indiqué",
    product_name: "Pain de Mie Spécial Sandwich Complet",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Biscottes, Pains grillés",
    countries: "France, Suisse, en:reunion",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain grillé au blé complet",
  },
  {
    categories:
      "Snacks,Petit-déjeuners,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits au chocolat,Biscuit aux céréales pour petit déjeuner enrichis en vitamines et minéraux",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, Curaçao, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Liban, indiqué",
    product_name: "Belvita Original Petit-Déjeuner miel et pépites de chocolat",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits fourrés",
    countries: "Belgique, France, Curaçao, Réunion, Suisse",
    manufacturing_places: "France, vertou",
    origins:
      "fabriqué, Guyane, France, Cité du Vatican, vertou, près, Colombie, nantes",
    product_name: "Biscuits goût chocolat",
  },
  {
    categories: "fr:produit inconnu, en:milk-bread-rolls",
    countries: "Belgique, France, Suisse, royaume-uni, états-unis",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pains au lait x10",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "St hubert bio doux 230g ss hdp",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains croustillants",
    countries: "France, Guadeloupe, italie, Suisse",
    manufacturing_places: "allemagne",
    origins: "Liban, indiqué",
    product_name: "wasa",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits fourrés, Biscuits au chocolat noir",
    countries: "France, Luxembourg, Suisse",
    manufacturing_places: "France",
    origins: "France, european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Fourrés - Chocolat Noir",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Chocolates,Chocolates amargos,en:Dark chocolate bar with more than 70% cocoa,en:Extra fine dark chocolates",
    countries:
      "Andorre, áustria, bélgica, bulgária, dinamarca, Polynésie française, alemanha, hungria, itália, marrocos, países, baixos, nova, zelândia, polónia, Portugal, roménia, rússia, espanha, suíça, Espagne, Mexique",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Excellence 85% Cacao Rich Dark",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Seeds,Cereals and their products,Cereal grains,Breads,Secale,Sliced breads,Rye,Rye breads",
    countries: "France",
    manufacturing_places: "85140, essarts, Guyane, bocage",
    origins: "France",
    product_name: "Pain de mie grandes tranches Seigle & Graines 500g",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates,Dark chocolate bar with more than 70% cocoa",
    countries:
      "Australie, Danemark, France, Allemagne, Maroc, Espagne, Suisse, Nouvelle-Calédonie, Nouvelle-Zélande",
    manufacturing_places: "allemagne",
    origins: "australie",
    product_name: "Doux 70% noir subtil",
  },
  {
    categories:
      "Snacks,Breakfasts,Sweet snacks,Biscuits and cakes,Biscuits,Crispy biscuits,Diet crispy biscuit,Dry biscuits,Shortbread cookies,Breakfast biscuit,Shortbread biscuit with fruits,Sablés à l'orange",
    countries: "France, Guadeloupe, Martinique, Réunion",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Gerble - Soy Orange Cookie, 280g (9.9oz)",
  },
  {
    categories: "Condiments, Sauces, Mayonnaises, Mayonnaises de Dijon",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "Belgique",
    origins: "oeufs, Polynésie française",
    product_name: "mayonnaise de Dijon",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits sucrés & biscuits apéritifs,Biscuits,Biscuits au son de blé,Biscuits au son de blé et la figue",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, Martinique, maroc, Curaçao, Réunion, Suisse",
    manufacturing_places: "revel, (31250), annoray, France",
    origins: "France, Liban, Réunion, européenne, Liban, indiqué",
    product_name: "FIGUE & SON",
  },
  {
    categories: "Salty snacks",
    countries: "Italie",
    manufacturing_places: "italie",
    origins: "italie",
    product_name: "Pringles Original",
  },
  {
    categories: "Condiments,Sauces,Sauces tomate,Ketchup,Ketchup de tomate",
    countries:
      "Belgique, France, allemagne, Luxembourg, espagne, Suisse, royaume-uni",
    manufacturing_places: "Belgique",
    origins: "Liban, indiqué",
    product_name: "Tomato Ketchup",
  },
  {
    categories:
      "Frühstücke,Brotaufstriche,Süße Brotaufstriche,fr:Pâtes à tartiner,Haselnusscremes,Nougatcremes,Schoko- und Haselnussaufstriche",
    countries:
      "österreich, Belgique, bulgarien, kroatien, frankreich, Allemagne, ungarn, rumänien, russland, serbien, slowenien, spanien, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Нутела",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Gâteaux, Génoises en tranches fourrées",
    countries: "France",
    manufacturing_places: "France, jussy",
    origins: "France, european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Napolitain - L'original",
  },
  {
    categories:
      "Boissons et préparations de boissons,Aliments et boissons à base de végétaux,Boissons,Boissons à base de végétaux,Préparations pour boissons,Boissons instantanées,Chicorée et café en poudre soluble,Aliments",
    countries: "Belgique, France, Maroc, Espagne, Suisse",
    manufacturing_places: "France, pontarlier, villars",
    origins:
      "France, european, Réunion, Curaçao, Liban, european, Réunion, Inde",
    product_name: "RICORE Original",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fruits and vegetables based foods,Canned foods,Vegetables based foods,Canned plant-based foods,Vegetables,Canned vegetables,Tomatoes and their products,Tomatoes,Canned tomatoes,Tomato pulps",
    countries:
      "Australie, Autriche, Belgique, Canada, France, Allemagne, Italie, Pays-Bas, Norvège, Pologne, Espagne, Suisse, Émirats arabes unis, Norvège, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places:
      "Lettonie, traversetolo, 28, Koweït, 43022, montechiarugolo, (pr), Italie",
    origins: "Italie",
    product_name: "Polpa",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Eaux, Eaux de sources, Eaux minérales, Boissons sans alcool, Eaux gazeuses, Eaux minérales naturelles, Boissons sans sucre ajouté, Eaux minérales gazeuses",
    countries: "France, Suisse",
    manufacturing_places:
      "source, badoit, bron, 42330, Saint-Christophe-et-Niévès, galmier, France",
    origins: "France",
    product_name: "Badoit 1 L PET",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Snacks, Cereals and potatoes, Extruded crispbreads, en:crispbreads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartines craquantes quinoa - pois chiche",
  },
  {
    categories:
      "Dairies,Fermented foods,Fermented milk products,Cheeses,Cream cheeses,Fromages,Fromages à la crème,Produits fermentés,Produits laitiers,Produits laitiers fermentés",
    countries: "France",
    manufacturing_places: "grièges, France",
    origins: "France",
    product_name: "Carré Frais 0% - Nature",
  },
  {
    categories: "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Petit-Beurre",
    countries: "Belgique, France, Guadeloupe, Liban, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Véritable Petit Beurre Pocket",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Flocons, Flocons de céréales, Flocons laminés, Flocons d'avoine",
    countries:
      "Belgique, France, Curaçao, Réunion, espagne, Suisse, royaume-uni",
    manufacturing_places: "Belgique",
    origins: "Liban, indiqué",
    product_name: "Flocons d'avoine complète",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits secs",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, allemagne, Guadeloupe, Martinique, maroc, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "Pomme 🍏 🍎 Noisette🥜",
  },
  {
    categories: "Sardines à l'huile d'olive",
    countries: "France, allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sardines Huile d'Olive Vierge Extra",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Weetabix",
    countries:
      "bélgica, francia, Hong Kong, Norvège, japón, luxemburgo, países, bajos, Espagne, Colombie, Colombie, Taïwan, Mexique, Mexique",
    manufacturing_places:
      "burton, latimer, kettering, northants, england, Émirats arabes unis, Norvège",
    origins: "émirats, arabes, Tunisie",
    product_name: "Weetabix produit à base de blé complet 100%",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits petit déjeuner",
    countries: "Belgique, France, Luxembourg, nouvelle-calédonie, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Belvita Brut & 5 céréales complètes",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Viennoiseries, Brioches, Brioches tressées, Brioches pur beurre, Brioches natures",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name:
      "Harrys brioche tressee nature au sucre perle sans additifs 500g",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Biscottes, Pains grillés, Biscottes multicéréales, Biscottes complètes",
    countries: "Belgique, France, Curaçao, Réunion",
    manufacturing_places: "granville, normandie, France",
    origins: "France",
    product_name: "biscotte",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Fromages,en:Soft cheeses,Fromages de vache,Fromages à pâte molle à croûte fleurie,Fromages de France,Fromages pasteurisés,Fromages à pâte molle à croûte naturelle,Fromages à pâte molle à croûte lavée",
    countries: "égypte, France, allemagne, maroc, espagne, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Caprice des dieux",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Cereals with fruits,Mueslis,Mueslis with fruits",
    countries:
      "Belgique, Côte d'Ivoire, divoire, France, Guyane, Polynésie française, Guadeloupe, Italie, Martinique, Maroc, Nouvelle-Calédonie, Nouvelle-Calédonie, Réunion, Espagne, Suisse",
    manufacturing_places: "allemagne",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Muesli Raisin, Figue, Abricot",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates",
    countries:
      "Belgique, France, Allemagne, Italie, Espagne, Émirats arabes unis, Norvège, Suisse",
    manufacturing_places:
      "rausch, schokoladen, gmbh, peine, (landkreis), niedersachsen, Allemagne",
    origins: "Équateur",
    product_name: "Dark Chocolate 70%",
  },
  {
    categories:
      "Plant-based foods and beverages, Beverages, Plant-based foods, Dairy substitutes, Milk substitutes, Nuts and their products, Plant-based beverages, Plant-based milk alternatives, Nut-based drinks, Almond-based drinks, Unsweetened plain almond-based drinks",
    countries:
      "Belgique, Côte d'Ivoire, divoire, France, Polynésie française, Polynésie française, Guadeloupe, Martinique, maroc, nouvelle-calédonie, Curaçao, Réunion, Suisse, royaume-uni",
    manufacturing_places: "italie",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "BjORG AMANDE ALMOND SANS SUGRES- NO SUGAR",
  },
  {
    categories:
      "Laticínios,Sobremesas,Sobremesas de laticínios,Sobremesas de chocolate,Cremes de sobremesa,en:Chocolate creamy puddings,en:Refrigerated chocolate creamy puddings",
    countries:
      "bulgária, croácia, alemanha, grécia, itália, lituânia, Portugal, roménia, eslovénia, espanha",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "High Protein Schoko Pudding",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Gâteaux secs",
    countries: "francia, nueva, Nouvelle-Calédonie, reunión, suiza",
    manufacturing_places: "France",
    origins: "blé, Colombie, France",
    product_name: "Thé - Biscuits",
  },
  {
    categories:
      "Boissons, Cacao et dérivés, Cacaos et chocolats en poudre, Boissons instantanées, Cacaos en poudre, Chocolats en poudre, Poudre maltée cacaotée",
    countries:
      "Algérie, Belgique, France, Guyane, Polynésie française, Polynésie française, allemagne, Guadeloupe, italie, Luxembourg, Martinique, nouvelle-calédonie, Curaçao, Réunion, espagne, Suisse",
    manufacturing_places: "pontarlier, franche-comté, France",
    origins:
      "République centrafricaine, Sahara Occidental, République centrafricaine",
    product_name: "NESQUIK Cacao",
  },
  {
    categories: "Condiments, Additifs alimentaires, Sauces, Arômes",
    countries:
      "France, Polynésie française, Polynésie française, allemagne, Guadeloupe, nouvelle-calédonie, Curaçao, Réunion, Suisse, en:belgique",
    manufacturing_places: "France",
    origins: "allemagne",
    product_name: "Arome MAGGI",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Canned foods, Fruits and vegetables based foods, Legumes, Canned plant-based foods, Vegetables based foods, Prepared vegetables, Canned legumes, Baked beans in tomato sauce, Canned common beans",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "u.e.",
    origins: "émirats, arabes, Tunisie",
    product_name: "Baked Beans in Tomato Sauce",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos Fermentados,en:Dairy substitutes,Sobremesas,Sobremesas não lácteas,Alimentos fermentados não lácteos,Iogurtes não lácteos,Iogurtes de soja",
    countries:
      "Andorre, áustria, bélgica, finlândia, Polynésie française, alemanha, itália, Portugal, espanha, suíça, Espagne, Mexique",
    manufacturing_places: "andorre",
    origins: "andorre",
    product_name: "Alpro Fermentiertes Sojaprodukt mit Kokosnuss, 500g",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Alimentos à base de frutas e legumes,Alimentos à base de frutas,Nozes e seus produtos,Produtos secos,Nozes,Alimentos à base de plantas secos,en:Dried mixed fruits",
    countries:
      "Polynésie française, alemanha, hungria, itália, países, baixos, Portugal, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Fruit & Nut Mix",
  },
  {
    categories:
      "Snacks,Breakfasts,Sweet snacks,Sweet pastries and pies,Viennoiseries,Brioches,Pure butter brioche,fr:Brioches tranchées",
    countries: "France",
    manufacturing_places: "France",
    origins: "farine, œuf, France",
    product_name: "Brioche Tranchée Bio 400g",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Chocolates,Chocolates amargos",
    countries:
      "bélgica, bulgária, Polynésie française, alemanha, Portugal, sérvia, espanha, itália",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Bio Chocolat Noir Cacao 70%",
  },
  {
    categories:
      "Boissons, en:Aliments-et-boissons-a-base-de-vegetaux, en:Boissons, en:Boissons-a-base-de-vegetaux, en:Boissons-aux-fruits, en:Boissons-avec-sucre-ajoute, Aromatisé, Boisson rafraichissante aux fruits et à l'eau de source",
    countries: "France, en:belgique, en:la, Réunion, en:suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Oasis Tropical",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie sans croûte, Pains complets, Pains de mie complet",
    countries:
      "Belgique, France, Luxembourg, Martinique, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "100% mie complet 500g",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits sucrés & biscuits apéritifs,Biscuits,Biscuits sablés",
    countries: "France, Curaçao, Réunion, Suisse, royaume-uni",
    manufacturing_places: "royaume-uni",
    origins: "royaume-uni",
    product_name: "Sablés Anglais L'Original",
  },
  {
    categories: "Condiments,Sauces,Pasta sauces,Pestos,Green pestos,Groceries",
    countries: "Belgique, France, Allemagne, Maroc, Norvège, Suisse",
    manufacturing_places: "Italie",
    origins: "Italie",
    product_name: "Genoese and Basil Pesto",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Petit-Beurre,fr:Alimentaire",
    countries: "France, Suisse",
    manufacturing_places: "clamart",
    origins:
      "beurre, Guernesey, fr:blé, France, fr:sel, France, fr:sucre, France",
    product_name: "Véritable Petit Beurre 🧈",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Chocolate cereals,Chocolate wheat shells",
    countries: "France, Espagne, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "NESTLE CHOCAPIC Céréales 750g",
  },
  {
    categories:
      "Zuivelproducten,Gefermenteerde levensmiddelen,Gefermenteerde zuivelproducten,Kazen,Smeerbare producten,Hartige smeerbare producten,Smeerkazen,fr:Fromage fouetté",
    countries: "frankrijk",
    manufacturing_places:
      "créhen, côtes, darmor, France, 22134, crehen, 22130, crehen",
    origins:
      "frankrijk, fr:lait, Colombie, bretagne, fr:lait, Îles Pitcairn, pays, Colombie, loire, fr:sel, Colombie, guérande",
    product_name:
      "Paysan Breton - Le Fromage Fouetté Madame Loïk - Nature au Sel de Guérande",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal, Alimentos de origen vegetal, Desayunos, Cereales y patatas, Cereales y derivados, Cereales para el desayuno, Copos, Copos de cereales, en:Rolled flakes, Copos de avena",
    countries: "Bulgarie, francia, Roumanie, Espagne, Mexique, Mexique",
    manufacturing_places: "alemania",
    origins: "alemania",
    product_name: "Copos de avena",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Desserts,Desserts lactés,Desserts lactés fermentés,Desserts lactés fermentés nature,Skyrs,Skyrs nature",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Skyr",
  },
  {
    categories:
      "Zuivelproducten,Gefermenteerde levensmiddelen,Gefermenteerde zuivelproducten,Kazen,Verse kazen,Gepasteuriseerde kazen,Schapenkazen,en:Feta-type cheese",
    countries: "Belgique, frankrijk, Japon, zwitserland",
    manufacturing_places: "Belgique",
    origins: "frankrijk",
    product_name: "Salakis 100% Brebis",
  },
  {
    categories:
      "Petit-déjeuners,Produits à tartiner,Produits à tartiner sucrés,Pâtes à tartiner,Pâtes à tartiner aux noisettes,Pâtes à tartiner au chocolat,Pâtes à tartiner aux noisettes et au cacao",
    countries:
      "Algérie, Belgique, France, allemagne, italie, Luxembourg, maroc, espagne, Suisse",
    manufacturing_places: "Algérie",
    origins: "Algérie",
    product_name: "Pâte à tartiner Nutella noisettes et cacao - 750g",
  },
  {
    categories:
      "Beverages and beverages preparations, Beverages, Waters, Spring waters, Mineral waters, Natural mineral waters, en:unsweetened-beverages",
    countries: "France, roumanie, espagne",
    manufacturing_places: "France",
    origins: "France",
    product_name:
      "Borsec, regina apelor minerale apă minerală, natura carbogozoasă",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains blancs, Pain blanc à base de farine de blé de la plus haute qualité GOST 26987-86, Pains de mie aux céréales",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name:
      "Harrys beau & bon pain de mie farine de ble cereales & graines 320g",
  },
  {
    categories: "Snacks, Sweet snacks, Confectioneries, en:bonbons",
    countries:
      "österreich, bulgarien, tschechien, frankreich, Allemagne, ungarn, Suisse",
    manufacturing_places: "nemčija, berlin, Allemagne",
    origins: "Allemagne",
    product_name: "Toffifee (15er)",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie sans croûte",
    countries:
      "Belgique, France, Luxembourg, Martinique, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Harrys pain de mie 100% mie nature sans croute 500g",
  },
  {
    categories:
      "Petit-déjeuners,Produits à tartiner,Produits à tartiner sucrés,Pâtes à tartiner,Pâtes à tartiner aux noisettes et au cacao",
    countries: "Guyane",
    origins: "italie",
    product_name: "Nocciolata bio",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Dairies,Fermented foods,Fermented milk products,Cheeses,Spreads,Salted spreads,Pasteurised products,Pasteurized cheeses,Cheese spreads",
    countries: "France, Réunion",
    manufacturing_places: "France, grièges",
    origins: "France",
    product_name: "Carré Frais - Nature",
  },
  {
    categories: "en:Chocolate stuffed wafers",
    countries:
      "austrália, bélgica, estónia, Polynésie française, grécia, hungria, Colombie, Grèce, irlanda, itália, letónia, lituânia, marrocos, nova, zelândia, polónia, Portugal, roménia, espanha, suíça, Espagne, Mexique",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "2 Bars Milk and Hazelnuts",
  },
  {
    categories: "ketchup",
    countries:
      "bélgica, francia, alemania, Espagne, suiza, Espagne, Mexique, Mexique, Mexique",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Tomato Ketchup BIO",
  },
  {
    categories: "İçecekler, Gazlı içecekler, en:Sodas, Kola",
    countries: "bélgica, francia, alemania, Espagne, Espagne, Mexique",
    manufacturing_places: "amérique, États-Unis, Canada, angleterre",
    origins: "Samoa américaines",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Biscottes,Biscottes multicéréales",
    countries: "France",
    manufacturing_places: "fr67039",
    origins: "farine, Colombie, blé, origine, France",
    product_name: "Biscottes aux céréales et aux graines",
  },
  {
    categories:
      "Boissons, Boissons édulcorées, Boissons sans alcool, Boissons au thé, Thés glacés, Thés glacés saveur pêche, Boissons avec sucre ajouté",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Thé noir glacé, saveur pêche intense",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Boissons sans alcool, Eaux minérales naturelles, Boissons sans sucre ajouté",
    countries: "France",
    manufacturing_places: "Monténégro, roucou",
    origins: "France",
    product_name: "Eau minérale naturelle",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, en:cheese-spreads",
    countries: "francia",
    manufacturing_places: "France",
    origins: "France",
    product_name: "St Môret",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Eaux, Eaux de sources, Eaux minérales, Boissons sans alcool, Boissons sans sucre ajouté, Eaux gazeuses, Eaux minérales gazeuses, Eaux-de-source-avec-adjonction-de-gaz-carbonique",
    countries: "Belgique, France",
    manufacturing_places: "f-69730, genay",
    origins: "France",
    product_name: "Eau de source gazéifiée",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Édulcorants,Additifs alimentaires,Stévia et dérivés,Succédanés du sucre,Sucres,Édulcorants de table,Édulcorant à base d'extrait de stévia",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Poudre stevia",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Cereals and their products, Starches, Cereal starches, Corn starch, en:cooking-helpers",
    countries:
      "Belgique, Canada, France, Martinique, Curaçao, Réunion, Suisse, Allemagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Cornstarch",
  },
  {
    categories:
      "Snacks, Aliments d'origine végétale, Aliments et boissons à base de végétaux, Amuse-gueules, Chips, Chips de pommes de terre, Chips de pommes de terre classiques, Chips de pommes de terre à l'huile de tournesol, Chips et frites, Céréales et pommes de terre, Snacks salés, en:potato-crisps-in-sunflower-oil",
    countries: "France",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "Émirats arabes unis, Norvège",
    product_name: "Lightly sea salted crisps",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat, Pépites de céréales croustillantes, Pépites de céréales au chocolat",
    countries: "France",
    manufacturing_places: "allemagne",
    origins: "europe",
    product_name: "Croustillant Chocolat",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Gefermenteerde levensmiddelen,Zuivelvervangers,Desserts,Plantaardige desserts,Non-zuivel gefermenteerd voedsel,Plantaardige yoghurts,Sojayoghurts,Sojadesserts,Plantaardige vla's,en:Flavoured soy dessert,Plantaardige vanille vla's,Sojadesserts met vanille",
    countries:
      "Belgique, frankrijk, duitsland, griekenland, hongarije, italië, Pays-Bas, spanje, zwitserland, verenigd, Belgique",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Vanille au Soja",
  },
  {
    categories:
      "Condiments,Sauces,Sauces tomate,Ketchup,en:Gewürzmittel,en:lebensmittel,Ketchup de tomate",
    countries: "allemagne",
    manufacturing_places: "niederlande, /, pays-bas",
    origins: "Liban, indiqué",
    product_name: "Tomato Ketchup",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Goat cheeses, Pasteurized cheeses, Bûche de chèvre, Fromages de France, Fromages à pâte molle à croûte naturelle",
    countries: "France",
    manufacturing_places: "France, soignon, saint-martin-de-saint-maixent",
    origins: "France",
    product_name: "La bûche Sainte-Maure (Poitou-Charentes",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Eaux minérales naturelles",
    countries: "Belgique, frankreich, Luxembourg, Suisse",
    manufacturing_places: "France",
    origins: "frankreich",
    product_name: "Eau minérale naturelle",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Cereais e Batatas,Cereais e seus produtos,Cereias para pequeno-almoçco",
    countries: "Polynésie française, Portugal, espanha, Espagne, Mexique",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Original",
  },
  {
    categories:
      "Beverages and beverages preparations,Plant-based foods and beverages,Beverages,Plant-based foods,Dairy substitutes,Milk substitutes,Nuts and their products,Plant-based beverages,Milks,Plant-based milk alternatives,Nut-based drinks,Almond-based drinks,fr:lait-d-amande-avec-calcium-et-vitamines-ajoutes",
    countries: "Émirats arabes unis, Norvège, Allemagne",
    manufacturing_places: "France",
    origins: "Espagne",
    product_name: "Alpro Mandeldrink, Original 1L",
  },
  {
    categories:
      "Cacao et dérivés,en:cacaos-en-poudre,en:cacaos-et-chocolats-en-poudre,cacao en poudre",
    countries: "Belgique, France, Hongrie, Italie, Espagne, Suisse",
    manufacturing_places: "France",
    origins: "France, République centrafricaine",
    product_name: "NESQUIK Moins de Sucres",
  },
  {
    categories: "Sweeteners, Syrups, Simple syrups, Agave syrups",
    countries: "Tchéquie, Îles Marshall, France, Allemagne, Lituanie, Espagne",
    manufacturing_places: "allemagne",
    origins: "Mexique",
    product_name: "Agavesirap",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Flakes,Cereal flakes,Extruded cereals,Extruded flakes,Corn flakes",
    countries:
      "Belgique, France, allemagne, italie, Luxembourg, Martinique, mexique, Curaçao, Réunion, espagne, Suisse, royaume-uni",
    manufacturing_places: "espagne",
    origins: "Belgique",
    product_name: "Corn Flakes",
  },
  {
    categories: "Boissons,Boissons gazeuses,Sodas,Sodas au cola",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Original taste",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke, Pflanzliche Lebensmittel, Frucht- und gemüsebasierte Lebensmittel, Fruchtbasierte Lebensmittel, Getrocknete Produkte, Früchte, Getrocknete Produkte auf pflanzlicher Basis, Beeren, Dörrobst, Cranberry, Getrocknete Moosbeere",
    countries: "белгия, франция, германия, румъния, испания, Bulgarie",
    manufacturing_places: "strasbourg, France",
    origins: "France",
    product_name: "Сушени и захаросани боровинки",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées",
    countries: "France, en:suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "ProActiv Margarine Tartine",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Eaux minérales naturelles, Boissons sans sucre ajouté, Boissons et préparations de boissons",
    countries: "Belgique, France, Suisse, en:en",
    manufacturing_places: "contrexéville",
    origins: "contrexéville, France",
    product_name: "CONTREX eau minérale naturelle",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fats,Spreads,Plant-based spreads,Salted spreads,Spreadable fats,Vegetable fats,Margarines,Light margarines",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "St Hubert",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de campagne, Pain de mie de campagne",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartines spécial campagne 450g",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Confeitaria,Barras,Bombons de chocolate,Barras de chocolate,Barras de chocolate caramelo",
    countries:
      "argélia, bélgica, bulgária, chipre, dinamarca, Polynésie française, alemanha, hungria, luxemburgo, méxico, marrocos, países, baixos, polónia, Portugal, roménia, arábia, saudita, sérvia, Singapour, espanha, suécia, suíça, Espagne, Mexique, Mexique, Mexique",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "",
  },
  {
    categories:
      "Lanches comida,Petiscos salgados,Aperitivos,en:Chips and fries,en:Crisps,en:Salty snacks made from potato",
    countries:
      "Polynésie française, alemanha, itália, martinica, maurícia, Portugal, reunião, tailândia",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Sour Cream & Onion",
  },
  {
    categories: "Condiments, Sauces, Soy sauces, fr:sauces-au-soja-salees",
    countries:
      "kroatië, tsjechië, denemarken, Finlande, frankrijk, duitsland, italië, Mexique, Pays-Bas, noorwegen, spanje, zwitserland, verenigd, Belgique",
    manufacturing_places: "Pays-Bas",
    origins: "pays-bas",
    product_name: "Soy sauce",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs, Chocolats aux noisettes, Chocolats noirs aux noisettes, Chocolats noirs extra fin",
    countries: "France, Guadeloupe",
    manufacturing_places: "France",
    origins: "Liban, indiqué",
    product_name: "Noir - Noisettes Entières",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Cookies, Cookies au chocolat",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Granola L'original",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Légumes et dérivés, Frais, Aliments à base de plantes frais, Tomates et dérivés, Légumes frais, Tomates, Tomates cerise, Tomates fraîches",
    countries: "France, allemagne",
    manufacturing_places: "maroc",
    origins: "maroc",
    product_name: "Tomates Gourmet",
  },
  {
    categories:
      "Dairies, Fermented foods, Desserts, Fermented milk products, Dairy desserts, Fermented dairy desserts, Yogurts, Greek-style yogurts",
    countries: "alankomaat, Finlande",
    manufacturing_places: "Allemagne",
    origins: "milk, from, Allemagne, Curaçao, Tchéquie",
    product_name: "Kreikkalainen jogurtti",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits au chocolat",
    countries:
      "Belgique, France, Guadeloupe, Martinique, maroc, Curaçao, Réunion, Sénégal, Suisse",
    manufacturing_places: "France, revel",
    origins: "France, Réunion, européenne, Liban, Réunion, européenne",
    product_name: "Biscuit lait chocolat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Matières grasses,Produits à tartiner,Pâtes à tartiner végétales,Produits à tartiner salés,Matières grasses à tartiner,Matières grasses végétales,Margarines,Margarines allégées",
    countries: "France, Suisse",
    manufacturing_places:
      "Koweït, hubert, Koweït, 870, rue, denis, papin, Koweït, 54710, ludres, meurthe-et-moselle, lorraine, France",
    origins: "koweït",
    product_name: "Oméga 3 Doux Tartine & Cuisson",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Cereals and their products,Pastas,Cereal pastas,Dry pastas,Durum wheat pasta,Spaghetti,Dry durum wheat pasta,Durum wheat spaghetti",
    countries:
      "Australie, Autriche, Belgique, Croatie, France, Allemagne, Grèce, Royaume-Uni, Italie, Liechtenstein, Luxembourg, Mexique, Roumanie, Russie, Serbie, Espagne, Suisse, Thaïlande, Émirats arabes unis, Norvège, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places: "Italie",
    origins: "italie",
    product_name: "Spaghetti N.5",
  },
  {
    categories:
      "Snacks,en:biscuits-aux-fruits,en:biscuits-et-gateaux,en:snacks-sucres,Biscuit sec aux fruits",
    countries: "francia",
    manufacturing_places: "31250, revel",
    origins: "",
    product_name: "Biscuit raisins",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales aux fruits, Mueslis, Mueslis aux fruits",
    countries:
      "Belgique, France, Guyane, Polynésie française, Italie, Martinique, Réunion, Espagne, Suisse, en:germany",
    manufacturing_places: "royaume-uni",
    origins: "Belgique",
    product_name: "Special Muesli 30% fruits & noix",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Cereais e Batatas,Cereais e seus produtos,Cereias para pequeno-almoçco,Flocos,Flocos de cereais,en:Rolled flakes,Flocos de aveia",
    countries:
      "áustria, Polynésie française, alemanha, países, baixos, Portugal, espanha, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Hafer Flocken Zart",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales aux fruits à coques, Pépites de céréales croustillantes, Pépites de céréales aux fruits à coques",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, Guadeloupe, italie, Suisse",
    manufacturing_places: "Belgique, Tunisie, angleterre, bedfordshire",
    origins: "Belgique",
    product_name: "Country Crisp 4 noix",
  },
  {
    categories:
      "Frühstücke, Getränke, Mandelmilch, Milchersatz, Nussmilch, Nüsse und Nussprodukte, Pflanzenmilch, Pflanzliche Getränke, Pflanzliche Lebensmittel, Pflanzliche Lebensmittel und Getränke, en:milk-substitutes",
    countries:
      "češka, njemačka, Croatie, slovačka, mađarska, Slovénie, rumunjska",
    manufacturing_places: "italie",
    origins: "croatie",
    product_name: "almond drink",
  },
  {
    categories:
      "Bebidas, Bebidas carbonatadas, Bebidas endulzadas artificialmente, Sodas, Bebidas light, Bebidas no alcohólicas, Bebidas carbonatadas sin jugo de frutas, Bebidas de cola, Sodas light, en:Carbonated soft drink without fruit juice without sugar and with artificial sweeteners, Bebida de cola light",
    countries: "spanien, Allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Coca-Cola® Coke Zero®",
  },
  {
    categories: "Beverages,Waters,Spring waters,Mineral waters,Băuturi",
    countries: "Roumanie",
    manufacturing_places: "Roumanie",
    origins: "roumanie",
    product_name: "",
  },
  {
    categories:
      "Condiments, Sauces, Tomato sauces, Ketchup, Tomato Ketchup, Groceries",
    countries: "Belgique, France, allemagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Tomato Ketchup 910 g flacon",
  },
  {
    categories:
      "Petit-déjeuners,Produits à tartiner,Produits à tartiner sucrés,Pâtes à tartiner,Pâtes à tartiner aux noisettes,Pâtes à tartiner au chocolat,Pâtes à tartiner aux noisettes et au cacao",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Nutella pâte à tartiner aux noisettes et au cacao",
  },
  {
    categories:
      "en:Beverages and beverages preparations,Alimentos e bebidas à base de plantas,Bebidas,Alimentos à base de plantas,Cereais e Batatas,en:Dairy substitutes,Cereais e seus produtos,Substitutos do leite,Bebidas à base de plantas,Leites de planta,Leites de cereais,Bebidas não adoçadas,Bebidas de aveia",
    countries:
      "bélgica, Colombie, checa, Polynésie française, alemanha, hungria, itália, Espagne, Mexique",
    manufacturing_places: "colombie",
    origins: "colombie",
    product_name: "Oat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Céréales et pommes de terre, Snacks sucrés, Barres, Barres de céréales, en:Barritas, en:Barritas-energeticas, en:Botanas, en:Snacks-dulces, en:Suplementos-de-culturismo, en:Suplementos-dieteticos",
    countries:
      "France, Allemagne, Espagne, Émirats arabes unis, Norvège, bélgica",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Crunchy oats&honey",
  },
  {
    categories:
      "Imbiss,Süßer Snack,Kakao und Kakaoprodukte,Schokoladen,Bitterschokoladen,Extrafeine dunkle Schokoladen",
    countries:
      "australien, österreich, Belgique, frankreich, Allemagne, italien, libanon, marokko, rumänien, spanien, Suisse, Thaïlande",
    manufacturing_places: "France",
    origins: "frankreich",
    product_name: "Bitter Extra Kraftig",
  },
  {
    categories:
      "Snacks,Zoete snacks,Koekjes en cakes,Cakes,Madeleines,en:Madeleines natures",
    countries: "frankrijk, Martinique, en:la, Réunion, en:suisse",
    manufacturing_places: "France",
    origins: "frankrijk",
    product_name: "Petites Madeleines",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Céréales et pommes de terre, Snacks sucrés, Pains, Viennoiseries, Brioches, Brioches tranchées, Brioches natures",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Brioche moins de sucre",
  },
  {
    categories:
      "Dairies, Fats, Spreads, Spreadable fats, Animal fats, Milkfat, Dairy spread, Butters",
    countries: "Émirats arabes unis, Norvège",
    product_name: "Spreadable Slightly Salted",
    origins: "émirats, arabes, Tunisie",
    manufacturing_places: "émirats, arabes, Tunisie",
  },
  {
    categories:
      "Desserts, Surgelés, Desserts glacés, Glaces et sorbets, Glaces, Crèmes glacées en pot, Glaces à la vanille",
    countries: "Canada, frankrijk",
    manufacturing_places: "Koweït, dizier",
    origins:
      "nl:arôme, naturel, Colombie, vanille, Colombie, Madagascar, nl:crème, fraiche, Colombie, France, nl:extrait, Colombie, vanille, Colombie, Madagascar",
    product_name: "CARTE D'OR Glace Crème Glacée Vanille de Madagascar 900ml",
  },
  {
    categories: "Moutardes de Dijon",
    countries: "France, Allemagne",
    origins: "France",
    product_name: "Maille Moutarde Fine de Dijon L'Originale Bocal 360g",
    manufacturing_places: "France",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Chocolate cereals, Crunchy cereal clusters, Cereal clusters with chocolate",
    countries:
      "Belgique, France, Guyane, Polynésie française, Italie, Nouvelle-Calédonie, Nouvelle-Calédonie, Réunion, Espagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Cruesli Chocolat noir",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs, Chocolats noirs en tablette, Chocolats noirs extra fin, Chocolat-noir-extra, Chocolats noir à croquer",
    countries: "France",
    manufacturing_places: "loir-et-cher, France",
    origins: "afrique, Réunion, européenne",
    product_name: "Noir Extra",
  },
  {
    categories:
      "Băuturi, Apa, Băuturi fără zahăr, en:Băuturi, en:Băuturi fără zahăr",
    countries: "roumanie, France",
    manufacturing_places: "Roumanie",
    origins: "roumanie",
    product_name: "Aqua Carpatica",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits au chocolat au lait, Petits beurres, Biscuits tablette de chocolat, Biscuits tablette de chocolat au lait, Petit beurre au chocolat",
    countries: "Belgique, France, Suisse, en:algeria",
    manufacturing_places: "France",
    origins: "blé, origine, France, France",
    product_name: "Véritable Petit Écolier Chocolat au Lait",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Nuts and their products,Nuts,Shelled nuts,Brazil nuts,Shelled Brazil nuts,nuts",
    countries: "Autriche, France, Allemagne, Espagne, Royaume-Uni",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "Brazil nuts",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits",
    countries: "Guyane, Polynésie française, Belgique, France",
    manufacturing_places: "France",
    origins: "cacao, non-ie, fr:chocolat, Guernesey",
    product_name: "Cookie🍪 cacao pépites Sans Sucre",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Condiments, Sauces, Tomato sauces, Ketchup, Tomato Ketchup",
    countries: "frankreich, Suisse",
    manufacturing_places: "Suisse",
    origins: "Liban, indiqué",
    product_name: "Tomato ketchup 50% moins de sucres & de sel",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains grillés, Petits pains grillés, en:Aliments d'origine végétale, en:Aliments et boissons à base de végétaux, en:Céréales et pommes de terre, en:Pains, en:Pains grillés, en:Petits pains grillés",
    countries: "France, en:france",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Grilletine au froment sans sucres ajoutés",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Boissons à base de végétaux, Cafés, Boissons instantanées, Cafés solubles, Chicorée soluble, Chicorée et café en poudre soluble",
    countries: "France, nouvelle-calédonie, Suisse",
    manufacturing_places:
      "nestlé, France, (mnf), Koweït, zone, louis, delaporte, Koweït, 76370, rouxmesnil-bouteilles, seine-maritime, haute-normandie, France",
    origins: "France",
    product_name: "ricore",
  },
  {
    categories: "Viandes et dérivés, Charcuteries, Jambons, Jambons blancs, B",
    countries: "France",
    manufacturing_places: "France",
    origins: "porc, origine, Guernesey",
    product_name: "Le Bon Paris à l'Étouffée",
  },
  {
    categories:
      "Édulcorants, Sirops, Sirops simples, Sirops d'érable, Sirops d'érable ambrés",
    countries: "Belgique, croatie, finlande, France, italie, maroc, Suisse",
    manufacturing_places: "Canada",
    origins: "Canada",
    product_name: "Sirop d'érable ambré goût riche",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Desserts,Desserts lactés,Desserts lactés fermentés,Desserts lactés fermentés nature,Skyrs,Skyrs nature",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Skyr",
  },
  {
    categories:
      "Snacks, Barres, Barres de céréales, Snacks sucrés, Barres-de-cereales, en:cereal-bars",
    countries: "France",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Crunchy avoine et miel",
  },
  {
    categories:
      "Bebidas y preparaciones de bebidas,Alimentos y bebidas de origen vegetal,Bebidas,Alimentos de origen vegetal,Desayunos,Bebidas para tomar calientes,Bebidas de origen vegetal,Preparaciones de bebidas,Bebidas instantáneas,en:Instant coffee substitutes,en:Instant chicory,Achicoria,fr:chicoree",
    countries: "France, espagne",
    manufacturing_places: "84, rue, françois, herbo, 59310, orchies, France",
    origins: "francia, France",
    product_name: "Chicorée soluble nature",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates,Dark chocolate bar with more than 70% cocoa",
    countries:
      "Australie, France, Allemagne, Italie, Nouvelle-Calédonie, Nouvelle-Zélande, Espagne, Suisse",
    manufacturing_places: "Suisse",
    origins: "Suisse",
    product_name: "Chocolat noir extra-fin, traditionnel.",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de vache, Fromages à pâte molle à croûte fleurie, Camemberts, Camemberts au lait de vache, Fromages de France, Fromages pasteurisés, Camemberts au lait pasteurisé de vache",
    countries: "France, Belgique",
    manufacturing_places:
      "lf, Koweït, Bangladesh, arago, Swaziland, Lesotho, touches, 53810, changé, mayenne, France",
    origins: "France",
    product_name: "PRESIDENT CAMEMBERT 250g",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Légumineuses et dérivés,Produits à tartiner,Fruits à coques et dérivés,Pâtes à tartiner végétales,Purées d'oléagineux,Beurres de légumineuses,Beurres de fruits à coques,Beurres de cacahuètes",
    countries: "France",
    manufacturing_places: "France",
    origins: "Taïwan, équateur",
    product_name: "Beurre bio cacahuète",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Snacks sucrés, Fruits à coques et dérivés, Barres, Compléments alimentaires, Compléments pour le Bodybuilding, Barres de fruits à coques, Barres de cacahuètes, Barres protéinées",
    countries: "France, fr:belgique",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Protein Cacahuetes🥜 & Chocolat🍫",
  },
  {
    categories:
      "Beverages, Energy drinks, Energy drink with sugar, Sweetened beverages, ro:45kcal",
    countries: "Grèce, Roumanie, en:bulgaria",
    manufacturing_places:
      "Seychelles, Grèce, energy, srl, vidrasau, 1g/4, jud.mureș",
    origins: "Roumanie",
    product_name: "Energizant HELL",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Légumineuses et dérivés, Légumineuses, Produits à tartiner, Fruits à coques et dérivés, Pâtes à tartiner végétales, Fruits à coques, Purées d'oléagineux, Beurres de légumineuses, Beurres de fruits à coques, Beurres de cacahuètes, Cacahuètes",
    countries: "frankrijk, zwitserland",
    manufacturing_places: "France",
    origins: "amérique, centrale",
    product_name: "Menguy's Beurre de cacahuètes creamy",
  },
  {
    categories:
      "Snacks,Desserts,Snacks sucrés,Biscuits et gâteaux,Biscuits,en:Biscuits au chocolat,en:Biscuits et gâteaux,en:Snacks sucrés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Granola LU",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits,Filled biscuits,Filled extruded crispbreads,Extruded and grilled biscuits with chocolate filling",
    countries: "Belgique, France, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name:
      "Bâtonnets de céréales fourrés (47,5 %) au chocolat - Cracotte Chocolat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Matières grasses,Produits à tartiner,Pâtes à tartiner végétales,Produits à tartiner salés,Matières grasses à tartiner,Matières grasses végétales,Margarines,Margarines allégées,Beurre cuisson et tartine",
    countries: "Belgique, France, Guadeloupe, Curaçao, Réunion",
    manufacturing_places: "France",
    origins: "huile, Colombie, colza, Colombie, France",
    product_name: "Primevère Tartine & Cuisson",
  },
  {
    categories:
      "Beverages,Carbonated drinks,Sodas,Colas,Cola with sugar,Sweetened beverages,pl:gazowane,fr:Boissons gazeuses",
    countries:
      "Algérie, Autriche, Belgique, Sri Lanka, Îles Marshall, Lesotho, Géorgie du Sud-et-les Îles Sandwich du Sud, Congo, France, Allemagne, Italie, Maroc, Pologne, Réunion, Suède, Suisse, Tunisie, Ukraine, Émirats arabes unis, Norvège",
    manufacturing_places: "Algérie",
    origins: "Algérie",
    product_name: "Coca Cola Original taste",
  },
  {
    categories:
      "Viandes et dérivés, Viandes, Charcuteries, Jambons, Porc et dérivés, Jambons blancs, en:Jambon cuit supérieur, en:Jambon sans couenne",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Le Supérieur - à l'Etouffée - Conservation sans Nitrite",
  },
  {
    categories: "Moutardes de Dijon",
    countries: "France",
    manufacturing_places: "dijon",
    origins: "Liban, indiqué",
    product_name: "Amora Moutarde Forte Bocal 430g",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao",
    countries: "France, en:morocco",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pâte à tartiner",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits secs,Biscuits sablés,Biscuit sec au beurre,Sablés au beurre",
    countries: "Belgique, France, Guadeloupe, italie, Martinique, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Galettes au bon beurre",
  },
  {
    categories:
      "Bebidas,Bebidas carbonatadas,Bebidas artificialmente doçeadas,Sodas,Bebidas dietéticas,Bebidas não adoçadas,Colas,en:Diet sodas,en:Diet cola soft drink,Bebidas adoçadas",
    countries:
      "argélia, bélgica, Polynésie française, alemanha, hungria, itália, marrocos, polónia, Sénégal, espanha, suíça, tunísia",
    manufacturing_places: "Suisse, France",
    origins: "Suisse",
    product_name: "Coca-Cola Zero",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Petits beurres",
    countries: "France, Guadeloupe, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Véritable petit beurre",
  },
  {
    categories: "Gewürzmittel,Saucen,Pestos,Rote Pestos",
    countries:
      "österreich, Belgique, kroatien, frankreich, Allemagne, italien, Suisse",
    manufacturing_places: "italie, italien",
    origins:
      "fromage, grana, padano, aop, fromage, pecorino, romano, aop, vinaigre, balsamique, Colombie, modène, igp",
    product_name: "Pesto Rosso",
  },
  {
    categories:
      "Zuivelproducten,Gefermenteerde levensmiddelen,Gefermenteerde zuivelproducten,Kazen,Zachte kazen,Koemelkkazen,Witschimmelkazen,Gepasteuriseerde producten,Franse kazen,Gepasteuriseerde kazen,Coulommiers",
    countries: "frankrijk",
    manufacturing_places: "France, normandie",
    origins: "frankrijk, normandië",
    product_name: "Coulommiers Doux et Crémeux",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Biscoitos e Bolos,Biscoitos,Biscoitos de chocolate,Bolachas,en:Oatmeal cookies",
    countries:
      "Andorre, Polynésie française, itália, marrocos, Portugal, roménia, espanha, tunísia",
    manufacturing_places: "andorre",
    origins: "andorre",
    product_name: "Digestive Avena Choco",
  },
  {
    categories:
      "Meats and their products,Meats,Prepared meats,Specific products,Hams,Products for specific diets,White hams,Products with reduced salt,Prepared meats with less salt,White hams with less salt,fr:Jambon sans couenne",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Le Supérieur -25% de Sel - Conservation sans Nitrite",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Pains,Pains de mie,Pain de mie au son,Pains complets,Pains de mie complet",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France, en:blé, Polynésie française",
    product_name: "Pain De Mie Bio",
  },
  {
    categories:
      "Cacao et dérivés, Cacaos et chocolats en poudre, Cacaos en poudre, Préparation pour boisson chocolatée",
    countries: "Belgique, France, allemagne, pologne, Curaçao, Réunion, Suisse",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "L'Original - Cacao en poudre non sucré",
  },
  {
    categories:
      "Plant-based foods and beverages,Beverages,Plant-based beverages,Carbonated drinks,Fruit-based beverages,Artificially sweetened beverages,Sodas,Fruit sodas,Carbonated fruit soft drink,Orange soft drinks,Carbonated fruit soft drink with less than 10% of fruit juice,Sweetened beverages,fr:Boisson gazeuse aux fruits avec moins de 20 % de jus non sucrée avec édulcorants",
    countries: "Tchéquie, Îles Marshall, France, Allemagne, Roumanie, Espagne",
    manufacturing_places: "tchéquie",
    origins: "oranges, Îles Pitcairn, brésil",
    product_name: "Fanta Orange 2ltr",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Snacks, Cereals and potatoes, Salty snacks, Appetizers, Chips and fries, Crisps, Crisps made from reconstituted potato, en:potato-crisps",
    countries: "Belgique, France, Réunion",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Lay's Cuites au four nature",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Rusks",
    countries: "France, Réunion",
    manufacturing_places: "France, (granville, Îles Pitcairn, vervins)",
    origins: "blé, récolté, Guyane, France",
    product_name: "La Biscotte 96% de céréales",
  },
  {
    categories:
      "Boissons, Cacao et dérivés, Cacaos et chocolats en poudre, Boissons instantanées, Cacaos en poudre, Chocolats en poudre",
    countries: "france",
    manufacturing_places: "France",
    origins: "fèves, de, cacao, dorigine, afrique., , union, européenne",
    product_name: "Grand Arôme 32% de Cacao",
  },
  {
    categories:
      "Salty snacks, Appetizers, Crisps, Crisps made from reconstituted potato",
    countries: "allemagne, espagne, en:fr",
    product_name: "Pringles Original",
    origins: "null",
    manufacturing_places: "null",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines, Light margarines",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartine & Cuisson 100% végétal",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Barres, Barres de céréales, Barres de céréales au chocolat",
    countries: "France",
    manufacturing_places: "espagne",
    origins: "France",
    product_name: "Crunchy Avoine & Chocolat Noir x 5 x 2 barres de 21 g",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fats,Vegetable fats,Olive tree products,Vegetable oils,Olive oils,Extra-virgin olive oils,Virgin olive oils",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "espagne",
    origins: "Espagne",
    product_name: "Huile d'olive vierge extra",
  },
  {
    categories:
      "Condiments, Sauces, Tomato sauces, Ketchup, Tomato Ketchup, Groceries",
    countries: "Ukraine",
    manufacturing_places: "Ukraine",
    origins: "Ukraine",
    product_name: "Tomato Ketchup",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Biscottes,Pains grillés,Pain-grille-complet",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "Polynésie française",
    product_name: "Tartines de Pain Blé Complet",
  },
  {
    categories:
      "Beverages, Waters, Spring waters, Mineral waters, Natural mineral waters, Unsweetened beverages, Boissons, Eaux, Eaux de sources, Eaux minérales, Eaux minérales naturelles",
    countries: "France, maroc, en:morocco",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Eau minerale",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Produits de la ruche, Produits d'élevages, Édulcorants, Miels, Miels de fleurs, Miels liquides",
    countries: "frankreich, Réunion, Sénégal, schweden, Suisse, Allemagne",
    manufacturing_places: "France",
    origins: "France, Argentine, espagne, Ukraine",
    product_name: "Miel de Fleurs Liquide Doseur 500g",
  },
  {
    categories:
      "Ontbijten,Smeerbare producten,Zoete smeerpastas,fr:Pâtes à tartiner,Hazelnootpastas,Chocopastas,Choco-hazelnootpastas,Broodbeleggen",
    countries: "frankrijk, duitsland, hongarije, Pays-Bas",
    manufacturing_places: "pays-bas",
    origins: "pays-bas",
    product_name: "Nutella",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains grillés,Petits pains grillés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Petit Pains Grillés Blé complet",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Granen en aardappels,Broden,Beschuiten,Tarwebeschuiten",
    countries: "frankrijk",
    manufacturing_places: "normandie, France",
    origins: "blé, origine, France",
    product_name: "Biscottes",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Flakes,Cereal flakes,Rolled flakes,Rolled oats,Cooked oat flakes",
    countries:
      "Tchéquie, Îles Marshall, Hongrie, Roumanie, Slovaquie, Finlande",
    manufacturing_places: "tchéquie",
    origins: "Allemagne, Tchéquie, Îles Marshall",
    product_name: "",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Surgelés, Biscuits et gâteaux, Biscuits",
    countries: "francia",
    manufacturing_places: "",
    origins: "",
    product_name: "BN - French Casse Croute Biscuits, 375g (13.2oz)",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Confeitaria,Bombons de chocolate,Bombons",
    countries:
      "bulgária, Polynésie française, hungria, Portugal, roménia, espanha",
    manufacturing_places: "Pologne",
    origins: "pologne",
    product_name: "Coco specialty",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de vache, en:cooked-pressed-cheeses, Emmentals, Fromages de France, Emmentals français",
    countries: "France",
    manufacturing_places:
      "société, fromagère, Colombie, charchigné, (filiale, groupe, lactalis), Koweït, route, Colombie, lassay, Koweït, 53250, charchigné, mayenne, société, fromagère, Colombie, bouvron, (filiale, groupe, lactalis), Koweït, route, Colombie, fay-de-bretagne, Koweït, 44130, bouvron, loire-atlantique, pays, Colombie, Curaçao, loire, France",
    origins: "France",
    product_name: "President emmental coeur de meule 250g",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages de vache, Fromages de France, Fromages pasteurisés, Fromages à tartiner",
    countries: "France",
    manufacturing_places: "maine, Norvège, loire, France",
    origins: "lait, origine, France, crème, origine, France",
    product_name: "Le Goût Primeur format familial",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Desserts, Fruits et produits dérivés, Compotes, Compotes de pomme, Compotes pommes nature, Compotes à boire, Desserts de fruits, Compotes sans sucres",
    countries: "France, Suisse",
    manufacturing_places: "France, aisne",
    origins: "France",
    product_name: "POM'POTES Compotes Gourdes Pomme Nature 1x90g",
  },
  {
    categories:
      "Dairies, Fats, Spreads, Spreadable fats, Animal fats, Milkfat, Dairy spread, Butters, Unsalted butters, Sweet cream butters",
    countries: "France, Allemagne, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "european, Réunion",
    product_name: "",
  },
  {
    categories:
      "Plant-based foods and beverages, Beverages, Plant-based beverages, Fruit-based beverages, Juices and nectars, Fruit juices, Non-alcoholic beverages, Orange juices, Squeezed juices, Orange juices without pulp, Squeezed orange juices",
    countries: "Belgique, frankreich, Luxembourg, Réunion, Suisse",
    manufacturing_places: "chennai",
    origins: "indien",
    product_name: "Orangensaft",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Surgelés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat",
    countries: "frankrijk",
    manufacturing_places: "",
    origins: "",
    product_name: "Biscuits Germe de Blé et Pépites de Chocolat",
  },
  {
    categories: "Sweeteners,Syrups,Simple syrups,Agave syrups",
    countries: "Belgique, France",
    manufacturing_places: "Belgique",
    origins: "Mexique",
    product_name: "Sirop d'agave",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Chocolate cereals, Mueslis, Mueslis with chocolate",
    countries: "bélgica, francia, Espagne, suiza",
    manufacturing_places: "allemagne",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Muesli avoine chocolat bio",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Chocolate cereals,Extruded cereals,Chocolate wheat shells",
    countries: "Belgique, France, Luxembourg, Réunion",
    manufacturing_places: "Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "NESTLE CHOCAPIC BIO Céréales",
  },
  {
    categories:
      "Produits laitiers, Matières grasses, Produits à tartiner, Matières grasses à tartiner, Matières grasses animales, Matière grasse laitière, Produits laitiers à tartiner, Beurres, Beurres doux, Matière grasse de beurre, Beurres de crème douce",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, roumanie, Suisse",
    manufacturing_places: "France",
    origins: "Réunion, européenne",
    product_name: "beurre",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie aux céréales",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain AMS 7 céréales",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao, Surgelés",
    countries: "rumänien, Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Nutella",
  },
  {
    categories:
      "Süße Brotaufstriche, Frühstücke, Frühstücke, Frühstücke, Frühstücke, Brotaufstriche, brotaufstriche, Brotaufstriche, brotaufstriche, haselnusscremes, Haselnusscremes, haselnusscremes, Haselnusscremes, nougatcremes, Nougatcremes, nougatcremes, Nougatcremes, Schoko- und Haselnussaufstriche",
    countries: "Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Nutella",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Snacks,Produits à tartiner,Produits à tartiner sucrés,Pâtes à tartiner,Pâtes à tartiner au spéculoos",
    countries: "Belgique, France, Luxembourg, maroc, pays-bas, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Biscoff Creamy",
  },
  {
    categories:
      "Lanches comida,Pequenos alomoços,Produtos para barrar,Lanches doces,Doces para barrar,fr:Pâtes à tartiner,Creme para barrar de avelã,Creme para barrar de chocolate,Creme para barrar de avelã e cacau",
    countries:
      "croácia, Polynésie française, hungria, Koweït, líbano, Portugal, roménia, espanha, turquia",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs, Chocolats salés, Chocolats noirs salés",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Chocolat noir 47% et pointe de fleur de sel",
  },
  {
    categories:
      "Plant-based foods and beverages, Beverages, Plant-based beverages, Carbonated drinks, Fruit-based beverages, Artificially sweetened beverages, Sodas, Fruit sodas, Orange soft drinks, Sweetened beverages",
    countries:
      "Belgique, Bulgarie, France, Allemagne, Hongrie, Italie, Nigéria, Roumanie",
    manufacturing_places: "Belgique",
    origins: "France",
    product_name: "Fanta Naranja",
  },
  {
    categories:
      "Beverages, Carbonated drinks, Sodas, Colas, Sweetened beverages",
    countries:
      "France, Roumanie, Sénégal, Espagne, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Coca-Cola",
  },
  {
    categories: "fr:Céréales complètes",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, nantes",
    product_name: "Moelleux au chocolat🍫 noisette 🥜",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de vache, Fromages à pâte molle à croûte fleurie, Fromages pasteurisés, Fromages à pâte molle à croûte naturelle, Fromages à pâte molle à croûte lavée",
    countries:
      "Belgique, frankrijk, Luxembourg, verenigde, staten, Île de Man, Samoa américaines",
    manufacturing_places: "France, France, haute, marne",
    origins: "frankrijk",
    product_name: "Caprice des dieux",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Gâteaux, Madeleines, Madeleines natures",
    countries: "francia, suiza",
    manufacturing_places:
      "smb, saint-michel, biscuits, gâteaux, bonne, maman, 41700, contres, loir-et-cher, centre-val, Colombie, loire, France",
    origins: "francia",
    product_name: "La Madeleine Pur beurre",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Eaux, Eaux de sources, Eaux minérales, Boissons sans alcool, Eaux gazeuses, Eaux minérales naturelles, Boissons sans sucre ajouté, Eaux minérales gazeuses",
    countries:
      "France, Polynésie française, Polynésie française, nouvelle-calédonie, Curaçao, Réunion",
    manufacturing_places: "beauregard-vendon",
    origins: "France, 63460, beauregard-vendon, source, rozana",
    product_name: "Rozana",
  },
  {
    categories:
      "Cocoa and its products, Cocoa and chocolate powders, Cocoa powders, en:chocolate-powders",
    countries: "Canada, France",
    manufacturing_places: "loir-et-cher, France",
    origins: "République centrafricaine, european, Réunion",
    product_name: "Grand Arôme 32% de Cacao",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Sliced breads,Multigrain sliced breads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain de mie Bio grandes tranches céréales & graines 500g",
  },
  {
    categories:
      "Beverages and beverages preparations,Plant-based foods and beverages,Beverages,Plant-based foods,Cereals and potatoes,Dairy substitutes,Cereals and their products,Milk substitutes,Plant-based beverages,Plant-based milk alternatives,Cereal-based drinks,Oat-based drinks",
    countries:
      "France, Allemagne, Pays-Bas, Pologne, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "Hafer Barista Edition",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains grillés",
    countries: "France",
    manufacturing_places: "vervins",
    origins: "France",
    product_name: "Pain grillé Pelletier",
  },
  {
    categories:
      "Condiments, Sauces, Sauces tomate, Sauces tomates au basilic, en:Food, en:groceries",
    countries:
      "österreich, Belgique, frankreich, Allemagne, italien, Luxembourg, spanien, Suisse",
    manufacturing_places: "italien",
    origins: "italien",
    product_name: "Sauce tomate au basilic 400g",
  },
  {
    categories:
      "Beverages, Breakfasts, Cocoa and its products, Hot beverages, Cocoa and chocolate powders, Instant beverages, Non-alcoholic beverages, Cocoa powders, Chocolate powders, Cocoa powder for beverages with sugar",
    countries:
      "Belgique, France, Guadeloupe, Martinique, Nouvelle-Calédonie, Nouvelle-Calédonie, Réunion",
    manufacturing_places: "France",
    origins: "afrique, Colombie, louest",
    product_name: "Le Choco",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Sandwiches, Breads, Sliced breads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "American Sandwich Nature",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Fermentierte Lebensmittel, Fermentierte Milch, Fromages pour enfants, Käse, Milchprodukte",
    countries: "Belgique, frankreich, Allemagne, Luxembourg, Suisse",
    manufacturing_places: "France, sablé-sur-sarthe",
    origins: "France",
    product_name: "Kiri-Käse",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Breads, Rusks, Toasts, Toasted bread rolls",
    countries: "France, en:france",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Grilletines blé complet",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao",
    countries: "France, Curaçao, Réunion",
    manufacturing_places:
      "sud-ouest, France, sud-ouest, Colombie, Curaçao, France",
    origins: "noisette, Colombie, France",
    product_name: "Pâte à tartiner noisette du Lot et Garonne cacao",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Spreads, Nuts and their products, Plant-based spreads, Oilseed purees, Legume butters, Nut butters, Peanut butters, Crunchy peanut butters",
    countries: "France, Émirats arabes unis, Norvège",
    manufacturing_places:
      "kallo, foods, ltd, 2, river, view, surrey, gu17, 9ab, Émirats arabes unis, Norvège",
    origins: "émirats, arabes, Tunisie",
    product_name: "Crunchy Peanut Butter",
  },
  {
    categories:
      "Snacks, Salty snacks, Appetizers, Crackers, Puffed salty snacks, Puffed salty snacks made from potato",
    countries: "Canada, France, Guadeloupe, Suisse",
    manufacturing_places: "Canada",
    origins: "Canada",
    product_name: "Chipster",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos Fermentados,en:Dairy substitutes,Sobremesas,Sobremesas não lácteas,Alimentos fermentados não lácteos,Iogurtes não lácteos,Iogurtes de soja,en:Fruit soy yogurts,en:Mixed fruit soy yogurts,en:Tropical fruits soy yogurts",
    countries:
      "áustria, bélgica, finlândia, Polynésie française, alemanha, luxemburgo, países, baixos, Portugal, espanha",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Mango Ohne Zuckerzusatz",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Sirops, Sirops aromatisés, Boissons avec sucre ajouté",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pulco Orange Citron à diluer",
  },
  {
    categories:
      "Boissons, Boissons édulcorées, Boissons au thé, Thés glacés, Thés glacés saveur pêche, Boisson au thé aromatisée, Boisson au thé aromatisée sucrée",
    countries: "Guyane",
    origins:
      "France, Réunion, européenne, Norvège, Liban, Réunion, européenne, Saint-Barthélemy, hors, Guernesey, produit, Guyane, France, Saint-Barthélemy, Sri Lanka, Sri Lanka, Norvège, Samoa",
    product_name: "Ice tea",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fruits and vegetables based foods,Breakfasts,Spreads,Fruits based foods,Plant-based spreads,Sweet spreads,Fruit and vegetable preserves,Jams,Berry jams,Marmalades,Strawberry jams",
    countries: "Belgique, Taïwan, Croatie, France, Allemagne, Pologne",
    manufacturing_places: "d-27324, eystrup, Allemagne",
    origins: "allemagne",
    product_name: "strawberry conserve",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner sucrés, Confitures et marmelades, Confitures, Confitures de fruits rouges, Confitures de fraises",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Fraise Intense",
  },
  {
    categories:
      "Snacks, Breakfasts, Sweet snacks, Biscuits and cakes, Biscuits, Dry biscuits, Breakfast biscuit with cereals fortified with vitamins and chemical elements, en:chocolate-biscuits",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Biscuits petit déjeuner moelleux aux pépites de chocolat",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Breads, Sliced breads, Multigrain sliced breads",
    countries: "France, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Seed Sensations",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Flakes, Cereal flakes, Extruded cereals, Extruded flakes, Corn flakes",
    countries: "Émirats arabes unis, Norvège",
    product_name: "Corn Flakes",
    origins: "émirats, arabes, Tunisie",
    manufacturing_places: "émirats, arabes, Tunisie",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits aux fruits",
    countries: "France, Luxembourg, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins:
      "farine, 100%, Polynésie française, pommes, origine, Guernesey, Norvège, non-ue",
    product_name: "Goûter 4S Saveur pommes",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages à tartiner, Fromages à la crème, Fromage fouetté",
    countries: "Belgique, France",
    manufacturing_places: "22133, crehen, 22130, crehen",
    origins: "France",
    product_name:
      "Paysan Breton - Le Fromage Fouetté Madame Loïk - Nature au Sel de Guérande",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Sodas,Sodas au cola,Boissons avec sucre ajouté",
    countries: "roumanie, espagne, turquie, royaume-uni",
    manufacturing_places: "Turquie",
    origins: "turquie",
    product_name: "Coca-Cola",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Spreads, Sweet spreads, Bee products, Farming products, Sweeteners, Honeys, Liquid honeys, en:flower-honeys",
    countries: "France, Suisse, en:reunion",
    manufacturing_places: "France, pyrénées",
    origins:
      "european, Réunion, Curaçao, Liban, european, Réunion, Argentine, Ukraine, Espagne, France",
    product_name: "Tartimiel® Lune de Miel® doseur 250 g",
  },
  {
    categories:
      "Plant-based foods and beverages,Fermented foods,Dairy substitutes,Desserts,Non-dairy desserts,Non-dairy fermented foods,Non-dairy yogurts,Soy milk yogurts,Plain soy yogurts",
    countries:
      "Belgique, France, Allemagne, Royaume-Uni, Italie, Espagne, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name:
      "Alpro Joghurtalternative auf Sojabasis, Natur mit Mandeln, 500 g, 31",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits sucrés & biscuits apéritifs,Biscuits,Génoises fourrées aux fruits et nappées de chocolat",
    countries: "Belgique, France, pays-bas, espagne, Suisse",
    manufacturing_places: "Réunion, européenne, Guernesey",
    origins: "Réunion",
    product_name: "Pim's Sinaasappel",
  },
  {
    categories: "Lanches comida,Lanches doces,Biscoitos e Bolos,Biscoitos",
    countries: "Portugal, espanha",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Fibra",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Fromages, Desserts lactés, Desserts lactés fermentés, Skyrs, Fromages à la crème",
    countries: "France, allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "SKYR",
  },
  {
    categories:
      "Produits de la mer, Poissons et dérivés, Conserves, Poissons, Poissons gras, Poissons en conserve, Thons, Thons en conserve, Thons tropicaux, Thons au naturel, Thons entiers, Thons albacore, Thons albacore au naturel",
    countries: "France, japon, Curaçao, Réunion",
    manufacturing_places: "Ghana",
    origins: "France, bretagne",
    product_name: "Thon entier au naturel Albacore",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Mueslis, Céréales aux fruits à coques, Mueslis aux fruits à coque",
    countries:
      "Belgique, France, Nouvelle-Calédonie, Nouvelle-Calédonie, Espagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Muesli Croustillant Noix de pécan & noix du Brésil",
  },
  {
    categories: "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits",
    countries: "France, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Biscuits pavot citron",
  },
  {
    categories:
      "Laticínios,Sobremesas,Sobremesas de laticínios,Cremes de sobremesa,Natilhas baunilha",
    countries: "Polynésie française, alemanha, itália, Portugal, espanha",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "High Protein Pudding Vanilla",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Desserts,Desserts lactés,Desserts lactés fermentés,Desserts lactés fermentés nature,Fromages blancs",
    countries: "France",
    manufacturing_places: "France",
    origins: "lait, origine, France",
    product_name: "Calin Extra",
  },
  {
    categories:
      "Breakfasts,Spreads,Sweet spreads,fr:Pâtes à tartiner,Hazelnut spreads,Chocolate spreads,Cocoa and hazelnuts spreads",
    countries: "France",
    manufacturing_places: "France",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Nocciolata",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits au chocolat au lait, Biscuits bâtonnets au chocolat, en:Biscuits au chocolat, en:Biscuits au chocolat au lait, en:Biscuits bâtonnets au chocolat, en:Biscuits et gâteaux, en:Biscuits nappés au chocolat, en:Snacks sucrés",
    countries: "Belgique, France, espagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Mikado chocolat au lait",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Petit-déjeuners, Céréales et pommes de terre, Snacks sucrés, en:Sweet pastries and pies, Pains, Viennoiseries, Pains au lait",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain au lait bio x8 280g",
  },
  {
    categories:
      "Beverages, Carbonated drinks, Artificially sweetened beverages, Sodas, Diet beverages, Colas, Diet sodas, Diet cola soft drink, بيبسي ماكس",
    countries: "Belgique, France, Allemagne, Émirats arabes unis, Norvège",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Pepsi Max",
  },
  {
    categories: "Pufuleți",
    countries: "Autriche, germania, Roumanie, elveția",
    manufacturing_places: "Roumanie",
    origins: "Roumanie",
    product_name: "Maispops",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal,Alimentos de origen vegetal,Cereales y patatas,Cereales y derivados,Pastas alimenticias,en:Cereal pastas,Pasta seca,Pasta de trigo duro,en:Dried wholemeal pasta,Espaguetis,Pastas de trigo duro integrales,Plumas de trigo duro,Espaguetis de trigo duro,Penne,Penne Rigate",
    countries:
      "bélgica, francia, alemania, hungría, Italie, eslovenia, Espagne, suiza",
    manufacturing_places: "italie, Italie, grèce",
    origins: "grecia, Italie",
    product_name: "BARILLA PENE ολικης",
  },
  {
    categories: "Jambons blancs",
    countries: "France",
    manufacturing_places: "France",
    origins: "Réunion, européenne",
    product_name: "Jambon Le Bon Paris",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Jus et nectars, Jus de fruits, Jus de citron",
    countries:
      "Belgique, bulgarien, frankreich, Allemagne, rumänien, Suisse, vereinigtes, Belgique",
    manufacturing_places:
      "Géorgie du Sud-et-les Îles Sandwich du Sud, Maroc, Ahvenanmaa, porto, Colombie",
    origins: "italien, sizilien",
    product_name: "Jus de citron à base de concentré",
  },
  {
    categories: "Getränke,Energy-Drinks",
    countries: "Allemagne, spanien",
    manufacturing_places: "Maroc",
    origins: "österreich",
    product_name: "Red Bull",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains grillés, Petits pains grillés",
    countries: "France",
    manufacturing_places: "pågen, Syrie, malmö, suède",
    origins: "suède",
    product_name: "Krisprolls complets sans sucres ajoutés",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Cereals and their products,Puffed cereal cakes,Puffed rice cakes,Puffed wholegrain rice cakes",
    countries: "France, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Organic - Lightly Salted - Wholegrain Low Fat - Rice Cakes",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Frozen foods, Cow cheeses, en:sliced-cheeses",
    countries: "Guyane",
    product_name: "Leerdammer original 8 tranches 200g",
    origins: "Guyane",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Beverages, Snacks, Breakfasts, Sweet snacks, Cocoa and its products, Hot beverages, Cocoa and chocolate powders, Instant beverages, Cocoa powders, Chocolate powders, Cocoa powder for beverages with sugar, Sweetened beverages",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Original",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, en:Specific products, en:Products for specific diets, Pains, Produits à teneur réduite en sel, Biscottes, Biscottes pauvres en sel",
    countries:
      "France, Polynésie française, Polynésie française, Curaçao, Réunion, Suisse",
    manufacturing_places: "granville, manche, France",
    origins: "France",
    product_name: "Biscottes Pleine vie Sans sel ajouté",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Crispbreads",
    countries:
      "Belgique, finnland, Allemagne, russland, spanien, schweden, Suisse, österreich",
    manufacturing_places: "finnland",
    origins: "european, Réunion",
    product_name: "Finn Crisp Original",
  },
  {
    categories:
      "Boissons, Petit-déjeuners, Cacao et dérivés, Cacaos et chocolats en poudre, Boissons instantanées, Chocolats en poudre",
    countries: "France",
    product_name: "Nesquik",
    origins: "France",
    manufacturing_places: "France",
  },
  {
    categories: "schokoladen",
    countries: "France",
    manufacturing_places: "pontarlier, France",
    origins: "afrique, afrique, Colombie, louest",
    product_name: "Nesquik",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Boissons chaudes, Boissons à base de végétaux, Cafés, Boissons instantanées, Cafés solubles, Chicorée soluble, Boissons-a-base-de-chicoree",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, Samoa, Liban, Réunion, européenne",
    product_name: "Ricoré Original Café & Chicorée",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Eaux minérales naturelles, Boissons sans sucre ajouté",
    countries: "France, Guadeloupe, Martinique",
    manufacturing_places: "italie",
    origins: "italie",
    product_name: "Courmayeur - Eau minérale naturelle",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons sans sucre ajouté,Eaux aromatisées",
    countries: "Belgique, France",
    manufacturing_places: "France, nord, saint-amand-les-eaux",
    origins: "France, hauts-de-france, nord",
    product_name: "Pétillante saveur Citron",
  },
  {
    categories: "Tartines craquantes extrudées,Produits sans gluten",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "Tartines craquantes Sarrasin",
  },
  {
    categories: "Chocolate confectionery with dairy filling",
    countries: "France, Allemagne, Hongrie, Pologne, Roumanie, Russie, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories: "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits,Gâteaux",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, Luxembourg, maroc, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "P'tit Nature Complet",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons gazeuses, Boissons aux fruits, Sodas, Sodas aux fruits, Sodas à l'orange, Orangina",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Orangina",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines, Light margarines, Salted margarines",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Spreads, Salted spreads, Cheese spreads, Produits laitiers  Produits fermentés  Produits laitiers fermentés  Fromages, en:melted-cheese",
    countries: "frankrijk",
    manufacturing_places: "",
    origins: "",
    product_name: "La vache qui rit",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs",
    countries: "frankrijk",
    manufacturing_places:
      "dipa, 2980, avenue, julien, panchot, 66968, perpignan, France",
    origins: "pâte, Colombie, cacao, équateur",
    product_name: "Bio Chocolat Noir Equateur 85% cacao",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Cereais e Batatas,Cereais e seus produtos,Massa alimentícia,en:Cereal pastas,Massas secas,en:Durum wheat pasta,en:Dry durum wheat pasta,Penne,Penne Rigate",
    countries:
      "austrália, áustria, bélgica, bulgária, Colombie, checa, Polynésie française, alemanha, itália, japão, Portugal, roménia, espanha, suíça",
    manufacturing_places: "colombie",
    origins: "colombie",
    product_name: "Penne Rigate N°73",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Snacks,Céréales et pommes de terre,Tartines craquantes extrudées",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, Réunion, européenne",
    product_name: "Tartines craquantes sarrasin",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Eaux,Eaux de sources,Eaux minérales,Boissons sans alcool,Boissons sans sucre ajouté,Eaux gazeuses,Eaux minérales gazeuses",
    countries: "Belgique, Taïwan, France, allemagne, Curaçao, Réunion, Suisse",
    manufacturing_places: "vergèze, gard, France",
    origins: "France, occitanie, languedoc-roussillon, gard, vergèze",
    product_name: "Perrier",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages à tartiner, Fromages pour enfants, Fromages fondus",
    countries: "Sainte-Lucie, en:belgium, France",
    manufacturing_places: "sablé-sur-sarthe",
    product_name: "Kiri® Crème 12 portions",
    origins: "sainte-lucie",
  },
  {
    categories: "Germe de blé",
    countries: "France, Curaçao, Réunion",
    manufacturing_places: "revel, 31250",
    origins: "France",
    product_name: "Germe de blé",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits secs",
    countries: "Belgique, France, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "Réunion, européenne, Liban, Réunion, européenne, 434",
    product_name: "Goûter aux raisins",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Plats préparés, Légumes préparés, Ratatouilles",
    countries: "France, Allemagne, en:france",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Ratatouille",
  },
  {
    categories:
      "Dairies, Milks, Homogenized milks, Semi-skimmed milks, UHT Milks, Cow milks, Lactose-free milk",
    countries: "France, Suisse",
    manufacturing_places:
      "société, laitière, Colombie, clermont, (filiale, groupe, lactalis), Koweït, 2, rue, henri, breuil, Koweït, 60600, clermont, oise, picardie, société, laitière, Colombie, rodez, (filiale, groupe, lactalis), Koweït, rue, Colombie, Curaçao, prade, Koweït, Swaziland, Colombie, cantaranne, Koweït, 12850, onet-le-château, aveyron, midi-pyrénées, société, laitière, Colombie, vitré, (filiale, groupe, lactalis), Koweït, Lesotho, guichardières, Koweït, 35500, vitré, ille-et-vilaine, bretagne, France",
    origins: "France",
    product_name: "Lait 100 % français Matin Léger® Demi-Écrémé",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Biscoitos e Bolos,Biscoitos,Biscoitos de chocolate,Biscoitos recheados",
    countries: "Polynésie française, alemanha, espanha, Portugal",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Captain Rondo Cacao",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Biscottes,Biscottes complètes",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Biscottes Sans sucres ajoutés Blé complet",
  },
  {
    categories:
      "Boissons, Boissons édulcorées, Boissons au thé, Thés glacés, Thés glacés saveur pêche, Boissons avec sucre ajouté",
    countries: "Belgique, frankreich, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "saveur pêche ici tea",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Viennoiseries, Brioches, Brioches tranchées, Brioches-natures",
    countries: "France",
    manufacturing_places: "France",
    origins: "blé, origine, France",
    product_name: "Brioche Tranchée Recette Classique",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Desserts,Desserts lactés,Desserts lactés fermentés,Yaourts,Spécialités laitières",
    countries: "Belgique, France",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "HIPRO 15g protéines",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées",
    countries: "France",
    manufacturing_places: "lorraine, France",
    origins: "France",
    product_name: "St Hubert Omega 3 Sans Huile de Palme 500g Doux",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Snacks,Salty snacks,Appetizers,Chips and fries,Crisps,Salty snacks made from potato,Чипс",
    countries:
      "Arménie, Biélorussie, Belgique, Bosnie-Herzégovine, Curaçao, Bosnie-Herzégovine, Bulgarie, Croatie, France, Hongrie, Koweït, Maroc, Pologne, Roumanie, Russie, Serbie, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Chocolates, Dark chocolates",
    countries: "Croatie, Tchéquie, Îles Marshall, France, Espagne",
    manufacturing_places: "allemagne",
    origins: "croatie",
    product_name: "Čokoláda",
  },
  {
    categories:
      "Condiments, Sauces, Tomato sauces, Ketchup, Tomato Ketchup, Groceries",
    countries: "Émirats arabes unis, Norvège, Pays-Bas",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "Pays-Bas",
    product_name: "Tomato Ketchup",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal,Bebidas,Alimentos de origen vegetal,Bebidas de origen vegetal,Bebidas a base de frutas,Zumos y néctares,Zumos de frutas,Bebidas no alcohólicas",
    countries: "bélgica, francia, alemania, hungría, Espagne, suiza",
    manufacturing_places: "Autriche",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Légumineuses et dérivés, Matières grasses, Produits à tartiner, Fruits à coques et dérivés, Pâtes à tartiner végétales, Purées d'oléagineux, Beurres de légumineuses, Beurres de fruits à coques, Beurres de cacahuètes",
    countries: "France, Allemagne",
    manufacturing_places: "pays-bas",
    origins: "Liban, european, Réunion",
    product_name: "Peanut butter Creamy",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Lanches comida,Petiscos salgados,Nozes e seus produtos,Nozes,en:Pistachios,en:Roasted pistachios,Frutos secos com sal",
    countries:
      "bélgica, Colombie, checa, Polynésie française, alemanha, marrocos, Portugal, espanha",
    manufacturing_places: "colombie",
    origins: "colombie",
    product_name: "Pistazien gesalzen",
  },
  {
    categories:
      "Produits laitiers, Laits, en:Laits, en:Laits UHT, en:Laits demi-écrémés, en:Laits demi-écrémés UHT enrichis en vitamines, en:Laits homogénéisés, en:Laits pasteurisés, en:Lăpturi, en:Produits laitiers",
    countries: "France, Guadeloupe",
    manufacturing_places:
      "candia, (filiale, sodiaal, international), Koweït, 1040, route, nationale, Koweït, 59400, awoingt, nord, nord-pas-de-calais, France",
    origins: "France",
    product_name: "candia",
  },
  {
    categories:
      "Produits laitiers, Desserts, Desserts lactés, Desserts au chocolat, Laits emprésurés, Laits emprésurés au chocolat, Desserts lactés au chocolat",
    countries: "France",
    manufacturing_places:
      "France, bretagne, Congo, Norvège, vilaine, Saint-Christophe-et-Niévès, Samoa",
    origins: "France",
    product_name: "Emprésuré au chocolat",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Chocolates, Dark chocolates, Extra fine dark chocolates",
    countries: "France, Espagne, Allemagne",
    manufacturing_places: "France",
    origins: "alemania",
    product_name: "Czekolada gorzka 95%",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,fr:Biscuit complet au germe de blé",
    countries: "France, Guadeloupe, Maroc, Réunion, Suisse",
    manufacturing_places: "France",
    origins:
      "farine, Colombie, blé, Polynésie française, fr:germe, Colombie, blé, origine, Guernesey",
    product_name: "Biscuit complet au germe de blé",
  },
  {
    categories:
      "Plant-based foods and beverages,Fermented foods,Dairy substitutes,Desserts,Non-dairy desserts,Non-dairy fermented foods,Non-dairy yogurts,Soy milk yogurts",
    countries:
      "Autriche, Belgique, Finlande, France, Allemagne, Royaume-Uni, Espagne, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "Allemagne, Belgique",
    origins: "allemagne",
    product_name: "Alpro Fermentiertes Sojaprodukt, Ungesüßt 500g",
  },
  {
    categories:
      "Băuturi, Apa, en:Spring waters, en:Mineral waters, en:Natural mineral waters, Apă-minerală-naturală-necarbogazoasă",
    countries: "France, roumanie",
    manufacturing_places: "France",
    origins: "roumanie",
    product_name: "Apa plata",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Cereais e Batatas,Cereais e seus produtos,Cereias para pequeno-almoçco,Cereais de chocolate,Muesli,Mueslis com chocolate",
    countries: "bélgica, Polynésie française, alemanha, sérvia",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Knusper Müsli Schoko",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Mueslis",
    countries: "frankrijk, duitsland",
    manufacturing_places: "",
    origins: "",
    product_name: "Fruits, amandes et noisettes",
  },
  {
    categories:
      "Produits de la mer, Poissons et dérivés, Poissons, Préparations de poisson, Surimi, Bâtonnets de surimi",
    countries: "Guyane",
    product_name: "Le moelleux",
    origins: "Guyane",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Frais, Yaourts, Desserts lactés fermentés nature, Yaourts natures, Yaourts brassés, Yaourts à la grecque, Yaourts à la grecque nature, Yaourts brassés nature, Yaourts entiers",
    countries: "Belgique, France, Suisse",
    manufacturing_places:
      "lactalis, nestlé, ultra-frais, marques, Koweït, lnuf, marques, (filiale, groupe, lactalis), Koweït, 341, rue, françois, anicot, Koweït, 59553, cuincy, nord, nord-pas-de-calais, France",
    origins: "koweït",
    product_name: "Yaos le yaourt à la Grecque",
  },
  {
    categories:
      "Produits laitiers,Laits,Laits homogénéisés,Laits demi-écrémés,Laits UHT",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories: "Biscuits secs",
    countries: "France, Curaçao, Réunion, Suisse",
    manufacturing_places: "clamart",
    origins: "France",
    product_name:
      "Belvita original  - Biscuits petit déjeuner miel & pépites de chocolat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Produits laitiers, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Matières grasses animales, Matière grasse laitière, Produits laitiers à tartiner, Margarines, Beurres, Margarines riche en oméga 3, en:50-63-unsalted-vegetable-fat-margarine-type-high-in-omega-3",
    countries: "France",
    manufacturing_places: "54710, ludres",
    origins: "France",
    product_name: "St hubert omega 3 255 g doux",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Legumes e seus produtos,Produtos para barrar,Nozes e seus produtos,Produtos para barrar à base de plantas,Purés de óleo de sementes,Manteigas de legumes,Manteiga de frutos secos,Manteigas de amendoim",
    countries: "Portugal, espanha",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Cacahuetes 100%",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Flocons, Flocons de céréales, Céréales extrudées, Flocons extrudés, Pétales multicéréales",
    countries: "France, en:senegal",
    manufacturing_places: "France",
    origins:
      "blé, origine, France, riz, origine, hors, France, avoine, origine, hors, France",
    product_name: "Fitness Nature Céréales complètes",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Crispbreads,Rye breads",
    countries: "Royaume-Uni, Émirats arabes unis, Norvège",
    manufacturing_places: "royaume-uni",
    origins: "royaume-uni",
    product_name: "Dark Rye Crispbread",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Flatbreads,White breads,Wheat breads,Wheat flatbreads",
    countries: "France, Espagne, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Wraps",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fruits and vegetables based foods,Fruits based foods,Nuts and their products,Dried products,Nuts,Dried plant-based foods,Hazelnuts,Shelled nuts,Dried fruits,Roasted nuts,Shelled hazelnuts,Roasted hazelnuts",
    countries: "France, Pays-Bas, Pologne, Espagne",
    manufacturing_places: "allemagne",
    origins: "Turquie",
    product_name: "Haselnusskerne geröstet",
  },
  {
    categories: "fr:Crudités, en:prepared-vegetables",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Carottes râpées",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Boissons chaudes, Cafés, Café Arabica, Cafés moulus, Café Arabica moulu",
    countries: "France",
    manufacturing_places: "carros, provence, France",
    origins: "amérique, centrale",
    product_name: "Café moulu pur arabica des petits producteurs",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Flakes, Cereal flakes, Rolled flakes, Porridge, Rolled oats",
    countries: "espagne, royaume-uni",
    manufacturing_places: "",
    origins: "",
    product_name: "Quaker Rolled Oats",
  },
  {
    categories:
      "Condimentos, Salsas, Salsas de tomate, Salsas de tomate frito, en:Groceries",
    countries: "Espagne, en:romania",
    manufacturing_places: "Espagne",
    origins: "Espagne",
    product_name: "Tomate frito",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Legumes and their products,Meat alternatives,Meat analogues,Tofu,Plain tofu",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Tofoo Naked",
  },
  {
    categories:
      "Snacks,Petit-déjeuners,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits secs,Biscuit aux céréales pour petit déjeuner enrichis en vitamines et minéraux",
    countries: "Belgique, France, allemagne, pologne, Suisse, royaume-uni",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Milk Chocolate & Cereal Biscuits",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuit aux céréales et pépites de chocolat, Goûter pépites de chocolat",
    countries: "bélgica, francia, polinesia, francesa, reunión, suiza",
    manufacturing_places: "France",
    origins:
      "farine, Colombie, blé, 100%, Polynésie française, sans, traitement, Surinam, Nouvelle-Calédonie, grain, récolté, cultivé, selon, Brunei, agriculture, durable, champs, éloignés, Colombie, Curaçao, pollution, cacao, certifié, rainforest, alliance",
    product_name: "Goûter pépites de chocolat",
  },
  {
    categories:
      "Plant-based foods and beverages, Beverages, Plant-based beverages, Fruit-based beverages, Sweetened beverages, Aliments et boissons à base de végétaux, Boissons, Boissons aux fruits, Boissons avec sucre ajouté, Boissons à base de végétaux",
    countries: "France, Belgique, Suisse, en:belgium",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Multivitamin Capri-Sun",
  },
  {
    categories:
      "Plant-based foods and beverages, Beverages, Plant-based beverages, Carbonated drinks, Fruit-based beverages, Sodas, Fruit sodas, Non-alcoholic beverages, Orange soft drinks, Sweetened beverages",
    countries: "Belgique, frankreich, Allemagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Orangina",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Boissons sans alcool, Boissons sans sucre ajouté",
    countries: "Belgique, France, italie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Eau de source",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Boissons édulcorées, Sodas, Boissons light, Sodas au cola, Sodas light, Sodas au cola light",
    countries: "Belgique, France, allemagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Liban, indiqué",
    product_name: "Coca-Cola® Sans sucres",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Spreads, Plant-based spreads, Salted spreads, Yeast extract spreads",
    countries: "France, en:united-kingdom",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Marmite Yeast Extract",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines",
    countries: "Royaume-Uni",
    product_name: "Olive oil spread",
    origins: "royaume-uni",
    manufacturing_places: "royaume-uni",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Céréales et pommes de terre, Substituts de produits laitiers, Céréales et dérivés, Substituts du lait, Boissons à base de végétaux, Boissons végétales, Boissons végétales de céréales, Boissons sans sucre ajouté, Boissons à l'avoine, Boissons-vegetales-a-base-d-avoine",
    countries: "France, Île Maurice, Réunion, Suisse, en:france",
    manufacturing_places: "espagne",
    origins: "european, Réunion",
    product_name: "BjORG AVOINE OAT",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains de mie,Pains complets,Pains de mie complet",
    countries: "France",
    manufacturing_places: "vendée, pays, Colombie, Curaçao, loire, France",
    origins: "colombie",
    product_name: "Pain de mie grandes tranches Toastiligne complet",
  },
  {
    categories:
      "Bebidas,Bebidas carbonatadas,Bebidas endulzadas artificialmente,Sodas,Bebidas light,Bebidas de cola,Sodas light,Bebida de cola light",
    countries: "bélgica, francia, Espagne, suiza",
    manufacturing_places: "France",
    origins: "Îles Pitcairn, especificado",
    product_name: "Coca-Cola®",
  },
  {
    categories: "Snacks, Sweet snacks, Biscuits and cakes, Biscuits",
    countries: "France, Suisse, en:belgium",
    manufacturing_places: "France",
    origins: "blé, Polynésie française",
    product_name: "La paille d’or aux framboises",
  },
  {
    categories:
      "Imbiss,Süßer Snack,Kekse und Kuchen,Kekse,Gefüllte Kekse,Kakao Kekse gefüllt mit Vanillegeschmack,en:Kakao Kekse gefüllt mit Vanillegeschmack",
    countries: "saksa, ruotsi, Finlande",
    manufacturing_places: "finlande",
    origins: "finlande",
    product_name: "Oreo",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat",
    countries: "frankreich, spanien, Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Oreo o's",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Céréales et pommes de terre, Tartines craquantes extrudées",
    countries: "Belgique, France, Réunion",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Cracotte Gourmande",
  },
  {
    categories:
      "Produits laitiers,Laits,Laits homogénéisés,Laits demi-écrémés,Laits UHT",
    countries: "France",
    manufacturing_places: "France, dans, Nouvelle-Calédonie, loiret",
    origins: "France",
    product_name: "Lait uht 1/2 écrémé",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates,Chocolates with almonds,Dark chocolate bar,Dark chocolates with orange",
    countries: "Canada, France",
    manufacturing_places: "France, 64400, oloron-sainte-marie",
    origins: "France",
    product_name: "Excellence Noir Orange Intense Aux amandes effilées",
  },
  {
    categories:
      "Snacks,Desserts,Snacks sucrés,Biscuits et gâteaux,Gâteaux,Gâteaux au chocolat,Madeleines,Madeleines au chocolat",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "farine, Colombie, blé, Colombie, France",
    product_name: "Petites Madeleines pépites chocolat",
  },
  {
    categories:
      "Zuivelproducten,Gefermenteerde levensmiddelen,Gefermenteerde zuivelproducten,Kazen,Geitenkazen,Gepasteuriseerde kazen,es:Rulo de cabra",
    countries: "frankrijk",
    manufacturing_places: "laiterie, ribilaire, poitou, France",
    origins: "frankrijk",
    product_name: "La bûche fondante",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie blancs nature",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain EM nature sans sucres ajoutés",
  },
  {
    categories:
      "Dairies,Fats,Spreads,Spreadable fats,Animal fats,Milkfat,Dairy spread,Butters,Half-salted butter,fr:Beurres tendres",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France, normandie",
    origins: "France",
    product_name: "Le Beurre Tendre Demi-Sel Barquette",
  },
  {
    categories:
      "Imbiss, Süßer Snack, Kakao und Kakaoprodukte, Schokoladen, Bitterschokoladen, en:Dark chocolate bar with more than 70% cocoa",
    countries: "österreich, tschechien, frankreich, Allemagne",
    manufacturing_places: "allemagne",
    origins: "fabriqué, Guyane, allemagne, Allemagne",
    product_name: "Edelbitter-Schokolade mild",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Extruded cereals,Wheat bran sticks",
    countries:
      "Belgique, France, Allemagne, Guadeloupe, Italie, Pays-Bas, Espagne, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "produit, Guyane, Allemagne, Îles Pitcairn, Ukraine",
    origins: "France",
    product_name: "Céréales All Bran Kellogg's Fibre Plus",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Jus et nectars, Nectars de fruits, Nectars multifruits",
    countries: "France, Curaçao, Réunion",
    manufacturing_places: "France",
    origins: "Réunion, européenne, Norvège, hors, Réunion, européenne",
    product_name: "le bio pour toute la famille multifruit",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages de vache, Fromages pasteurisés, Fromages à tartiner, Fromages industriels, en:Uncured-soft-cheese-spreadable-around-30-40-fat-flavoured",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "lait:, France, France",
    product_name: "L'original tartare ail & fines herbes",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Petits suisses, Desserts lactés fermentés nature, Petits suisses nature",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "lait, origine, France",
    product_name: "petit yoplait",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Alternatives à la viande, Substituts de viande, Saucisses végétariennes",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Knacki Végétale",
  },
  {
    categories:
      "Snacks, Sweet snacks, Bars, Cereal bars, Nuts cereal bars, Cereal bar with almonds or hazelnuts, Chocolate cereal bars, Cereal bar with almonds, fr:Barres de cé, fr:Barres de céréales à la cacahuète",
    countries: "France",
    manufacturing_places: "espagne",
    origins: "France",
    product_name: "Sweet & salty nut chocolat noir et mélange de noix",
  },
  {
    categories: "en:Cookies",
    countries: "Portugal, espanha",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Digestive Avena",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Céréales pour petit-déjeuner,Flocons,Flocons de céréales,Flocons laminés,Flocons d'avoine",
    countries: "France, Suisse",
    manufacturing_places: "écosse",
    origins: "royaume-uni, grande, bretagne, écosse",
    product_name: "Flocons d'avoine complète",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Biscottes, Pains grillés, Biscottes complètes, Biscottes-au-gluten",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Biscottes Forme+",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats au lait, Chocolats aux noisettes",
    countries: "Algérie, France, Luxembourg",
    manufacturing_places: "Algérie",
    origins: "Algérie",
    product_name: "Lait noisettes entière",
  },
  {
    categories:
      "en:groceries,Sauces,Sauces tomate,Ketchup,Ketchup de tomate,Moutardes de Dijon",
    countries:
      "argelia, bélgica, dinamarca, francia, alemania, nueva, Nouvelle-Calédonie, noruega, reunión, Espagne, suecia, suiza, Espagne, Mexique",
    manufacturing_places: "pays-bas, elst",
    origins: "nouvelle-calédonie",
    product_name: "Tomato Ketchup",
  },
  {
    categories:
      "Aliments d'origine végétale, Aliments et boissons à base de végétaux, Céréales et pommes de terre, Pains, Pains grillés, Petits pains grillés, en:toasted-bread-rolls",
    countries: "France",
    manufacturing_places: "suède",
    origins: "suecia",
    product_name: "Krisprolls complets",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Petit-déjeuners, Produits à tartiner, Fruits et produits dérivés, Pâtes à tartiner végétales, Produits à tartiner sucrés, Confitures et marmelades, Confitures, Confitures de fruits rouges, Confitures de fraises",
    countries: "frankreich, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Confiture Fraises",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons gazeuses, Boissons aux fruits, Boissons édulcorées, Sodas, Sodas aux fruits, Sodas à l'orange",
    countries: "benín, Bulgarie, francia, alemania, Sénégal, Espagne",
    manufacturing_places: "bulgarie",
    origins: "bulgarie",
    product_name: "Безалкохолна газирана напитка с портокалов сок",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Confectioneries, Chocolates, Dark chocolates",
    countries: "Émirats arabes unis, Norvège, France, Suède",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Green and Black's Organic 70% Dark Chocolate Bar",
  },
  {
    categories:
      "Getränke, Milchprodukte, Fermentierte Lebensmittel, Fermentierte Milch, Milchgetränke, Fermentierte Getränke, Fermentierte Milchgetränke, Kefir",
    countries: "frankreich, Allemagne, Luxembourg, rumänien, spanien",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "Kalinka Kefir",
  },
  {
    categories: "Mausteet,Kastikkeet,Salaattikastikkeet,Majoneesit",
    countries:
      "Ahvenanmaa, australien, Danemark, Finlande, frankrike, Norvège, Suède, storbritannien",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "émirats, arabes, Tunisie",
    product_name: "Majoneesi",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Dried products, Dried plant-based foods, Dried products to be rehydrated, Broths, Dehydrated broths, Vegetable broths, Bouillon powders, Dehydrated vegetable bouillons, Vegetable bouillon powders, Groceries",
    countries: "France, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Vegan Bouillon powder",
  },
  {
    categories:
      "en:Beverages and beverages preparations,Alimentos e bebidas à base de plantas,Bebidas,en:Dairy substitutes,Substitutos do leite,Bebidas à base de plantas,Leites de planta,Produtos pasteurizados",
    countries:
      "áustria, bélgica, bulgária, Colombie, checa, Polynésie française, alemanha, hungria, itália, luxemburgo, países, baixos, polónia, Portugal, roménia, eslováquia, eslovénia, suécia, suíça",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Délicieuse & Tropical Coco",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates",
    countries:
      "Finlande, France, Allemagne, Italie, Lettonie, Suisse, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places:
      "übach-palenberg, heinsberg, (kreis), köln, (regierungsbezirk), nordrhein-westfalen, Allemagne",
    origins: "allemagne",
    product_name: "Chocolat noir 50% cacao",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Boissons chaudes, Cafés, Boissons instantanées, Cafés solubles",
    countries: "Belgique, France, Suisse, en:france",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "NESCAFÉ SPECIAL FILTRE L'Original Flacon de 200g",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartine & cuisson doux à tartiner et à cuire",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains complets",
    countries: "France, Suisse",
    manufacturing_places: "allemagne",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "Pain complet 3 céréales",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons gazeuses, Boissons aux fruits, Boissons édulcorées, Sodas, Sodas aux fruits, Boissons sans alcool, Boissons avec sucre ajouté",
    countries: "Belgique, France, Luxembourg, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Schweppes Agrum'",
  },
  {
    categories:
      "Beverages, Waters, Spring waters, Mineral waters, Natural mineral waters, Unsweetened beverages",
    countries: "France, maroc",
    manufacturing_places: "France",
    origins: "Maroc",
    product_name: "Eau minérale naturelle",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains grillés, Petits pains grillés",
    countries: "frankreich, Allemagne, Suisse",
    manufacturing_places: "suède",
    origins: "schweden",
    product_name: "Krisprolls",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Confectioneries,Biscuits and cakes,Biscuits and crackers,Chocolate candies,Bars,Biscuits,Candy chocolate bars,Chocolate confectioneries filled with wafer",
    countries:
      "Belgique, Bulgarie, France, Allemagne, Hongrie, Italie, Pologne, Roumanie, Serbie, Suisse",
    manufacturing_places: "Pologne",
    origins: "unspecified",
    product_name: "Bueno White",
  },
  {
    categories:
      "Dairies,Fermented foods,Fermented milk products,Desserts,Dairy desserts,Fermented dairy desserts,Yogurts,Greek-style yogurts",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins:
      "Émirats arabes unis, Norvège, donnington, wood, tf2, 7gj, telford, telford, dairy",
    product_name: "NATURAL YOGURT",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Céréales pour petit-déjeuner,Flocons,Flocons de céréales",
    countries: "royaume-uni",
    manufacturing_places: "",
    origins: "",
    product_name: "36 Wheat Bisks",
  },
  {
    categories:
      "Viandes et dérivés, Charcuteries, en:Specific products, Jambons, en:Products for specific diets, Jambons blancs, Jambon cuit supérieur, Produits à teneur réduite en sel, Jambon cuit supérieur découenné",
    countries: "France",
    manufacturing_places: "France",
    origins: "porc, origine, Guernesey, europe",
    product_name: "Jambon le bon paris",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains complets, Pains de mie complet",
    countries: "frankreich, Suisse",
    manufacturing_places: "France",
    origins: "frankreich",
    product_name: "Pain AMS complet",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Biscoitos e Bolos,Biscoitos,Biscoitos de chocolate,Bolachas,en:Stuffed wafers,en:Chocolate stuffed wafers",
    countries:
      "bélgica, finlândia, Polynésie française, alemanha, hungria, itália, luxemburgo, roménia, espanha, suécia, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Kinder Cards",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés aux fruits, Spécialités laitières, Spécialités laitières aux fruits",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, european, Réunion",
    product_name: "Hipro Myrtille",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals",
    countries: "Espagne",
    manufacturing_places: "dailycer, s.a.s., faverolles, France",
    origins: "France",
    product_name: "Avena crunchy",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Yaourts, Desserts lactés fermentés nature, Yaourts natures, Yaourts à la grecque, Yaourts à la grecque nature",
    countries: "France, Suisse, en:france",
    manufacturing_places: "Guyane, 42.005.001, Grèce",
    origins: "Guyane",
    product_name: "Yaos Yaourt à la Grecque Nature 4 x 150g",
  },
  {
    categories:
      "Boissons, Boissons édulcorées, Boissons au thé, Thés glacés, Thés glacés saveur pêche, Boissons avec sucre ajouté",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "FuzeTea Thé glacé pêche intense",
  },
  {
    categories:
      "Dairies,Fermented foods,Fermented milk products,Desserts,Dairy desserts,Fermented dairy desserts,Yogurts,Plain fermented dairy desserts,Plain yogurts",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Organic Natural Yoghurt",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke, Pflanzliche Lebensmittel, Frucht- und gemüsebasierte Lebensmittel, Gemüsebasierte Lebensmittel, Tomaten und Tomatenprodukte, Passierte Tomaten",
    countries: "bulgarien, frankreich, Allemagne, Suisse, en:germany",
    manufacturing_places: "italien",
    origins: "unspecified",
    product_name: "Passierte Tomaten",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Jus et nectars, Jus de fruits, Jus multifruits, Boissons avec sucre ajouté",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pago Ace - Orange - Carotte - Citron",
  },
  {
    categories:
      "Plats préparés, Plats à base de semoule, Taboulés, Taboulés orientaux",
    countries: "France",
    manufacturing_places: "France",
    origins: "blé, Polynésie française",
    product_name: "Mon Taboulé oriental",
  },
  {
    categories:
      "Botanas,Snacks dulces,Cacao y sus productos,Chocolates,Chocolates negros,en:Dark chocolate bar with more than 70% cocoa",
    countries: "francia, alemania, Italie, Espagne",
    manufacturing_places: "italie",
    origins: "Équateur",
    product_name: "NOIR DEGUSTATION 70% CARAMEL",
  },
  {
    categories:
      "Dairies, Fats, Spreads, Spreadable fats, Animal fats, Milkfat, Dairy spread, Butters, fr:beurre doux à 60 % MG",
    countries: "France, Curaçao, Réunion, Allemagne",
    manufacturing_places: "elvir, fr-50890, condé-sur-vire",
    origins: "origine, Guernesey",
    product_name: "beurre",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Céréales et dérivés,Semoules de céréales,Semoules de blé,Semoules de blé dur,Blé dur précuit entier",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "L'original",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal, Alimentos de origen vegetal, Condimentos, Untables, Untables vegetales, Salsas, Salsas para mojar, Guacamoles",
    countries: "Roumanie, Espagne",
    manufacturing_places: "roumanie",
    origins: "roumanie",
    product_name: "Guacamole",
  },
  {
    categories:
      "Snacks, Breakfasts, Sweet snacks, Biscuits and cakes, Biscuits, Dry biscuits, Breakfast biscuit, Oatmeal cookies",
    countries: "France",
    manufacturing_places: "France",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Biscuits BIO NUTRI + à l'avoine complet",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Cacao et dérivés,Chocolats,Chocolats noirs",
    countries: "France, Espagne",
    manufacturing_places: "gers",
    origins: "Madagascar, vallée, Îles Pitcairn, sambirano",
    product_name: "Chocolat noir 85% Madagascar",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales aux fruits, Mueslis, Mueslis aux fruits",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, italie, Luxembourg, espagne, Suisse",
    manufacturing_places: "angleterre",
    origins: "Belgique",
    product_name: "Muesli bio 36% fruits, noix & graines",
  },
  {
    categories: "Snacks, Salty snacks, Appetizers, Meals, Crackers",
    countries: "France, hongrie, roumanie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "TUC Original",
  },
  {
    categories: "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Petit brun extra",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Goûter aux écorces confites",
    countries: "francia",
    manufacturing_places: "France",
    origins: "francia",
    product_name: "Goûter aux écorces confites",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Tartines",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartines Bio quinoa & graines 450g",
  },
  {
    categories:
      "Condiments, Sauces, Tomato sauces, Ketchup, Tomato Ketchup, Groceries",
    countries: "Maroc, Émirats arabes unis, Norvège, Royaume-Uni",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "émirats, arabes, Tunisie",
    product_name: "Tomato Ketchup",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Eaux,Eaux de sources,Eaux minérales,Boissons sans sucre ajouté,Eaux gazeuses,Eaux minérales gazeuses",
    countries: "France",
    manufacturing_places: "vergèze, France",
    origins: "France, occitanie, languedoc-roussillon, gard, vergèze",
    product_name: "Perrier fines bulles",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal,Alimentos de origen vegetal,Pastas alimenticias,Pasta seca,Espaguetis,de:Vollkorn Hartweizen,en:Aliments d'origine végétale,en:Aliments et boissons à base de végétaux,en:Céréales et dérivés,en:Céréales et pommes de terre,en:Pâtes alimentaires,en:Pâtes alimentaires de céréales,en:Pâtes de blé dur,en:Pâtes de blé dur complet,en:Pâtes sèches,en:Spaghettis de blé dur,en:Spaghettis de blé dur complet",
    countries:
      "Autriche, bélgica, Brésil, francia, alemania, Espagne, suiza, fr:belgien, fr:deutschland, fr:frankreich, fr:schweiz",
    manufacturing_places: "italie, grèce",
    origins: "autriche",
    product_name: "Pâtes spaghetti au blé complet integral 500g",
  },
  {
    categories:
      "Beverages,Cocoa and its products,Cocoa and chocolate powders,Instant beverages,Cocoa powders,Chocolate powders,Cocoa powder for beverages with sugar fortified with vitamins",
    countries: "Maroc, Espagne",
    manufacturing_places: "maroc",
    origins: "maroc",
    product_name: "Nesquik",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Surgelés, Céréales pour petit-déjeuner, Céréales aux fruits, Mueslis, Mueslis aux fruits",
    countries: "francia",
    manufacturing_places: "",
    origins: "",
    product_name: "Granola au chocolat et framboise",
  },
  {
    categories: "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits",
    countries: "frankrijk",
    manufacturing_places:
      "biscuiterie, Colombie, labbaye, route, Îles Pitcairn, Svalbard et Jan Mayen, 61700, lonlay, labbaye, France",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "Bio biscuits sésame",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Condiments, Sauces, Pasta sauces, Pestos, Green pestos, fr:Pesto Vert, en:basil",
    countries: "France, Roumanie, Suisse",
    manufacturing_places: "italie",
    origins: "Italie",
    product_name: "Pesto Basilic extra frais",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Confectioneries,Chocolate candies,Bars,Candy chocolate bars,Caramel chocolate bars,Caramel chocolate cookie bars",
    countries: "Belgique, Bulgarie, France, Allemagne, Hongrie, Italie, Maroc",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Twix Twin",
  },
  {
    categories: "Sel marin aux plantes et légumes frais",
    countries: "France",
    manufacturing_places: "fabriqué, Guyane, France, 68015, colmar",
    origins: "Liban, european, Réunion, european, Réunion",
    product_name: "sel marin plantes et légumes",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Plant-based creams, Plant-based creams for cooking, Coconut milks and creams, en:milk-substitutes",
    countries: "France, Suisse, world",
    manufacturing_places: "indonésie",
    origins: "Indonésie",
    product_name: "Lait de coco",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Snacks,Sweet snacks,Nuts and their products,Bars,Nut bars",
    countries: "Belgique, Tchéquie, Îles Marshall, France, Pays-Bas, Espagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Barres de fruits secs & noix Myrtilles",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons au thé, Thés glacés, Thés glacés saveur pêche, Boissons avec sucre ajouté, The noir saveur peche",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Thé noir saveur pêche blanche",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Meat alternatives, Vegetarian patties, Cereals and vegetables patties",
    countries: "France",
    manufacturing_places: "France, sud-ouest",
    origins: "France, european, Réunion",
    product_name: "Les Galettes Boulgour & Quinoa - Tomate & Paprika",
  },
  {
    categories:
      "Snacks, Sweet snacks, Biscuits and cakes, Biscuits and crackers, Biscuits, Cakes, Dry biscuits, Biscuit with reduced sugar, fr:Biscuits édulcorés, en:shortbread-cookies",
    countries: "Belgique, France, thaïlande",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Gerblé - Sugar Free Coconut Cookie, 132g (4.7oz)",
  },
  {
    categories: "Condiments, Salts, fr:sels-fins",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "sel",
  },
  {
    categories:
      "Botanas,Snacks dulces,Cacao y sus productos,Dulces,Dulces de chocolate,Chocolates,Chocolates con leche,Chocolates con almendras,en:Flavoured chocolates,en:Flavoured milk chocolates,Barra de chocolate con leche y nougat,en:Swiss chocolates",
    countries:
      "Australie, bélgica, Bolivie, dinamarca, finlandia, francia, alemania, Italie, noruega, polonia, Espagne, suecia, suiza, tailandia",
    manufacturing_places: "suiza",
    origins: "Liban, european, Réunion, suiza",
    product_name: "Toblerone",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits fourrés",
    countries: "France, Curaçao, Réunion",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Multicéréales goût chocolat",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Eaux, Eaux de sources, Eaux minérales, Eaux gazeuses, Eaux minérales naturelles, Eau minérale naturelle gazéifiée",
    countries: "Belgique, France",
    manufacturing_places: "Belgique",
    origins: "italie",
    product_name: "S.PELLEGRINO",
  },
  {
    categories: "Condiments, Sauces, Sauces tomate, Ketchup",
    countries: "France, Réunion",
    manufacturing_places: "France",
    origins: "France",
    product_name: "AMORA Ketchup Flacon Souple 550g",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats au lait",
    countries:
      "Bulgarie, Finlande, France, Allemagne, Hongrie, Pologne, Roumanie, Slovénie, Espagne, Estonie",
    manufacturing_places:
      "solent, gmbh, &, co., Kirghizistan, david-hausmann-straße, 1-25, d-52531, übach-palenberg",
    origins: "kirghizistan",
    product_name: "Milk Chocolate",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons instantanées, Chicorée soluble, Chicorée et café en poudre soluble",
    countries: "France, Suisse, Luxembourg",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Chicorée Café",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Spreads, Cheeses, Salted spreads, Cheese spreads, Cream cheeses",
    countries: "Royaume-Uni",
    product_name: "Philadelphia",
    origins: "royaume-uni",
    manufacturing_places: "royaume-uni",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal, Alimentos de origen vegetal, Desayunos, Cereales y patatas, Cereales y derivados, Cereales para el desayuno, Copos, Copos de cereales, en:Extruded cereals, en:Extruded flakes, Mezclas de copos de cereales",
    countries: "France, Espagne",
    manufacturing_places: "France",
    origins: "germania",
    product_name: "Special Flakes Classic",
  },
  {
    categories: "Nut bars",
    countries: "Belgique, France, Espagne, fr:belgica, fr:francia",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "NAKD Cacahuètes - 140g (4x1p)",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Mueslis,Cereals with nuts,Mueslis with nuts,Nuts",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Simply nutty muesli",
  },
  {
    categories:
      "Brote, Getreide und Kartoffeln, Pflanzliche Lebensmittel, Pflanzliche Lebensmittel und Getränke, Roggenbrote, Vollkornbrote, en:rye-breads",
    countries:
      "njemačka, Slovénie, španjolska, ujedinjeno, kraljevstvo, Croatie",
    manufacturing_places: "slovénie",
    origins: "slovénie",
    product_name: "Roggenvollkornbrot",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Condiments, Spreads, Plant-based spreads, Salted spreads, Sauces, Dips, Hummus, Classic hummus",
    countries: "francia, Espagne, suiza",
    manufacturing_places: "espagne",
    origins: "francia",
    product_name: "Houmous extra - Pois chiches français & graines de sésame",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Céréales pour petit-déjeuner,Flocons,Flocons de céréales,Flocons laminés,Flocons d'avoine",
    countries:
      "Belgique, France, grèce, Guadeloupe, italie, maroc, pologne, espagne, roumanie",
    manufacturing_places: "allemagne",
    origins: "Réunion, européenne",
    product_name: "Oat flakes",
  },
  {
    categories:
      "Cacao et dérivés,Cacaos et chocolats en poudre,Cacaos en poudre",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Cacao en Poudre Non Sucré",
  },
  {
    categories: "Condiments, Sauces, Mayonnaises, Groceries",
    countries: "France, Royaume-Uni, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Real Mayonnaise",
  },
  {
    categories:
      "Beverages, Dairies, Fermented foods, Desserts, Fermented milk products, Dairy desserts, Dairy drinks, Fermented dairy desserts, Fermented drinks, Fermented milk drinks, Kefir yogurts, Kefir",
    countries: "France",
    origins: "Émirats arabes unis, Norvège",
    product_name: "Yeo Valley Organic kefir natural fermented yogurt",
    manufacturing_places: "France",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits au chocolat noir",
    countries: "frankrijk",
    manufacturing_places:
      "biscuiterie, Colombie, labbaye, 61700, route, Îles Pitcairn, Svalbard et Jan Mayen, lonlay, labbaye, France",
    origins: "europese, unie, en:non, european, Réunion",
    product_name: "Carres graines pepites de chocolat",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits fourrés",
    countries: "France, Suisse",
    manufacturing_places: "pologne, 37-500, jaroslaw",
    origins: "France",
    product_name: "Chamonix",
  },
  {
    categories: "Alternatives à la viande, Galettes végétariennes",
    countries: "France",
    manufacturing_places: "France",
    origins: "blé, france/italie, sarrasin, emmental, Guernesey",
    product_name: "Galettes Boulgour & Sarrasin à l'Emmental",
  },
  {
    categories:
      "Beverages and beverages preparations,Beverages,Dairies,Dairy drinks,Flavoured milks,Chocolate milks,Dietary supplements,Bodybuilding supplements,Protein shakes",
    countries: "Chypre, Danemark, Pologne",
    manufacturing_places: "chypre",
    origins: "chypre",
    product_name: "High Protein Drink Chocolate Flavour",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales aux fruits, Mueslis, Mueslis aux fruits",
    countries: "francia",
    manufacturing_places: "pologne",
    origins: "europa",
    product_name: "Granola aux fruits",
  },
  {
    categories:
      "Plats préparés, Plats à base de semoule, Taboulés, Taboulés orientaux, Taboulés à l'huile d'olive",
    countries: "Belgique, France, espagne",
    manufacturing_places:
      "martinet, (filiale, fpm), Koweït, 24, rue, Îles Pitcairn, limousin, Koweït, zone, industrielle, Koweït, 38070, saint-quentin-fallavier, isère, rhône-alpes, France",
    origins: "koweït",
    product_name: "Taboulé à l’orientale",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Substituts de produits laitiers, Substituts du lait, Fruits à coques et dérivés, Boissons à base de végétaux, Boissons végétales, Boissons végétales de fruits à coque, Laits d'amande, Laits d'amande natures sucrés",
    countries: "France, Maroc, Réunion, Suisse",
    manufacturing_places: "italie",
    origins: "France",
    product_name: "Bjorg amande",
  },
  {
    categories:
      "Snacks, Snacks salés, Amuse-gueules, Biscuits apéritifs, Bretzels",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sticks et bretzels d'Alsace",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Fromages,Fromages à pâte pressée cuite,Fromages de France,Fromages au lait cru,Comté,en:Aoc-cheeses,en:Labeled-cheeses,Produits-aoc,Produits-labellises",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "France, Montserrat, &, terroirs, vevy",
    origins: "France, massif, jurassien",
    product_name: "Comté",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Spreadable fats, Vegetable fats, Margarines",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Flora Vegan",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Biscottes, Pains grillés",
    countries: "France",
    manufacturing_places: "France, granville, vervins",
    origins: "France",
    product_name: "Biscotte gout brioche heudebert",
  },
  {
    categories: "Condiments,Sauces,Barbecue sauces",
    countries: "Belgique, Estonie, France, Hongrie, Espagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Classic Barbecue - Smokey & Rich",
  },
  {
    categories: "Condiments,Sauces,Salad dressings,Mayonnaises,Groceries",
    countries: "Australie, France, Émirats arabes unis, Norvège",
    manufacturing_places: "australie",
    origins: "australie",
    product_name: "Real Mayonnaise",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Petit-déjeuners, Produits à tartiner, Fruits et produits dérivés, Pâtes à tartiner végétales, Produits à tartiner sucrés, Confitures et marmelades, Confitures, Confitures d'abricot",
    countries: "France, Suisse, en:us",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Confiture Abricot INTENSE",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat, Pépites de céréales croustillantes, Pépites de céréales au chocolat",
    countries: "France, Curaçao, Réunion, Suisse",
    manufacturing_places: "royaume-uni",
    origins: "France",
    product_name: "Country Crisp - Chocolat noir 70% cacao",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains plats, Pains blancs, Pains de blé, Tortillas de blé",
    countries: "francia, Espagne",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "6 Wraps blé complet",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Eaux minérales naturelles, Boissons sans sucre ajouté",
    countries: "Belgique, France",
    manufacturing_places: "Belgique",
    origins: "France",
    product_name: "CONTREX eau minérale naturelle 1L",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Desserts,Desserts lactés,Desserts lactés fermentés,Desserts lactés fermentés aux fruits,Skyrs,Skyrs aux fruits",
    countries: "France, allemagne",
    manufacturing_places: "slovénie",
    origins: "slovénie",
    product_name: "Siggi's Skyr framboise",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat, Céréales extrudées, Boules de céréales au chocolat",
    countries: "France, Guadeloupe, Réunion, Sénégal, Espagne, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "NESTLE NESQUIK Céréales 450g",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao",
    countries:
      "Belgique, France, Guyane, Polynésie française, Guadeloupe, Italie, Luxembourg, Réunion, Suisse",
    manufacturing_places: "italie",
    origins: "Belgique",
    product_name: "Nocciolata Pâte À Tartiner Au Cacao Et Noisettes",
  },
  {
    categories: "Boissons, Eaux",
    countries: "Roumanie, en:romania",
    manufacturing_places: "roumanie",
    origins: "roumanie",
    product_name: "Bucovina Apa Plata",
  },
  {
    categories: "Sweeteners, Sugars, Brown sugars, Cane sugar, fr:Cassonades",
    countries: "Guyane",
    product_name: "Cassonade pure canne",
    origins: "Guyane",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Desserts, Dairy desserts, Fermented dairy desserts, Yogurts, Cow milk yogurts, Greek-style yogurts",
    countries: "Grèce, Émirats arabes unis, Norvège",
    manufacturing_places: "grèce",
    origins: "Luxembourg",
    product_name: "5% Greek Yogurt",
  },
  {
    categories:
      "Lanches comida,Sobremesas,Lanches doces,Biscoitos e Bolos,Bolos,en:Chocolate soft cake",
    countries:
      "bélgica, bulgária, Polynésie française, alemanha, hungria, itália, méxico, marrocos, Portugal, roménia, espanha, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Cacao",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits sablés, Biscuits feuilletés, Palmiers",
    countries:
      "Belgique, France, Guadeloupe, nouvelle-calédonie, Curaçao, Réunion, Luxembourg",
    manufacturing_places: "Belgique",
    origins: "France, Belgique",
    product_name: "Palmito L'original",
  },
  {
    categories: "Bebidas não adoçadas,Bebidas de aveia,en:UHT oat based drinks",
    countries: "Portugal, espanha",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Bebida de Avena",
  },
  {
    categories:
      "Beverages and beverages preparations,Beverages,Cocoa and its products,Beverage preparations,Cocoa and chocolate powders,Instant beverages,Chocolate powders",
    countries: "France",
    manufacturing_places: "France",
    origins:
      "France, République centrafricaine, fr:loir, Norvège, cher, fr:unión, europea",
    product_name: "Grand Arôme moins de sucre",
  },
  {
    categories:
      "Condiments, Sauces, Tomato sauces, Ketchup, Tomato Ketchup, fr:Groceries",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Ketchup 5 Ingrédients",
  },
  {
    categories:
      "Cubic-appetizer-cheese, Fromages, Fromages de chèvre, Produits fermentés, Produits laitiers, Produits laitiers fermentés, en:goat-cheeses",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, noyal-sur-vilaine, ille-et-vilaine, bretagne",
    product_name: "Petit Billy Moulé à la main",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Eaux minérales naturelles, en:Boissons, en:Eaux, en:Eaux de sources, en:Eaux minérales, en:Eaux minérales naturelles",
    countries: "France, Maroc, maroc",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sidi Ali",
  },
  {
    categories: "Charcuterie-de-volaille,Viande,chickens",
    countries: "France",
    origins: "Réunion, européenne",
    product_name: "Blanc de poulet",
    manufacturing_places: "France",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, en:Biscuits et gâteaux, en:Snacks sucrés",
    countries:
      "France, en:belgium, en:reunion, en:new-caledonia, en:french-polynesia",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Bastogne",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Vetten,Plantaardige vetten,Olijfboomproducten,Plantaardige oliën,Olijfoliën,Extra vierge olijfoliën,Virgin olijfoliën,en:Olive oil blends,fr:Extra vierge olijfoliën,fr:Olijfboomproducten,fr:Olijfoliën,fr:Plantaardige levensmiddelen,fr:Plantaardige levensmiddelen en dranken,fr:Plantaardige oliën,fr:Plantaardige vetten,fr:Vetten",
    countries: "frankrijk, polen, roemenië",
    manufacturing_places: "France",
    origins: "spanje, tunesië",
    product_name: "Huile d'olive vierge extra",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales aux fruits, Mueslis, Mueslis aux fruits",
    countries: "France, Suisse",
    manufacturing_places: "angleterre",
    origins: "France",
    product_name: "Muesli Bio Superfruits",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Cereais e Batatas,Cereais e seus produtos,Massa alimentícia,Massas secas,Fusilli",
    countries:
      "austrália, áustria, bélgica, bulgária, croácia, Colombie, checa, Polynésie française, alemanha, itália, luxemburgo, Portugal, Singapour, suíça",
    manufacturing_places: "colombie",
    origins: "colombie",
    product_name: "Fusilli 98",
  },
  {
    categories:
      "Snacks,Snacks salés,Amuse-gueules,Chips et frites,Chips-produits-aperitifs",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Natur' & Bon - Chips de lentilles saveur fines herbes",
  },
  {
    categories: "Cacao et dérivés,Chocolats noirs,Chocolats noirs en tablette",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "Suisse",
    origins: "Liban, european, Réunion, pérou",
    product_name: "Noir equitable 85% Pérou",
  },
  {
    categories:
      "Snacks, Sweet snacks, Biscuits and cakes, Biscuits, Chocolate biscuits, Filled biscuits",
    countries: "France, Italie",
    manufacturing_places: "France",
    origins: "Îles Pitcairn, especificado, Italie",
    product_name: "Ferrero - Nutella Biscuits Tube, 166g (5.9oz)",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fruits and vegetables based foods,Fruits based foods,Nuts and their products,Dried products,Nuts,Dried plant-based foods,Dried fruits,Dried mixed fruits",
    countries:
      "bulgária, croácia, Polynésie française, alemanha, polónia, roménia, sérvia, espanha",
    manufacturing_places: "52531, übach-palenberg, Allemagne",
    origins: "allemagne",
    product_name: "",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits,Oatmeal cookies",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Nutri+ avoine chocolat",
  },
  {
    categories:
      "Zuivelproducten,Gefermenteerde levensmiddelen,Gefermenteerde zuivelproducten,Kazen,Koemelkkazen,Italiaanse kazen,Geknede kazen,Mozzarellas,Koemozzarellas",
    countries:
      "frankrijk, duitsland, italië, Japon, spanje, zwitserland, verenigd, Belgique",
    manufacturing_places: "milan",
    origins: "italië",
    product_name: "Mozzarella",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Surgelés, Boissons à base de végétaux, Boissons aux fruits, Boissons à la canneberge, Boissons avec sucre ajouté",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Cranberry",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de France, Fromages de chèvre, Fromages à pâte molle à croûte naturelle, Bûche de chèvre",
    countries: "France",
    manufacturing_places: "poitou-charentes, France",
    origins: "France",
    product_name: "Sainte-Maure",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages",
    countries: "France",
    manufacturing_places: "allemagne",
    origins: "France",
    product_name: "Mon petit plaisir",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fruits and vegetables based foods, Vegetables based foods, Meals, Vegetables, Prepared vegetables, Carrots, Carrot salads, Grated carrots, Seasoned grated carrots",
    countries: "France, en:france",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Carottes râpées",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Céréales et dérivés, Crêpes et galettes, Galettes de céréales soufflées, Galettes, Galettes de riz soufflé, Galettes de riz au chocolat noir",
    countries: "bélgica, francia, alemania, Italie, luxemburgo, Espagne",
    manufacturing_places:
      "borgo, vercelli, vercelli, (provincia), piamonte, Italie",
    origins: "italie",
    product_name: "galettes riz chocolat noir",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de vache, Fromages à pâte pressée non cuite, Fromages pasteurisés",
    countries: "France",
    manufacturing_places: "craon",
    origins: "France",
    product_name: "CHAUSSEE AUX MOINES 340g",
  },
  {
    categories:
      "Snacks, Desserts, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits fourrés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Fourrés chocolat lait noisettes",
  },
  {
    categories:
      "Boissons, Boissons au thé, Thés glacés, Boissons avec sucre ajouté",
    countries: "France, en:reunion",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Ice Tea Pêche",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Boissons chaudes, Boissons à base de végétaux, Cafés, Boissons instantanées, Boissons sans alcool, Cafés solubles, Chicorée soluble, Chicoree",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "RICORÉ® aux céréales et à la chicorée solubles Boîte 250g",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Matières grasses végétales, Huiles, Mélanges d'huiles, Huiles aromatisées, en:combined-oil-blended-vegetable-oils",
    countries: "France, Guadeloupe, Curaçao, Réunion, Suisse, Allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Huile Isio 4",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Cookies, Cookies au chocolat",
    countries: "bélgica, francia, luxemburgo, suiza",
    manufacturing_places: "",
    origins: "",
    product_name: "Petit Cookies 🍪 Pépites de chocolat 🍫",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Céréales et dérivés, Galettes de céréales soufflées, Galettes de riz soufflé, Galettes de riz complet soufflé",
    countries: "France, Suisse",
    manufacturing_places: "Belgique",
    origins: "european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Galettes riz complet Bio",
  },
  {
    categories:
      "Snacks,Zoete snacks,Koekjes en cakes,Koekjes,Chocolade koekjes,Pure chocoladebiscuits,Petit Beurre,en:Biscuit with a chocolate bar covering,en:Biscuit with a dark chocolate bar covering,en:Butter biscuit with chocolate",
    countries: "frankrijk, duitsland, Réunion, spanje, zwitserland",
    manufacturing_places: "Réunion",
    origins: "blé, origine, France",
    product_name: "Petit écolier chocolat noir",
  },
  {
    categories:
      "Beverages,Carbonated drinks,Sodas,Colas,Cola with sugar,Sweetened beverages",
    countries: "France, Roumanie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pepsi",
  },
  {
    categories:
      "fr:plats-préparés,fr:plats-à-base-de-semoule,fr:taboulés,fr:taboulés-orientaux,fr:frais,en:plats-a-base-de-semoule,en:plats-prepares,en:plats-prepares-frais,en:taboules,en:taboules-a-l-huile-d-olive,en:taboules-frais,en:taboules-orientaux",
    countries: "France, en:france",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Mon Taboulé Oriental",
  },
  {
    categories:
      "Condimentos, condimentos, condimentos, Salsas, salsas, salsas de tomate, salsas de tomate, Salsas de tomate, Kétchups",
    countries: "Espagne",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Ketchup",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Snacks, Condiments, Sweet snacks, Cocoa and its products, Culinary plants, Aromatic plants, Aromatic-herbs, Chocolates, Dark chocolates, Mint, Filled chocolates, Dark chocolate filled with mint confectionery",
    countries:
      "Allemagne, France, Finlande, Espagne, Bulgarie, Lituanie, Tchéquie, Îles Marshall",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Mints",
  },
  {
    categories:
      "Dairies, Creams, UHT Creams, Unfermented creams, fr:Crèmes légères, Crème de lait semi-épaisse, Crèmes UHT",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Matières grasses,Matières grasses végétales,Produits de l'olivier,Huiles,Huiles d'olive,Huiles d'olive vierges extra,Huiles d'olive vierges",
    countries:
      "France, Polynésie française, Polynésie française, allemagne, Martinique, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "Réunion, européenne",
    product_name: "Huile d'olive",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Confiseries, Confiseries chocolatées, Bonbons de chocolat, Fruits à coques enrobés de chocolat, Cacahuètes au chocolat",
    countries: "Belgique, France, allemagne, italie, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "M&M's peanut",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Surgelés, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pâte à tartiner Milka aux noisettes",
  },
  {
    categories:
      "Boissons, Eaux, Produits de montagne, Eaux de sources, Eaux minérales, Boissons sans alcool, Boissons sans sucre ajouté, Eaux de montagne",
    countries: "France, Guadeloupe",
    manufacturing_places: "Nouvelle-Calédonie, Monténégro, dore",
    origins: "Nouvelle-Calédonie, Monténégro, dore, France",
    product_name: "eau de source",
  },
  {
    categories: "Snacks, Snacks sucrés, Barres",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "LU - Grany pommes",
  },
  {
    categories:
      "Breakfasts,Spreads,Sweet spreads,fr:Pâtes à tartiner,Hazelnut spreads,Chocolate spreads,Cocoa and hazelnuts spreads",
    countries:
      "Belgique, France, Guadeloupe, Luxembourg, Maroc, Réunion, Suisse",
    manufacturing_places: "hollande, pays-bas",
    origins: "Belgique",
    product_name: "Pâte à tartiner chocolat noisette",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines, Sunflower oil spread",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Vitalite Dairy Free Spread",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Snacks,Cereals and potatoes,Extruded crispbreads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Cracotte fibres",
  },
  {
    categories:
      "Condiments,Sauces,Tomato sauces,Ketchup,Ketchup de tomate,Sauces tomate",
    countries: "France, Allemagne, Belgique, espagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Ketchup zéro sel ajouré, 70% moins de sucres",
  },
  {
    categories:
      "Petit-déjeuners,Produits à tartiner,Produits à tartiner sucrés,Produits de la ruche,Produits d'élevages,Édulcorants,Miels,Miels français,Miels crémeux,Miel-de-fleurs-de-france,Miels de fleurs",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Miel crémeux français & responsable",
  },
  {
    categories:
      "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits,Biscuits au chocolat,Biscuits au chocolat au lait,Biscuits sablés,Sablés nappés de chocolat,Sablés au chocolat",
    countries: "France",
    manufacturing_places: "royaume-uni",
    origins: "France",
    product_name: "Sablés chocolat",
  },
  {
    categories:
      "Snacks,Desserts,Sweet snacks,Biscuits and cakes,Biscuits and crackers,Biscuits,Cakes,Chocolate biscuits,Jaffa cakes",
    countries: "Belgique, France, Maroc, Espagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Pim's - Framboise",
  },
  {
    categories:
      "Lácteos, Comidas fermentadas, Postres, Productos fermentados de la leche, Postres lácteos, en:Fermented dairy desserts, en:Kefir yogurts",
    countries: "Espagne",
    manufacturing_places: "espagne",
    origins: "leche, Colombie, Espagne",
    product_name: "Kéfir natural sabor suave",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Chocolates, Dark chocolates, Dark chocolates with raspberries",
    countries: "France, italie, Portugal, espagne, Suisse, royaume-uni",
    manufacturing_places: "France",
    origins: "France",
    product_name:
      "Chocolat noir dégustation aux éclats de framboise (70% cacao)",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Petit-déjeuners, Produits à tartiner, Fruits et produits dérivés, Pâtes à tartiner végétales, Produits à tartiner sucrés, Confitures et marmelades, Confitures, Confitures de fruits rouges, Confiture de fruits allégée en sucres, Confitures de fraises",
    countries: "France",
    manufacturing_places: "f-46130, biars, Surinam, cere, 5",
    origins: "Surinam",
    product_name: "Confiture fraise -30% de sucres",
  },
  {
    categories:
      "Snacks, Snacks salés, Amuse-gueules, Biscuits apéritifs, Biscuits apéritifs soufflés, en:Apéritif, en:Biscuits apéritifs, en:Snacks salés",
    countries: "frankrijk",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "émirats, arabes, Tunisie",
    product_name: "Snack poppé T&H",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Breads, Sliced breads, Multigrain sliced breads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories: "Condiments, Sauces, Tomato sauces, Ketchup, Groceries",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Ketchup",
  },
  {
    categories:
      "Plant-based foods and beverages,Dairies,Dairy substitutes,Desserts,Dairy desserts,Non-dairy desserts,Chocolate desserts,Sweet mousses,Dairy Mousses,Chocolate mousses,Vegan chocolate mousses",
    countries: "France",
    manufacturing_places: "Swaziland, 46130, biars, Surinam, cère, France",
    origins: "Swaziland",
    product_name: "Mousse au chocolat vegetal au lait de coco",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal,Alimentos de origen vegetal,Cereales y patatas,Panes,Panes planos,Panes especiales,Panes blancos,Panes de trigo,Panes integrales",
    countries: "Espagne",
    manufacturing_places: "valencia, Espagne",
    origins: "espagne",
    product_name: "Tortillas de trigo integrales",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Cereals with fruits, Mueslis, Mueslis with fruits",
    countries: "Pays-Bas, en:united-kingdom",
    manufacturing_places: "pays-bas",
    origins: "pays-bas",
    product_name: "Simply Delicious Muesli",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain complet",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Meals, Prepared vegetables, Celeriac in remoulade sauce",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Céleri rémoulade au fromage blanc",
  },
  {
    categories:
      "Plant-based foods and beverages,Beverages,Plant-based beverages,Instant beverages,Instant coffee substitutes,Instant chicory,it:caffè solubile",
    countries: "France, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France, Inde, fr:café, non-ue",
    product_name: "RICORE au Lait, Café & Chicorée, Boîte 400g",
  },
  {
    categories: "Édulcorants, Sucres, Sucres roux, Sucres de canne, Cassonades",
    countries: "frankreich, Allemagne, Suisse",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "cassonade",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Viennoiseries, Brioches, Brioches tranchées",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Brioche tranchée à la crème fraîche",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Dairies, Fermented foods, Snacks, Fermented milk products, Salty snacks, Appetizers, Cheeses, Crackers, Salty snacks puff pastry",
    countries: "ungarn, rumänien, spanien, fr:francia, Allemagne",
    manufacturing_places: "Roumanie",
    origins: "Roumanie",
    product_name: "Pufuleți",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Eaux, Eaux de sources, Eaux minérales, Eaux gazeuses, Eaux minérales naturelles, Eaux minérales gazeuses",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Vichy ST yorre",
  },
  {
    categories: "Condiments, Sauces, Tomato sauces, Ketchup, Groceries",
    countries: "Roumanie",
    manufacturing_places: "roumanie",
    origins: "roumanie",
    product_name: "Tomi Sweet Ketchup",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken, Dranken, Plantaardige levensmiddelen, Warme dranken, Koffies, Oplosdranken, Oploskoffies, Suikervrije dranken",
    countries: "France, Polynésie française, Polynésie française, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "SPECIAL FILTRE L'Original",
  },
  {
    categories:
      "Plant-based foods and beverages, Beverages, Plant-based beverages, Fruit-based beverages, Juices and nectars, Orange-based beverages",
    countries: "Italie, Maroc",
    manufacturing_places: "orange",
    origins: "italie",
    product_name: "Orange juice",
  },
  {
    categories: "Beverages, Waters, Spring waters, en:mineral-waters",
    countries: "France, Roumanie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Apa minerala plată",
  },
  {
    categories: "Băuturi, Apa, en:Spring waters, en:Mineral waters",
    countries: "Îles Pitcairn",
    product_name: "Apă minerală naturală necarbogazoasă",
    origins: "Wallis-et-Futuna, Îles Pitcairn",
    manufacturing_places: "Wallis-et-Futuna, Îles Pitcairn",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Surgelés, Céréales pour petit-déjeuner, Céréales au chocolat, Mueslis, Mueslis au chocolat, Céréales au chocolat pour petit-déjeuner équilibré",
    countries: "francia",
    manufacturing_places: "",
    origins: "",
    product_name: "Granola",
  },
  {
    categories:
      "Boissons, Eaux, Produits de montagne, Eaux de sources, Eaux minérales, Boissons sans alcool, Eaux de montagne",
    countries: "France",
    manufacturing_places: "63820, laqueuille, France",
    origins: "France",
    product_name: "Eau de source de montagne Laqueuille",
  },
  {
    categories:
      "Édulcorants, Sucres, Sucres roux, Sucres de canne, Sucre muscovado, Sucres complets",
    countries: "France",
    manufacturing_places: "Philippines",
    origins: "Philippines",
    product_name: "Sucre Cmplet Muscovado",
  },
  {
    categories:
      "Breakfasts,Spreads,Sweet spreads,fr:Pâtes à tartiner,Hazelnut spreads,Chocolate spreads,Cocoa and hazelnuts spreads",
    countries:
      "Algérie, Autriche, Belgique, Croatie, France, Guyane, Guyane, Guyane, Polynésie française, Allemagne, Guadeloupe, Hongrie, Royaume-Uni, Jordanie, Liban, Martinique, Maroc, Portugal, Réunion, Roumanie, Sénégal, Serbie, Slovénie, Espagne, Tunisie, Émirats arabes unis, Norvège",
    manufacturing_places: "Algérie",
    origins: "Algérie",
    product_name: "Hazelnut Spread with Cocoa",
  },
  {
    categories: "Gewürzmittel,Saucen,Pestos,Pesto alla Genovese",
    countries: "Allemagne",
    manufacturing_places: "parma",
    origins: "allemagne",
    product_name: "Pesto alla Genovese",
  },
  {
    categories:
      "Alimentos de origen vegetal,Desayunos,Cereales para el desayuno,Copos de maíz tostado",
    countries: "Espagne",
    origins: "Espagne, palencia",
    product_name: "Corn Flakes 0%azúcares añadidos",
    manufacturing_places: "espagne",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Légumes et dérivés, Oignons et dérivés, Oignons frits, en:Dried fried onions",
    countries:
      "Autriche, francja, niemcy, holandia, Pologne, hiszpania, szwajcaria",
    manufacturing_places: "kapelle",
    origins: "unspecified",
    product_name: "Röstzwiebeln",
  },
  {
    categories:
      "Condiments, Sauces, Sauces pour pâtes, Sauces tomate, Sauces aux légumes, Sauces tomate aux petits légumes, en:groceries, Sauces pour féculents, Sauces tomates cuisinée aux petits légumes",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sauce Tomate cuisinée aux petits légumes",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Céréales et pommes de terre, Substituts de produits laitiers, Céréales et dérivés, Substituts du lait, Fruits à coques et dérivés, Boissons à base de végétaux, Boissons végétales, Boissons sans sucre ajouté, Boissons multivégétaux",
    countries: "France",
    manufacturing_places: "italie",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "Épeautre noisette bjorg",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Spreads, Cheeses, Salted spreads, Cheese spreads",
    countries:
      "Belgique, frankreich, Allemagne, italien, Japon, mexiko, marokko, spanien, Suisse",
    manufacturing_places:
      "kraft, foods, Allemagne, production, gmbh, &, co., Kirghizistan, Koweït, deiler, weg, 3, 29683, Barbade, fallingbostel, basse-saxe, allemagne",
    origins: "allemagne",
    product_name: "Philadelphia Original",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Matières grasses végétales, Produits de l'olivier, Huiles, Huiles d'olive, Huiles d'olive vierges extra, Huiles d'olive vierges",
    countries: "France",
    manufacturing_places: "italie",
    origins: "Liban, indiqué",
    product_name: "Huile d'olive vierge extra Bio Classico",
  },
  {
    categories:
      "Beverages, Alcoholic beverages, Beers, Lagers, Beverages  Alcoholic beverages  Beers",
    countries: "France",
    manufacturing_places: "obernai, France",
    origins: "France",
    product_name: "1664",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie aux céréales, Pains complets, Pains de mie complet",
    countries: "France",
    manufacturing_places: "France",
    origins: "Réunion, européenne",
    product_name: "Beau & bon pain de mie complet lin tournesol 320g",
  },
  {
    categories:
      "Cacao y sus productos, Cacaos y chocolates en polvo, Cacaos en polvo",
    countries: "Espagne",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Cacao puro desgrasado en polvo",
  },
  {
    categories:
      "Zoetstoffen,Siropen,Basissiropen,Esdoornstropen,en:Ahornsirups,en:Canadian maple,en:Einfache-sirupe,en:Sirups,en:Sussstoffe",
    countries: "frankrijk, duitsland",
    manufacturing_places: "Canada",
    origins: "Canada",
    product_name: "Sciroppo d'acero canadese",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons gazeuses, Boissons aux fruits, Sodas, Sodas aux fruits, Boissons sans alcool, Boissons avec sucre ajouté",
    countries: "Belgique, France, en:belgique, en:suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Oasis tropical",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Cakes,Chocolate biscuits,Filled biscuits",
    countries: "France, Allemagne, Maroc, Espagne",
    manufacturing_places: "France",
    origins: "unspecified",
    product_name: "Milka galette choco",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs",
    countries: "Belgique, France, Curaçao, Réunion",
    manufacturing_places: "Belgique",
    origins: "Liban, Réunion, européenne",
    product_name: "Chocolat Bio noir 85%",
  },
  {
    categories: "Snacks, Sweet snacks, Bars, Oat bar, en:cereal-bars",
    countries: "Belgique, Allemagne, Espagne, en:france",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Crunchy Oats and Dark chocolate, 2 Barres de 21 g",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Légumineuses et dérivés,Produits à tartiner,Fruits à coques et dérivés,Pâtes à tartiner végétales,Purées d'oléagineux,Beurres de légumineuses,Beurres de fruits à coques,Beurres de cacahuètes",
    countries: "France",
    manufacturing_places: "France",
    origins: "Liban, Réunion, européenne",
    product_name: "Beurre de cacahuètes",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Cereals and their products,Puffed cereal cakes,Puffed rice cakes",
    countries: "France, Allemagne",
    manufacturing_places: "France",
    origins: "european, Réunion, Liban, european, Réunion",
    product_name: "Bio Reiswaffeln mit Salz",
  },
  {
    categories: "fr:Charcuterie de volaille",
    countries: "France",
    manufacturing_places: "France, sarthe, yvré, levêque",
    origins: "France",
    product_name: "Rillettes de poulet rôti",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fruits and vegetables based foods, Breakfasts, Spreads, Fruits based foods, Plant-based spreads, Sweet spreads, Fruit and vegetable preserves, Jams, Berry jams, Strawberry jams",
    countries: "estonie, France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Confiture Fraises",
  },
  {
    categories: "Boissons, Sirops, Sirops aromatisés, Jus",
    countries: "frankreich, Suisse, Allemagne",
    manufacturing_places: "Suisse",
    origins: "Suisse",
    product_name: "Citron Vert",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Snacks,Céréales et pommes de terre,Tartines craquantes extrudées",
    countries: "Belgique, France, espagne, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartines craquantes au sarrasin",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Eaux,Eaux de sources,Eaux minérales,Boissons sans sucre ajouté,Eaux gazeuses,Eaux minérales gazeuses",
    countries: "Belgique, France, allemagne",
    manufacturing_places: "ispagnac, France",
    origins: "France, occitanie, languedoc-roussillon, lozère, ispagnac",
    product_name: "Eau minérale gazeuse",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Confectioneries,Chocolate candies,Bonbons,Chocolates,Filled chocolates,Assorted chocolates",
    countries:
      "Autriche, Belgique, Bulgarie, France, Allemagne, Hongrie, Pays-Bas, Îles Mariannes du Nord, Macédoine du Nord, Pologne, Roumanie, Suède, Suisse",
    manufacturing_places: "d-13403, berlin, Allemagne",
    origins: "allemagne",
    product_name: "merci Finest Selection Assorted Chocolates",
  },
  {
    categories:
      "Beverages, Breakfasts, Cocoa and its products, Cocoa and chocolate powders, Instant beverages, Chocolate powders",
    countries:
      "frankreich, Guadeloupe, Martinique, neukaledonien, Réunion, Sénégal, Suisse, Allemagne",
    manufacturing_places: "Guadeloupe",
    origins: "Guadeloupe",
    product_name: "",
  },
  {
    categories:
      "Alternatives à la viande,Substituts de viande,Produits panés,Susbtituts des escalopes panés",
    countries: "France",
    manufacturing_places: "France",
    origins: "Réunion, européenne, Norvège, Liban, Réunion, européenne",
    product_name: "La Panée Soja et Blé",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fats,Vegetable fats,Olive tree products,Vegetable oils,Olive oils,Extra-virgin olive oils,Virgin olive oils",
    countries: "France",
    manufacturing_places: "France",
    origins: "olives, 75 %, origine, Réunion, européenne",
    product_name: "Huile d'olive vierge extra",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Cow cheeses, Blue-veined cheeses, French blue-veined cheeses, Pasteurized cheeses",
    countries: "France",
    manufacturing_places: "France",
    origins: "lait, origine, France",
    product_name: "Saint Agur",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Boissons,Boissons chaudes,Boissons à base de végétaux,Thés,Thés verts,Boissons au thé,Thés glacés saveur menthe",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Thé vert saveur menthe",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Boissons sans alcool, Eaux minérales naturelles, Boissons sans sucre ajouté",
    countries: "Belgique, France, Luxembourg, Suisse",
    manufacturing_places: "Belgique",
    origins: "France",
    product_name: "Evian",
  },
  {
    categories: "Additifs alimentaires, Levures de bière",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Superlevure",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits fourrés, Biscuits au chocolat au lait",
    countries: "France, Japon, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Fourrés chocolat au lait",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Frais, Fromages pasteurisés, Fromages à tartiner, Fromages à la crème, Fromages industriels",
    countries: "France",
    manufacturing_places: "24052, périgueux, France",
    origins: "France",
    product_name: "Le  goût primeur",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés nature, Fromages blancs, Fromages blancs natures, Spécialités laitières, Spécialités laitières nature non sucrées",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Câlin",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Boissons gazeuses,Eaux,Eaux de sources,Eaux minérales,Eaux gazeuses,Eaux minérales gazeuses,en:Boissons sans sucre ajouté,en:Eau minérale naturelle gazéifiée",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, occitanie, languedoc-roussillon, gard, en:vergèze",
    product_name: "PERRIER eau minérale naturelle gazeuse",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Confectioneries, Bars, Chocolate candies, Bars covered with chocolate, Chocolate biscuity bars, Chocolate nuts cookie bars",
    countries:
      "Belgique, France, Allemagne, Italie, Espagne, Suisse, Algérie, Maroc, Émirats arabes unis, Norvège, Tunisie, Émirats arabes unis, Îles mineures éloignées des États-Unis",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Kinder Bueno",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Boissons édulcorées, Sodas, Boissons sans alcool, Eau tonique, Boissons avec sucre ajouté",
    countries: "Belgique, France",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "schweppes Indian tonic",
  },
  {
    categories:
      "Crèmes, Crèmes fouettées, Produits laitiers, en:whipped-creams",
    countries: "France",
    manufacturing_places: "Belgique",
    origins: "Réunion, européenne, Madagascar",
    product_name: "Crème sous pression à la vanille  250g",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits,Shortbread cookies,fr:Biscuits-avec-fourrage-aux-noisettes-et-au-cacao",
    countries: "France, Allemagne, Italie, Espagne, Suisse",
    manufacturing_places: "France",
    origins: "noisettes, origine, italie",
    product_name: "Baiocchi",
  },
  {
    categories:
      "Condiments, Sauces, Mayonnaises, Mayonnaises de Dijon, en:groceries",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Amora Mayonnaise De Dijon Flacon Souple 235g",
  },
  {
    categories: "Gâteaux,en:gateaux,en:gateaux-au-chocolat,en:gateaux-marbres",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Savane",
  },
  {
    categories:
      "Plant-based foods and beverages,Beverages,Plant-based beverages,Fruit-based beverages,Syrups,Flavoured syrups,Still fruit soft drinks,Sweetened beverages",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pulco à diluer - Agrumes",
  },
  {
    categories:
      "Produits laitiers, Matières grasses, Produits à tartiner, Matières grasses à tartiner, Matières grasses animales, Matière grasse laitière, Produits laitiers à tartiner, Beurres, Beurres doux, Beurres allégés, Beurre léger doux à 39-41% MG",
    countries: "France, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Le Beurre Doux Leger 41%MG Barquette",
  },
  {
    categories:
      "Produits laitiers, Crèmes, Crèmes UHT, Crèmes liquides, Crèmes entières",
    countries: "frankreich, Allemagne",
    manufacturing_places: "normandie, France",
    origins: "normandie",
    product_name: "La Crème Entière De Normandie 30%MG",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits and crackers,Biscuits",
    countries: "Belgique, France, Portugal, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Melloeux Fruit Rouges",
  },
  {
    categories:
      "Gewürzmittel,Saucen,Nudelsoßen,Pestos,Pesto alla Genovese,en:groceries",
    countries:
      "australien, österreich, frankreich, Allemagne, italien, Liechtenstein, Suisse",
    manufacturing_places: "italien",
    origins: "allemagne",
    product_name: "pesto con rucola",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Breads, Sliced breads, Wholemeal breads, Wholemeal sliced breads",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Botanas,Snacks dulces,Cacao y sus productos,Chocolates,Chocolates negros",
    countries: "bélgica, francia, Espagne, Mexique",
    manufacturing_places: "espagne",
    origins: "madagarcar, vanilla",
    product_name: "Intense Dark Organic Chocolate",
  },
  {
    categories:
      "Boissons et préparations de boissons,Boissons,Préparations pour boissons,Sirops,Sirops aromatisés,Sirops de grenadine,Boissons avec sucre ajouté",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sirop grenadine",
  },
  {
    categories:
      "Breakfasts,Spreads,Sweet spreads,Bee products,Farming products,Sweeteners,Honeys,Flower honeys,Liquid honeys",
    countries: "Finlande, France, Allemagne, Suède",
    manufacturing_places: "allemagne",
    origins: "european, Réunion, fr:hors, Réunion, européenne",
    product_name: "",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés nature, Skyrs, Skyrs nature",
    countries: "France, Suisse",
    manufacturing_places: "France, 93589, saint-ouen, Koweït, ouen",
    origins: "France",
    product_name: "Danone skyr 140 g x 2 nature",
  },
  {
    categories: "Snacks,Snacks sucrés,Biscuits et gâteaux,Biscuits",
    countries: "Belgique, France, maroc, Curaçao, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins:
      "France, annonay, figues, origine, non-union, européenne, germe, Colombie, blé, origine, Réunion, européenne, haute-garonne, soja, origine, Réunion, européenne",
    product_name: "Biscuits Soja Figue",
  },
  {
    categories: "Condiments, Sels, Sels marins, Sels fins, en:Groceries",
    countries: "France, allemagne, Suisse",
    manufacturing_places: "France",
    origins: "méditerranée",
    product_name: "Sel Moulu de Méditerranée",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Cereais e Batatas,Cereais e seus produtos,Cereias para pequeno-almoçco,Flocos,Flocos de cereais,en:Extruded cereals,en:Extruded flakes,Flocos de milho",
    countries: "itália, Portugal, roménia, espanha",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Corn Flakes",
  },
  {
    categories: "3023290030608",
    countries: "France",
    manufacturing_places: "slovénie",
    origins: "slovénie",
    product_name: "Skyr vanille",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Snacks,Céréales et pommes de terre,Snacks salés,Amuse-gueules,Chips et frites,Chips,Chips de pommes de terre,Biscuits apéritifs",
    countries: "allemagne, royaume-uni, Suisse",
    manufacturing_places: "pologne",
    origins: "Suisse",
    product_name: "",
  },
  {
    categories:
      "Produits laitiers, Plats préparés, Laits, Soupes, Soupes marocaine",
    countries: "Bahamas",
    product_name: "Lait",
    origins: "Bahamas",
    manufacturing_places: "Bahamas",
  },
  {
    categories: "Getränke",
    countries: "France, allemagne",
    manufacturing_places: "France",
    origins: "italie",
    product_name: "Bio Hafer Drink",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Légumineuses et dérivés,Produits à tartiner,Fruits à coques et dérivés,Pâtes à tartiner végétales,Purées d'oléagineux,Beurres de légumineuses,Beurres de fruits à coques,Beurres de cacahuètes,en:Alimentos-a-base-de-plantas,en:Alimentos-e-bebidas-a-base-de-plantas,en:Legumes-e-seus-produtos,en:Produtos-para-barrar,en:Produtos-para-barrar-a-base-de-plantas",
    countries: "francúzsko, nemecko, slovensko",
    manufacturing_places: "países, baixos",
    origins: "países, baixos, holandsko",
    product_name: "Peanut Butter",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages de France, Fromages de chèvre, Fromage de chèvre frais, Fromages pasteurisés, Fromage de chèvre frais au lait pasteurisé ou cru, Fromages à tartiner, Fromages industriels",
    countries: "France, Luxembourg, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "9 Minis St Moret (17,8% MG)",
  },
  {
    categories:
      "Frühstücke, Brotaufstriche, Süße Brotaufstriche, fr:Pâtes à tartiner, Haselnusscremes",
    countries: "Allemagne",
    manufacturing_places: "frankfurt/main",
    origins: "allemagne",
    product_name: "Nutella",
  },
  {
    categories: "Condiments, Sauces, Mayonnaises, Dijon mayonnaises, Groceries",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Viennoiseries, Brioches, Brioches tranchées, Brioches natures",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Brioche tranchée nature ss additif",
  },
  {
    categories:
      "Meats and their products, Meats, Prepared meats, fr:Charcuteries cuites, Cooked-poultry-breast-slices",
    countries: "France",
    manufacturing_places: "France",
    origins: "european, Réunion",
    product_name: "Blanc de poulet",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits sablés, Palets",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "Koweït, michel-chef-chef, loire, atlantique, France",
    origins: "France",
    product_name: "Roudor",
  },
  {
    categories:
      "Boissons, Eaux, Boissons édulcorées, Eaux aromatisées, Boisson à l'eau minérale aromatisée sucrée, Boissons avec sucre ajouté, Eau-minerale-gazifiee",
    countries: "France",
    manufacturing_places: "Saint-Christophe-et-Niévès, Albanie",
    origins: "France",
    product_name: "Bulles de fruits Pamplemousse Touche de citron",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, en:Boissons, en:Eaux, en:Eaux de sources, en:Eaux minérales, en:Eaux minérales naturelles",
    countries: "Espagne, France, Maroc",
    manufacturing_places: "oulmes",
    origins: "maroc",
    product_name: "Sidi Ali",
  },
  {
    categories:
      "Plant-based foods and beverages,Beverages,Plant-based foods,Cereals and potatoes,Dairy substitutes,Cereals and their products,Milk substitutes,Plant-based beverages,Plant-based milk alternatives,Cereal-based drinks,Oat-based drinks",
    countries:
      "francuska, njemačka, mađarska, rumunjska, češka, slovačka, Slovénie, Croatie",
    manufacturing_places:
      "quargentan, Espagne, 37047, Géorgie du Sud-et-les Îles Sandwich du Sud, bonifacio, italien",
    origins: "Italie",
    product_name: "Bio napitak od zobi",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Chocolates,Dark chocolates,fr:Chocolat noir 90 %",
    countries: "Allemagne, Pays-Bas, Suisse",
    manufacturing_places: "allemagne",
    origins: "Équateur",
    product_name: "Edelbitter Mild 90%",
  },
  {
    categories: "Snacks, Sweet snacks, Biscuits and cakes, Biscuits",
    countries: "vereinigtes, Belgique, Allemagne",
    product_name: "Digestives",
    origins: "Belgique",
    manufacturing_places: "Belgique",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines, Margarines allégées",
    countries: "France",
    manufacturing_places:
      "Koweït, hubert, Koweït, 870, rue, denis, papin, Koweït, 54710, ludres, meurthe-et-moselle, lorraine, France",
    origins: "koweït",
    product_name: "ST HUBERT OMEGA 3 doux 255G",
  },
  {
    categories:
      "Boissons, Boissons gazeuses, Sodas, Sodas au cola, Boissons avec sucre ajouté",
    countries:
      "belgija, francuska, njemačka, švicarska, ujedinjeno, kraljevstvo, Croatie",
    manufacturing_places: "croatie",
    origins: "croatie",
    product_name: "Coca Cola Original Taste",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Confectioneries, Chocolates, Dark chocolates",
    countries: "bélgica, Taïwan, francia",
    manufacturing_places: "taïwan",
    origins: "taïwan",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Biscottes, Pains grillés, Biscottes complètes",
    countries: "France, nouvelle-calédonie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Heudebert Blé complet",
  },
  {
    categories:
      "Bebidas,Laticínios,Bebidas lácteas,Suplemento alimentar,en:Bodybuilding supplements,en:Protein shakes",
    countries: "bélgica, alemanha, itália, polónia, espanha",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "High Protein Drink Vanilla",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Sliced breads,Vegan,Vegetarian",
    countries: "Royaume-Uni",
    origins:
      "european, Réunion, Curaçao, Liban, european, Réunion, Émirats arabes unis, Norvège",
    product_name: "Sourdough Grains & Seeds",
    manufacturing_places: "royaume-uni",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Cereals and their products, Crêpes and galettes, Puffed cereal cakes, Galettes, Puffed rice cakes, Puffed rice cakes with milk chocolate",
    countries: "France",
    manufacturing_places: "sanorice, Italie, srl",
    origins: "italie",
    product_name: "Galettes de riz bio",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Fromages, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés nature, Fromages blancs, Fromages blancs natures",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Fromage blanc nature",
  },
  {
    categories:
      "Snacks, Desserts, Snacks sucrés, Biscuits et gâteaux, Biscuits, Gâteaux, Gâteaux au chocolat",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Lulu L'Ourson Chocolat",
  },
  {
    categories:
      "Produits de la mer,Poissons et dérivés,Poissons,Poissons gras,Poissons fumés,Truites,Truites fumées",
    countries: "France",
    manufacturing_places: "françois, barrucand, 40140, magesc, France",
    origins: "France",
    product_name: "Smoked Trout From France",
  },
  {
    categories:
      "Dairies, Milks, Homogenized milks, Semi-skimmed milks, UHT Milks, Semi-skimmed milk UHT",
    countries: "France",
    manufacturing_places:
      "société, laitière, Colombie, vitré, (filiale, groupe, lactalis), Koweït, Lesotho, guichardières, Koweït, 35500, vitré, ille-et-vilaine, bretagne, France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Produits fermentés, Substituts de produits laitiers, Desserts, Desserts végétaliens, Produits végétaux fermentés, Desserts végétaliens fermentés, Desserts de lait de coco fermenté",
    countries: "frankreich, Suisse",
    manufacturing_places: "Suisse",
    origins: "Suisse",
    product_name: "Gourmand vegetal brasse nature",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Seeds, Cereals and their products, Breakfast cereals, Cereal grains, Flakes, Cereal flakes, Rolled flakes, Rolled oats, Oat",
    countries: "royaume-uni",
    manufacturing_places: "",
    origins: "Royaume-Uni",
    product_name: "",
  },
  {
    categories:
      "Beverages and beverages preparations,Plant-based foods and beverages,Beverages,Plant-based foods,Dairy substitutes,Milk substitutes,Nuts and their products,Plant-based beverages,Plant-based milk alternatives,Nut-based drinks,Hazelnut-based drinks",
    countries:
      "Belgique, Finlande, France, Allemagne, Italie, Suède, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "european, Réunion",
    origins: "unspecified",
    product_name: "Rich and indulgent Hazelnut",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke,Getränke,Pflanzliche Lebensmittel,Pflanzliche Getränke,Pflanzenmilch,Hülsenfruchtmilch,Sojamilch,Gesüßte natürliche Sojamilch,Ungesüßte natürliche Sojamilch",
    countries:
      "áustria, bélgica, Polynésie française, alemanha, noruega, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Soyamilch",
  },
  {
    categories: "fr:biscuiti-cu-crema",
    countries: "Roumanie",
    manufacturing_places: "constanta, Roumanie",
    origins: "Roumanie",
    product_name:
      "Biscuits Eugenia Original Cocoa Cream 36G 1 / 24 0.864KG / Box",
  },
  {
    categories:
      "Botanas,Snacks dulces,Cacao y sus productos,Chocolates,Chocolates negros",
    countries: "Autriche, francia, alemania, Italie, Espagne",
    manufacturing_places: "France",
    origins: "francia",
    product_name: "Excellence 100% cacao noir infini",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fruits and vegetables based foods,Breakfasts,Cereals and potatoes,Cereals and their products,Fruits based foods,Breakfast cereals,Fruits,Cereals with fruits,Mueslis,Berries,Crunchy mueslis,Mueslis with fruits,Crunchy mueslis with fruits",
    countries: "Belgique, France, Allemagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Bio Knusper Müsli Früchte",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés nature, Yaourts au Bifidus, Yaourts au bifidus nature",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, Réunion, européenne",
    product_name: "Activia bifidus nature 125g x 4",
  },
  {
    categories:
      "Boissons, Boissons alcoolisées, Bières, Lagers, Bières aromatisées",
    countries: "Belgique, France, Curaçao, Réunion, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Bière Tequila",
  },
  {
    categories:
      "Édulcorants, Sucres, Sucres en poudre, Sucres blancs, en:Sucres en poudre",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sucre Poudre",
  },
  {
    categories:
      "Condiments, Sauces, Mustards, Dijon mustards, Fine mustards, Groceries",
    countries: "Belgique, frankreich, marokko, Suisse, Allemagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Moutarde Fine et Forte Flacon Souple",
  },
  {
    categories:
      "Cacao et dérivés, Cacaos et chocolats en poudre, Cacaos en poudre",
    countries: "France",
    manufacturing_places: "allemagne",
    origins: "Côte d'Ivoire, dominicaine",
    product_name: "Cacao non sucré Le Bio",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals",
    countries: "France, Jersey, en:united-kingdom",
    manufacturing_places: "France",
    origins: "France",
    product_name: "All-Bran",
  },
  {
    categories:
      "Bebidas,Bebidas carbonatadas,Sodas,Bebidas de cola,Bebidas azucaradas",
    countries: "francia, Italie, sudáfrica, Espagne, ucrania",
    manufacturing_places: "italie",
    origins: "italie",
    product_name: "Coca Cola Regular 2L",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Confeitaria,Chocolates,Chocolates amargos",
    countries: "bélgica, Polynésie française, itália, marrocos",
    manufacturing_places: "Belgique, France",
    origins: "Belgique",
    product_name: "Noir 70% Intense",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Cow cheeses, Soft cheeses with bloomy rind, Camemberts, Pasteurized cheeses",
    countries: "France",
    manufacturing_places: "normandie",
    origins: "France",
    product_name: "Camembert",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains de seigle,Pains complets",
    countries: "autriche, France, allemagne, espagne",
    manufacturing_places: "allemagne",
    origins: "France",
    product_name: "",
  },
  {
    categories: "Condiments,Sauces,Sauces béarnaises",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sauce Béarnaise",
  },
  {
    categories: "Lanches comida,Lanches doces,Biscoitos e Bolos,Biscoitos",
    countries:
      "arménia, Colombie, Grèce, irlanda, nova, zelândia, Espagne, Mexique, espanha",
    manufacturing_places: "colombie",
    origins: "colombie",
    product_name: "Biscoff",
  },
  {
    categories: "Condiments, Sauces, Mayonnaises, Groceries",
    countries: "France, allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Cakes,Dietary supplements,Bodybuilding supplements,Chocolate cakes,Brownies,Protein bars",
    countries: "Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Chocolate brownie protein bar",
  },
  {
    categories:
      "Beverages and beverages preparations,Plant-based foods and beverages,Beverages,Plant-based foods,Cereals and potatoes,Dairy substitutes,Cereals and their products,Milk substitutes,Plant-based beverages,Plant-based milk alternatives,Cereal-based drinks,Oat-based drinks",
    countries: "Espagne, Émirats arabes unis, Norvège, francia",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "Oat Drink Whole",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat, Mueslis, Mueslis au chocolat",
    countries: "Belgique, frankreich, spanien, Suisse",
    manufacturing_places: "royaume-uni",
    origins: "Belgique",
    product_name: "Muesli bio chocolat noir",
  },
  {
    categories: "en:Puffed corn cakes",
    countries: "Polynésie française, Portugal, espanha",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Galettes de Maïs",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Flakes,Food additives,Nutritional yeast",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "european, Réunion, made, Norvège, Allemagne",
    product_name: "Nutritional Yeast Flakes",
  },
  {
    categories: "Boissons,Eaux,Eaux de sources,en:Eaux de sources",
    countries: "France, Belgique",
    manufacturing_places: "France",
    origins: "f-08430, jandun, France",
    product_name: "Eau de source",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Sheep's-milk cheeses",
    countries: "Belgique, danemark, France",
    manufacturing_places:
      "société, fromagère, Îles Pitcairn, massegros, (filiale, société, Bangladesh, caves, Norvège, producteurs, réunis, Colombie, roquefort/groupe, lactalis), Koweït, Nouvelle-Calédonie, massegros, village, Koweït, 48500, Nouvelle-Calédonie, massegros, lozère, languedoc-roussillon, France",
    origins: "France, Réunion, européenne",
    product_name: "Salakis Herbes de Provence",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat, Pépites de céréales croustillantes, Pépites de céréales au chocolat, en:Aliments d'origine végétale, en:Aliments et boissons à base de végétaux, en:Céréales au chocolat, en:Céréales et dérivés, en:Céréales et pommes de terre, en:Céréales pour petit-déjeuner, en:Petit-déjeuners, en:Pépites de céréales au chocolat, en:Pépites de céréales croustillantes",
    countries: "Belgique, France, Italie, Luxembourg, Réunion, Espagne, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Céréales Extra Pépites Chocolat Noisettes",
  },
  {
    categories:
      "Laticínios,Alimentos Fermentados,Produtos lácteos fermentados,Queijos,Soft cheeses,Queijos de vaca,Soft cheeses with bloomy rind,Camemberts,Cow camemberts,Queijos pasteurizados,Camemberts from pasteurized cow milk",
    countries: "Polynésie française",
    manufacturing_places: "normandie, France",
    origins: "lait, origine, France",
    product_name: "Camembert",
  },
  {
    categories: "Condiments,Sauces,Mayonnaises,groceries",
    countries: "France, Luxembourg",
    manufacturing_places: "France",
    origins: "France",
    product_name: "MAILLE Mayonnaise Fins Gourmets Bocal 320g",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Cereais e Batatas,Cereais e seus produtos,Cereias para pequeno-almoçco,Cereais de chocolate,en:Extruded cereals",
    countries:
      "bélgica, Polynésie française, Portugal, reunião, espanha, suíça",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Snacks,Granen en aardappels,Zoete snacks,en:Sweet pastries and pies,Broden,Viennoiseries,Brioches,Beschuiten,Toasts",
    countries: "frankrijk",
    manufacturing_places: "",
    origins: "",
    product_name: "Toast brioché",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Pains,Pains de mie",
    countries: "France, allemagne",
    manufacturing_places: "France",
    origins: "Liban, indiqué",
    product_name: "Pain de mie extra-moelleux nature",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Spreads, Nuts and their products, Plant-based spreads, Oilseed purees, Legume butters, Nut butters, Peanut butters, Crunchy peanut butters",
    countries: "France, en:united-kingdom",
    manufacturing_places: "Émirats arabes unis, Norvège",
    origins: "non-uk",
    product_name: "Crunchy Peanut Butter",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, en:Barres, en:Barres chocolatées, en:Barres chocolatées biscuitées, en:Biscuits et gâteaux, en:Cacao et dérivés, en:Confiseries, en:Confiseries chocolatées, en:Snacks sucrés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Biscuits Nutella B-ready x15 gaufrettes fourrées - 330g",
  },
  {
    categories:
      "Snacks,Sweet snacks,Cocoa and its products,Confectioneries,Bars,Biscuits and cakes,Biscuits,Wafers,Stuffed wafers,Hazelnut cream stuffed wafers",
    countries:
      "Belgique, France, Allemagne, Italie, Luxembourg, Martinique, Île Maurice, Maroc, Nouvelle-Calédonie, Nouvelle-Calédonie, Réunion, Espagne, Suisse, Thaïlande, Émirats arabes unis, Norvège, Taïwan",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Nutella B-Ready",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Specific products, Products for specific diets, Breads, Products without gluten, Gluten-free breads",
    countries:
      "francia, Italie, países, bajos, Espagne, suiza, Espagne, Mexique",
    manufacturing_places: "italie",
    origins: "italie",
    product_name: "Seeded Loaf (Bread)",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Cheeses, Cow cheeses, Fresh foods, Cooked-pressed-cheeses, Italian cheeses, Grated cheese, Parmigiano-Reggiano",
    countries: "Belgique, France, allemagne, italie, Luxembourg, Suisse",
    manufacturing_places:
      "parmareggio, s.p.a., 41122, modena, modène, émilie-romagne, italie",
    origins: "italie",
    product_name: "Parmigiano reggiano",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal,Alimentos de origen vegetal,Semillas,Frutos de cáscara y derivados,Frutos de cáscara,Frutos de cáscara sin cáscara,Nueces",
    countries: "Roumanie, Espagne",
    manufacturing_places:
      "valencia, (provincia), comunidad, valenciana, Espagne",
    origins: "Mexique, Mexique",
    product_name: "Nuez natural pelada",
  },
  {
    categories:
      "Condiments, Sauces, Moutardes, en:groceries, Spécialité à la Moutarde",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name:
      "Amora Spécialité à la moutarde de Dijon aux épices et aromates Savora Bocal 385g",
  },
  {
    categories: "Напитки, Вода, en:Vitamin waters",
    countries: "румъния, Bulgarie",
    manufacturing_places: "Roumanie",
    origins: "Roumanie, uniunea, europeană",
    product_name: "Напитка с вкус на круша и боровинка и добавени витамини",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal, Alimentos de origen vegetal, Condimentos, Untables, Untables vegetales, Untables salados, Salsas, Salsas para mojar, Hummus, en:Classic hummus, en:Groceries",
    countries: "Espagne, en:romania",
    manufacturing_places: "Espagne",
    origins: "espagne",
    product_name: "Hummus de garbanzos receta clásica",
  },
  {
    categories: "Meats and their products,Meats,Prepared meats,Hams,White hams",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "ZERO NITRITE - LE SUPERIEUR",
  },
  {
    categories: "Snacks,Sweet snacks,Biscuits and cakes,Biscuits",
    countries: "France, Roumanie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Biscuits with cocoa cream",
  },
  {
    categories: "Sourdough-bread, en:breads",
    countries: "Royaume-Uni",
    product_name: "White Sourdough Bread",
    origins: "royaume-uni",
    manufacturing_places: "royaume-uni",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas, Alimentos à base de plantas, Nozes e seus produtos, Nozes, en:Pistachios, en:Roasted pistachios, en:Geröstete Pistazien, en:Imbiss, en:Nüsse, en:Nüsse und Nussprodukte, en:Pflanzliche Lebensmittel, en:Pflanzliche Lebensmittel und Getränke, en:Pistazien, en:Salzige Snacks",
    countries: "francia, germania, spagna, Italie",
    manufacturing_places: "Allemagne",
    origins:
      "vereinigte, staaten, von, Samoa américaines, Mexique, Mexique, Pays-Bas caribéens, uniti, damerica",
    product_name: "Pistacchi",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Confectioneries, Chocolates, Dark chocolates, Chocolates with hazelnuts, Dark chocolates with hazelnuts",
    countries:
      "Belgique, frankrijk, duitsland, Pays-Bas, polen, spanje, zwitserland",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Cioccolato con nocciole intere",
  },
  {
    categories:
      "Snacks, Breakfasts, Sweet snacks, Biscuits and cakes, Biscuits, Chocolate biscuits, fr:Biscuits-alleges, fr:Biscuits-aux-cereales, fr:Biscuits-petits-dejeuners",
    countries: "Belgique, France, Luxembourg, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "BelVita Original Petit Déjeuner pépites de chocolat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Conserves, Plats préparés, Légumes préparés, Plats préparés en conserve, Ratatouilles",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Ratatouille cuisinée à la provençale",
  },
  {
    categories: "Boissons, Boissons alcoolisées, Pastis, Boisson alcoolisé",
    countries: "Belgique, France, Suisse",
    manufacturing_places: "Belgique",
    origins: "France, provence",
    product_name: "Pastis de Marseille",
  },
  {
    categories: "Crêpes et galettes,Crêpes,Crêpes de froment",
    countries: "France",
    manufacturing_places: "bretagne, France",
    origins: "France",
    product_name: "Crêpes de Landerneau",
  },
  {
    categories:
      "en:Plant-based foods and beverages, en:Plant-based foods, en:Breakfasts, en:Cereals and potatoes, en:Cereals and their products, en:Frozen foods, en:Breakfast cereals, en:Chocolate cereals, en:Puffed grains, en:Breakfast cereals fortified with vitamins and chemical elements, en:Puffed cereals, أرز منتفخ, en:Chocolate puffed rice, en:Chocolate puffed rice fortified with vitamins and chemical elements, en:cereales-au-chocolat, en:cereales-soufflees, en:grains-soufflees, fr:Riz soufflé goût chocolat",
    countries: "Italie, bélgica, espagne, francia, suiza, en:france",
    manufacturing_places: "italie",
    origins: "italie",
    product_name: "Coco pops",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons gazeuses, Boissons aux fruits, Boissons édulcorées, Sodas, Boissons light, Sodas aux fruits, Sodas light, Sodas aux fruits light, Boissons avec sucre ajouté",
    countries: "Belgique, France",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Schweppes Agrumes Zero",
  },
  {
    categories:
      "Petit-déjeuners,Produits à tartiner,Produits à tartiner sucrés,Pâtes à tartiner,Pâtes à tartiner aux noisettes,Pâtes à tartiner au chocolat,Pâtes à tartiner aux noisettes et au cacao",
    countries: "espagne",
    manufacturing_places: "",
    origins: "",
    product_name: "Nutella",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao",
    countries: "Belgique, France, allemagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Nutella",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Maxi Tranches Sans sucre ajouté Nature 550 GR",
  },
  {
    categories:
      "Produits laitiers, Matières grasses, Produits à tartiner, Matières grasses à tartiner, Matières grasses animales, Matière grasse laitière, Produits laitiers à tartiner, Beurres, Beurres demi-sel",
    countries:
      "Belgique, France, Polynésie française, Polynésie française, Martinique, maroc",
    manufacturing_places: "Belgique",
    origins: "Réunion, européenne",
    product_name: "Beurre gastronomique demi-sel",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages de vache, Frais, Fromages de France, Fromages pasteurisés, Fromages à tartiner, Fromages à la crème, Fromages industriels, en:uncured-soft-cheese-spreadable-around-30-40-fat-flavoured, Fromage fouetté",
    countries: "Belgique, France",
    manufacturing_places:
      "laiterie, nouvelle, Colombie, larguenon, Koweït, lna, [filiale, laïta, (groupe, even)], Koweït, Algérie, bellevue, Koweït, 22130, créhen, côtes-darmor, bretagne, France, 22132, crehen, 22130, crehen",
    origins: "lait, bretagne, pays, Colombie, Curaçao, loire, France",
    product_name:
      "Paysan Breton - Le Fromage Fouetté Madame Loïk - Ail et fines herbes de nos régions françaises",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Céréales et pommes de terre, Snacks sucrés, en:Sweet pastries and pies, Viennoiseries, Pains briochés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "4 Baguettes viennoises 340g",
  },
  {
    categories:
      "Băuturi, Apa, en:Spring waters, en:Mineral waters, en:Natural mineral waters, Apa-carbogazoaza, Apă-plata",
    countries: "Roumanie",
    manufacturing_places: "roumanie",
    origins: "roumanie",
    product_name: "Izvorul Alb - Apă minerala plata",
  },
  {
    categories:
      "Condiments, Sauces, Mustards, Salad dressings, fr:sauces-crudites, Groceries",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Amora Sauce Crudites Nature",
  },
  {
    categories:
      "Petit-déjeuners, Produits à tartiner, Produits à tartiner sucrés, Pâtes à tartiner, Pâtes à tartiner aux noisettes, Pâtes à tartiner au chocolat, Pâtes à tartiner aux noisettes et au cacao",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pâte à tartiner noisettes et cacao",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Barres, Compléments alimentaires, Compléments pour le Bodybuilding, Barres protéinées, en:Barres, en:Barres protéinées, en:Barres énergétiques, en:Barres énergétiques protéinées, en:Compléments alimentaires, en:Compléments pour le Bodybuilding, en:Snacks sucrés",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Barre céréales Protéines peanut& chocolat🍫",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Céréales et dérivés,Plats préparés,Assortiments d'aliments,Assortiments de céréales - grains et légumes secs",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins: "aucune, indication",
    product_name: "Céréales méditerranéennes",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Jus et nectars, Jus de fruits, Jus d'orange, Jus de fruits pur jus, Jus d'orange pur jus",
    countries: "France, Suisse",
    manufacturing_places: "France, Belgique",
    origins: "brésil",
    product_name:
      "Tropicana 100% oranges pressées sans pulpe format familial 1,5 L",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Confiseries, Chocolats, Chocolats noirs, Chocolats noirs extra fin, Chocolat 80 %",
    countries: "France, espagne, Suisse",
    manufacturing_places: "italie",
    origins: "agriculture, Liban, Guernesey, esmeraldas, équateur",
    product_name: "Chocolat noir 80% Équateur intense et floral",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Cereals with fruits, Mueslis, Mueslis with fruits",
    countries: "frankreich, vereinigtes, Belgique, Allemagne",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "No Added Sugar Muesli",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Surgelés,Céréales pour petit-déjeuner,Céréales aux fruits,Mueslis,Mueslis aux fruits,Pépites de céréales croustillantes,Pépites de céréales aux fruits",
    countries: "France, Suisse",
    manufacturing_places: "angleterre",
    origins: "France",
    product_name: "Country Crisp 4 Baies",
  },
  {
    categories:
      "Dairies, Fermented foods, Desserts, Fermented milk products, Dairy desserts, Fermented dairy desserts, Yogurts, Greek-style yogurts",
    countries: "Espagne",
    manufacturing_places: "espagne",
    origins: "espagne",
    product_name: "",
  },
  {
    categories:
      "Cereals and their products,Breakfast cereals,Flakes,Cereal flakes,Extruded cereals,Extruded flakes,Corn flakes,Fruhstuckscerealien,Müsli",
    countries: "Allemagne",
    manufacturing_places: "allemagne",
    origins: "Allemagne",
    product_name: "Corn flakes",
  },
  {
    categories:
      "Seafood, Fishes and their products, Fishes, Meals, Fish preparations, Meals with fish, Refrigerated foods, Surimi, Preparations-made-from-fish-meat",
    countries: "francia",
    manufacturing_places: "France",
    origins: "France",
    product_name: "28 bâtonnets de surimi",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Fruits and vegetables based foods,Fruits based foods,Nuts and their products,Dried products,Nuts,Dried plant-based foods,Dried fruits,Dried mixed fruits,Cashew nuts",
    countries: "белгия, Bulgarie, франция, германия, италия, хърватия",
    manufacturing_places:
      "solent, gmbh, david-hansemann-straße, 1-25, 52531, übach-palenberg, Allemagne",
    origins: "allemagne",
    product_name: "Cashew-Cranberry-Mix",
  },
  {
    categories:
      "Meats and their products,Spreads,Meats,Prepared meats,Salted spreads,Rillettes,Potted meats,French Rillettes,fr:Rillettes de viande rouge,Sarthe rillettes,Pork rillettes,Rillettes from Mans",
    countries: "France, Suisse",
    manufacturing_places: "sarthe, France, yvré, levêque",
    origins: "porc, origine, France",
    product_name: "Rillettes du Mans - La véritable",
  },
  {
    categories:
      "Dairies,Fermented foods,Fermented milk products,Cheeses,Desserts,Dairy desserts,Fermented dairy desserts,Fromages blancs - petit suisses and skyr,Yogurts,Plain fermented dairy desserts,Skyrs,Plain skyrs",
    countries: "France, Allemagne, Italie, Espagne, Suisse",
    manufacturing_places:
      "France, normandie, seine-maritime, f-76220, ferrières-en-brie, [76260, insee7, ]",
    origins: "France",
    product_name: "Skyr",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Aliments d'origine végétale, Boissons chaudes, Cafés, Boissons instantanées, Cafés solubles, Boissons et préparations de boissons, Préparations pour boissons",
    countries: "France, Guyane, Polynésie française",
    manufacturing_places: "France",
    origins: "France",
    product_name: "NESCAFÉ NES, Café Soluble, Boîte de 200g",
  },
  {
    categories:
      "Dairies, Fermented foods, Fermented milk products, Spreads, Cheeses, Salted spreads, Cow cheeses, Fresh foods, French cheeses, Pasteurized cheeses, Cheese spreads, Cream cheeses, Industrial cheese, Uncured-soft-cheese-spreadable-around-30-40-fat-flavoured",
    countries: "Belgique, frankreich, Allemagne, Suisse, vereinigtes, Belgique",
    manufacturing_places:
      "société, Colombie, Curaçao, fromagerie, boursin, (filiale, groupe, bel), Koweït, 3, route, Colombie, saint-aquilin, Koweït, 27120, croisy-sur-eure, eure, haute-normandie, France",
    origins: "colombie",
    product_name: "Garlic & Herbs Soft French Cheese",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Céréales et dérivés, Plats préparés, Semoules de céréales, Semoules de blé, Semoules de blé dur, Couscous, Semoules de blé dur pour couscous",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Graine Couscous Parfumé aux Épices du Monde",
  },
  {
    categories:
      "Beverages and beverages preparations,Beverages,Breakfasts,Cocoa and its products,Hot beverages,Beverage preparations,Cocoa and chocolate powders,Instant beverages,Chocolate powders,Sweetened beverages,fr:Poudre chocolatée",
    countries: "France, Allemagne",
    manufacturing_places: "allemagne",
    origins: "Allemagne",
    product_name: "Banania Original - Cacao Céréales Touche De Banane & Miel",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Spreads, Nuts and their products, Plant-based spreads, Oilseed purees, Legume butters, Nut butters, Peanut butters, Crunchy peanut butters",
    countries: "France, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Crunchy Organic Peanut Butter",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke, Pflanzliche Lebensmittel, Getreide und Kartoffeln, Getreideprodukte, Fertiggerichte, Getrocknete Produkte, Teigwaren, Getrocknete Produkte zur Rehydrierung, Nudeln, Suppen, Getrocknete Fertiggerichte, Instant-Nudeln, Instantsuppen, Instant Nudelsuppen, en:Dehydrated Asian-style soup with noodles",
    countries: "tschechien, dänemark, frankreich, Allemagne",
    manufacturing_places: "Thaïlande",
    origins: "Thaïlande",
    product_name: "Instantnudeln - Chicken Flavour",
  },
  {
    categories:
      "Condiments, Sauces, Moutardes, Sauces salades, Sauces caesar, Sauces-crudites, en:groceries",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Amora Sauce Crudités Caesar Bouteille 380ml",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Cereals with fruits, Mueslis, Crunchy mueslis, Mueslis with fruits, Crunchy mueslis with fruits",
    countries: "Belgique, frankrijk, duitsland, italië, slovenië, spanje",
    manufacturing_places: "Belgique",
    origins: "германия",
    product_name: "Crunchy fruit muesli",
  },
  {
    categories:
      "Viandes et dérivés, Charcuteries, Charcuteries cuites, Blancs de volaille en tranches, Blancs de poulet en tranches",
    countries: "France",
    manufacturing_places: "France",
    origins: "european, Réunion",
    product_name: "Filet de poulet 🐔 rôti",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Filled biscuits,Filled extruded crispbreads,Extruded and grilled biscuits with fruits filling",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Cracotte framboise",
  },
  {
    categories: "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits",
    countries: "francia",
    manufacturing_places: "",
    origins: "farine, Polynésie française",
    product_name: "Gerblé - Sugar Free Sesame Vanilla Cookie, 132g (4.7oz)",
  },
  {
    categories: "Condiments, Salts, Sea salts, Groceries, fr:sels-fins",
    countries: "Belgique, frankreich, Réunion, Allemagne",
    manufacturing_places: "Belgique",
    origins: "méditerranée",
    product_name: "Sel de mer",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de vache, en:cooked-pressed-cheeses, Emmentals, Fromages râpés, Emmentals râpés",
    countries: "France, japon, Allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Emmental râpé",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Toasts,Toasted bread rolls",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Petits pains grillés blé complet",
  },
  {
    categories:
      "Cacao et dérivés,Cacaos et chocolats en poudre,Chocolats en poudre",
    countries: "France, Polynésie française, Polynésie française, Canada",
    manufacturing_places: "France",
    origins: "afrique",
    product_name: "chocolat en poudre",
  },
  {
    categories:
      "Snack, Snacks salati, Antipasti, Patatine e fritti, Patatine sottili, Snack salati a base di patate",
    countries:
      "France, Allemagne, Italie, Pays-Bas, Nigéria, Espagne, Danemark, Belgique",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pringles Original",
  },
  {
    categories:
      "Snacks, Desserts, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs",
    countries: "France",
    manufacturing_places: "France",
    origins:
      "République centrafricaine, south-america, Sahara Occidental, République centrafricaine",
    product_name: "NESTLE DESSERT Noir 205g",
  },
  {
    categories:
      "Snacks, Petit-déjeuners, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat, Biscuits secs, Biscuit sec pour petit déjeuner, Biscuit sec pour petit déjeuner au chocolat",
    countries: "Belgique, France, Réunion, Suisse",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Petit Déjeuner Chocolat",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Cereais e Batatas,en:Specific products,en:Products for specific diets,Pães,Produtos sem glútem,Pães sem glúten,Pães de forma",
    countries:
      "bélgica, Polynésie française, alemanha, países, baixos, Portugal, espanha, suíça, Espagne, Mexique",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Pan de Molde Clásico",
  },
  {
    categories: "Beverages,Carbonated drinks,Sodas,Colas,Sweetened beverages",
    countries: "Roumanie",
    manufacturing_places: "roumanie",
    origins: "roumanie",
    product_name: "",
  },
  {
    categories:
      "Plant-based foods and beverages,Breakfasts,Cereals and potatoes,Cereals and their products,Breakfast cereals,Mueslis",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins: "émirats, arabes, Tunisie",
    product_name: "Muesli",
  },
  {
    categories:
      "Млечни продукти, Ферментирали продукти, Ферментирали млечни продукти, Крем за мазане, Сирене, Солен крем за мазане, en:Cheese spreads, Крема сирене",
    countries: "Bulgarie, en:romania",
    product_name: "Крема сирене",
    origins: "bulgarie",
    manufacturing_places: "bulgarie",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke, Getränke, en:Dairy substitutes, Milchersatz, Pflanzliche Getränke, Pflanzenmilch, en:Mixed plant milks",
    countries:
      "Autriche, Belgique, France, Allemagne, Hongrie, Roumanie, Émirats arabes unis, Norvège",
    manufacturing_places: "autriche",
    origins: "Liban, european, Réunion",
    product_name: "Bio Kokonuss mit Reis",
  },
  {
    categories:
      "Snacks, Aliments d'origine végétale, Aliments et boissons à base de végétaux, Amuse-gueules, Chips, Chips de pommes de terre, Chips et frites, Chips paysannes, Céréales et pommes de terre, Snacks salés, en:farmer-s-crisps",
    countries: "France",
    product_name: "Chips Recette Paysanne Nature",
    origins: "France",
    manufacturing_places: "France",
  },
  {
    categories: "Compléments alimentaires,Omega-3,Omega 3",
    countries: "Allemagne",
    product_name: "Premium Omega-3",
    origins: "allemagne",
    manufacturing_places: "allemagne",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Confectioneries, Chocolates, Milk chocolates, Chocolates with hazelnuts, Milk chocolates with hazelnuts",
    countries: "франция, германия, Bulgarie",
    manufacturing_places: "bulgarie",
    origins: "Liban, indiqué",
    product_name: "Млечен шоколад с цели лешници",
  },
  {
    categories:
      "en:Plant-based foods and beverages,en:Plant-based foods,en:Legumes and their products,en:Snacks,en:Legumes,en:Salty snacks,en:Appetizers,en:Nuts and their products,en:Nuts,en:Roasted nuts,en:Peanuts,en:Salted nuts,en:Roasted peanuts",
    countries: "francúzsko, španielsko",
    manufacturing_places: "",
    origins: "",
    product_name: "Paahdettu maapähkinä",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits au chocolat",
    countries: "Belgique, France, Curaçao, Réunion, états-unis, en:france",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Prince petit dej",
  },
  {
    categories:
      "Beverages, Non-alcoholic beverages, Non-alcoholic beers, Sweetened beverages, en:beers",
    countries: "France",
    manufacturing_places: "pologne",
    origins: "France",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Jus et nectars, Nectars de fruits, Jus de fruits, Nectars d'orange",
    countries: "France",
    manufacturing_places: "roche, Surinam, foron, France",
    origins: "Surinam",
    product_name: "Le Bio Orange",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Matières grasses végétales, Huiles, Huiles de colza",
    countries: "France, Guadeloupe, Martinique, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Fleur de Colza",
  },
  {
    categories:
      "Zuivelproducten,Gefermenteerde levensmiddelen,Gefermenteerde zuivelproducten,Kazen,Desserts,Desserts op basis van melk,Gefermenteerde melkdesserts,Gefermenteerde melkdesserts natuur,Gepasteuriseerde kazen,Schapenkazen,fr:Fromages blancs,fr:Fromages blancs au lait de brebis,fr:Fromages blancs natures",
    countries: "frankrijk",
    manufacturing_places: "lozère, France",
    origins: "frankrijk",
    product_name: "Fromage blanc au lait de brebis",
  },
  {
    categories:
      "Produits laitiers, Desserts, Desserts lactés, Desserts au chocolat, Laits emprésurés, Laits emprésurés au chocolat",
    countries: "France",
    manufacturing_places: "bretagne, France",
    origins: "France",
    product_name: "Emprésuré chocolat intense",
  },
  {
    categories:
      "Produits laitiers, Matières grasses, Produits à tartiner, Matières grasses à tartiner, Matières grasses animales, Matière grasse laitière, Produits laitiers à tartiner, Beurres, Beurres demi-sel, Beurres moulés, Beurres pasteurisés",
    countries: "France, Suisse",
    manufacturing_places:
      "France, vendée, bellevigny, fabriqué, Cité du Vatican, bellevigny, (85), Mayotte, eurial, 44308, nantes, cedex",
    origins: "France",
    product_name: "Beurre demi sel aux crisraux de sel de Mer de Noirmoutier",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Snacks, Céréales et pommes de terre, Tartines craquantes extrudées",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Tartined Craquantes Châtaigne",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons gazeuses, Boissons aux fruits, Boissons édulcorées, Sodas, Sodas aux fruits, Sodas à l'orange, Boissons avec sucre ajouté",
    countries: "franciaország, magyarország",
    manufacturing_places: "",
    origins: "franciaország, brazília",
    product_name: "Fanta orange",
  },
  {
    categories: "Snacks, Sweet snacks, Biscuits and cakes, Biscuits",
    countries:
      "Andorre, francia, marruecos, Portugal, Sénégal, Espagne, en:francia",
    manufacturing_places: "andorre",
    origins: "andorre",
    product_name: "Diet Nature Digestive sin azúcares",
  },
  {
    categories:
      "Imbiss, Süßer Snack, Riegel, Nahrungsergänzungsmittel, Nahrungsergänzungen für Bodybuilder, Proteinriegel",
    countries: "France, Allemagne",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Protein Bar Smak Cjastka I Smietana",
  },
  {
    categories:
      "Fromages, Fromages de chèvre, Produits fermentés, Produits laitiers, Produits laitiers fermentés, Surgelés, en:goat-cheeses",
    countries: "Guyane",
    product_name: "Chavroux Pur Chèvre",
    origins: "Guyane",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages à tartiner, Fromages fondus",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "03.06.2024 DEU101H 0?:14 4",
  },
  {
    categories: "Condiments, Sauces, Hot sauces, Groceries",
    countries:
      "Belgique, Bulgarie, France, Allemagne, Russie, Espagne, Suisse, Royaume-Uni",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Sweet Chilli sauce - Vitasia - 700ml",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Céréales et pommes de terre,Céréales et dérivés,Pains,Pains de seigle,Pains complets",
    countries: "France, allemagne, espagne",
    manufacturing_places: "France",
    origins: "Réunion, européenne",
    product_name: "Pain de seigle complet Epeautre et épeautre vert",
  },
  {
    categories:
      "Produits laitiers,Crèmes,Crèmes UHT,Crèmes sous pression,Crèmes sous pression UHT,Crèmes fouettées",
    countries: "brésil, France, Hong Kong, Norvège, Suisse",
    manufacturing_places: "France",
    origins: "Belgique",
    product_name: "La crème des chefs ferme et onctueuse gastronomique",
  },
  {
    categories:
      "Produits de la mer,Poissons et dérivés,Conserves,Poissons,Poissons gras,Poissons en conserve,Sardines,Sardines en conserve,Sardines sans huile",
    countries: "France",
    manufacturing_places: "bretagne, douarnenez",
    origins: "océan, atlantique, océan, atlantique, nord-est",
    product_name: "Plain Sardines",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Snacks,Cereals and potatoes,Salty snacks,Appetizers,Chips and fries,Crisps,Potato crisps,Flavoured potato crisps,Amuse-gueules,Chips de pommes de terre ondulées",
    countries: "France",
    manufacturing_places:
      "altho, route, Colombie, Koweït, caradec, 56920, Koweït, gérand, France, bretagne",
    origins: "France",
    product_name: "Chips saveur fromage du Jura",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Confiseries, Barres, Confiseries chocolatées, Barres de céréales, Barres chocolatées, Barres chocolatées au lait et aux céréales",
    countries: "autriche, France, allemagne, italie, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Kinder Country",
  },
  {
    categories:
      "Snacks, Snacks salés, Amuse-gueules, Biscuits apéritifs, Bretzels",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Sticks Bretzels d'Alsace L'original",
  },
  {
    categories: "Boissons,Eaux,Eaux de sources,Eaux minérales,Eaux de table",
    countries: "maroc, en:المغرب",
    manufacturing_places: "casablanca, Maroc",
    origins: "maroc",
    product_name: "Aquifina",
  },
  {
    categories:
      "Przekąski,Słodkie przekąski,en:Biscuits and cakes,Herbatnik,Wafle,en:Stuffed wafers",
    countries: "Pologne, rumunia",
    manufacturing_places: "pologne",
    origins: "pologne",
    product_name: "Dare",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Canned foods, Legumes, Seeds, Canned plant-based foods, Legume seeds, Pulses, Chickpeas, Canned legumes, Canned chickpeas",
    countries: "frankreich, Allemagne, vereinigtes, Belgique",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Chickpeas in Water",
  },
  {
    categories:
      "Alternatives à la viande, Galettes végétariennes, Galettes de céréales aux légumes",
    countries: "France",
    manufacturing_places: "sud-ouest, Colombie, Curaçao, France",
    origins:
      "France, european, Réunion, european, Réunion, Curaçao, Liban, european, Réunion, Italie",
    product_name: "Galettes boulghour & épeautre",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals, Flakes, Cereal flakes, Rolled flakes, Porridge, Rolled oats, Plain porridge",
    countries: "France, en:united-kingdom",
    manufacturing_places: "France",
    origins: "oats, from, Émirats arabes unis, Norvège, scotland",
    product_name: "Scott's Porage Oats Original 1000g",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Fromages, Desserts lactés, Desserts lactés fermentés, Yaourts, Fromages à la crème, Fromages-frais-sucres",
    countries: "maroc",
    manufacturing_places: "maroc",
    origins: "",
    product_name: "Perly",
  },
  {
    categories:
      "Produits laitiers, Laits, Laits homogénéisés, Laits UHT, Laits entiers, Laits de vache, Lait entier UHT",
    countries:
      "Sri Lanka, Îles Marshall, Lesotho, Géorgie du Sud-et-les Îles Sandwich du Sud, Congo, en:morocco",
    manufacturing_places: "Sri Lanka, Sri Lanka",
    origins: "Sri Lanka, Sri Lanka",
    product_name: "Lait entier UHT",
  },
  {
    categories:
      "Snacks,Sweet snacks,Biscuits and cakes,Biscuits,Chocolate biscuits,Filled biscuits",
    countries: "Canada, France, Suisse",
    manufacturing_places: "Canada",
    origins: "Canada",
    product_name: "Prince -  Goût Lait -  Choco Au Blé Compet",
  },
  {
    categories:
      "Lanches comida,Lanches doces,Cacau e derivados,Confeitaria,Bombons de chocolate,Barras,Barras de chocolate,en:Chocolate confectionery with dairy filling",
    countries:
      "argélia, austrália, Brésil, Polynésie française, alemanha, Hong Kong, Norvège, hungria, itália, lituânia, marrocos, Portugal, roménia, espanha, suíça",
    manufacturing_places: "Taïwan",
    origins: "taïwan",
    product_name: "Chocolate",
  },
  {
    categories:
      "Snacks, Snacks salés, Amuse-gueules, Chips et frites, Chips, Biscuits apéritifs, Biscuits apéritifs soufflés, Chips-de-lentilles",
    countries: "France",
    manufacturing_places: "France",
    origins: "Italie",
    product_name: "Chips de lentilles saveur tomate mozza",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Dranken,Plantaardige levensmiddelen,Granen en aardappels,Zuivelvervangers,Granen en graanproducten,Melkvervangers,Plantaardige dranken,Plantaardige melken,Tarwemelken,Haverdranken",
    countries: "duitsland, Pays-Bas, spanje, verenigd, Belgique",
    manufacturing_places: "pays-bas",
    origins: "pays-bas",
    product_name: "Alpro Haferdrink, Ungesüßt 1 L, FRESH",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Confectioneries, Chocolate candies, Bonbons",
    countries: "Allemagne, Royaume-Uni, en:france",
    product_name: "Ferrero Rocher",
    origins: "allemagne",
    manufacturing_places: "allemagne",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,White breads",
    countries: "Émirats arabes unis, Norvège",
    manufacturing_places: "émirats, arabes, Tunisie",
    origins:
      "Émirats arabes unis, Norvège, european, Réunion, Curaçao, Liban, european, Réunion",
    product_name: "Sourdough White Ciabattin Bread",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Légumineuses et dérivés, Légumineuses, Graines, Graines de légumineuses, Légumineuses sèches, Lentilles",
    countries: "France, Suisse",
    manufacturing_places:
      "etablissements, l., serrault, Koweït, Swaziland, Lesotho, taillades, Koweït, 12700, capdenac-gare, aveyron, midi-pyrénées, France",
    origins: "Liban, indiqué",
    product_name: "Lentilles Cuisinées à l'Auvergnate",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fats, Spreads, Plant-based spreads, Salted spreads, Spreadable fats, Vegetable fats, Margarines, Light margarines",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Primevère doux sans huile de palme",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie sans croûte",
    countries: "France, allemagne, Suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain de mie nature",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux,Aliments d'origine végétale,Petit-déjeuners,Céréales et pommes de terre,Céréales et dérivés,Céréales pour petit-déjeuner,Céréales aux fruits,Mueslis,Mueslis floconneux,Mueslis aux fruits,Mueslis floconneux aux fruits",
    countries: "France, espagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Muesli aux fruits",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Confiseries, Chocolats, Chocolats noirs, Chocolats fourrés, Chocolats noirs fourrés à la menthe",
    countries: "bélgica, francia, Espagne, Espagne, Mexique",
    manufacturing_places: "york, Espagne, Mexique",
    origins: "Espagne, Mexique",
    product_name: "AFTER EIGHT Coffret 300g",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Spreads, Nuts and their products, Plant-based spreads, Oilseed purees, Legume butters, Nut butters, Peanut butters",
    countries: "France, royaume-uni",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Smooth Peanut butter",
  },
  {
    categories:
      "Beverages,Artificially sweetened beverages,Diet beverages,Energy drinks,Dietary drink for sport,Energy drink with sugar",
    countries:
      "Biélorussie, France, Allemagne, Hongrie, Russie, Espagne, Suisse, Émirats arabes unis, Norvège",
    manufacturing_places: "biélorussie",
    origins: "biélorussie",
    product_name: "Powerade Ice Storm",
  },
  {
    categories: "de:Kakaokekse mit einer Crèmefüllung, en:chocolate-biscuits",
    countries: "rumänien, en:deutschland, en:frankreich, en:schweiz, Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Oreo Original",
  },
  {
    categories:
      "Boissons, Eaux, Eaux de sources, Eaux minérales, Boissons sans alcool, Eaux minérales naturelles",
    countries: "France",
    manufacturing_places: "morgex, italie",
    origins: "France",
    product_name: "Eau Mont Blanc",
  },
  {
    categories:
      "Beverages, Waters, Spring waters, Mineral waters, Non-alcoholic beverages, Natural mineral waters, Low mineral bottled waters",
    countries: "Espagne",
    manufacturing_places: "Espagne",
    origins: "Espagne",
    product_name: "",
  },
  {
    categories: "Condiments, Sauces, Mayonnaises, Dijon mayonnaises, Groceries",
    countries: "frankreich, Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Maille Mayonnaise",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Yaourts, Desserts lactés fermentés aromatisés, Yaourts sucrés, Yaourts au lait de vache, Yaourts aromatisés",
    countries: "France",
    manufacturing_places: "molay-littry, calvados",
    origins:
      "France, Réunion, européenne, Norvège, Liban, Réunion, européenne, Madagascar, normandie",
    product_name: "Les 2 Vaches Vanille Bio de Madagascar 4 x 115 g",
  },
  {
    categories:
      "Snacks, Sweet snacks, Biscuits and cakes, Biscuits, Filled biscuits, Strawberry biscuits",
    countries: "bélgica, francia",
    manufacturing_places: "",
    origins: "",
    product_name: "BN - Strawberry Cookies, 285g (10oz)",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains grillés, Petits pains grillés",
    countries: "frankrijk",
    manufacturing_places: "",
    origins: "",
    product_name: "Grilletine Sans sucres ajoutés Blé complet",
  },
  {
    categories:
      "Beverages, Frozen foods, Artificially sweetened beverages, Tea-based beverages, Iced teas, Still soft drink with tea extract, en:sweetened-beverages",
    countries: "Guyane",
    product_name: "Ice tea",
    origins: "Guyane",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons aux fruits, Jus et nectars, Jus de fruits, Jus de citron",
    countries: "France",
    manufacturing_places: "hpf, getränke, gmbh, Koweït, autriche",
    origins: "koweït",
    product_name: "Pur jus citron bio",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke, Pflanzliche Lebensmittel, Hülsenfrüchte und Hülsenfruchtprodukte, Konserven, Hülsenfrüchte, Samen, Konserven-Produkte auf pflanzlicher Basis, Hülsenfruchtsamen, Getrockenete Hülsenfrüchte, Kichererbsen, Hülsenfrüchte in Dosen, Kichererbsen in Dosen",
    countries: "tsjechië, frankrijk, duitsland, polen, spanje, zwitserland",
    manufacturing_places: "",
    origins: "",
    product_name: "Cooked Chickpeas",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés aromatisés, Yaourts au Bifidus, Yaourts au bifidus aromatisés",
    countries: "Belgique, France",
    manufacturing_places: "France",
    origins: "France",
    product_name:
      "Activia bifidus saveur citron sans arome artificiel 125 g x 4",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Snacks,Cereals and potatoes,Extruded crispbreads",
    countries: "France, Suisse",
    manufacturing_places: "France",
    origins:
      "riz, Norvège, quinoa, origine, Guernesey, Norvège, non-ue., sarrasin, origine, Guernesey",
    product_name: "Tartines Craquantes Multi-Céréales",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Gâteaux, Biscuits sablés",
    countries: "bélgica, francia, suiza",
    manufacturing_places: "toulouse, France",
    origins: "toulouse, France",
    product_name: "Gerblé - Sugar Free Lemon Yuzu Shortbread, 132g (4.7oz)",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Barres, Barres de céréales, Barres de céréales au chocolat",
    countries: "France, Guadeloupe",
    manufacturing_places: "France",
    origins: "France",
    product_name: "LU - Grany Chocolate 5 Cereals Bar x6, 125g (4.5oz)",
  },
  {
    categories:
      "Snacks, Salty snacks, Appetizers, Chips and fries, Crisps, Salty snacks made from potato",
    countries:
      "Algérie, Croatie, Égypte, Hongrie, Irak, Liban, Libye, Maroc, Roumanie, Tunisie",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Sour Cream & Onion Potato Chips",
  },
  {
    categories:
      "Snacks,Desserts,Snacks sucrés,Cacao et dérivés,Confiseries,Biscuits et gâteaux,Confiseries chocolatées,Biscuits,Gâteaux,Biscuits au chocolat,Gâteaux au chocolat",
    countries: "France, allemagne, italie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Kinder - Delice x10, 390g (13.8oz)",
  },
  {
    categories:
      "Condimentos,Salsas,Salsas para pastas,Salsas de tomate,Salsas Arrabbiata",
    countries:
      "Australie, Autriche, bélgica, Bulgarie, dinamarca, finlandia, francia, alemania, Italie, noruega, Espagne, suecia, suiza",
    manufacturing_places:
      "barilla, alimentare, Espagne, Lettonie, mantova, 166, stabilimento, parma, Koweït, Chypre, Italie, italie",
    origins: "Italie",
    product_name: "Arrabbiata",
  },
  {
    categories:
      "Condiments, Vinaigres, Vinaigres balsamiques, Crèmes de vinaigre, Vinaigres balsamiques de Modène, Crèmes de vinaigre balsamique, en:Groceries, Velours De Vinaigre",
    countries: "frankreich, Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Vinaigre Balsamique de Modène 25 cl",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Crêpes et galettes, Biscuits, Galettes, Galette-au-beurre",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Galettes au bon beurre bio",
  },
  {
    categories:
      "Condiments, Sauces, Vegetarian sauces, Mayonnaises, Vegan sauces, Egg-free mayonnaises",
    countries: "France, Émirats arabes unis, Norvège",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Vegan Mayo",
  },
  {
    categories:
      "Sobremesas,Alimentos Congelados,Sobremesas congeladas,Gelados e sorvetes,Gelado,en:Ice cream tubs,en:Luxury ice cream in a cup",
    countries:
      "áustria, bélgica, bulgária, finlândia, Polynésie française, alemanha, espanha",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name:
      "Ванилов сладолед с парчета бисквити с шоколадов чипс и шоколадови парчета",
  },
  {
    categories:
      "Alimentos y bebidas de origen vegetal, Alimentos de origen vegetal, Frutas y verduras y sus productos, Comidas preparadas, Sopas, Sopas de verduras y hortalizas, Sopas frías, Gazpachos",
    countries: "Espagne, en:romania",
    product_name: "Gazpacho Tradicional",
    origins: "espagne",
    manufacturing_places: "espagne",
  },
  {
    categories:
      "Pequenos alomoços,Produtos para barrar,Doces para barrar,fr:Pâtes à tartiner,Creme para barrar de avelã,Creme para barrar de chocolate,Creme para barrar de avelã e cacau,ro:Pasta tartinabila",
    countries:
      "Polynésie française, alemanha, países, baixos, Portugal, espanha",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Pasta tartinabila cu alune de padure si cacao",
  },
  {
    categories: "Snacks,Zoete snacks,Koekjes en cakes,Koekjes,Zandkoekjes",
    countries: "frankrijk, duitsland, zwitserland",
    manufacturing_places: "aisne, France",
    origins: "frankrijk",
    product_name: "Sablés beurré nantais",
  },
  {
    categories:
      "Snacks,Snacks sucrés,en:Sweet pastries and pies,Viennoiseries,Pains au chocolat",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pains au chocolat",
  },
  {
    categories:
      "Produits laitiers,Produits fermentés,Produits laitiers fermentés,Crèmes,Crèmes épaisses,Crèmes UHT,Crèmes fraîches,Crèmes légères",
    countries: "France",
    manufacturing_places: "normandie, France",
    origins: "France, normandie",
    product_name: "La Crème Légère Epaisse 12%MG",
  },
  {
    categories:
      "Produits laitiers,Desserts,Desserts lactés,Entremets - mousses et crème desserts,Desserts au chocolat,Crèmes dessert,Crèmes dessert chocolat,Crèmes dessert chocolat réfrigérées,Crème chocolat",
    countries: "France",
    manufacturing_places: "France",
    origins: "France, tanzanie, Liban, indiqué",
    product_name: "Crèmeuh chocolat",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Légumineuses et dérivés, Produits à tartiner, Fruits à coques et dérivés, Pâtes à tartiner végétales, Purées d'oléagineux, Beurres de légumineuses, Beurres de fruits à coques, Beurres de cacahuètes",
    countries: "France",
    manufacturing_places: "France",
    origins: "Nicaragua, Malawi",
    product_name: "Beurre de cacahuètes du Nicaragua",
  },
  {
    categories:
      "Svačiny,Sladké svačiny,en:Cocoa and its products,en:Confectioneries,en:Bars,en:Chocolate candies,en:bars-covered-with-chocolate,kokosová tyčinka",
    countries:
      "Belgique, Tchéquie, Îles Marshall, Danemark, France, Allemagne, Hongrie, Iran, Monténégro, Maroc, Réunion, Roumanie, Arabie Saoudite, Arabie Saoudite, Serbie, Slovaquie, Suède, Suisse, Tunisie, Émirats arabes unis, Norvège",
    manufacturing_places: "Belgique",
    origins: "fa:شرقی",
    product_name: "Bounty",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Produits laitiers, Produits fermentés, Snacks, Céréales et pommes de terre, Produits laitiers fermentés, Snacks salés, Amuse-gueules, Fromages, Fromages de vache, Pains, en:cooked-pressed-cheeses, Biscuits apéritifs, Emmentals, Pains croustillants",
    countries: "Allemagne, en:france",
    manufacturing_places: "Allemagne",
    origins: "allemagne",
    product_name: "Emmental & graines de courge",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Breakfasts, Cereals and potatoes, Cereals and their products, Breakfast cereals",
    countries: "francia, Espagne",
    manufacturing_places: "burton, Ukraine",
    origins: "Émirats arabes unis, Norvège",
    product_name: "Cereal",
  },
  {
    categories:
      "Snack, Snack dolci, Biscotti e torte, Biscotti, Biscotti al cioccolato, Frollini",
    countries: "Belgique, France, Allemagne, Italie, Suisse",
    manufacturing_places: "Italie",
    origins: "italie",
    product_name: "Gocciole chocolate",
  },
  {
    categories:
      "Boissons, Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Boissons lactées, Desserts lactés fermentés, Boissons fermentées, Yaourts, Compléments alimentaires, Boissons lactées fermentées, Compléments pour le Bodybuilding, Yaourts à boire, Boisson protéinée",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Hipro Fraise Framboise",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Snacks,Granen en aardappels,Knapperige broodproducten",
    countries: "Belgique, frankrijk, duitsland",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Crispbread Original",
  },
  {
    categories: "D,Sucres blancs",
    countries: "francia",
    manufacturing_places: "France",
    origins: "France",
    product_name: "cassonade",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, en:cooked-pressed-cheeses, Fromages de France, Comté",
    countries: "France",
    manufacturing_places: "France",
    origins: "affiné, dans, Curaçao, jura, franche-comté, France",
    product_name: "Comté",
  },
  {
    categories:
      "Seafood,Fishes and their products,Canned foods,Fishes,Fatty fishes,Canned fishes,Fish fillets,Mackerels,Mackerel fillets,Mackerel fillets in mustard sauce,Tinned Mackerels",
    countries: "France",
    manufacturing_places:
      "saupiquet, (s., sas), Koweït, allée, Colombie, kergolvez, Koweït, Swaziland, Colombie, kergolvez, Koweït, 29000, quimper, finistère, bretagne, France",
    origins:
      "atlantic, Territoire britannique de l'océan Indien, north-east, atlantic, Territoire britannique de l'océan Indien, northwest, atlantic, Territoire britannique de l'océan Indien",
    product_name: "Filets de maquereaux - moutarde",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Fromages, Desserts lactés, Desserts lactés fermentés, Fromages à pâte fraîche, Fromages à la crème, Faisselles",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "faisselle",
  },
  {
    categories:
      "Snacks, Snacks salés, Amuse-gueules, Biscuits apéritifs, en:biscuits-aperitifs-souffles",
    countries: "France, en:us",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Saveur Barbecue",
  },
  {
    categories:
      "Snacks, Salty snacks, Appetizers, Crackers, Puffed salty snacks, Puffed salty snacks made from maize, en:puffed-corn-cakes",
    countries: "France, Émirats arabes unis, Norvège",
    product_name: "Lightly Salted Low Fat Corn Cakes",
    origins: "France",
    manufacturing_places: "France",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Spreads, Nuts and their products, Plant-based spreads, Oilseed purees, Legume butters, Nut butters, Peanut butters, Crunchy peanut butters",
    countries: "France, Émirats arabes unis, Norvège",
    origins: "France",
    product_name: "Crunchy Peanut Butter",
    manufacturing_places: "France",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Cereals and potatoes, Breads",
    countries: "Espagne",
    manufacturing_places: "alemania",
    origins: "espagne",
    product_name: "Pan fibra y sésamo",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke, Pflanzliche Lebensmittel, Frühstücke, Getreide und Kartoffeln, Getreideprodukte, Frühstückscerealien, Schokoflocken, Stranggepresstes Getreide, Gefüllte Cerealien, en:Cornflakes",
    countries: "Allemagne, en:france",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Tresor - Choco Nut",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Desserts, Produits laitiers fermentés, Desserts lactés, Desserts lactés fermentés, Desserts lactés fermentés aux fruits, Yaourts, Yaourts aux fruits, Skyrs, Skyrs aux fruits",
    countries: "France",
    manufacturing_places: "France",
    origins: "Slovénie",
    product_name: "Skyr myrtille 2 x 140 g",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Matières grasses, Produits à tartiner, Pâtes à tartiner végétales, Produits à tartiner salés, Matières grasses à tartiner, Matières grasses végétales, Margarines",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "St hubert omega 3 255 g demi sel",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Aliments à base de fruits et de légumes, Légumes et dérivés, Plats préparés, Légumes, Légumes préparés, Carottes, Carottes râpées",
    countries: "Guyane",
    product_name: "Carottes râpées au citron de Sicile",
    origins: "Guyane",
    manufacturing_places: "Guyane",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Légumineuses et dérivés, Snacks, Légumineuses, Snacks salés, Fruits à coques et dérivés, Fruits à coques, Fruits à coque grillés, Cacahuètes, Fruits à coque salés, Cacahuète grillée salée, Cacahuètes grillées, Cacahuètes salées, Cacahuètes décortiquées",
    countries: "Belgique, bulgarie, France, hongrie, espagne, suède",
    manufacturing_places: "Belgique",
    origins: "Liban, indiqué",
    product_name: "Cacahuètes - grillées & salées",
  },
  {
    categories:
      "Pflanzliche Lebensmittel und Getränke,Pflanzliche Lebensmittel,Konserven,Eingelegte Lebensmittel,Olivenbaumprodukte,Pflanzliches eingelegtes Pflanze,Oliven,Grüne Oliven,Kernlose Oliven,Grüne kernlose Oliven",
    countries: "frankreich, Allemagne, polen, Suisse, vereinigtes, Belgique",
    manufacturing_places: "hiszpania",
    origins: "allemagne",
    product_name: "Gemüse Oliven, grün, ohne Stein",
  },
  {
    categories: "Condiments, Sauces, Mayonnaises, Groceries",
    countries: "France",
    manufacturing_places: "France",
    origins:
      "huile, Colombie, colza, Colombie, France, fr:œufs, Colombie, France",
    product_name: "Mayonnaise Classique",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Cacao et dérivés, Chocolats, Chocolats noirs, Chocolats au lait",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Excellence Extra Fondant Lait",
  },
  {
    categories:
      "Млечни продукти,Мазнини,Крем за мазане,en:Spreadable fats,Животински мазнини,Млечни мазнини,Млечни кремове,Краве масло,Безсолно масло",
    countries: "франция, мароко, реюнион, Bulgarie, белгия, швейцария",
    manufacturing_places: "normandie, France",
    origins: "France",
    product_name: "Краве масло 82%",
  },
  {
    categories:
      "Plant-based foods and beverages,Plant-based foods,Cereals and potatoes,Breads,Rusks,Wholemeal rusks",
    countries: "France, Guyane, Polynésie française, Espagne",
    manufacturing_places: "francia, France",
    origins: "union-europenne, fr:unión, europea",
    product_name: "BISCOTTES COMPLETES BIO",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Meals, Prepared vegetables, Baked beans in tomato sauce",
    countries: "Royaume-Uni, en:united-kingdom",
    manufacturing_places: "Italie",
    origins: "italie",
    product_name: "Baked Beans In Tomato Sauce",
  },
  {
    categories:
      "Snacks, Sweet snacks, Biscuits and cakes, Biscuits, Chocolate biscuits, Biscuits au chocolat, Biscuits au chocolat au lait, Biscuits et gâteaux, Biscuits fourrés, Snacks sucrés, en:filled-biscuits",
    countries: "France, Curaçao, Réunion, états-unis",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Prince Goût Tout Choco Au Blé Complet",
  },
  {
    categories:
      "Snacks, Sweet snacks, Cocoa and its products, Chocolates, Dark chocolates",
    countries: "bélgica, francia, reunión",
    manufacturing_places: "",
    origins: "",
    product_name: "Chocolat noir Bio 70%",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Snacks, Sweet snacks, Nuts and their products, Bars, Dietary supplements, Bodybuilding supplements, Nut bars, Peanut bars, Protein bars, en:cereal-bars",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Protein Caramel salé Cacahuètes",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Fromages, Fromages de Grèce, Fromages pasteurisés, Fromages de brebis, Fetan, Blocs de feta",
    countries: "France",
    manufacturing_places: "epirus, Grèce",
    origins: "Grèce, fr:epire",
    product_name: "FETA AOP GRECQUE",
  },
  {
    categories:
      "Lácteos, Comidas fermentadas, Postres, Productos fermentados de la leche, Postres lácteos, en:Fermented dairy desserts, Yogures, Yogures estilo griego, de:Grichischer Joghurt",
    countries: "bélgica, francia, alemania, irlanda, Espagne, Espagne, Mexique",
    manufacturing_places: "Allemagne",
    origins: "unión, europea",
    product_name: "Yogur Griego Natural Light",
  },
  {
    categories: "Condiments, Sauces, Mustards, Dijon mustards, Groceries",
    countries: "France, en:belgium",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Moutarde de Dijon",
  },
  {
    categories:
      "Beverages, Carbonated drinks, Waters, Artificially sweetened beverages, Non-alcoholic beverages, Carbonated waters, Sweetened beverages, en:flavored-waters",
    countries: "France",
    manufacturing_places: "saint-alban, (44)",
    origins: "France",
    product_name: "Eau gazeuse au citron",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Biscuits et gâteaux, Biscuits, Biscuits secs, en:Biscuits et gâteaux, en:Biscuits secs, en:Snacks sucrés",
    countries: "francia, en:la, Réunion, en:suisse",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Crousti'Son Miel 🍯🐝Sésame",
  },
  {
    categories: "Beverages, Carbonated drinks, Sodas, Sweetened beverages",
    countries: "France, Roumanie",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Boissons, Boissons à base de végétaux, Boissons édulcorées, Boissons au thé, Thés glacés, Thés glacés saveur pêche",
    countries: "Belgique, France, en:luxembourg",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "FuzeTea Thé noir évasion pêche & saveur hibiscus",
  },
  {
    categories: "chocolat",
    countries: "frankrijk",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Chocolat noir extra-supérieur aux amandes entières",
  },
  {
    categories:
      "en:Beverages and beverages preparations,Alimentos e bebidas à base de plantas,Bebidas,en:Dairy substitutes,Substitutos do leite,Bebidas à base de plantas,Leites de planta,Produtos pasteurizados,Bebidas de coco",
    countries:
      "bélgica, croácia, Polynésie française, alemanha, hungria, itália, Portugal, roménia, espanha, suíça, Espagne, Mexique, eslovénia",
    manufacturing_places: "Polynésie française, Polynésie française",
    origins: "Polynésie française, Polynésie française",
    product_name: "Coco Sans Sucres",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Fruits and vegetables based foods, Canned foods, Condiments, Vegetables based foods, Canned plant-based foods, Pickles, Canned vegetables, Plant-based pickles, Pickled vegetables, Pickled cucumbers, Gherkins, Extra-fine gherkins, Pickled gherkins, Groceries",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales aux fruits, Mueslis, Mueslis aux fruits",
    countries: "France",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Muesli",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Condiments, Epices, Sels, Sels fins, en:groceries",
    countries: "frankrijk, Réunion, zwitserland",
    manufacturing_places: "u.e.",
    origins: "Réunion",
    product_name: "Sel fin iodé",
  },
  {
    categories:
      "Snacks, Snacks sucrés, Viennoiseries, Brioches, Brioches tressées",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "brioche tressée",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages à tartiner",
    countries: "France",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Le goût primeur - Ligne & plaisir",
  },
  {
    categories: "Soy sauces",
    countries: "Belgique, France, Allemagne, Espagne",
    manufacturing_places:
      "sappemeer, hoogezand-sappemeer, groninga, (provincia), países, bajos",
    origins: "Pays-Bas",
    product_name: "Soy sauce",
  },
  {
    categories:
      "Alimentos e bebidas à base de plantas,Alimentos à base de plantas,Pequenos alomoços,Cereais e Batatas,Cereais e seus produtos,Cereias para pequeno-almoçco,Cereais com frutos,Muesli,Mueslis com frutos",
    countries: "Portugal, espanha",
    manufacturing_places: "Portugal",
    origins: "Portugal",
    product_name: "Muesli Frutas",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Petit-déjeuners, Céréales et pommes de terre, Céréales et dérivés, Céréales pour petit-déjeuner, Céréales au chocolat, Céréales extrudées, Céréales fourrées",
    countries: "frankreich, Allemagne",
    manufacturing_places: "allemagne",
    origins: "allemagne",
    product_name: "Céréales trésor - chocolat au lait",
  },
  {
    categories:
      "Aliments et boissons à base de végétaux, Aliments d'origine végétale, Céréales et pommes de terre, Pains, Pains de mie, Pains de mie blancs nature",
    countries: "France, en:belgium",
    manufacturing_places: "France",
    origins: "France",
    product_name: "Pain 100% mie nature sans sucre ajouté",
  },
  {
    categories:
      "Produits laitiers, Produits fermentés, Produits laitiers fermentés, Produits à tartiner, Fromages, Produits à tartiner salés, Fromages de vache, Fromages pasteurisés, Fromages à tartiner, Fromages Ail et fines herbes",
    countries: "France, allemagne",
    manufacturing_places: "France",
    origins: "France, Réunion, européenne",
    product_name: "Tartare Ail & Fines herbes",
  },
  {
    categories:
      "Plantaardige levensmiddelen en dranken,Plantaardige levensmiddelen,Ontbijten,Granen en aardappels,Granen en graanproducten,Ontbijtgranen,Mueslis,Ontbijtgranen met noten,Mueslis met noten",
    countries: "Belgique, frankrijk, italië, spanje",
    manufacturing_places: "Belgique",
    origins: "Belgique",
    product_name: "Muesli 4 nuts",
  },
  {
    categories:
      "Plant-based foods and beverages, Plant-based foods, Legumes and their products, Canned foods, Legumes, Canned plant-based foods, Meals, Prepared vegetables, Canned legumes, Baked beans in tomato sauce, Canned common beans",
    countries: "Royaume-Uni",
    product_name: "Baked Beans",
    origins: "royaume-uni",
    manufacturing_places: "royaume-uni",
  },
];
