// auth.js
import { auth, db, handleFirestoreError, safeFirestoreOperation } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut, 
    onAuthStateChanged, 
    updateProfile 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    arrayUnion, 
    serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Global auth state
let currentUser = null;
let authStateInitialized = false;

// Auth state observer
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    authStateInitialized = true;
    updateAuthUI(user);
    if (user) {
        loadUserProgress(user.uid);
    }
});

// Check authentication state
window.checkAuthState = () => {
    return new Promise((resolve) => {
        if (authStateInitialized) {
            resolve(currentUser);
            return;
        }
        
        const timeout = setTimeout(() => {
            console.warn('Auth state check timed out');
            resolve(null);
        }, 3000);
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            clearTimeout(timeout);
            currentUser = user;
            authStateInitialized = true;
            updateAuthUI(user);
            unsubscribe();
            resolve(user);
        });
    });
};

// Update UI based on auth state
function updateAuthUI(user) {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const dashboardLink = document.getElementById('dashboard-link');

    if (!authButtons || !userInfo) return;

    if (user) {
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
        if (dashboardLink) dashboardLink.style.display = 'block';

        const avatar = document.getElementById('user-avatar');
        const name = document.getElementById('user-name');
        
        if (avatar && name) {
            avatar.textContent = user.displayName ? 
                user.displayName.charAt(0).toUpperCase() : 
                user.email.charAt(0).toUpperCase();
            name.textContent = user.displayName || user.email.split('@')[0];
        }

        // Update app state
        if (window.appState) {
            window.appState.setState({
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
        if (dashboardLink) dashboardLink.style.display = 'none';

        // Clear app state
        if (window.appState) {
            window.appState.setState({
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
    forceCloseModal();
    setTimeout(() => {
        createAuthModal();
        showModalWithMode(mode);
    }, 100);
};

// Force close modal
function forceCloseModal() {
    const existingModal = document.getElementById('auth-modal');
    if (existingModal) {
        existingModal.remove();
    }
    document.body.style.overflow = '';
}

// Show modal with specific mode
function showModalWithMode(mode) {
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-modal-title');
    const submitBtn = document.getElementById('auth-submit');
    const switchText = document.getElementById('auth-switch-text');
    const nameGroup = document.getElementById('name-group');
    const gradeGroup = document.getElementById('grade-group');
    const form = document.getElementById('auth-form');

    if (!modal || !form) return;

    form.reset();
    const errorDiv = document.getElementById('auth-error');
    if (errorDiv) errorDiv.style.display = 'none';

    if (mode === 'signup') {
        title.textContent = 'Sign Up';
        submitBtn.textContent = 'Sign Up';
        switchText.innerHTML = 'Already have an account? <a href="#" onclick="showAuthModal(\'login\')">Login</a>';
        nameGroup.style.display = 'block';
        gradeGroup.style.display = 'block';
        form.dataset.mode = 'signup';
    } else {
        title.textContent = 'Login';
        submitBtn.textContent = 'Login';
        switchText.innerHTML = 'Don\'t have an account? <a href="#" onclick="showAuthModal(\'signup\')">Sign up</a>';
        nameGroup.style.display = 'none';
        gradeGroup.style.display = 'none';
        form.dataset.mode = 'login';
    }

    modal.classList.remove('hidden');
}

// Create auth modal
function createAuthModal() {
    const modalHTML = `
        <div id="auth-modal" class="modal hidden">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="auth-modal-title">Login</h2>
                    <button class="modal-close" onclick="hideAuthModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="auth-form" data-mode="login">
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" id="auth-email" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" id="auth-password" class="form-control" required>
                        </div>

                        <div class="form-group" id="name-group" style="display: none;">
                            <label class="form-label">Full Name</label>
                            <input type="text" id="auth-name" class="form-control">
                        </div>

                        <div class="form-group" id="grade-group" style="display: none;">
                            <label class="form-label">Grade Level</label>
                            <select id="auth-grade" class="form-control">
                                <option value="">Select Grade</option>
                                <option value="8">Grade 8</option>
                                <option value="9">Grade 9</option>
                                <option value="10">Grade 10</option>
                                <option value="11">Grade 11</option>
                                <option value="12">Grade 12</option>
                            </select>
                        </div>

                        <div id="auth-error" class="status status--error" style="display: none;"></div>
                        <div id="auth-success" class="status status--success" style="display: none;"></div>

                        <button type="submit" id="auth-submit" class="btn btn-primary btn--full-width">Login</button>
                    </form>
                    
                    <p class="text-center mt-16" id="auth-switch-text">
                        Don't have an account? <a href="#" onclick="showAuthModal('signup')">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const form = document.getElementById('auth-form');
    if (form) {
        form.addEventListener('submit', handleAuthSubmit);
    }
}

// Hide auth modal
window.hideAuthModal = () => {
    forceCloseModal();
};

// Handle auth form submission with immediate success response
async function handleAuthSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const mode = form.dataset.mode;
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value.trim();
    const grade = document.getElementById('auth-grade').value;
    
    const errorDiv = document.getElementById('auth-error');
    const successDiv = document.getElementById('auth-success');
    const submitBtn = document.getElementById('auth-submit');
    
    if (!email || !password) {
        showError('Please fill in all required fields');
        return;
    }
    
    if (mode === 'signup' && !name) {
        showError('Please enter your full name');
        return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = mode === 'signup' ? 'Creating Account...' : 'Signing In...';
    submitBtn.disabled = true;
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';

    try {
        if (mode === 'signup') {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (name) {
                await updateProfile(user, { displayName: name });
            }

            // Show immediate success
            showSuccess('Account created successfully!');
            
            // Close modal quickly
            setTimeout(() => {
                forceCloseModal();
                if (window.router) {
                    window.router.navigate('/dashboard');
                }
            }, 500);

            // Create user profile in background (ignore errors)
            safeFirestoreOperation(async () => {
                await setDoc(doc(db, 'users', user.uid), {
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
            }, 'Create user profile');

        } else {
            await signInWithEmailAndPassword(auth, email, password);
            
            showSuccess('Signed in successfully!');
            
            setTimeout(() => {
                forceCloseModal();
                if (window.router) {
                    window.router.navigate('/dashboard');
                }
            }, 500);

            // Update last login in background (ignore errors)
            if (auth.currentUser) {
                safeFirestoreOperation(async () => {
                    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                        lastLoginDate: serverTimestamp()
                    });
                }, 'Update last login');
            }
        }

    } catch (error) {
        console.error('Auth error:', error);
        showError(getErrorMessage(error.code));
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }

    function showError(message) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
    }
    
    function showSuccess(message) {
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        errorDiv.style.display = 'none';
    }
}

// Sign out
window.signOut = async () => {
    try {
        await firebaseSignOut(auth);
        if (window.router) {
            window.router.navigate('/');
        }
    } catch (error) {
        console.error('Sign out error:', error);
    }
};

// Load user progress with safe operation
async function loadUserProgress(userId) {
    const result = await safeFirestoreOperation(async () => {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (window.appState && userData.userProgress) {
                window.appState.setState({
                    userProgress: userData.userProgress
                });
            }
        }
    }, 'Load user progress');
}

// Safe save user progress
window.saveUserProgress = async (progressData) => {
    if (!currentUser) return;

    await safeFirestoreOperation(async () => {
        await updateDoc(doc(db, 'users', currentUser.uid), {
            userProgress: progressData,
            lastUpdated: serverTimestamp()
        });
    }, 'Save user progress');
};

// Safe mark video completed
window.markVideoCompleted = async (grade, moduleIndex, videoIndex) => {
    if (!currentUser) return;

    const result = await safeFirestoreOperation(async () => {
        const progressUpdate = {};
        progressUpdate[`userProgress.videoProgress.${grade}.${moduleIndex}-${videoIndex}`] = true;
        progressUpdate[`userProgress.videosWatched`] = (window.appState?.userProgress?.videosWatched || 0) + 1;

        await updateDoc(doc(db, 'users', currentUser.uid), progressUpdate);
    }, 'Mark video completed');

    // Update local state regardless of Firestore success
    if (window.appState) {
        window.appState.markVideoCompleted(grade, moduleIndex, videoIndex);
    }
};

// Safe mark quiz completed
window.markQuizCompleted = async (grade, moduleIndex, score) => {
    if (!currentUser) return;

    const result = await safeFirestoreOperation(async () => {
        const progressUpdate = {};
        progressUpdate[`userProgress.quizProgress.${grade}.${moduleIndex}`] = score;
        await updateDoc(doc(db, 'users', currentUser.uid), progressUpdate);
    }, 'Mark quiz completed');

    // Update local state regardless of Firestore success
    if (window.appState) {
        window.appState.markQuizCompleted(grade, moduleIndex, score);
    }
};

// Safe add achievement
window.addAchievement = async (achievementId) => {
    if (!currentUser) return;

    const result = await safeFirestoreOperation(async () => {
        await updateDoc(doc(db, 'users', currentUser.uid), {
            'userProgress.achievements': arrayUnion(achievementId),
            'userProgress.achievementsEarned': (window.appState?.userProgress?.achievementsEarned || 0) + 1
        });
    }, 'Add achievement');

    // Update local state regardless of Firestore success
    if (window.appState) {
        window.appState.userProgress.achievements.push(achievementId);
        window.appState.userProgress.achievementsEarned += 1;
        window.appState.notify();
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
        'auth/invalid-credential': 'Invalid email or password.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
        'unavailable': 'Service temporarily unavailable. Please try again.',
        'permission-denied': 'Permission denied. Please try logging in again.'
    };
    
    return errorMessages[errorCode] || 'An error occurred. Please try again.';
}

// Export for use in other modules
window.currentUser = () => currentUser;
window.auth = auth;
window.db = db;
