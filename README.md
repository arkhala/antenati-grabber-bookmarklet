# Antenati Image Grabber Bookmarklet

This bookmarklet allows you to easily grab the full high-resolution image URLs from the Antenati website by extracting the URL of the currently viewed image and opening it in a new tab for viewing.

## How It Works

The bookmarklet grabs the URL of the image you’re viewing on the Antenati website (e.g., a page URL like `https://antenati.cultura.gov.it/some/path/12345`) and constructs a direct link to the high-resolution image using the IIIF format (e.g., `https://iiif-antenati.san.beniculturali.it/iiif/2/12345/full/full/0/default.jpg`). It then opens this link in a new tab.

## Installation

You can install the bookmarklet in one of two ways:

### Option 1: Manual Setup
1. **Enable the Bookmarks Bar**:
   - Ensure your browser’s bookmarks / favorites bar is visible (e.g., in Chrome: `Ctrl+Shift+B` or `View > Show Bookmarks Bar`).
2. **Create a New Bookmark**:
   - Right-click the bookmarks bar and select “Add Bookmark” (or similar).
   - Name it “Antenati Grabber” (or anything you like).
3. **Paste the Code**:
   - Copy the following JavaScript code:
     ```javascript
     javascript:(function() {  var currentUrl = window.location.href;  var lastSegment = currentUrl.match(/\/([^\/]+)\/?$/)[1];  var targetUrl = 'https://iiif-antenati.san.beniculturali.it/iiif/2/' + lastSegment + '/full/full/0/default.jpg';  window.open(targetUrl, '_blank');})();
     ```
     Paste it into the URL or Location field of the bookmark.
Save:
Save the bookmark. It’s now ready to use!
Note: Manually created bookmarks won’t include the icon unless you add it separately (not necessary for functionality).

### Option 2: Import the HTML File
1. **Enable the Bookmarks Bar**:
   - Ensure your browser’s bookmarks / favorites bar is visible (e.g., in Chrome: `Ctrl+Shift+B` or `View > Show Bookmarks Bar`).
2. **Download the File**:
   - Download the bookmark.html from this repository (see the Code section).
3. **Import into Your Browser**:
   - Open your browser’s bookmark manager (e.g., Chrome: Ctrl+Shift+O or Bookmarks > Manage Bookmarks).
   - Select “Import” or “Import Bookmarks” and choose to import from a bookmarks or favorites HTML file.
   - Select the downloaded bookmark.html file.
   - Check the Bookmarks Bar:
   - The “Antenati Grabber” bookmark should now appear in your bookmarks bar.

## Usage
1. **Navigate to an Image**:
   - Go to the Antenati website and view the page containing the image you want to view.
2. **Click the Bookmarklet**:
   - Click “Antenati Grabber” in your bookmarks bar. The full high-resolution image will open in a new tab for you to view. 

## Notes
- **Website Dependency**: This bookmarklet relies on the current URL structure of the Antenati website. If the site changes its format, the bookmarklet may stop working.
