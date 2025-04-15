import mlcroissant as mlc
import pandas as pd

# The Kaggle dataset URL (using the Croissant download link)
dataset_url = 'https://www.kaggle.com/datasets/raghavramasamy/crop-statistics-fao-all-countries/croissant/download'

try:
    print(f"Fetching Croissant metadata from: {dataset_url}")
    croissant_dataset = mlc.Dataset(dataset_url)

    # Check what record sets are in the dataset
    record_sets = croissant_dataset.metadata.record_sets
    print("Available Record Sets:", [rs.name for rs in record_sets])

    if record_sets:
        # Assuming the data is in the first record set
        record_set_id = record_sets[0].uuid
        record_set_name = record_sets[0].name
        print(f"Loading data from Record Set: '{record_set_name}' (ID: {record_set_id})")

        # Fetch the records and put them in a DataFrame
        record_set_df = pd.DataFrame(croissant_dataset.records(record_set=record_set_id))
        print("\nFirst 5 records of the DataFrame:")
        print(record_set_df.head())

        # Now you have the data in a Pandas DataFrame (record_set_df)
        # You can save it to a CSV file if needed for your backend:
        csv_output_path = 'data/crop-statistics-fao-all-countries/Crops_AllData_Normalized.csv'
        record_set_df.to_csv(csv_output_path, index=False)
        print(f"\nData saved to: {csv_output_path}")

    else:
        print("No record sets found in the dataset metadata.")

except Exception as e:
    print(f"An error occurred: {e}")
    print("Make sure your internet connection is stable and the Kaggle URL is correct.")
    # Authentication might still be an issue if the metadata retrieval requires it.
    # If you still face issues, we might need to revisit the Kaggle API key setup.