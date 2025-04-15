import requests
import pandas as pd
import os

dataset_url = "https://www.kaggle.com/datasets/raghavramasamy/crop-statistics-fao-all-countries/download"
download_path = "data/crop-statistics-fao-all-countries"
output_filename = "Crops_AllData_Normalized.csv.zip"
output_path = os.path.join(download_path, output_filename)
extracted_filename = "Crops_AllData_Normalized.csv"
extracted_path = os.path.join(download_path, extracted_filename)

os.makedirs(download_path, exist_ok=True)

try:
    print(f"Downloading dataset from: {dataset_url}")
    # You might need to be logged in to Kaggle and have cookies enabled for this direct download
    response = requests.get(dataset_url, stream=True)
    response.raise_for_status()  # Raise an exception for bad status codes

    with open(output_path, 'wb') as file:
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)
    print(f"Dataset downloaded to: {output_path}")

    # Unzip the file
    import zipfile
    with zipfile.ZipFile(output_path, 'r') as zip_ref:
        zip_ref.extract(extracted_filename, download_path)
    print(f"Extracted to: {extracted_path}")

    # Try reading the CSV with pandas
    try:
        df = pd.read_csv(extracted_path)
        print("\nFirst 5 rows of the DataFrame:")
        print(df.head())
        print("\nData loaded successfully!")
    except Exception as e:
        print(f"Error reading CSV with pandas: {e}")

except requests.exceptions.RequestException as e:
    print(f"Error during download: {e}")
    print("You might need to download the file manually from Kaggle and place it in the 'data/crop-statistics-fao-all-countries/' directory.")
except zipfile.BadZipFile as e:
    print(f"Error unzipping the file: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")