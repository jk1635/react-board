// Actions
const LOAD = "post/LOAD";
const CREATE = "post/CREATE";

const initialState = {
  post_list: [
    {
      id: "list_0",
      title: "제목",
      writer: "쓰니",
      contents: "내용",
    },
  ],
};

// Action Creators
export const loadPost = (post_list) => {
  return { type: LOAD, post_list };
};

export const createPost = (post) => {
  return { type: CREATE, post };
};

// // Middle
// export const loadPostFB = () => {
//   return function (dispatch) {
//     post_db.get().then((docs) => {
//       let post_data = [];

//       docs.forEach((doc) => {
//         if (doc.exists) {
//           post_data = [...post_data, { id: doc.id, ...doc.data() }];
//         }
//       });

//       console.log(post_data);
//       dispatch(loadPost(post_data));
//     });
//   };
// };

// export const addPostFB = (_title, _writer, _contents) => {
//   return function (dispatch) {
//     let post_data = {
//       title: _title,
//       writer: _writer,
//       contents: _contents,
//     };
//     // add()에 데이터를 넘겨줍시다!
//     post_db.add(post_data).then((docRef) => {
//       // id를 추가한다!
//       post_data = { ...post_data, id: docRef.id };
//       dispatch(createPost(post_data));
//     });
//   };
// };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD":
      return state;

    case "post/CREATE":
      const new_post_list = [...state.post_list, action.post];

      return { ...state, post_list: new_post_list };

    default:
      return state;
  }
}
