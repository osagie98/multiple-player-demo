// Copyright 2023 The Cobalt Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Dictionary mapping string descriptions to media file descriptions in the
// form of [contentType, url, maxVideoCapabilities (for videos only), licenseUrl]
const MEDIA_FILES = {
  'av1_720p_60fps_drm': {
    contentType: 'video/mp4; codecs="av01.0.05M.08"',
    url: 'https://storage.googleapis.com/ytlr-cert.appspot.com/test-materials/media/av1-senc/sdr_720p60.mp4',
    maxVideoCapabilities: 'width=1280; height=720',
    licenseUrl: 'https://dash-mse-test.appspot.com/api/drm/widevine?drm_system=widevine&source=YOUTUBE&ip=0.0.0.0&ipbits=0&expire=19000000000&key=ik0&sparams=ip,ipbits,expire,drm_system,source,video_id&video_id=6508f99557a8385f&signature=5153900DAC410803EC269D252DAAA82BA6D8B825.495E631E406584A8EFCB4E9C9F3D45F6488B94E4',
  },
  // 40 MB
  'h264_720p_24fps_drm': {
    contentType: 'video/mp4; codecs="avc1.640028"',
    url: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops_cenc-20121114-145-no-clear-start.mp4',
    maxVideoCapabilities: 'width=1280; height=720',
    licenseUrl: 'https://dash-mse-test.appspot.com/api/drm/widevine?drm_system=widevine&source=YOUTUBE&ip=0.0.0.0&ipbits=0&expire=19000000000&key=test_key1&sparams=ip,ipbits,expire,drm_system,source,video_id&video_id=03681262dc412c06&signature=9C4BE99E6F517B51FED1F0B3B31966D3C5DAB9D6.6A1F30BB35F3A39A4CA814B731450D4CBD198FFD',
  },
  // 38 MB
  'h264_720p_60fps_drm': {
    contentType: 'video/mp4; codecs="avc1.640028"',
    url: 'https://storage.googleapis.com/ytlr-cert.appspot.com/test-materials/media/drml3NoHdcp_h264_720p_60fps_cenc.mp4',
    maxVideoCapabilities: 'width=1280; height=720',
    licenseUrl: 'https://dash-mse-test.appspot.com/api/drm/widevine?drm_system=widevine&source=YOUTUBE&ip=0.0.0.0&ipbits=0&expire=19000000000&key=test_key1&sparams=ip,ipbits,expire,drm_system,source,video_id&video_id=03681262dc412c06&signature=9C4BE99E6F517B51FED1F0B3B31966D3C5DAB9D6.6A1F30BB35F3A39A4CA814B731450D4CBD198FFD',
  },
  // 32 MB
  'vp9_720p_60fps_drm': {
    contentType: 'video/webm; codecs="vp9"',
    url: 'https://storage.googleapis.com/ytlr-cert.appspot.com/test-materials/media/drml3NoHdcp_vp9_720p_60fps_enc.webm',
    maxVideoCapabilities: 'width=1280; height=720',
    licenseUrl: 'https://dash-mse-test.appspot.com/api/drm/widevine?drm_system=widevine&source=YOUTUBE&ip=0.0.0.0&ipbits=0&expire=19000000000&key=test_key1&sparams=ip,ipbits,expire,drm_system,source,video_id&video_id=f320151fa3f061b2&signature=81E7B33929F9F35922F7D2E96A5E7AC36F3218B2.673F553EE51A48438AE5E707AEC87A071B4FEF65'
  },
  // 1 MB
  // Mono won't work with tunnel mode on many devices.
  'aac_mono_drm': {
    contentType: 'audio/mp4; codecs="mp4a.40.2"',
    url: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops_cenc-20121114-148.mp4',
    licenseUrl: 'https://dash-mse-test.appspot.com/api/drm/widevine?drm_system=widevine&source=YOUTUBE&ip=0.0.0.0&ipbits=0&expire=19000000000&key=test_key1&sparams=ip,ipbits,expire,drm_system,source,video_id&video_id=03681262dc412c06&signature=9C4BE99E6F517B51FED1F0B3B31966D3C5DAB9D6.6A1F30BB35F3A39A4CA814B731450D4CBD198FFD',
  },
  // 2.8 MB
  'aac_clear': {
    contentType: 'audio/mp4; codecs="mp4a.40.2"',
    url: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-8c.mp4',
  },
  // 1.7 MB
  'opus_clear': {
    contentType: 'audio/webm; codecs="opus"',
    url: 'https://storage.googleapis.com/ytlr-cert.appspot.com/test-materials/media/car_opus_med.webm',
  },

  'vp9-1080p-60fps-7s_clear': {
    contentType: 'video/webm; codecs="vp9"',
    url: 'https://jasonzhangxx.github.io/test/big-buck-bunny-vp9-1080p-1mb.webm',
    maxVideoCapabilities: 'width=1280; height=720',
  },

  'h264-240p-30fps' : {
    contentType: 'video/mp4; codecs="avc1.640028"',
    url: 'https://jasonzhangxx.github.io/test/test-materials_media_big-buck-bunny-h264-240p-30fps.mp4',
    maxVideoCapabilities: 'width=320; height=240',
  },

  'primary-video' : {
    contentType: 'video/webm; codecs="vp9"',
    // url: 'https://osagie98.github.io/multiple-player-demo/video-1.webm',
    url: 'video-1-short.webm',
    maxVideoCapabilities: 'width=1920; height=1080',
  },

  'secondary-video-1' : {
    contentType: 'video/webm; codecs="vp9"',
    // url: 'https://osagie98.github.io/multiple-player-demo/video-2.webm',
    url: 'video-2-short.webm',
    maxVideoCapabilities: 'width=1920; height=1080',
  },

  'secondary-video-2' : {
    contentType: 'video/webm; codecs="vp9"',
    // url: 'https://osagie98.github.io/multiple-player-demo/video-3.webm',
    url: 'video-3-short.webm',
    maxVideoCapabilities: 'width=1920; height=1080',
  },

  'secondary-video-3' : {
    contentType: 'video/webm; codecs="vp9"',
    // url: 'https://osagie98.github.io/multiple-player-demo/video-4.webm',
    url: 'video-4-short.webm',
    maxVideoCapabilities: 'width=1920; height=1080',
  },

  // 'primary-video' : {
  //   contentType: 'video/mp4; codecs="av01.0.08M.08"; framerate=30; width=1920; height=1080',
  //   // url: 'https://osagie98.github.io/multiple-player-demo/video-1.webm',
  //   url: 'test-av1.mp4',
  //   maxVideoCapabilities: 'width=1920; height=1080',
  // },

  // 'secondary-video-1' : {
  //   contentType: 'video/mp4; codecs="av01.0.05M.08"; framerate=30; width=1280; height=720',
  //   // url: 'https://osagie98.github.io/multiple-player-demo/video-2.webm',
  //   url: 'av1-720p-1.mp4',
  //   maxVideoCapabilities: 'width=1280; height=720',
  // },

  // 'secondary-video-2' : {
  //   contentType: 'video/mp4; codecs="av01.0.05M.08"; framerate=30; width=1280; height=720',
  //   // url: 'https://osagie98.github.io/multiple-player-demo/video-3.webm',
  //   url: 'av1-720p-2.mp4',
  //   maxVideoCapabilities: 'width=1280; height=720',
  // },

  // 'secondary-video-3' : {
  //   contentType: 'video/mp4; codecs="av01.0.05M.08"; framerate=30; width=1280; height=720',
  //   // url: 'https://osagie98.github.io/multiple-player-demo/video-4.webm',
  //   url: 'av1-720p-3.mp4',
  //   maxVideoCapabilities: 'width=1280; height=720',
  // }
};

mediaCache = {}

function fetchArrayBuffer(method, url, body, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'arraybuffer';
  xhr.addEventListener('load', function() {
    callback(xhr.response);
  });
  xhr.open(method, url);
  xhr.send(body);
}

async function fetchMediaData(mediaFileId) {
  if (mediaFileId in mediaCache) {
    return mediaCache[mediaFileId];
  }

  const response = await fetch(MEDIA_FILES[mediaFileId].url);
  mediaCache[mediaFileId] = await response.arrayBuffer();
  return mediaCache[mediaFileId];
}

function extractLicense(licenseArrayBuffer) {
  var licenseArray = new Uint8Array(licenseArrayBuffer);
  var licenseStartIndex = licenseArray.length - 2;
  while (licenseStartIndex >= 0) {
    if (licenseArray[licenseStartIndex] == 13 &&
        licenseArray[licenseStartIndex + 1] == 10) {
      licenseStartIndex += 2;
      break;
    }
    --licenseStartIndex;
  }

  return licenseArray.subarray(licenseStartIndex);
}

async function createMediaKeySystem(isPrimaryVideo, audioContentType, videoContentType) {
  const keySystems = isPrimaryVideo ? ['com.widevine.alpha'] : ['com.youtube.widevine.l3', 'com.widevine.alpha'];
  for (keySystem of keySystems) {
    try {
      mediaKeySystemAccess = await navigator.requestMediaKeySystemAccess(keySystem, [{
        'initDataTypes': ['cenc', 'webm'],
        'audioCapabilities': [{'contentType': audioContentType}],
        'videoCapabilities': [{'contentType': videoContentType}]}]);
      return mediaKeySystemAccess.createMediaKeys();
    } catch {
      console.log('create keySystem ' + keySystem + ' failed.')
      continue;
    }
  }
}

function createTunnelModeContentType(videoContentType, tunnelModeAttributeValue) {
  return videoContentType + '; tunnelmode=' + tunnelModeAttributeValue;
}

function isTunnelModeSupported(videoContentType) {
  if (!MediaSource.isTypeSupported(videoContentType)) {
    // If the content type isn't supported at all, it won't be supported in
    // tunnel mode.
    return false;
  }
  if (MediaSource.isTypeSupported(createTunnelModeContentType(videoContentType, 'invalid'))) {
    // The implementation doesn't understand the `tunnelmode` attribute.
    return false;
  }
  return MediaSource.isTypeSupported(createTunnelModeContentType(videoContentType, 'true'));
}

async function play(videoElementId, videoFileId, optionalAudioFileId) { 
  const isPrimaryVideo = videoElementId == 'primary-video';
  const isDrmVideo = !!MEDIA_FILES[videoFileId].licenseUrl;

  videoContentType = MEDIA_FILES[videoFileId].contentType;
  if (isTunnelModeSupported(videoContentType)) {
    // videoContentType = createTunnelModeContentType(videoContentType, 'true');
  }
  
  var videoElement = document.getElementById(videoElementId);

  if (!isPrimaryVideo && videoElement.setMaxVideoCapabilities) {
    videoElement.setMaxVideoCapabilities(MEDIA_FILES[videoFileId].maxVideoCapabilities);
  }

  if(isDrmVideo) {
    var mediaKeys = await createMediaKeySystem(isPrimaryVideo, optionalAudioFileId ? MEDIA_FILES[optionalAudioFileId].contentType : MEDIA_FILES['opus_clear'].contentType, videoContentType);
    videoElement.setMediaKeys(mediaKeys);

    mediaKeySession = mediaKeys.createSession();
    var licenseServerUrl = MEDIA_FILES[videoFileId].licenseUrl;
    mediaKeySession.addEventListener('message', function(messageEvent) {
      fetchArrayBuffer('POST', licenseServerUrl, messageEvent.message,
        function(licenseArrayBuffer) {
          mediaKeySession.update(extractLicense(licenseArrayBuffer));
        });
    });

    videoElement.addEventListener('encrypted', function(encryptedEvent) {
      mediaKeySession.generateRequest(
          encryptedEvent.initDataType, encryptedEvent.initData);
    });
  }

  var mediaSource = new MediaSource();
  mediaSource.addEventListener('sourceopen', async function() {
    var videoSourceBuffer = mediaSource.addSourceBuffer(videoContentType);
    // var audioSourceBuffer;

    // if (optionalAudioFileId) {
    //   audioSourceBuffer = mediaSource.addSourceBuffer(MEDIA_FILES[optionalAudioFileId].contentType);
    // }

    // if (audioSourceBuffer) {
    //   var audioArrayBuffer = await fetchMediaData(optionalAudioFileId);
    //   audioSourceBuffer.appendBuffer(audioArrayBuffer);
    // }

    var videoArrayBuffer = await fetchMediaData(videoFileId);
    videoSourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
    });
    videoSourceBuffer.appendBuffer(videoArrayBuffer);
  });

  videoElement.src = URL.createObjectURL(mediaSource);
  videoElement.play();
}

function getGetParameters() {
  var parsedParameters = {};

  const urlComponents = window.location.href.split('?');
  if (urlComponents.length < 2) {
    return parsedParameters;
  }

  const query = urlComponents[1];
  const parameters = query.split('&');

  for (parameter of parameters) {
    const split = parameter.split('=');
    if (split.length == 0) {
      continue;
    }
    if (split.length == 1) {
      parsedParameters[split[0]] = '';
    } else {
      parsedParameters[split[0]] = split[1];
    }
  }

  return parsedParameters;
}

function populateMediaFileIds() {
  var mediaFileIds = [];
  const getParameters = getGetParameters();

  mediaFileIds['video0'] = getParameters['video0'] ?? 'primary-video';
  // mediaFileIds['video1'] = getParameters['video1'] ?? 'vp9-1080p-60fps-7s_clear';
  mediaFileIds['video1'] = getParameters['video1'] ?? 'secondary-video-1';
  mediaFileIds['video2'] = getParameters['video2'] ?? 'secondary-video-2';
  mediaFileIds['video3'] = getParameters['video3'] ?? 'secondary-video-3';
  mediaFileIds['audio'] = getParameters['audio'] ?? 'opus_clear';

  return mediaFileIds;
}

async function prefetchMediaData(mediaFileIds) {
  for (mediaFileId of Object.keys(mediaFileIds)) {
    await fetchMediaData(mediaFileIds[mediaFileId]);
  }
}

function switchStyle() {
  const baseSheet = "base";
  const mosaicSheet = "mosaic";
  const primaryLayer = "primary-player-layer";
  const secondaryLayer = "secondary-player-layer";
  console.log(document.styleSheets);

  const baseStyle = document.getElementById(baseSheet);
  const mosaicStyle = document.getElementById(mosaicSheet);

  // let element = document.getElementById("sheetSwap");
    // console.log(element);
    // console.log(element.href);
    console.log(baseSheet);
    let pv = document.getElementById("pv");
    let sv1 = document.getElementById("sv1");
    let sv2 = document.getElementById("sv2");
    let sv3 = document.getElementById("sv3");
    let containerEle = document.getElementById("container");
    if (mosaicStyle.hasAttribute('media')) {
      let primaryLayerEle = document.getElementById(primaryLayer);
      let secondaryLayerEle = document.getElementById(secondaryLayer);
      primaryLayerEle.remove();
      secondaryLayerEle.remove();
      containerEle.appendChild(pv);
      containerEle.appendChild(sv1);
      containerEle.appendChild(sv2);
      containerEle.appendChild(sv3);
      mosaicStyle.removeAttribute('media');
      baseStyle.setAttribute('media', "max-width: 1px");
      // element.href = mosaicSheet;
    } else {
      let primaryLayerEle = document.createElement("div");
      primaryLayerEle.id = primaryLayer;
      let secondaryLayerEle = document.createElement("div");
      secondaryLayerEle.id = secondaryLayer;
      containerEle.appendChild(primaryLayerEle);
      containerEle.appendChild(secondaryLayerEle);
      primaryLayerEle.appendChild(pv);
      secondaryLayerEle.appendChild(sv1);
      secondaryLayerEle.appendChild(sv2);
      secondaryLayerEle.appendChild(sv3);
      baseStyle.removeAttribute('media');
      mosaicStyle.setAttribute('media', "max-width: 1px");
      // element.href = baseSheet;
    }
}

function getNextIndex(increment, currIndex) {
  const max = 2;
  if (increment) {
    console.log('curr index is ' + currIndex + ', returning: ' + (currIndex + 1) % (max + 1));
    return (currIndex + 1) % (max + 1);
  }
  if (currIndex == 0) {
    return max;
  }

  return currIndex - 1;
}

// const indexToDivId = {
//   0: {
//     'id': 'pv'
//   },
//   1: {
//     'id': 'sv1'
//   },
//   2: {
//     'id': 'sv2'
//   },
//   3: {
//     'id': 'sv3'
//   },
// };

const indexToDivId = {
  0: {
    'id': 'sv1'
  },
  1: {
    'id': 'sv2'
  },
  2: {
    'id': 'sv3'
  },
};


let videoElements = {
  // 'primary-video': {
  //   currentParent: 'pv',
  //   parentIndex: 0,
  // },
  'secondary-video-1': {
    currentParent: 'sv1',
    parentIndex: 1,
  },
  'secondary-video-2': {
    currentParent: 'sv2',
    parentIndex: 2,
  },
  'secondary-video-3': {
    currentParent: 'sv3',
    parentIndex: 3,
  },
};

function cycle(increment) {
  console.log(videoElements);
  // Return if the base layout is hidden
  const baseStyle = document.getElementById("base");
  if (baseStyle.hasAttribute('media')) {
    return;
  }

  // let primaryVideo = document.getElementById('primary-video');
  let video1 = document.getElementById('secondary-video-1');
  let video2 = document.getElementById('secondary-video-2');
  let video3 = document.getElementById('secondary-video-3');

  // let pv = document.getElementById(videoElements[primaryVideo.id]['currentParent']);
  // pv.removeChild(primaryVideo);
  let firstSv = document.getElementById(videoElements[video1.id]['currentParent']);
  firstSv.removeChild(video1);
  let secondSv = document.getElementById(videoElements[video2.id]['currentParent']);
  secondSv.removeChild(video2);
  let thirdSv = document.getElementById(videoElements[video3.id]['currentParent']);
  thirdSv.removeChild(video3);

  // Find new parent divs and attach them
  // videoElements[primaryVideo.id]['parentIndex'] = getNextIndex(increment, videoElements[primaryVideo.id]['parentIndex']);
  videoElements[video1.id]['parentIndex'] = getNextIndex(increment, videoElements[video1.id]['parentIndex']);
  videoElements[video2.id]['parentIndex'] = getNextIndex(increment, videoElements[video2.id]['parentIndex']);
  videoElements[video3.id]['parentIndex'] = getNextIndex(increment, videoElements[video3.id]['parentIndex']);

  // videoElements[primaryVideo.id]['currentParent'] = indexToDivId[videoElements[primaryVideo.id]['parentIndex']]['id'];
  videoElements[video1.id]['currentParent'] = indexToDivId[videoElements[video1.id]['parentIndex']]['id'];
  videoElements[video2.id]['currentParent'] = indexToDivId[videoElements[video2.id]['parentIndex']]['id'];
  videoElements[video3.id]['currentParent'] = indexToDivId[videoElements[video3.id]['parentIndex']]['id'];
  console.log(videoElements);

  // document.getElementById(videoElements[primaryVideo.id]['currentParent']).appendChild(primaryVideo);
  document.getElementById(videoElements[video1.id]['currentParent']).appendChild(video1);
  document.getElementById(videoElements[video2.id]['currentParent']).appendChild(video2);
  document.getElementById(videoElements[video3.id]['currentParent']).appendChild(video3);
}

async function main() {
  if (window.h5vcc && window.h5vcc.settings) {
    h5vcc.settings.set('MediaSource.EnableAvoidCopyingArrayBuffer', 1);
  }

  // var videoElements = {
  //   'primary-video': {
  //     currentParent: 'pv',
  //     parentIndex: 0,
  //   },
  //   'secondary-video-1': {
  //     currentParent: 'sv1',
  //     parentIndex: 1,
  //   },
  //   'secondary-video-2': {
  //     currentParent: 'sv2',
  //     parentIndex: 2,
  //   },
  //   'secondary-video-3': {
  //     currentParent: 'sv3',
  //     parentIndex: 3,
  //   },
  // };
  console.log(videoElements);

  addEventListener("click", function (event) {
    switchStyle();
  });

  addEventListener("keydown", function (event) {
    // Enter keys
    if ([13, 32768].includes(event.keyCode)) {
      switchStyle();
    }

    // Left key
    if ([37, 32782].includes(event.keyCode)) {
      cycle(false);
    }

    // Right key
    if ([39, 32781].includes(event.keyCode)) {
      cycle(true);
    }
  });

  document.addEventListener("backbutton", function() {
    window.location.replace('https://youtube.com/tv');
  }, false);

  const mediaFileIds = populateMediaFileIds();
  await prefetchMediaData(mediaFileIds);

  play('primary-video', mediaFileIds['video0'], mediaFileIds['audio']);
  window.setTimeout(function() {
    play('secondary-video-1', mediaFileIds['video1']);
  }, 2*1000);
  window.setTimeout(function() {
    play('secondary-video-2', mediaFileIds['video2']);
  }, 4*1000);
  window.setTimeout(function() {
    play('secondary-video-3', mediaFileIds['video3']);
  }, 6*1000);
}


main();
