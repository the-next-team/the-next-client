import { AtomEffect } from 'recoil';

export interface PersistStorage {
  setItem(key: string, value: string): void | Promise<void>;
  mergeItem?(key: string, value: string): Promise<void>;
  getItem(key: string): null | string | Promise<null | string>;
}

export interface PersistConverter {
  stringify: (value: any) => string;
  parse: (value: string) => any;
}

export interface PersistConfiguration {
  key?: string;
  storage?: PersistStorage;
  converter?: PersistConverter;
}

export const recoilPersist = (
  config: PersistConfiguration = {}
): { persistAtom: AtomEffect<any> } => {
  if (typeof window === 'undefined') {
    return {
      persistAtom: () => {},
    };
  }

  const {
    key = 'recoil-persist',
    storage = localStorage,
    converter = JSON,
  } = config;

  const persistAtom: AtomEffect<any> = ({ onSet, setSelf, trigger, node }) => {
    if (trigger === 'get') {
      const state = getState();
      if (typeof state.then === 'function') {
        state.then((s: any) => {
          if (s && s.hasOwnProperty(node.key)) {
            setSelf(s[node.key]);
          }
        });
      } else {
        if (state && state.hasOwnProperty(node.key)) {
          setSelf(state[node.key]);
        }
      }
    }

    onSet(async (newValue, _, isReset) => {
      const state = await getState();
      if (typeof state.then === 'function') {
        state.then((s: any) => updateState(newValue, s, node.key, isReset));
      } else {
        updateState(newValue, state, node.key, isReset);
      }
    });
  };

  const updateState = (
    newValue: any,
    state: any,
    key: string,
    isReset: boolean
  ) => {
    if (isReset) {
      delete state[key];
    } else {
      state[key] = newValue;
    }

    setState(state);
  };

  const getState = (): any => {
    const toParse = storage.getItem(key);
    if (toParse === null || toParse === undefined) {
      return {};
    }
    if (typeof toParse === 'string') {
      return parseState(toParse);
    }
    if (typeof toParse.then === 'function') {
      return toParse.then(parseState);
    }

    return {};
  };

  const parseState = (state: string | null) => {
    if (state === null) {
      return {};
    }
    try {
      return converter.parse(state);
    } catch (e) {
      console.error(e);
      return {};
    }
  };

  const setState = (state: any): void => {
    try {
      if (typeof storage.mergeItem === 'function') {
        storage.mergeItem(key, converter.stringify(state));
      } else {
        storage.setItem(key, converter.stringify(state));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { persistAtom };
};
