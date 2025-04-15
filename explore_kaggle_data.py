import kagglehub
import pandas as pd
import os

# Define the directory where you want to download the data (within your project)
download_directory = './kaggle_data'

# Create the directory if it doesn't exist
os.makedirs(download_directory, exist_ok=True)

try:
    # Download the dataset to the specified directory
    download_path = kagglehub.download(
        "raghavramasamy/crop-statistics-fao-all-countries",
        path=download_directory,
        force=False  # Only download if it doesn't exist
    )
    print("Dataset downloaded to:", download_path)

    # Assuming the main data file is 'Crops_AllData_Normalized.csv'
    file_path = os.path.join(download_path, 'Crops_AllData_Normalized.csv')

    # Load the CSV file into a pandas DataFrame
    try:
        df = pd.read_csv(file_path)
        print("Dataset loaded successfully!")

        # Now you can explore the DataFrame
        print("\nFirst few rows of the DataFrame:")
        print(df.head())

        print("\nInformation about the DataFrame:")
        df.info(verbose=False, memory_usage='deep')

        print("\nUnique values in the 'Item' column:")
        print(df['Item'].unique())

        # Filter for rows containing 'Citrus Fruit'
        citrus_df = df[df['Item'] == 'Citrus Fruit']
        print("\nFirst few rows of data for 'Citrus Fruit':")
        print(citrus_df.head())

        # You can further filter for specific countries or elements (like 'Production')
        world_citrus_production = citrus_df[citrus_df['Element'] == 'Production']
        print("\nFirst few rows of 'Citrus Fruit' production data:")
        print(world_citrus_production.head())

        # To get unique countries:
        print("\nUnique countries in the Citrus Fruit production data:")
        print(world_citrus_production['Area'].unique())

    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
    except Exception as e:
        print(f"An error occurred while loading the CSV: {e}")

except Exception as e:
    print(f"An error occurred during download: {e}")
    print("Make sure you have set up your Kaggle API keys correctly.")
    print("Refer to the instructions provided earlier on how to do this.")