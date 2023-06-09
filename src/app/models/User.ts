import { Entity, Column, PrimaryColumn, Generated, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from 'bcryptjs'

@Entity('users')
export class User {
  @PrimaryColumn({type:"uuid"})
  @Generated("uuid") 
  id: string;
    
  @Column({length: 100})
  email: string

  @Column()
  password: string;


  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}