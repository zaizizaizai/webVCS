!
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t()
} (this,
function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        },
        t.n = function(e) {
            var n = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return t.d(n, "a", n),
            n
        },
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "",
        t(t.s = 36)
    } ([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(20),
        i = function() {
            var e, t, n, i, r, a, s = 0;
            return e = function(e) {
                e > 4 ? e = 4 : e < 0 && (e = 0),
                s = e
            },
            t = function() {
                var e = arguments[0],
                t = arguments;
                if (! (e < s)) switch (e) {
                case 0:
                    t[0] = (0, o.getTimestamp)() + " DEBUG:",
                    console.log.apply(console, t);
                    break;
                case 1:
                    t[0] = (0, o.getTimestamp)() + " INFO:",
                    console.log.apply(console, t);
                    break;
                case 2:
                    t[0] = (0, o.getTimestamp)() + " WARN:",
                    console.warn.apply(console, t);
                    break;
                case 3:
                    t[0] = (0, o.getTimestamp)() + " ERROR:",
                    console.error.apply(console, t);
                    break;
                default:
                    return t[0] = (0, o.getTimestamp)() + " DEFAULT:",
                    void console.log.apply(console, t)
                }
            },
            n = function() {
                for (var e = [0], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            },
            i = function() {
                for (var e = [1], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            },
            r = function() {
                for (var e = [2], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            },
            a = function() {
                for (var e = [3], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                t.apply(this, e)
            },
            {
                DEBUG: 0,
                INFO: 1,
                WARNING: 2,
                ERROR: 3,
                NONE: 4,
                setLogLevel: e,
                log: t,
                debug: n,
                info: i,
                warning: r,
                error: a
            }
        } ();
        t.
    default = i
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            var e = {};
            return e.dispatcher = {},
            e.dispatcher.eventListeners = {},
            e.addEventListener = function(t, n) {
                void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []),
                e.dispatcher.eventListeners[t].push(n)
            },
            e.on = e.addEventListener,
            e.removeEventListener = function(t, n) {
                var o; - 1 !== (o = e.dispatcher.eventListeners[t].indexOf(n)) && e.dispatcher.eventListeners[t].splice(o, 1)
            },
            e.dispatchEvent = function(t) {
                var n;
                for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t)
            },
            e.dispatchSocketEvent = function(t) {
                var n;
                for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t.msg)
            },
            e
        },
        i = function(e) {
            var t = {};
            return t.type = e.type,
            t
        },
        r = function(e) {
            var t = i(e);
            return t.stream = e.stream,
            t.reason = e.reason,
            t.msg = e.msg,
            t
        },
        a = function(e) {
            var t = i(e);
            return t.uid = e.uid,
            t.attr = e.attr,
            t.stream = e.stream,
            t
        },
        s = function(e) {
            var t = i(e);
            return t.msg = e.msg,
            t
        };
        t.EventDispatcher = o,
        t.StreamEvent = r,
        t.ClientEvent = a,
        t.MediaEvent = s
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(1),
        i = function(e) {
            var t = (0, o.EventDispatcher)(e);
            return t.url = ".",
            t
        };
        t.
    default = i
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            var e = m();
            return e.name && "Chrome" === e.name
        },
        i = function() {
            var e = m();
            return e.name && "Safari" === e.name
        },
        r = function() {
            var e = m();
            return e.name && "Firefox" === e.name
        },
        a = function() {
            var e = m();
            return e.name && "OPR" === e.name
        },
        s = function() {
            var e = m();
            return e.name && "MQQBrowser" === e.name
        },
        d = function() {
            var e = m();
            return e.name && "MicroMessenger" === e.name
        },
        c = function() {
            var e = f();
            return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows")
        },
        u = function() {
            var e = f();
            return "Android" === e || "iOS" === e
        },
        l = function() {
            return m().version
        },
        f = function() {
            return m().os
        },
        p = function() {
            var e, t = navigator.userAgent,
            n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(n[1])) return e = /\brv[ :]+(\d+)/g.exec(t) || [],
            {
                name: "IE",
                version: e[1] || ""
            };
            "Chrome" === n[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (n = e),
            "Chrome" === n[1] && null != (e = t.match(/(mqqbrowser(?=\/))\/?(\d+)/i)) && (n = e),
            "Chrome" === n[1] && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (n = e),
            "Safari" === n[1] && null != (e = t.match(/version\/(\d+)/i)) && (n[2] = e[1]);
            var o = void 0,
            i = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            },
            {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            },
            {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            },
            {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            },
            {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            },
            {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            },
            {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            },
            {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            },
            {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            },
            {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            },
            {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            },
            {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            },
            {
                s: "Windows CE",
                r: /Windows CE/
            },
            {
                s: "Windows 3.11",
                r: /Win16/
            },
            {
                s: "Android",
                r: /Android/
            },
            {
                s: "Open BSD",
                r: /OpenBSD/
            },
            {
                s: "Sun OS",
                r: /SunOS/
            },
            {
                s: "Linux",
                r: /(Linux|X11)/
            },
            {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            },
            {
                s: "Mac OS X",
                r: /Mac OS X/
            },
            {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            },
            {
                s: "QNX",
                r: /QNX/
            },
            {
                s: "UNIX",
                r: /UNIX/
            },
            {
                s: "BeOS",
                r: /BeOS/
            },
            {
                s: "OS/2",
                r: /OS\/2/
            },
            {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var r in i) {
                var a = i[r];
                if (a.r.test(navigator.userAgent)) {
                    o = a.s;
                    break
                }
            }
            return {
                name: n[1],
                version: n[2],
                os: o
            }
        },
        m = function() {
            var e = p();
            return function() {
                return e
            }
        } ();
        t.getBrowserInfo = m,
        t.getBrowserVersion = l,
        t.getBrowserOS = f,
        t.isChrome = o,
        t.isSafari = i,
        t.isFireFox = r,
        t.isOpera = a,
        t.isQQBrowser = s,
        t.isWeChatBrowser = d,
        t.isSupportedPC = c,
        t.isSupportedMobile = u
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, i, r, a = {
            INIT: "i",
            JOIN: "j",
            GET_MEDIA: "m",
            PUBLISH: "p",
            SUBSCRIBE: "s"
        },
        s = [],
        d = function(e) {
            e.n === a.INIT && (i = e.ver, r = e.appid, delete e.ver, delete e.appid, 0 === s.length && (o = null)),
            s.push(e),
            (!1 === e.succ || e.n === a.PUBLISH || e.n === a.SUBSCRIBE || s.length >= 10) && c()
        },
        c = function() {
            var e = (new Date).getTime(),
            t = {
                lts: s[0].lts,
                elps: e - s[0].lts,
                events: s,
                succ: s[s.length - 1].succ,
                appid: r,
                ver: i,
                brwsr: navigator.userAgent
            };
            o && (t.prev_e = o);
            for (var n = {
                report: t,
                sent_ts: Math.round(e / 1e3)
            },
            a = "https:" === document.location.protocol ? "https://": "http://", d = "https:" === document.location.protocol ? 6443 : 6080, c = 0; c < 1; c++) {
                var l = a + "webcollector.agora.io:" + d + "/events/sequence"; !
                function(e, t, n, o) {
                    var i = new XMLHttpRequest;
                    i.open("POST", e, !0),
                    i.setRequestHeader("Content-type", "application/json; charset=utf-8"),
                    i.onload = function() {
                        n(i.responseText)
                    },
                    i.onerror = function() {
                        o(i)
                    },
                    i.send(JSON.stringify(t))
                } (l, n,
                function(e) {},
                function(e) {})
            }
            u()
        },
        u = function() {
            o = s[s.length - 1],
            s = []
        };
        t.onEvent = d,
        t.EVENTS = a
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
            FAILED: "FAILED",
            INVALID_KEY: "INVALID_KEY",
            INVALID_OPERATION: "INVALID_OPERATION",
            INVALID_PARAMETER: "INVALID_PARAMETER",
            INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM",
            INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM",
            INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY",
            DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT",
            NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE",
            NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE",
            JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT",
            NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL",
            LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT",
            LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED",
            OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT",
            OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED",
            REQUEST_DEFERRED: "REQUEST_DEFERRED",
            SOCKET_ERROR: "SOCKET_ERROR",
            SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED",
            PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED",
            CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR",
            SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE",
            JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED",
            PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED",
            UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED",
            SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED",
            UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED",
            NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM",
            ERR_FAILED: "1",
            ERR_INVALID_VENDOR_KEY: "101",
            ERR_INVALID_CHANNEL_NAME: "102",
            WARN_NO_AVAILABLE_CHANNEL: "103",
            WARN_LOOKUP_CHANNEL_TIMEOUT: "104",
            WARN_LOOKUP_CHANNEL_REJECTED: "105",
            WARN_OPEN_CHANNEL_TIMEOUT: "106",
            WARN_OPEN_CHANNEL_REJECTED: "107",
            WARN_REQUEST_DEFERRED: "108",
            ERR_DYNAMIC_KEY_TIMEOUT: "109",
            ERR_INVALID_DYNAMIC_KEY: "110",
            ERR_NO_VOCS_AVAILABLE: "2000",
            ERR_NO_VOS_AVAILABLE: "2001",
            ERR_JOIN_CHANNEL_TIMEOUT: "2002"
        };
        t.
    default = o
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.safeCall = t.checkSystemRequirements = void 0;
        var o = n(3),
        i = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (o),
        r = n(0),
        a = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (r),
        s = function() {
            var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
            t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
            n = window.WebSocket,
            o = !!e && !!t && !!n,
            r = !1;
            return a.
        default.debug(i.getBrowserInfo(), "isAPISupport:" + o),
            i.isChrome() && i.getBrowserVersion() >= 58 && "iOS" !== i.getBrowserOS() && (r = !0),
            i.isFireFox() && i.getBrowserVersion() >= 56 && (r = !0),
            i.isOpera() && i.getBrowserVersion() >= 45 && (r = !0),
            i.isSafari() && i.getBrowserVersion() >= 11 && (r = !0),
            i.isSupportedPC() || i.isSupportedMobile() || (r = !1),
            o && r
        },
        d = function() {
            var e = arguments[0];
            if ("function" == typeof e) {
                var t = Array.prototype.slice.call(arguments, 1);
                e.apply(null, t)
            }
        };
        t.checkSystemRequirements = s,
        t.safeCall = d
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = ["webcs-2.agora.io", "webcs-3.agora.io", "webcs-4.agora.io"];
        t.GIT_VERSION = "release_20171026-107-g96592b3",
        t.VERSION = "2.0.0",
        t.WEBCS_DOMAIN = "webcs-1.agora.io",
        t.WEBCS_DOMAIN_BACKUP_LIST = o,
        t.WEBCS_BACKUP_CONNECT_TIMEOUT = 6e3,
        t.HTTP_CONNECT_TIMEOUT = 5e3
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDevices = t.createStream = t.Stream = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        r = n(17),
        a = o(r),
        s = n(22),
        d = o(s),
        c = n(10),
        u = n(1),
        l = n(4),
        f = n(0),
        p = o(f),
        m = n(3),
        g = function(e) {
            function t() {
                return null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35
            }
            function n() {
                return null !== window.navigator.userAgent.match("Firefox")
            }
            function o(t, n) {
                return {
                    width: {
                        ideal: t
                    },
                    height: {
                        ideal: n
                    },
                    deviceId: e.cameraId ? {
                        exact: e.cameraId
                    }: void 0
                }
            }
            var r = (0, u.EventDispatcher)(e);
            if (r.stream = e.stream, r.aux_stream = void 0, r.url = e.url, r.onClose = void 0, r.local = !1, r.video = e.video, r.audio = e.audio, r.screen = e.screen, r.screenAttributes = {
                width: 1920,
                height: 1080,
                maxFr: 5,
                minFr: 1
            },
            r.videoSize = e.videoSize, r.player = void 0, e.attributes = e.attributes || {},
            r.videoEnabled = !0, r.audioEnabled = !0, !(void 0 === r.videoSize || r.videoSize instanceof Array && 4 === r.videoSize.length)) throw Error("Invalid Video Size");
            r.videoSize = [640, 480, 640, 480],
            void 0 !== e.local && !0 !== e.local || (r.local = !0),
            r.initialized = !r.local;
            var s = {
                true: !0,
                unspecified: !0,
                "120p_1": o(160, 120),
                "120p_3": o(120, 120),
                "180p_1": o(320, 180),
                "180p_3": o(180, 180),
                "180p_4": o(240, 180),
                "240p_1": o(320, 240),
                "240p_3": o(240, 240),
                "240p_4": o(424, 240),
                "360p_1": o(640, 360),
                "360p_3": o(360, 360),
                "360p_4": o(640, 360),
                "360p_6": o(360, 360),
                "360p_7": o(480, 360),
                "360p_8": o(480, 360),
                "360p_9": o(640, 360),
                "360p_10": o(640, 360),
                "360p_11": o(640, 360),
                "480p_1": o(640, 480),
                "480p_2": o(640, 480),
                "480p_3": o(480, 480),
                "480p_4": o(640, 480),
                "480p_6": o(480, 480),
                "480p_8": o(848, 480),
                "480p_9": o(848, 480),
                "480p_10": o(640, 480),
                "720p_1": o(1280, 720),
                "720p_2": o(1280, 720),
                "720p_3": o(1280, 720),
                "720p_5": o(960, 720),
                "720p_6": o(960, 720),
                "1080p_1": o(1920, 1080),
                "1080p_2": o(1920, 1080),
                "1080p_3": o(1920, 1080),
                "1080p_5": o(1920, 1080),
                "1440p_1": o(2560, 1440),
                "1440p_2": o(2560, 1440),
                "4k_1": o(3840, 2160),
                "4k_3": o(3840, 2160)
            };
            return r.unmuteAudio = void 0,
            r.muteAudio = void 0,
            r.unmuteVideo = void 0,
            r.muteVideo = void 0,
            r.setVideoResolution = function(t) {
                return t += "",
                void 0 !== s[t] && (e.video = s[t], e.attributes = e.attributes || {},
                e.attributes.resolution = t, !0)
            },
            r.setVideoFrameRate = function(t) {
                return ! (0, m.isFireFox)() && ("object" === (void 0 === t ? "undefined": i(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {},
                e.attributes.minFrameRate = t[0], e.attributes.maxFrameRate = t[1], !0))
            },
            r.setVideoBitRate = function(t) {
                return "object" === (void 0 === t ? "undefined": i(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {},
                e.attributes.minVideoBW = t[0], e.attributes.maxVideoBW = t[1], !0)
            },
            r.setScreenProfile = function(e) {
                if ("string" == typeof e && r.screen) {
                    switch (e) {
                    case "480p_1":
                        r.screenAttributes.width = 640,
                        r.screenAttributes.height = 480,
                        r.screenAttributes.maxFr = 5,
                        r.screenAttributes.minFr = 1;
                        break;
                    case "480p_2":
                        r.screenAttributes.width = 640,
                        r.screenAttributes.height = 480,
                        r.screenAttributes.maxFr = 30,
                        r.screenAttributes.minFr = 25;
                        break;
                    case "720p_1":
                        r.screenAttributes.width = 1280,
                        r.screenAttributes.height = 720,
                        r.screenAttributes.maxFr = 5,
                        r.screenAttributes.minFr = 1;
                        break;
                    case "720p_2":
                        r.screenAttributes.width = 1280,
                        r.screenAttributes.height = 720,
                        r.screenAttributes.maxFr = 30,
                        r.screenAttributes.minFr = 25;
                        break;
                    case "1080p_1":
                        r.screenAttributes.width = 1920,
                        r.screenAttributes.height = 1080,
                        r.screenAttributes.maxFr = 5,
                        r.screenAttributes.minFr = 1;
                        break;
                    case "1080p_2":
                        r.screenAttributes.width = 1920,
                        r.screenAttributes.height = 1080,
                        r.screenAttributes.maxFr = 30,
                        r.screenAttributes.minFr = 25
                    }
                    return ! 0
                }
                return ! 1
            },
            r.setVideoProfile = function(e) {
                if ("string" == typeof e && r.video) {
                    switch (e) {
                    case "120p":
                    case "120P":
                    case "120p_1":
                    case "120P_1":
                        r.setVideoResolution("120p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 65]);
                        break;
                    case "120p_3":
                    case "120P_3":
                        r.setVideoResolution("120p_3"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 50]);
                        break;
                    case "180p":
                    case "180P":
                    case "180p_1":
                    case "180P_1":
                        r.setVideoResolution("180p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 140]);
                        break;
                    case "180p_3":
                    case "180P_3":
                        r.setVideoResolution("180p_3"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 100]);
                        break;
                    case "180p_4":
                    case "180P_4":
                        r.setVideoResolution("180p_4"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 120]);
                        break;
                    case "240p":
                    case "240P":
                    case "240p_1":
                    case "240P_1":
                        r.setVideoResolution("240p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 200]);
                        break;
                    case "240p_3":
                    case "240P_3":
                        r.setVideoResolution("240p_3"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 140]);
                        break;
                    case "240p_4":
                    case "240P_4":
                        r.setVideoResolution("240p_4"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([10, 220]);
                        break;
                    case "360p":
                    case "360P":
                    case "360p_1":
                    case "360P_1":
                        r.setVideoResolution("360p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 400]);
                        break;
                    case "360p_3":
                    case "360P_3":
                        r.setVideoResolution("360p_3"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 260]);
                        break;
                    case "360p_4":
                    case "360P_4":
                        r.setVideoResolution("360p_4"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 600]);
                        break;
                    case "360p_6":
                    case "360P_6":
                        r.setVideoResolution("360p_6"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 400]);
                        break;
                    case "360p_7":
                    case "360P_7":
                        r.setVideoResolution("360p_7"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 320]);
                        break;
                    case "360p_8":
                    case "360P_8":
                        r.setVideoResolution("360p_8"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 490]);
                        break;
                    case "360p_9":
                    case "360P_9":
                        r.setVideoResolution("360p_9"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 800]);
                        break;
                    case "360p_10":
                    case "360P_10":
                        r.setVideoResolution("360p_10"),
                        r.setVideoFrameRate([24, 24]),
                        r.setVideoBitRate([20, 800]);
                        break;
                    case "360p_11":
                    case "360P_11":
                        r.setVideoResolution("360p_11"),
                        r.setVideoFrameRate([24, 24]),
                        r.setVideoBitRate([20, 1e3]);
                        break;
                    case "480p":
                    case "480P":
                    case "480p_1":
                    case "480P_1":
                        r.setVideoResolution("480p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 500]);
                        break;
                    case "480p_2":
                    case "480P_2":
                        r.setVideoResolution("480p_2"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 1e3]);
                        break;
                    case "480p_3":
                    case "480P_3":
                        r.setVideoResolution("480p_3"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 400]);
                        break;
                    case "480p_4":
                    case "480P_4":
                        r.setVideoResolution("480p_4"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 750]);
                        break;
                    case "480p_6":
                    case "480P_6":
                        r.setVideoResolution("480p_6"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 600]);
                        break;
                    case "480p_8":
                    case "480P_8":
                        r.setVideoResolution("480p_8"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 610]);
                        break;
                    case "480p_9":
                    case "480P_9":
                        r.setVideoResolution("480p_9"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([20, 930]);
                        break;
                    case "480p_10":
                    case "480P_10":
                        r.setVideoResolution("480p_10"),
                        r.setVideoFrameRate([10, 10]),
                        r.setVideoBitRate([20, 400]);
                        break;
                    case "720p":
                    case "720P":
                    case "720p_1":
                    case "720P_1":
                        r.setVideoResolution("720p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([30, 1130]);
                        break;
                    case "720p_2":
                    case "720P_2":
                        r.setVideoResolution("720p_2"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([30, 2e3]);
                        break;
                    case "720p_3":
                    case "720P_3":
                        r.setVideoResolution("720p_3"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([30, 1710]);
                        break;
                    case "720p_5":
                    case "720P_5":
                        r.setVideoResolution("720p_5"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([30, 910]);
                        break;
                    case "720p_6":
                    case "720P_6":
                        r.setVideoResolution("720p_6"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([30, 1380]);
                        break;
                    case "1080p":
                    case "1080P":
                    case "1080p_1":
                    case "1080P_1":
                        r.setVideoResolution("1080p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([50, 2080]);
                        break;
                    case "1080p_2":
                    case "1080P_2":
                        r.setVideoResolution("1080p_2"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([50, 3e3]);
                        break;
                    case "1080p_3":
                    case "1080P_3":
                        r.setVideoResolution("1080p_3"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([50, 3150]);
                        break;
                    case "1080p_5":
                    case "1080P_5":
                        r.setVideoResolution("1080p_5"),
                        r.setVideoFrameRate([60, 60]),
                        r.setVideoBitRate([50, 4780]);
                        break;
                    case "1440p":
                    case "1440P":
                    case "1440p_1":
                    case "1440P_1":
                        r.setVideoResolution("1440p_1"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([50, 4850]);
                        break;
                    case "1440p_2":
                    case "1440P_2":
                        r.setVideoResolution("1440p_2"),
                        r.setVideoFrameRate([60, 60]),
                        r.setVideoBitRate([50, 7350]);
                        break;
                    case "4k":
                    case "4K":
                    case "4k_1":
                    case "4K_1":
                        r.setVideoResolution("4k_1"),
                        r.setVideoFrameRate([30, 30]),
                        r.setVideoBitRate([50, 8910]);
                        break;
                    case "4k_3":
                    case "4K_3":
                        r.setVideoResolution("4k_3"),
                        r.setVideoFrameRate([60, 60]),
                        r.setVideoBitRate([50, 13500]);
                        break;
                    default:
                        r.setVideoResolution("480p_1"),
                        r.setVideoFrameRate([15, 15]),
                        r.setVideoBitRate([20, 500])
                    }
                    return ! 0
                }
                return ! 1
            },
            r.getId = function() {
                return e.streamID
            },
            r.getAttributes = function() {
                return e.screen ? r.screenAttributes: e.attributes
            },
            r.hasAudio = function() {
                return e.audio
            },
            r.hasVideo = function() {
                return e.video
            },
            r.hasScreen = function() {
                return e.screen
            },
            r.isVideoOn = function() {
                return r.hasVideo && r.videoEnabled
            },
            r.isAudioOn = function() {
                return r.hasAudio && r.audioEnabled
            },
            r.successCbWapper = function(e, t) { (0, l.onEvent)({
                    n: l.EVENTS.GET_MEDIA,
                    lts: e,
                    elps: (new Date).getTime() - e,
                    succ: !0
                }),
                t()
            },
            r.failCbWapper = function(e, t, n) { (0, l.onEvent)({
                    n: l.EVENTS.GET_MEDIA,
                    lts: e,
                    elps: (new Date).getTime() - e,
                    succ: !1,
                    ec: n.msg
                }),
                t(n)
            },
            r.init = function(o, a) {
                var s = (new Date).getTime(),
                d = arguments[2];
                if (void 0 === d && (d = 2), !0 === r.initialized) return void("function" == typeof a && r.failCbWapper(s, a, {
                    type: "warning",
                    msg: "STREAM_ALREADY_INITIALIZED"
                }));
                if (!0 !== r.local) return void("function" == typeof a && r.failCbWapper(s, a, {
                    type: "warning",
                    msg: "STREAM_NOT_LOCAL"
                }));
                try {
                    if ((e.audio || e.video || e.screen) && void 0 === e.url) {
                        p.
                    default.debug("Requested access to local media");
                        var u = e.video;
                        if (e.screen) var l = {
                            video: u,
                            audio: e.audio,
                            screen: !0,
                            data: !0,
                            extensionId: e.extensionId,
                            attributes: r.screenAttributes,
                            fake: e.fake
                        };
                        else {
                            var l = {
                                video: u,
                                audio: e.audio,
                                fake: e.fake
                            };
                            if (!t()) {
                                var f = 30,
                                m = 30;
                                void 0 !== e.attributes.minFrameRate && (f = e.attributes.minFrameRate),
                                void 0 !== e.attributes.maxFrameRate && (m = e.attributes.maxFrameRate),
                                n() ? !0 === l.video ? (l.video = {
                                    width: {
                                        ideal: r.videoSize[0]
                                    },
                                    height: {
                                        ideal: r.videoSize[1]
                                    },
                                    frameRate: {
                                        ideal: f,
                                        max: m
                                    }
                                },
                                r.setVideoBitRate([500, 500])) : "object" === i(l.video) && (l.video.frameRate = {
                                    ideal: f,
                                    max: m
                                }) : (!0 === l.audio && (l.audio = !e.microphoneId || {
                                    deviceId: {
                                        exact: e.microphoneId
                                    }
                                }), !0 === l.video ? (l.video = {
                                    width: {
                                        ideal: r.videoSize[0]
                                    },
                                    height: {
                                        ideal: r.videoSize[1]
                                    },
                                    frameRate: {
                                        ideal: f,
                                        max: m
                                    }
                                },
                                r.setVideoBitRate([500, 500])) : "object" === i(l.video) && (l.video.frameRate = {
                                    ideal: f,
                                    max: m
                                }))
                            }
                        }
                        p.
                    default.debug(l);
                        var g = Object.assign({},
                        l);
                        if ((0, c.GetUserMedia)(g,
                        function(e) {
                            p.
                        default.debug("User has granted access to local media"),
                            r.dispatchEvent({
                                type: "accessAllowed"
                            }),
                            r.stream = e,
                            r.successCbWapper(s, o),
                            r.initialized = !0
                        },
                        function(e) {
                            var t = {
                                type: "error",
                                msg: e.name || e
                            };
                            switch (t.msg) {
                            case "Starting video failed":
                            case "TrackStartError":
                                if (r.videoSize = void 0, d > 0) return void setTimeout(function() {
                                    r.init(o, a, d - 1)
                                },
                                1);
                                t.msg = "MEDIA_OPTION_INVALID";
                                break;
                            case "DevicesNotFoundError":
                                t.msg = "DEVICES_NOT_FOUND";
                                break;
                            case "NotSupportedError":
                                t.msg = "NOT_SUPPORTED";
                                break;
                            case "PermissionDeniedError":
                                t.msg = "PERMISSION_DENIED",
                                r.dispatchEvent({
                                    type: "accessDenied"
                                });
                                break;
                            case "PERMISSION_DENIED":
                            case "NotAllowedError":
                                r.dispatchEvent({
                                    type:
                                    "accessDenied"
                                });
                                break;
                            case "ConstraintNotSatisfiedError":
                                t.msg = "CONSTRAINT_NOT_SATISFIED";
                                break;
                            default:
                                t.msg || (t.msg = "UNDEFINED")
                            }
                            p.
                        default.error("Media access:", t.msg),
                            "function" == typeof a && r.failCbWapper(s, a, t)
                        }), e.screen && e.audio) {
                            var v = {
                                video: !1,
                                audio: l.audio
                            };
                            p.
                        default.debug(v),
                            (0, c.GetUserMedia)(v,
                            function(e) {
                                p.
                            default.info("User has granted access to auxiliary local media."),
                                r.dispatchEvent({
                                    type: "accessAllowed"
                                }),
                                r.aux_stream = e
                            },
                            function(e) {
                                var t = {
                                    type: "error",
                                    msg: e.name || e
                                };
                                switch (t.msg) {
                                case "Starting video failed":
                                case "TrackStartError":
                                    if (r.videoSize = void 0, d > 0) return void setTimeout(function() {
                                        r.init(o, a, d - 1)
                                    },
                                    1);
                                    t.msg = "MEDIA_OPTION_INVALID";
                                    break;
                                case "DevicesNotFoundError":
                                    t.msg = "DEVICES_NOT_FOUND";
                                    break;
                                case "NotSupportedError":
                                    t.msg = "NOT_SUPPORTED";
                                    break;
                                case "PermissionDeniedError":
                                    t.msg = "PERMISSION_DENIED",
                                    r.dispatchEvent({
                                        type: "accessDenied"
                                    });
                                    break;
                                case "PERMISSION_DENIED":
                                case "NotAllowedError":
                                    r.dispatchEvent({
                                        type:
                                        "accessDenied"
                                    });
                                    break;
                                case "ConstraintNotSatisfiedError":
                                    t.msg = "CONSTRAINT_NOT_SATISFIED";
                                    break;
                                default:
                                    t.msg || (t.msg = "UNDEFINED")
                                }
                                p.
                            default.error("Media access:", t.msg),
                                "function" == typeof a && r.failCbWapper(s, a, t)
                            })
                        }
                    } else "function" == typeof a && r.failCbWapper(s, a, {
                        type: "warning",
                        msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES"
                    })
                } catch(e) {
                    p.
                default.error("Stream init:", e),
                    "function" == typeof a && r.failCbWapper(s, a, {
                        type: "error",
                        msg: e.message || e
                    })
                }
            },
            r.close = function() {
                if (p.
            default.debug("Close stream with id", e.streamID), void 0 !== r.stream) {
                    var t = r.stream.getTracks();
                    for (var n in t) t.hasOwnProperty(n) && t[n].stop();
                    r.stream = void 0
                }
                r.initialized = !1,
                r.unmuteAudio = void 0,
                r.muteAudio = void 0,
                r.unmuteVideo = void 0,
                r.muteVideo = void 0
            },
            r.enableAudio = function() {
                return p.
            default.debug("Enable audio stream with id", e.streamID),
                !(!r.hasAudio() || !r.initialized || void 0 === r.stream || !0 === r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.unmuteAudio && r.unmuteAudio(), r.audioEnabled = !0, r.stream.getAudioTracks()[0].enabled = !0, !0)
            },
            r.disableAudio = function() {
                return p.
            default.debug("Disable audio stream with id", e.streamID),
                !!(r.hasAudio() && r.initialized && void 0 !== r.stream && r.stream.getAudioTracks()[0].enabled) && (void 0 !== r.muteAudio && r.muteAudio(), r.audioEnabled = !1, r.stream.getAudioTracks()[0].enabled = !1, !0)
            },
            r.enableVideo = function() {
                return p.
            default.debug("Enable video stream with id", e.streamID),
                !(!r.initialized || void 0 === r.stream || !r.stream.getVideoTracks().length || !0 === r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.unmuteVideo && r.unmuteVideo(), r.videoEnabled = !0, r.stream.getVideoTracks()[0].enabled = !0, !0)
            },
            r.disableVideo = function() {
                return p.
            default.debug("Disable video stream with id", e.streamID),
                !!(r.initialized && void 0 !== r.stream && r.stream.getVideoTracks().length && r.stream.getVideoTracks()[0].enabled) && (void 0 !== r.muteVideo && r.muteVideo(), r.videoEnabled = !1, r.stream.getVideoTracks()[0].enabled = !1, !0)
            },
            r.play = function(e, t) {
                r.showing = !1,
                !r.local || r.video || r.screen ? void 0 !== e && (r.player = new a.
            default({
                    id:
                    r.getId(),
                    stream: r,
                    elementID: e,
                    options: void 0,
                    url: t
                }), r.showing = !0) : r.hasAudio() && (r.player = new d.
            default({
                    id:
                    r.getId(),
                    stream: r,
                    elementID: e,
                    options: void 0,
                    url: t
                }), r.showing = !0)
            },
            r.stop = function() {
                p.
            default.debug("Stop stream player with id", e.streamID),
                void 0 !== r.player && r.player.destroy()
            },
            r
        },
        v = function(e) {
            return p.
        default.debug("Create stream with id", e.streamID),
            g(e)
        },
        h = function(e) {
            navigator.mediaDevices && navigator.mediaDevices.enumerateDevices().then(function(t) {
                e(t)
            })
        };
        t.Stream = g,
        t.createStream = v,
        t.getDevices = h
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
        r = o(i),
        a = n(18),
        s = o(a),
        d = function(e) {
            var t, n, o = (0, r.
        default)({});
            return o.elementID = e.elementID,
            o.id = e.id,
            o.url = e.url,
            o.div = document.createElement("div"),
            o.div.setAttribute("id", "bar_" + o.id),
            o.bar = document.createElement("div"),
            o.bar.setAttribute("style", "width: 100%; height: 15%; max-height: 30px; position: absolute; bottom: 0; right: 0; background-color: rgba(255,255,255,0.62)"),
            o.bar.setAttribute("id", "subbar_" + o.id),
            o.link = document.createElement("a"),
            o.link.setAttribute("href", "http://www.lynckia.com/"),
            o.link.setAttribute("target", "_blank"),
            o.logo = document.createElement("img"),
            o.logo.setAttribute("style", "width: 100%; height: 100%; max-width: 30px; position: absolute; top: 0; left: 2px;"),
            o.logo.setAttribute("alt", "Lynckia"),
            n = function(e) {
                "block" !== e ? e = "none": clearTimeout(t),
                o.div.setAttribute("style", "width: 100%; height: 100%; position: absolute; bottom: 0; right: 0; display:" + e)
            },
            o.display = function() {
                n("block")
            },
            o.hide = function() {
                t = setTimeout(n, 1e3)
            },
            document.getElementById(o.elementID).appendChild(o.div),
            o.div.appendChild(o.bar),
            e.stream.screen || void 0 !== e.options && void 0 !== e.options.speaker && !0 !== e.options.speaker || (o.speaker = new s.
        default({
                elementID:
                "subbar_" + o.id,
                id: o.id,
                stream: e.stream,
                media: e.media,
                url: o.url
            })),
            o.display(),
            o.hide(),
            o
        };
        t.
    default = d
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GetUserMedia = t.Connection = void 0;
        var i = n(23),
        r = o(i),
        a = n(24),
        s = o(a),
        d = n(25),
        c = o(d),
        u = n(26),
        l = o(u),
        f = n(27),
        p = o(f),
        m = n(0),
        g = o(m),
        v = 103,
        h = function(e) {
            var t = {};
            if (e.session_id = v += 1, "undefined" != typeof window && window.navigator) if (null !== window.navigator.userAgent.match("Firefox")) t.browser = "mozilla",
            t = (0, p.
        default)(e);
            else if (window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) g.
        default.debug("Safari"),
            t = (0, c.
        default)(e),
            t.browser = "safari";
            else if (window.navigator.userAgent.indexOf("MSIE ")) t = (0, s.
        default)(e),
            t.browser = "ie";
            else if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] >= 26) t = (0, s.
        default)(e),
            t.browser = "chrome-stable";
            else {
                if (! (window.navigator.userAgent.toLowerCase().indexOf("chrome") >= 40)) throw t.browser = "none",
                "WebRTC stack not available";
                t = (0, r.
            default)(e),
                t.browser = "chrome-canary"
            } else g.
        default.error("Publish/subscribe video/audio streams not supported yet"),
            t = (0, l.
        default)(e);
            return t
        },
        S = function(e, t, n) {
            if (navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.screen) if (g.
        default.debug("Screen access requested"), null !== window.navigator.userAgent.match("Firefox")) {
                var o = {};
                void 0 != e.video.mandatory ? (o.video = e.video, o.video.mediaSource = "window") : o = {
                    video: {
                        mediaSource: "window"
                    }
                },
                navigator.getMedia(o, t, n)
            } else if (null !== window.navigator.userAgent.match("Chrome")) {
                if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void n({
                    code: "This browser does not support screen sharing"
                });
                var i = "okeephmleflklcdebijnponpabbmmgeo";
                e.extensionId && (g.
            default.debug("extensionId supplied, using " + e.extensionId), i = e.extensionId),
                g.
            default.debug("Screen access on chrome stable, looking for extension");
                try {
                    chrome.runtime.sendMessage(i, {
                        getStream: !0
                    },
                    function(i) {
                        if (void 0 === i) {
                            g.
                        default.debug("Access to screen denied");
                            return void n({
                                code:
                                "Access to screen denied"
                            })
                        }
                        var r = i.streamId,
                        a = e.attributes.width,
                        s = e.attributes.height,
                        d = e.attributes.maxFr,
                        c = e.attributes.minFr;
                        o = {
                            video: {
                                mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: r,
                                    maxHeight: s,
                                    maxWidth: a,
                                    maxFrameRate: d,
                                    minFrameRate: c
                                }
                            }
                        },
                        navigator.getMedia(o, t, n)
                    })
                } catch(e) {
                    g.
                default.debug("AgoraRTC screensharing plugin is not accessible");
                    var r = {
                        code: "no_plugin_present"
                    };
                    return void n(r)
                }
            } else g.
        default.debug("This browser does not support screenSharing");
            else window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? navigator.mediaDevices.getUserMedia(e).then(t).
            catch(n) : "undefined" != typeof navigator && navigator.getMedia ? navigator.getMedia(e, t, n) : g.
        default.error("Video/audio streams not supported yet")
        };
        t.Connection = h,
        t.GetUserMedia = S
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function(e) {
            e && e.apply(this, [].slice.call(arguments, 1))
        };
        t.
    default = o
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getGatewayList = void 0;
        var i = n(7),
        r = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (i),
        a = n(0),
        s = o(a),
        d = n(5),
        c = (o(d), n(13)),
        u = n(30),
        l = n(31),
        f = function(e, t, n, o) { (0, c.post)(e, {
                key: t
            },
            function(i) {
                var a = JSON.parse(i),
                s = a.error;
                void 0 != s ? ((0, u.initFailCbWrapper)(lts, t, r.VERSION, vocsip), o("Get server node failed [" + s + "]", e)) : n(a.gateway_addr)
            },
            function(e, t) {
                "timeout" === e.type ? o("Connect choose server timeout", t) : o("Connect choose server error", t)
            })
        },
        p = function(e, t, n) {
            var o = (new Date).getTime(),
            i = e.appId,
            a = (0, c.shouldUseHttps)() ? "https://" + r.WEBCS_DOMAIN + ":5668/getwebgw/jsonp": "http://" + r.WEBCS_DOMAIN + ":5669/getwebgw/jsonp";
            s.
        default.debug("Connect to choose_server:", a),
            f(a, i,
            function(e) {
                t(e),
                (0, u.initSuccessCbWrapper)(o, i, r.VERSION, null),
                s.
            default.debug("Get gateway address:", e)
            },
            function(e, d) {
                s.
            default.error(e, d);
                var p = r.WEBCS_DOMAIN_BACKUP_LIST;
                s.
            default.debug("Try choose_server backup list:", p);
                for (var m = !1,
                g = 0; g < p.length; ++g) a = (0, c.shouldUseHttps)() ? "https://" + p[g] + ":5668/getwebgw/jsonp": "http://" + p[g] + ":5669/getwebgw/jsonp",
                f(a, i,
                function(e) {
                    m || (m = !0, t(e), (0, u.initSuccessCbWrapper)(o, i, r.VERSION, null), s.
                default.debug("Get gateway address:", e))
                },
                function(e, t) {
                    s.
                default.error(e, t)
                }); (0, l.setTimeout)(function() {
                    m || n()
                },
                r.WEBCS_BACKUP_CONNECT_TIMEOUT)
            })
        },
        m = function(e, t, n) {
            var o = !1,
            i = null,
            r = 1; !
            function n() {
                o || p(e,
                function(e) {
                    o = !0,
                    clearTimeout(i),
                    t(e)
                },
                function() {
                    s.
                default.debug("Request gateway list will be restart in " + r + "s"),
                    i = (0, l.setTimeout)(function() {
                        n()
                    },
                    1e3 * r),
                    r = r >= 3600 ? 3600 : 2 * r
                })
            } ()
        };
        t.getGatewayList = m
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.shouldUseHttps = t.post = void 0;
        var o = n(7),
        i = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (o),
        r = function(e, t, n, o) {
            var r = new XMLHttpRequest;
            r.timeout = t.timeout || i.HTTP_CONNECT_TIMEOUT,
            r.open("POST", e, !0),
            r.setRequestHeader("Content-type", "application/json; charset=utf-8"),
            r.onload = function(e) {
                n(r.responseText)
            },
            r.onerror = function(t) {
                o(t, e)
            },
            r.ontimeout = function(t) {
                o(t, e)
            },
            r.send(JSON.stringify(t))
        },
        a = function() {
            return "https:" == document.location.protocol
        };
        t.post = r,
        t.shouldUseHttps = a
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        r = n(8),
        a = n(28),
        s = o(a),
        d = n(10),
        c = n(1),
        u = n(4),
        l = n(0),
        f = o(l),
        p = n(5),
        m = o(p),
        g = n(11),
        v = o(g),
        h = n(15),
        S = (o(h), n(12)),
        b = function(e) {
            function t() {
                for (var e in C.remoteStreams) if (C.remoteStreams.hasOwnProperty(e)) {
                    var t = C.remoteStreams[e];
                    t.stop(),
                    t.close(),
                    delete C.remoteStreams[e],
                    void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                }
            }
            var n = function() {
                return {
                    _type: "ping"
                }
            },
            o = function() {
                return {
                    _type: "join",
                    message: {
                        key: C.key,
                        channel: C.channel,
                        uid: C.uid,
                        version: e.version,
                        browser: navigator.userAgent,
                        mode: e.mode,
                        role: e.role,
                        config: C.config
                    }
                }
            },
            a = function() {
                return {
                    _type: "leave"
                }
            },
            l = function(e) {
                return {
                    _type: "control",
                    message: e
                }
            },
            p = function(e) {
                return {
                    _type: "token",
                    message: e
                }
            },
            g = function() {
                return {
                    _type: "p2p_lost",
                    message: null
                }
            },
            h = function(e) {
                return {
                    _type: "unpublish",
                    message: e
                }
            },
            b = function(e) {
                return {
                    _type: "unsubscribe",
                    message: e
                }
            },
            _ = function(e, t) {
                return {
                    _type: "switchVideoStream",
                    message: {
                        id: e,
                        type: t
                    }
                }
            },
            E = function(e, t) {
                return {
                    _type: "publish",
                    options: e,
                    sdp: t
                }
            },
            y = function(e) {
                return {
                    _type: "publish_stats",
                    options: {
                        stats: e
                    },
                    sdp: null
                }
            },
            R = function(e, t) {
                return {
                    _type: "subscribe",
                    options: e,
                    sdp: t
                }
            },
            I = function(e, t) {
                return {
                    _type: "subscribe_stats",
                    options: {
                        id: e,
                        stats: t
                    },
                    sdp: null
                }
            },
            C = (0, c.EventDispatcher)(e);
            C.socket = void 0,
            C.state = 0,
            C.mode = e.mode,
            C.role = e.role,
            C.codec = e.codec,
            C.config = {},
            C.timers = {},
            C.timer_counter = {},
            C.localStreams = {},
            C.remoteStreams = {},
            C.attemps = 1,
            C.p2p_attemps = 1,
            C.audioLevel = {},
            C.activeSpeaker = void 0;
            var A = v.
        default;
            C.remoteVideoStreamTypes = {
                REMOTE_VIDEO_STREAM_HIGH: 0,
                REMOTE_VIDEO_STREAM_LOW: 1,
                REMOTE_VIDEO_STREAM_MEDIUM: 2
            };
            var w = function(e, t, n, o, i) {
                A(i, t);
                var r = {
                    n: u.EVENTS.JOIN,
                    lts: e,
                    elps: (new Date).getTime() - e,
                    succ: !0,
                    addl_s2: n,
                    addl_i1: t
                };
                o && (r.addl_s1 = JSON.stringify(o)),
                (0, u.onEvent)(r)
            },
            T = function(e, t, n, o, i, r) {
                A(i, r);
                var a = {
                    n: u.EVENTS.JOIN,
                    lts: e,
                    elps: (new Date).getTime() - e,
                    succ: !1,
                    ec: r,
                    addl_s2: n,
                    addl_i1: t
                };
                o && (a.addl_s1 = JSON.stringify(o)),
                (0, u.onEvent)(a)
            };
            C.configPublisher = function(e) {
                C.config = e
            },
            C.join = function(e, t, i, r, a, s) {
                var d = (new Date).getTime();
                return 0 !== C.state ? (T(d, r, i, e.host, s, m.
            default.INVALID_OPERATION), void f.
            default.error("Server already in connecting/connected state")):
                null !== r && void 0 !== r && parseInt(r) !== r ? (T(d, r, i, e.host, s, m.
            default.INVALID_PARAMETER), void f.
            default.error("Input uid is invalid")):
                (C.token = e, C.uid = r, C.channel = i, C.key = t, C.state = 1, void k(e,
                function(t) {
                    C.stunServerUrl = t.stunServerUrl,
                    C.turnServer = t.turnServer,
                    C.state = 2,
                    f.
                default.debug("Connected to gateway server"),
                    C.pingTimer = setInterval(function() {
                        M(n(),
                        function() {},
                        function(e) {})
                    },
                    3e3),
                    M(o(),
                    function(t) {
                        C.uid = t,
                        f.
                    default.info("Join channal " + i + " success"),
                        w(d, t, i, e.host, a)
                    },
                    function(t) {
                        f.
                    default.error("User join failed [" + t + "]"),
                        t === m.
                    default.ERR_INVALID_VENDOR_KEY ? t = m.
                    default.INVALID_KEY:
                        t === m.
                    default.ERR_INVALID_DYNAMIC_KEY ? t = m.
                    default.INVALID_DYNAMIC_KEY:
                        t === m.
                    default.ERR_DYNAMIC_KEY_TIMEOUT ? t = m.
                    default.DYNAMIC_KEY_TIMEOUT:
                        t === m.
                    default.ERR_NO_VOCS_AVAILABLE ? t = m.
                    default.NO_VOCS_AVAILABLE:
                        t === m.
                    default.ERR_NO_VOS_AVAILABLE ? t = m.
                    default.NO_VOS_AVAILABLE:
                        t === m.
                    default.ERR_JOIN_CHANNEL_TIMEOUT ? t = m.
                    default.JOIN_CHANNEL_TIMEOUT:
                        t === m.
                    default.ERR_FAILED ? t = m.
                    default.FAILED:
                        t === m.
                    default.WARN_NO_AVAILABLE_CHANNEL ? t = m.
                    default.NO_AVAILABLE_CHANNEL:
                        t === m.
                    default.WARN_LOOKUP_CHANNEL_TIMEOUT ? t = m.
                    default.LOOKUP_CHANNEL_TIMEOUT:
                        t === m.
                    default.WARN_LOOKUP_CHANNEL_REJECTED ? t = m.
                    default.LOOKUP_CHANNEL_REJECTED:
                        t === m.
                    default.WARN_OPEN_CHANNEL_TIMEOUT ? t = m.
                    default.OPEN_CHANNEL_TIMEOUT:
                        t === m.
                    default.WARN_OPEN_CHANNEL_REJECTED ? t = m.
                    default.OPEN_CHANNEL_REJECTED:
                        t === m.
                    default.WARN_REQUEST_DEFERRED && (t = m.
                    default.REQUEST_DEFERRED),
                        T(d, r, i, e.host, s, t)
                    })
                },
                function(t) {
                    T(d, r, i, e.host, s, t),
                    f.
                default.error("User join failed [" + t + "]")
                }))
            },
            C.leave = function(e, n) {
                if (2 != C.state) return void A(e);
                clearInterval(C.pingTimer),
                M(a(),
                function(t) {
                    C.socket.disconnect(),
                    C.socket = void 0,
                    f.
                default.info("Leave channal success"),
                    e(t)
                },
                n);
                for (var o in C.localStreams) if (C.localStreams.hasOwnProperty(o)) {
                    var i = C.localStreams[o];
                    delete C.localStreams[o],
                    void 0 !== i.pc && (i.pc.close(), i.pc = void 0)
                }
                t(),
                C.state = 0
            },
            C.publishFailCbWapper = function(e, t, n) {
                A(t, n),
                (0, u.onEvent)({
                    n: u.EVENTS.PUBLISH,
                    lts: e,
                    elps: (new Date).getTime() - e,
                    succ: !1,
                    ec: n
                })
            },
            C.publish = function(e, t) {
                var n = (new Date).getTime();
                if ("object" !== (void 0 === e ? "undefined": i(e)) || null === e) return C.publishFailCbWapper(n, t, m.
            default.INVALID_LOCAL_STREAM),
                void f.
            default.error("Invalid local stream");
                if (null === e.stream && void 0 === e.url) return C.publishFailCbWapper(n, t, m.
            default.INVALID_LOCAL_STREAM),
                void f.
            default.error("Invalid local media stream");
                if (2 !== C.state) return C.publishFailCbWapper(n, t, m.
            default.INVALID_OPERATION),
                void f.
            default.error("User is not in the session");
                var o = e.getAttributes() || {};
                e.local && void 0 === C.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen()) && (void 0 !== e.url ? V(E({
                    state: "url",
                    audio: e.hasAudio(),
                    video: e.hasVideo(),
                    attributes: e.getAttributes(),
                    mode: C.mode
                },
                e.url),
                function(o, i) {
                    "success" === o ? (e.getId = function() {
                        return i
                    },
                    C.localStreams[i] = e, e.onClose = function() {
                        C.unpublish(e)
                    },
                    (0, u.onEvent)({
                        n: u.EVENTS.PUBLISH,
                        lts: n,
                        elps: (new Date).getTime() - n,
                        succ: !0
                    })) : (C.publishFailCbWapper(n, t, m.
                default.PUBLISH_STREAM_FAILED), f.
                default.error("Publish local stream failed", o))
                }) : (C.localStreams[e.getId()] = e, e.pc = (0, d.Connection)({
                    callback: function(o) {
                        f.
                    default.debug("SDP exchange in publish : send offer --  ", JSON.parse(o)),
                        V(E({
                            state: "offer",
                            id: e.getId(),
                            audio: e.hasAudio(),
                            video: e.hasVideo() || e.hasScreen(),
                            attributes: e.getAttributes(),
                            mode: C.mode,
                            codec: C.codec
                        },
                        o),
                        function(o, i) {
                            if ("error" === o) return C.publishFailCbWapper(n, t, m.
                        default.PUBLISH_STREAM_FAILED),
                            void f.
                        default.error("Publish local stream failed");
                            e.pc.onsignalingmessage = function(t) {
                                e.pc.onsignalingmessage = function() {},
                                V(E({
                                    state: "ok",
                                    id: e.getId(),
                                    audio: e.hasAudio(),
                                    video: e.hasVideo(),
                                    screen: e.hasScreen(),
                                    attributes: e.getAttributes(),
                                    mode: C.mode
                                },
                                t)),
                                e.getId = function() {
                                    return i.id
                                },
                                f.
                            default.info("Local stream published with uid", i.id),
                                e.onClose = function() {
                                    C.unpublish(e)
                                },
                                e.unmuteAudio = function() {
                                    M(l({
                                        action: "audio-out-on",
                                        streamId: e.getId()
                                    }),
                                    function() {},
                                    function() {})
                                },
                                e.unmuteVideo = function() {
                                    M(l({
                                        action: "video-out-on",
                                        streamId: e.getId()
                                    }),
                                    function() {},
                                    function() {})
                                },
                                e.muteAudio = function() {
                                    M(l({
                                        action: "audio-out-off",
                                        streamId: e.getId()
                                    }),
                                    function() {},
                                    function() {})
                                },
                                e.muteVideo = function() {
                                    M(l({
                                        action: "video-out-off",
                                        streamId: e.getId()
                                    }),
                                    function() {},
                                    function() {})
                                }
                            },
                            e.pc.oniceconnectionstatechange = function(o) {
                                "failed" === o ? (void 0 != C.timers[e.getId()] && clearInterval(C.timers[e.getId()]), M(g(),
                                function() {},
                                function() {}), C.publishFailCbWapper(n, t, m.
                            default.PEERCONNECTION_FAILED), f.
                            default.error("Publisher connection is lost")):
                                "connected" === o && (f.
                            default.info("Publish success"), (0, u.onEvent)({
                                    n: u.EVENTS.PUBLISH,
                                    lts: n,
                                    elps: (new Date).getTime() - n,
                                    succ: !0
                                }))
                            },
                            f.
                        default.debug("SDP exchange in publish : receive answer --  ", JSON.parse(o)),
                            e.pc.processSignalingMessage(o)
                        })
                    },
                    audio: e.hasAudio(),
                    video: e.hasVideo(),
                    screen: e.hasScreen(),
                    isSubscriber: !1,
                    iceServers: [],
                    stunServerUrl: C.stunServerUrl,
                    turnServer: C.turnServer,
                    maxAudioBW: o.maxAudioBW,
                    minVideoBW: o.minVideoBW,
                    maxVideoBW: o.maxVideoBW,
                    mode: C.mode,
                    codec: C.codec
                }), e.pc.addStream(e.stream), f.
            default.debug("PeerConnection add stream :", e.stream), C.timers[e.getId()] = setInterval(function() {
                    e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(e) {
                        e.forEach(function(e) {
                            M(y(e), null, null)
                        })
                    })
                },
                3e3), void 0 !== e.aux_stream && (e.pc.addStream(e.aux_stream), f.
            default.debug("PeerConnection add stream :", e.aux_stream))))
            },
            C.unpublish = function(e, t) {
                return "object" !== (void 0 === e ? "undefined": i(e)) || null === e ? (A(t, m.
            default.INVALID_LOCAL_STREAM), void f.
            default.error("Invalid local stream")):
                2 !== C.state ? (A(t, m.
            default.INVALID_OPERATION), void f.
            default.error("User not in the session")):
                (void 0 != C.timers[e.getId()] && clearInterval(C.timers[e.getId()]), void(void 0 !== C.socket ? e.local && void 0 !== C.localStreams[e.getId()] ? (delete C.localStreams[e.getId()], M(h(e.getId()),
                function(n) {
                    if ("error" === n) return A(t, m.
                default.UNPUBLISH_STREAM_FAILED),
                    void f.
                default.error("Unpublish stream failed");
                    f.
                default.info("Unpublish stream success"),
                    (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0),
                    e.onClose = void 0,
                    e.unmuteAudio = void 0,
                    e.muteAudio = void 0,
                    e.unmuteVideo = void 0,
                    e.muteVideo = void 0
                },
                t)) : (A(t, m.
            default.INVALID_LOCAL_STREAM), f.
            default.error("Invalid local stream")):
                (A(t, m.
            default.INVALID_OPERATION), f.
            default.error("User not in the session"))))
            },
            C.subscribeFailCbWapper = function(e, t, n) { (0, u.onEvent)({
                    n: u.EVENTS.SUBSCRIBE,
                    lts: e,
                    elps: (new Date).getTime() - e,
                    succ: !1,
                    ec: n
                }),
                A(t, n)
            },
            C.subscribe = function(e, t) {
                var n = (new Date).getTime();
                return "object" !== (void 0 === e ? "undefined": i(e)) || null === e ? (C.subscribeFailCbWapper(n, t, m.
            default.INVALID_REMOTE_STREAM), void f.
            default.error("Invalid remote stream")):
                2 !== C.state ? (C.subscribeFailCbWapper(n, t, m.
            default.INVALID_OPERATION), void f.
            default.error("User is not in the session")):
                void(!e.local && C.remoteStreams.hasOwnProperty(e.getId()) && (e.hasAudio() || e.hasVideo() || e.hasScreen()) ? (e.pc = (0, d.Connection)({
                    callback: function(o) {
                        f.
                    default.debug("SDP exchange in subscribe : send offer --  ", JSON.parse(o)),
                        V(R({
                            streamId: e.getId(),
                            audio: !0,
                            video: !0,
                            mode: C.mode,
                            codec: C.codec
                        },
                        o),
                        function(o) {
                            if ("error" === o) return C.subscribeFailCbWapper(n, t, m.
                        default.SUBSCRIBE_STREAM_FAILED),
                            f.
                        default.error("Subscribe remote stream failed, closing stream ", e.getId()),
                            void e.close();
                            f.
                        default.debug("SDP exchange in subscribe : receive answer --  ", JSON.parse(o)),
                            e.pc.processSignalingMessage(o)
                        })
                    },
                    nop2p: !0,
                    audio: !0,
                    video: !0,
                    screen: e.hasScreen(),
                    isSubscriber: !0,
                    iceServers: [],
                    stunServerUrl: C.stunServerUrl,
                    turnServer: C.turnServer
                }), e.pc.onaddstream = function(t, n) {
                    if ("ontrack" === n && "video" === t.track.kind || "onaddstream" === n) {
                        f.
                    default.info("Remote stream subscribed with uid ", e.getId()),
                        C.remoteStreams[e.getId()].stream = "onaddstream" === n ? t.stream: t.streams[0],
                        C.remoteStreams[e.getId()].hasVideo() || C.remoteStreams[e.getId()].disableVideo();
                        var o = (0, c.StreamEvent)({
                            type: "stream-subscribed",
                            stream: C.remoteStreams[e.getId()]
                        });
                        C.dispatchEvent(o)
                    }
                    e.unmuteAudio = function() {
                        M(l({
                            action: "audio-in-on",
                            streamId: e.getId()
                        }),
                        function() {},
                        function() {})
                    },
                    e.muteAudio = function() {
                        M(l({
                            action: "audio-in-off",
                            streamId: e.getId()
                        }),
                        function() {},
                        function() {})
                    },
                    e.unmuteVideo = function() {
                        M(l({
                            action: "video-in-on",
                            streamId: e.getId()
                        }),
                        function() {},
                        function() {})
                    },
                    e.muteVideo = function() {
                        M(l({
                            action: "video-in-off",
                            streamId: e.getId()
                        }),
                        function() {},
                        function() {})
                    }
                },
                C.timers[e.getId()] = setInterval(function() {
                    e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(t) {
                        t.forEach(function(t) {
                            V(I(e.getId(), t), null, null)
                        })
                    })
                },
                3e3), C.audioLevel[e.getId()] = 0, C.timers[e.getId() + "audio"] = setInterval(function() {
                    e && e.pc && e.pc.getStats && e.pc.getStats(function(t) {
                        t.forEach(function(t) {
                            if ("audio" === t.mediaType) {
                                if (t.audioOutputLevel > 5e3) {
                                    C.audioLevel[e.getId()] < 20 && (C.audioLevel[e.getId()] += 1);
                                    for (var n in C.audioLevel) parseInt(n) !== e.getId() && C.audioLevel[n] > 0 && (C.audioLevel[n] -= 1)
                                }
                                var o = Object.keys(C.audioLevel),
                                i = o.sort(function(e, t) {
                                    return C.audioLevel[t] - C.audioLevel[e]
                                });
                                if (C.activeSpeaker !== i[0]) {
                                    var r = (0, c.ClientEvent)({
                                        type: "active-speaker",
                                        uid: i[0]
                                    });
                                    C.dispatchEvent(r),
                                    C.activeSpeaker = i[0],
                                    f.
                                default.debug("Update active speaker:" + C.activeSpeaker)
                                }
                            }
                        })
                    })
                },
                50), e.pc.oniceconnectionstatechange = function(o) {
                    "failed" === o ? (void 0 != C.timers[e.getId()] && (clearInterval(C.timers[e.getId()]), clearInterval(C.timers[e.getId()] + "audio")), M(g(),
                    function() {},
                    function() {}), C.subscribeFailCbWapper(n, t, m.
                default.PEERCONNECTION_FAILED), f.
                default.error("Subscriber connection is lost", e.getId())) : "connected" === o && (0, u.onEvent)({
                        n: u.EVENTS.SUBSCRIBE,
                        lts: n,
                        elps: (new Date).getTime() - n,
                        succ: !0
                    })
                }) : (C.subscribeFailCbWapper(n, t, m.
            default.INVALID_REMOTE_STREAM), f.
            default.error("Invalid remote stream")))
            },
            C.unsubscribe = function(e, t) {
                return "object" !== (void 0 === e ? "undefined": i(e)) || null === e ? (A(t, m.
            default.INVALID_REMOTE_STREAM), void f.
            default.error("Invalid remote stream")):
                2 !== C.state ? (A(t, m.
            default.INVALID_OPERATION), void f.
            default.error("User is not in the session")):
                (void 0 != C.timers[e.getId()] && clearInterval(C.timers[e.getId()]), void 0 != C.audioLevel[e.getId()] && delete C.audioLevel[e.getId()], void 0 != C.timer_counter[e.getId()] && delete C.timer_counter[e.getId()], C.remoteStreams.hasOwnProperty(e.getId()) ? C.socket ? e.local ? (A(t, m.
            default.INVALID_REMOTE_STREAM), void f.
            default.error("Invalid remote stream")):
                (e.close(), delete C.remoteStreams[e.getId()], void M(b(e.getId()),
                function(n) {
                    if ("error" === n) return A(t, m.
                default.UNSUBSCRIBE_STREAM_FAILED),
                    void f.
                default.error("Unsubscribe remote stream failed", e.getId());
                    f.
                default.info("Unsubscrib stream success")
                },
                t)) : (A(t, m.
            default.INVALID_OPERATION), void f.
            default.error("User is not in the session")):
                void A(t, m.
            default.NO_SUCH_REMOTE_STREAM))
            },
            C.setRemoteVideoStreamType = function(e, t) {
                if (f.
            default.debug("Switching remote video stream " + e.getId() + " to " + t), "object" !== (void 0 === e ? "undefined": i(e)) || null === e) return void f.
            default.error("Invalid remote stream");
                if (2 !== C.state) return void f.
            default.error("User is not in the session");
                if (!e.local) {
                    switch (t) {
                    case C.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                    case C.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                    case C.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                        break;
                    default:
                        return
                    }
                    M(_(e.getId(), t), null, null)
                }
            };
            var N = function(e) {
                return 1e3 * Math.min(30, Math.pow(2, e) - 1)
            },
            O = function() {
                C.key ? (f.
            default.info("Re-joining to channel " + C.channel), C.join(C.token, C.key, C.channel, C.uid,
                function(e) {
                    if (f.
                default.info("User " + e + " is re-joined to " + C.channel), void 0 !== C.localStreams[e]) {
                        var t = C.localStreams[e];
                        delete C.localStreams[e],
                        void 0 !== t.pc && (t.pc.close(), t.pc = void 0),
                        f.
                    default.info("Publish the old local stream again"),
                        C.publish(t,
                        function(e) {
                            f.
                        default.error("Publish the old stream failed")
                        })
                    }
                },
                function(e) {
                    if (f.
                default.error("Re-join to channel failed [" + e + "]"), e === m.
                default.ERR_INVALID_VENDOR_KEY) {
                        var t = (0, c.StreamEvent)({
                            type: "error",
                            reason: m.
                        default.INVALID_KEY
                        });
                        C.dispatchEvent(t)
                    } else if (e === m.
                default.ERR_INVALID_DYNAMIC_KEY) {
                        var t = (0, c.StreamEvent)({
                            type: "error",
                            reason: m.
                        default.INVALID_DYNAMIC_KEY
                        });
                        C.dispatchEvent(t)
                    } else if (e === m.
                default.ERR_DYNAMIC_KEY_TIMEOUT) {
                        var t = (0, c.StreamEvent)({
                            type: "error",
                            reason: m.
                        default.DYNAMIC_KEY_TIMEOUT
                        });
                        C.dispatchEvent(t);
                        var n = N(C.attemps);
                        f.
                    default.error("Connect to server failed [Channel key timeout], attempt to recover [#" + C.attemps + "] after " + n / 1e3 + " seconds");
                        setTimeout(function() {
                            C.attemps++,
                            void 0 !== C.socket && C.socket.disconnect()
                        },
                        n)
                    }
                })) : f.
            default.error("Connection recover failed [Invalid channel key]")
            },
            D = function(e) {
                C.socket = (0, s.
            default)(e, {})
            },
            k = function(n, o, i) {
                var a = n.host;
                void 0 !== C.socket ? C.socket.socket.connect() : (D(a), C.socket.on("connect",
                function() {
                    C.attemps = 1,
                    M(p(n), o, i)
                }), C.socket.on("reconnect",
                function() {
                    f.
                default.debug("Try to reconnect choose server and get gateway list again "),
                    (0, S.getGatewayList)({
                        appId: e.appId
                    },
                    function(e) {
                        C.socket.reconnect(e)
                    })
                }), C.socket.on("connect_error",
                function(e) {
                    for (var n in C.timers) C.timers.hasOwnProperty(n) && clearInterval(C.timers[n]);
                    for (var n in C.remoteStreams) if (C.remoteStreams.hasOwnProperty(n)) {
                        var o = C.remoteStreams[n],
                        i = (0, c.ClientEvent)({
                            type: "stream-removed",
                            uid: o.getId(),
                            stream: o
                        });
                        C.dispatchEvent(i)
                    }
                    t(),
                    clearInterval(C.pingTimer),
                    C.state = 0,
                    C.socket = void 0;
                    var i = (0, c.StreamEvent)({
                        type: "error",
                        reason: m.
                    default.SOCKET_ERROR
                    });
                    C.dispatchEvent(i);
                    var r = N(C.attemps);
                    f.
                default.error("Connect to server error [" + JSON.stringify(e) + "], attempt to recover [#" + C.attemps + "] after " + r / 1e3 + " seconds");
                    setTimeout(function() {
                        C.attemps++,
                        O()
                    },
                    r)
                }), C.socket.on("disconnect",
                function(e) {
                    if (0 !== C.state) {
                        for (var n in C.timers) C.timers.hasOwnProperty(n) && clearInterval(C.timers[n]);
                        for (var n in C.remoteStreams) if (C.remoteStreams.hasOwnProperty(n)) {
                            var o = C.remoteStreams[n],
                            i = (0, c.ClientEvent)({
                                type: "stream-removed",
                                uid: o.getId(),
                                stream: o
                            });
                            C.dispatchEvent(i)
                        }
                        t(),
                        clearInterval(C.pingTimer),
                        C.state = 0,
                        C.socket = void 0;
                        var i = (0, c.StreamEvent)({
                            type: "error",
                            reason: m.
                        default.SOCKET_DISCONNECTED
                        });
                        C.dispatchEvent(i);
                        var r = N(C.attemps);
                        f.
                    default.error("Disconnect from server [" + e + "], attempt to recover [#" + C.attemps + "] after " + r / 1e3 + " seconds");
                        setTimeout(function() {
                            C.attemps++,
                            O()
                        },
                        r)
                    }
                }), C.socket.on("onAddAudioStream",
                function(e) {
                    if (void 0 === C.remoteStreams[e.id]) {
                        var t = (0, r.Stream)({
                            streamID: e.id,
                            local: !1,
                            audio: e.audio,
                            video: e.video,
                            screen: e.screen,
                            attributes: e.attributes
                        });
                        C.remoteStreams[e.id] = t;
                        var n = (0, c.StreamEvent)({
                            type: "stream-added",
                            stream: t
                        });
                        C.dispatchEvent(n)
                    }
                }), C.socket.on("onAddVideoStream",
                function(e) {
                    if (f.
                default.info("Newly added remote stream with uid", e.id), void 0 === C.remoteStreams[e.id]) {
                        var t = (0, r.Stream)({
                            streamID: e.id,
                            local: !1,
                            audio: e.audio,
                            video: e.video,
                            screen: e.screen,
                            attributes: e.attributes
                        });
                        C.remoteStreams[e.id] = t;
                        var n = (0, c.StreamEvent)({
                            type: "stream-added",
                            stream: t
                        });
                        C.dispatchEvent(n)
                    } else if (void 0 !== C.remoteStreams[e.id].stream) {
                        C.remoteStreams[e.id].video = !0,
                        C.remoteStreams[e.id].enableVideo(),
                        f.
                    default.info("Stream changed: enable video " + e.id);
                        var o = C.remoteStreams[e.id],
                        i = o.player.elementID;
                        o.stop(),
                        o.play(i)
                    } else {
                        var t = (0, r.Stream)({
                            streamID: e.id,
                            local: !1,
                            audio: !0,
                            video: !0,
                            screen: !1,
                            attributes: e.attributes
                        });
                        C.remoteStreams[e.id] = t,
                        f.
                    default.info("Stream changed: modify video " + e.id)
                    }
                }), C.socket.on("onRemoveStream",
                function(e) {
                    var t = C.remoteStreams[e.id];
                    if (!t) return void console.log("ERROR stream ", e.id, " not found onRemoveStream ", e);
                    delete C.remoteStreams[e.id];
                    var n = (0, c.StreamEvent)({
                        type: "stream-removed",
                        stream: t
                    });
                    C.dispatchEvent(n),
                    t.close(),
                    void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                }), C.socket.on("onPublishStream",
                function(e) {
                    var t = C.localStreams[e.id],
                    n = (0, c.StreamEvent)({
                        type: "stream-published",
                        stream: t
                    });
                    C.dispatchEvent(n)
                }), C.socket.on("onP2PLost",
                function(e) {
                    var t = N(C.p2p_attemps) + N(C.attemps);
                    f.
                default.error("p2p connection lost, attempt to recover [#" + C.p2p_attemps + "] after " + t / 1e3 + " seconds");
                    setTimeout(function() {
                        C.p2p_attemps++,
                        void 0 !== C.socket && C.socket.disconnect()
                    },
                    t)
                }), C.socket.on("onPeerLeave",
                function(e) {
                    var t = (0, c.ClientEvent)({
                        type: "peer-leave",
                        uid: e.id
                    });
                    if (C.remoteStreams.hasOwnProperty(e.id) && (t.stream = C.remoteStreams[e.id]), C.dispatchEvent(t), C.remoteStreams.hasOwnProperty(e.id)) {
                        f.
                    default.info("closing stream on peer leave", e.id);
                        var n = C.remoteStreams[e.id];
                        n.close(),
                        delete C.remoteStreams[e.id],
                        void 0 !== n.pc && (n.pc.close(), n.pc = void 0)
                    }
                    C.timers.hasOwnProperty(e.id) && (clearInterval(C.timers[e.id]), delete C.timers[e.id]),
                    void 0 != C.audioLevel[e.id] && delete C.audioLevel[e.id],
                    void 0 != C.timer_counter[e.id] && delete C.timer_counter[e.id]
                }))
            },
            M = function(e, t, n) {
                if (void 0 === C.socket) return A(n, m.
            default.INVALID_OPERATION),
                void f.
            default.error("No socket available");
                try {
                    C.socket.emitSimpleMessage(e,
                    function(e, o) {
                        "success" === e ? "function" == typeof t && t(o) : "function" == typeof n && n(o)
                    })
                } catch(t) {
                    A(n, m.
                default.SOCKET_ERROR),
                    f.
                default.error("Socket emit message failed" + JSON.stringify(e))
                }
            },
            V = function(e, t) {
                if (void 0 === C.socket) return void f.
            default.error("Error in sendSimpleSdp [socket not ready]");
                try {
                    C.socket.emitSimpleMessage(e,
                    function(e, n) {
                        void 0 !== t && t(e, n)
                    })
                } catch(e) {
                    f.
                default.error("Error in sendSimpleSdp [" + e + "]")
                }
            };
            return C
        };
        t.
    default = b
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = !1,
        i = function(e) {
            return "undefined" === e ? o: o = e
        };
        t.
    default = i
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createLiveClient = t.createRtcClient = t.createClient = void 0;
        var i = n(14),
        r = o(i),
        a = n(0),
        s = o(a),
        d = n(5),
        c = o(d),
        u = (n(13), n(6)),
        l = n(12),
        f = function(e) {
            var t = {};
            return t.key = void 0,
            t.version = "2.0.0",
            t.init = function(t, n, o) {
                s.
            default.info("Initializing AgoraRTC client"),
                e.appId = t,
                (0, l.getGatewayList)({
                    appId: t
                },
                function(t) {
                    e.host = t,
                    n()
                },
                o)
            },
            t.configPublisher = function(e) {
                t.gatewayClient.configPublisher(e)
            },
            t.join = function(n, o, i, r, a) {
                s.
            default.info("Joining channel: " + o);
                var d = e;
                t.uid = i,
                t.channel = o,
                t.key = n || e.appId,
                t.gatewayClient.join(d, t.key, o, i, r, a)
            },
            t.renewChannelKey = function(e, n, o) {
                void 0 === t.key && ((0, u.safeCall)(o, c.
            default.INVALID_OPERATION), s.
            default.error("renewChannelKey should not be called before user join")),
                t.key = e,
                (0, u.safeCall)(n)
            },
            t.leave = function(e, n) {
                s.
            default.info("Leaving channel"),
                t.gatewayClient.leave(e, n)
            },
            t.publish = function(e, n) {
                s.
            default.info("Publishing stream, uid: ", e.getId()),
                t.gatewayClient.publish(e, n)
            },
            t.unpublish = function(e, n) {
                s.
            default.info("Unpublish stream, uid: ", e.getId()),
                t.gatewayClient.unpublish(e, n)
            },
            t.subscribe = function(e, n) {
                s.
            default.info("Subscribe stream, uid: ", e.getId()),
                t.gatewayClient.subscribe(e, n)
            },
            t.unsubscribe = function(e, n) {
                s.
            default.info("Unsubscribe stream, uid: ", e.getId()),
                t.gatewayClient.unsubscribe(e, n)
            },
            t.setRemoteVideoStreamType = function(e, n) {
                t.gatewayClient.setRemoteVideoStreamType(e, n)
            },
            e.init = t.init,
            e.version = t.version,
            t.gatewayClient = (0, r.
        default)(e),
            t.on = t.gatewayClient.on,
            t
        },
        p = function(e) {
            return e && "interop" === e.mode ? (s.
        default.info("Creating client , MODE : Interop"), f({
                mode: "live"
            })) : e && "h264_interop" === e.mode ? (s.
        default.info("Creating client , MODE : h264_interop"), f({
                mode: "live",
                codec: "h264"
            })) : (s.
        default.info("Creating client , MODE : web-only"), f({
                mode: "rtc"
            }))
        },
        m = function() {
            return s.
        default.info("Creating client , MODE : rtc"),
            s.
        default.warning("createRtcClient is deprecated."),
            f({
                mode: "rtc"
            })
        },
        g = function(e) {
            var t = "host";
            return e && "audience" === e.role && (t = e.role),
            s.
        default.info("Creating client , MODE : live"),
            s.
        default.warning("createLiveClient is deprecated."),
            f({
                mode: "live",
                role: t
            })
        };
        t.createClient = p,
        t.createRtcClient = m,
        t.createLiveClient = g
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
        r = o(i),
        a = n(9),
        s = (o(a), n(19)),
        d = o(s),
        c = n(0),
        u = o(c),
        l = n(21),
        f = function(e) {
            var t = (0, r.
        default)({});
            return t.id = e.id,
            t.url = e.url,
            t.stream = e.stream.stream,
            t.elementID = e.elementID,
            t.destroy = function() {
                t.video.pause(),
                delete t.resizer,
                document.getElementById(t.div.id) && t.parentNode.removeChild(t.div)
            },
            t.resize = function() {
                var n = t.container.offsetWidth,
                o = t.container.offsetHeight;
                e.stream.screen ? .75 * n < o ? (t.video.style.width = n + "px", t.video.style.height = .75 * n + "px", t.video.style.top = -(.75 * n / 2 - o / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = o + "px", t.video.style.width = 4 / 3 * o + "px", t.video.style.left = -(4 / 3 * o / 2 - n / 2) + "px", t.video.style.top = "0px") : n === t.containerWidth && o === t.containerHeight || (.75 * n > o ? (t.video.style.width = n + "px", t.video.style.height = .75 * n + "px", t.video.style.top = -(.75 * n / 2 - o / 2) + "px", t.video.style.left = "0px") : (t.video.style.height = o + "px", t.video.style.width = 4 / 3 * o + "px", t.video.style.left = -(4 / 3 * o / 2 - n / 2) + "px", t.video.style.top = "0px")),
                t.containerWidth = n,
                t.containerHeight = o
            },
            t.div = document.createElement("div"),
            t.div.setAttribute("id", "player_" + t.id),
            e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"),
            t.video = document.createElement("video"),
            t.video.setAttribute("id", "video" + t.id),
            e.stream.local && !e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);") : e.stream.video ? (t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;"), window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && t.video.setAttribute("controls", "")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none;"),
            t.video.setAttribute("autoplay", ""),
            t.video.setAttribute("muted", ""),
            t.video.setAttribute("playsinline", ""),
            e.stream.local && (t.video.volume = 0, t.video.setAttribute("muted", "")),
            t.audio = document.createElement("audio"),
            t.audio.setAttribute("id", "audio" + t.id),
            t.audio.setAttribute("autoplay", ""),
            e.stream.local && (t.audio.volume = 0, t.audio.setAttribute("muted", "")),
            void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body),
            t.parentNode = t.div.parentNode,
            t.div.appendChild(t.video),
            t.div.appendChild(t.audio),
            t.video.addEventListener("playing",
            function(e) { !
                function e() {
                    if (t.video.videoWidth * t.video.videoHeight > 4) return void u.
                default.debug("video dimensions:", t.video.videoWidth, t.video.videoHeight);
                    setTimeout(e, 50)
                } ()
            }),
            t.containerWidth = 0,
            t.containerHeight = 0,
            t.resizer = new d.
        default(t.container, t.resize),
            t.resize(),
            (0, l.attachMediaStream)(document.getElementById("video" + t.id), e.stream.stream),
            (0, l.attachMediaStream)(document.getElementById("audio" + t.id), e.stream.stream),
            t
        };
        t.
    default = f
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2),
        i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (o),
        r = function(e) {
            var t, n, o, r = (0, i.
        default)({}),
            a = 50;
            return r.elementID = e.elementID,
            r.media = e.media,
            r.id = e.id,
            void 0 !== e.url && (r.url = e.url),
            r.stream = e.stream,
            r.div = document.createElement("div"),
            r.div.setAttribute("style", "width: 40%; height: 100%; max-width: 32px; position: absolute; right: 0;z-index:0;"),
            r.icon = document.createElement("img"),
            r.icon.setAttribute("id", "volume_" + r.id),
            r.icon.setAttribute("src", r.url + "/assets/sound48.png"),
            r.icon.setAttribute("style", "width: 80%; height: 100%; position: absolute;"),
            r.div.appendChild(r.icon),
            r.stream.local ? (n = function() {
                r.media.muted = !0,
                r.icon.setAttribute("src", r.url + "/assets/mute48.png")
            },
            o = function() {
                r.media.muted = !1,
                r.icon.setAttribute("src", r.url + "/assets/sound48.png")
            },
            r.icon.onclick = function() {
                r.media.muted ? o() : n()
            }) : (r.picker = document.createElement("input"), r.picker.setAttribute("id", "picker_" + r.id), r.picker.type = "range", r.picker.min = 0, r.picker.max = 100, r.picker.step = 10, r.picker.value = a, r.picker.setAttribute("orient", "vertical"), r.div.appendChild(r.picker), r.media.volume = r.picker.value / 100, r.media.muted = !1, r.picker.oninput = function() {
                r.picker.value > 0 ? (r.media.muted = !1, r.icon.setAttribute("src", r.url + "/assets/sound48.png")) : (r.media.muted = !0, r.icon.setAttribute("src", r.url + "/assets/mute48.png")),
                r.media.volume = r.picker.value / 100
            },
            t = function(e) {
                r.picker.setAttribute("style", "background: transparent; width: 32px; height: 100px; position: absolute; bottom: 90%; z-index: 1;" + r.div.offsetHeight + "px; right: 0px; -webkit-appearance: slider-vertical; display: " + e)
            },
            n = function() {
                r.icon.setAttribute("src", r.url + "/assets/mute48.png"),
                a = r.picker.value,
                r.picker.value = 0,
                r.media.volume = 0,
                r.media.muted = !0
            },
            o = function() {
                r.icon.setAttribute("src", r.url + "/assets/sound48.png"),
                r.picker.value = a,
                r.media.volume = r.picker.value / 100,
                r.media.muted = !1
            },
            r.icon.onclick = function() {
                r.media.muted ? o() : n()
            },
            r.div.onmouseover = function() {
                t("block")
            },
            r.div.onmouseout = function() {
                t("none")
            },
            t("none")),
            document.getElementById(r.elementID).appendChild(r.div),
            r
        };
        t.
    default = r
    },
    function(e, t, n) {
        var o, i; !
        function(r, a) {
            o = a,
            void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i)
        } (0,
        function() {
            function e(e, t) {
                var n = Object.prototype.toString.call(e),
                o = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "[object Object]" === n || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements,
                i = 0,
                r = e.length;
                if (o) for (; i < r; i++) t(e[i]);
                else t(e)
            }
            if ("undefined" == typeof window) return null;
            var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
            function(e) {
                return window.setTimeout(e, 20)
            },
            n = function(o, i) {
                function r() {
                    var e = [];
                    this.add = function(t) {
                        e.push(t)
                    };
                    var t, n;
                    this.call = function() {
                        for (t = 0, n = e.length; t < n; t++) e[t].call()
                    },
                    this.remove = function(o) {
                        var i = [];
                        for (t = 0, n = e.length; t < n; t++) e[t] !== o && i.push(e[t]);
                        e = i
                    },
                    this.length = function() {
                        return e.length
                    }
                }
                function a(e, t) {
                    return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
                }
                function s(e, n) {
                    if (e.resizedAttached) {
                        if (e.resizedAttached) return void e.resizedAttached.add(n)
                    } else e.resizedAttached = new r,
                    e.resizedAttached.add(n);
                    e.resizeSensor = document.createElement("div"),
                    e.resizeSensor.className = "resize-sensor";
                    var o = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                    i = "position: absolute; left: 0; top: 0; transition: 0s;";
                    e.resizeSensor.style.cssText = o,
                    e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + o + '"><div style="' + i + '"></div></div><div class="resize-sensor-shrink" style="' + o + '"><div style="' + i + ' width: 200%; height: 200%"></div></div>',
                    e.appendChild(e.resizeSensor),
                    "static" == a(e, "position") && (e.style.position = "relative");
                    var s, d, c, u, l = e.resizeSensor.childNodes[0],
                    f = l.childNodes[0],
                    p = e.resizeSensor.childNodes[1],
                    m = e.offsetWidth,
                    g = e.offsetHeight,
                    v = function() {
                        f.style.width = "100000px",
                        f.style.height = "100000px",
                        l.scrollLeft = 1e5,
                        l.scrollTop = 1e5,
                        p.scrollLeft = 1e5,
                        p.scrollTop = 1e5
                    };
                    v();
                    var h = function() {
                        d = 0,
                        s && (m = c, g = u, e.resizedAttached && e.resizedAttached.call())
                    },
                    S = function() {
                        c = e.offsetWidth,
                        u = e.offsetHeight,
                        s = c != m || u != g,
                        s && !d && (d = t(h)),
                        v()
                    },
                    b = function(e, t, n) {
                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
                    };
                    b(l, "scroll", S),
                    b(p, "scroll", S)
                }
                e(o,
                function(e) {
                    s(e, i)
                }),
                this.detach = function(e) {
                    n.detach(o, e)
                }
            };
            return n.detach = function(t, n) {
                e(t,
                function(e) {
                    e.resizedAttached && "function" == typeof n && (e.resizedAttached.remove(n), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
                })
            },
            n
        })
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            var e = new Date;
            return e.toTimeString().split(" ")[0] + ":" + e.getMilliseconds()
        };
        t.getTimestamp = o
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return new Promise(function(t, n) {
                r(e, t, n)
            })
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        r = null,
        a = null,
        s = null,
        d = null,
        c = null,
        u = null,
        l = {
            log: function() {},
            extractVersion: function(e, t, n) {
                var o = e.match(t);
                return o && o.length >= n && parseInt(o[n])
            }
        };
        if ("object" === ("undefined" == typeof window ? "undefined": i(window)) && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
            get: function() {
                return "mozSrcObject" in this ? this.mozSrcObject: this._srcObject
            },
            set: function(e) {
                "mozSrcObject" in this ? this.mozSrcObject = e: (this._srcObject = e, this.src = URL.createObjectURL(e))
            }
        }), r = window.navigator && window.navigator.getUserMedia), a = function(e, t) {
            e.srcObject = t
        },
        s = function(e, t) {
            e.srcObject = t.srcObject
        },
        "undefined" != typeof window && window.navigator) if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
            if (l.log("This appears to be Firefox"), d = "firefox", c = l.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), u = 31, window.RTCPeerConnection = function(e, t) {
                if (c < 38 && e && e.iceServers) {
                    for (var n = [], o = 0; o < e.iceServers.length; o++) {
                        var i = e.iceServers[o];
                        if (i.hasOwnProperty("urls")) for (var r = 0; r < i.urls.length; r++) {
                            var a = {
                                url: i.urls[r]
                            };
                            0 === i.urls[r].indexOf("turn") && (a.username = i.username, a.credential = i.credential),
                            n.push(a)
                        } else n.push(e.iceServers[o])
                    }
                    e.iceServers = n
                }
                return new mozRTCPeerConnection(e, t)
            },
            window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), r = function(e, t, n) {
                var o = function(e) {
                    if ("object" !== (void 0 === e ? "undefined": i(e)) || e.require) return e;
                    var t = [];
                    return Object.keys(e).forEach(function(n) {
                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                            var o = e[n] = "object" === i(e[n]) ? e[n] : {
                                ideal: e[n]
                            };
                            if (void 0 === o.min && void 0 === o.max && void 0 === o.exact || t.push(n), void 0 !== o.exact && ("number" == typeof o.exact ? o.min = o.max = o.exact: e[n] = o.exact, delete o.exact), void 0 !== o.ideal) {
                                e.advanced = e.advanced || [];
                                var r = {};
                                "number" == typeof o.ideal ? r[n] = {
                                    min: o.ideal,
                                    max: o.ideal
                                }: r[n] = o.ideal,
                                e.advanced.push(r),
                                delete o.ideal,
                                Object.keys(o).length || delete e[n]
                            }
                        }
                    }),
                    t.length && (e.require = t),
                    e
                };
                return c < 38 && (l.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = o(e.audio)), e.video && (e.video = o(e.video)), l.log("ff37: " + JSON.stringify(e))),
                navigator.mozGetUserMedia(e, t, n)
            },
            navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: o,
                addEventListener: function() {},
                removeEventListener: function() {}
            }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices ||
            function() {
                return new Promise(function(e) {
                    e([{
                        kind: "audioinput",
                        deviceId: "default",
                        label: "",
                        groupId: ""
                    },
                    {
                        kind: "videoinput",
                        deviceId: "default",
                        label: "",
                        groupId: ""
                    }])
                })
            },
            c < 41) {
                var f = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                navigator.mediaDevices.enumerateDevices = function() {
                    return f().then(void 0,
                    function(e) {
                        if ("NotFoundError" === e.name) return [];
                        throw e
                    })
                }
            }
        } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
            l.log("This appears to be Chrome"),
            d = "chrome",
            c = l.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2),
            u = 38,
            window.RTCPeerConnection = function(e, t) {
                e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                var n = new webkitRTCPeerConnection(e, t),
                o = n.getStats.bind(n);
                return n.getStats = function(e, t, n) {
                    var i = this,
                    r = arguments;
                    if (arguments.length > 0 && "function" == typeof e) return o(e, t);
                    var a = function(e) {
                        var t = {};
                        return e.result().forEach(function(e) {
                            var n = {
                                id: e.id,
                                timestamp: e.timestamp,
                                type: e.type
                            };
                            e.names().forEach(function(t) {
                                n[t] = e.stat(t)
                            }),
                            t[n.id] = n
                        }),
                        t
                    };
                    if (arguments.length >= 2) {
                        var s = function(e) {
                            r[1](a(e))
                        };
                        return o.apply(this, [s, arguments[0]])
                    }
                    return new Promise(function(t, n) {
                        1 === r.length && null === e ? o.apply(i, [function(e) {
                            t.apply(null, [a(e)])
                        },
                        n]) : o.apply(i, [t, n])
                    })
                },
                n
            },
            ["createOffer", "createAnswer"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" === i(arguments[0])) {
                        var n = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise(function(o, i) {
                            t.apply(e, [o, i, n])
                        })
                    }
                    return t.apply(this, arguments)
                }
            }),
            ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = arguments,
                    n = this;
                    return new Promise(function(o, i) {
                        t.apply(n, [e[0],
                        function() {
                            o(),
                            e.length >= 2 && e[1].apply(null, [])
                        },
                        function(t) {
                            i(t),
                            e.length >= 3 && e[2].apply(null, [t])
                        }])
                    })
                }
            });
            var p = function(e) {
                if ("object" !== (void 0 === e ? "undefined": i(e)) || e.mandatory || e.optional) return e;
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                        var o = "object" === i(e[n]) ? e[n] : {
                            ideal: e[n]
                        };
                        void 0 !== o.exact && "number" == typeof o.exact && (o.min = o.max = o.exact);
                        var r = function(e, t) {
                            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId": t
                        };
                        if (void 0 !== o.ideal) {
                            t.optional = t.optional || [];
                            var a = {};
                            "number" == typeof o.ideal ? (a[r("min", n)] = o.ideal, t.optional.push(a), a = {},
                            a[r("max", n)] = o.ideal, t.optional.push(a)) : (a[r("", n)] = o.ideal, t.optional.push(a))
                        }
                        void 0 !== o.exact && "number" != typeof o.exact ? (t.mandatory = t.mandatory || {},
                        t.mandatory[r("", n)] = o.exact) : ["min", "max"].forEach(function(e) {
                            void 0 !== o[e] && (t.mandatory = t.mandatory || {},
                            t.mandatory[r(e, n)] = o[e])
                        })
                    }
                }),
                e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
                t
            };
            if (r = function(e, t, n) {
                return e.audio && (e.audio = p(e.audio)),
                e.video && (e.video = p(e.video)),
                l.log("chrome: " + JSON.stringify(e)),
                navigator.webkitGetUserMedia(e, t, n)
            },
            navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: o,
                enumerateDevices: function() {
                    return new Promise(function(e) {
                        var t = {
                            audio: "audioinput",
                            video: "videoinput"
                        };
                        return MediaStreamTrack.getSources(function(n) {
                            e(n.map(function(e) {
                                return {
                                    label: e.label,
                                    kind: t[e.kind],
                                    deviceId: e.id,
                                    groupId: ""
                                }
                            }))
                        })
                    })
                }
            }), navigator.mediaDevices.getUserMedia) {
                var m = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function(e) {
                    return l.log("spec:   " + JSON.stringify(e)),
                    e.audio = p(e.audio),
                    e.video = p(e.video),
                    l.log("chrome: " + JSON.stringify(e)),
                    m(e)
                }
            } else navigator.mediaDevices.getUserMedia = function(e) {
                return o(e)
            };
            void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
                l.log("Dummy mediaDevices.addEventListener called.")
            }),
            void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
                l.log("Dummy mediaDevices.removeEventListener called.")
            }),
            a = function(e, t) {
                c >= 43 ? e.srcObject = t: void 0 !== e.src ? e.src = URL.createObjectURL(t) : l.log("Error attaching stream to element.")
            },
            s = function(e, t) {
                c >= 43 ? e.srcObject = t.srcObject: e.src = t.src
            }
        } else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (l.log("This appears to be Edge"), d = "edge", c = l.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), u = 12) : l.log("Browser does not appear to be WebRTC-capable");
        else l.log("This does not appear to be a browser"),
        d = "not a browser";
        var g = {};
        try {
            Object.defineProperty(g, "version", {
                set: function(e) {
                    c = e
                }
            })
        } catch(e) {}
        var v;
        "undefined" != typeof window && (v = window.RTCPeerConnection),
        e.exports = {
            RTCPeerConnection: v,
            getUserMedia: r,
            attachMediaStream: a,
            reattachMediaStream: s,
            webrtcDetectedBrowser: d,
            webrtcDetectedVersion: c,
            webrtcMinimumVersion: u,
            webrtcTesting: g,
            webrtcUtils: l
        }
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2),
        r = o(i),
        a = n(9),
        s = o(a),
        d = n(0),
        c = o(d),
        u = n(3),
        l = function(e) {
            var t, n, o = (0, r.
        default)({});
            if (o.id = e.id, o.url = e.url, o.stream = e.stream.stream, o.elementID = e.elementID, o.audio = document.createElement("audio"), o.audio.setAttribute("id", "stream" + o.id), o.audio.setAttribute("style", "width: 100%; height: 100%; position: absolute"), o.audio.setAttribute("autoplay", "autoplay"), e.stream.local && (o.audio.volume = 0), e.stream.local && (o.audio.volume = 0), void 0 !== o.elementID ? (o.destroy = function() {
                o.audio.pause(),
                o.parentNode.removeChild(o.div)
            },
            t = function() {
                o.bar.display()
            },
            n = function() {
                o.bar.hide()
            },
            o.div = document.createElement("div"), o.div.setAttribute("id", "player_" + o.id), o.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), document.getElementById(o.elementID).appendChild(o.div), o.container = document.getElementById(o.elementID), o.parentNode = o.div.parentNode, o.div.appendChild(o.audio), o.bar = new s.
        default({
                elementID:
                "player_" + o.id,
                id: o.id,
                stream: e.stream,
                media: o.audio,
                options: e.options,
                url: o.url
            }), e.stream.local ? o.div.onmouseover = n: o.div.onmouseover = t, o.div.onmouseout = n) : (o.destroy = function() {
                o.audio.pause(),
                o.parentNode.removeChild(o.audio)
            },
            document.body.appendChild(o.audio), o.parentNode = document.body), c.
        default.debug("Creating URL from stream " + o.stream), (0, u.isSafari)()) o.audio.srcObject = o.stream;
            else {
                var i = window.URL || webkitURL;
                o.stream_url = i.createObjectURL(o.stream),
                o.audio.src = o.stream_url
            }
            return o
        };
        t.
    default = l
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
        i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (o),
        r = function(e) {
            var t = {},
            n = webkitRTCPeerConnection;
            t.pc_config = {
                iceServers: []
            },
            t.con = {
                optional: [{
                    DtlsSrtpKeyAgreement: !0
                }]
            },
            e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                    username: e.username,
                    credential: e.password,
                    url: e.url
                })
            }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.password,
                url: e.turnServer.url
            }))),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                mandatory: {
                    OfferToReceiveVideo: e.video,
                    OfferToReceiveAudio: e.audio
                }
            },
            t.roapSessionId = 103,
            t.peerConnection = new n(t.pc_config, t.con),
            t.peerConnection.onicecandidate = function(e) {
                e.candidate ? t.iceCandidateCount += 1 : (i.
            default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
            };
            var o = function(t) {
                var n, o;
                return e.minVideoBW && e.maxVideoBW && (n = t.match(/m=video.*\r\n/), o = n[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(n[0], o), i.
            default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
                e.maxAudioBW && (n = t.match(/m=audio.*\r\n/), o = n[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(n[0], o)),
                t
            };
            return t.processSignalingMessage = function(e) {
                var n, i = JSON.parse(e);
                t.incomingMessage = i,
                "new" === t.state ? "OFFER" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "answer"
                },
                n.sdp = o(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = "established") : "pr-answer" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === i.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state))
            },
            t.addStream = function(e) {
                t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                var e;
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                        if (e.sdp = o(e.sdp), i.
                    default.debug("Changed", e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
                        t.state = "preparing-offer",
                        void t.markActionNeeded();
                        i.
                    default.debug("Not sending a new offer")
                    },
                    function(e) {
                        i.
                    default.debug("peer connection create offer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                        var n = new Date;
                        i.
                    default.debug(n.getTime() + ": Starting ICE in responder"),
                        t.iceStarted = !0
                    },
                    function(e) {
                        i.
                    default.debug("peer connection create answer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        e = t.peerConnection.localDescription.sdp,
                        t.sendMessage("ANSWER", e),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var o = {};
                o.messageType = e,
                o.sdp = n,
                "OFFER" === e ? (o.offererSessionId = t.sessionId, o.answererSessionId = t.otherSessionId, o.seq = t.sequenceNumber += 1, o.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (o.offererSessionId = t.incomingMessage.offererSessionId, o.answererSessionId = t.sessionId, o.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(o))
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.onopen = function() {
                t.onopen && t.onopen()
            },
            t.peerConnection.onaddstream = function(e) {
                t.onaddstream && t.onaddstream(e)
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            },
            t.onaddstream = null,
            t.onremovestream = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        };
        t.
    default = r
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
        i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (o),
        r = function(e) {
            var t = {},
            n = RTCPeerConnection;
            t.pc_config = {
                iceServers: []
            },
            t.con = {
                optional: [{
                    DtlsSrtpKeyAgreement: !0
                }]
            },
            e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                    username: e.username,
                    credential: e.password,
                    url: e.url
                })
            }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.password,
                url: e.turnServer.url
            }))),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                mandatory: {
                    OfferToReceiveVideo: e.video,
                    OfferToReceiveAudio: e.audio
                }
            },
            t.roapSessionId = 103,
            t.peerConnection = new n(t.pc_config, t.con),
            t.peerConnection.onicecandidate = function(e) {
                e.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                    t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                },
                1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (i.
            default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
            };
            var o = function(t) {
                return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")),
                t
            },
            r = function(t) {
                var n, o;
                return e.minVideoBW && e.maxVideoBW && (n = t.match(/m=video.*\r\n/), o = n[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(n[0], o), i.
            default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
                e.maxAudioBW && (n = t.match(/m=audio.*\r\n/), o = n[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(n[0], o)),
                t
            };
            return t.processSignalingMessage = function(e) {
                var n, i = JSON.parse(e);
                t.incomingMessage = i,
                "new" === t.state ? "OFFER" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "answer"
                },
                n.sdp = o(n.sdp), n.sdp = r(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = "established") : "pr-answer" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === i.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === i.messageType ? (n = {
                    sdp: i.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state))
            },
            t.getStatsRate = function(e) {
                t.getStats(function(t) {
                    e(t)
                })
            },
            t.getStats = function(e) {
                t.peerConnection.getStats(null,
                function(t) {
                    var n = [];
                    Object.keys(t).forEach(function(e) {
                        var o = t[e];
                        "ssrc" !== o.type && "VideoBwe" !== o.type || n.push(o)
                    }),
                    e(n)
                })
            },
            t.addStream = function(e) {
                t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                var e;
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                        if (e.sdp = r(e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
                        t.state = "preparing-offer",
                        void t.markActionNeeded();
                        i.
                    default.debug("Not sending a new offer")
                    },
                    function(e) {
                        i.
                    default.debug("peer connection create offer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                        var n = new Date;
                        i.
                    default.debug(n.getTime() + ": Starting ICE in responder"),
                        t.iceStarted = !0
                    },
                    function(e) {
                        i.
                    default.debug("peer connection create answer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        e = t.peerConnection.localDescription.sdp,
                        t.sendMessage("ANSWER", e),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var o = {};
                o.messageType = e,
                o.sdp = n,
                "OFFER" === e ? (o.offererSessionId = t.sessionId, o.answererSessionId = t.otherSessionId, o.seq = t.sequenceNumber += 1, o.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (o.offererSessionId = t.incomingMessage.offererSessionId, o.answererSessionId = t.sessionId, o.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(o))
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.ontrack = function(e) {
                t.onaddstream && t.onaddstream(e, "ontrack")
            },
            t.peerConnection.onaddstream = function(e) {
                t.onaddstream && t.onaddstream(e, "onaddstream")
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            },
            t.onaddstream = null,
            t.onremovestream = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        };
        t.
    default = r
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
        i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (o),
        r = function(e) {
            var t = {};
            RTCPeerConnection;
            t.pc_config = {
                iceServers: [{
                    urls: ["stun:72.251.224.27:3478"]
                }],
                bundlePolicy: "max-bundle"
            },
            t.con = {
                optional: [{
                    DtlsSrtpKeyAgreement: !0
                }]
            },
            e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                    username: e.username,
                    credential: e.password,
                    url: e.url
                })
            }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.password,
                url: e.turnServer.url
            }))),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                mandatory: {
                    OfferToReceiveVideo: e.video,
                    OfferToReceiveAudio: e.audio
                }
            },
            t.roapSessionId = 103,
            t.peerConnection = new RTCPeerConnection({
                iceServers: [{
                    urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"]
                }],
                bundlePolicy: "max-bundle"
            }),
            t.peerConnection.onicecandidate = function(n) {
                i.
            default.debug("PeerConnection: ", e.session_id, n),
                n.candidate ? (0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                    t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                },
                1e3)), t.iceCandidateCount = t.iceCandidateCount + 1) : (i.
            default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), clearTimeout(t.timeout), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
            };
            var n = function(t) {
                return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")),
                t
            },
            o = function(t) {
                var n, o;
                return e.minVideoBW && e.maxVideoBW && (n = t.match(/m=video.*\r\n/), o = n[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(n[0], o), i.
            default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
                e.maxAudioBW && (n = t.match(/m=audio.*\r\n/), o = n[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(n[0], o)),
                t
            };
            t.processSignalingMessage = function(e) {
                var i, r = JSON.parse(e);
                t.incomingMessage = r,
                "new" === t.state ? "OFFER" === r.messageType ? (i = {
                    sdp: r.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (i = {
                    sdp: r.sdp,
                    type: "answer"
                },
                i.sdp = n(i.sdp), i.sdp = o(i.sdp), i.sdp = i.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (i = {
                    sdp: r.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (i = {
                    sdp: r.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
            };
            var r = {
                id: "",
                type: "",
                mediaType: "",
                googCodecName: "opus",
                aecDivergentFilterFraction: "0",
                audioInputLevel: "0",
                bytesSent: "0",
                packetsSent: "0",
                googEchoCancellationReturnLoss: "0",
                googEchoCancellationReturnLossEnhancement: "0"
            },
            a = {
                id: "",
                type: "",
                mediaType: "",
                googCodecName: "h264" === e.codec ? "H264": "VP8",
                bytesSent: "0",
                packetsLost: "0",
                packetsSent: "0",
                googAdaptationChanges: "0",
                googAvgEncodeMs: "0",
                googEncodeUsagePercent: "0",
                googFirsReceived: "0",
                googFrameHeightSent: "0",
                googFrameHeightInput: "0",
                googFrameRateInput: "0",
                googFrameRateSent: "0",
                googFrameWidthSent: "0",
                googFrameWidthInput: "0",
                googNacksReceived: "0",
                googPlisReceived: "0",
                googRtt: "0",
                googFramesEncoded: "0"
            },
            s = {
                id: "",
                type: "",
                mediaType: "",
                audioOutputLevel: "0",
                bytesReceived: "0",
                packetsLost: "0",
                packetsReceived: "0",
                googAccelerateRate: "0",
                googCurrentDelayMs: "0",
                googDecodingCNG: "0",
                googDecodingCTN: "0",
                googDecodingCTSG: "0",
                googDecodingNormal: "0",
                googDecodingPLC: "0",
                googDecodingPLCCNG: "0",
                googExpandRate: "0",
                googJitterBufferMs: "0",
                googJitterReceived: "0",
                googPreemptiveExpandRate: "0",
                googPreferredJitterBufferMs: "0",
                googSecondaryDecodedRate: "0",
                googSpeechExpandRate: "0"
            },
            d = {
                id: "",
                type: "",
                mediaType: "",
                googTargetDelayMs: "0",
                packetsLost: "0",
                googDecodeMs: "0",
                googMaxDecodeMs: "0",
                googRenderDelayMs: "0",
                googFrameWidthReceived: "0",
                googFrameHeightReceived: "0",
                googFrameRateReceived: "0",
                googFrameRateDecoded: "0",
                googFrameRateOutput: "0",
                googFramesDecoded: "0",
                googFrameReceived: "0",
                googJitterBufferMs: "0",
                googCurrentDelayMs: "0",
                googMinPlayoutDelayMs: "0",
                googNacksSent: "0",
                googPlisSent: "0",
                googFirsSent: "0",
                bytesReceived: "0",
                packetsReceived: "0"
            },
            c = {
                id: "",
                type: "VideoBwe",
                googAvailableSendBandwidth: "0",
                googAvailableReceiveBandwidth: "0",
                googActualEncBitrate: "0",
                googRetransmitBitrate: "0",
                googTargetEncBitrate: "0",
                googBucketDelay: "0",
                googTransmitBitrate: "0"
            },
            u = 0,
            l = 0,
            f = 0;
            return t.getStatsRate = function(e) {
                t.getStats(function(t) {
                    t.forEach(function(e) {
                        "outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - u) / 3).toString(), u = e.googFramesEncoded),
                        "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - f) / 3).toString(), f = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - l) / 3).toString(), l = e.googFramesDecoded))
                    }),
                    e(t)
                })
            },
            t.getStats = function(e) {
                var n = [];
                t.peerConnection.getStats().then(function(t) {
                    t.forEach(function(e) {
                        n.push(e),
                        "outbound-rtp" === e.type && "audio" === e.mediaType && (r.id = e.id, r.type = e.type, r.mediaType = e.mediaType, r.bytesSent = e.bytesSent.toString(), r.packetsSent = e.packetsSent.toString()),
                        "outbound-rtp" === e.type && "video" === e.mediaType && (a.id = e.id, a.type = e.type, a.mediaType = e.mediaType, a.bytesSent = e.bytesSent.toString(), a.packetsSent = e.packetsSent.toString(), a.googPlisReceived = e.pliCount.toString(), a.googNacksReceived = e.nackCount.toString(), a.googFirsReceived = e.firCount.toString(), a.googFramesEncoded = e.framesEncoded.toString()),
                        "inbound-rtp" === e.type && -1 != e.id.indexOf("44444") && (s.id = e.id, s.type = e.type, s.mediaType = "audio", s.packetsReceived = e.packetsReceived.toString(), s.bytesReceived = e.bytesReceived.toString(), s.packetsLost = e.packetsLost.toString(), s.googJitterReceived = e.jitter.toString()),
                        "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (d.id = e.id, d.type = e.type, d.mediaType = "video", d.packetsReceived = e.packetsReceived.toString(), d.bytesReceived = e.bytesReceived.toString(), d.packetsLost = e.packetsLost.toString(), d.googJitterBufferMs = e.jitter.toString(), d.googNacksSent = e.nackCount.toString(), d.googPlisSent = e.pliCount.toString(), d.googFirsSent = e.firCount.toString()),
                        "track" === e.type && -1 != e.id.indexOf("55543") && (d.googFrameWidthReceived = e.frameWidth.toString(), d.googFrameHeightReceived = e.frameHeight.toString(), d.googFrameReceived = e.framesReceived.toString(), d.googFramesDecoded = e.framesDecoded.toString()),
                        "track" === e.type && -1 != e.id.indexOf("44444") && (s.audioOutputLevel = e.audioLevel + "", r.audioInputLevel = e.audioLevel + ""),
                        "candidate-pair" === e.type && (0 == e.availableIncomingBitrate ? c.googAvailableSendBandwidth = e.availableOutgoingBitrate + "": c.googAvailableReceiveBandwidth = e.availableIncomingBitrate + "")
                    }),
                    e([c, r, a, s, d], n)
                }).
                catch(function(e) {
                    console.error(e)
                })
            },
            t.addStream = function(e) {
                window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function(n) {
                    return t.peerConnection.addTrack(n, e)
                }) : t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                var n;
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) {
                        if (e.isSubscriber && window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) {
                            var r = t.peerConnection.addTransceiver("audio"),
                            a = t.peerConnection.addTransceiver("video");
                            r.setDirection("recvonly"),
                            a.setDirection("recvonly")
                        }
                        t.peerConnection.createOffer(t.mediaConstraints).then(function(e) {
                            if (e.sdp = o(e.sdp), e.sdp = e.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, ""), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
                            t.state = "preparing-offer",
                            void t.markActionNeeded();
                            i.
                        default.debug("Not sending a new offer")
                        }).
                        catch(function(e) {
                            i.
                        default.debug("peer connection create offer failed ", e)
                        })
                    } else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                        var n = new Date;
                        i.
                    default.debug(n.getTime() + ": Starting ICE in responder"),
                        t.iceStarted = !0
                    },
                    function(e) {
                        i.
                    default.debug("peer connection create answer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        n = t.peerConnection.localDescription.sdp,
                        t.sendMessage("ANSWER", n),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var o = {};
                o.messageType = e,
                o.sdp = n,
                "OFFER" === e ? (o.offererSessionId = t.sessionId, o.answererSessionId = t.otherSessionId, o.seq = t.sequenceNumber += 1, o.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (o.offererSessionId = t.incomingMessage.offererSessionId, o.answererSessionId = t.sessionId, o.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(o))
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.ontrack = function(e) {
                t.onaddstream && t.onaddstream(e, "ontrack")
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            },
            t.onaddstream = null,
            t.onremovestream = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        };
        t.
    default = r
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            var e = {};
            return e.addStream = function() {},
            e
        };
        t.
    default = o
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
        i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (o),
        r = function(e) {
            var t = {},
            n = (mozRTCPeerConnection, mozRTCSessionDescription),
            o = !1;
            t.pc_config = {
                iceServers: []
            },
            e.iceServers instanceof Array ? e.iceServers.map(function(e) {
                0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({
                    url: e.url
                })
            }) : e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                offerToReceiveAudio: e.audio,
                offerToReceiveVideo: e.video,
                mozDontOfferDataChannel: !0
            },
            t.roapSessionId = 103,
            t.peerConnection = new RTCPeerConnection(t.pc_config),
            t.peerConnection.onicecandidate = function(e) {
                e.candidate ? t.iceCandidateCount += 1 : (i.
            default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
            },
            t.processSignalingMessage = function(e) {
                var o, r = JSON.parse(e);
                t.incomingMessage = r,
                "new" === t.state ? "OFFER" === r.messageType ? (r.sdp = u(r.sdp), o = {
                    sdp: r.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new n(o),
                function() {
                    i.
                default.debug("setRemoteDescription succeeded")
                },
                function(e) {
                    i.
                default.info("setRemoteDescription failed: " + e.name)
                }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (r.sdp = u(r.sdp), r.sdp = r.sdp.replace(/ generation 0/g, ""), r.sdp = r.sdp.replace(/ udp /g, " UDP "), r.sdp = r.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), r.sdp = r.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), r.sdp = r.sdp.replace(/a=mid:video/, "a=mid:sdparta_1"), o = {
                    sdp: r.sdp,
                    type: "answer"
                },
                t.peerConnection.setRemoteDescription(new n(o),
                function() {
                    i.
                default.debug("setRemoteDescription succeeded")
                },
                function(e) {
                    i.
                default.info("setRemoteDescription failed: " + e)
                }), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (o = {
                    sdp: r.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new n(o),
                function() {
                    i.
                default.debug("setRemoteDescription succeeded")
                },
                function(e) {
                    i.
                default.info("setRemoteDescription failed: " + e.name)
                })) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (o = {
                    sdp: r.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new n(o),
                function() {
                    i.
                default.debug("setRemoteDescription succeeded")
                },
                function(e) {
                    i.
                default.info("setRemoteDescription failed: " + e.name)
                }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
            };
            var r = {
                id: "",
                type: "",
                mediaType: "opus",
                googCodecName: "opus",
                aecDivergentFilterFraction: "0",
                audioInputLevel: "0",
                bytesSent: "0",
                packetsSent: "0",
                googEchoCancellationReturnLoss: "0",
                googEchoCancellationReturnLossEnhancement: "0"
            },
            a = {
                id: "",
                type: "",
                mediaType: "",
                googCodecName: "h264" === e.codec ? "H264": "VP8",
                bytesSent: "0",
                packetsLost: "0",
                packetsSent: "0",
                googAdaptationChanges: "0",
                googAvgEncodeMs: "0",
                googEncodeUsagePercent: "0",
                googFirsReceived: "0",
                googFrameHeightSent: "0",
                googFrameHeightInput: "0",
                googFrameRateInput: "0",
                googFrameRateSent: "0",
                googFrameWidthSent: "0",
                googFrameWidthInput: "0",
                googNacksReceived: "0",
                googPlisReceived: "0",
                googRtt: "0"
            },
            s = {
                id: "",
                type: "",
                mediaType: "",
                audioOutputLevel: "0",
                bytesReceived: "0",
                packetsLost: "0",
                packetsReceived: "0",
                googAccelerateRate: "0",
                googCurrentDelayMs: "0",
                googDecodingCNG: "0",
                googDecodingCTN: "0",
                googDecodingCTSG: "0",
                googDecodingNormal: "0",
                googDecodingPLC: "0",
                googDecodingPLCCNG: "0",
                googExpandRate: "0",
                googJitterBufferMs: "0",
                googJitterReceived: "0",
                googPreemptiveExpandRate: "0",
                googPreferredJitterBufferMs: "0",
                googSecondaryDecodedRate: "0",
                googSpeechExpandRate: "0"
            },
            d = {
                id: "",
                type: "",
                mediaType: "",
                googTargetDelayMs: "0",
                packetsLost: "0",
                googDecodeMs: "0",
                googMaxDecodeMs: "0",
                googRenderDelayMs: "0",
                googFrameWidthReceived: "0",
                googFrameHeightReceived: "0",
                googFrameRateReceived: "0",
                googFrameRateDecoded: "0",
                googFrameRateOutput: "0",
                googJitterBufferMs: "0",
                googCurrentDelayMs: "0",
                googMinPlayoutDelayMs: "0",
                googNacksSent: "0",
                googPlisSent: "0",
                googFirsSent: "0",
                bytesReceived: "0",
                packetsReceived: "0",
                googFramesDecoded: "0"
            },
            c = 0;
            t.getStatsRate = function(e) {
                t.getStats(function(t) {
                    t.forEach(function(e) {
                        "inboundrtp" === e.type && "video" === e.mediaType && e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - c) / 3).toString(), c = e.googFramesDecoded)
                    }),
                    e(t)
                })
            },
            t.getStats = function(e) {
                t.peerConnection.getStats().then(function(t) {
                    var n = [];
                    Object.keys(t).forEach(function(e) {
                        var o = t[e];
                        n.push(o),
                        "outboundrtp" === o.type && "video" === o.mediaType && (a.id = o.id, a.type = o.type, a.mediaType = o.mediaType, a.bytesSent = o.bytesSent.toString(), a.packetsSent = o.packetsSent.toString(), a.googPlisReceived = o.pliCount.toString(), a.googNacksReceived = o.nackCount.toString(), a.googFirsReceived = o.firCount.toString(), a.googFrameRateSent = o.framerateMean.toString()),
                        "outboundrtp" === o.type && "audio" === o.mediaType && (r.id = o.id, r.type = o.type, r.mediaType = o.mediaType, r.bytesSent = o.bytesSent.toString(), r.packetsSent = o.packetsSent.toString()),
                        "inboundrtp" !== o.type || "audio" !== o.mediaType || o.isRemote || (s.id = o.id, s.type = o.type, s.mediaType = o.mediaType, s.bytesReceived = o.bytesReceived.toString(), s.packetsLost = o.packetsLost.toString(), s.packetsReceived = o.packetsReceived.toString(), s.googJitterReceived = o.jitter.toString()),
                        "inboundrtp" !== o.type || "video" !== o.mediaType || o.isRemote || (d.id = o.id, d.type = o.type, d.mediaType = o.mediaType, d.bytesReceived = o.bytesReceived.toString(), d.googFrameRateReceived = o.framerateMean.toString(), d.googFramesDecoded = o.framesDecoded.toString(), d.packetsLost = o.packetsLost.toString(), d.packetsReceived = o.packetsReceived.toString(), d.googJitterBufferMs = o.jitter.toString(), d.googNacksSent = o.nackCount.toString(), d.googPlisSent = o.pliCount.toString(), d.googFirsSent = o.firCount.toString()),
                        -1 !== o.id.indexOf("outbound_rtcp_video") && (a.packetsLost = o.packetsLost.toString())
                    }),
                    e([a, r, s, d], n)
                },
                function(e) {
                    i.
                default.error(e)
                })
            },
            t.addStream = function(e) {
                o = !0,
                t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) {
                        o && (t.mediaConstraints = void 0),
                        function() {
                            t.peerConnection.createOffer(function(e) {
                                if (e.sdp = u(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
                                t.state = "preparing-offer",
                                void t.markActionNeeded();
                                i.
                            default.debug("Not sending a new offer")
                            },
                            function(e) {
                                i.
                            default.debug("Ups! create offer failed ", e)
                            },
                            t.mediaConstraints)
                        } ()
                    } else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
                        var n = new Date;
                        i.
                    default.debug(n.getTime() + ": Starting ICE in responder"),
                        t.iceStarted = !0
                    },
                    function() {
                        i.
                    default.debug("Ups! Something went wrong")
                    });
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        var e = t.peerConnection.localDescription.sdp;
                        t.sendMessage("ANSWER", e),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var o = {};
                o.messageType = e,
                o.sdp = n,
                "OFFER" === e ? (o.offererSessionId = t.sessionId, o.answererSessionId = t.otherSessionId, o.seq = t.sequenceNumber += 1, o.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (o.offererSessionId = t.incomingMessage.offererSessionId, o.answererSessionId = t.sessionId, o.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(o))
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.ontrack = function(e) {
                t.onaddstream && t.onaddstream(e, "ontrack")
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            };
            var u = function(t) {
                if (e.video && e.maxVideoBW) {
                    var n = t.match(/m=video.*\r\n/);
                    if (null == n && (n = t.match(/m=video.*\n/)), n && n.length > 0) {
                        var o = n[0] + "b=AS:" + e.maxVideoBW + "\r\n";
                        t = t.replace(n[0], o)
                    }
                }
                if (e.audio && e.maxAudioBW) {
                    var n = t.match(/m=audio.*\r\n/);
                    if (null == n && (n = t.match(/m=audio.*\n/)), n && n.length > 0) {
                        var o = n[0] + "b=AS:" + e.maxAudioBW + "\r\n";
                        t = t.replace(n[0], o)
                    }
                }
                return t
            };
            return t.onaddstream = null,
            t.onremovestream = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        };
        t.
    default = r
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(29),
        i = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (o),
        r = n(1),
        a = function(e, t) {
            var n = {};
            return n.connect = function() {
                t.host = e,
                n.signal = (0, i.
            default)(t),
                n.on = n.signal.on,
                n.dispatchEvent = n.signal.dispatchEvent,
                n.signal.on("onopen",
                function(e) {
                    n.signal.onEvent = function(e) {
                        n.dispatchEvent((0, r.MediaEvent)({
                            type: e.event,
                            msg: e
                        }))
                    },
                    n.dispatchEvent((0, r.MediaEvent)({
                        type: "connect",
                        msg: e
                    }))
                }),
                n.signal.on("onError",
                function(e) {
                    var t = e.msg;
                    onError(t.code, "error")
                })
            },
            n.disconnect = function() {
                n.signal.close()
            },
            n.reconnect = function(e) {
                n.signal.creatConnection(e)
            },
            n.emitSimpleMessage = function(e, t) {
                n.signal.sendSignalCommand(e, t)
            },
            n.connect(),
            n
        };
        t.
    default = a
    },
    function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1),
        r = n(11),
        a = o(r),
        s = n(0),
        d = o(s),
        c = function(e) {
            function t(e) {
                console.log(e)
            }
            var n = (0, i.EventDispatcher)(e);
            return n.needReconnect = !0,
            n.isTimeout = !1,
            n.hostIndex = 0,
            n.requestID = 0,
            e.host instanceof Array ? n.host = e.host: n.host = [e.host],
            n.Reconnection = function(e) {
                n.host = e || n.host,
                n.hostIndex = 0,
                n.creatConnection()
            },
            n.creatConnection = function() {
                if (n.hostIndex >= n.host.length) return n.hostIndex = 0,
                void n.dispatchEvent((0, i.MediaEvent)({
                    type: "reconnect"
                }));
                d.
            default.debug("start connect:" + n.host[n.hostIndex]),
                n.connection = new WebSocket("wss://" + n.host[n.hostIndex++]),
                n.connection.onopen = function(e) {
                    d.
                default.debug("websockect opened"),
                    n.isTimeout = !1,
                    clearTimeout(n.timeoutCheck),
                    n.dispatchEvent((0, i.MediaEvent)({
                        type: "onopen",
                        event: e,
                        socket: n
                    }))
                },
                n.connection.onmessage = function(e) {
                    var t = JSON.parse(e.data);
                    t.hasOwnProperty("_id") ? n.dispatchEvent((0, i.MediaEvent)({
                        type: t._id,
                        msg: t
                    })) : t.hasOwnProperty("_type") && n.dispatchSocketEvent((0, i.MediaEvent)({
                        type: t._type,
                        msg: t.message
                    }))
                },
                n.connection.onclose = function(t) {
                    n.needReconnect ? n.isTimeout ? (d.
                default.debug("websockect connect timeout"), n.creatConnection()) : n.dispatchEvent((0, i.MediaEvent)({
                        type: "connect_error",
                        event: t
                    })) : (d.
                default.debug("websockect closeed"), (0, a.
                default)(e.onFailure, t), n.dispatchEvent((0, i.MediaEvent)({
                        type: "disconnect",
                        event: t
                    })), n.connection.onopen = void 0, n.connection.onclose = void 0, n.connection.onerror = void 0, n.connection.onmessage = void 0, n.connection = void 0)
                },
                n.connection.onerror = function(t) {
                    n.needReconnect || (console.log(t), (0, a.
                default)(e.onFailure, t), n.dispatchEvent((0, i.MediaEvent)({
                        type: "connect_error",
                        event: t
                    })), n.connection.onopen = void 0, n.connection.onclose = void 0, n.connection.onerror = void 0, n.connection.onmessage = void 0, n.connection = void 0)
                };
                setTimeout(function() {
                    n.connection.readyState != WebSocket.OPEN && (n.isTimeout = !0, n.connection.close())
                },
                5e3)
            },
            n.creatConnection(),
            n.sendMessage = function(e, t) {
                n.connection.readyState == WebSocket.OPEN ? n.connection.send(JSON.stringify(e)) : (console.log("Connection to gateway lost while sending " + JSON.stringify(e)), console.log("signal connection state " + n.connection.readyState), t({
                    error: "Not connected"
                }))
            },
            n.close = function() {
                n.onEvent = t,
                n.needReconnect = !1,
                n.connection.close()
            },
            n.onEvent = t,
            n.sendSignalCommand = function(e, t) {
                e._id = "_request_" + n.requestID,
                n.requestID += 1,
                "publish_stats" !== e._type && "subscribe_stats" !== e._type && n.on(e._id,
                function(o) {
                    var i = o.msg; (0, a.
                default)(t, i._result, i.message),
                    delete n.dispatcher.eventListeners[e._id]
                }),
                n.sendMessage(e,
                function(e) {
                    console.log(e),
                    e.reason = "NOT_CONNECTED",
                    (0, a.
                default)(t, e.reason, e)
                })
            },
            n
        };
        t.
    default = c
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.initFailCbWrapper = t.initSuccessCbWrapper = void 0;
        var o = (n(6), n(4)),
        i = function(e, t, n, i, r, a) {
            var s = {
                n: o.EVENTS.INIT,
                lts: e,
                elps: (new Date).getTime() - e,
                succ: !0,
                appid: t,
                ver: n
            };
            i && (s.addl_s1 = i),
            (0, o.onEvent)(s)
        },
        r = function(e, t, n, i, r, a) {
            var s = {
                n: o.EVENTS.INIT,
                lts: e,
                elps: (new Date).getTime() - e,
                succ: !1,
                ec: a,
                appid: t,
                ver: n
            };
            i && (s.addl_s1 = i),
            (0, o.onEvent)(s)
        };
        t.initSuccessCbWrapper = i,
        t.initFailCbWrapper = r
    },
    function(e, t, n) {
        function o(e, t) {
            this._id = e,
            this._clearFn = t
        }
        var i = Function.prototype.apply;
        t.setTimeout = function() {
            return new o(i.call(setTimeout, window, arguments), clearTimeout)
        },
        t.setInterval = function() {
            return new o(i.call(setInterval, window, arguments), clearInterval)
        },
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        },
        o.prototype.unref = o.prototype.ref = function() {},
        o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        },
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        },
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        },
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            },
            t))
        },
        n(32),
        t.setImmediate = setImmediate,
        t.clearImmediate = clearImmediate
    },
    function(e, t, n) { (function(e, t) { !
            function(e, n) {
                "use strict";
                function o(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var o = {
                        callback: e,
                        args: t
                    };
                    return c[d] = o,
                    s(d),
                    d++
                }
                function i(e) {
                    delete c[e]
                }
                function r(e) {
                    var t = e.callback,
                    o = e.args;
                    switch (o.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(o[0]);
                        break;
                    case 2:
                        t(o[0], o[1]);
                        break;
                    case 3:
                        t(o[0], o[1], o[2]);
                        break;
                    default:
                        t.apply(n, o)
                    }
                }
                function a(e) {
                    if (u) setTimeout(a, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            u = !0;
                            try {
                                r(t)
                            } finally {
                                i(e),
                                u = !1
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var s, d = 1,
                    c = {},
                    u = !1,
                    l = e.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    f = f && f.setTimeout ? f: e,
                    "[object process]" === {}.toString.call(e.process) ?
                    function() {
                        s = function(e) {
                            t.nextTick(function() {
                                a(e)
                            })
                        }
                    } () : function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                            n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            },
                            e.postMessage("", "*"),
                            e.onmessage = n,
                            t
                        }
                    } () ?
                    function() {
                        var t = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a( + n.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                        s = function(n) {
                            e.postMessage(t + n, "*")
                        }
                    } () : e.MessageChannel ?
                    function() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            a(e.data)
                        },
                        s = function(t) {
                            e.port2.postMessage(t)
                        }
                    } () : l && "onreadystatechange" in l.createElement("script") ?
                    function() {
                        var e = l.documentElement;
                        s = function(t) {
                            var n = l.createElement("script");
                            n.onreadystatechange = function() {
                                a(t),
                                n.onreadystatechange = null,
                                e.removeChild(n),
                                n = null
                            },
                            e.appendChild(n)
                        }
                    } () : function() {
                        s = function(e) {
                            setTimeout(a, 0, e)
                        }
                    } (),
                    f.setImmediate = o,
                    f.clearImmediate = i
                }
            } ("undefined" == typeof self ? void 0 === e ? this: e: self)
        }).call(t, n(33), n(34))
    },
    function(e, t) {
        var n;
        n = function() {
            return this
        } ();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch(e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout,
            setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch(t) {
                try {
                    return u.call(null, e, 0)
                } catch(t) {
                    return u.call(this, e, 0)
                }
            }
        }
        function r(e) {
            if (l === clearTimeout) return clearTimeout(e);
            if ((l === o || !l) && clearTimeout) return l = clearTimeout,
            clearTimeout(e);
            try {
                return l(e)
            } catch(t) {
                try {
                    return l.call(null, e)
                } catch(t) {
                    return l.call(this, e)
                }
            }
        }
        function a() {
            g && p && (g = !1, p.length ? m = p.concat(m) : v = -1, m.length && s())
        }
        function s() {
            if (!g) {
                var e = i(a);
                g = !0;
                for (var t = m.length; t;) {
                    for (p = m, m = []; ++v < t;) p && p[v].run();
                    v = -1,
                    t = m.length
                }
                p = null,
                g = !1,
                r(e)
            }
        }
        function d(e, t) {
            this.fun = e,
            this.array = t
        }
        function c() {}
        var u, l, f = e.exports = {}; !
        function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout: n
            } catch(e) {
                u = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout: o
            } catch(e) {
                l = o
            }
        } ();
        var p, m = [],
        g = !1,
        v = -1;
        f.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            m.push(new d(e, t)),
            1 !== m.length || g || i(s)
        },
        d.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        f.title = "browser",
        f.browser = !0,
        f.env = {},
        f.argv = [],
        f.version = "",
        f.versions = {},
        f.on = c,
        f.addListener = c,
        f.once = c,
        f.off = c,
        f.removeListener = c,
        f.removeAllListeners = c,
        f.emit = c,
        f.prependListener = c,
        f.prependOnceListener = c,
        f.listeners = function(e) {
            return []
        },
        f.binding = function(e) {
            throw new Error("process.binding is not supported")
        },
        f.cwd = function() {
            return "/"
        },
        f.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        },
        f.umask = function() {
            return 0
        }
    },
    ,
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Logger = t.checkSystemRequirements = t.getDevices = t.createStream = t.createClient = void 0;
        var o = n(16),
        i = n(8),
        r = n(6),
        a = n(0),
        s = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (a);
        t.createClient = o.createClient,
        t.createStream = i.createStream,
        t.getDevices = i.getDevices,
        t.checkSystemRequirements = r.checkSystemRequirements,
        t.Logger = s.
    default
    }])
});
//# sourceMappingURL=AgoraRTC-production.js.map
