import joblib
import numpy as np

model_path = '/home/agnes/Health/backend/backendApp/notebooks/kidney.pkl'
model = joblib.load(model_path)

print(f'Loaded model: {model}')

test_input = np.array([[48,70,1.005,4,0,1,0,1,0,117,56,3.8,111,2.5,	11.2,32,6700,3.9,1,0,0,0,1,1]])

prediction = model.predict(test_input)

print(f'Test prediction is : {prediction}')