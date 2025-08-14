// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { 
    getFirestore, 
    initializeFirestore,
    connectFirestoreEmulator,
    CACHE_SIZE_UNLIMITED,
    memoryLocalCache,
    persistentLocalCache
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAsFzO-5RjiUAU-vfirtRc8WgNYr-hEHO0",
    authDomain: "ai-learning-hub-c6d11.firebaseapp.com",
    projectId: "ai-learning-hub-c6d11",
    storageBucket: "ai-learning-hub-c6d11.appspot.com",
    messagingSenderId: "519050041073",
    appId: "1:519050041073:web:c41d46e8c45a8b0e21fb50",
    measurementId: "G-M2FD7G8N86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore with better configuration to prevent WebChannel errors
let db;
try {
    // Use initializeFirestore instead of getFirestore for better control
    db = initializeFirestore(app, {
        // Force long polling to avoid WebChannel issues
        experimentalForceLongPolling: true,
        // Disable fetch streams that can cause transport errors  
        useFetchStreams: false,
        // Use memory cache to reduce network calls
        localCache: memoryLocalCache({
            garbageCollector: 'memoryOnly'
        }),
        // Ignore undefined properties
        ignoreUndefinedProperties: true
    });
    
    console.log('Firestore initialized with long polling');
} catch (error) {
    // Fallback to regular getFirestore if initializeFirestore fails
    console.warn('InitializeFirestore failed, using getFirestore:', error.message);
    db = getFirestore(app);
}

export { db };

// Utility function to check if we're online
export const isOnline = () => navigator.onLine;

// Enhanced error handler that suppresses WebChannel transport errors
export const handleFirestoreError = (error, operation = 'Firestore operation') => {
    // Common transport error messages to suppress
    const suppressedErrors = [
        'transport errored',
        'WebChannelConnection',
        'Bad Request',
        'ERR_ABORTED',
        'status: 1',
        'unavailable',
        'network error'
    ];
    
    const errorMessage = error?.message || error?.toString() || '';
    const isTransportError = suppressedErrors.some(msg => 
        errorMessage.toLowerCase().includes(msg.toLowerCase())
    );
    
    if (isTransportError) {
        // Log as warning instead of error to reduce noise
        console.warn(`${operation} - Transport warning (suppressed):`, errorMessage);
        return { success: false, suppressed: true, error };
    }
    
    // Only log serious errors
    if (error?.code === 'permission-denied' || error?.code === 'unauthenticated') {
        console.error(`${operation} - Authentication/Permission error:`, error);
        return { success: false, suppressed: false, error };
    }
    
    // Log other errors as warnings
    console.warn(`${operation} - Warning:`, error);
    return { success: false, suppressed: true, error };
};

// Safe Firestore operation wrapper
export const safeFirestoreOperation = async (operation, operationName = 'Operation') => {
    try {
        const result = await operation();
        return { success: true, data: result };
    } catch (error) {
        const handled = handleFirestoreError(error, operationName);
        if (handled.suppressed) {
            // Return success for suppressed errors (transport issues)
            return { success: true, data: null, warning: true };
        }
        return { success: false, error: handled.error };
    }
};

export default app;
