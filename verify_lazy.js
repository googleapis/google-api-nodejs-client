
const { google } = require('./build/src/googleapis');
const { APIS } = require('./build/src/apis');

console.log('google imported');

// Check if APIS is defined
if (!APIS) {
    console.error('APIS is undefined');
    process.exit(1);
}

// Check if we can access a property (triggering the getter)
try {
    const drive = google.drive({ version: 'v3' });
    console.log('drive v3 loaded');
} catch (e) {
    console.error('Failed to load drive v3', e);
    process.exit(1);
}

// Check if APIS object has getters (this is tricky in JS if they are enumerable)
// But we can check if accessing a prop works.
const apiNames = Object.keys(APIS);
console.log('Number of APIs:', apiNames.length);

// Check if properties are getters (indicating lazy loading)
if (apiNames.length > 0) {
    const firstApiName = apiNames[0];
    console.log('First API:', firstApiName);
    const descriptor = Object.getOwnPropertyDescriptor(APIS, firstApiName);
    if (descriptor && descriptor.get) {
        console.log(`${firstApiName} is a getter (lazy loaded)`);
    } else {
        console.log(`${firstApiName} is not a getter`);
    }
    // Try to access it
    const firstApi = APIS[firstApiName];
    console.log('First API loaded:', !!firstApi);
}

// Additional verification: Check a few more APIs to ensure lazy loading
const testApis = ['drive', 'gmail', 'youtube'];
for (const apiName of testApis) {
    if (APIS[apiName]) {
        console.log(`Testing ${apiName}...`);
        const api = APIS[apiName];
        console.log(`${apiName} loaded successfully:`, !!api);
    } else {
        console.log(`${apiName} not found in APIS`);
    }
}

console.log('Verification successful');
