import DashBoard from './Dashboard'
import ChatsList from './chats/ChatsList';
import UsersList from './users/UsersList';
import UsersShow from './users/UsersShow';

const chats = {
    list: ChatsList
}

const users = {
    list: UsersList,
    show: UsersShow
}

export default {
    chats,
    users,
    DashBoard
}