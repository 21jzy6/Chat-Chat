import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// ------------------ Layout Config ------------------

// Layout
const isHiddenSideAtom = atomWithStorage('isHiddenSide', false);

// ------------------ Conversation Config ------------------

// Conversation Config
const isSendKeyEnterAtom = atomWithStorage('enterKeySend', true);
const enableStreamMessagesAtom = atomWithStorage<boolean>('enableStreamMessages', true);
const systemPromptContentAtom = atomWithStorage('systemPrompt', '');
const enableSystemPrompt = atomWithStorage('enableSystemPrompt', false);
const enablePluginsAtom = atomWithStorage('enablePlugins', false);
const contextModeAtom = atomWithStorage<{
    enable: boolean;
    contextCount: number;
}>('context-mode', {
    enable: false,
    contextCount: 0,
});
const enableUserMarkdownRenderAtom = atomWithStorage<boolean>('enableUserMarkdownRender', false);

// Text to Speech Config
const textToSpeechConfigAtom = atomWithStorage('textToSpeechConfig', {
    voice: '',
    speed: 1.0,
    pitch: 1.0,
});

const autoSpeechAtom = atomWithStorage('autoSpeech', false);

// Search Config
const searchConfigAtom = atomWithStorage('searchConfig', {
    searchEngine: 'pse',
    searchEngineID: '',
    searchAPIKey: '',
});

// File Config
const fileConfigAtom = atomWithStorage<{
    enable: boolean;
    files: string[];
}>('fileConfig', {
    enable: false,
    files: [],
});

const enableFileAtom = atom((get) => get(fileConfigAtom).enable);
const filesAtom = atom((get) => get(fileConfigAtom).files);

// ------------------ App Config ------------------

const serviceProviderAtom = atomWithStorage<ServiceProviderProps>('serviceProvider', 'OpenAI');

// OpenAI Config
const useCloudSettingsAtom = atomWithStorage('useCloudSettings', false);

const openAIConfigAtom = atomWithStorage<OpenAIConfigProps>('openAIConfig', {
    apiKey: '',
    apiEndpoint: '',
    apiModel: 'gpt-3.5-turbo',
    apiTemperature: 0.3,
});

// Azure Config
const azureConfigAtom = atomWithStorage('azureConfig', {
    apiKey: '',
    apiEndpoint: '',
    apiModel: 'gpt-4',
    apiTemperature: 0.3,
    apiDeploymentName: '',
});

// Team Config
const teamConfigAtom = atomWithStorage('teamConfig', {
    accessCode: '',
});

// Hugging Face Config
const huggingFaceConfigAtom = atomWithStorage('huggingFaceConfig', {
    huggingFaceModel: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    accessToken: '',
});

// Cohere Config
const cohereConfigAtom = atomWithStorage('cohereConfig', {
    model: 'command-nightly',
    apiKey: '',
});

// Claude Config
const claudeConfigAtom = atomWithStorage('claudeConfig', {
    apiKey: '',
    apiModel: 'claude-instant-1',
    apiTemperature: 1.0,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    isHiddenSideAtom,
    isSendKeyEnterAtom,
    enableStreamMessagesAtom,
    fileConfigAtom,
    enableFileAtom,
    filesAtom,
    systemPromptContentAtom,
    enableSystemPrompt,
    enablePluginsAtom,
    contextModeAtom,
    enableUserMarkdownRenderAtom,
    textToSpeechConfigAtom,
    autoSpeechAtom,
    searchConfigAtom,
    serviceProviderAtom,
    useCloudSettingsAtom,
    openAIConfigAtom,
    azureConfigAtom,
    teamConfigAtom,
    huggingFaceConfigAtom,
    cohereConfigAtom,
    claudeConfigAtom,
};
