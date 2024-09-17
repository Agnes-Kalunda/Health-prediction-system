import joblib
import numpy as np
import sklearn
import os

print(f"scikit-learn version: {sklearn.__version__}")
print(f"NumPy version: {np.__version__}")
print(f"joblib version: {joblib.__version__}")

model_path = '/home/agnes/Health/backend/backendApp/notebooks/kidneyy.pkl'

# Debugging: Check if the file exists
print(f"Checking if model file exists at: {model_path}")
print(f"File exists: {os.path.exists(model_path)}")

# Debugging: Attempt to read the file
try:
    with open(model_path, 'rb') as f:
        print("Model file read successfully")
except Exception as e:
    print(f"Error reading model file: {str(e)}")

# Debugging: Load the model
try:
    model = joblib.load(model_path)
    print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {str(e)}")
    model = None

if model:
    print(f'Loaded model: {model}')

    # Debugging: Test input shape
    test_input = np.array([[48,70,1.005,4,0,1,0,1,0,117,56,3.8,111,2.5,11.2,32,6700,3.9,1,0,0,0,1,0,1]])
    print(f'Test input shape: {test_input.shape}')
    
    # Debugging: Attempt to make a prediction
    try:
        prediction = model.predict(test_input)
        print(f'Test prediction is : {prediction}')
    except Exception as e:
        print(f"Error making prediction: {str(e)}")
