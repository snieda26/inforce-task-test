import { IComment } from './commentInterface';

export interface IProduct {
    id?: number;
    imageUrl: string;
    name: string;
    count: number;
    size: {
        width: number;
        height: number;
    },
    weight: string;
    comments?: IComment[];
};
