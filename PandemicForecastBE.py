from flask import Flask, jsonify, send_file
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


csv_file_path = "covid_cases_forecast.csv"
image_file_path = "covid_cases_forecast.png"


def get_covid_data_from_csv():
    try:
        data = pd.read_csv(csv_file_path)
        return data.to_dict(orient="records")
    except Exception as e:
        return f"An error occurred: {e}"


@app.route("/forecast", methods=["GET"])
def forecast():
    data = get_covid_data_from_csv()
    return jsonify(data)


@app.route("/forecast_image", methods=["GET"])
def forecast_image():
    return send_file(image_file_path, mimetype="image/png")


if __name__ == "__main__":
    app.run(debug=True)
