import firebase from "firebase"



export const fsCreatedTimeStamp = { createdAt:  firebase.firestore.Timestamp.now()  };

export const covertTimeStampToString = doc => ({ createdAt: JSON.stringify(doc.createdAt) });


export const parseTimeAStamp = (createdAt: string) => {
    const { seconds } = JSON.parse(createdAt);
    return new Date(seconds * 1000).toDateString();
}