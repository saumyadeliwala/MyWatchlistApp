# Welcome to your my app 👋


# Watchlist App -> React Native - expo

This is a simple React Native app for viewing stock watchlists with a tabbed layout. It shows stock prices, price changes, and market info in an easy-to-read format.

---

## What It Does
- Shows 4 watchlists in tabs (Watchlist 1 to 4)
- Lists stocks with:
  - Name and market (NSE | EQ)
  - Current price (green for up, red for down)
- Custom tab bar that highlights the active tab
- Works on any screen size

---

## My Approach
I wanted to build a clean, easy-to-use app for viewing stock watchlists. I started by:
- Breaking the app into small parts: one for the main screen, one for the stock list, and one for the tabs.
- Using tabs to let users switch between watchlists, keeping the layout simple.
- Making sure it works on any screen size by adjusting the tab width automatically.
- Showing price changes in green (up) or red (down) for quick understanding.
- Keeping the data static for now, but designing it to be easy to connect to live data later.
I focused on making the app fast and simple, with room to add more features in the future.
---

## How It’s Built

### Main Parts
1. **WatchlistScreen**
   - Main screen with the heading and tabs
   - Handles switching between tabs
   - Uses `TabView` for navigation

2. **Watchlist_tab**
   - Shows the stock list for each tab
   - Uses `FlatList` for smooth scrolling
   - Colors price changes (green = up, red = down)

3. **CustomTabBar**
   - Custom tab bar that fits the screen width
   - Highlights active tab with bold text and a line below

### Data
- Uses a static `stocks` array with name, price, change, and color
- Easy to swap with live data later

---

## Get started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the app:
     ```bash
    npx expo start
   ```

## Notes
* Uses static data for now (not live)
* Works on both Android and iOS
* Clean, simple design with room to add features


Created by SAUMYA DELIWALA

For feedback, email me at [saumyadeliwala@gmail.com](mailto:saumyadeliwala@gmail.com).

LinkedIn [https://www.linkedin.com/in/saumya-deliwala/](https://www.linkedin.com/in/saumya-deliwala/).
