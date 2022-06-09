const admin = require('firebase-admin');
const fs = require('fs-extra');
const yaml = require('yamljs');
const serviceAccount = require("C:/flutterDev/quizzappDb/credentials.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const topics = [
    'angular',
    'flutter',
    'cf',
    'firebase',
    'firestore',
    'flutter',
    'rxjs',
    'js',
    'ts'
]


const update = async(id) => {

    const json = yaml.load(`topics/${id}.yaml`);

    console.log(JSON.stringify(json));

    const ref = db.collection('topics').doc(id);

    await ref.set(json, { merge: true });

    console.log('DONE');

}

for (const topic of topics) {
    update(topic);
}



