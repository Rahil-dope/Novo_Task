// import { supabase, getCurrentUser, isAuthenticated } from './auth.js'; // Removed
import { addNotification } from './notifications.js';

/**
 * Supabase Database Operations for Tasks
 * Handles CRUD operations for user-specific tasks
 * 
 * NOTE: Cloud sync is currently disabled as authentication system has been removed.
 */

const TABLE_NAME = 'tasks';

export async function fetchTasksFromSupabase() {
    console.warn('Cloud sync disabled: Authentication removed');
    return [];
}

export async function saveTaskToSupabase(task) {
    console.warn('Cloud sync disabled: Authentication removed');
    return null;
}

export async function deleteTaskFromSupabase(taskId) {
    return false;
}

export async function deleteAllTasksFromSupabase() {
    return false;
}

export async function syncLocalTasksToSupabase(tasks) {
    console.warn('Cloud sync disabled: Authentication removed');
    return false;
}

export function isSupabaseSyncAvailable() {
    return false;
}
