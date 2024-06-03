const prefix = 'http://122.51.0.43';

export default{
    sendEmailCode:`${prefix}/api/common/sendEmailCode`,
    emailBinding:`${prefix}/api/common/emailBinding`,
    userLogin:`${prefix}/api/common/login`,
    userRegister:`${prefix}/api/common/register`,
    
    updateAvatar:`${prefix}/api/user/avatar`,
    getUserInfoDetail: `${prefix}/api/user/userInfo`, // 获取用户信息详情

    sendAddFriendRequest: `${prefix}/api/user/friend/apply`, // 申请好友

    // ------------------------- 会话 --------------------------------
    sendMsg: `${prefix}/api/chat/sendMsg`,
    getSessionList: `${prefix}/api/contact/page`, // 会话列表

    createGroup: `${prefix}/api/room/group`, // 新增群组
}
