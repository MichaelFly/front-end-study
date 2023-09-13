const url = new URL('/das/ws', window.location.origin);
url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';

export function connect(onMsg: (msg: any) => void, onErr: () => void): WebSocket {
    const ws = new WebSocket(url);
    ws.addEventListener('open', () => {
        console.debug('[WS] connected.');
    });
    ws.addEventListener('close', (e: CloseEvent) => {
        // console.debug("[WS] disconnected:", e);
        // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
        // https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4
        console.debug('[WS] closed:', e.code);
        if (e.code === 1006) {
            // 非正常关闭（包括连接建立失败）
            window.setTimeout(onErr, 1000);
        }
    });
    ws.addEventListener('error', (e: Event) => {
        console.error('[WS] error:', e); // 似乎没啥有用信息
    });
    ws.addEventListener('message', (e: MessageEvent<string>) => {
        try {
            onMsg(JSON.parse(e.data));
        } catch (err) {
            console.error('[WS] message is not json:', err);
        }
    });
    return ws;
}

export interface ClosableWs {
    close: () => void;
    send: (msg: string) => void;
}

export function connectWs(onWsMsg: (msg: any) => void): ClosableWs {
    let ws: WebSocket | null = null;
    const doConnect = () => connect(onWsMsg, doConnect);
    ws = doConnect();
    return {
        close: () => ws && ws.close(),
        send: (msg: string) => ws && ws.send(msg),
    };
}
