////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// MIT License. Copyright (c) 2025 RiceZero
// Internationalization (i18n) module
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 翻訳データ
const translations = {
    ja: {
        title: "幾何学模様描画ツール",
        description: "幾何学的で、美しい模様が描けるシンプルなドローツールです。HTML5のCanvasを使って描画します。PWAに対応し,ネイティブアプリのように使用できます。独自のデザインを楽しもう。",
        colorLabel: "色選択:",
        penSizeLabel: "ペンの太さ:",
        symmetryLabel: "対称軸の数:",
        drawModeLabel: "描画モード:",
        lineSymmetry: "線対称",
        pointSymmetry: "点対称",
        geometry1: "幾何学1",
        geometry2: "幾何学2",
        eraser: "消しゴム",
        gradientLabel: "グラデーション:",
        upload: "アップロード",
        download: "ダウンロード",
        canvasWidthLabel: "キャンバス幅:",
        canvasHeightLabel: "キャンバス高さ:",
        clear: "クリア",
        undo: "元に戻す",
        redo: "やり直し",
        twitterText: "オリジナルの幾何学模様描画ツール",
        twitterHashtags: "Webアプリ",
        copyright: "Copyright © 2025 source21 All Rights Reserved.",
        language: "言語:",
        uploadMessage: "アップロード",
        downloadMessage: "ダウンロード"
    },
    en: {
        title: "Geometric Pattern Drawing Tool",
        description: "A simple drawing tool for creating beautiful geometric patterns. It uses HTML5 Canvas for drawing and supports PWA, so you can use it like a native app. Enjoy creating your own designs.",
        colorLabel: "Color:",
        penSizeLabel: "Pen Size:",
        symmetryLabel: "Number of Symmetry Axes:",
        drawModeLabel: "Drawing Mode:",
        lineSymmetry: "Line Symmetry",
        pointSymmetry: "Point Symmetry",
        geometry1: "Geometry 1",
        geometry2: "Geometry 2",
        eraser: "Eraser",
        gradientLabel: "Gradient:",
        upload: "Upload",
        download: "Download",
        canvasWidthLabel: "Canvas Width:",
        canvasHeightLabel: "Canvas Height:",
        clear: "Clear",
        undo: "Undo",
        redo: "Redo",
        twitterText: "Original geometric pattern drawing tool",
        twitterHashtags: "WebApp",
        copyright: "Copyright © 2025 source21 All Rights Reserved.",
        language: "Language:",
        uploadMessage: "Upload",
        downloadMessage: "Download"
    }
};

// 現在の言語設定
let currentLanguage = localStorage.getItem('language') || 
    (navigator.language.startsWith('ja') ? 'ja' : 'en');

// 翻訳関数
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// 言語を変更する関数
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageText();
    updateTwitterLink();
    updateDocumentMeta();
}

// ページのテキストを更新する関数
function updatePageText() {
    // ヘッダーのタイトル
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) headerTitle.textContent = t('title');

    // ラベル更新
    const colorLabel = document.querySelector('label[for="color"]');
    if (colorLabel) colorLabel.textContent = t('colorLabel');

    const penSizeLabel = document.querySelector('label[for="pen-size"]');
    if (penSizeLabel) penSizeLabel.textContent = t('penSizeLabel');

    const symmetryLabel = document.querySelector('label[for="symmetry"]');
    if (symmetryLabel) symmetryLabel.textContent = t('symmetryLabel');

    const drawModeLabel = document.querySelector('.radio-label');
    if (drawModeLabel) drawModeLabel.textContent = t('drawModeLabel');

    // ラジオボタンのラベル
    const lineSymmetryLabel = document.querySelector('label[for="line-symmetry"]');
    if (lineSymmetryLabel) lineSymmetryLabel.textContent = t('lineSymmetry');

    const pointSymmetryLabel = document.querySelector('label[for="point-symmetry"]');
    if (pointSymmetryLabel) pointSymmetryLabel.textContent = t('pointSymmetry');

    const geometry1Label = document.querySelector('label[for="geometry1"]');
    if (geometry1Label) geometry1Label.textContent = t('geometry1');

    const geometry2Label = document.querySelector('label[for="geometry2"]');
    if (geometry2Label) geometry2Label.textContent = t('geometry2');

    const eraserLabel = document.querySelector('label[for="eraser"]');
    if (eraserLabel) eraserLabel.textContent = t('eraser');

    const gradientLabel = document.querySelector('.switch-label');
    if (gradientLabel) gradientLabel.textContent = t('gradientLabel');

    // ボタン
    const undoButton = document.getElementById('undo');
    if (undoButton) undoButton.textContent = t('undo');

    const redoButton = document.getElementById('redo');
    if (redoButton) redoButton.textContent = t('redo');

    const uploadButton = document.getElementById('upload');
    if (uploadButton) uploadButton.textContent = t('upload');

    const downloadButton = document.getElementById('download');
    if (downloadButton) downloadButton.textContent = t('download');

    const clearButton = document.getElementById('clear');
    if (clearButton) clearButton.textContent = t('clear');

    // キャンバスサイズラベル
    const canvasWidthLabel = document.querySelector('label[for="canvas-width"]');
    if (canvasWidthLabel) canvasWidthLabel.textContent = t('canvasWidthLabel');

    const canvasHeightLabel = document.querySelector('label[for="canvas-height"]');
    if (canvasHeightLabel) canvasHeightLabel.textContent = t('canvasHeightLabel');

    // コピーライト
    const copyright = document.querySelector('small');
    if (copyright) copyright.textContent = t('copyright');

    // 言語選択ラベル
    const languageLabel = document.querySelector('label[for="language-select"]');
    if (languageLabel) languageLabel.textContent = t('language');
}

// Twitterリンクを更新する関数
function updateTwitterLink() {
    const twitterLink = document.querySelector('.twitter-share-button');
    if (twitterLink) {
        const baseUrl = 'https://gapps.ricezero.fun/geometry_draw/';
        const text = encodeURIComponent(t('twitterText'));
        const hashtags = encodeURIComponent(t('twitterHashtags'));
        twitterLink.href = `https://twitter.com/share?url=${baseUrl}&text=${text}&hashtags=${hashtags}`;
    }
}

// ドキュメントのメタデータを更新する関数
function updateDocumentMeta() {
    // タイトル更新
    document.title = t('title');
    
    // html lang属性更新
    document.documentElement.lang = currentLanguage;
    
    // meta description更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = t('description');
    }
    
    // JSON-LD更新
    const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (jsonLdScript) {
        const jsonLd = {
            "@context": "http://schema.org",
            "@id": "https://seopack.jp/#organization",
            "@type": "WebSite",
            "name": t('title'),
            "alternateName": currentLanguage === 'ja' 
                ? ["幾何学模様 描画ツール", "Geometric Patterns Draw Tool", "geometric patterns draw tool", "Geometric patterns paint"]
                : ["Geometric Patterns Draw Tool", "geometric patterns draw tool", "Geometric patterns paint", "幾何学模様 描画ツール"],
            "url": "https://gapps.ricezero.fun/geometry_draw/",
            "description": t('description')
        };
        jsonLdScript.textContent = JSON.stringify(jsonLd, null, 4);
    }
    
    // PWAマニフェスト更新
    updateManifest();
}

// PWAマニフェストを動的に更新する関数
function updateManifest() {
    const manifestData = {
        "name": t('title'),
        "short_name": currentLanguage === 'ja' ? "幾何学模様" : "Geometry",
        "theme_color": "#2196f3",
        "background_color": "#2196f3",
        "display": "standalone",
        "start_url": "index.html",
        "scope": "./",
        "lang": currentLanguage,
        "gcm_sender_id": "103953800507",
        "applicationServerKey": "BDd3_hVL9fZi9Ybo2UUzA284WG5FZR30_95YeZJsiApwXKpNcF1rRPF3foIiBHXRdJI2Qhumhf6_LFTeZaNndIo",
        "icons": [
            {
                "src": "image/icon-72x72.png",
                "sizes": "72x72",
                "type": "image/png"
            },
            {
                "src": "image/icon-96x96.png",
                "sizes": "96x96",
                "type": "image/png"
            },
            {
                "src": "image/icon-128x128.png",
                "sizes": "128x128",
                "type": "image/png"
            },
            {
                "src": "image/icon-144x144.png",
                "sizes": "144x144",
                "type": "image/png"
            },
            {
                "src": "image/icon-152x152.png",
                "sizes": "152x152",
                "type": "image/png"
            },
            {
                "src": "image/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "image/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "image/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    };

    // 既存のマニフェストリンクを更新
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
        const blob = new Blob([JSON.stringify(manifestData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        manifestLink.href = url;
    }
}

// 初期化関数
function initializeI18n() {
    // 言語選択セレクトボックスの作成と追加
    const languageSelect = document.createElement('select');
    languageSelect.id = 'language-select';
    languageSelect.innerHTML = `
        <option value="ja" ${currentLanguage === 'ja' ? 'selected' : ''}>日本語</option>
        <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>English</option>
    `;
    
    // 言語選択ラベルの作成
    const languageLabel = document.createElement('label');
    languageLabel.setAttribute('for', 'language-select');
    languageLabel.textContent = t('language');
    
    // 言語選択コンテナの作成
    const languageContainer = document.createElement('div');
    languageContainer.className = 'language-selector';
    languageContainer.appendChild(languageLabel);
    languageContainer.appendChild(languageSelect);
    
    // ツールバーの最初に追加
    const toolbar = document.querySelector('.toolbar');
    if (toolbar) {
        toolbar.insertBefore(languageContainer, toolbar.firstChild);
    }
    
    // イベントリスナーの追加
    languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
    
    // 初期テキスト更新
    updatePageText();
    updateTwitterLink();
    updateDocumentMeta();
}

// DOMが読み込まれた後に初期化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
    initializeI18n();
}
