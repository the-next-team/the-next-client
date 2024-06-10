import { Client } from "@stomp/stompjs";
import { useCallback, useEffect, useState } from "react";

// 함수 바깥에 변수를 정의하면 전역 변수 처럼 활용 가능
let client: Client | null = null;

const useStompClient = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);

  const connect = useCallback(() => {
    // 웹소켓이 서버와 한번만 연결이 되어야 하는데 2번, 3번 연결되어 버리면 X
    if (!client) {
      client = new Client({
        brokerURL: process.env.REACT_APP_API_URL,
        debug: (str) => console.log(str),
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      client.onConnect = onConnect;
      client.onStompError = onError;
    }

    if (!isConnected) {
      client.activate();
    }
  }, [isConnected]);

  const onConnect = (frame: any) => {
    console.log("Connected: " + frame);
    setIsConnected(true);
  };

  const onError = (frame: any) => {
    console.log("Broker reported error: " + frame.headers["message"]);
    console.log("Additional details: " + frame.body);
  };

  // 서버와 연결을 하고 연결을 끊고 싶을 때 활용하는 함수 disconnet
  const disconnect = useCallback(() => {
    if (client && isConnected) {
      client.deactivate(); // 연결 끊어짐
      client = null;
      setIsConnected(false);
    }
  }, []);

  return {
    client,
    connect,
    disconnect,
    isConnected,
  };
};

export default useStompClient();
