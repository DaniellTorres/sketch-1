import os
import time
import requests
import json

def monitor_folder(folder_path, server_url):
    while True:
        for filename in os.listdir(folder_path):
            if filename.endswith('.json'):
                file_path = os.path.join(folder_path, filename)
                with open(file_path, 'r') as file:
                    data = json.load(file)
                    requests.post(server_url, json=data)
                    print("Sent", data)
        time.sleep(2)  


monitor_folder('/Users/daniellotorres/Documents/Projects/repos/sketch-1/data', 'http://localhost:3000/upload')
