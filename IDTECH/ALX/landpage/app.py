from flask import Flask, render_template, request
from vsearch import letterSearch

app = Flask(__name__)

@app.route('/')
@app.route('/Home')
def entry_page() -> 'html':
    return render_template('index.html')

app.run(debug=True)