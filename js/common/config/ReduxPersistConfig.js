import { AsyncStorage } from 'react-native'

export const PERSIST_CONFIG = {
    active: true,
    storeConfig: {
        storage: AsyncStorage,
        blacklist: []
    }
}