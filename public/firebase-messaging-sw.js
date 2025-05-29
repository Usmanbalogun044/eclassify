importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6otyfQwR84kbBN3m7AX7_srmA4wS2VU8",
    authDomain: "koka-d79bc.firebaseapp.com",
    projectId: "koka-d79bc",
    storageBucket: "koka-d79bc.firebasestorage.app",
    messagingSenderId: "982803285281",
    appId: "1:982803285281:web:4a478f681dc5240ba46a60",
    measurementId: "G-5JRMVR0VJP"
};

firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});
