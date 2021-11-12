class scratchCookie {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Cookie",
            "name": "Cookie",
            "blocks": [
                        {
                            "opcode": "setCookie",
                            "blockType": "command",
                            "text": "set this website's cookies to [cookie]",
                            "arguments": {
                                "cookieSet": {
                                    "type": "string",
                                    "defaultValue": "Hello, Cookies!"
                                },
                            }
                        },
                        {
                            "opcode": "getCookie",
                            "blockType": "reporter",
                            "text": "this website's cookie"
                        }
                ]
        }
    }
    
    setCookie({cookieSet}) {
       document.cookie = cookieSet;
    }
    
    getCookie() {
        return document.cookie;
        }
    }
}

Scratch.extensions.register(new scratchCookie())
