# Zoom-quality-enhancer
Increase received quality of speaker's camera

## Please note:
This hack only works if your lecturer shares screen and camera video at the same time. His camera video (usually in the top-right corner of the screen) will have improved quality.

## Usage
By the time this extension becomes a reality, you can manually run the code for automatic quality enhancement.
1. Join a Zoom meeting using your browser.
2. Zoom in using `Ctrl` + `Mouse wheel up` until satisfied with the camera view size. Some users report 200 % being the best choice.
3. Open DevTools (`F12`), navigate to `Console` tab.
4. Paste the code from https://raw.githubusercontent.com/zznidar/Zoom-quality-enhancer/main/test.js
5. Close DevTools and enjoy your meeting.

## About
Testing results have shown that the video stream of the person speaking is available in different qualities. To get a higher quality, this has to be done:
1. Once inside a meeting, zoom in using `Ctrl` + `Mouse wheel up` until satisfied with the camera view size. Some users report 200 % being the best choice.
2. Change speaker's camera window to small and back to large.
3. Quality magically increases.

However, this works only until another person starts speaking. At that moment, the procedure needs to be done again. 
As this may be time- and attention-consuming, the aim of this project is to create a browser extension that would do the work for you.

Created specifically for lectures taking place at FMF.