import pandas as pd
from countries import country_acronyms as acronyms

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
    ).dropna(subset=COLUMNS)  # Drop rows with any NaN

    columns_to_work = ["origins_tags", "manufacturing_places_tags", "countries_tags"]
    for col in columns_to_work:
        # split origins tags in a list, and remove prefix (if any) for each tag in the list
        df[f"{col}_std"] = df[col].apply(
            lambda tags: [
                tag.strip()[3:].replace("-", " ")
                if ":" in tag
                else tag.strip().replace("-", " ")
                for tag in tags.split(',')
            ]
        )

        # replace every alternative names with it's standard name as defined in country_acronyms
        df[f"{col}_std"] = df[f"{col}_std"].apply(
            lambda tags: [ acronyms.get_group(tag, f"NF:{tag}") for tag in tags ]
        )

    # filter out rows containing "NF:"
    # Create a mask that checks ALL specified columns
    columns_filtered = [col + "_std" for col in columns_to_work]
    mask = ~df[columns_filtered].apply(
        lambda row: any(
            any(str(val).startswith('NF:') for val in col_list) 
            for col_list in row
        ), 
        axis=1
    )
    filtered_df = df[mask]

    filtered_df.to_csv(
        DATA_DIR_RELATIVE_PATH + "cleaned_data_v2.csv",
        sep=",",
        columns=["product_name", "origins_tags_std", "manufacturing_places_tags_std", "countries_tags_std"],
        index=False,
    )


if __name__ == "__main__":
    main()
