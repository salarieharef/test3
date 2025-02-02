import http from '../interceptor'

export const getCommentsByNewsId = async (id) => {
const result = await http.get(`/News/GetNewsComments?NewsId=${id}`);
    return result;
}

export const getCommentReplyByNewsId = async (id) => {
    const result = await http.get(`/News/GetRepliesComments?Id=${id}`);
    return result;
}

export const postLikeCommentById = async ({id, likeType}) => {
    const result = await http.post(`/News/CommentLike/${id}?LikeType=${likeType}`)
    return result;
}

export const postAddUserCommentById = async ({id, likeType}) => {
    const result = await http.post(`/News/CommentLike/${id}?LikeType=${likeType}`)
    return result;
}

export const postCommentUserById = async (obj) => {
    const res = await http.post("/News/CreateNewsComment", obj)
    return res;
}