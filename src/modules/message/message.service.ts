import { TMessage } from './message.interface';
import Message from './message.model';

const createMessage = async (payload: TMessage) => {
  const result = await Message.create(payload);
  return result;
};
const findAllMessage = async () => {
  const result = await Message.find();
  return result;
};
export const messageService = {
  createMessage,
  findAllMessage,
};
