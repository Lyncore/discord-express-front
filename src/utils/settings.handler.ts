import { useReducer } from 'react';
import { AppSettings } from '../entity/settings';

function settingsReducer(oldSettings: AppSettings, changedSettings: AppSettings) {
    const newSettings = {...oldSettings, ...changedSettings};
    localStorage.setItem('settings', JSON.stringify(newSettings));
    return newSettings;
}

function initSettings(initial: AppSettings) {
    let parsed;
    try {
        parsed = JSON.parse(localStorage.getItem('settings')!);
    } catch {
        localStorage.removeItem('settings');
    }
    return parsed || initial;
}

export default function useSettingsHandler() {
    return useReducer(settingsReducer,{}, initSettings);
}

