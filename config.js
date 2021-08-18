module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://10.12.13.196:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'mamba96',   //七牛云bucket
    AccessKey: 'vWAnQapxYaYj-IzzhAe1fkjLhVD6EB2ybeQaqyGg',   //七牛云accessKey
    SecretKey: 'ZHcMLTvNy_3cFwH-8HnAdxnHh2uNnpwa5AKWWpPB',    //七牛云secretKey
    tencentkey: 'Z2ABZ-L3ZKJ-JTTFP-KWV4K-IQ3KZ-I6F7R',        //腾讯位置secreKey
    tencentkey2: 'Z2ABZ-L3ZKJ-JTTFP-KWV4K-IQ3KZ-I6F7R',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


