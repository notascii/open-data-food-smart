import pandas as pd
from countries import country_acronyms, region_country, subregion_country

# Constants
DATA_DIR_RELATIVE_PATH = "../data/"

DATASET_PATH = "en.openfoodfacts.org.products.csv"

# Read columns and drop NaN values
COLUMNS = [
    "product_name",
    "origins_tags",   # Ingredient Origin
    "manufacturing_places_tags", # Manufacturing
    "countries_tags", # Consumption Place
]

df = pd.read_csv(
    DATA_DIR_RELATIVE_PATH+DATASET_PATH,
    usecols=COLUMNS,
    sep="\t",
    on_bad_lines='skip'
).dropna(subset=COLUMNS)  # Drop rows with any NaN


for country, count in df[~df["origins_tags"].isin(country_acronyms.get_all_elts())].value_counts("origins_tags").items():
    print(f"\t\t\"{country}\",        {count}")