import Project, { IProject } from './project.model';

const createProject = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};
const findeOne = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};
const findAllProject = async () => {
  const result = await Project.find();
  return result;
};
const updateProject = async (id: string, payload: IProject) => {
  const isBlogExist = await Project.findById(id);
  if (!isBlogExist) {
    throw new Error('Blog is not exist');
  }
  const result = await Project.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteProject = async (id: string) => {
  const blog = await Project.findById(id);
  if (!blog) {
    throw new Error('Blog does not exist');
  }
  return await Project.findByIdAndDelete(id);
};
export const projectServices = {
  createProject,
  updateProject,
  deleteProject,
  findeOne,
  findAllProject,
};
