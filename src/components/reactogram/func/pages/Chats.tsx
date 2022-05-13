import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import style from '../main.module.scss';
import { ChatArea } from '../Chat/chatArea';
import { Input } from '../Input/input';
import { ChatList } from '../ChatList/ChatList';

import { shallowEqual, useDispatch, useSelector} from 'react-redux';
import { selectChatList, selectChats } from '../store/chats/selectors';

export const Chats: FC = () => {
  const { chaiId } = useParams();

  const dispatch = useDispatch();

  const msg = useSelector(selectChats, shallowEqual);
  const chatlist = useSelector(selectChatList, shallowEqual);

  //TODO
  // useEffect(() => {
  //   if (
  //     chaiId &&
  //     msg[chaiId]?.length > 0 &&
  //     msg[chaiId][msg[chaiId].length - 1].author !== AUTHOR.bot
  //   ) {
  //     const timer = setTimeout(() => {
  //       setMsg({
  //         ...msg,
  //         [chaiId]: [
  //           ...msg[chaiId],
  //           {
  //             id: nanoid(),
  //             author: AUTHOR.bot,
  //             time: createCurrentTime(),
  //             msg: `I am ${AUTHOR.bot}`,
  //           },
  //         ],
  //       });
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [msg]);

  if (chaiId && !msg[chaiId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <div className={style.home} data-testid="home-test-id">
        <div className={style.action__block}>
          <ChatArea msg={chaiId ? msg[chaiId] : []} />
          <Input />
        </div>
      </div>
    </>
  );
};
