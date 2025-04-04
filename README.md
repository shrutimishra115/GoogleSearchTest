
## Note:
Please note that due to system limitations, I am unable to install Xcode and Android Studio, as my macOS only supports macOS version 12.7.6. However, I have tested the project in React Native Web online, where some features may not be fully supported.

# googleSearch
Google Maps Place API for searching locations and maintains a history of searched places. 

##  Features

1. **Google Maps Place Search**
   - Real-time suggestions using **Google Places API**.
   - Search bar with debounced input for performance.

2. **Display on Map**
   - Selected place is shown on the **Google Map**.
   - Displays name and address of the location.

3. **Search History**
   - All searched places are stored in local history.
   - History is persisted using **redux-persist**.

4. **Select from History**
   - Tap any history item to view it on the map again.

5. **Clean & Modular Code**
   - Organized components and screens.
   - Hooks and Redux for state management.
   - Responsive and intuitive UI.

   ## Tech Stack

- **React Native**
- **Google Maps SDK**
- **Google Places API**
- **Redux Toolkit** for state management
- **redux-persist** for local data persistence