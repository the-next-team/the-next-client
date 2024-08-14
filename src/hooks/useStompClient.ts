import { ActivationState, Client, IMessage, StompConfig, StompSubscription } from '@stomp/stompjs';
import { useCallback, useState } from 'react';
import { storageKey } from '../constants';

let client: Client | null = null;

const useStompClient = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isError, setIsError] = useState(false);

  const connect = useCallback(() => {
    const accessToken = localStorage.getItem(storageKey.accessToken);

    if (!client) {
      const stompConfig: StompConfig = {
        brokerURL: `${process.env.REACT_APP_SOCKET_URL}/ws-stomp`,
        debug: (str) => console.log(str),
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        connectHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      client = new Client(stompConfig);

      client.onConnect = () => {
        console.log('Connected');
        setIsConnected(true);
        setIsConnecting(false);
        setIsError(false);
      };

      client.onStompError = (frame: any) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
        setIsError(true);
        setIsConnecting(false);
      };

      client.onDisconnect = () => {
        console.log('Disconnected from STOMP');
        setIsConnected(false);
      };
    }

    if (client.state !== ActivationState.ACTIVE && !isConnecting) {
      setIsConnecting(true);
      client.activate();
    }
  }, [isConnecting]);

  const disconnect = useCallback(() => {
    if (client && client.state === ActivationState.ACTIVE) {
      client.deactivate();
      client = null;
      setIsConnected(false);
    }
  }, []);

  const subscribe = (destination: string, callback: (message: IMessage) => void): StompSubscription | null => {
    if (isConnected && client) {
      return client.subscribe(destination, callback);
    }
    return null;
  };

  return {
    connect,
    disconnect,
    subscribe,
    isConnected,
    isConnecting,
    isError,
  };
};

export default useStompClient;
