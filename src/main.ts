import { displayQuotes, loadingAnimation } from "./utils";
import { getSheetData } from "./lib/googlesheets";

// ✨ Magic starts here ✨
getSheetData().then((data) => {
  if (data) {
    const loader = loadingAnimation();
    displayQuotes(loader, data);
  }
});
