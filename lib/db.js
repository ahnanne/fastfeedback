import { doc, setDoc, getFirestore } from 'firebase/firestore';

/** Initialize cloud firestore through firebase. */
const db = getFirestore();

/**
 * https://firebase.google.cn/docs/firestore/quickstart?hl=ko#web-version-9_1
 */
export async function createUser(uid, data) {
  return await setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true });
}
