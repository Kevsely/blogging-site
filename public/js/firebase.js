let firebaseConfig = {
    apiKey: "AIzaSyAmhw2nm_Is0HgK9EKUJSn-dcs8f0VMnXk",
    authDomain: "test-blog-62dd5.firebaseapp.com",
    projectId: "test-blog-62dd5",
    storageBucket: "test-blog-62dd5.appspot.com",
    messagingSenderId: "109481426882",
    appId: "1:109481426882:web:0c4d93fb34e689c4f0e05b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();