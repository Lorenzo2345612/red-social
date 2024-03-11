import { Post } from "src/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    email: string;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    password: string;
    @Column({default: true})
    isActive: boolean;
    @OneToMany(() => Post, post => post.autor)
    posts: Post[];
}
