// auth.js
import { auth, db } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { 
    doc, 
    setDoc, 
    getDoc,
    updateDoc,
    arrayUnion,
    serverTimestamp 
} from 'firebase/firestore';

// Global auth state
let currentUser = null;

// Auth state observer
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    updateAuthUI(user);
    if (user) {
        loadUserProgress(user.uid);
    }
});

// Check authentication state
window.checkAuthState = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            currentUser = user;
            updateAuthUI(user);
            if (user) {
                loadUserProgress(user.uid).then(resolve);
            } else {
                resolve();
            }
        });
    });
};

// Update UI based on auth state
function updateAuthUI(user) {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const dashboardLink = document.getElementById('dashboard-link');
    
    if (user) {
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
        dashboardLink.style.display = 'block';
        
        const avatar = document.getElementById('user-avatar');
        const name = document.getElementById('user-name');
        
        avatar.textContent = user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
        name.textContent = user.displayName || user.email.split('@')[0];
        
        // Update app state
        if (window.appState) {
            appState.setState({
                currentUser: {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
            });
        }
    } else {
        authButtons.style.display = 'flex';
        userInfo.style.display = 'none';
        dashboardLink.style.display = 'none';
        
        // Clear app state
        if (window.appState) {
            appState.setState({
                currentUser: null,
                userProgress: {
                    completedActivities: 0,
                    videosWatched: 0,
                    achievementsEarned: 0,
                    learningStreak: 0,
                    gradeProgress: { '8': 0, '9': 0, '10': 0, '11': 0, '12': 0 },
                    videoProgress: { '8': {}, '9': {}, '10': {}, '11': {}, '12': {} },
                    quizProgress: { '8': {}, '9': {}, '10': {}, '11': {}, '12': {} },
                    achievements: [],
                    lastLoginDate: null
                }
            });
        }
    }
}

// Show auth modal
window.showAuthModal = (mode) => {
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-modal-title');
    const submitBtn = document.getElementById('auth-submit');
    const switchText = document.getElementById('auth-switch-text');
    const switchLink = document.getElementById('auth-switch-link');
    const nameGroup = document.getElementById('name-group');
    const gradeGroup = document.getElementById('grade-group');
    const form = document.getElementById('auth-form');
    
    // Clear form
    form.reset();
    document.getElementById('auth-error').style.display = 'none';
    
    if (mode === 'signup') {
        title.textContent = 'Sign Up';
        submitBtn.textContent = 'Sign Up';
        switchText.innerHTML = 'Already have an account? <a href="#" onclick="event.preventDefault(); toggleAuthMode()" id="auth-switch-link">Login</a>';
        nameGroup.style.display = 'block';
        gradeGroup.style.display = 'block';
        form.dataset.mode = 'signup';
    } else {
        title.textContent = 'Login';
        submitBtn.textContent = 'Login';
        switchText.innerHTML = 'Don\'t have an account? <a href="#" onclick="event.preventDefault(); toggleAuthMode()" id="auth-switch-link">Sign up</a>';
        nameGroup.style.display = 'none';
        gradeGroup.style.display = 'none';
        form.dataset.mode = 'login';
    }
    
    modal.classList.remove('hidden');
};

// Hide auth modal
window.hideAuthModal = () => {
    document.getElementById('auth-modal').classList.add('hidden');
};

// Toggle auth mode
window.toggleAuthMode = () => {
    const form = document.getElementById('auth-form');
    const currentMode = form.dataset.mode;
    window.showAuthModal(currentMode === 'login' ? 'signup' : 'login');
};

// Handle auth form submission
document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const mode = form.dataset.mode;
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value;
    const grade = document.getElementById('auth-grade').value;
    const errorDiv = document.getElementById('auth-error');
    const submitBtn = document.getElementById('auth-submit');
    
    // Show loading state
    submitBtn.textContent = mode === 'signup' ? 'Creating Account...' : 'Signing In...';
    submitBtn.disabled = true;
    errorDiv.style.display = 'none';
    
    try {
        if (mode === 'signup') {
            // Create user account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Update profile with name
            if (name) {
                await updateProfile(user, { displayName: name });
            }
            
            // Create user document in Firestore
            await createUserProfile(user.uid, {
                email: user.email,
                displayName: name,
                grade: grade,
                createdAt: serverTimestamp(),
                lastLoginDate: serverTimestamp(),
                userProgress: {
                    completedActivities: 0,
                    videosWatched: 0,
                    achievementsEarned: 0,
                    learningStreak: 0,
                    gradeProgress: { '8': 0, '9': 0, '10': 0, '11': 0, '12': 0 },
                    videoProgress: { '8': {}, '9': {}, '10': {}, '11': {}, '12': {} },
                    quizProgress: { '8': {}, '9': {}, '10': {}, '11': {}, '12': {} },
                    achievements: [],
                    currentGrade: grade
                }
            });
            
            hideAuthModal();
            router.navigate('/dashboard');
            
        } else {
            // Sign in existing user
            await signInWithEmailAndPassword(auth, email, password);
            
            // Update last login
            await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                lastLoginDate: serverTimestamp()
            });
            
            hideAuthModal();
            router.navigate('/dashboard');
        }
        
    } catch (error) {
        errorDiv.textContent = getErrorMessage(error.code);
        errorDiv.style.display = 'block';
        console.error('Auth error:', error);
    } finally {
        submitBtn.textContent = mode === 'signup' ? 'Sign Up' : 'Login';
        submitBtn.disabled = false;
    }
});

// Sign out
window.signOut = async () => {
    try {
        await firebaseSignOut(auth);
        router.navigate('/');
    } catch (error) {
        console.error('Sign out error:', error);
    }
};

// Create user profile in Firestore
async function createUserProfile(userId, userData) {
    try {
        await setDoc(doc(db, 'users', userId), userData);
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
}

// Load user progress from Firestore
async function loadUserProgress(userId) {
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (window.appState && userData.userProgress) {
                appState.setState({
                    userProgress: userData.userProgress
                });
            }
        }
    } catch (error) {
        console.error('Error loading user progress:', error);
    }
}

// Save user progress to Firestore
window.saveUserProgress = async (progressData) => {
    if (!currentUser) return;
    
    try {
        await updateDoc(doc(db, 'users', currentUser.uid), {
            userProgress: progressData,
            lastUpdated: serverTimestamp()
        });
    } catch (error) {
        console.error('Error saving user progress:', error);
    }
};

// Mark video as completed
window.markVideoCompleted = async (grade, moduleIndex, videoIndex) => {
    if (!currentUser) return;
    
    try {
        const progressUpdate = {};
        progressUpdate[`userProgress.videoProgress.${grade}.${moduleIndex}-${videoIndex}`] = true;
        progressUpdate[`userProgress.videosWatched`] = appState.userProgress.videosWatched + 1;
        
        await updateDoc(doc(db, 'users', currentUser.uid), progressUpdate);
        
        // Update local state
        appState.markVideoCompleted(grade, moduleIndex, videoIndex);
        
    } catch (error) {
        console.error('Error marking video completed:', error);
    }
};

// Mark quiz as completed
window.markQuizCompleted = async (grade, moduleIndex, score) => {
    if (!currentUser) return;
    
    try {
        const progressUpdate = {};
        progressUpdate[`userProgress.quizProgress.${grade}.${moduleIndex}`] = score;
        
        await updateDoc(doc(db, 'users', currentUser.uid), progressUpdate);
        
        // Update local state
        appState.markQuizCompleted(grade, moduleIndex, score);
        
    } catch (error) {
        console.error('Error marking quiz completed:', error);
    }
};

// Add achievement
window.addAchievement = async (achievementId) => {
    if (!currentUser) return;
    
    try {
        await updateDoc(doc(db, 'users', currentUser.uid), {
            'userProgress.achievements': arrayUnion(achievementId),
            'userProgress.achievementsEarned': appState.userProgress.achievementsEarned + 1
        });
        
        // Update local state
        appState.userProgress.achievements.push(achievementId);
        appState.userProgress.achievementsEarned += 1;
        appState.notify();
        
    } catch (error) {
        console.error('Error adding achievement:', error);
    }
};

// Get user-friendly error messages
function getErrorMessage(errorCode) {
    const errorMessages = {
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
        'auth/popup-closed-by-user': 'Sign-in popup was closed.',
        'auth/cancelled-popup-request': 'Sign-in was cancelled.',
        'auth/popup-blocked': 'Sign-in popup was blocked by your browser.'
    };
    
    return errorMessages[errorCode] || 'An error occurred. Please try again.';
}

// Export for use in other modules
window.currentUser = currentUser;
window.auth = auth;
window.db = db;
