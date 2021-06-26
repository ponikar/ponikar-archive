import firebase from 'firebase';

export const fsCreatedTimeStamp = {
    createdAt: firebase.firestore.Timestamp.now(),
};

export const covertTimeStampToString = (doc) => ({
    createdAt: JSON.stringify(doc.createdAt),
});

export const parseTimeAStamp = (createdAt: string) => {
    const { seconds } = JSON.parse(createdAt);
    return new Date(seconds * 1000).toDateString();
};

export const isRemoteURL = (url: string) => {
    return url && url.substr(0, 4) === 'http';
};

export const mapDocsWithTimeStamps = (
    docs: firebase.firestore.QueryDocumentSnapshot[]
) => {
    return docs.map((doc) => mapSingleDocWithTimeStamps(doc));
};

export const mapSingleDocWithTimeStamps = (
    doc: firebase.firestore.DocumentSnapshot
) => {
    const data = doc.data();
    return {
        ...data,
        ...covertTimeStampToString(data),
        id: doc.id,
    };
};

export const getDocuments = (ref: firebase.firestore.CollectionReference) => {
    return ref.orderBy('createdAt', 'desc');
};
