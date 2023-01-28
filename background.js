const onBeforeRequest = (details) => {
    console.log("Block:", details.url)
    return {cancel: true}
}
chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, {urls: site}, ["blocking"])