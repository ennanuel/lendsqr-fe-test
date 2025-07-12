import { User } from "@/types/user.types";

const INDEXED_DB_NAME = 'UsersDB';
const DB_VERSION = 1;
const STORE_NAME = 'users';

export const openDatabase = () => new Promise<IDBDatabase>(function (resolve, reject) {
    const request = indexedDB.open(INDEXED_DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if(db.objectStoreNames.contains(STORE_NAME)) return;
        db.createObjectStore(STORE_NAME, { keyPath: '_id' });
    }

    request.onsuccess = (event: Event) => {
        resolve((event.target as IDBOpenDBRequest).result);
    }

    request.onerror = (event: Event) => {
        const error = (event.target as IDBRequest).error;
        reject(new Error(`IndexedDB connection failed: ${error?.message || 'Unknown error'}`));
    }
});

export const storeUsersArray = (users: User[]) => new Promise(async function(resolve, reject) {
    const db = await openDatabase();
    
    const transaction: IDBTransaction = db.transaction(STORE_NAME, 'readwrite');
    const store: IDBObjectStore = transaction.objectStore(STORE_NAME);

    const storeUsers = users.map(user => {
        return new Promise<void>((childResolve, childReject) => {
            const request: IDBRequest = store.put(user);

            request.onsuccess = () => childResolve();
            request.onerror = (event: Event) => {
                const error = (event.target as IDBRequest).error;
                childReject(new Error(`Failed to add user ${user._id}: ${error?.message || 'Unknown error'}`));
            };
        });
    });

    Promise
        .all(storeUsers)
        .then(() => {
            transaction.oncomplete = () => resolve(null);
            transaction.onerror = (event: Event) => {
                const error = (event.target as IDBTransaction).error;
                reject(new Error(`Transaction failed: ${error?.message || 'Unknown error'}`));
            };
        })
        .catch(error => reject(error));
});

export async function getSingleUser(userId: string): Promise<User | undefined> {
    const db = await openDatabase();
    const transaction: IDBTransaction = db.transaction(STORE_NAME, 'readonly');
    const store: IDBObjectStore = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
        const request: IDBRequest<User | undefined> = store.get(userId);

        request.onsuccess = (event: Event) => {
            resolve((event.target as IDBRequest).result);
        };

        request.onerror = (event: Event) => {
            const error = (event.target as IDBRequest).error;
            reject(new Error(`Failed to fetch user ${userId}: ${error?.message || 'Unknown error'}`));
        };
    });
};

export async function clearAllUsers(): Promise<void> {
    const db = await openDatabase();
    const transaction: IDBTransaction = db.transaction(STORE_NAME, 'readwrite');
    const store: IDBObjectStore = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
        const request: IDBRequest = store.clear();

        request.onsuccess = () => resolve();
        request.onerror = (event: Event) => {
            const error = (event.target as IDBRequest).error;
            reject(new Error(`Failed to clear all items: ${error?.message || 'Unknown error'}`));
        };
    });
}