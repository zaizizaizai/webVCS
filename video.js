const AgoraRTC = require('AgoraRTCSDK-2.0.0.js');

//创建client对象
var client = AgoraRTC.createClient( {mode: 'interop'} );

//初始化client对象
client.init(appID, function(){
    console.log('AgoraRTC client initialized');
});

/**
 * 加入频道，如果启用了dynamic key, 请将dynamic key作为第一个参数
 * 若有自己的用户ID系统, 可在第三个参数传参, 不然可传undefined, 则Agora会自动分配一个uid
 */
client.join(null, "webtest", undefined, function(uid){
    console.log('User' + uid + 'join channel successfully');
    console.log('Timesatmp: ' + Date.now());
});

/**
 * 创建本地音视频流对象, 修改对应的参数可以指定启用/禁用特定功能
 */
var options = {
    streamID: uid,
    audio: true,
    video: true,
    screen: false,
    extensionID: "minllpmhdgpndnkomcoccfekfegnlikg"
}
var localStream = AgoraRTC.createStream(options);

/**
 * 设置本地流视频属性
 * 详细列表可查看, https://document.agora.io/cn/2.0/api/web.html#setvideoprofile
 */
localStream.setVideoProfile("480p_4");

/**
 * 初始化本地流, 并同时申请本地媒体采集权限
 */
localStream.init(function(){
    console.log('local stream initialized');
});

/**
 * 发布本地流以使其可被远端接收
 */
client.publish(localStream, function(err){
    console.log('Publish stream failed: ' + err);
});

/**
 * 监听流事件，订阅远端流 
 */
client.on('stream-added', function(evt){
    //获取远端流
    var stream = evt.stream;
    console.log('New stream added: ' + stream.getID());
    console.log('Timestamp: ' + Date.now());
    console.log('Subscribe ' + stream);
    //在新的流加入后，订阅远端流
    client.subscribe(stream, function(err){
        console.log('Subscribe stream failed', err);
    });
});
//当远端流离开信道(远端主动)
client.on('peer-leave', function(evt){
    console.log('Peer has left: ' + evt.uid);
    console.log('Timestamp: ' + Date.now());
    console.log(evt);
});
//当远端流成功被订阅
client.on('stream-subscribed', function(evt){
    var stream = evt.stream;
    console.log('Got stream-subscribed event');
    console.log('Timestamp: ' + Date.now());
    console.log('Subscribe remote stream successfully: ' + stream.getID());
    console.log(evt);
});
//当远端流被移除信道(本地主动)
client.on('stream-removed', function(evt){
    var stream = evt.stream;
    console.log("Stream removed: " + evt.stream.getId());
    console.log("Timestamp: " + Date.now());
    console.log(evt);
});

/**
 * 播放本地/远端流
 */
localStream.play("agora-remote");