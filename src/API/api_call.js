export const fetchCss = async (cssUrl) => {
  if (!cssUrl?.length) {
    return;
  }

  try {
    const response = await fetch(cssUrl);
    if (response.ok) {
        const cssText = await response.text(); // Convert response to text
        return cssText
    } else {
      console.error("Failed to fetch the CSS file:", response.status);
    }
  } catch (error) {
    console.error("Error fetching the CSS file:", error);
  }
};
