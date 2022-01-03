$(document).ready(function () {

    // INITIALIZE FIREBASE
    firebase.initializeApp({
        apiKey: "AIzaSyBR79lPr-OVQgUErMrOU7zVlc1lwb8wDp8",
    authDomain: "f2efin.firebaseapp.com",
    databaseURL: "https://f2efin-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "f2efin",
    storageBucket: "f2efin.appspot.com",
    messagingSenderId: "558738081943",
    appId: "1:558738081943:web:34d3da260f4c30f46641d2",
    measurementId: "G-6HTZHK1C4M"
    });
  
    // REFERENCE CHATROOM DOCUMENT
    let db = firebase.firestore()
      .collection("sunbay")
      .doc("news");    
    // REFERENCE CHATROOM MESSAGES
    let messagesCollectionRef 
      = db.collection("posts");
    // QUERY MESSAGES BY TIMESTAMP ORDERING
    let queryMessagesCollectionRef 
      = messagesCollectionRef.orderBy("id", "asc");
  
    // });
    let $news_item_box= $('#news_item_box');
  
    // A RENDER SCREEN CALLBACK THAT IS TRIGGERED FOR EACH CHAT MESSAGE
    queryMessagesCollectionRef.onSnapshot(function (querySnapshot) {
        $news_item_box.html("");
        //MONITOR CHAT MESSAGE AND RENDER SCREEN
        querySnapshot.forEach(function (doc) {
        let image = doc.data().image;
        let title = doc.data().title;
        let date = doc.data().date;

        // let count = 0;
        let count_max = 6;
        
        let newsItem = `
        <li class="news_item libtn">
                <a href="">
                    <img class="news_item_img" src="${image}" alt="${title}">
                    <div class="news_item_cover">
                        <p class="news_item_see textNI">SEE MORE</p>
                        <p class="news_item_title textNIp">${title}</p>
                        <p class="news_item_day textNIp">${date}</p>
                    </div>
                </a>
            </li>
        `;

        console.log($('#news_item_box').children().length);

        if($('#news_item_box').children().length<count_max){
            $('#news_item_box').append(newsItem);
        }
        });
    });
});
