import pandas as pd
from countries import country_acronyms

DATA_DIR_RELATIVE_PATH = "../data/"

DATASET_PATH = DATA_DIR_RELATIVE_PATH + "en.openfoodfacts.org.products.csv"

def main():
    COLUMNS = [
        "product_name",
        "origins_tags",   # Ingredient Origin
        "manufacturing_places_tags", # Manufacturing
        "countries_tags", # Consumption Place
    ]

    df = pd.read_csv(
        DATASET_PATH,
        usecols=COLUMNS,
        sep="\t",
        on_bad_lines='skip',
        nrows=500,
    ).dropna(subset=COLUMNS)  # Drop rows with any NaN

    # split origins tags in a list, and remove prefix (if any) for each tag in the list
    df["origins_tags_split"] = df["origins_tags"].apply(
        lambda tags: [ tag.strip()[3:] if ":" in tag else tag.strip() for tag in tags.split(',') ]
    )

    # replace every alternative names with it's standard name as defined in country_acronyms
    df["origins_tags_split_std"] = df["origins_tags_split"].apply(
        lambda tags: [ country_acronyms.get_group(tag, f"NF:{tag}") for tag in tags ]
    )

    print(df)

if __name__ == "__main__":
    main()
