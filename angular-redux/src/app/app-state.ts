import { ConfigImageItem } from './config-item';

export interface AppState {
    selectedImage: ConfigImageItem;
    imageResources: Array<ConfigImageItem>;
};
