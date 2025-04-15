import requests
import pandas as pd
import os

dataset_url = "https://www.kaggle.com/datasets/raghavramasamy/crop-statistics-fao-all-countries/download"
download_path = "data/crop-statistics-fao-all-countries"
output_filename = "Crops_AllData_Normalized.csv"
output_path = os.path.join(download_path, output_filename)

os.makedirs(download_path, exist_ok=True)

try:
    print(f"Downloading dataset from: {dataset_url}")
    response = requests.get(dataset_url, stream=True)
    response.raise_for_status()

    with open(output_path, 'wb') as file:
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)
    print(f"Dataset downloaded to: {output_path}")

    # Try reading the CSV with pandas, specifying the separator
    try:
        df = pd.read_csv(output_path, sep=',')  # Try comma as separator first
        print("\nFirst 5 rows of the DataFrame (comma-separated):")
        print(df.head())
        print("\nData loaded successfully!")
    except Exception as e_comma:
        print(f"Error reading CSV with comma separator: {e_comma}")
        try:
            df = pd.read_csv(output_path, sep=';')  # Try semicolon as separator
            print("\nFirst 5 rows of the DataFrame (semicolon-separated):")
            print(df.head())
            print("\nData loaded successfully!")
        except Exception as e_semicolon:
            print(f"Error reading CSV with semicolon separator: {e_semicolon}")
            try:
                df = pd.read_csv(output_path, sep='\t')  # Try tab as separator
                print("\nFirst 5 rows of the DataFrame (tab-separated):")
                print(df.head())
                print("\nData loaded successfully!")
            except Exception as e_tab:
                print(f"Error reading CSV with tab separator: {e_tab}")
                print("Could not successfully read the CSV file with common delimiters.")

except requests.exceptions.RequestException as e:
    print(f"Error during download: {e}")
    print("You might need to download the file manually from Kaggle and place it in the 'data/crop-statistics-fao-all-countries/' directory.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")