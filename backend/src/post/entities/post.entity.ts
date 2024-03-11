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
    @OneToMany(() => PostStatus, postStatus => postStatus.posts)
    status: PostStatus;
}

@Entity()
export class PostStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string;
    @OneToMany(() => Post, post => post.status)
    posts: Post[];
}
