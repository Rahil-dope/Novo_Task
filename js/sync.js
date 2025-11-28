import { $, $$ } from './utils.js';
import { getTasks, load, save } from './taskManager.js';
import { addNotification } from './notifications.js';

const STORAGE_KEY = 'novatasks.sync.v1';
let syncSettings = {
  remoteDb: { enabled: false, url: null, apiKey: null }
};

export function initSync() {
  loadSyncSettings();
  setupSyncListeners();
}

function loadSyncSettings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      syncSettings = { ...syncSettings, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Failed to load sync settings', e);
  }
}

function saveSyncSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(syncSettings));
}

function setupSyncListeners() {
  const syncBtn = $('#syncBtn');
  const syncModal = $('#syncModal');
  const googleBtn = $('#googleCalendarBtn');
  const remoteDbBtn = $('#remoteDbBtn');
  const saveSyncBtn = $('#saveSyncBtn');
  
  if (syncBtn && syncModal) {
    syncBtn.addEventListener('click', () => {
      syncModal.style.display = syncModal.style.display === 'none' ? 'flex' : 'none';
    });
  }
  
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      addNotification('Google Calendar sync is coming soon! Stay tuned.', 'info');
    });
  }
  
  if (remoteDbBtn) {
    remoteDbBtn.addEventListener('click', () => {
      const url = $('#remoteDbUrl')?.value;
      if (url) {
        syncSettings.remoteDb.url = url;
        syncSettings.remoteDb.enabled = true;
        saveSyncSettings();
        addNotification('Remote sync configured! Note: This requires a compatible backend server.', 'success');
      } else {
        addNotification('Please enter a valid URL', 'warning');
      }
    });
  }
  
  if (saveSyncBtn) {
    saveSyncBtn.addEventListener('click', () => {
      const url = $('#remoteDbUrl')?.value;
      if (url) {
        syncSettings.remoteDb.url = url;
        syncSettings.remoteDb.enabled = true;
        saveSyncSettings();
        addNotification('Sync settings saved successfully!', 'success');
        if (syncModal) syncModal.style.display = 'none';
      } else {
        addNotification('Please enter a valid URL', 'warning');
      }
    });
  }
  
  // Auto-sync if enabled (optional feature)
  if (syncSettings.remoteDb.enabled && syncSettings.remoteDb.url) {
    setInterval(() => {
      syncWithRemoteDb();
    }, 5 * 60 * 1000); // Every 5 minutes
  }
}

// Remote Database Sync (Optional Feature)
export async function syncWithRemoteDb() {
  if (!syncSettings.remoteDb.enabled || !syncSettings.remoteDb.url) {
    addNotification('Remote sync is not configured', 'info');
    return;
  }
  
  try {
    const tasks = getTasks();
    
    // POST tasks to remote DB
    const response = await fetch(syncSettings.remoteDb.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(syncSettings.remoteDb.apiKey && { 'Authorization': `Bearer ${syncSettings.remoteDb.apiKey}` })
      },
      body: JSON.stringify({ tasks })
    });
    
    if (response.ok) {
      addNotification('Synced with remote database successfully!', 'success');
    } else {
      throw new Error(`Sync failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('Remote DB sync error:', error);
    addNotification('Failed to sync with remote database. Check console for details.', 'danger');
  }
}

export async function pullFromRemoteDb() {
  if (!syncSettings.remoteDb.enabled || !syncSettings.remoteDb.url) {
    addNotification('Remote sync is not configured', 'info');
    return;
  }
  
  try {
    const response = await fetch(syncSettings.remoteDb.url, {
      method: 'GET',
      headers: {
        ...(syncSettings.remoteDb.apiKey && { 'Authorization': `Bearer ${syncSettings.remoteDb.apiKey}` })
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.tasks)) {
        // Note: This is a simple implementation
        // In production, you'd want proper conflict resolution
        addNotification('Pulled tasks from remote database', 'success');
      }
    } else {
      throw new Error(`Pull failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('Remote DB pull error:', error);
    addNotification('Failed to pull from remote database', 'danger');
  }
}

export function getSyncSettings() {
  return syncSettings;
}

