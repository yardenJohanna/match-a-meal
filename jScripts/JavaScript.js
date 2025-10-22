let userFirstName = ""; // שם שהמשתמש הקליד
let userRadioChoice = 0; // מספר הבחירה שנבחר בכפתורי הרדיו
let userCheckboxChoices = 0; // הסימונים שהמשתמש סימן בכפתורי הצ'קבוקס
let isUserFirstNameValid = false; // האם המשתמש הזין שם תקין
let isUserRadioChoiceValid = false; // האם המשתמש בחר בכפתור הרדיו
let isUserCheckBoxChoicesValid = false; // האם המשתמש סימן לפחות סימון אחד בצ'קבוקסים

// פונקציה לאיפוס כל הטופס
function clearAll(){
    userFirstName = ""; // מאפס את שם המשתמש
    userRadioChoice = 0; // מאפס את בחירת הרדיו
    userCheckboxChoices = 0; // מאפס את בחירות הצ'קבוקסים
    isUserFirstNameValid = false; // מחזיר את בדיקת השם ללא תקין
    isUserRadioChoiceValid = false; // מחזיר את בדיקת הרדיו ללא תקין
    isUserCheckBoxChoicesValid = false; // מחזיר את בדיקת הצ'קבוקסים ללא תקין
    document.getElementById("matchForm").reset(); // מאפס את כל הטופס
    document.getElementById("match").disabled = true; // מכבה את כפתור ההתאמה
}

// פונקציה לבדיקה ועדכון של שם המשתמש
function firstName() {
    const hebrewRegex = /^[\u0590-\u05FF\s.,'"-]+$/; // ביטוי רגולרי לשם בעברית
    const textFirstName = document.getElementById("firstName").value.trim(); // קורא את הערך מהטקסטבוקס ומסיר רווחים
    if (textFirstName.length >= 2 && hebrewRegex.test(textFirstName)) { // אם יש לפחות 2 תווים והם בעברית
        userFirstName = textFirstName; // שומר את השם
        isUserFirstNameValid = true; // מסמן שהשם תקין
    }else{
        isUserFirstNameValid = false; // אחרת לא תקין
    }
    checkFormValidity() // בודק אם אפשר להפעיל את הכפתור
}

// פונקציה לבחירת רדיו והצגת תמונה מתאימה
function activeRadioChoice(){
    const mainImage = document.getElementById("matchMainImage"); // אלמנט התמונה הראשית
    const radioLifestyle = document.getElementsByName("lifestyle"); // כל כפתורי הרדיו

    for (let i = 0; i < radioLifestyle.length; i++) { // עובר על כל כפתורי הרדיו
        if (radioLifestyle[i].checked === true){ // אם כפתור נבחר
            userRadioChoice = i+1; // שומר את מספר הבחירה
            isUserRadioChoiceValid = true; // מסמן שהבחירה תקינה
            break; // יוצא מהלולאה
        }
    }

    // שינוי התמונה הראשית לפי הבחירה
    if(userRadioChoice === 1){
        mainImage.src = "styles/images/pasta.png"; // תמונת פסטה
        mainImage.alt = "צלחת פסטות";
        mainImage.title = "צלחת פסטות";
    }else if(userRadioChoice === 2){
        mainImage.src = "styles/images/healthy.jpg"; // תמונת בריאות
        mainImage.alt = "בריאות";
        mainImage.title = "צלחת בריאות";
    }else if(userRadioChoice === 3){
        mainImage.src = "styles/images/meat.jpg"; // תמונת בשר
        mainImage.alt = "בשר";
        mainImage.title = "בשר";
    }else if(userRadioChoice === 4){
        mainImage.src = "styles/images/vegan.jpg"; // תמונה טבעונית
        mainImage.alt = "ארוחה טבעונית";
        mainImage.title = "ארוחה טבעונית";
    }

    mainImage.style.opacity = "1"; // הופך את התמונה לגלויה לגמרי

    checkFormValidity(); // בודק אם הכפתור יכול להיות פעיל
}

// פונקציה לבחירת צ'קבוקסים ושינוי השקיפות של התמונות
function activeCheckboxChoices(){
    userCheckboxChoices = []; // מאפס את המערך
    const mainImagesChef = document.getElementsByClassName("matchMainImagesChef"); // כל תמונות מסעדות שף
    const mainImagesStreet = document.getElementsByClassName("matchMainImagesStreet"); // כל תמונות אוכל רחוב
    const mainImagesDesserts = document.getElementsByClassName("matchMainImagesDesserts"); // כל תמונות קינוחים
    const mainImagesComfort = document.getElementsByClassName("matchMainImagesComfort"); // כל תמונות אוכל ביתי
    const checkboxMostInterested = document.getElementsByName("mostInterested"); // כל הצ'קבוקסים

    for (let i=0; i < checkboxMostInterested.length; i++){ // עובר על כל הצ'קבוקסים
        if (checkboxMostInterested[i].checked === true){ // אם צ'קבוקס מסומן
            userCheckboxChoices[i]= i+1; // מוסיף אותו למערך
        }
    }

    // מסעדות שף
    if (userCheckboxChoices[0] === 1){
        for (let i=0; i < mainImagesChef.length; i++){
            mainImagesChef[i].style.opacity = "1"; // תמונות נבחרות ברורות
        }
    }else{
        for (let i=0; i < mainImagesChef.length; i++){
            mainImagesChef[i].style.opacity = "0.3"; // לא נבחרות שקופות
        }
    }

    // אוכל רחוב
    if (userCheckboxChoices[1] === 2){
        for (let i=0; i < mainImagesStreet.length; i++){
            mainImagesStreet[i].style.opacity = "1";
        }
    }else{
        for (let i=0; i < mainImagesStreet.length; i++){
            mainImagesStreet[i].style.opacity = "0.3";
        }
    }

    // קינוחים מושחתים
    if (userCheckboxChoices[2] === 3){
        for (let i=0; i < mainImagesDesserts.length; i++){
            mainImagesDesserts[i].style.opacity = "1";
        }
    }else{
        for (let i=0; i < mainImagesDesserts.length; i++){
            mainImagesDesserts[i].style.opacity = "0.3";
        }
    }

    // אוכל ביתי ומנחם
    if (userCheckboxChoices[3] === 4){
        for (let i=0; i < mainImagesComfort.length; i++){
            mainImagesComfort[i].style.opacity = "1";
        }
    }else{
        for (let i=0; i < mainImagesComfort.length; i++){
            mainImagesComfort[i].style.opacity = "0.3";
        }
    }

    // אם לפחות אחד מסומן – סימון תקין
    if (userCheckboxChoices[0] === 1 || userCheckboxChoices[1] === 2 || userCheckboxChoices[2] === 3 || userCheckboxChoices[3] === 4){
        isUserCheckBoxChoicesValid = true;
    }else{
        isUserCheckBoxChoicesValid = false;
    }
    checkFormValidity() // בודק את הכפתור
}

// פונקציה שבודקת אם כל התנאים מולאו – ומפעילה/מכבה את הכפתור
function checkFormValidity(){
    if (isUserFirstNameValid === true && isUserRadioChoiceValid === true && isUserCheckBoxChoicesValid === true ){
        document.getElementById("match").disabled = false; // כפתור פעיל
    }else{
        document.getElementById("match").disabled  = true; // כפתור מכובה
    }
}

// פונקציה להצגת חלון הסיכום
function showSummaryPopup() {
    let userLifestyle = ""; // סגנון האוכל
    let userMostInterested = ""; // מה קורץ היום

    // בחירת סגנון האוכל
    if (userRadioChoice === 1) {
        userLifestyle = "חובב פסטות";
    } else if (userRadioChoice === 2) {
        userLifestyle = "אוכל בריא";
    } else if (userRadioChoice === 3) {
        userLifestyle = "קרניבור";
    } else if (userRadioChoice === 4) {
        userLifestyle = "צמחוני/טבעוני";
    }

    // הוספת הבחירות של הצ'קבוקסים
    if (userCheckboxChoices[0] === 1) {
        userMostInterested += ". <br><br><strong style='color: black;'>מסעדות שף -</strong> סטייק, פסטת כמהין, דג יווני"
    }
    if (userCheckboxChoices[1] === 2) {
        userMostInterested += ". <br><br><strong style='color: black;'>אוכל רחוב -</strong> שווארמה, פלאפל, המבורגר"
    }
    if (userCheckboxChoices[2] === 3) {
        userMostInterested += ". <br><br><strong style='color: black;'>קינוחים מושחתים -</strong> מוס שוקולד, עוגת גבינה, פירות עם שוקולד"
    }
    if (userCheckboxChoices[3] === 4) {
        userMostInterested += ". <br><br><strong style='color: black;'>אוכל ביתי ומנחם -</strong> מרק קובה, תבשיל מגדרה טבעוני, קציצות ברוטב"
    }

    // מציג את פרטי הסיכום בחלון
    document.getElementById("formDetails").innerHTML =
        "<strong>שם / כינוי הסועד: </strong>" +  userFirstName +
        "<br><br>" + "<strong>סגנון האוכל: </strong>" + userLifestyle +
        "<br><br>" + " <strong>מה קורץ היום: </strong>" + userMostInterested.slice(1);

    document.getElementById("matchSummaryFormContainer").style.display = "flex"; // מציג את הפופ-אפ
}

// פונקציה לשליחת הטופס (לחיצה על כפתור אישור)
function formSent(){
    document.getElementById("matchSummaryFormContainer").style.display = "none"; // סוגר את הפופ-אפ
    location.reload() // מרענן את הדף
}

// פונקציה לסגירת הפופ-אפ בלי שליחה
function exitPopup(){
    document.getElementById("matchSummaryFormContainer").style.display = "none"; // מסתיר את הפופ-אפ
}
