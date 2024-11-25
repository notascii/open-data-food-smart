#!/bin/bash

# set -u
# set -x
# set -e

OUTPUT_FILE="products_data.js"

echo "const products = [" > $OUTPUT_FILE

# Get the first 600 pages from the API
for PAGE in {1..45}
do
    echo "Fetching page $PAGE"
    RESPONSE=$(curl -s "https://world.openfoodfacts.net/api/v2/search?fields=product_name,manufacturing_places,countries,origins,categories&json=true&page=$PAGE")
    PRODUCTS=$(echo "$RESPONSE" | jq -c '.products[]')

    # Append each product to the output file
    while IFS= read -r PRODUCT
    do
        # Parse product JSON
        ORIGINS=$(echo "$PRODUCT" | jq -r '.origins | @sh' | sed "s/'//g")
        MANUFACTURING_PLACES=$(echo "$PRODUCT" | jq -r '.manufacturing_places | @sh' | sed "s/'//g")
        COUNTRIES=$(echo "$PRODUCT" | jq -r '.countries | @sh' | sed "s/'//g")

        # Remove any prefixes like "en:" or "fr:" from origins, manufacturing_places, and countries
        ORIGINS=$(echo "$ORIGINS" | sed -E 's/^(en:|fr:)\s*//g')
        MANUFACTURING_PLACES=$(echo "$MANUFACTURING_PLACES" | sed -E 's/^(en:|fr:)\s*//g')
        COUNTRIES=$(echo "$COUNTRIES" | sed -E 's/^(en:|fr:)\s*//g')

 # Function to perform a retryable curl request
        retry_curl() {
            local URL=$1
            local RESPONSE_CODE="000"
            local MAX_RETRIES=3
            local RETRY_COUNT=0

            while [ "$RESPONSE_CODE" == "000" ] && [ $RETRY_COUNT -lt $MAX_RETRIES ]
            do
                RESPONSE_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
                if [ "$RESPONSE_CODE" == "000" ]; then
                    echo "Request failed, retrying... ($((RETRY_COUNT+1))/$MAX_RETRIES)"
                    ((RETRY_COUNT++))
                    sleep 1
                fi
            done

            echo "$RESPONSE_CODE"
        }

        
        # Fill missing origins with a country from manufacturing_places or countries if available
        if [ "$ORIGINS" == "null" ] || [ -z "$ORIGINS" ]; then
            if [ "$MANUFACTURING_PLACES" != "null" ] && [ -n "$MANUFACTURING_PLACES" ]; then
                for PLACE in $(echo "$MANUFACTURING_PLACES" | tr ',' '\n')
                do
                    PLACE=$(echo "$PLACE" | xargs | awk '{print tolower($0)}')
                    RESPONSE=$(retry_curl "https://restcountries.com/v3.1/name/${PLACE}")
                    if [ "$RESPONSE" == "200" ]; then
                        IS_COUNTRY=$(curl -s "https://restcountries.com/v3.1/name/${PLACE}" | jq -r '.[0].translations.fra.common // empty')
                        if [ -n "$IS_COUNTRY" ]; then
                            ORIGINS="$IS_COUNTRY"
                            break
                        fi
                    fi
                done
            fi
            # If no valid country found in manufacturing_places, try countries
            if [ "$ORIGINS" == "null" ] || [ -z "$ORIGINS" ]; then
                if [ "$COUNTRIES" != "null" ] && [ -n "$COUNTRIES" ]; then
                    for COUNTRY in $(echo "$COUNTRIES" | tr ',' '\n')
                    do
                        COUNTRY=$(echo "$COUNTRY" | xargs | awk '{print tolower($0)}')
                        RESPONSE=$(retry_curl "https://restcountries.com/v3.1/name/${COUNTRY}")
                        if [ "$RESPONSE" == "200" ]; then
                            IS_COUNTRY=$(curl -s "https://restcountries.com/v3.1/name/${COUNTRY}" | jq -r '.[0].translations.fra.common // empty')
                            if [ -n "$IS_COUNTRY" ]; then
                                ORIGINS="$IS_COUNTRY"
                                break
                            fi
                        fi
                    done
                fi
            fi
        fi

        # Fill missing manufacturing_places with a country from countries if available
        if [ "$MANUFACTURING_PLACES" == "null" ] || [ -z "$MANUFACTURING_PLACES" ]; then
            if [ "$COUNTRIES" != "null" ] && [ -n "$COUNTRIES" ]; then
                for COUNTRY in $(echo "$COUNTRIES" | tr ',' '\n')
                do
                    COUNTRY=$(echo "$COUNTRY" | xargs | awk '{print tolower($0)}')
                    RESPONSE=$(retry_curl "https://restcountries.com/v3.1/name/${COUNTRY}")
                    if [ "$RESPONSE" == "200" ]; then
                        IS_COUNTRY=$(curl -s "https://restcountries.com/v3.1/name/${COUNTRY}" | jq -r '.[0].translations.fra.common // empty')
                        if [ -n "$IS_COUNTRY" ]; then
                            MANUFACTURING_PLACES="$IS_COUNTRY"
                            break
                        fi
                    fi
                done
            fi
        fi

        # Translate all names in origins, manufacturing_places, and countries fields
        if [ "$ORIGINS" != "null" ] && [ -n "$ORIGINS" ]; then
            ORIGINS_TRANSLATED=""
            for ORIGIN in $(echo "$ORIGINS" | tr ',' '\n')
            do
                ORIGIN=$(echo "$ORIGIN" | xargs | awk '{print tolower($0)}')
                RESPONSE=$(retry_curl "https://restcountries.com/v3.1/name/${ORIGIN}")
                if [ "$RESPONSE" == "200" ]; then
                    TRANSLATED=$(curl -s "https://restcountries.com/v3.1/name/${ORIGIN}" | jq -r --arg origin "$ORIGIN" '.[0].translations.fra.common // $origin')
                else
                    TRANSLATED="$ORIGIN"
                fi
                ORIGINS_TRANSLATED+="$TRANSLATED, "
            done
            ORIGINS=$(echo "$ORIGINS_TRANSLATED" | sed 's/, $//')
        fi

        if [ "$MANUFACTURING_PLACES" != "null" ] && [ -n "$MANUFACTURING_PLACES" ]; then
            MANUFACTURING_PLACES_TRANSLATED=""
            for PLACE in $(echo "$MANUFACTURING_PLACES" | tr ',' '\n')
            do
                PLACE=$(echo "$PLACE" | xargs | awk '{print tolower($0)}')
                RESPONSE=$(retry_curl "https://restcountries.com/v3.1/name/${PLACE}")
                if [ "$RESPONSE" == "200" ]; then
                    TRANSLATED=$(curl -s "https://restcountries.com/v3.1/name/${PLACE}" | jq -r --arg place "$PLACE" '.[0].translations.fra.common // $place')
                else
                    TRANSLATED="$PLACE"
                fi
                MANUFACTURING_PLACES_TRANSLATED+="$TRANSLATED, "
            done
            MANUFACTURING_PLACES=$(echo "$MANUFACTURING_PLACES_TRANSLATED" | sed 's/, $//')
        fi

        if [ "$COUNTRIES" != "null" ] && [ -n "$COUNTRIES" ]; then
            COUNTRIES_TRANSLATED=""
            for COUNTRY in $(echo "$COUNTRIES" | tr ',' '\n')
            do
                COUNTRY=$(echo "$COUNTRY" | xargs | awk '{print tolower($0)}')
                RESPONSE=$(retry_curl "https://restcountries.com/v3.1/name/${COUNTRY}")
                if [ "$RESPONSE" == "200" ]; then
                    TRANSLATED=$(curl -s "https://restcountries.com/v3.1/name/${COUNTRY}" | jq -r --arg country "$COUNTRY" '.[0].translations.fra.common // $country')
                else
                    TRANSLATED="$COUNTRY"
                fi
                COUNTRIES_TRANSLATED+="$TRANSLATED, "
            done
            COUNTRIES=$(echo "$COUNTRIES_TRANSLATED" | sed 's/, $//')
        fi

        # Update product JSON with translated origins, manufacturing_places, and countries
        UPDATED_PRODUCT=$(echo "$PRODUCT" | jq --arg origins "$ORIGINS" --arg manufacturing_places "$MANUFACTURING_PLACES" --arg countries "$COUNTRIES" '.origins = $origins | .manufacturing_places = $manufacturing_places | .countries = $countries')
        echo "$UPDATED_PRODUCT," >> $OUTPUT_FILE
    done <<< "$PRODUCTS"

done

# Close the products array
sed -i '' -e '$ s/,$//' $OUTPUT_FILE  # Remove the last comma
echo "]" >> $OUTPUT_FILE

echo "Data fetching complete. Saved to $OUTPUT_FILE"
