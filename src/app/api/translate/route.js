import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request) {
    const res = await request.json()
    const requestBody = res.texts.map(text => `q=${encodeURIComponent(text)}`).join('&');

    const response = await fetch("https://translate.googleapis.com/translate_a/t?anno=3&client=te&format=html&v=1.0&key&logld=vTE_20240320&sl=pt&tl=en&tc=0&tk=210445.292515", {
        "method": "POST",
        "mode": "cors",
        "credentials": "omit",
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
        },
        "referrer": "http://localhost/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": requestBody 
    });

    const translatedData = await response.json();
    console.log(translatedData);
    return NextResponse.json({ message: response }, { status: 200 });

}