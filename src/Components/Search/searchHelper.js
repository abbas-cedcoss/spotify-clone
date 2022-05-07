export function extractRequestFromData(data = []) {
    let modifiedRows = [];
    data.forEach((element, index) => {
        let { album, name, duration_ms, popularity, external_urls } = element;
        modifiedRows.push({
            album, name, duration_ms, popularity, external_urls
        });
    });
    return modifiedRows;
}