// الگوی منظم برای یافتن حروف فارسی
const farsiRegex = /[\u0600-\u06FF]/;

// نقشه حروف فارسی به معادل انگلیسی کیبورد
const farsiToEnglishMap = {
    'ض': 'q', 'ص': 'w', 'ث': 'e', 'ق': 'r', 'ف': 't', 'غ': 'y', 'ع': 'u', 'ه': 'i', 'خ': 'o', 'ح': 'p',
    'ج': '[', 'چ': ']', 'ش': 'a', 'س': 's', 'ی': 'd', 'ب': 'f', 'ل': 'g', 'ا': 'h', 'ت': 'j', 'ن': 'k',
    'م': 'l', 'ک': ';', 'گ': '\'', 'ظ': 'z', 'ط': 'x', 'ز': 'c', 'ر': 'v', 'ذ': 'b', 'د': 'n', 'پ': '\\',
    'و': ',', '': ' ', 'آ': 'h', 'ء': 't', 'ئ': 'm', '۰': '0', '۱': '1', '۲': '2', '۳': '3',
    '۴': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9', '؛': 'k', '،': 'm', '؟': 'w', 'ـ': '-',
    ' ': ' ', 'ؤ': 'v', ' َ': 'A', 'ِ': 'D', 'ً': 'Q', 'ٌ': 'W', 'ٍ': 'E', 'ُ': 'S', 'ۀ': 'G'
};

// تابع تبدیل کاراکترهای فارسی به انگلیسی
function convertFarsiToEnglish(text) {
    let _text = '';
    for (let char of text) {
        let character = char.trim();
        let convertedChar = farsiToEnglishMap[character] || character;
        _text += convertedChar;
    }
    return _text;
}

// متدی برای مدیریت ورودی و تبدیل
function handleFarsiBarcodeInput(ElementID) {
    const inputField = document.getElementById(ElementID);
    let lastKeyTime = Date.now();

    inputField.addEventListener('input', (event) => {
        const currentTime = Date.now();
        const timeDiff = currentTime - lastKeyTime;
        lastKeyTime = currentTime;

        // اگر زمان بین فشردن کلیدها کمتر از حد آستانه بارکدخوان باشد
        if (timeDiff < 50) {
            // بررسی وجود حروف فارسی در ورودی
            if (farsiRegex.test(inputField.value)) {
                // تبدیل ورودی فارسی به انگلیسی و جایگزینی در فیلد ورودی
                const convertedText = convertFarsiToEnglish(inputField.value);
                inputField.value = convertedText;
            }
        }
    });
}