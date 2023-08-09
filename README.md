
# DailyNewsApp using React

This is a simple news app built using React that fetches and displays top headlines from various news sources. The app utilizes the NewsAPI to retrieve news articles based on the selected category and country.

## Features

- Fetches and displays top news headlines based on the chosen category and country.
- Implements infinite scrolling to load more news articles as the user scrolls.
- Shows a loading spinner while fetching data from the API.
- Provides a link to read the full article for each news item.

## Setup and Installation

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the required dependencies:

```bash
npm install
```

4. Create an account on [NewsAPI](https://newsapi.org/) and obtain an API key.
5. Replace the placeholder `"YOUR_API_KEY"` in the `News.js` file with your actual NewsAPI key:

```javascript
const apiKay = "YOUR_API_KEY";
```

6. Start the development server by running the following command:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

## Usage

1. Upon opening the app, you will see a list of top headlines in the selected category (default is "general") and country (default is "in").
2. Scroll down to load more news articles using infinite scrolling.
3. Click on any news item to read the full article on the source website.

## Configuration

You can customize the behavior of the app by modifying the following props in the `News.js` file:

- `country`: Set the desired country code for news articles (default: "in").
- `pagesize`: Set the number of news articles to load per page (default: 8).
- `category`: Set the news category (default: "general"). Available categories: "business", "entertainment", "health", "science", "sports", "technology".

## Dependencies

- React
- PropTypes
- react-infinite-scroll-component

## Acknowledgments

- NewsAPI for providing the news data.
- Spinner and InfiniteSpinner components for visual loading indicators.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.