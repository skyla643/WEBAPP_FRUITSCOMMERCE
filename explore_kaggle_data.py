import kagglehub
import os

# The name of the dataset you want to download
dataset_name = "unitednations/crop-statistics-fao-all-countries"

# The path where you want to download the dataset
download_path = "data"  # kagglehub will create a subdirectory

try:
    print(f"Downloading dataset '{dataset_name}' to '{download_path}'...")
    downloaded_path = kagglehub.dataset_download(
        dataset_name, path=download_path, quiet=False, unzip=True
    )
    print(f"Dataset downloaded and extracted to: {downloaded_path}")
except Exception as e:
    print(f"An error occurred during download: {e}")
    print("Make sure you have set up your Kaggle API keys correctly.")
    print("Refer to the instructions provided earlier on how to do this.")