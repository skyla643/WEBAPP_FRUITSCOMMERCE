import kagglehub
import os

dataset_name = "raghavramasamy/crop-statistics-fao-all-countries"
download_path = "data/crop-statistics-fao-all-countries"
os.makedirs(download_path, exist_ok=True)

try:
    print(f"Attempting direct download of dataset '{dataset_name}' to '{download_path}'...")
    downloaded_files = kagglehub.dataset_download_files(
        dataset_name,
        path=download_path,
        unzip=True,
        force=True  # Overwrite existing files if any
    )
    print("Download successful. Files downloaded:", downloaded_files)
except Exception as e:
    print(f"An error occurred during download: {e}")
    print("Please ensure your Kaggle API keys are correctly set up in ~/.kaggle/kaggle.json")