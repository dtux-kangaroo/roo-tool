const  Tool = {
    /**
     *
     *  文档高度
     * @returns 
     */
    getDocumentTop (){
        let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    },
    /**
     * 可视窗口高度
     *
     * @returns number
     */
    getWindowHeight (){
        let windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    },
    /**
     *  滚动条滚动高度
     *
     * @returns number
     */
    getScrollHeight(){
        let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    },
    /**
       *
       *  自定义上传事件获取文件URl方法
       * @param {*} file
       * @returns
       */
     getObjectURL(file){   
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    },
    /**
     *
     * 计算字符串长度(英文占1个字符，中文汉字占2个字符)
     * @param {*} str
     * @returns number
     */
    getStrlen (str){    
      var len = 0;  
      for (var i=0; i<str.length; i++) {   
       var c = str.charCodeAt(i);   
      //单字节加1   
       if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {   
         len++;   
       }   
       else {   
        len+=2;   
       }   
      }   
      return len;  
    },
     /**
      *去除空串
      *
      * @param {*} str
      * @returns
      */
     trim (str){
        return typeof str === 'string'
            ? str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
            : str;
  },
     /**
     *
     *  校验Url是否为真实
     * @param {*} sUrl
     * @returns
     */
    isRealUrl(sUrl){
        let reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        return reg.test(sUrl);
    },
    /**
     * 判断是否是JSON string
     * @param  {String}  str 所要验证的字符串
     * @return {Boolean}   是否是JSON字符串
     */
    isJSONStr(str) {
        return (
            (str.charAt(0) === '{' && str.charAt(str.length - 1) === '}') ||
            (str.charAt(0) === '[' && str.charAt(str.length - 1) === ']')
        )
    },
    /**
     *
     *  校验手机
     * @param {*} tel
     * @returns
     */
    isPhoneNumber (tel){
        var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
        return reg.test(tel);
      },
     /**
      *  判断是否是函数
      *
      * @param {*} arg
      * @returns
      */
    isFunction:(arg) => {
        if (arg) {
            if (typeof (/./) !== 'function') {
                return typeof arg === 'function';
            } else {
                return Object.prototype.toString.call(arg) === '[object Function]';
            }
        }
        return false;
    },
      // 变成千分位
    toThousands:(num) =>{
        return (num || 0).toString().replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
    },
    /**
     *
     *  防抖函数
     * @param {*} func
     * @param {*} wait   
     * @param {*} immediate 
     * @returns
     */
    debounceFunc:(func, wait, immediate) => {

        var timeout, result;
    
        var debounced = function () {
            var context = this;
            var args = arguments;
    
            if (timeout) clearTimeout(timeout);
            if (immediate) {
                // 如果已经执行过，不再执行
                var callNow = !timeout;
                timeout = setTimeout(function(){
                    timeout = null;
                }, wait)
                if (callNow) result = func.apply(context, args)
            }
            else {
                timeout = setTimeout(function(){
                    func.apply(context, args)
                }, wait);
            }
            return result;
        };
    
        debounced.cancel = function() {
            clearTimeout(timeout);
            timeout = null;
        };
    
        return debounced;
    },

}
export default Tool