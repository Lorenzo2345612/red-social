import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, user => user.posts)
    autor: User;
    @Column()
    date: Date;
    @Column()
    content: string;

    comments: any[];
}
