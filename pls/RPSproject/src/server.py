from pyrebase import pyrebase
from flask import Flask, request

#Server
api = {
    "mike",
    "david",
    "lew"
}
app = Flask(__name__)

@app.route('/')
def home():
    return "hi"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

#Firebase
config = {
    "apiKey": "AIzaSyASf_ds9BSegYJsyq2Dkc8r6L9pI-7RKWg",
    "authDomain": "rpspj-aadca.firebaseapp.com",
    "databaseURL": "https://rpspj-aadca.firebaseio.com",
    "projectId": "rpspj-aadca",
    "storageBucket": "rpspj-aadca.appspot.com",
    "messagingSenderId": "1023893398552"
}

firebase = pyrebase.initialize_app(config)

auth = firebase.auth()

email = input("please enter your username.\n")

user = auth.create_user_with_email_and_password(email)

auth.get_account_info(user["idToken"])