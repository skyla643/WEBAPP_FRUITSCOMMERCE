#!/usr/bin/env python3

# Pandas is a powerful data manipulation and analysis library for Python
# It provides data structures like DataFrames for efficient data handling
# and tools for reading/writing data, data cleaning, and statistical analysis

import pandas as pd

# Example of using pandas
if __name__ == "__main__":
    # Create a simple DataFrame
    data = {
        'Name': ['John', 'Anna', 'Peter', 'Linda'],
        'Age': [28, 34, 29, 42],
        'City': ['New York', 'Boston', 'San Francisco', 'Chicago']
    }
    
    df = pd.DataFrame(data)
    
    # Display the DataFrame
    print("Created DataFrame:")
    print(df)
    
    # Simple data analysis
    print("\nBasic statistics:")
    print(f"Average age: {df['Age'].mean()}")
    print(f"Oldest person: {df.loc[df['Age'].idxmax()]['Name']}")
    print(f"Youngest person: {df.loc[df['Age'].idxmin()]['Name']}")

