import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  answers: string

  @Column()
  correct_answer: string

  @Column(CreateDateColumn)
  created_at: Date

  @Column(UpdateDateColumn)
  updated_at: Date
}

export default Recipe
