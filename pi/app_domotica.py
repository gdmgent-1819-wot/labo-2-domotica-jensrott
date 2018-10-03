import firebase_admin
from firebase_admin import credentials, db
from sense_hat import SenseHat
from time import time, sleep
import os
import sys
import random
from math import floor, ceil

serviceAccountKey = '../serviceAccountKey.json'
databaseURL = 'https://wot1-domotica.firebaseio.com/'

try:
    cred = credentials.Certificate(serviceAccountKey)
    default_app = firebase_admin.initialize_app(cred, options={
        'databaseURL' : databaseURL
    })
    
    firebase_ref_pi_domotica = db.reference('domotica')

except:
    print('Unable to initialize Firebase: {}'.format(sys.exc_info()[0]))
    sys.exit(1)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)

except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)



def main():
    while True:
        

if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sys.exit(0)