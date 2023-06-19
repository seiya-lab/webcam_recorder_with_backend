// index.ts
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const downloadButton = document.getElementById('download');
    const videoElement = document.getElementById('webcam') as HTMLVideoElement;
    let mediaRecorder: any;
    let recordedBlobs: BlobPart[] = [];
  
    // Start recording
    startButton?.addEventListener('click', async () => {
      const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
      videoElement.srcObject = stream;
  
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
  
      mediaRecorder.addEventListener('dataavailable', (event: any) => {
        if (event.data && event.data.size > 0) {
          recordedBlobs.push(event.data);
        }
      });
    });
  
    // Stop recording
    stopButton?.addEventListener('click', () => {
      mediaRecorder.stop();
      (videoElement.srcObject as MediaStream)?.getTracks().forEach((track: MediaStreamTrack) => track.stop());
    });
  
    // Download video
    downloadButton?.addEventListener('click', () => {
      const blob = new Blob(recordedBlobs, {type: 'video/webm'});
      const formData = new FormData();
      formData.append('video', blob);
  
      fetch('http://localhost:3000/upload', { // assuming your server is running on localhost:3000
        method: 'POST',
        body: formData
      })
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'test.mp4';
        document.body.appendChild(a);
        a.click();
      })
      .catch(err => {
        console.error('Upload failed:', err);
      });
    });
  });
  