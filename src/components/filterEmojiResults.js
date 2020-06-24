export const filterEmojiResults = (searchText, emojiList, maxResults) => {
    
    return emojiList.filter(emoji => {
        if(emoji.keywords.includes(searchText)) return true;
        if(emoji.title.toLowerCase().includes(searchText)) return true;
        return false;
    }).slice(0,maxResults)

}