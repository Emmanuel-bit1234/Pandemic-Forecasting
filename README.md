# COVID-19 Forecast Script

Use Jupyter Notebook or any python environement to run the file

This script fetches COVID-19 data for South Africa from Worldometers, performs an ARIMA forecast, and generates reports and visualizations.

## External Libraries and Packages

- [requests](https://docs.python-requests.org/en/master/): Used for making HTTP requests to fetch data from the web.
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): Used for parsing HTML content.
- [pandas](https://pandas.pydata.org/): Used for data manipulation and analysis.
- [statsmodels](https://www.statsmodels.org/stable/index.html): Used for time series analysis and ARIMA modeling.
- [matplotlib](https://matplotlib.org/): Used for creating data visualizations.
- [warnings](https://docs.python.org/3/library/warnings.html): Used for suppressing warning messages in the script.

## Usage

1. Run the script in a Python environment.
2. The script will fetch COVID-19 data, perform a forecast, generate visualizations, and save results to files.
3. Output files include `covid_cases_forecast.csv` (combined data), `covid_cases_forecast.png` (forecast plot), and `improvement_suggestions.txt` (improvement suggestions).

# COVID-19 Forecasting Web Application

This application provides a simple web interface to display COVID-19 case forecasts. It consists of a Flask backend that serves forecast data and a frontend that displays this data in a table and chart.

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. Python 3.x installed
2. Flask installed (Install via pip: pip install Flask)
3. Flask-CORS installed (Install via pip: pip install flask-cors)
4. Pandas installed (Install via pip: pip install pandas)
5. Access to the internet to fetch data (for Flask app)
6. A modern web browser

## Setting Up the Flask Backend

1. Start the Flask Application:

- Navigate to the directory containing your Flask app (app.py).
- Run the app using the command: python app.py.
- This will start the local server, usually on http://127.0.0.1:5000/.

2. API Endpoints:

- The Flask app should have two endpoints:
  /forecast to serve the forecast data.
  /forecast_image to serve the forecast image.

## Setting Up the Frontend

1. Open the HTML File:

- Open the index.html file in a web browser.
- Ensure the script.js file is in the same directory as your index.html.

2. Viewing the Data:

- The web page should automatically load and display the data in a table and the forecast graph.

## Troubleshooting

- If the data does not load, ensure the Flask app is running and the URLs in the script.js file match your Flask app's URLs.
- Check the browser's console for any errors if the page doesn't display the data correctly.
- Ensure CORS issues are handled if your HTML file is not served from the same server as your Flask app.

## Additional Notes

This setup is for a basic demonstration and may require modifications for production use, including improved error handling, security features, and performance optimizations.

Feel free to reach out if you have any questions.
