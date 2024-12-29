import { Message } from "./message";
import { User } from "./user";

export interface Session {
    id: number;
    name: string;
    users: User[];
    messages: Message[];
}
