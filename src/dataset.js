const defaultDataset = {
    "init": {
        answers: [
            {content: "あなたのプライベートを知りたい！", nextId: "private"},
            {content: "あなたは何をしてきたの？", nextId: "dose"},
            {content: "あなたの経歴などを知りたい！", nextId: "privacy"},
        ],
        question: "コンににちは、高島拓斗です！！私へのご用件はなんでしょうか？",
    },
    //privateについて
    "private": {
        answers: [
            {content: "彼女は？", nextId: "lover"},
            {content: "趣味は？", nextId: "hobby"},
            {content: "身長は？", nextId: "height"},
            {content: "その他", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "どれが良いでしょうか？",
    },
    "lover": {
        answers: [
            {content: "いいよ、DMする！", nextId: "https://twitter.com/t_takutooo"},
            {content: "お付き合いしたい！", nextId: "dating"},
            {content: "ここは押さないで", nextId: "noPush"},
            {content: "あなたのプライベート一覧に戻る", nextId: "private"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "彼女は..............................................................いません。お付き合いしていただけますか？まずはDMください。",
    },
    "noPush":{
        answers:[
            {content:"お話ししたい", nextId: "contact"},
            {content: "あなたのプライベート一覧に戻る", nextId: "private"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "「押さないで」と言われたら押したくなりますよね！嫌がらせしてしまってすみません。"
    },
    "hobby": {
        answers: [
            {content: "何部だったの？", nextId: "sports"},
            {content: "あなたのプライベート一覧に戻る", nextId: "private"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私の趣味は筋トレです。部活でやっていた筋トレがきっかけとなって今では週5回ほどしています。",
    },
    "height": {
        answers: [
            {content: "あなたのプライベート一覧に戻る", nextId: "private"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "身長は164cmです。小さいと言わないでください。今だけ特別に体重も教えてあげます。63kgです。「身長小さいのに体重重いのかよ」なんて思わないでください。",
    },
    //doseについて
    "dose": {
        answers: [
            {content: "何部だったの？", nextId: "sports"},
            {content: "アルバイト、インターンシップは何をしたの？", nextId: "job"},
            {content: "問い合わせる", nextId: "contact"},
            {content: "作った作品とかあるの？", nextId: "works"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私の趣味は筋トレです。部活でやっていた筋トレがきっかけとなって今では週5回ほどしています。",
    },
    "sports": {
        answers: [
            {content: "あなたしてきたこと一覧に戻る", nextId: "dose"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私は野球部でした。小学4年生から大学に入ってまでも続けました。",
    },
    "job": {
        answers: [
            {content: "あなたしてきたこと一覧に戻る", nextId: "dose"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "大学1年、2年のころはスポーツジムでトレーナー兼インストラクターをしていました。大学3年生になってからプログラミングスクール「WEB CAMP」で、メンターとして長期インターンをしています。",
    },
    "works": {
        answers: [
            {content: "ポートフォリオサイト", nextId: "https://develop.d8us2qtd2ba7w.amplifyapp.com/"},
            {content: "Ruby on Railsの簡素なサイトの動作デモ", nextId: "https://www.youtube.com/watch?v=VnViIwsyYyI"},
            {content: "アクセサリーショップのLPサイト", nextId: "https://aku424.github.io/sobolon/"},
            {content: "床屋のLPサイト", nextId: "http://takutooo.com/umetoko/index.html"},
            {content: "架空カフェのLPサイト", nextId: "http://takutooo.com/fresh_cafe/index.html"},
            {content: "あなたしてきたこと一覧に戻る", nextId: "dose"},
            {content: "最初の質問に戻る", nextId: "init"}        
        ],
        question: "まだまだスキルも胸を晴れるほどではありませんが、あります。何かみたいものはありますか？",
    },
    //privacyについて
    "privacy": {
        answers: [
            {content: "大学はどこ？", nextId: "school"},
            {content: "年齢や兄弟は？", nextId: "old"},
            {content: "出身地は？", nextId: "native"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私の趣味は筋トレです。部活でやっていた筋トレがきっかけとなって今では週5回ほどしています。",
    },
    "school": {
        answers: [
            {content: "あなたのの経歴などの一覧に戻る", nextId: "privacy"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "大学は日本体育大学です。北島康介さん、白井健三さん、柔道最強兄弟の阿部一二三選手、阿部詩さんなど、まだまだたくさんのオリンピック選手を排出している大学です。",
    },
    "old": {
        answers: [
            {content: "あなたのの経歴などの一覧に戻る", nextId: "privacy"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "年齢は21歳です。私よりも身長の大きい弟と小学生の弟がいます。",
    },
    "native": {
        answers: [
            {content: "あなたのの経歴などの一覧に戻る", nextId: "privacy"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "出身は東京都です。現在も東京に住んでいます。",
    },
}

export default defaultDataset