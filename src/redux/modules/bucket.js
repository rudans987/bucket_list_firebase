// bucket.js
import {db} from "../../firebase";
import { 
    collection, 
    getDoc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    doc, 
    deleteDoc
} from "firebase/firestore";


// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";
const LOADED = "bucket/LOADED";


const initialState = {  
    is_loaded: false,
    list: [],
};

// Action Creators
export function loadBucket(bucket_list) {
    
    return{type : LOAD, bucket_list};
}

export function createBucket(bucket) {
    
    return{type : CREATE, bucket: bucket,};
}

export function updateBucket(bucket_index) {
    return{type : UPDATE, bucket_index};
}

export function deleteBucket(bucket_index) {
        return{type : DELETE, bucket_index};// bucket_index === bucket_index: bucket_index 같은 의미
    }

export function isLoaded(loaded){
 return{ type : LOADED, loaded};
}


//middlewares
export const loadBucketFB = ()=> {
    return async function (dispatch) {
        const bucket_data = await getDocs(collection(db,"bucket")); 
        console.log(bucket_data);

        let bucket_list = [];
        bucket_data.forEach((a)=>{
            bucket_list.push({id: a.id, ...a.data()});
        });

        dispatch(loadBucket(bucket_list));
    }
}

export const createBucketFB = (bucket) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef =await addDoc(collection(db, "bucket"), bucket);
        // console.log((await getDoc(docRef)).data());
        // const _bucket = await getDoc(docRef);
        const bucket_data = {id: docRef.id, ...bucket};
        // console.log(bucket_data);

        dispatch(createBucket(bucket_data));
    }

}


export const updateBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        const docRef =doc(db, "bucket", bucket_id);
       await updateDoc(docRef, {completed: true});

       const _bucket_list = getState().bucket.list;
       const bucket_index = _bucket_list.findIndex((b)=>{
        return b.id === bucket_id
       })
       dispatch(updateBucket(bucket_index));
    }
}

export const deleteBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        if(!bucket_id){
            window.alert("아이디가 없네요!")
            return;
        }
        const docRef = doc(db, "bucket", bucket_id);
        await deleteDoc(docRef);

        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((b)=>{
         return b.id === bucket_id
        })
        dispatch(deleteBucket(bucket_index));

    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    // do reducer stuff 
    case "bucket/LOAD": {
        return {list: action.bucket_list, is_loaded: true};
    }

    case "bucket/CREATE": {
        const new_bucket_list = [...state.list,  action.bucket];
        console.log(new_bucket_list);
        return {...state, list : new_bucket_list, is_loaded: true};
    }

    case "bucket/UPDATE": {
        const new_bucket_list = state.list.map((cur, idx) => {
           if (parseInt(action.bucket_index) === idx){
            return{...cur, completed: true};
            }else{
                return cur;
            }
        });
        console.log({list: new_bucket_list});
        return {...state, list: new_bucket_list}
    }

    case "bucket/DELETE": {
        const new_bucket_list =state.list.filter((cur, idx)=>{
            console.log(parseInt(action.bucket_index)!== idx, parseInt(action.bucket_index), idx)
            return parseInt(action.bucket_index) !== idx;
        });
        console.log(new_bucket_list);
        return {...state, list : new_bucket_list};
    }

    case "bucket/LOADED": {
        return {...state, is_loaded: action.loaded };
    }


default: return state;
}
}

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }