// Background script - handles cookie retrieval and messaging
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getCobaltCookie") {
    browserAPI.cookies.get({
      url: "https://www.dndbeyond.com",
      name: "CobaltSession"
    }).then(cookie => {
      if (cookie) {
        sendResponse({ success: true, cookie: cookie.value });
      } else {
        sendResponse({ success: false, error: "Cobalt cookie not found. Please log in to D&D Beyond." });
      }
    }).catch(error => {
      sendResponse({ success: false, error: error.message });
    });
    return true; // Will respond asynchronously
  }
  
  if (message.action === "fetchCharacterData") {
    const { characterId, cobaltCookie } = message;

    fetch(`https://character-service.dndbeyond.com/character/v5/character/${characterId}`, {
      headers: {
        'Cookie': `CobaltSession=${cobaltCookie}`
      }
    })
    .then(response => response.json())
    .then(data => {
      sendResponse({ success: true, data: data });
    })
    .catch(error => {
      sendResponse({ success: false, error: error.message });
    });

    return true; // Will respond asynchronously
  }

  if (message.action === "fetchCompendiumData") {
    const { cobaltCookie } = message;
    const headers = { 'Cookie': `CobaltSession=${cobaltCookie}` };

    Promise.all([
      fetch('https://character-service.dndbeyond.com/character/v5/game-data/items', { headers })
        .then(r => r.json())
        .catch(() => ({ data: [] })),
      fetch('https://character-service.dndbeyond.com/character/v5/game-data/classes', { headers })
        .then(r => r.json())
        .catch(() => ({ data: [] }))
    ])
    .then(([itemsResponse, classesResponse]) => {
      sendResponse({
        success: true,
        data: {
          items: itemsResponse.data || itemsResponse.results || itemsResponse || [],
          classes: classesResponse.data || classesResponse.results || classesResponse || []
        }
      });
    })
    .catch(error => {
      sendResponse({ success: false, error: error.message });
    });

    return true; // Will respond asynchronously
  }
});