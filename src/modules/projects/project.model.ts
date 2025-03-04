import { model, Schema } from 'mongoose';

export interface IProject {
  title: string;
  image: string;
  liveLink: string;
  description: string;
  technologies: string[]; // Array of technology names
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    liveLink: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

const Project = model<IProject>('Project', projectSchema);

export default Project;
