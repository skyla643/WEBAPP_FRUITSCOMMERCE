from kagglehub import KaggleApi
import os

# Your Kaggle API credentials (ensure these are set up)

# The path where you want to download the dataset
download_path = 'data/crop-statistics-fao-all-countries'

# Ensure the download directory exists
os.makedirs(download_path, exist_ok=True)

# Initialize the Kaggle API
api = KaggleApi()
api.authenticate()  # This will use your credentials

# The name of the dataset you want to download
dataset_name = 'unitednations/crop-statistics-fao-all-countries'

try:
    print(f"Downloading dataset '{dataset_name}' to '{download_path}'...")
    api.dataset_download_files(dataset_name, path=download_path, unzip=True)
    print("Dataset downloaded and extracted successfully!")
except Exception as e:
    print(f"An error occurred during download: {e}")
    print("Make sure you have set up your Kaggle API keys correctly.")
    print("Refer to the instructions provided earlier on how to do this.")