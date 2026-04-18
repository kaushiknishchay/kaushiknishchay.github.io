---
title: Exploring the Power of Web Browsers in 2020
description: The web is a very powerful platform it grants you the ability to share something with everyone irrespective of what device they are using, be it an Android or iOS phone or a Windows, Linux, or Mac laptop.
With time the things, a browser could do have...
date: 2020-12-28T06:30:00.000Z
author: Nishchay Kaushik
tags: Browsers, WebRTC, streaming, video, zoom, Google Meet
---

# Exploring the Power of Web Browsers in 2020

The web is a very powerful platform it grants you the ability to share something with everyone irrespective of what device they are using, be it an Android or iOS phone or a Windows, Linux, or Mac laptop.

With time the things, a browser could do have also increased greatly (except IE11, switch to Firefox already). A webpage is no longer about some text and images, you can add a lot more power-hungry features to your webpage. You can create Games, Build Services like Google Docs, Browser Stack, and a lot more all running on a browser.

This post is going to talk about one of the browser’s features I had a chance to work with and the tech I explored for integrating it.

### Problem Statement

The problem statement I had in front of me was to implement a screen-share feature where-in when a User is sharing the screen it would be possible for others to view it over the internet as a real-time video.

The first step was to break down this problem into smaller problems and build a prototype around it.  
As I saw it, the problem had two pieces, first figuring out how to capture the screen, second, how to send it across to other users as a live video feed.  
I’ll start with the Screen-share bit first.

### Screen-share/Record

I knew websites already do it (you would’ve seen it in action on Zoom or Google Meet) but wasn’t aware How easy it is to do it on our own.

```javascript
const promise = navigator.mediaDevices.getDisplayMedia(constraints);
```

The above line is all it takes to get started with screen-sharing. It is supported by all the latest browsers and you can read more on its support at [https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)

When you run the above code snippet you will get a `Promise<MediaStream>`, now it is up-to us to decide how we want to use this.

We can either share it with other people using WebRTC (more on it later) or even record it and download the video.

Example snippet to download the recorded video (taken from [https://developer.mozilla.org/en-US/docs/Web/API/MediaStream\_Recording\_API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API))

```javascript
promise.then(stream => {
    var recordedChunks = [];
    
    console.log(stream);
    
    var options = { mimeType: "video/webm; codecs=vp8" };
    mediaRecorder = new MediaRecorder(stream, options);
    
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    
    function handleDataAvailable(event) {
        console.log("data-available");
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
            console.log(recordedChunks);
            download();
        } else {
        // ...
        }
    }
    
    function download() {
        var blob = new Blob(recordedChunks, {
            type: "video/webm"
        });
        var url = URL.createObjectURL(blob);
        
        var a = document.createElement("a");
    
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "test.webm";
        a.click();
        window.URL.revokeObjectURL(url);
    }
    
    // demo: to download after 9sec
    setTimeout(event => {
        console.log("stopping");
            mediaRecorder.stop();
        }, 9000);
    });
}
```

One thing to note about the above `getDisplayMedia` API is it behaves differently on browsers. For example, Chrome lets you share between a single tab/window/desktop, Firefox shares the whole window and Safari shares the entire desktop.

A limitation this API has is, it won’t let you share only a part of your webpage.

Now that we have solved half of the problem, let’s get to the second part.

### WebRTC

If you haven’t heard about it, don’t worry, I will add resources for you to read. It is an interesting topic so you should give it a try.

> **WebRTC** (Web Real-Time Communication) is a technology that enables Web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary.

The above definition is taken from MDN docs which captures the gist of what WebRTC is ([https://developer.mozilla.org/en-US/docs/Web/API/WebRTC\_API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)).

WebRTC is a very detailed topic and it won’t be easy to cover all that it provides in this article. I’d highly recommend going through this video on YouTube.

[https://www.youtube.com/watch?v=p2HzZkd2A4](https://www.youtube.com/watch?v=p2HzZkd2A40)0

Based on the above video, we derive two important steps, we need to acquire a video/audio stream and then use WebRTC to communicate it with peers.

This video stream that we share can either be a stream from your webcam or any MediaStream from other sources.

If you recall, the screen-share stream we acquired is also a MediaStream which can be used with WebRTC.

So once we have set-up our WebRTC connection we can simply publish this Screen-share stream on it and make it available to peers in real-time.

Implementing WebRTC from scratch using the basic API can be a tedious task, there are various libraries and frameworks available for use. These libraries hides away the software complexity, but to ensure WebRTC works for 100% of the users you would also need to setup a server of your own.

PeerJS ([https://peerjs.com](https://peerjs.com/)) is one such example, which makes it easier for you to get started.

Various companies provide you with the infrastructure and SDK needed to get started with real-time video, for example, Twilio. This takes away both the software and hardware complexity and makes it easier for you to implement and support a wide variety of users and devices.

In my case, we were already utilizing Twilio for the video call feature and it also let us publish more MediaStream if needed for a user.

This made sharing screen-share with other users a breeze, as all it required was to acquire the screen-share stream and then publish it on the connection for a user.

Twilio also has a sample app that you can refer to for understanding how to do the above.

[https://github.com/twilio/twilio-video-app-react](https://github.com/twilio/twilio-video-app-react)

### Conclusion

This was just one example of what can be achieved using these 2 pieces of technologies: WebRTC & getDisplayMedia.

The possibilities are limitless.

For example, You can make a piece of software which records your webcam as well as your screen to make a coding tutorial with few lines of code right from your browser.

A small experiment I did was to find a way to only share a part of webpage. For this I wrapped the area which I wanted to share with a distinctive color border and on other users before showing the video stream I simply used image processing to crop the pieces outside of the border. This isn’t a very great solution and is extremely memory intensive to do it in JavaScript so I won’t recommend it.

> Special shout-out to [Punit Gupta](https://medium.com/u/372f5561ad9b) for helping me with this article.

> Thanks for reading.  
> Do share your thoughts and suggestions.
