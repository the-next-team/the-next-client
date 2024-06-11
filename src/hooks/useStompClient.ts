import { Client, Stomp } from "@stomp/stompjs";
import { useCallback, useEffect, useState } from "react";
import { storageKey } from "../constants";

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
    const accessToken = localStorage.getItem(
      storageKey.accessToken
    );

    if (!client) {
      client = Stomp.over(() => {

      })
      client = new Client({
        // webSocketFactory: () => new SockJS(`${process.env.REACT_APP_API_URL!}/ws-stomp`),
        brokerURL: `${process.env.REACT_APP_SOCKET_URL!}/ws-stomp`,
        debug: (str) => console.log(str),
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        connectHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      client.onConnect = onConnect;
      client.onStompError = onError;
      client.onDisconnect = () => {
        console.log("Disconnected from STOMP");
        setIsConnected(false);
      };
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

  const disconnect = useCallback(() => {
    if (client && isConnected) {
      client.deactivate();
      client = null;
      setIsConnected(false);
    }
  }, [isConnected]);

  return {
    client,
    connect,
    disconnect,
    isConnected,
  };
};

export default useStompClient;
