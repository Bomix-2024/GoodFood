async function translateText(text, targetLanguage) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const translation = data[0][0][0];
            return translation;
        } else {
            throw new Error('Error translating text');
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export { translateText };